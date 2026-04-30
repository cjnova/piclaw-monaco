import { expect, test } from "bun:test";

import { buildChatScopedUrl } from "../../../web/frontend/src/api/chat-jid";
import { renderSafeMarkdown } from "../../../web/frontend/src/utils/markdown";

test("buildChatScopedUrl encodes chat_jid and preserves query params", () => {
  expect(buildChatScopedUrl("/timeline", { limit: 50, before: 12 })).toBe(
    "/timeline?limit=50&before=12&chat_jid=web%3Adefault"
  );
});

test("renderSafeMarkdown strips dangerous markup from rendered markdown", () => {
  const html = renderSafeMarkdown(
    '[safe](https://example.com) <img src="/ok.png" onload="alert(1)"> <script>alert(1)</script> [bad](javascript:alert(2))'
  );

  expect(html).toContain('<a href="https://example.com">safe</a>');
  expect(html).not.toContain("onload");
  expect(html).not.toContain("<script>");
  expect(html).not.toContain("javascript:");
});
