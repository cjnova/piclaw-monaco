import { describe, expect, test } from "bun:test";

import {
  compareSettingsPanesAlphabetically,
  getRegisteredSettingsPanes,
  registerSettingsPane,
  unregisterSettingsPane,
} from "../../web/src/components/settings/pane-registry.js";

describe("settings pane registry", () => {
  test("sorts extension settings panes alphabetically by label", () => {
    expect(compareSettingsPanesAlphabetically(
      { id: "zeta", label: "Zeta" },
      { id: "alpha", label: "Alpha" },
    )).toBeGreaterThan(0);
    expect(compareSettingsPanesAlphabetically(
      { id: "beta-2", label: "Beta" },
      { id: "beta-1", label: "Beta" },
    )).toBeGreaterThan(0);
  });

  test("registered settings panes are listed alphabetically regardless of requested order", () => {
    const ids = ["settings-registry-zeta", "settings-registry-alpha", "settings-registry-beta"];
    for (const id of ids) unregisterSettingsPane(id);

    try {
      registerSettingsPane({ id: ids[0], label: "Zeta", icon: null, component: null, order: 1 });
      registerSettingsPane({ id: ids[1], label: "Alpha", icon: null, component: null, order: 999 });
      registerSettingsPane({ id: ids[2], label: "Beta", icon: null, component: null, order: 10 });

      const registeredIds = getRegisteredSettingsPanes()
        .filter((pane) => ids.includes(pane.id))
        .map((pane) => pane.id);

      expect(registeredIds).toEqual([ids[1], ids[2], ids[0]]);
    } finally {
      for (const id of ids) unregisterSettingsPane(id);
    }
  });
});
