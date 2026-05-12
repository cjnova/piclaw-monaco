/**
 * post-compaction-prune.ts – Prune pre-compaction entries from session memory.
 *
 * After a successful compaction, entries before `firstKeptEntryId` are no longer
 * needed for LLM context (buildSessionContext skips them). They remain on disk
 * in the JSONL file for disaster recovery, but keeping them in memory (both in
 * the fileEntries array and byId Map) wastes 80-95% of session heap.
 *
 * This extension listens for `session_compact` and replaces heavy pre-compaction
 * entries with lightweight tombstones that preserve only tree structure (id + parentId).
 * This allows branch() to still traverse the tree but frees the bulk of the data.
 *
 * B1 in the RAM reduction plan.
 */
import type { ExtensionFactory } from "@earendil-works/pi-coding-agent";
import { createLogger } from "../utils/logger.js";

const log = createLogger("post-compaction-prune");

interface MinimalEntry {
  type: string;
  id: string;
  parentId?: string | null;
  [key: string]: unknown;
}

export const postCompactionPrune: ExtensionFactory = (pi) => {
  pi.on("session_compact", async (event, ctx) => {
    const { compactionEntry } = event;
    if (!compactionEntry?.firstKeptEntryId) return;

    // ctx.sessionManager is typed as ReadonlySessionManager but at runtime
    // is the full SessionManager with fileEntries and byId.
    const sessionManager = ctx.sessionManager as unknown as {
      fileEntries: MinimalEntry[];
      byId: Map<string, MinimalEntry>;
    };
    if (!sessionManager?.fileEntries || !sessionManager?.byId) return;

    const { fileEntries, byId } = sessionManager;
    const firstKeptId = compactionEntry.firstKeptEntryId;

    // Find the index of firstKeptEntryId in fileEntries
    let firstKeptIdx = -1;
    for (let i = 0; i < fileEntries.length; i++) {
      if (fileEntries[i].id === firstKeptId) {
        firstKeptIdx = i;
        break;
      }
    }
    if (firstKeptIdx <= 1) return; // nothing meaningful to prune (index 0 is session header)

    let prunedCount = 0;

    // Replace pre-firstKeptEntry entries with lightweight tombstones.
    // Keep index 0 (session header) and any entries that are already minimal.
    for (let i = 1; i < firstKeptIdx; i++) {
      const entry = fileEntries[i];
      if (entry.type === "pruned") continue; // already pruned

      // Create tombstone preserving tree structure for branch() traversal
      const tombstone: MinimalEntry = {
        type: "pruned",
        id: entry.id,
        parentId: entry.parentId ?? null,
      };

      fileEntries[i] = tombstone;
      byId.set(entry.id, tombstone);
      prunedCount++;
    }

    if (prunedCount > 0) {
      log.info("Pruned pre-compaction entries from session memory", {
        operation: "post_compaction_prune",
        prunedCount,
        firstKeptIdx,
        totalEntries: fileEntries.length,
      });
    }
  });
};
