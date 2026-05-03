import { expect, test } from "bun:test";

import { WhatsAppChannel } from "../../src/channels/whatsapp.js";

test("WhatsAppChannel.connect rejects when the first scheduled reconnect attempt throws", async () => {
  const channel = new WhatsAppChannel({
    onMessage: () => {},
    onChatMetadata: () => {},
    chatJids: () => new Set(),
  }) as any;

  let connectCalls = 0;
  channel.connectInternal = async (onFirstOpen?: () => void) => {
    connectCalls += 1;
    if (connectCalls === 1) {
      queueMicrotask(() => {
        void channel.connectInternal(onFirstOpen).catch((error: unknown) => {
          channel.settlePendingConnectError(error);
        });
      });
      return;
    }
    throw new Error("scheduled reconnect failed");
  };

  await expect(channel.connect()).rejects.toThrow("scheduled reconnect failed");
  expect(connectCalls).toBe(2);
});

test("WhatsAppChannel re-kicks queue flushing after a reconnect races with a failing stale flush", async () => {
  const channel = new WhatsAppChannel({
    onMessage: () => {},
    onChatMetadata: () => {},
    chatJids: () => new Set(),
  }) as any;

  channel.connected = true;
  channel.outgoingQueue.push(
    { jid: "chat-1", text: "first" },
    { jid: "chat-1", text: "second" },
  );

  let rejectFirstSend!: (error: Error) => void;
  const firstSend = new Promise<never>((_, reject) => {
    rejectFirstSend = reject;
  });
  const delivered: string[] = [];

  channel.sock = {
    sendMessage: (jid: string, payload: { text: string }) => {
      if (payload.text === "first") {
        return firstSend;
      }
      delivered.push(`${jid}:${payload.text}`);
      return Promise.resolve();
    },
  };

  const staleFlush = channel.flushOutgoingQueue();
  expect(channel.flushing).toBe(true);
  expect(channel.outgoingQueue.map((item: { text: string }) => item.text)).toEqual(["second"]);

  channel.flushOutgoingQueue();

  rejectFirstSend(new Error("socket closed"));
  await expect(staleFlush).rejects.toThrow("socket closed");
  await Bun.sleep(0);

  expect(delivered).toEqual(["chat-1:second"]);
  expect(channel.outgoingQueue).toHaveLength(0);
});
