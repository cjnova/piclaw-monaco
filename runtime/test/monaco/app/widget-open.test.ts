import { describe, expect, test } from "bun:test";
import { buildWidgetOpenDetail, buildWidgetTabFromOpenDetail } from "../../../web/frontend/src/app/widgetOpen";

describe("session_tree widget open regression", () => {
  test("preserves artifact metadata and auto_open on piclaw:widget-open", () => {
    const detail = buildWidgetOpenDetail({
      title: "Session Tree",
      widget_id: "session-tree-123",
      auto_open: true,
      chat_jid: "web:default",
      artifact: {
        kind: "session_tree",
        tree: { leafId: "leaf-1" },
      },
    });

    expect(detail).not.toBeNull();
    expect(detail?.artifact?.kind).toBe("session_tree");
    expect(detail?.artifact?.tree).toEqual({ leafId: "leaf-1" });
    expect(detail?.auto_open).toBe(true);
    expect(detail?.widget_id).toBe("session-tree-123");
  });

  test("routes session_tree widgets to the static URL-backed viewer", () => {
    const detail = buildWidgetOpenDetail({
      title: "Session Tree",
      widget_id: "session-tree-123",
      artifact: {
        kind: "session_tree",
        tree: { leafId: "leaf-1" },
      },
    });

    const tab = detail ? buildWidgetTabFromOpenDetail(detail, "web:primary") : null;
    expect(tab).not.toBeNull();
    expect(tab?.type).toBe("widget");
    expect(tab?.widgetKind).toBe("session_tree");
    expect(tab?.widgetHtml).toBeUndefined();
    expect(tab?.widgetSrc).toBe("/static/session-tree.html?chat_jid=web%3Aprimary");
  });

  test("prefers the widget chat_jid when provided", () => {
    const detail = buildWidgetOpenDetail({
      title: "Session Tree",
      widget_id: "session-tree-456",
      chat_jid: "web:branch",
      artifact: {
        kind: "session_tree",
        tree: { leafId: "leaf-2" },
      },
    });

    const tab = detail ? buildWidgetTabFromOpenDetail(detail, "web:primary") : null;
    expect(tab?.widgetSrc).toBe("/static/session-tree.html?chat_jid=web%3Abranch");
  });
});
