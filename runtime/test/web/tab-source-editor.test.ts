import { describe, expect, test } from 'bun:test';

import {
  SOURCE_EDITABLE_PANE_IDS,
  canTabEditSource,
  getTabEditSourceLabel,
  resolveEffectiveTabPaneId,
} from '../../web/src/ui/tab-source-editor.js';

describe('tab source editor helpers', () => {
  test('only the specialized HTML and kanban panes are source-editable', () => {
    expect(Array.from(SOURCE_EDITABLE_PANE_IDS).sort()).toEqual(['html-viewer', 'kanban-editor']);
  });

  test('uses the pane override when present', () => {
    const resolved = resolveEffectiveTabPaneId('boards/team.kanban.md', 'editor', () => ({ id: 'kanban-editor' }));
    expect(resolved).toBe('editor');
  });

  test('falls back to pane resolution when no override exists', () => {
    const resolved = resolveEffectiveTabPaneId('boards/team.kanban.md', null, ({ path }: any) =>
      String(path).endsWith('.kanban.md') ? { id: 'kanban-editor' } : { id: 'editor' }
    );
    expect(resolved).toBe('kanban-editor');
  });

  test('shows Edit/Edit Source only for HTML and kanban tabs while they are in specialized mode', () => {
    const resolvePane = ({ path }: any) => {
      if (String(path).endsWith('.html')) return { id: 'html-viewer' };
      if (String(path).endsWith('.kanban.md')) return { id: 'kanban-editor' };
      return { id: 'editor' };
    };

    expect(canTabEditSource('pages/index.html', null, resolvePane)).toBe(true);
    expect(canTabEditSource('boards/team.kanban.md', null, resolvePane)).toBe(true);
    expect(canTabEditSource('pages/index.html', 'editor', resolvePane)).toBe(false);
    expect(canTabEditSource('notes/todo.md', null, resolvePane)).toBe(false);
    expect(getTabEditSourceLabel('pages/index.html', null, resolvePane)).toBe('Edit');
    expect(getTabEditSourceLabel('boards/team.kanban.md', null, resolvePane)).toBe('Edit Source');
  });
});
