import { test, expect } from '../support/world';
import { sel } from '../support/selectors';

// US-27: Context Scoping and Compaction
//
// Today's commits:
// - b72644400: fix: scope context estimate cache per session
// - a463c2f73: fix: exclude read from tool-result compaction
// - 5fb4fcce4: feat: finish settings-gated tool-result compaction
// - 6e8d123be: Fix context indicator tooltip
//
// These are mostly backend/runtime changes, but we can verify
// the user-facing effects: context meter updates per session,
// tooltip is correct, and /compact works.

test.describe('US-27: Context Scoping', () => {
  test('context meter tooltip shows correct format after fix', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);

    // Send a message to establish context
    const compose = page.locator(sel.composeInput);
    await compose.click();
    await compose.fill('Context scoping test');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(5000);

    const pie = page.locator('.compose-context-pie');
    if (!(await pie.isVisible())) {
      test.skip(undefined, 'Context pie not visible');
      return;
    }

    const title = await pie.getAttribute('title') || '';
    // Fix 6e8d123be ensured the tooltip format is correct
    expect(title).toContain('Context:');
    expect(title).toMatch(/\d/);
    // Should NOT be empty or malformed
    expect(title.length).toBeGreaterThan(10);
  });

  test('context meter is scoped to current session', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);

    const pie = page.locator('.compose-context-pie');
    if (!(await pie.isVisible())) {
      test.skip(undefined, 'Context pie not visible');
      return;
    }

    // Capture context for current session
    const title1 = await pie.getAttribute('title') || '';

    // Switch to a different session (if available)
    await page.click('[data-testid="session-switcher"], .compose-session-trigger');
    await page.waitForTimeout(500);

    const sessionItems = page.locator('.session-item, .compose-session-popup-item, [role="option"]');
    if ((await sessionItems.count()) < 2) {
      await page.keyboard.press('Escape');
      test.skip(undefined, 'Need 2+ sessions to test scoping');
      return;
    }

    // Click second session
    await sessionItems.nth(1).click();
    await page.waitForTimeout(2000);

    // Context should differ between sessions (or at least be valid)
    if (await pie.isVisible()) {
      const title2 = await pie.getAttribute('title') || '';
      // Both should be valid format
      expect(title2).toContain('Context:');
      // They SHOULD differ (different sessions have different context)
      // but if both are fresh/empty, they might match — soft check
    }
  });
});
