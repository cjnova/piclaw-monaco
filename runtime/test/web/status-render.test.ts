import { afterEach, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { importFresh } from '../helpers.js';

class FakeNode {
  parentNode: FakeElement | null = null;
  ownerDocument: FakeDocument;
  namespaceURI: string;
  nodeType: number;

  constructor(ownerDocument: FakeDocument, nodeType: number, namespaceURI = 'http://www.w3.org/1999/xhtml') {
    this.ownerDocument = ownerDocument;
    this.nodeType = nodeType;
    this.namespaceURI = namespaceURI;
  }

  get nextSibling(): FakeNode | null {
    const parent = this.parentNode;
    if (!parent) return null;
    const index = parent.childNodes.indexOf(this);
    if (index < 0) return null;
    return parent.childNodes[index + 1] || null;
  }
}

class FakeTextNode extends FakeNode {
  data: string;

  constructor(ownerDocument: FakeDocument, text: string) {
    super(ownerDocument, 3);
    this.data = text;
  }
}

class FakeElement extends FakeNode {
  tagName: string;
  localName: string;
  childNodes: FakeNode[] = [];
  attributes: Array<{ name: string; value: string }> = [];
  style = {
    cssText: '',
    setProperty: () => {},
    removeProperty: () => {},
  };
  l?: Record<string, unknown>;

  constructor(ownerDocument: FakeDocument, tagName: string, namespaceURI = 'http://www.w3.org/1999/xhtml') {
    super(ownerDocument, 1, namespaceURI);
    this.tagName = tagName.toUpperCase();
    this.localName = tagName.toLowerCase();
  }

  get firstChild(): FakeNode | null {
    return this.childNodes[0] || null;
  }

  appendChild(child: FakeNode): FakeNode {
    return this.insertBefore(child, null);
  }

  insertBefore(child: FakeNode, referenceNode: FakeNode | null): FakeNode {
    if (child.parentNode) {
      child.parentNode.removeChild(child);
    }
    child.parentNode = this;
    const index = referenceNode ? this.childNodes.indexOf(referenceNode) : -1;
    if (index >= 0) {
      this.childNodes.splice(index, 0, child);
    } else {
      this.childNodes.push(child);
    }
    return child;
  }

  removeChild(child: FakeNode): FakeNode {
    const index = this.childNodes.indexOf(child);
    if (index >= 0) {
      this.childNodes.splice(index, 1);
      child.parentNode = null;
    }
    return child;
  }

  setAttribute(name: string, value: string) {
    const existing = this.attributes.find((entry) => entry.name === name);
    if (existing) existing.value = value;
    else this.attributes.push({ name, value });
  }

  removeAttribute(name: string) {
    this.attributes = this.attributes.filter((entry) => entry.name !== name);
  }

  addEventListener() {}

  removeEventListener() {}
}

class FakeDocument {
  body: FakeElement;
  documentElement: FakeElement;

  constructor() {
    this.documentElement = new FakeElement(this, 'html');
    this.body = new FakeElement(this, 'body');
    this.documentElement.appendChild(this.body);
  }

  createElement(tagName: string): FakeElement {
    return new FakeElement(this, tagName);
  }

  createElementNS(namespaceURI: string, tagName: string): FakeElement {
    return new FakeElement(this, tagName, namespaceURI);
  }

  createTextNode(text: string): FakeTextNode {
    return new FakeTextNode(this, text);
  }

  addEventListener() {}

  removeEventListener() {}
}

const originalWindow = (globalThis as any).window;
const originalDocument = (globalThis as any).document;
const originalElement = (globalThis as any).Element;

afterEach(() => {
  (globalThis as any).window = originalWindow;
  (globalThis as any).document = originalDocument;
  (globalThis as any).Element = originalElement;
});

test('expanded thought panels keep a constrained scroll container', () => {
  const css = readFileSync(join(import.meta.dir, '../../web/static/css/agent.css'), 'utf8');
  expect(css).toContain('.agent-thinking[data-panel-key="thought"][data-expanded="true"] .agent-thinking-body-collapsible');
  expect(css).toContain('overflow: hidden auto;');
  expect(css).toContain('max-height: min(52vh, 34rem);');
});

test('AgentStatus can toggle between hidden and visible renders without hook-order failures', async () => {
  const fakeDocument = new FakeDocument();
  (globalThis as any).document = fakeDocument;
  (globalThis as any).window = { document: fakeDocument };
  (globalThis as any).Element = FakeElement;

  const { AgentStatus } = await importFresh<typeof import('../../web/src/components/status.ts')>('../web/src/components/status.ts');
  const { h, render } = await import('../../web/src/vendor/preact-htm.js');

  const host = fakeDocument.createElement('div');
  fakeDocument.body.appendChild(host);

  expect(() => {
    render(h(AgentStatus, { showCorePanels: false, showExtensionPanels: false }), host);
    render(h(AgentStatus, { status: { type: 'thinking', title: 'Working...' } }), host);
    render(h(AgentStatus, { showCorePanels: false, showExtensionPanels: false }), host);
  }).not.toThrow();
});
