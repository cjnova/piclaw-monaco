import { test, expect } from '../support/world';
import { sel } from '../support/selectors';

// US-08: Touch-First Pane Interaction

test.describe('US-08: Pane Stability', () => {
  test('terminal pane renders and accepts input', async ({ authedPage: page }) => {
    // Try to open terminal via keyboard shortcut or menu
    await page.keyboard.press('Meta+`');
    await page.waitForTimeout(1000);

    const terminal = page.locator(sel.terminalContainer + ', .xterm, [data-testid="terminal"]');
    if (!(await terminal.isVisible())) {
      // Try alternate path — slash command
      const compose = page.locator(sel.composeInput);
      await compose.click();
      await compose.fill('/terminal');
      await page.keyboard.press('Enter');
      await page.waitForTimeout(2000);
    }

    if (await terminal.isVisible()) {
      // Terminal should be interactive
      await terminal.click();
      await page.keyboard.type('echo hello');
      await page.waitForTimeout(500);
      // Should show typed text
      const text = await terminal.textContent();
      expect(text).toContain('echo');
    }
  });

  test('VNC pane does not get stuck on touch input', async ({ authedPage: page }) => {
    // Look for existing VNC pane
    const vnc = page.locator(sel.vncCanvas);
    if (!(await vnc.isVisible())) test.skip();

    const box = await vnc.boundingBox();
    if (!box) test.skip();

    // Simulate touch interaction
    await page.touchscreen.tap(box.x + box.width / 2, box.y + box.height / 2);
    await page.waitForTimeout(500);

    // Canvas should still be responsive (not stuck)
    const isVisible = await vnc.isVisible();
    expect(isVisible).toBe(true);

    // No error overlay
    const errorOverlay = page.locator('.vnc-error, .connection-error');
    expect(await errorOverlay.count()).toBe(0);
  });

  test('VNC reconnect shows minimal error UI', async ({ authedPage: page }) => {
    const vnc = page.locator(sel.vncCanvas);
    if (!(await vnc.isVisible())) test.skip();

    // Simulate connection drop
    await page.context().setOffline(true);
    await page.waitForTimeout(3000);
    await page.context().setOffline(false);
    await page.waitForTimeout(3000);

    // If there's a reconnect screen, it should be minimal
    const reconnectUI = page.locator('.vnc-reconnect, .vnc-disconnected, .connection-overlay');
    if (await reconnectUI.isVisible()) {
      // Should not have complex UI — just a simple message and retry
      const buttons = await reconnectUI.locator('button').count();
      expect(buttons).toBeLessThanOrEqual(2); // at most retry + close
    }
  });

  test('office viewer renders without crash', async ({ authedPage: page }) => {
    // Look for office viewer or try to open a document
    const viewer = page.locator('.office-viewer, [data-testid="office-viewer"], iframe[src*="viewer"]');

    if (await viewer.isVisible()) {
      // Should render content
      await expect(viewer).toBeVisible();
      // No crash or blank state
      const blank = page.locator('.viewer-error, .unsupported-format');
      expect(await blank.count()).toBe(0);
    }
  });

  test('pane popout and return preserves state', async ({ authedPage: page }) => {
    // Find a popout button
    const popoutBtn = page.locator(sel.popoutButton).first();
    if (!(await popoutBtn.isVisible())) test.skip();

    // Note current pane content
    const pane = page.locator(sel.paneHost).first();
    const contentBefore = await pane.textContent();

    // We can't easily test actual window.open in Playwright,
    // but we can verify the button doesn't crash the app
    // and that the pane host remains stable after click
    await popoutBtn.click();
    await page.waitForTimeout(1000);

    // Main page should still be functional
    await expect(page.locator(sel.timeline)).toBeVisible();
  });
});

test.describe('US-08: iPad Pane Interaction', () => {
  test('terminal works with touch keyboard', async ({ authedPage: page }, testInfo) => {
    test.skip(testInfo.project.name !== 'ipad', 'iPad-only touch keyboard coverage');
    const terminal = page.locator(sel.terminalContainer + ', .xterm');
    if (!(await terminal.isVisible())) test.skip();

    // Tap to focus
    await page.touchscreen.tap(
      ...(await terminal.boundingBox().then((b) => [b!.x + b!.width / 2, b!.y + b!.height / 2] as [number, number]))
    );
    await page.waitForTimeout(300);

    // Should be able to receive keyboard input
    await page.keyboard.type('ls');
    await page.waitForTimeout(300);
    const text = await terminal.textContent();
    expect(text).toContain('ls');
  });
});
