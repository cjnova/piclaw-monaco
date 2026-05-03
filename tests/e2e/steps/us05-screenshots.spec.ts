import { test, expect } from '../support/world';
import { sel } from '../support/selectors';
import { join } from 'path';

// US-05: Screenshot Debugging Workflow

test.describe('US-05: Screenshot & Attachment Workflow', () => {
  test('paste image from clipboard attaches to compose', async ({ authedPage: page }) => {
    const compose = page.locator(sel.composeInput);
    await compose.click();

    // Create a small test image in clipboard via DataTransfer
    await page.evaluate(async () => {
      const canvas = document.createElement('canvas');
      canvas.width = 100;
      canvas.height = 100;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, 100, 100);
      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob((value) => value ? resolve(value) : reject(new Error('canvas.toBlob returned null')), 'image/png');
      });
      const event = new ClipboardEvent('paste', {
        clipboardData: new DataTransfer(),
        bubbles: true,
      });
      const composeEl = document.querySelector('[data-testid="compose-input"], .compose-box textarea, .compose-editor [contenteditable], .compose-editor');
      if (composeEl) {
        const dt = new DataTransfer();
        dt.items.add(new File([blob], 'screenshot.png', { type: 'image/png' }));
        Object.defineProperty(event, 'clipboardData', { value: dt });
        composeEl.dispatchEvent(event);
      }
    });

    await page.waitForTimeout(1000);

    // Should show attachment indicator or preview
    const attachmentIndicator = page.locator(
      '[data-testid="attachment-preview"], .attachment-preview, .compose-attachment, .file-pill, .compose-file-pill'
    );
    // Note: this may need adjustment based on actual UI
    const hasAttachment = await attachmentIndicator.count();
    expect(hasAttachment).toBeGreaterThan(0);
  });

  test('drag-and-drop file attaches to compose', async ({ authedPage: page }) => {
    const compose = page.locator(sel.composeBox);
    await expect(compose).toBeVisible();

    // Create a temporary file and simulate drag-drop
    const box = await compose.boundingBox();
    if (!box) test.skip();

    // Use Playwright's file chooser or direct DataTransfer
    await page.evaluate(({ x, y }) => {
      const dt = new DataTransfer();
      const file = new File(['test content'], 'test.md', { type: 'text/markdown' });
      dt.items.add(file);

      const target = document.elementFromPoint(x, y);
      if (!target) return;

      target.dispatchEvent(new DragEvent('dragenter', { dataTransfer: dt, bubbles: true }));
      target.dispatchEvent(new DragEvent('dragover', { dataTransfer: dt, bubbles: true }));
      target.dispatchEvent(new DragEvent('drop', { dataTransfer: dt, bubbles: true }));
    }, { x: box.x + box.width / 2, y: box.y + box.height / 2 });

    await page.waitForTimeout(1000);

    // Should show file attachment or upload indicator
    const indicator = page.locator(
      '[data-testid="attachment-preview"], .attachment-preview, .compose-attachment, .upload-progress, .file-pill, .compose-file-pill'
    );
    const count = await indicator.count();
    expect(count).toBeGreaterThan(0);
  });

  test('sent images appear in timeline with thumbnail', async ({ authedPage: page }) => {
    // Look for existing image posts in timeline
    await page.waitForSelector(sel.post);
    const images = page.locator(sel.post + ' img, ' + sel.post + ' .thumbnail');
    const count = await images.count();

    // If there are images, verify they render
    if (count > 0) {
      const firstImg = images.first();
      await expect(firstImg).toBeVisible();
      const src = await firstImg.getAttribute('src');
      expect(src).toBeTruthy();
    }
  });

  test('clicking thumbnail opens lightbox', async ({ authedPage: page }) => {
    await page.locator(sel.timeline).waitFor({ state: 'visible', timeout: 5000 });
    const images = page.locator(sel.post + ' .file-attachment-preview img, ' + sel.post + ' .thumbnail');
    const count = await images.count();

    if (count === 0) test.skip(true, 'no clickable image attachment thumbnails in the test timeline');

    // Click first image
    await images.first().click();
    await page.waitForTimeout(500);

    // Lightbox should appear
    const lightbox = page.locator('.lightbox, [data-testid="lightbox"], .image-overlay, .fullscreen-preview');
    await expect(lightbox).toBeVisible({ timeout: 3000 });

    // Should have close button
    const closeBtn = lightbox.locator('button, .close, [data-action="close"]');
    expect(await closeBtn.count()).toBeGreaterThan(0);

    // Close it
    await closeBtn.first().click();
    await page.waitForTimeout(300);
    await expect(lightbox).not.toBeVisible();
  });

  test('external links in posts open in new tab', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.post);
    const links = page.locator(sel.postContent + ' a[href^="http"]');
    const count = await links.count();

    if (count === 0) test.skip();

    const link = links.first();
    const target = await link.getAttribute('target');
    expect(target).toBe('_blank');
  });
});
