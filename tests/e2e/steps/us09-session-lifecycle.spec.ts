import { test, expect } from '../support/world';
import { sel } from '../support/selectors';

// US-09: Session Lifecycle

test.describe('US-09: Session Lifecycle', () => {
  test('can create a new session', async ({ authedPage: page }) => {
    // Look for new session button or use @ typeahead
    const newSessionBtn = page.locator('[data-testid="new-session"], .new-session-btn, button[aria-label*="new" i]');

    if (await newSessionBtn.isVisible()) {
      const sessionCountBefore = await page.locator(sel.sessionPopup).first().locator(sel.sessionItem).count().catch(() => 0);
      await newSessionBtn.click();
      await page.waitForTimeout(1000);

      // Should now be in a new session
      await expect(page.locator(sel.timeline)).toBeVisible();
    }
  });

  test('rename session updates typeahead immediately', async ({ authedPage: page }) => {
    // Open session popup
    await page.click(sel.sessionSwitcher);
    await page.waitForSelector(sel.sessionPopup, { timeout: 5000 });

    // Find rename option (context menu or inline edit)
    const activeSession = page.locator(sel.sessionActive + ', ' + sel.sessionItem + '.active').first();
    if (!(await activeSession.isVisible())) test.skip();

    // Right-click or find rename control
    await activeSession.click({ button: 'right' });
    await page.waitForTimeout(300);

    const renameOption = page.locator('text=Rename, [data-action="rename"]');
    if (await renameOption.isVisible()) {
      await renameOption.click();
      await page.waitForTimeout(300);

      // Type new name
      const testName = `E2E-Test-${Date.now()}`;
      await page.keyboard.type(testName);
      await page.keyboard.press('Enter');
      await page.waitForTimeout(500);

      // Verify in typeahead
      const compose = page.locator(sel.composeInput);
      await compose.click();
      await compose.fill('@' + testName.slice(0, 8));
      await page.waitForTimeout(500);

      const popup = page.locator(sel.sessionPopup + ', .typeahead-popup');
      if (await popup.isVisible()) {
        const text = await popup.textContent();
        expect(text).toContain(testName.slice(0, 8));
      }
    }
  });

  test('archive moves session below active list', async ({ authedPage: page }) => {
    await page.click(sel.sessionSwitcher);
    await page.waitForSelector(sel.sessionPopup, { timeout: 5000 });

    const sessions = await page.locator(sel.sessionPopup).first().locator(sel.sessionItem).all();
    if (sessions.length < 2) test.skip();

    // Try to archive a non-active session
    const targetSession = sessions[sessions.length - 1]; // last one
    await targetSession.click({ button: 'right' });
    await page.waitForTimeout(300);

    const archiveOption = page.locator('text=Archive, [data-action="archive"]');
    if (await archiveOption.isVisible()) {
      await archiveOption.click();
      await page.waitForTimeout(500);

      // Archived sessions should appear in a separate section
      const archived = page.locator(sel.sessionArchived + ', .archived-section ' + sel.sessionItem);
      const count = await archived.count();
      expect(count).toBeGreaterThan(0);
    }
  });

  test('delete works for archived sessions', async ({ authedPage: page }) => {
    await page.click(sel.sessionSwitcher);
    await page.waitForSelector(sel.sessionPopup, { timeout: 5000 });

    const archived = page.locator(sel.sessionArchived).first();
    if (!(await archived.isVisible())) test.skip();

    await archived.click({ button: 'right' });
    await page.waitForTimeout(300);

    const deleteOption = page.locator('text=Delete, [data-action="delete"]');
    if (await deleteOption.isVisible()) {
      // Set up confirmation handler
      page.on('dialog', async (dialog) => {
        await dialog.accept();
      });

      const countBefore = await page.locator(sel.sessionArchived).count();
      await deleteOption.click();
      await page.waitForTimeout(500);

      const countAfter = await page.locator(sel.sessionArchived).count();
      expect(countAfter).toBeLessThan(countBefore);
    }
  });

  test('session name change broadcasts via SSE', async ({ authedPage: page, browser }) => {
    // Open a second tab to the same instance
    const baseURL = process.env.PICLAW_E2E_URL || 'http://localhost:3000';
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    await page2.goto(baseURL);
    await page2.waitForLoadState('domcontentloaded');
    await page2.locator(sel.timeline).waitFor({ state: 'visible', timeout: 5000 });

    // Rename session in first page
    await page.click(sel.sessionSwitcher);
    await page.waitForSelector(sel.sessionPopup, { timeout: 5000 });
    const activeSession = page.locator(sel.sessionActive).first();
    if (await activeSession.isVisible()) {
      await activeSession.click({ button: 'right' });
      await page.waitForTimeout(200);
      const renameOption = page.locator('text=Rename, [data-action="rename"]');
      if (await renameOption.isVisible()) {
        await renameOption.click();
        const newName = `SSE-Sync-${Date.now()}`;
        await page.keyboard.type(newName);
        await page.keyboard.press('Enter');
        await page.waitForTimeout(2000);

        // Second page should reflect the change after opening its session popup.
        await page2.click(sel.sessionSwitcher);
        await page2.waitForSelector(sel.sessionPopup, { timeout: 5000 });
        const page2Sessions = page2.locator(sel.sessionPopup).first().locator(sel.sessionItem);
        const allText = await page2Sessions.allTextContents();
        const found = allText.some((t) => t.includes(newName.slice(0, 8)));
        expect(found).toBe(true);
      }
    }

    await context2.close();
  });
});
