import { afterEach, expect, test } from 'bun:test';

import { importFresh } from '../helpers.js';

type StyleMap = Map<string, string>;

function createStyleStore(): { style: any; values: StyleMap } {
  const values = new Map<string, string>();
  return {
    values,
    style: {
      setProperty: (key: string, value: string) => { values.set(key, value); },
      removeProperty: (key: string) => { values.delete(key); },
      getPropertyValue: (key: string) => values.get(key) || '',
      colorScheme: '',
      color: '',
      display: '',
    },
  };
}

function createElement(tagName: string, registry: Map<string, any>) {
  const { style, values } = createStyleStore();
  const attrs = new Map<string, string>();
  return {
    tagName: tagName.toUpperCase(),
    style,
    __styleValues: values,
    attrs,
    children: [] as any[],
    appendChild(child: any) {
      this.children.push(child);
      return child;
    },
    removeChild(child: any) {
      this.children = this.children.filter((entry: any) => entry !== child);
      return child;
    },
    setAttribute(name: string, value: string) {
      attrs.set(name, value);
      if (name === 'id') registry.set(value, this);
    },
    getAttribute(name: string) {
      return attrs.get(name) || null;
    },
    removeAttribute(name: string) {
      const current = attrs.get(name);
      attrs.delete(name);
      if (name === 'id' && current) registry.delete(current);
    },
  };
}

function createThemeRuntime() {
  const styleStore = createStyleStore();
  const registry = new Map<string, any>();
  const head = createElement('head', registry);
  const body = createElement('body', registry);
  const documentElement = {
    dataset: {} as Record<string, string>,
    style: styleStore.style,
  } as any;

  const document = {
    documentElement,
    head,
    body,
    createElement: (tagName: string) => createElement(tagName, registry),
    getElementById: (id: string) => registry.get(id) || null,
    querySelector: (selector: string) => {
      const metaNameMatch = selector.match(/^meta\[name="(.+)"\]$/);
      if (!metaNameMatch) return null;
      const expectedName = metaNameMatch[1];
      const nodes = [...head.children, ...body.children];
      return nodes.find((node: any) => node?.getAttribute?.('name') === expectedName) || null;
    },
  } as any;

  const storage = new Map<string, string>();
  const window = {
    location: { href: 'https://example.test/?chat_jid=web%3Adefault' },
    localStorage: {
      getItem: (key: string) => storage.has(key) ? storage.get(key) ?? null : null,
      setItem: (key: string, value: string) => { storage.set(key, value); },
    },
    dispatchEvent: () => true,
    matchMedia: () => ({
      matches: false,
      addEventListener: () => {},
      removeEventListener: () => {},
    }),
  } as any;

  return { document, window, styleValues: styleStore.values };
}

const originalWindow = (globalThis as any).window;
const originalDocument = (globalThis as any).document;
const originalCustomEvent = (globalThis as any).CustomEvent;

afterEach(() => {
  (globalThis as any).window = originalWindow;
  (globalThis as any).document = originalDocument;
  (globalThis as any).CustomEvent = originalCustomEvent;
});

test('/tint updates derived highlight vars and tints the full default palette', async () => {
  const runtime = createThemeRuntime();
  (globalThis as any).window = runtime.window;
  (globalThis as any).document = runtime.document;
  (globalThis as any).CustomEvent = class CustomEventStub {
    type: string;
    detail: unknown;
    constructor(type: string, init?: { detail?: unknown }) {
      this.type = type;
      this.detail = init?.detail;
    }
  };

  const theme = await importFresh<typeof import('../../web/src/ui/theme.js')>('../web/src/ui/theme.ts');
  theme.applyThemeFromEvent({ theme: 'default', tint: '#ff5500', chat_jid: 'web:default' });

  expect(runtime.styleValues.get('--accent-color')).toBe('#ff5500');
  expect(runtime.styleValues.get('--accent-color-alpha')).toBe('rgba(255, 85, 0, 0.25)');
  expect(runtime.styleValues.get('--search-highlight-color')).toBe('rgba(255, 85, 0, 0.2)');

  expect(runtime.styleValues.get('--bg-primary')).not.toBe('#ffffff');
  expect(runtime.styleValues.get('--bg-secondary')).not.toBe('#f7f9fa');
  expect(runtime.styleValues.get('--bg-hover')).not.toBe('#e8ebed');
  expect(runtime.styleValues.get('--text-primary')).not.toBe('#0f1419');
  expect(runtime.styleValues.get('--text-secondary')).not.toBe('#536471');
  expect(runtime.styleValues.get('--border-color')).not.toBe('#eff3f4');
  expect(runtime.styleValues.get('--warning-color')).not.toBe('#f0b429');
  expect(runtime.styleValues.get('--danger-color')).not.toBe('#f4212e');
  expect(runtime.styleValues.get('--success-color')).not.toBe('#00ba7c');
});


test('named themes still expose a distinct warning token instead of falling back to accent', async () => {
  const runtime = createThemeRuntime();
  (globalThis as any).window = runtime.window;
  (globalThis as any).document = runtime.document;
  (globalThis as any).CustomEvent = class CustomEventStub {
    type: string;
    detail: unknown;
    constructor(type: string, init?: { detail?: unknown }) {
      this.type = type;
      this.detail = init?.detail;
    }
  };

  const theme = await importFresh<typeof import('../../web/src/ui/theme.js')>('../web/src/ui/theme.ts');
  theme.applyThemeFromEvent({ theme: 'dracula', chat_jid: 'web:default' });

  expect(runtime.styleValues.get('--accent-color')).toBe('#bd93f9');
  expect(runtime.styleValues.get('--warning-color')).toBeTruthy();
  expect(runtime.styleValues.get('--warning-color')).not.toBe(runtime.styleValues.get('--accent-color'));
});

test('applyThemeFromEvent without chat affinity updates global localStorage keys', async () => {
  const runtime = createThemeRuntime();
  (globalThis as any).window = runtime.window;
  (globalThis as any).document = runtime.document;
  (globalThis as any).CustomEvent = class CustomEventStub {
    type: string;
    detail: unknown;
    constructor(type: string, init?: { detail?: unknown }) {
      this.type = type;
      this.detail = init?.detail;
    }
  };

  const theme = await importFresh<typeof import('../../web/src/ui/theme.js')>('../web/src/ui/theme.ts');
  theme.applyThemeFromEvent({ theme: 'gotham', tint: null });

  expect(runtime.window.localStorage.getItem('piclaw_theme')).toBe('gotham');
  expect(runtime.window.localStorage.getItem('piclaw_tint')).toBe('');
  expect(runtime.document.documentElement.dataset.colorTheme).toBe('gotham');
});

test('theme parser falls back to inline css color when computed-style resolution fails', async () => {
  const runtime = createThemeRuntime();
  runtime.document.body.appendChild = () => {
    throw new Error('blocked');
  };
  (globalThis as any).window = runtime.window;
  (globalThis as any).document = runtime.document;
  (globalThis as any).CustomEvent = class CustomEventStub {
    type: string;
    detail: unknown;
    constructor(type: string, init?: { detail?: unknown }) {
      this.type = type;
      this.detail = init?.detail;
    }
  };

  const theme = await importFresh<typeof import('../../web/src/ui/theme.js')>('../web/src/ui/theme.ts');
  theme.applyThemeFromEvent({ theme: 'default', tint: 'rgb(255, 85, 0)', chat_jid: 'web:default' });

  expect(runtime.styleValues.get('--accent-color')).toBe('#ff5500');
});
