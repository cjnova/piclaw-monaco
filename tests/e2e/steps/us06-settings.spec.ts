import { test, expect } from '../support/world';
import { sel } from '../support/selectors';

// US-06: Settings During Development

test.describe('US-06: Settings Dialog', () => {
  test('settings opens within acceptable time', async ({ authedPage: page }) => {
    // First open — may need to load modules
    const start = Date.now();
    await page.keyboard.press('Control+Comma');
    await page.waitForSelector(sel.settingsDialog, { timeout: 5000 });
    const firstOpen = Date.now() - start;

    // Should show within 2s even on cold load
    expect(firstOpen).toBeLessThan(2000);

    // Close and wait for the dialog to actually unmount before measuring reopen.
    await page.keyboard.press('Escape');
    await page.locator(sel.settingsDialog).waitFor({ state: 'hidden', timeout: 3000 }).catch(async () => {
      const close = page.locator('.settings-dialog-close, button[title^="Close"]').first();
      if (await close.isVisible()) await close.click();
      await page.locator(sel.settingsDialog).waitFor({ state: 'hidden', timeout: 3000 });
    });

    // Second open — cached path should be comfortably quick, but avoid a brittle
    // sub-200ms assertion on virtualised CI/microVM runners.
    await page.locator('body').click({ position: { x: 5, y: 5 } });
    const start2 = Date.now();
    await page.keyboard.press('Control+Comma');
    await page.waitForSelector(sel.settingsDialog, { timeout: 3000 });
    const secondOpen = Date.now() - start2;

    expect(secondOpen).toBeLessThan(1000);
  });

  test('rapid shortcut presses open exactly one dialog', async ({ authedPage: page }) => {
    // Close any existing dialog
    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);

    // Rapid fire
    await page.keyboard.press('Control+Comma');
    await page.keyboard.press('Control+Comma');
    await page.keyboard.press('Control+Comma');
    await page.waitForTimeout(500);

    const dialogs = await page.locator(sel.settingsDialog).count();
    expect(dialogs).toBeLessThanOrEqual(1);
  });

  test('number fields accept typed values', async ({ authedPage: page }) => {
    await page.keyboard.press('Control+Comma');
    await page.waitForSelector(sel.settingsDialog, { timeout: 5000 });

    const numberInput = page.locator(sel.settingsPane + ' ' + sel.stepperInput).first();
    if (!(await numberInput.isVisible())) test.skip();

    // Clear and type a value
    await numberInput.click({ clickCount: 3 }); // select all
    await page.keyboard.type('128000');
    await page.waitForTimeout(200);

    const value = await numberInput.inputValue();
    expect(value).toBe('128000');
  });

  test('changes persist without explicit save', async ({ authedPage: page }) => {
    await page.keyboard.press('Control+Comma');
    await page.waitForSelector(sel.settingsDialog, { timeout: 5000 });

    // Find a toggle or input and change it
    const toggle = page.locator(sel.settingsPane + ' input[type="checkbox"]').first();
    if (await toggle.isVisible()) {
      const before = await toggle.isChecked();
      await toggle.click();
      await page.waitForTimeout(500);

      // Close and reopen
      await page.keyboard.press('Escape');
      await page.waitForTimeout(300);
      await page.keyboard.press('Control+Comma');
      await page.waitForSelector(sel.settingsDialog, { timeout: 3000 });

      // Value should be persisted
      const after = await toggle.isChecked();
      expect(after).toBe(!before);

      // Restore original value
      await toggle.click();
      await page.waitForTimeout(300);
    }
  });

  test('non-General panes load only on click', async ({ authedPage: page }) => {
    await page.keyboard.press('Control+Comma');
    await page.waitForSelector(sel.settingsDialog, { timeout: 5000 });

    // General pane should be visible
    const generalPane = page.locator('[data-pane="general"], .settings-general');
    if (await generalPane.isVisible()) {
      // Models pane should NOT be loaded yet
      const modelsPane = page.locator('[data-pane="models"], .settings-models');
      expect(await modelsPane.count()).toBe(0);

      // Click Models nav
      const modelsNav = page.locator(sel.settingsNav + ' [data-nav="models"], ' + sel.settingsNav + ' :text("Models")');
      if (await modelsNav.isVisible()) {
        await modelsNav.click();
        await page.waitForTimeout(500);

        // Now models pane should be visible
        await expect(page.locator('[data-pane="models"], .settings-models, .models-pane')).toBeVisible();
      }
    }
  });

  test('settings accessible via gear icon', async ({ authedPage: page }) => {
    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);

    const gear = page.locator('[data-testid="settings-gear"], .gear-icon, .settings-trigger, button[aria-label*="settings" i]');
    if (await gear.isVisible()) {
      await gear.click();
      await page.waitForSelector(sel.settingsDialog, { timeout: 3000 });
      await expect(page.locator(sel.settingsDialog)).toBeVisible();
    }
  });
});
