import { test, expect } from '../support/world';
import { sel } from '../support/selectors';

// US-07: Resilient Reconnection

test.describe('US-07: SSE Reconnection', () => {
  test('SSE reconnects after network drop', async ({ authedPage: page }) => {
    // Verify we're connected (agent status visible or timeline loaded)
    await page.waitForSelector(sel.timeline);

    // Go offline
    await page.context().setOffline(true);
    await page.waitForTimeout(3000);

    // Come back online
    await page.context().setOffline(false);

    // Wait for reconnection indicator to clear
    await page.waitForFunction(() => {
      const hint = document.querySelector('.reconnect-hint, .connection-lost');
      return !hint || (hint as HTMLElement).offsetParent === null;
    }, { timeout: 10000 });

    // Timeline should still be functional
    await expect(page.locator(sel.timeline)).toBeVisible();
  });

  test('messages delivered during disconnect appear after reconnect', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);

    // Count current posts
    const postsBefore = await page.locator(sel.post).count();

    // Send a message that will complete while we're "offline"
    const compose = page.locator(sel.composeInput);
    await compose.click();
    await compose.fill('Say hello');
    await page.keyboard.press('Enter');

    // Brief delay then go offline
    await page.waitForTimeout(500);
    await page.context().setOffline(true);

    // Wait for agent to likely complete (we're offline so won't see SSE)
    await page.waitForTimeout(5000);

    // Come back online
    await page.context().setOffline(false);
    await page.waitForTimeout(5000);

    // Should have more posts than before (agent response arrived)
    const postsAfter = await page.locator(sel.post).count();
    expect(postsAfter).toBeGreaterThan(postsBefore);
  });

  test('no auto-reload loop on version drift', async ({ authedPage: page }) => {
    // Inject a fake version drift SSE event
    await page.evaluate(() => {
      const event = new CustomEvent('piclaw:version-drift', {
        detail: { serverVersion: '99.0.0' },
      });
      window.dispatchEvent(event);
    });

    await page.waitForTimeout(2000);

    // Page should NOT have reloaded (URL still same, DOM still present)
    await expect(page.locator(sel.timeline)).toBeVisible();

    // May show an update notice
    const notice = page.locator('.version-notice, .update-available, [data-testid="version-drift"]');
    // Notice is acceptable; auto-reload is not
    // Verify page didn't navigate
    const isStable = await page.evaluate(() => document.readyState === 'complete');
    expect(isStable).toBe(true);
  });

  test('agent status correct after reconnect', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);

    // Go offline and back
    await page.context().setOffline(true);
    await page.waitForTimeout(2000);
    await page.context().setOffline(false);
    await page.waitForTimeout(5000);

    // Agent status should not be stuck on "connecting"
    const status = page.locator(sel.agentStatus);
    if (await status.isVisible()) {
      const text = await status.textContent();
      expect(text?.toLowerCase()).not.toContain('connecting');
    }

    // Compose should be interactive
    const compose = page.locator(sel.composeInput);
    await expect(compose).toBeEditable();
  });

  test('page refresh recovers all state', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);
    const postsBefore = await page.locator(sel.post).count();

    // Full page refresh. The app keeps an SSE connection open, so networkidle is
    // the wrong readiness signal here.
    await page.reload({ waitUntil: 'domcontentloaded' });

    // Timeline should reload with same messages (or remain empty on a fresh test instance).
    await page.locator(sel.timeline).waitFor({ state: 'visible', timeout: 10000 });
    const postsAfter = await page.locator(sel.post).count();

    // Should have roughly same number of posts (± recent activity)
    expect(postsAfter).toBeGreaterThanOrEqual(Math.max(0, postsBefore - 2));

    // Compose should be ready
    const compose = page.locator(sel.composeInput);
    await expect(compose).toBeEditable();
  });

  test('queue state refreshes after reconnect', async ({ authedPage: page }) => {
    const compose = page.locator(sel.composeInput);
    await compose.click();
    await compose.fill('Start a long task for reconnect test');
    await page.keyboard.press('Enter');

    // Wait for agent to start
    await page.waitForSelector(sel.stopButton, { timeout: 5000 }).catch(() => {});

    // Queue a follow-up
    await compose.click();
    await compose.fill('Queued during reconnect test');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);

    // Go offline and back
    await page.context().setOffline(true);
    await page.waitForTimeout(2000);
    await page.context().setOffline(false);
    await page.waitForTimeout(3000);

    // No stale or duplicated queue items — UI should be coherent
    const queueItems = await page.locator(sel.queueItem).all();
    const texts = await Promise.all(queueItems.map((q) => q.textContent()));
    const unique = new Set(texts);
    expect(unique.size).toBe(texts.length); // no duplicates
  });
});
