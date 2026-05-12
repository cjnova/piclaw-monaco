import { describe, expect, test } from 'bun:test';

import {
  DEFAULT_PWA_DISPLAY_SCALE_PERCENT,
  PWA_DISPLAY_SCALE_STORAGE_KEY,
  applyPwaDisplayScale,
  buildPwaDisplayScaleViewportContent,
  formatPwaDisplayScaleRatio,
  isAndroidStandalonePwa,
  normalizePwaDisplayScalePercent,
  persistPwaDisplayScalePercent,
  readStoredPwaDisplayScalePercent,
} from '../../web/src/ui/pwa-display-scale.js';

function createRuntime(options: {
  userAgent?: string;
  displayMode?: string;
  stored?: string | null;
} = {}) {
  const storage = new Map<string, string>();
  if (options.stored !== undefined && options.stored !== null) {
    storage.set(PWA_DISPLAY_SCALE_STORAGE_KEY, options.stored);
  }
  const viewport = {
    content: '',
    setAttribute(name: string, value: string) {
      if (name === 'content') this.content = value;
    },
  };
  const listeners: Array<{ type: string; event: any }> = [];
  return {
    navigator: { userAgent: options.userAgent || 'Mozilla/5.0' },
    localStorage: {
      getItem: (key: string) => storage.has(key) ? storage.get(key)! : null,
      setItem: (key: string, value: string) => storage.set(key, String(value)),
    },
    document: {
      querySelector: (selector: string) => selector === 'meta[name="viewport"]' ? viewport : null,
    },
    matchMedia: (query: string) => ({ matches: query === `(display-mode: ${options.displayMode})` }),
    dispatchEvent: (event: any) => {
      listeners.push({ type: event?.type, event });
      return true;
    },
    __storage: storage,
    __viewport: viewport,
    __listeners: listeners,
  } as any;
}

describe('PWA display scale helpers', () => {
  test('normalizes percentage values and clamps to the supported range', () => {
    expect(normalizePwaDisplayScalePercent('75%')).toBe(75);
    expect(normalizePwaDisplayScalePercent('0.8')).toBe(80);
    expect(normalizePwaDisplayScalePercent('500')).toBe(115);
    expect(normalizePwaDisplayScalePercent('1')).toBe(100);
    expect(normalizePwaDisplayScalePercent('bad')).toBe(DEFAULT_PWA_DISPLAY_SCALE_PERCENT);
    expect(formatPwaDisplayScaleRatio(75)).toBe('0.75');
  });

  test('detects Android standalone, fullscreen, and minimal-ui display modes only', () => {
    expect(isAndroidStandalonePwa(createRuntime({ userAgent: 'Android', displayMode: 'standalone' }))).toBe(true);
    expect(isAndroidStandalonePwa(createRuntime({ userAgent: 'Android', displayMode: 'fullscreen' }))).toBe(true);
    expect(isAndroidStandalonePwa(createRuntime({ userAgent: 'Android', displayMode: 'minimal-ui' }))).toBe(true);
    expect(isAndroidStandalonePwa(createRuntime({ userAgent: 'Android' }))).toBe(false);
    expect(isAndroidStandalonePwa(createRuntime({ userAgent: 'iPhone', displayMode: 'standalone' }))).toBe(false);
  });

  test('builds default viewport content unless a non-default scale applies', () => {
    expect(buildPwaDisplayScaleViewportContent(75)).toContain('initial-scale=1.0');
    expect(buildPwaDisplayScaleViewportContent(100, { applies: true })).toContain('initial-scale=1.0');
    expect(buildPwaDisplayScaleViewportContent(75, { applies: true })).toContain('initial-scale=0.75');
    expect(buildPwaDisplayScaleViewportContent(75, { applies: true })).toContain('viewport-fit=cover');
  });

  test('persists and applies the saved scale only for Android standalone PWA runtime', () => {
    const runtime = createRuntime({ userAgent: 'Android', displayMode: 'standalone' });

    expect(persistPwaDisplayScalePercent(75, runtime)).toBe(75);
    expect(readStoredPwaDisplayScalePercent(runtime)).toBe(75);
    expect(runtime.__storage.get(PWA_DISPLAY_SCALE_STORAGE_KEY)).toBe('75');
    expect(runtime.__viewport.content).toContain('initial-scale=0.75');
    expect(runtime.__listeners.some((entry: any) => entry.type === 'piclaw:pwa-display-scale-changed')).toBe(true);
  });

  test('restores default viewport content outside Android standalone mode', () => {
    const runtime = createRuntime({ userAgent: 'Android', stored: '75' });
    const result = applyPwaDisplayScale(runtime);

    expect(result.applied).toBe(false);
    expect(result.percent).toBe(75);
    expect(runtime.__viewport.content).toContain('initial-scale=1.0');
  });
});
