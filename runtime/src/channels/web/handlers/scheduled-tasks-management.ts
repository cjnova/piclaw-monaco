import type { WebChannelLike } from "../core/web-channel-contracts.js";
import { deleteTask, getTaskById, updateTask } from "../../../db.js";
import { getScheduledTaskInspection, listScheduledTasks } from "../../../scheduled-task-query-service.js";
import type { ScheduledTask } from "../../../types.js";

const VALID_STATUSES = new Set(["active", "paused", "completed"]);

function stringParam(url: URL, name: string): string | null {
  const value = url.searchParams.get(name)?.trim() || "";
  return value || null;
}

function numberParam(url: URL, name: string, fallback: number): number {
  const raw = url.searchParams.get(name);
  if (!raw) return fallback;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function boolParam(url: URL, name: string): boolean {
  const value = (url.searchParams.get(name) || "").trim().toLowerCase();
  return value === "1" || value === "true" || value === "yes";
}

function json(channel: WebChannelLike, body: Record<string, unknown>, status = 200): Response {
  return channel.json(body, status);
}

function taskKind(task: ScheduledTask): ScheduledTask["task_kind"] {
  return task.task_kind ?? "agent";
}

function mutationError(channel: WebChannelLike, action: string, message: string, status = 400, extra: Record<string, unknown> = {}): Response {
  return json(channel, { ok: false, action, error: message, ...extra }, status);
}

function getMutableTask(channel: WebChannelLike, action: "pause" | "resume" | "delete", id: string, allowInternal: boolean): ScheduledTask | Response {
  if (!id) return mutationError(channel, action, "Missing scheduled task id.", 400, { id: null });
  const task = getTaskById(id);
  if (!task) return mutationError(channel, action, `No scheduled task found for ${id}.`, 404, { id });
  if (taskKind(task) === "internal" && !allowInternal) {
    return mutationError(channel, action, `Task ${id} is internal and requires allow_internal=true.`, 403, {
      id,
      protected: true,
      task_kind: taskKind(task),
      status: task.status,
    });
  }
  return task;
}

export function handleScheduledTasksManagementList(channel: WebChannelLike, _req: Request, url: URL): Response {
  const id = stringParam(url, "id");
  const status = stringParam(url, "status");
  const query = {
    id: id || undefined,
    chat_jid: stringParam(url, "chat_jid"),
    status: status && VALID_STATUSES.has(status) ? status as ScheduledTask["status"] : null,
    limit: numberParam(url, "limit", 50),
    include_latest_run_log: true,
    include_run_logs: boolParam(url, "include_run_logs") || Boolean(id),
    run_log_limit: numberParam(url, "run_log_limit", 5),
  };

  if (id) {
    const task = getScheduledTaskInspection(id, query);
    if (!task) return json(channel, { ok: false, found: false, error: `No scheduled task found for ${id}.`, task: null }, 404);
    return json(channel, { ok: true, found: true, task });
  }

  const result = listScheduledTasks(query);
  return json(channel, { ok: true, ...result, filters: query });
}

export async function handleScheduledTasksManagementAction(channel: WebChannelLike, req: Request): Promise<Response> {
  const body = await req.json().catch(() => ({})) as Record<string, unknown>;
  const action = typeof body.action === "string" ? body.action.trim() : "";
  const id = typeof body.id === "string" ? body.id.trim() : "";
  const allowInternal = body.allow_internal === true;

  if (action !== "pause" && action !== "resume" && action !== "delete") {
    return mutationError(channel, action || "unknown", "Unsupported scheduled task action.", 400);
  }

  const loaded = getMutableTask(channel, action, id, allowInternal);
  if (loaded instanceof Response) return loaded;
  const task = loaded;

  if (action === "pause") {
    if (task.status === "completed") return mutationError(channel, action, `Task ${id} is completed and cannot be paused.`, 409, { id, status: task.status });
    if (task.status !== "paused") updateTask(id, { status: "paused" });
  } else if (action === "resume") {
    if (!task.next_run) return mutationError(channel, action, `Task ${id} has no next_run and cannot be resumed.`, 409, { id, status: task.status });
    if (task.status !== "active") updateTask(id, { status: "active" });
  } else {
    deleteTask(id);
    return json(channel, { ok: true, action, id, deleted: true, task_kind: taskKind(task), old_status: task.status });
  }

  const updated = getScheduledTaskInspection(id, { include_latest_run_log: true, include_run_logs: true });
  return json(channel, { ok: true, action, id, task: updated, old_status: task.status, new_status: updated?.status ?? null });
}
