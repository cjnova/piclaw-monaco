/**
 * Lightweight CodeMirror/Lezer entry for syntax highlighting only.
 * Exports language parsers + highlight utilities as a global.
 * Much smaller than the full editor bundle.
 */
import { classHighlighter, highlightTree } from "@lezer/highlight";
import { StreamLanguage } from "@codemirror/language";
import { cssLanguage } from "@codemirror/lang-css";
import { cppLanguage } from "@codemirror/lang-cpp";
import { goLanguage } from "@codemirror/lang-go";
import { htmlLanguage } from "@codemirror/lang-html";
import { javascriptLanguage, jsxLanguage, tsxLanguage, typescriptLanguage } from "@codemirror/lang-javascript";
import { jsonLanguage } from "@codemirror/lang-json";
import { markdownLanguage } from "@codemirror/lang-markdown";
import { pythonLanguage } from "@codemirror/lang-python";
import { rustLanguage } from "@codemirror/lang-rust";
import { StandardSQL } from "@codemirror/lang-sql";
import { xmlLanguage } from "@codemirror/lang-xml";
import { yamlLanguage } from "@codemirror/lang-yaml";
import { dockerFile } from "@codemirror/legacy-modes/mode/dockerfile";
import { powerShell } from "@codemirror/legacy-modes/mode/powershell";
import { ruby } from "@codemirror/legacy-modes/mode/ruby";
import { shell } from "@codemirror/legacy-modes/mode/shell";
import { swift } from "@codemirror/legacy-modes/mode/swift";
import { toml } from "@codemirror/legacy-modes/mode/toml";

(globalThis as any).cmHighlight = {
  classHighlighter,
  highlightTree,
  StreamLanguage,
  cssLanguage,
  cppLanguage,
  goLanguage,
  htmlLanguage,
  javascriptLanguage,
  jsxLanguage,
  tsxLanguage,
  typescriptLanguage,
  jsonLanguage,
  markdownLanguage,
  pythonLanguage,
  rustLanguage,
  StandardSQL,
  xmlLanguage,
  yamlLanguage,
  dockerFile,
  powerShell,
  ruby,
  shell,
  swift,
  toml,
};
