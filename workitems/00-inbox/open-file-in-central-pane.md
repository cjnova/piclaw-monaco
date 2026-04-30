---
id: open-file-in-central-pane
title: Open file from workspace preview in the central pane
status: inbox
created: 2026-04-30
updated: 2026-04-30
tags:
  - work-item
  - kanban
  - web
  - workspace
  - editor
  - ui
owner: 
---

# Open file from workspace preview in the central pane

## Summary

Add an "Open" button in the file preview section (WorkspacePanel) that renders the file in the central pane — same mechanism used for extension pages (iframe/rendered content replacing chat). This allows viewing files full-width without being constrained to the narrow sidebar preview.

## Design

### Trigger:
- New button in file preview actions: [👁 Open] or codicon `open-preview`
- Appears alongside existing [Copy path] [Download] [Delete] buttons

### Rendering in central pane:
Reuse the same mechanism as extension pages (Dashboards iframe):
- For **code/text files**: render via the built-in editor viewer (`/editor-vendor?path=<file>`) or a code-highlighted view
- For **markdown**: rendered HTML (full width, styled)
- For **images**: centered, full-size display
- For **HTML files**: rendered in sandboxed iframe (`/html-viewer?path=<file>`)
- For **CSV**: use existing `/csv-viewer?path=<file>`
- For **PDF**: use existing `/pdf-viewer?path=<file>`
- For **Office docs**: use existing `/office-viewer?path=<file>`

### Integration with existing viewers:
The backend already has viewer routes registered:
- `/editor-vendor` — CodeMirror editor
- `/csv-viewer?path=...`
- `/image-viewer?path=...`
- `/pdf-viewer?path=...`
- `/html-viewer?path=...`
- `/office-viewer?path=...`

These all return full HTML pages. The "Open" button simply sets the extension page URL (same signal as Dashboards) to the appropriate viewer URL with the file path.

### State management:
- Reuse `extensionPageUrl` signal from App.tsx
- "← Back to Chat" button returns to chat (same as Dashboards)
- The central pane already supports iframe rendering for extension pages

## Acceptance Criteria

- [ ] "Open" button appears in file preview actions for supported file types
- [ ] Click "Open" renders the file full-width in the central pane
- [ ] Uses appropriate viewer route based on file extension
- [ ] "← Back to Chat" returns to chat view
- [ ] Unsupported file types: button hidden or grayed
- [ ] Works for: code, markdown, images, HTML, CSV, PDF, Office docs

## Implementation

1. Add "Open" button to WorkspacePanel's file preview action bar
2. Determine viewer URL from file extension
3. Call the same `onPageSelect(url, name)` callback used by Dashboards
4. Central pane renders the viewer iframe

### File extension → viewer mapping:
```
.csv → /csv-viewer?path=
.html, .htm → /html-viewer?path=
.pdf → /pdf-viewer?path=
.docx, .xlsx, .pptx → /office-viewer?path=
.png, .jpg, .gif, .webp, .svg → /image-viewer?path=
.* (default) → /editor-vendor?path= (CodeMirror)
```

## Definition of Done

- [ ] All acceptance criteria satisfied
- [ ] Build + typecheck pass
- [ ] Tested with multiple file types
- [ ] No regression in Dashboards or chat

## Links

- `runtime/web/frontend/src/panels/WorkspacePanel.tsx` — file preview section
- `runtime/web/frontend/src/App.tsx` — extensionPageUrl signal
- `/api/extension-routes` — registered viewer routes
- `runtime/src/channels/web/http/extension-routes.ts`
