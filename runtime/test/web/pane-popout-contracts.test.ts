import { expect, test } from 'bun:test';

import { getStandaloneTabUrl } from '../../web/src/components/tab-strip.js';
import { paneRegistry } from '../../web/src/panes/pane-registry.js';
import { mindmapPaneExtension } from '../../web/src/panes/mindmap-pane.js';
import { TERMINAL_TAB_PATH, terminalTabPaneExtension } from '../../web/src/panes/terminal-pane.js';
import { videoViewerPaneExtension } from '../../web/src/panes/video-viewer-pane.js';

const GENERIC_POPOUT_ONLY_CASES = [
  {
    path: 'demo/sample-video.webm',
    expectedPaneId: 'video-viewer',
    description: 'video viewer tabs stay on the shared pane-popout path',
  },
  {
    path: 'demo/roadmap.mindmap.yaml',
    expectedPaneId: 'mindmap-editor',
    description: 'mindmap tabs stay on the shared pane-popout path',
  },
  {
    path: TERMINAL_TAB_PATH,
    expectedPaneId: 'terminal-tab',
    description: 'terminal tabs stay on the shared pane-popout path',
  },
] as const;

for (const extension of [videoViewerPaneExtension, mindmapPaneExtension, terminalTabPaneExtension]) {
  paneRegistry.register(extension);
}

test('generic-popout-only panes resolve explicit pane contracts', () => {
  const resolved = GENERIC_POPOUT_ONLY_CASES.map((entry) => ({
    path: entry.path,
    description: entry.description,
    paneId: paneRegistry.resolve({ path: entry.path, mode: 'edit' })?.id ?? null,
    standaloneUrl: getStandaloneTabUrl(entry.path, { hasPopOutTab: true }),
  }));

  expect(resolved).toEqual([
    {
      path: 'demo/sample-video.webm',
      description: 'video viewer tabs stay on the shared pane-popout path',
      paneId: 'video-viewer',
      standaloneUrl: null,
    },
    {
      path: 'demo/roadmap.mindmap.yaml',
      description: 'mindmap tabs stay on the shared pane-popout path',
      paneId: 'mindmap-editor',
      standaloneUrl: null,
    },
    {
      path: 'piclaw://terminal',
      description: 'terminal tabs stay on the shared pane-popout path',
      paneId: 'terminal-tab',
      standaloneUrl: null,
    },
  ]);
});
