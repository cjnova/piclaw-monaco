/**
 * web/handlers/passkeys.ts – REST endpoints for managing passkey credentials.
 */

import { listWebauthnCredentials, deleteWebauthnCredential, DEFAULT_WEB_USER_ID } from "../../../db.js";

export function handlePasskeysList(): Response {
  try {
    const creds = listWebauthnCredentials(DEFAULT_WEB_USER_ID);
    const passkeys = creds.map((c) => ({
      id: c.credential_id,
      createdAt: c.created_at,
      lastUsedAt: c.last_used_at,
    }));
    return new Response(JSON.stringify(passkeys), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return new Response(JSON.stringify({ error: message }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}

export async function handlePasskeysDelete(req: Request): Promise<Response> {
  try {
    const body = await req.json().catch(() => ({})) as Record<string, unknown>;
    const id = typeof body.id === "string" ? body.id.trim() : "";
    if (!id) {
      return new Response(JSON.stringify({ error: "Provide credential id." }), { status: 400, headers: { "Content-Type": "application/json" } });
    }
    deleteWebauthnCredential(id);
    return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return new Response(JSON.stringify({ error: message }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
