import { expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import '../helpers.js';
import { importFresh, withTempWorkspaceEnv } from '../helpers.js';

test('saveGeneralSettings persists and applies general settings immediately', async () => {
  await withTempWorkspaceEnv('piclaw-general-settings-', {
    PICLAW_WEB_COMPOSE_UPLOAD_LIMIT_MB: undefined,
    PICLAW_WEB_WORKSPACE_UPLOAD_LIMIT_MB: undefined,
  }, async (workspace) => {
    const handler = await importFresh<typeof import('../../src/channels/web/handlers/general-settings.js')>(
      '../src/channels/web/handlers/general-settings.js',
    );

    const saved = await handler.saveGeneralSettings({
      assistantName: 'Smith',
      assistantAvatar: 'https://example.test/assistant.png',
      userName: 'Rui',
      userAvatar: 'https://example.test/user.png',
      sessionAutoRotate: false,
      sessionMaxSizeMb: 48,
      webTerminalEnabled: false,
      composeUploadLimitMb: 24,
      workspaceUploadLimitMb: 256,
      toolUseBudget: 23,
      uiTheme: 'dracula',
      uiTint: '#7c3aed',
    });

    expect(saved).toMatchObject({
      assistantName: 'Smith',
      assistantAvatar: 'https://example.test/assistant.png',
      userName: 'Rui',
      userAvatar: 'https://example.test/user.png',
      sessionAutoRotate: false,
      sessionMaxSizeMb: 48,
      webTerminalEnabled: false,
      composeUploadLimitMb: 24,
      workspaceUploadLimitMb: 256,
      toolUseBudget: 23,
      uiTheme: 'dracula',
      uiTint: '#7c3aed',
    });
    expect(saved.instanceTotp.configured).toBe(false);
    expect(handler.getGeneralSettingsData()).toMatchObject(saved);

    const persisted = JSON.parse(readFileSync(join(workspace.workspace, '.piclaw', 'config.json'), 'utf8'));
    expect(persisted).toMatchObject({
      assistant: {
        assistantName: 'Smith',
        assistantAvatar: 'https://example.test/assistant.png',
      },
      user: {
        userName: 'Rui',
        userAvatar: 'https://example.test/user.png',
      },
      sessionAutoRotate: false,
      sessionMaxSizeMb: 48,
      turnMaxToolUseMessages: 23,
      web: {
        terminalEnabled: false,
        composeUploadLimitMb: 24,
        workspaceUploadLimitMb: 256,
      },
      ui: {
        theme: 'dracula',
        tint: '#7c3aed',
      },
    });
  });
});
