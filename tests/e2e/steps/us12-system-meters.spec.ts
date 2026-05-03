import { test, expect } from '../support/world';
import { sel } from '../support/selectors';

// US-12: System meters HUD

test.describe('US-12: System Meters HUD', () => {
  test('/meters on shows CPU meter, chart click collapses, collapsed indicator reopens', async ({ authedPage: page }) => {
    await page.evaluate(() => {
      localStorage.setItem('piclaw_system_meters_enabled', 'false');
      localStorage.setItem('piclaw_system_meters_collapsed', 'false');
    });
    await page.reload();
    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator(sel.systemMetersHud)).toHaveCount(0);

    const compose = page.locator(sel.composeInput);
    await compose.click();
    await compose.fill('/meters on');
    await page.keyboard.press('Enter');

    const hud = page.locator(sel.systemMetersHud);
    const card = page.locator(sel.systemMetersCard);
    await expect(hud).toBeVisible({ timeout: 5000 });
    // Desktop renders individual metric rows; compact mobile renders a summary
    // line inside the meters button.
    const hasCpuRow = await page.locator(sel.systemMetersCpuRow).isVisible({ timeout: 1000 }).catch(() => false);
    if (!hasCpuRow) await expect(card).toContainText(/CPU/i, { timeout: 5000 });

    const box = await card.boundingBox();
    const viewport = page.viewportSize();
    expect(box).toBeTruthy();
    expect(viewport).toBeTruthy();
    expect(box!.x + box!.width).toBeGreaterThan(viewport!.width - 160);
    expect(box!.y).toBeLessThan(120);

    await card.click();
    await expect(hud).toHaveClass(/is-collapsed/);
    await expect(page.locator(sel.systemMetersCpuRow)).toHaveCount(0);

    await card.click();
    await expect(hud).not.toHaveClass(/is-collapsed/);
    const rowVisibleAgain = await page.locator(sel.systemMetersCpuRow).isVisible({ timeout: 1000 }).catch(() => false);
    if (!rowVisibleAgain) await expect(card).toContainText(/CPU/i, { timeout: 5000 });
  });
});
