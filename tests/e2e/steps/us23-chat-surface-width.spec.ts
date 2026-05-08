import { test, expect } from '../support/world';
import { sel } from '../support/selectors';

// Regression: chat surfaces must share the same horizontal bounds as the
// timeline at every breakpoint. Mobile previously drifted because status panes
// and compose internals carried independent horizontal margins/padding.

test.describe('US-23: Chat surface width alignment', () => {
  test('panels and compose box are flush with the timeline', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);
    await page.waitForSelector(sel.composeBox);

    await page.evaluate(() => {
      document.querySelector('#e2e-chat-surface-width-fixture')?.remove();
      const panel = document.createElement('div');
      panel.id = 'e2e-chat-surface-width-fixture';
      panel.className = 'agent-status-panel';
      panel.innerHTML = `
        <div class="agent-status">E2E status surface</div>
        <div class="agent-thinking" data-expanded="false" data-panel-key="thought">
          <div class="agent-thinking-title">E2E panel surface</div>
          <div class="agent-thinking-body">Width alignment fixture.</div>
        </div>
      `;
      const compose = document.querySelector('.compose-box');
      compose?.parentElement?.insertBefore(panel, compose);
    });

    const metrics = await page.evaluate(() => {
      const bounds = (selector: string) => {
        const el = document.querySelector(selector) as HTMLElement | null;
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return { left: rect.left, right: rect.right, width: rect.width };
      };
      return {
        timeline: bounds('.timeline'),
        composeInput: bounds('.compose-input-wrapper'),
        status: bounds('#e2e-chat-surface-width-fixture .agent-status'),
        panel: bounds('#e2e-chat-surface-width-fixture .agent-thinking'),
      };
    });

    expect(metrics.timeline).toBeTruthy();
    for (const key of ['composeInput', 'status', 'panel'] as const) {
      const actual = metrics[key];
      expect(actual).toBeTruthy();
      expect(Math.abs(actual!.left - metrics.timeline!.left)).toBeLessThanOrEqual(1);
      expect(Math.abs(actual!.right - metrics.timeline!.right)).toBeLessThanOrEqual(1);
      expect(Math.abs(actual!.width - metrics.timeline!.width)).toBeLessThanOrEqual(1);
    }
  });
});
