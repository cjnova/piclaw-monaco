/**
 * Syntax highlighting using CodeMirror/Lezer parsers via window.cmHighlight global.
 * Deferred-loaded — returns plain escaped HTML if global not available yet.
 */

interface CmHighlight {
  classHighlighter: any;
  highlightTree: (tree: any, highlighter: any, callback: (from: number, to: number, cls: string) => void) => void;
  StreamLanguage: { define: (spec: any) => { parser: any } };
  // Language parsers
  cssLanguage: { parser: any };
  cppLanguage: { parser: any };
  goLanguage: { parser: any };
  htmlLanguage: { parser: any };
  javascriptLanguage: { parser: any };
  jsxLanguage: { parser: any };
  tsxLanguage: { parser: any };
  typescriptLanguage: { parser: any };
  jsonLanguage: { parser: any };
  markdownLanguage: { parser: any };
  pythonLanguage: { parser: any };
  rustLanguage: { parser: any };
  StandardSQL: { language: { parser: any } };
  xmlLanguage: { parser: any };
  yamlLanguage: { parser: any };
  dockerFile: any;
  powerShell: any;
  ruby: any;
  shell: any;
  swift: any;
  toml: any;
}

declare global {
  interface Window {
    cmHighlight?: CmHighlight;
  }
}

function getCm(): CmHighlight | null {
  return (window as any).cmHighlight ?? null;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Language label aliases (human-readable names)
const LANGUAGE_LABEL_ALIASES: Record<string, string> = {
  js: "JavaScript", javascript: "JavaScript",
  ts: "TypeScript", typescript: "TypeScript",
  jsx: "JSX", tsx: "TSX",
  py: "Python", python: "Python",
  sh: "Shell", shell: "Shell", bash: "Bash", zsh: "Zsh",
  ps1: "PowerShell", powershell: "PowerShell",
  md: "Markdown", markdown: "Markdown",
  yml: "YAML", yaml: "YAML",
  json: "JSON", html: "HTML", css: "CSS", sql: "SQL",
  go: "Go",
  c: "C", cc: "C++", cpp: "C++", "c++": "C++", cxx: "C++",
  h: "C/C++", hh: "C++", hpp: "C++", hxx: "C++",
  rust: "Rust", rs: "Rust",
  ruby: "Ruby", rb: "Ruby",
  swift: "Swift",
  toml: "TOML",
  dockerfile: "Dockerfile",
  xml: "XML",
  plaintext: "Text", text: "Text",
};

export function normalizeCodeLanguageLabel(lang: string): string {
  const raw = String(lang || "").trim().toLowerCase();
  if (!raw) return "Text";
  return LANGUAGE_LABEL_ALIASES[raw] || String(lang || "").trim();
}

// Cache legacy parsers so StreamLanguage.define is only called once
let _shellParser: any;
let _powerShellParser: any;
let _dockerFileParser: any;
let _rubyParser: any;
let _swiftParser: any;
let _tomlParser: any;

function getLegacyParser(cm: CmHighlight, name: string): any {
  switch (name) {
    case "shell": return _shellParser ??= cm.StreamLanguage.define(cm.shell).parser;
    case "powershell": return _powerShellParser ??= cm.StreamLanguage.define(cm.powerShell).parser;
    case "dockerfile": return _dockerFileParser ??= cm.StreamLanguage.define(cm.dockerFile).parser;
    case "ruby": return _rubyParser ??= cm.StreamLanguage.define(cm.ruby).parser;
    case "swift": return _swiftParser ??= cm.StreamLanguage.define(cm.swift).parser;
    case "toml": return _tomlParser ??= cm.StreamLanguage.define(cm.toml).parser;
    default: return null;
  }
}

export function parserForCodeFenceLanguage(lang: string): { parse: (input: string) => any } | null {
  const cm = getCm();
  if (!cm) return null;

  const raw = String(lang || "").trim().toLowerCase();
  switch (raw) {
    case "js": case "javascript": return cm.javascriptLanguage.parser;
    case "ts": case "typescript": return cm.typescriptLanguage.parser;
    case "jsx": return cm.jsxLanguage.parser;
    case "tsx": return cm.tsxLanguage.parser;
    case "py": case "python": return cm.pythonLanguage.parser;
    case "json": return cm.jsonLanguage.parser;
    case "css": return cm.cssLanguage.parser;
    case "html": return cm.htmlLanguage.parser;
    case "xml": return cm.xmlLanguage.parser;
    case "yaml": case "yml": return cm.yamlLanguage.parser;
    case "md": case "markdown": return cm.markdownLanguage.parser;
    case "sql": return cm.StandardSQL.language.parser;
    case "go": return cm.goLanguage.parser;
    case "c": case "cc": case "cpp": case "cxx": case "c++":
    case "h": case "hh": case "hpp": case "hxx": return cm.cppLanguage.parser;
    case "rs": case "rust": return cm.rustLanguage.parser;
    case "sh": case "bash": case "shell": case "zsh": return getLegacyParser(cm, "shell");
    case "ps1": case "powershell": return getLegacyParser(cm, "powershell");
    case "dockerfile": return getLegacyParser(cm, "dockerfile");
    case "rb": case "ruby": return getLegacyParser(cm, "ruby");
    case "swift": return getLegacyParser(cm, "swift");
    case "toml": return getLegacyParser(cm, "toml");
    default: return null;
  }
}

interface TokenSegment { from: number; to: number; cls: string; }

export function highlightCodeToHtml(code: string, lang: string): string {
  const parser = parserForCodeFenceLanguage(lang);
  if (!parser) return escapeHtml(code);

  const cm = getCm()!;
  const tokens: TokenSegment[] = [];
  try {
    const tree = parser.parse(code);
    cm.highlightTree(tree, cm.classHighlighter, (from: number, to: number, cls: string) => {
      if (!cls || from >= to) return;
      tokens.push({ from, to, cls });
    });
  } catch {
    return escapeHtml(code);
  }

  if (!tokens.length) return escapeHtml(code);
  tokens.sort((a, b) => a.from - b.from || a.to - b.to);

  let cursor = 0;
  let html = "";
  for (const token of tokens) {
    if (token.from > cursor) html += escapeHtml(code.slice(cursor, token.from));
    html += `<span class="${escapeHtml(token.cls)}">${escapeHtml(code.slice(token.from, token.to))}</span>`;
    cursor = Math.max(cursor, token.to);
  }
  if (cursor < code.length) html += escapeHtml(code.slice(cursor));
  return html;
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

export function applySyntaxHighlighting(html: string): string {
  if (!html) return html;
  return html.replace(
    /<pre><code(?:\s+class="language-([A-Za-z0-9_+-]+)")?>([\s\S]*?)<\/code><\/pre>/g,
    (_match, lang, code) => {
      const normalizedLang = String(lang || "").trim().toLowerCase();
      const decodedCode = decodeHtmlEntities(decodeHtmlEntities(code));
      const highlighted = highlightCodeToHtml(decodedCode, normalizedLang);
      const langClass = normalizedLang || "plaintext";
      const humanLabel = normalizeCodeLanguageLabel(langClass);
      // UTF-8 safe base64 encode the raw code for the copy button
      const encodedCode = btoa(unescape(encodeURIComponent(decodedCode)));
      return [
        `<div class="code-block">`,
        `<div class="code-block__header">`,
        `<span class="code-block__lang">${escapeHtml(humanLabel)}</span>`,
        `<button class="code-block__copy" aria-label="Copy code" data-code="${encodedCode}">`,
        `<i class="codicon codicon-copy"></i>`,
        `</button>`,
        `</div>`,
        `<pre><code class="hljs language-${langClass}">${highlighted}</code></pre>`,
        `</div>`,
      ].join("");
    }
  );
}
