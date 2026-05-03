import { test, expect } from '../support/world';
import { sel } from '../support/selectors';

// US-01 supplement: Timeline rendering regressions

test.describe('Timeline Rendering', () => {
  async function skipWhenTimelineIsEmpty(page: import('@playwright/test').Page) {
    await page.locator(sel.timeline).waitFor({ state: 'visible', timeout: 5000 });
    if ((await page.locator(sel.post).count()) === 0) test.skip(true, 'timeline has no posts to inspect');
  }

  test('markdown tables render with proper column widths', async ({ authedPage: page }) => {
    await skipWhenTimelineIsEmpty(page);

    // Find a post with a table
    const tables = page.locator(sel.postContent + ' table');
    if ((await tables.count()) === 0) test.skip();

    const table = tables.first();
    const firstCol = table.locator('th:first-child, td:first-child').first();
    const box = await firstCol.boundingBox();

    // First column should not collapse to zero
    expect(box).toBeTruthy();
    expect(box!.width).toBeGreaterThan(20);
  });

  test('code blocks have copy button in corner', async ({ authedPage: page }) => {
    await skipWhenTimelineIsEmpty(page);

    const codeBlocks = page.locator(sel.codeBlock);
    if ((await codeBlocks.count()) === 0) test.skip();

    // Hover over code block to reveal copy button
    const block = codeBlocks.first();
    const parent = block.locator('..'); // pre element
    await parent.hover();
    await page.waitForTimeout(300);

    const copyBtn = parent.locator(sel.codeCopyBtn + ', .copy-button, button[aria-label*="copy" i]');
    await expect(copyBtn).toBeVisible();
  });

  test('external links have target=_blank', async ({ authedPage: page }) => {
    await skipWhenTimelineIsEmpty(page);

    const externalLinks = page.locator(sel.postContent + ' a[href^="http"]');
    const count = await externalLinks.count();
    if (count === 0) test.skip();

    // Check all external links
    for (let i = 0; i < Math.min(count, 5); i++) {
      const link = externalLinks.nth(i);
      const href = await link.getAttribute('href');
      // Only check truly external links (not same origin)
      if (href && !href.includes('localhost') && !href.includes('127.0.0.1')) {
        const target = await link.getAttribute('target');
        expect(target).toBe('_blank');
      }
    }
  });

  test('timeline renders once without duplicates', async ({ authedPage: page }) => {
    await skipWhenTimelineIsEmpty(page);

    // Get all post IDs or content
    const posts = await page.locator(sel.post).all();
    const ids: string[] = [];
    for (const post of posts) {
      const id = await post.getAttribute('data-message-id') ||
                 await post.getAttribute('id') ||
                 await post.textContent();
      if (id) ids.push(id.slice(0, 100));
    }

    // Check for exact duplicates (same ID appearing twice)
    const seen = new Set<string>();
    const duplicates: string[] = [];
    for (const id of ids) {
      if (seen.has(id)) duplicates.push(id);
      seen.add(id);
    }

    expect(duplicates.length).toBe(0);
  });

  test('outcome pills render after timestamps', async ({ authedPage: page }) => {
    await skipWhenTimelineIsEmpty(page);

    const pills = page.locator(sel.outcomePill);
    if ((await pills.count()) === 0) test.skip();

    const pill = pills.first();
    const timestamp = pill.locator('..').locator(sel.timestamp);

    if (await timestamp.isVisible()) {
      // Pill should come after timestamp in DOM order
      const pillBox = await pill.boundingBox();
      const tsBox = await timestamp.boundingBox();
      if (pillBox && tsBox) {
        // Pill x should be >= timestamp x (appears after)
        expect(pillBox.x).toBeGreaterThanOrEqual(tsBox.x);
      }
    }
  });
});
