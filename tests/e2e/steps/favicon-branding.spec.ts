import { test, expect } from '../support/world';
import { sel } from '../support/selectors';

// Branding regressions

test.describe('Manifest & App Icons', () => {
  const BASE_URL = process.env.PICLAW_E2E_URL || 'http://localhost:3000';

  test('web app manifest is linked and declares PNG icons', async ({ authedPage: page }) => {
    const manifestLink = page.locator('link[rel="manifest"]');
    await expect(manifestLink).toHaveCount(1);

    const href = await manifestLink.getAttribute('href');
    expect(href).toBeTruthy();

    const manifestUrl = new URL(href!, BASE_URL).toString();
    const resp = await page.request.get(manifestUrl);
    expect(resp.ok()).toBe(true);
    expect(resp.headers()['content-type'] || '').toContain('application/manifest+json');

    const manifest = await resp.json();
    expect(Array.isArray(manifest.icons)).toBe(true);
    expect(manifest.icons.length).toBeGreaterThanOrEqual(2);

    const sizes = manifest.icons.map((icon: { sizes?: string }) => icon.sizes);
    expect(sizes).toContain('192x192');
    expect(sizes).toContain('512x512');

    for (const icon of manifest.icons) {
      expect(icon.src).toBeTruthy();
      expect(icon.type).toBe('image/png');
      expect(icon.sizes).toMatch(/^\d+x\d+$/);
    }
  });

  test('manifest icon URLs resolve to PNG images', async ({ authedPage: page }) => {
    const resp = await page.request.get(`${BASE_URL}/manifest.json`);
    expect(resp.ok()).toBe(true);
    const manifest = await resp.json();

    for (const icon of manifest.icons) {
      const iconUrl = new URL(icon.src, BASE_URL).toString();
      const iconResp = await page.request.get(iconUrl);
      expect(iconResp.ok()).toBe(true);
      expect(iconResp.headers()['content-type'] || '').toContain('image/png');

      const body = await iconResp.body();
      expect(body[0]).toBe(0x89);
      expect(body[1]).toBe(0x50);
      expect(body[2]).toBe(0x4e);
      expect(body[3]).toBe(0x47);
    }
  });

  test('HTML head exposes Apple touch icons', async ({ authedPage: page }) => {
    const links = page.locator('link[rel="apple-touch-icon"]');
    expect(await links.count()).toBeGreaterThanOrEqual(1);

    const sizes = await links.evaluateAll((nodes) => nodes.map((node) => node.getAttribute('sizes')));
    expect(sizes).toContain('180x180');
    expect(sizes).toContain('167x167');
    expect(sizes).toContain('152x152');
  });
});

// Hamburger menu visibility regressions

test.describe('Hamburger Menu', () => {
  test('hamburger is always visible', async ({ authedPage: page }) => {
    const hamburger = page.locator(sel.hamburgerMenu);
    await expect(hamburger).toBeVisible();
  });

  test('hamburger menu exposes workspace toggle', async ({ authedPage: page }) => {
    const hamburger = page.locator(sel.hamburgerMenu);
    if (!(await hamburger.isVisible())) test.skip();

    await hamburger.click();
    const workspaceToggle = page.locator('.workspace-menu-item', { hasText: /workspace|explorer/i }).first();
    await expect(workspaceToggle).toBeVisible();
  });
});
