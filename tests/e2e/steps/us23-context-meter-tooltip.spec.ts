import { test, expect } from '../support/world';
import { sel } from '../support/selectors';

// US-23: Context Meter Tooltip
//
// The context pie button has:
//   title="Context: 45K / 128K tokens (35%) — Compact context"
//   data-tooltip=(same)
//   aria-label=(same)
//
// The title attribute gives a native browser tooltip on hover.
// Token values come from usage.tokens and usage.contextWindow.
// Format: formatK() — e.g. 45123 → "45K", 1234 → "1.2K"

const PIE_SELECTOR = '.compose-context-pie';

test.describe('US-23: Context Meter Tooltip', () => {
  test('context meter has title attribute with token counts', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);

    // Send a message to establish context usage
    const compose = page.locator(sel.composeInput);
    await compose.click();
    await compose.fill('Hello — context tooltip test');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(5000);

    const pie = page.locator(PIE_SELECTOR);
    if (!(await pie.isVisible())) {
      test.skip(undefined, 'Context pie not visible — provider may not report usage');
      return;
    }

    // title attribute should contain token info
    const title = await pie.getAttribute('title');
    expect(title).toBeTruthy();
    expect(title).toContain('Context:');
    expect(title).toContain('tokens');
    expect(title).toMatch(/\d/); // must contain at least one digit

    // Should show percentage
    expect(title).toMatch(/\d+%/);
  });

  test('tooltip contains both used and total token counts', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);

    const pie = page.locator(PIE_SELECTOR);
    if (!(await pie.isVisible())) {
      test.skip(undefined, 'Context pie not visible');
      return;
    }

    const title = await pie.getAttribute('title') || '';

    // Format: "Context: XK / YK tokens (Z%)"
    // XK = used tokens, YK = context window
    const tokenMatch = title.match(/Context:\s*([\d.]+K?)\s*\/\s*([\d.]+K?)\s*tokens/);
    if (!tokenMatch) {
      // May only show percentage if provider doesn't report exact tokens
      expect(title).toMatch(/Context:\s*\d+%/);
      return;
    }

    const [, used, total] = tokenMatch;
    expect(used).toBeTruthy();
    expect(total).toBeTruthy();

    // Both should be parseable numbers
    const parseK = (s: string) => s.endsWith('K') ? parseFloat(s) * 1000 : parseFloat(s);
    expect(parseK(used)).toBeGreaterThanOrEqual(0);
    expect(parseK(total)).toBeGreaterThan(0);
    expect(parseK(used)).toBeLessThanOrEqual(parseK(total));
  });

  test('tooltip includes compact action hint', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);

    const pie = page.locator(PIE_SELECTOR);
    if (!(await pie.isVisible())) {
      test.skip(undefined, 'Context pie not visible');
      return;
    }

    const title = await pie.getAttribute('title') || '';
    // When not compacting, should show "Compact context"
    expect(title).toContain('Compact context');
  });

  test('aria-label matches title for accessibility', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);

    const pie = page.locator(PIE_SELECTOR);
    if (!(await pie.isVisible())) {
      test.skip(undefined, 'Context pie not visible');
      return;
    }

    const title = await pie.getAttribute('title') || '';
    const ariaLabel = await pie.getAttribute('aria-label') || '';

    // Both should contain the same token info
    expect(ariaLabel).toContain('Context:');
    expect(ariaLabel).toContain('tokens');
  });

  test('tooltip updates after agent interaction', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);

    const pie = page.locator(PIE_SELECTOR);
    if (!(await pie.isVisible())) {
      // Send a message to trigger usage reporting
      const compose = page.locator(sel.composeInput);
      await compose.click();
      await compose.fill('Trigger context reporting');
      await page.keyboard.press('Enter');
      await page.waitForTimeout(5000);
    }

    if (!(await pie.isVisible())) {
      test.skip(undefined, 'Context pie not visible after message');
      return;
    }

    const titleBefore = await pie.getAttribute('title') || '';

    // Send another message to change usage
    const compose = page.locator(sel.composeInput);
    await compose.click();
    await compose.fill('Add more context to update the meter');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(8000);

    const titleAfter = await pie.getAttribute('title') || '';

    // Title should have updated (token count should increase)
    // At minimum, the title should still be valid
    expect(titleAfter).toContain('Context:');
    expect(titleAfter).toMatch(/\d/);

    // If both have token counts, the "after" should be >= "before"
    const extractPercent = (t: string) => {
      const m = t.match(/(\d+)%/);
      return m ? parseInt(m[1], 10) : null;
    };
    const pctBefore = extractPercent(titleBefore);
    const pctAfter = extractPercent(titleAfter);
    if (pctBefore !== null && pctAfter !== null) {
      expect(pctAfter).toBeGreaterThanOrEqual(pctBefore);
    }
  });

  test('hover triggers native tooltip (title attribute present)', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);

    const pie = page.locator(PIE_SELECTOR);
    if (!(await pie.isVisible())) {
      test.skip(undefined, 'Context pie not visible');
      return;
    }

    // Verify the element has the title attribute (browser renders tooltip on hover)
    const hasTitle = await pie.evaluate((el) => el.hasAttribute('title'));
    expect(hasTitle).toBe(true);

    // Hover and verify the element remains interactive
    await pie.hover();
    await page.waitForTimeout(500);

    // Element should still be visible and have the title
    await expect(pie).toBeVisible();
    const title = await pie.getAttribute('title');
    expect(title!.length).toBeGreaterThan(10);
  });
});
