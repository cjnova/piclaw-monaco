# Module Registry — piclaw-monaco frontend

Generated: 2026-05-16
Language: TypeScript (Preact)
Scope: `runtime/web/frontend/src/{components,hooks,utils,panels,api,app}`

## Shared Components (components/)

- `ActivityBar.tsx` — Left rail panel switcher. Exports: `ActivityBar`.
- `AddonHealthBadge.tsx` — Add-on API health indicator/entry point. Exports: `AddonHealthBadge`.
- `AgentRequestModal.tsx` — Modal for agent approval requests. Exports: `AgentRequest`, `AgentRequestModal`.
- `AgentStatusPanel.tsx` — Live agent/tool status cards with panel headers, collapsible content, approvals, git context. Exports: `resolveStatusIndicator`, `resolveToolKind`, `resolveTitleFromArgs`, `AgentStatusPanel`.
- `AttachmentChip.tsx` — Message attachment chip with image lightbox behavior. Exports: `AttachmentChip`.
- `AvatarPopover.tsx` — User/assistant avatar popover. Exports: `AvatarPopover`.
- `CollapsibleContent.tsx` — Collapse/expand for text/markdown and item lists. Exports: `truncateByLines`, `MarkdownContent`, `CollapsibleContent`.
- `CommandPalette.tsx` — Slash-command palette shell. Exports: `CommandPalette`.
- `CopyButton.tsx` — Clipboard button with copied feedback and optional flash event. Exports: `CopyButton`.
- `CustomSelect.tsx` — Dark-themed dropdown replacing native `<select>`. Exports: `CustomSelect`.
- `ExtensionPanelCard.tsx` — Extension-provided status/panel card renderer. Exports: `ExtensionPanelAction`, `ExtensionPanelSeries`, `ExtensionPanel`, `ExtensionPanelCard`, `normalizeExtensionPanelPayload`.
- `FileIcon.tsx` — File/folder icon wrapper. Exports: `FileIcon`.
- `FileTree.tsx` — Workspace file tree with persisted expanded/selected paths. Exports: `FileTree`, `TreeNode`.
- `Icon.tsx` — Inline SVG/icon name renderer. Exports: `Icon`.
- `ImageLightbox.tsx` — Overlay image preview. Exports: `ImageLightbox`.
- `MessageList.tsx` — Timeline/message list orchestrator. Exports: `MessageList`.
- `ModalDialog.tsx` — Shared prompt/confirm/alert dialog shell. Exports: `ModalDialogMode`, `ModalDialog`.
- `ModelContextBar.tsx` — Model/context/compaction status bar. Exports: `ModelContextBar`.
- `OverlayShell.tsx` — Unified overlay primitive: focus trap, scroll lock, Escape/backdrop handling, z-index tiers. Exports: `OverlayShell`.
- `PanelHeader.tsx` — Shared panel card header with dot, title, branch, elapsed, toggle/close actions. Exports: `PanelHeader`.
- `ProviderWizard.tsx` — Provider setup wizard. Exports: `ProviderWizard`.
- `QueueStack.tsx` — Chat queue stack display/editor entry. Exports: `QueueItem`, `QueueStack`.
- `SessionPill.tsx` — Current chat/session pill and session menu. Exports: `SessionPill`.
- `Sidebar.tsx` — Generic sidebar section shell. Exports: `Sidebar`.
- `SystemStats.tsx` — Live browser/system stats display. Exports: `formatClock`, `SystemStats`.
- `TabBar.tsx` — App tab strip. Exports: `TabBar`.
- `TerminalComponent.tsx` — Ghostty web terminal component. Exports: `TerminalComponent`.
- `WidgetPane.tsx` — Widget overlay/tab frame for rendered widget artifacts. Exports: `WidgetPane`.

### Command palette components (`components/command-palette/`)
- `CommandList.tsx` — Command result/list renderer. Exports: `CommandList`.
- `types.ts` — Command palette contracts and category CSS classes. Exports: `CommandPaletteProps`, `BackendCommand`, `MergedCommand`, `CATEGORY_BADGE_CLASS`.
- `useCommandFetch.ts` — Fetch/merge backend and registered commands. Exports: `useCommandFetch`.
- `useKeyboardNav.ts` — Keyboard navigation state for command results/options. Exports: `useKeyboardNav`.
- `utils.ts` — Command send and autocomplete API helpers. Exports: `sendCommand`, `fetchAutocompleteOptions`.
- `command-palette-params.ts` — Known command parameter metadata/autocomplete. Exports: `CommandParam`, `getCommandParam`, `getAutocompleteOptions`, `COMMAND_PARAMS`, `ParamType`.

### Message list components (`components/message-list/`)
- `AdaptiveCardRenderer.tsx` — Adaptive-card block extraction and renderer. Exports: `extractCardBlocks`, `AdaptiveCardRenderer`.
- `DelimitedTable.tsx` — CSV/TSV/pipe/semicolon preview table. Exports: `DelimitedTable`.
- `HighlightPopup.tsx` — Text highlight color picker popover. Exports: `HighlightPopup`.
- `MessageActionBar.tsx` — Message copy/delete/action controls. Exports: `MessageActionBar`.
- `MessageItem.tsx` — Timeline item renderer and tool-call block renderer. Exports: `ToolCallBlock`, `MessageItem`.
- `helpers.ts` — Timeline normalization, keys, merge, relative time. Exports: `relativeTime`, `getBlockKey`, `normalizePost`, `mergeInteractions`.
- `types.ts` — Timeline/message API contracts. Exports: `ContentBlock`, `Interaction`, `TimelineResponse`.
- `useCollapsedMessages.ts` — Persisted collapsed-message state. Exports: `useCollapsedMessages`.
- `useScrollManager.ts` — Timeline scrolling, code-copy delegation, mermaid rendering. Exports: `useScrollManager`.
- `useTimelineFetch.ts` — Fetch timeline history. Exports: `useTimelineFetch`.
- `useTimelineStream.ts` — Stream timeline updates. Exports: `useTimelineStream`.

### Model context bar components (`components/model-context-bar/`)
- `ContextRing.tsx` — Context usage ring button. Exports: `ContextRing`.
- `ModelPicker.tsx` — Model picker menu. Exports: `ModelPicker`.
- `ThinkingPicker.tsx` — Thinking-level picker menu. Exports: `ThinkingPicker`.
- `addonHealthSignal.ts` — Shared add-on health signal. Exports: `addonHealthSignal`.
- `types.ts` — Model/context/health contracts and fallbacks. Exports: `AddonApiStatus`, `AgentStatus`, `AgentContext`, `OobeStatus`, `ModelInfo`, `ProviderUsage`, `ModelEntry`, `FALLBACK_MODELS`, `FALLBACK_THINKING_LEVELS`, `fmtTokens`.
- `useCompaction.ts` — Compaction status/action hook. Exports: `UseCompactionResult`, `useCompaction`.
- `useModelPicker.ts` — Model/thinking fetch and selection hook. Exports: `UseModelPickerResult`, `useModelPicker`.
- `useStatusPolling.ts` — Agent/model/context status polling hook. Exports: `UseStatusPollingResult`, `useStatusPolling`.

## Hooks (hooks/)

- `useDismissableLayer.ts` — Outside-click + Escape dismiss for popovers/dropdowns. Exports: `useDismissableLayer`.
- `useDialog.ts` — Queue-backed prompt/confirm/alert API and host component. Exports: `useDialog`.

## Utilities (utils/)

- `bicep-mode.ts` — CodeMirror-style Bicep tokenizer mode. Exports: `StreamState`, `bicepMode`.
- `bundled-themes.ts` — Bundled VS Code theme metadata. Exports: `BundledTheme`, `BUNDLED_THEMES`.
- `clipboard.ts` — Copy-to-clipboard helper with textarea fallback. Exports: `copyToClipboard`.
- `code-highlighting.ts` — Code fence language normalization, parser lookup, syntax highlighting. Exports: `normalizeCodeLanguageLabel`, `parserForCodeFenceLanguage`, `highlightCodeToHtml`, `applySyntaxHighlighting`.
- `delimited-preview.ts` — Delimited-file detection and parser. Exports: `Delimiter`, `DelimitedPreviewResult`, `isDelimitedFile`, `parseDelimited`.
- `extractDisplayName.ts` — Display-name extraction from extension path. Exports: `extractDisplayName`.
- `file-icons.ts` — Filename-to-icon class resolver. Exports: `getFileIconClass`.
- `format.ts` — Shared formatters for bytes, compact bytes, durations, elapsed/relative time, token windows. Exports: `formatBytes`, `formatBytesCompact`, `formatDuration`, `formatElapsed`, `formatRelativeTime`, `formatTokenWindow`.
- `formatBytes.ts` — Legacy/standalone byte formatter. Exports: `formatBytes`.
- `highlight-serializer.ts` — DOM text highlight serialization/application. Exports: `HighlightRange`, `HIGHLIGHT_COLORS`, `serializeSelection`, `clearHighlights`, `applyHighlights`.
- `isSafeExtensionUrl.ts` — Extension iframe URL safety check. Exports: `isSafeExtensionUrl`.
- `markdown-pipeline.ts` — Markdown sanitization/rendering, math, mermaid extraction, entity decoding. Exports: `HASHTAG_REGEX`, `sanitizeUrl`, `decodeEntities`, `decodeEntitiesDeep`, `renderMath`, `prepareMarkdownSource`, `renderMarkdown`, `renderThinkingMarkdown`.
- `mermaid-render.ts` — Render Mermaid diagrams inside a container. Exports: `renderMermaidDiagrams`.
- `session.ts` — Session normalization/merge/name helpers and session loading. Exports: `SessionEntry`, `normalizeSessionEntry`, `mergeSessionEntries`, `chatName`, `sanitizeSessionName`, `extractChatJidFromAction`, `loadMergedSessions`.
- `storage.ts` — Safe localStorage wrappers. Exports: `safeGetItem`, `safeSetItem`, `safeRemoveItem`, `safeParseJSON`.
- `theme-importer.ts` — VS Code theme import/apply/persist helpers. Exports: `VSCodeThemeJSON`, `importVSCodeTheme`, `applyTheme`, `resetTheme`, `loadSavedTheme`, `saveTheme`, `getSavedThemeVars`.
- `tool-git-context.ts` — Extract git context from tool args and fetch branch info. Exports: `extractToolContextPath`, `getWorkspaceBranch`.

## Panels (panels/)

- `AddonsPanel.tsx` — Add-ons status/list panel. Exports: `AddonsPanel`.
- `AgentPanel.tsx` — Placeholder/entry for agent panel. Exports: `AgentPanel`.
- `ChatPanel.tsx` — Chat composer, queue, notifications, timeline panel. Exports: `ChatPanel`.
- `PanelRouter.tsx` — Active side panel router. Exports: `PanelRouter`.
- `ScratchpadPanel.tsx` — Persisted scratchpad panel. Exports: `ScratchpadPanel`.
- `SearchPanel.tsx` — Search UI panel. Exports: `SearchPanel`.
- `SettingsPanel.tsx` — Settings shell, category navigation, registered pane host. Exports: `SettingsPanel`.
- `TasksPanel.tsx` — Task/workitem list panel. Exports: `TasksPanel`.
- `WorkspacePanel.tsx` — Workspace tree/preview/actions panel. Exports: `WorkspacePanel`.
- `index.ts` — Panel barrel exports. Exports: `PanelRouter`, `ChatPanel`, `WorkspacePanel`, `AgentPanel`, `SettingsPanel`, `ScratchpadPanel`.
- `workspace-panel-helpers.ts` — Workspace preview/chart helpers. Exports: `DOT_COLORS`, `ChildInfo`, `WorkspaceFilePayload`, `FolderChartSegment`, `getWorkspaceFileText`, `getWorkspacePreviewKind`, `buildFolderChartSegments`.

### Settings panels (`panels/settings/`)
- `AppearanceSection.tsx` — Theme/avatar/settings appearance section. Exports: `AppearanceSection`.
- `AvatarSection.tsx` — Avatar upload/reset settings. Exports: `AvatarSection`.
- `CompactionSection.tsx` — Compaction/watchdog settings. Exports: `CompactionSection`.
- `EnvironmentSection.tsx` — Environment variables/settings section. Exports: `EnvironmentSection`.
- `GeneralSection.tsx` — General runtime settings. Exports: `GeneralSection`.
- `KeychainSection.tsx` — Keychain/secret settings. Exports: `KeychainSection`.
- `ModelsSection.tsx` — Model settings section. Exports: `ModelsSection`.
- `NumberStepper.tsx` — Numeric setting stepper. Exports: `NumberStepper`.
- `ProvidersSection.tsx` — Provider listing/settings section. Exports: `ProvidersSection`.
- `RecordingsSection.tsx` — Recording management section. Exports: `RecordingsSection`.
- `SessionsSection.tsx` — Session behavior settings. Exports: `SessionsSection`.
- `ToolsSection.tsx` — Tool/toolset enablement settings. Exports: `ToolsSection`.
- `WorkspaceSection.tsx` — Workspace behavior settings. Exports: `WorkspaceSection`.
- `pane-registry.ts` — Dynamic settings pane registry. Exports: `SettingsPaneDefinition`, `registerSettingsPane`, `unregisterSettingsPane`, `getRegisteredPanes`, `notifySettingsPanesChanged`.
- `types.ts` — Settings data contracts. Exports: `Theme`, `Provider`, `WatchdogPhase`, `CompactionBackoff`, `WorkspaceSettings`, `Toolset`, `Tool`, `SettingsData`, `Category`, `SettingsSectionProps`.

### Workspace panel internals (`panels/workspace/`)
- `FolderPreview.tsx` — Folder preview, file/folder creation and mutation UI. Exports: `FolderPreview`.
- `WorkspaceActions.tsx` — Workspace file action buttons/download/delete/copy path. Exports: `WorkspaceActions`.
- `WorkspacePreview.tsx` — File preview renderer. Exports: `WorkspacePreview`.
- `useWorkspacePreview.ts` — Fetch file preview hook. Exports: `PreviewStatus`, `WorkspacePreviewState`, `useWorkspacePreview`.
- `workspaceUtils.ts` — Workspace mutation/error/json helpers. Exports: `WorkspaceMutationPayload`, `getErrorMessage`, `toUserFacingMessage`, `readJsonSafely`, `makeTreeNodeFromMutation`.

## API Layer (api/)

- `chat-jid.ts` — Chat-scoped URL builders. Exports: `getChatJid`, `getMessageUrl`, `buildChatUrl`, `buildChatScopedUrl`.
- `identity.ts` — User/assistant avatar URL signals. Exports: `userAvatarUrl`, `assistantAvatarUrl`.
- `types.ts` — Generic API response/status types. Exports: `ApiErrorResponse`, `ApiSuccessResponse`, `ApiResponse`, `ConnectionStatus`.

## App-level Modules (app/)

- `ExtensionFrame.tsx` — Extension page iframe/html frame. Exports: `ExtensionFrame`.
- `TerminalPanel.tsx` — Terminal panel wrapper with maximize/visibility/tab modes. Exports: `TerminalPanel`.
- `addon-boot.ts` — Add-on global registration and web entry loader. Exports: `installAddonGlobals`, `loadAddonWebEntries`, `initAddonBoot`.
- `providerState.ts` — Shared provider-configured signal. Exports: `providerConfigured`.
- `tabTypes.ts` — App tab contract. Exports: `Tab`.
- `useCommands.ts` — App-level command registration/effects. Exports: `useCommands`.
- `useConnectionStatus.ts` — Server connection status signal hook. Exports: `useConnectionStatus`.
- `useLayoutPersistence.ts` — Persisted layout sizes/visibility/maximize state. Exports: `LayoutState`, `useLayoutPersistence`.
- `useResizeHandlers.ts` — Mouse resize handlers for side/terminal panes. Exports: `ResizeHandlers`, `useResizeHandlers`.
- `useStatusFlash.ts` — Temporary status flash signal hook. Exports: `StatusFlash`, `useStatusFlash`.
- `useTabs.ts` — App tab lifecycle/state hook. Exports: `useTabs`.
- `widgetOpen.ts` — Widget open-event normalization and tab creation. Exports: `WidgetArtifactKind`, `WidgetOpenDetail`, `buildWidgetOpenDetail`, `buildWidgetTabFromOpenDetail`.

## Conventions

- All overlays/modals should use `OverlayShell` for focus trap, scroll lock, Escape/backdrop behavior, and z-index tiering.
- All popovers/dropdowns should use `useDismissableLayer` for outside-click + Escape dismiss.
- Clipboard operations should use `utils/clipboard.ts` (`copyToClipboard`) rather than direct `navigator.clipboard`; current direct exceptions exist in code-copy/path-copy paths and should be migrated when touched.
- localStorage access should use `utils/storage.ts` safe wrappers where practical; current direct exceptions exist in legacy/persistence paths and should be migrated when touched.
- Shared formatting should use `utils/format.ts`; `utils/formatBytes.ts` is a legacy byte formatter still imported by workspace/file-tree code.
- Dropdowns should use `CustomSelect` instead of native `<select>` for consistent dark popup styling.
- Agent/panel cards should use `PanelHeader` and `CollapsibleContent` for headers/truncation instead of bespoke implementations.
- Overlay z-index tiers are centralized by `OverlayShell`: `--z-popup`, `--z-overlay`, `--z-palette`, `--z-modal`.
- Text overflow should use the `.text-ellipsis` utility class where available/established.
- Settings subsections self-register through `registerSettingsPane(...)` in `panels/settings/pane-registry.ts`.
- Chat-scoped browser fetch URLs should be built through `api/chat-jid.ts` helpers (`getMessageUrl`, `buildChatUrl`, `buildChatScopedUrl`).
- Add-on health is shared via `components/model-context-bar/addonHealthSignal.ts`; provider setup state via `app/providerState.ts`.

## Dependency graph

Local imports only; external libraries (`preact`, `@preact/signals`, etc.) omitted.

### components/
- `ActivityBar.tsx` → `components/Icon`.
- `AddonHealthBadge.tsx` → `components/model-context-bar/addonHealthSignal`.
- `AgentRequestModal.tsx` → `api/chat-jid`, `components/OverlayShell`.
- `AgentStatusPanel.tsx` → `api/chat-jid`, `utils/storage`, `utils/tool-git-context`, `components/AgentRequestModal`, `components/CollapsibleContent`, `components/PanelHeader`.
- `AttachmentChip.tsx` → `components/ImageLightbox`.
- `AvatarPopover.tsx` → `hooks/useDismissableLayer`, `api/identity`.
- `CollapsibleContent.tsx` → `utils/markdown-pipeline`.
- `CommandPalette.tsx` → `components/command-palette-params`, `components/command-palette/CommandList`, `components/command-palette/useCommandFetch`, `components/command-palette/useKeyboardNav`, `components/command-palette/utils`, `components/command-palette/types`.
- `CopyButton.tsx` → `utils/clipboard`.
- `CustomSelect.tsx` → `hooks/useDismissableLayer`.
- `ExtensionPanelCard.tsx` → `utils/markdown-pipeline`, `utils/clipboard`, `utils/format`.
- `FileIcon.tsx` → `utils/file-icons`.
- `FileTree.tsx` → `utils/formatBytes`, `api/chat-jid`, `components/FileIcon`, `utils/storage`.
- `ImageLightbox.tsx` → `components/OverlayShell`.
- `MessageList.tsx` → `components/message-list/useScrollManager`, `useTimelineFetch`, `useTimelineStream`, `MessageItem`, `useCollapsedMessages`, `types`.
- `ModalDialog.tsx` → `components/OverlayShell`.
- `ModelContextBar.tsx` → `hooks/useDismissableLayer`, `components/model-context-bar/{useStatusPolling,useCompaction,useModelPicker,ModelPicker,ThinkingPicker,ContextRing}`, `app/providerState`.
- `ProviderWizard.tsx` → `api/chat-jid`, `panels/settings/types`, `components/CustomSelect`.
- `SystemStats.tsx` → `utils/format`.
- `TabBar.tsx` → `app/tabTypes`.
- `WidgetPane.tsx` → `components/OverlayShell`.
- `command-palette/CommandList.tsx` → `command-palette/types`.
- `command-palette/useCommandFetch.ts` → `services`, `command-palette/types`.
- `command-palette/utils.ts` → `api/chat-jid`.
- `message-list/AdaptiveCardRenderer.tsx` → `message-list/types`.
- `message-list/DelimitedTable.tsx` → `utils/delimited-preview`.
- `message-list/HighlightPopup.tsx` → `hooks/useDismissableLayer`, `utils/highlight-serializer`.
- `message-list/MessageActionBar.tsx` → `hooks/useDialog`, `utils/clipboard`.
- `message-list/MessageItem.tsx` → `HighlightPopup`, `utils/highlight-serializer`, `ImageLightbox`, `AttachmentChip`, `DelimitedTable`, `utils/delimited-preview`, `utils/markdown-pipeline`, `helpers`, `MessageActionBar`, `api/identity`, `AvatarPopover`, `AdaptiveCardRenderer`, `CopyButton`, `types`, `utils/storage`.
- `message-list/helpers.ts` → `message-list/types`, `utils/format`.
- `message-list/useCollapsedMessages.ts` → `api/chat-jid`.
- `message-list/useScrollManager.ts` → `api/chat-jid`, `utils/mermaid-render`, `message-list/helpers`, `message-list/types`.
- `message-list/useTimelineFetch.ts` → `api/chat-jid`, `message-list/helpers`, `message-list/types`.
- `message-list/useTimelineStream.ts` → `api/chat-jid`, `message-list/helpers`, `message-list/types`.
- `model-context-bar/ContextRing.tsx` → `model-context-bar/types`.
- `model-context-bar/ModelPicker.tsx` → `model-context-bar/types`, `utils/format`.
- `model-context-bar/ThinkingPicker.tsx` → `model-context-bar/types`.
- `model-context-bar/addonHealthSignal.ts` → `model-context-bar/types`.
- `model-context-bar/useCompaction.ts` → `api/chat-jid`.
- `model-context-bar/useModelPicker.ts` → `api/chat-jid`, `model-context-bar/types`.
- `model-context-bar/useStatusPolling.ts` → `api/chat-jid`, `model-context-bar/types`, `model-context-bar/addonHealthSignal`, `app/providerState`.

### hooks/
- `useDialog.ts` → `components/ModalDialog`.
- `useDismissableLayer.ts` → no local imports.

### utils/
- `code-highlighting.ts` → `utils/bicep-mode`.
- `markdown-pipeline.ts` → `utils/code-highlighting`.
- Other utility modules in scope have no local imports.

### panels/
- `AddonsPanel.tsx` → `components/model-context-bar/addonHealthSignal`.
- `ChatPanel.tsx` → `components/AgentStatusPanel`, `components/QueueStack`, `api/chat-jid`, `components/MessageList`.
- `PanelRouter.tsx` → `WorkspacePanel`, `SearchPanel`, `AddonsPanel`, `AgentPanel`, `TasksPanel`, `SettingsPanel`, `ScratchpadPanel`.
- `ScratchpadPanel.tsx` → `api/chat-jid`, `utils/storage`.
- `SearchPanel.tsx` → `components/CustomSelect`.
- `SettingsPanel.tsx` → `panels/settings/types`, `utils/storage`, `panels/settings/pane-registry`.
- `TasksPanel.tsx` → `api/chat-jid`, `hooks/useDialog`.
- `WorkspacePanel.tsx` → `components/FileTree`, `utils/formatBytes`, `utils/storage`, `panels/workspace/FolderPreview`, `useWorkspacePreview`, `WorkspaceActions`, `WorkspacePreview`, `hooks/useDialog`.
- `settings/AppearanceSection.tsx` → `settings/types`, `AvatarSection`, `pane-registry`, `utils/bundled-themes`, `components/CustomSelect`.
- `settings/CompactionSection.tsx` → `settings/types`, `NumberStepper`, `pane-registry`.
- `settings/EnvironmentSection.tsx` → `pane-registry`.
- `settings/GeneralSection.tsx` → `settings/types`, `NumberStepper`, `pane-registry`.
- `settings/KeychainSection.tsx` → `hooks/useDialog`, `pane-registry`, `components/CustomSelect`.
- `settings/ModelsSection.tsx` → `api/chat-jid`, `settings/types`, `pane-registry`.
- `settings/ProvidersSection.tsx` → `api/chat-jid`, `settings/types`, `pane-registry`.
- `settings/RecordingsSection.tsx` → `api/chat-jid`, `components/ModalDialog`, `pane-registry`.
- `settings/SessionsSection.tsx` → `settings/types`, `NumberStepper`, `pane-registry`, `components/CustomSelect`.
- `settings/ToolsSection.tsx` → `settings/types`, `pane-registry`.
- `settings/WorkspaceSection.tsx` → `settings/types`, `NumberStepper`, `pane-registry`.
- `workspace/FolderPreview.tsx` → `components/FileTree`, `utils/formatBytes`, `hooks/useDialog`.
- `workspace/WorkspaceActions.tsx` → `components/FileTree`, `utils/markdown-pipeline`.
- `workspace/WorkspacePreview.tsx` → `workspace-panel-helpers`, `useWorkspacePreview`, `utils/markdown-pipeline`.
- `workspace/useWorkspacePreview.ts` → `components/FileTree`, `workspaceUtils`.
- `workspace/workspaceUtils.ts` → `components/FileTree`.

### api/
- `chat-jid.ts`, `identity.ts`, `types.ts` → no local imports.

### app/
- `TerminalPanel.tsx` → `components/TerminalComponent`.
- `useCommands.ts` → `services`, `utils/storage`, `theme/ThemeProvider`.
- `useConnectionStatus.ts` → `api/types`.
- `useLayoutPersistence.ts` → `utils/storage`.
- `useTabs.ts` → `app/tabTypes`, `api/chat-jid`, `app/widgetOpen`.
- `widgetOpen.ts` → `app/tabTypes`.
- `ExtensionFrame.tsx`, `addon-boot.ts`, `providerState.ts`, `tabTypes.ts`, `useResizeHandlers.ts`, `useStatusFlash.ts` → no local imports in scoped directories.

## Interface contracts (do not break)

- `OverlayShell({ open, onClose?, escape?, backdrop?, scrollLock?, focusTrap?, tier?, className?, ariaLabel?, children })` — central overlay behavior; valid tiers: `modal`, `palette`, `overlay`, `popup`.
- `useDismissableLayer({ ref, open, onDismiss, outsideEvent?, escape? })` — outside/Escape dismiss hook for floating UI.
- `useDialog()` returns `{ showPrompt, showConfirm, showAlert, DialogHost }` where prompt resolves `string | null`, confirm resolves `boolean`, alert resolves `void`.
- `copyToClipboard(text: string): Promise<boolean>` — returns success/failure and encapsulates fallback behavior.
- `safeGetItem(key): string | null`, `safeSetItem(key, value): void`, `safeRemoveItem(key): void`, `safeParseJSON<T>(key, fallback): T` — storage calls must not throw.
- `renderMarkdown(text, { sanitize? } = {}): string` and `renderThinkingMarkdown(text): string` — return sanitized/rendered HTML strings for UI injection.
- `formatBytes(bytes)`, `formatBytesCompact(bytes)`, `formatDuration(seconds)`, `formatElapsed(isoTimestamp, nowMs?)`, `formatRelativeTime(timestamp)`, `formatTokenWindow(tokens)` — shared display formatting.
- `getChatJid(): string`, `getMessageUrl(): string`, `buildChatUrl(path, params?)`, `buildChatScopedUrl(path, params?)` — preserve chat-scoping semantics for API calls.
- `FileTree({ onFileSelect, showHidden? })` emits `TreeNode` selections; `TreeNode` is re-exported as a type from `FileTree.tsx`.
- `WorkspaceMutationPayload` and `makeTreeNodeFromMutation(payload)` bridge mutation API responses into `TreeNode` structures.
- `registerSettingsPane(def)`, `unregisterSettingsPane(id)`, `getRegisteredPanes()`, `notifySettingsPanesChanged()` define the dynamic settings pane contract.
- `buildWidgetOpenDetail(block)` and `buildWidgetTabFromOpenDetail(detail, fallbackChatJid)` define widget artifact-to-tab conversion.
- `normalizeExtensionPanelPayload(payload, id?, nowMs?)` normalizes extension-provided panel payloads consumed by `ExtensionPanelCard`.
- `useStatusPolling()`, `useModelPicker()`, and `useCompaction(fetchContext)` provide the model context bar state/action contracts consumed by `ModelContextBar`.
