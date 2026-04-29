import { afterEach, expect, test } from 'bun:test';

import {
  buildSpeakablePostText,
  getSpeechPlaybackState,
  isSpeechSynthesisSupported,
  speakPostText,
  stopSpeechPlayback,
  subscribeSpeechPlayback,
} from '../../web/src/components/post-speech.ts';

afterEach(() => {
  stopSpeechPlayback({ window: { speechSynthesis: { cancel() {} } } as any });
});

test('isSpeechSynthesisSupported detects browser TTS availability', () => {
  function FakeUtterance(this: any, text: string) {
    this.text = text;
  }

  expect(isSpeechSynthesisSupported({ window: { speechSynthesis: {}, SpeechSynthesisUtterance: FakeUtterance } })).toBe(true);
  expect(isSpeechSynthesisSupported({ window: { speechSynthesis: {} } })).toBe(false);
});

test('buildSpeakablePostText strips markdown noise and code fences', () => {
  const text = buildSpeakablePostText({
    data: {
      content: '# Heading\n\nHello [`world`](https://example.com).\n\n```ts\nconsole.log("hidden");\n```\n\n- item one\n- item two',
    },
  });

  expect(text).toContain('Heading');
  expect(text).toContain('Hello world.');
  expect(text).toContain('Code block omitted.');
  expect(text).toContain('• item one');
  expect(text).not.toContain('console.log');
});

test('speakPostText drives shared playback state and stopSpeechPlayback clears it', () => {
  const spoken: string[] = [];
  const cancelled: string[] = [];
  const events: Array<{ activePostId: unknown; speaking: boolean }> = [];

  function FakeUtterance(this: any, text: string) {
    this.text = text;
    this.onend = null;
    this.onerror = null;
  }

  const synth = {
    speak(utterance: any) {
      spoken.push(utterance.text);
    },
    cancel() {
      cancelled.push('cancel');
    },
  };

  const unsubscribe = subscribeSpeechPlayback((state) => {
    events.push(state);
  });

  try {
    const ok = speakPostText(42, 'Hello there', { window: { speechSynthesis: synth, SpeechSynthesisUtterance: FakeUtterance } as any });
    expect(ok).toBe(true);
    expect(spoken).toEqual(['Hello there']);
    expect(getSpeechPlaybackState()).toEqual({ activePostId: 42, speaking: true });

    stopSpeechPlayback({ window: { speechSynthesis: synth } as any });
    expect(cancelled.length).toBeGreaterThan(0);
    expect(getSpeechPlaybackState()).toEqual({ activePostId: null, speaking: false });
    expect(events.some((entry) => entry.activePostId === 42 && entry.speaking)).toBe(true);
    expect(events.at(-1)).toEqual({ activePostId: null, speaking: false });
  } finally {
    unsubscribe();
  }
});
