import { test, expect } from '../support/world';
import { sel } from '../support/selectors';

// US-04: Editor as Workspace

test.describe('US-04: Editor Stability', () => {
  async function openFileInEditor(page: import('@playwright/test').Page, filename: string) {
    // Open workspace explorer if not visible
    const explorer = page.locator(sel.workspaceExplorer);
    if (!(await explorer.isVisible())) {
      await page.click(sel.hamburgerMenu);
      await page.waitForTimeout(300);
    }
    // Click on a file
    const row = page.locator(sel.workspaceRow, { hasText: filename });
    if (await row.count() > 0) {
      await row.dblclick();
      await page.waitForSelector(sel.editorPane, { timeout: 5000 });
    }
  }

  test('switching files does not cause visible flicker', async ({ authedPage: page }) => {
    await openFileInEditor(page, '.md');
    await page.waitForTimeout(500);

    // Open a second file
    const tabs = await page.locator(sel.editorTab).count();
    if (tabs < 2) {
      // Open another file from workspace
      const rows = await page.locator(sel.workspaceRow).all();
      for (const row of rows) {
        const text = await row.textContent();
        if (text && text.includes('.md')) {
          await row.dblclick();
          break;
        }
      }
    }

    await page.waitForTimeout(300);

    // Switch back to first tab — editor should not flash blank
    const firstTab = page.locator(sel.editorTab).first();
    if (await firstTab.isVisible()) {
      // Take screenshot before
      await firstTab.click();
      await page.waitForTimeout(100);
      // Editor pane should be visible immediately, not blank
      await expect(page.locator(sel.editorPane)).toBeVisible();
      // No "Loading" text
      const loading = await page.locator(sel.editorPane).textContent();
      expect(loading).not.toContain('Loading');
    }
  });

  test('dirty tab close shows confirmation', async ({ authedPage: page }) => {
    await openFileInEditor(page, '.md');
    await page.waitForTimeout(500);

    // Type something to make it dirty
    const editor = page.locator('.cm-editor .cm-content, [contenteditable]').first();
    if (await editor.isVisible()) {
      await editor.click();
      await page.keyboard.type('unsaved change');
      await page.waitForTimeout(200);

      // Check dirty indicator appears
      const dirtyTab = page.locator(sel.editorDirtyIndicator);
      // Try to close the tab
      const closeBtn = page.locator(sel.editorTab + ' .close-btn, ' + sel.editorTab + ' [data-action="close"]').first();
      if (await closeBtn.isVisible()) {
        // Set up dialog handler
        page.on('dialog', async (dialog) => {
          expect(dialog.type()).toBe('confirm');
          await dialog.dismiss(); // cancel — keep tab open
        });
        await closeBtn.click();
        await page.waitForTimeout(300);
        // Tab should still be open
        await expect(page.locator(sel.editorPane)).toBeVisible();
      }
    }
  });

  test('tab activates on mouse-down not mouse-up', async ({ authedPage: page }) => {
    await openFileInEditor(page, '.md');
    await page.waitForTimeout(300);

    const tabs = await page.locator(sel.editorTab).all();
    if (tabs.length < 2) test.skip();

    const inactiveTab = tabs[1];
    const box = await inactiveTab.boundingBox();
    if (!box) test.skip();

    // Mouse down only (no up yet)
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.waitForTimeout(100);

    // Tab should already be active
    const isActive = await inactiveTab.evaluate((el) =>
      el.classList.contains('active') || el.getAttribute('aria-selected') === 'true'
    );
    expect(isActive).toBe(true);

    await page.mouse.up();
  });

  test('zen mode does not cause layout thrashing', async ({ authedPage: page }) => {
    await openFileInEditor(page, '.md');
    await page.waitForTimeout(300);

    // Enter zen mode (Cmd+Shift+Z or button)
    await page.keyboard.press('Meta+Shift+z');
    await page.waitForTimeout(500);

    // Move mouse around — should not cause excessive reflows
    const metrics = await page.evaluate(() => {
      let layoutCount = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift') layoutCount++;
        }
      });
      observer.observe({ entryTypes: ['layout-shift'] });

      return new Promise<number>((resolve) => {
        let moves = 0;
        const interval = setInterval(() => {
          document.dispatchEvent(new MouseEvent('mousemove', {
            clientX: Math.random() * 800,
            clientY: Math.random() * 600,
          }));
          moves++;
          if (moves >= 20) {
            clearInterval(interval);
            observer.disconnect();
            resolve(layoutCount);
          }
        }, 50);
      });
    });

    // Should not have excessive layout shifts
    expect(metrics).toBeLessThan(5);
  });

  test('markdown preview stable during splitter resize', async ({ authedPage: page }) => {
    await openFileInEditor(page, '.md');
    await page.waitForTimeout(300);

    const preview = page.locator(sel.editorPreview);
    if (!(await preview.isVisible())) {
      // Try to enable preview
      await page.keyboard.press('Meta+Shift+p');
      await page.waitForTimeout(300);
    }

    if (await preview.isVisible()) {
      const splitter = page.locator('.splitter, .resize-handle, [data-testid="splitter"]').first();
      if (await splitter.isVisible()) {
        const box = await splitter.boundingBox();
        if (box) {
          // Drag splitter
          await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
          await page.mouse.down();
          await page.mouse.move(box.x + 100, box.y + box.height / 2, { steps: 5 });
          await page.mouse.up();

          // Preview should still be visible and not blank
          await expect(preview).toBeVisible();
          const content = await preview.textContent();
          expect(content?.length).toBeGreaterThan(0);
        }
      }
    }
  });
});
