import { render } from "preact";
import { App } from "./App";
import { ensureMarkdownVendors, ensureKatex } from "./utils/lazy-vendor";

// Eagerly start loading vendors in parallel with app render
// They're needed for first message render but don't block mount
ensureMarkdownVendors();
ensureKatex();

const root = document.getElementById("app");

if (!root) {
  throw new Error("Missing #app root element");
}

render(<App />, root);
