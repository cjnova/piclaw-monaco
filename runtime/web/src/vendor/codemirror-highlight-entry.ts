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
import { clojure } from "@codemirror/legacy-modes/mode/clojure";
import { cmake } from "@codemirror/legacy-modes/mode/cmake";
import { coffeeScript } from "@codemirror/legacy-modes/mode/coffeescript";
import { crystal } from "@codemirror/legacy-modes/mode/crystal";
import { cypher } from "@codemirror/legacy-modes/mode/cypher";
import { d } from "@codemirror/legacy-modes/mode/d";
import { diff } from "@codemirror/legacy-modes/mode/diff";
import { eiffel } from "@codemirror/legacy-modes/mode/eiffel";
import { elm } from "@codemirror/legacy-modes/mode/elm";
import { erlang } from "@codemirror/legacy-modes/mode/erlang";
import { factor } from "@codemirror/legacy-modes/mode/factor";
import { forth } from "@codemirror/legacy-modes/mode/forth";
import { fortran } from "@codemirror/legacy-modes/mode/fortran";
import { gas } from "@codemirror/legacy-modes/mode/gas";
import { gherkin } from "@codemirror/legacy-modes/mode/gherkin";
import { groovy } from "@codemirror/legacy-modes/mode/groovy";
import { haskell } from "@codemirror/legacy-modes/mode/haskell";
import { haxe } from "@codemirror/legacy-modes/mode/haxe";
import { http } from "@codemirror/legacy-modes/mode/http";
import { jinja2 } from "@codemirror/legacy-modes/mode/jinja2";
import { julia } from "@codemirror/legacy-modes/mode/julia";
import { liveScript } from "@codemirror/legacy-modes/mode/livescript";
import { lua } from "@codemirror/legacy-modes/mode/lua";
import { mathematica } from "@codemirror/legacy-modes/mode/mathematica";
import { fSharp } from "@codemirror/legacy-modes/mode/mllike";
import { nginx } from "@codemirror/legacy-modes/mode/nginx";
import { octave } from "@codemirror/legacy-modes/mode/octave";
import { oz } from "@codemirror/legacy-modes/mode/oz";
import { pascal } from "@codemirror/legacy-modes/mode/pascal";
import { perl } from "@codemirror/legacy-modes/mode/perl";
import { properties } from "@codemirror/legacy-modes/mode/properties";
import { protobuf } from "@codemirror/legacy-modes/mode/protobuf";
import { pug } from "@codemirror/legacy-modes/mode/pug";
import { puppet } from "@codemirror/legacy-modes/mode/puppet";
import { r } from "@codemirror/legacy-modes/mode/r";
import { sas } from "@codemirror/legacy-modes/mode/sas";
import { sass } from "@codemirror/legacy-modes/mode/sass";
import { scheme } from "@codemirror/legacy-modes/mode/scheme";
import { smalltalk } from "@codemirror/legacy-modes/mode/smalltalk";
import { solr } from "@codemirror/legacy-modes/mode/solr";
import { sparql } from "@codemirror/legacy-modes/mode/sparql";
import { stex } from "@codemirror/legacy-modes/mode/stex";
import { stylus } from "@codemirror/legacy-modes/mode/stylus";
import { tcl } from "@codemirror/legacy-modes/mode/tcl";
import { textile } from "@codemirror/legacy-modes/mode/textile";
import { turtle } from "@codemirror/legacy-modes/mode/turtle";
import { vb } from "@codemirror/legacy-modes/mode/vb";
import { verilog } from "@codemirror/legacy-modes/mode/verilog";
import { vhdl } from "@codemirror/legacy-modes/mode/vhdl";
import { wast } from "@codemirror/legacy-modes/mode/wast";
import { webIDL } from "@codemirror/legacy-modes/mode/webidl";
import { xQuery } from "@codemirror/legacy-modes/mode/xquery";

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
  clojure,
  cmake,
  coffeeScript,
  crystal,
  cypher,
  d,
  diff,
  eiffel,
  elm,
  erlang,
  factor,
  forth,
  fortran,
  gas,
  gherkin,
  groovy,
  haskell,
  haxe,
  http,
  jinja2,
  julia,
  liveScript,
  lua,
  mathematica,
  fSharp,
  nginx,
  octave,
  oz,
  pascal,
  perl,
  properties,
  protobuf,
  pug,
  puppet,
  r,
  sas,
  sass,
  scheme,
  smalltalk,
  solr,
  sparql,
  stex,
  stylus,
  tcl,
  textile,
  turtle,
  vb,
  verilog,
  vhdl,
  wast,
  webIDL,
  xQuery,
};
