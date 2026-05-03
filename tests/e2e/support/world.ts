import { test as base, expect, Page } from '@playwright/test';

/**
 * Custom test fixture that provides a page ready for interaction.
 *
 * The E2E test instance runs WITHOUT auth — no passkey, no TOTP, no PIN.
 * Just navigate and go.
 */
export const test = base.extend<{ authedPage: Page }>({
  authedPage: async ({ browser }, use) => {
    const baseURL = process.env.PICLAW_E2E_URL || 'http://localhost:8080';
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(baseURL);
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(500);
    await use(page);
    await context.close();
  },
});

export { expect };
