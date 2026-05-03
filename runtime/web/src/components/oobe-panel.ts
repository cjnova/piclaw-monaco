// @ts-nocheck
import { html } from '../vendor/preact-htm.js';

export function OobePanel({
  kind = 'hidden',
  onSetupProvider,
  onDismiss,
}) {
  if (kind === 'hidden') return null;

  const isProviderMissing = kind === 'provider-missing';
  const title = isProviderMissing ? 'Instance needs setup' : 'Instance is configured';
  const body = isProviderMissing
    ? 'This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.'
    : 'This instance looks configured. Review or update provider and model settings in Settings.';
  return html`
    <section class=${`oobe-panel oobe-panel-${kind}`} aria-label="Getting started">
      <div class="oobe-panel-copy">
        <div class="oobe-panel-eyebrow">Getting started</div>
        <h2 class="oobe-panel-title">${title}</h2>
        <p class="oobe-panel-body">${body}</p>
      </div>
      <div class="oobe-panel-actions">
        <button type="button" class="oobe-panel-btn oobe-panel-btn-primary" onClick=${() => onSetupProvider?.()}>
          Open Settings
        </button>
        <button type="button" class="oobe-panel-btn" onClick=${() => onDismiss?.()}>
          ${isProviderMissing ? 'Dismiss' : 'Done'}
        </button>
      </div>
    </section>
  `;
}
