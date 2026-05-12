import { test, expect } from '../support/world';
import { sel } from '../support/selectors';

// US-25: Safe Area and Layout Fixes
//
// Today's commits:
// - 4b8b48342: Shift meters HUD below safe area inset
// - 3a220f400: Add safe-area-inset-top padding to editor pane and workspace sidebar
// - 786571219: Center hamburger in safe area + fix textarea full width
// - 90831de47: fix(web): keep compose surface full width
// - 5a0b18286: Fix tab close click: skip tab activation when press target is .tab-close

test.describe('US-25: Safe Area and Layout', () => {
  test('compose box spans full width', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);

    const compose = page.locator('.compose-box, .compose-surface');
    if (!(await compose.isVisible())) {
      test.skip(undefined, 'Compose box not visible');
      return;
    }

    const composeBox = await compose.boundingBox();
    const viewport = page.viewportSize();
    if (!composeBox || !viewport) return;

    // Compose should be close to full viewport width
    // (may have small margins from parent container)
    expect(composeBox.width).toBeGreaterThan(viewport.width * 0.8);
  });

  test('hamburger button is visible and clickable', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);

    const hamburger = page.locator('.hamburger-menu, [data-testid="hamburger"]');
    await expect(hamburger).toBeVisible();

    const box = await hamburger.boundingBox();
    expect(box).toBeTruthy();
    // Should be within viewport (not hidden behind safe area)
    expect(box!.y).toBeGreaterThanOrEqual(0);
    expect(box!.x).toBeGreaterThanOrEqual(0);
  });

  test('tab close button does not activate tab', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);

    // Need at least 2 editor tabs open
    const tabs = page.locator(sel.editorTab);
    if ((await tabs.count()) < 2) {
      test.skip(undefined, 'Need 2+ editor tabs');
      return;
    }

    // Note the currently active tab
    const activeTab = page.locator(sel.editorTabActive);
    const activeBefore = await activeTab.textContent();

    // Click the close button on the OTHER (inactive) tab
    const inactiveTab = page.locator(`${sel.editorTab}:not(.active)`).first();
    const closeBtn = inactiveTab.locator('.tab-close, .close-btn, [data-action="close"]');

    if (await closeBtn.isVisible()) {
      // Set up dialog handler (dirty tab confirmation)
      page.on('dialog', async (dialog) => await dialog.dismiss());

      await closeBtn.click();
      await page.waitForTimeout(300);

      // The previously active tab should STILL be active
      // (close button should not have triggered tab activation)
      const activeAfter = await page.locator(sel.editorTabActive).textContent();
      expect(activeAfter).toBe(activeBefore);
    }
  });
});
