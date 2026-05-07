import { signal } from "@preact/signals";

/** Global identity info — populated from /agent/settings-data or /timeline response. */
export const userAvatarUrl = signal<string | null>(null);
export const assistantAvatarUrl = signal<string>("/static/icon-192.png");
