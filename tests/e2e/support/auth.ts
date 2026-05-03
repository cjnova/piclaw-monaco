/**
 * E2E auth helpers — kept as a stub.
 *
 * The CI test instance runs without auth, so the authenticatedContext
 * helper is no longer used by the world fixture. This file exists only
 * so that any stale imports don't break the build.
 */

import type { Browser, BrowserContext } from '@playwright/test';

export async function authenticatedContext(
  browser: Browser,
  baseURL: string,
): Promise<BrowserContext> {
  // No-auth mode: just create a plain context
  return browser.newContext();
}
