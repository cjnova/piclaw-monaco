export interface ToolStatusHint {
  key?: string;
  icon_svg: string;
  label: string;
  title?: string;
  kind?: string;
}

export interface ToolStatusHintContext {
  chatJid: string;
  toolName: string;
  args: unknown;
  payload: Record<string, unknown>;
}

export interface ToolStatusHintProvider {
  id: string;
  buildHints: (context: ToolStatusHintContext) => ToolStatusHint[] | ToolStatusHint | null | undefined;
}

const providers = new Map<string, ToolStatusHintProvider>();

export function registerToolStatusHintProvider(provider: ToolStatusHintProvider): void {
  if (!provider?.id || typeof provider.buildHints !== 'function') return;
  providers.set(provider.id, provider);
}

export function resolveToolStatusHints(context: ToolStatusHintContext): ToolStatusHint[] {
  const resolved: ToolStatusHint[] = [];
  const seen = new Set<string>();

  for (const provider of providers.values()) {
    let candidate: ToolStatusHint[] | ToolStatusHint | null | undefined;
    try {
      candidate = provider.buildHints(context);
    } catch {
      continue;
    }
    const list = Array.isArray(candidate) ? candidate : (candidate ? [candidate] : []);
    for (const hint of list) {
      if (!hint || typeof hint.icon_svg !== 'string' || !hint.icon_svg.trim()) continue;
      if (typeof hint.label !== 'string' || !hint.label.trim()) continue;
      const normalized: ToolStatusHint = {
        ...(hint.key ? { key: String(hint.key) } : {}),
        icon_svg: hint.icon_svg.trim(),
        label: hint.label.trim(),
        ...(typeof hint.title === 'string' && hint.title.trim() ? { title: hint.title.trim() } : {}),
        ...(typeof hint.kind === 'string' && hint.kind.trim() ? { kind: hint.kind.trim() } : {}),
      };
      const dedupeKey = normalized.key || `${normalized.icon_svg}::${normalized.label}::${normalized.title || ''}`;
      if (seen.has(dedupeKey)) continue;
      seen.add(dedupeKey);
      resolved.push(normalized);
    }
  }

  return resolved;
}
