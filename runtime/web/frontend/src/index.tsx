import { render } from "preact";
import { App } from "./App";
import { initAddonBoot } from "./app/addon-boot";

// Install addon globals and start loading addon web entries before render.
initAddonBoot();

const root = document.getElementById("app");

if (!root) {
  throw new Error("Missing #app root element");
}

render(<App />, root);
