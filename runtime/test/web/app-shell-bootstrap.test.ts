import { afterEach, expect, test } from 'bun:test';

import { paneRegistry } from '../../web/src/panes/pane-registry.js';
import { registerAppPaneExtensions } from '../../web/src/ui/app-shell-bootstrap.js';

const registeredByTest = new Set<string>();
let previousKanbanExtension: any = null;

afterEach(() => {
  for (const id of registeredByTest) paneRegistry.unregister(id);
  registeredByTest.clear();
  if (previousKanbanExtension) {
    paneRegistry.register(previousKanbanExtension);
    previousKanbanExtension = null;
  }
});

test('registerAppPaneExtensions does not register the built-in kanban pane by default', () => {
  previousKanbanExtension = paneRegistry.get('kanban-editor') || null;
  if (previousKanbanExtension) paneRegistry.unregister('kanban-editor');

  registerAppPaneExtensions();

  for (const ext of paneRegistry.list()) registeredByTest.add(ext.id);

  expect(paneRegistry.get('editor')).toBeTruthy();
  expect(paneRegistry.get('mindmap-editor')).toBeTruthy();
  expect(paneRegistry.get('kanban-editor')).toBeUndefined();
});
