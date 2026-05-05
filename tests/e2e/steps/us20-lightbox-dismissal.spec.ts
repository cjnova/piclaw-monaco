import { test, expect } from '../support/world';
import { sel } from '../support/selectors';

// US-20: Lightbox Dismissal
//
// Current implementation:
//   - Escape key: dismisses (keydown listener)
//   - Backdrop click (.image-modal onClick): dismisses
//   - Content area click: BLOCKED by e.stopPropagation() on .attachment-preview-shell
//   - Any other key: does NOT dismiss
//   - Tap on mobile: backdrop works, content area doesn't
//
// Desired: ANY key, click, or tap anywhere dismisses the lightbox.
//
// Selectors:
//   .image-modal.attachment-preview-modal — backdrop overlay
//   .attachment-preview-shell — content container (stops propagation currently)
//   .attachment-preview-close — explicit close button
//   img inside .attachment-preview-shell — the image itself

const LIGHTBOX_SELECTOR = '.image-modal.attachment-preview-modal, .attachment-preview-modal';
const LIGHTBOX_SHELL = '.attachment-preview-shell';
const LIGHTBOX_CLOSE = '.attachment-preview-close';

/** Open the lightbox by clicking the first image thumbnail in the timeline. */
async function openLightbox(page: import('@playwright/test').Page): Promise<boolean> {
  // Find an image in the timeline
  const img = page.locator(`${sel.post} img, ${sel.post} .thumbnail, ${sel.post} .media-thumbnail`).first();
  if (!(await img.isVisible())) return false;

  await img.click();
  await page.waitForTimeout(500);

  const lightbox = page.locator(LIGHTBOX_SELECTOR);
  return lightbox.isVisible();
}

/** Check if lightbox is currently visible. */
async function isLightboxOpen(page: import('@playwright/test').Page): Promise<boolean> {
  return page.locator(LIGHTBOX_SELECTOR).isVisible().catch(() => false);
}

test.describe('US-20: Lightbox Dismissal', () => {
  test('Escape key dismisses lightbox', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.post);

    const opened = await openLightbox(page);
    if (!opened) {
      test.skip(undefined, 'No image attachments in timeline to open lightbox');
      return;
    }

    expect(await isLightboxOpen(page)).toBe(true);

    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);

    expect(await isLightboxOpen(page)).toBe(false);
  });

  test('any key press dismisses lightbox (Space)', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.post);

    const opened = await openLightbox(page);
    if (!opened) { test.skip(undefined, 'No images'); return; }

    await page.keyboard.press('Space');
    await page.waitForTimeout(300);

    expect(await isLightboxOpen(page)).toBe(false);
  });

  test('any key press dismisses lightbox (Enter)', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.post);

    const opened = await openLightbox(page);
    if (!opened) { test.skip(undefined, 'No images'); return; }

    await page.keyboard.press('Enter');
    await page.waitForTimeout(300);

    expect(await isLightboxOpen(page)).toBe(false);
  });

  test('any key press dismisses lightbox (letter key)', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.post);

    const opened = await openLightbox(page);
    if (!opened) { test.skip(undefined, 'No images'); return; }

    await page.keyboard.press('a');
    await page.waitForTimeout(300);

    expect(await isLightboxOpen(page)).toBe(false);
  });

  test('click on backdrop dismisses lightbox', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.post);

    const opened = await openLightbox(page);
    if (!opened) { test.skip(undefined, 'No images'); return; }

    // Click the backdrop (the outer .image-modal div, not the inner shell)
    const backdrop = page.locator(LIGHTBOX_SELECTOR);
    const box = await backdrop.boundingBox();
    if (!box) { test.skip(undefined, 'Cannot get backdrop bounds'); return; }

    // Click in the top-left corner (outside the centered content shell)
    await page.mouse.click(box.x + 10, box.y + 10);
    await page.waitForTimeout(300);

    expect(await isLightboxOpen(page)).toBe(false);
  });

  test('click on the image itself dismisses lightbox', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.post);

    const opened = await openLightbox(page);
    if (!opened) { test.skip(undefined, 'No images'); return; }

    // Click directly on the image inside the lightbox
    const img = page.locator(`${LIGHTBOX_SHELL} img`).first();
    if (await img.isVisible()) {
      await img.click();
      await page.waitForTimeout(300);
      expect(await isLightboxOpen(page)).toBe(false);
    } else {
      // If no img element, click the shell content area
      const shell = page.locator(LIGHTBOX_SHELL);
      await shell.click();
      await page.waitForTimeout(300);
      expect(await isLightboxOpen(page)).toBe(false);
    }
  });

  test('tap anywhere dismisses lightbox (touch)', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.post);

    const opened = await openLightbox(page);
    if (!opened) { test.skip(undefined, 'No images'); return; }

    // Simulate tap on the backdrop
    const backdrop = page.locator(LIGHTBOX_SELECTOR);
    const box = await backdrop.boundingBox();
    if (!box) { test.skip(undefined, 'No bounds'); return; }

    await page.touchscreen.tap(box.x + 10, box.y + 10);
    await page.waitForTimeout(300);

    expect(await isLightboxOpen(page)).toBe(false);
  });

  test('Close button dismisses lightbox', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.post);

    const opened = await openLightbox(page);
    if (!opened) { test.skip(undefined, 'No images'); return; }

    const closeBtn = page.locator(LIGHTBOX_CLOSE);
    if (await closeBtn.isVisible()) {
      await closeBtn.click();
      await page.waitForTimeout(300);
      expect(await isLightboxOpen(page)).toBe(false);
    }
  });

  test('lightbox stays closed after dismissal (no flicker)', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.post);

    const opened = await openLightbox(page);
    if (!opened) { test.skip(undefined, 'No images'); return; }

    await page.keyboard.press('Space');
    await page.waitForTimeout(300);
    expect(await isLightboxOpen(page)).toBe(false);

    // Wait and verify it doesn't reappear
    await page.waitForTimeout(1000);
    expect(await isLightboxOpen(page)).toBe(false);
  });
});
