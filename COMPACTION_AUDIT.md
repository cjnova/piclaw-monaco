# Context Compaction Audit

This is a plain-English audit of the active compaction path in PiClaw as of 2026-04-26.

Files reviewed:

- `runtime/src/agent-pool/session.ts`
- `runtime/src/agent-pool/run-agent-orchestrator.ts`
- `runtime/src/extensions/smart-compaction.ts`
- `runtime/src/agent-control/handlers/control.ts`
- `runtime/src/agent-pool/branch-seeding.ts`

## Executive summary

PiClaw disables upstream automatic compaction and instead performs compaction at controlled points:

1. **Before a new prompt** if the estimated context is too close to the model context window.
2. **During automatic recovery** when a failure looks context-related.
3. **Manually** via `/compact`.

When compaction runs, PiClaw first gives the `smart-compaction` extension a chance to replace the default summarization with a more selective one. That extension can:

- reuse the previous summary with a mechanical delta,
- build a selective LLM prompt from chosen fragments,
- or fall back to built-in upstream compaction.

The end result is that older raw conversation history is replaced by a **compaction summary**, while newer entries from `firstKeptEntryId` onward remain as raw context.

---

## Step-by-step: what the active code does to the context

## 1. Upstream auto-compaction is explicitly disabled

In `runtime/src/agent-pool/session.ts`, PiClaw calls:

- `result.session.setAutoCompactionEnabled(false)`

The code comment says PiClaw owns compaction scheduling because upstream compaction can fire at unsafe times.

So the active compaction system is **not** upstream automatic compaction. It is PiClaw-controlled compaction at safe boundaries.

---

## 2. Before each prompt, PiClaw estimates current context size

In `runtime/src/agent-pool/run-agent-orchestrator.ts`, `maybeAutoCompactSessionBeforePrompt()` does this:

1. returns immediately if the session is already streaming, compacting, or retrying
2. reads the model context window from the model metadata
3. if the model does not report a context window, uses a fallback of `128000`
4. estimates the current context token usage:
   - first from `session.getContextUsage()?.tokens`
   - otherwise by rebuilding session context and approximating token counts message-by-message
5. reads the compaction settings for the session, especially `reserveTokens`
6. compares current tokens against:
   - `contextWindow - reserveTokens`
7. if current tokens exceed that threshold, it compacts before sending the next prompt

So operationally:

> PiClaw compacts before the next prompt when the current session context is too close to the model limit.

---

## 3. Compaction is also used in recovery mode

In `run-agent-orchestrator.ts`, if recovery logic classifies a failure as context-related, PiClaw chooses:

- `compact_then_retry`

That path:

1. emits `compaction_start`
2. runs `session.compact()`
3. emits `compaction_end`
4. retries the turn if compaction succeeded

So compaction is part of both normal context-pressure management and failure recovery.

---

## 4. Manual `/compact` uses the same pipeline

In `runtime/src/agent-control/handlers/control.ts`, `/compact` does this:

1. prunes orphan tool-result blocks first
2. calls `session.compact(customInstructions?)`
3. generates a compaction report attachment with:
   - summary
   - tokens before
   - first kept entry id

So manual compaction uses the same underlying logic as automatic compaction.

---

## 5. `session_before_compact` hook intercepts compaction

In `runtime/src/extensions/smart-compaction.ts`, PiClaw installs a handler for:

- `session_before_compact`

That hook receives a preparation payload containing:

- `messagesToSummarize`
- `tokensBefore`
- `firstKeptEntryId`
- `previousSummary`
- `fileOps`
- `settings`

This payload is already scoped to the compacting session/branch.

So the extension only sees the current branch’s context, not global cross-session history.

---

## 6. Messages are converted into LLM-format messages

The extension calls:

- `convertToLlm(messagesToSummarize)`

That converted message list is then used for:

- topic-shift detection
- no-op detection
- selective prompt construction

---

## 7. Topic-shift detection tries to identify pivots

The extension tries to prevent stale-topic bias after compaction.

It looks for:

### Strong pivot cues
Examples:

- `new topic`
- `different issue`
- `ignore that`
- `unrelated`

These are treated as direct evidence of a pivot.

### Weak pivot cues
Examples:

- `instead`
- `switch to`
- `back to`
- `moving on`

These only count if adjacent user turns also have very low lexical overlap.

### Zero-overlap fallback
If two substantial adjacent user turns have no overlap in meaningful tokens, that can also count as a pivot.

Purpose:

> Make the newest topic the active one in the post-compaction summary instead of letting old summary content dominate the next turn.

---

## 8. The extension first tries a no-op compaction

Before paying for an LLM summarization pass, the extension checks whether it can safely reuse the previous summary.

This only happens if there is already a non-trivial `previousSummary`.

### No-op case A: split-turn continuation
If the compaction window contains **zero user messages**, the extension assumes this is just a long tool-call continuation and the user’s intent has not changed.

It then:

1. reuses the previous summary
2. computes a mechanical delta:
   - number and types of tool calls
   - modified files
   - number of files read
3. inserts that delta into the previous summary
4. refreshes deterministic read/modified file tags

So in this mode, there is no semantic resummarization; the old summary is patched.

### No-op case B: minimal content reuse
If:

- user text is under 100 chars,
- there are no file modifications,
- and there is no detected topic shift,

then the extension simply reuses the previous summary and refreshes the file tags.

So tiny, non-pivoting windows do not get a full semantic compaction pass.

---

## 9. Short windows fall through to built-in compaction

If `messagesToSummarize.length < 40`, the smart-compaction extension returns without handling the event.

That means upstream built-in compaction handles the summarization.

So smart-compaction only activates on longer windows.

---

## 10. For long windows, PiClaw builds a selective compaction prompt

Instead of sending the full history, the extension selects fragments.

### It always tries to preserve:

#### Head
Early messages for original goal/setup context.

#### Tail
The last 20 messages for current state.

#### Latest request
The most recent non-slash user request, plus some surrounding context.

#### Complaints/corrections
Messages like:

- broken
- still wrong
- not working
- bug
- fix

These are preserved so the summary does not falsely say work is finished.

#### Topic-shift boundary
If a pivot is detected, the extension preserves context on both sides of the shift.

#### Key decisions
Long assistant explanatory messages from the middle are sampled and preserved.

This is intended to be more resilient to “lost in the middle” than full-pass compaction.

---

## 11. Verified file lists are derived from tool operations

The extension computes:

- `readFiles`
- `modifiedFiles`

from `fileOps`, then filters noise paths such as:

- `/tmp`
- `/dev`
- `/proc`
- caches
- `node_modules`
- source maps
- minified bundles
- wasm
- metadata files
- session files

So the file lists are meant to represent useful project context, not noise.

---

## 12. The compaction prompt is strongly structured

The prompt includes:

- session metadata
- first user request
- latest user request
- detected active topic
- background/historical handling notes
- verified modified files
- verified read files
- previous summary
- optional user compaction note
- selected conversation excerpts

The system prompt instructs the summarizer to output sections like:

- Goal
- Current Active Topic
- Historical / Background Context
- Constraints & Preferences
- Progress
- Key Decisions
- Next Steps
- Critical Context

So the intended result is not just a shorter transcript — it is a structured checkpoint designed for turn continuation.

---

## 13. The extension calls the session model to generate the summary

It uses:

- the session’s current model
- auth resolved from model settings
- `completeSimple(...)`

If any of these fail:

- no model
- no auth
- LLM call failure
- generated summary too short
- abort

then the extension falls back to built-in compaction.

---

## 14. Deterministic file tags may be appended afterward

If the generated summary does not already contain:

- `<read-files>...</read-files>`
- `<modified-files>...</modified-files>`

then the extension appends them.

This keeps file lists stable even when the semantic summary came from an LLM.

---

## 15. Upstream then rewrites the session context

From the way the returned `CompactionResult` is used, the effect is:

1. earlier raw history is collapsed into a compaction summary
2. entries from `firstKeptEntryId` onward remain as raw context
3. later prompts see:
   - the compaction summary
   - the still-kept recent tail
   - current live session state

This is corroborated by code that carries compaction entries forward as a distinct entry type, e.g. in `branch-seeding.ts`.

So the real transformation is:

> older raw messages are discarded and replaced by a structured summary, while newer raw messages remain intact.

---

# Pitfalls and likely logic bugs

## 1. `MAX_PROMPT_CHARS` only limits excerpts, not the full prompt

In `buildSelectivePrompt()`, the code tracks character count only while appending selected conversation excerpts.

It does **not** account for:

- metadata sections
- previous summary
- file lists
- custom instructions
- system prompt text itself

So the true prompt can be much larger than the intended 60k-char cap.

That is a real logic bug, because the code appears to enforce a hard prompt limit, but only enforces it on one section.

### Consequence
A large previous summary plus selected excerpts can still create a huge prompt and defeat the intended token-saving behavior.

---

## 2. If the model already emits file tags, stale tags may survive unchanged

The extension only appends deterministic `<read-files>` / `<modified-files>` tags **if they are absent**.

If the LLM output already contains those tags, the extension leaves them alone.

### Consequence
A stale or incorrect LLM-emitted file list can survive even though deterministic file-op data is available.

That is a correctness bug or at least a consistency hole.

---

## 3. The minimal-content no-op path can discard meaningful tiny requests

The “minimal content” no-op path reuses the previous summary when:

- user chars < 100
- no modifications
- no detected topic shift

That is fast, but a sub-100-char message can still be semantically important even without a strong pivot cue.

Example class of risk:

- “use env vars, not config”
- “actually target Safari”
- “don’t commit yet”

### Consequence
A small but important instruction may never get merged into the summary if it does not look like a pivot and does not coincide with a file modification.

---

## 4. Repeated split-turn no-op compactions can make summaries accrete mechanical sludge

The split-turn path appends a `### Split-Turn Continuation` block to the previous summary.

If that happens repeatedly, the summary can accumulate many mechanical continuation notes.

### Consequence
The summary can become bloated and increasingly noisy even though the point of compaction is to reduce context pressure.

---

## 5. Modified-file inference only knows about tracked tool operations

The file lists are derived from `fileOps`.

That is generally good, but it means the summary only knows about modifications that PiClaw tracked through tool operations.

### Consequence
Out-of-band changes or indirect writes that do not land in `fileOps` can be omitted from the compaction summary.

---

## 6. Pivot detection is heuristic and can both false-positive and false-negative

The topic-shift detector is thoughtfully conservative, but still heuristic.

### False positives
Normal coding language like “instead” or “back to” may sometimes be misread as a pivot if lexical overlap is low.

### False negatives
A real pivot with overlapping vocabulary may be missed.

### Consequence
The “Current Active Topic” may occasionally still drift toward stale context or incorrectly demote still-relevant context.

---

## 7. The head-selection rule is crude

The code uses a head window based on `HEAD_USER_TURNS * 3` messages.

That assumes a rough relationship between user turns and surrounding messages, which may not hold in tool-heavy conversations.

### Consequence
The preserved “goal setup” context can be too small or too arbitrary depending on the session shape.

---

## 8. `maybeAutoCompactSessionBeforePrompt()` swallows compaction failure and proceeds

If pre-prompt compaction fails, the function logs a warning and returns.

### Consequence
The next prompt may still proceed with an overlarge context and fail later anyway. That might be intentional for resilience, but it weakens the protective value of the pre-prompt compaction gate.

---

## 9. Compaction event semantics are slightly misleading

On successful recovery compaction, PiClaw emits:

- `compaction_end` with `willRetry: true`

That is semantically fine for the happy path, but the event refers to planned next behavior rather than the compaction result itself.

### Consequence
UI logic that interprets compaction events too literally may conflate “compaction succeeded” with “retry is guaranteed.”

---

## 10. Summary quality depends on the same model configuration being available during compaction

Selective compaction uses the session model and its auth.

If auth is absent or provider config breaks, smart-compaction silently falls back to built-in compaction.

### Consequence
Behavior can change materially between sessions or after provider issues, even when the user thinks “compaction” is one stable feature.

---

# Net effect on the context

After compaction, the next turn does **not** get the full old transcript.

It gets:

1. a structured summary of older history,
2. a raw recent tail from `firstKeptEntryId` onward,
3. deterministic read/modified file context when available.

So compaction is really:

> replacing old verbatim history with a condensed checkpoint, while trying to keep the newest topic and recent corrections from being lost.

---

# Bottom line

The active compaction design is good in intent and substantially more sophisticated than naive full-history summarization. It specifically tries to preserve:

- the latest user request,
- complaints/corrections,
- pivots to new topics,
- verified file changes,
- key decisions.

The biggest concrete issues I see are:

1. **the prompt-size cap is not actually global**,
2. **stale LLM-emitted file tags may survive**,
3. **tiny but important instructions can be lost in the no-op path**,
4. **split-turn reuse can accrete junk into the summary over time**.

Those are the first places I would harden if compaction quality or context drift is under suspicion.
