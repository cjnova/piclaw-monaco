import { expect, test } from 'bun:test';

import {
  describeSpeechRecognitionError,
  extractSpeechRecognitionText,
  getSpeechInputSupport,
  mergeSpeechComposeText,
  resolveSpeechRecognitionCtor,
} from '../../web/src/ui/compose-speech.ts';

test('resolveSpeechRecognitionCtor prefers standard and webkit constructors', () => {
  const StandardCtor = function SpeechRecognition() {};
  const WebkitCtor = function webkitSpeechRecognition() {};

  expect(resolveSpeechRecognitionCtor({ window: { SpeechRecognition: StandardCtor } })).toBe(StandardCtor);
  expect(resolveSpeechRecognitionCtor({ window: { webkitSpeechRecognition: WebkitCtor } })).toBe(WebkitCtor);
  expect(resolveSpeechRecognitionCtor({ window: {} })).toBe(null);
});

test('getSpeechInputSupport returns native support for secure non-iOS browsers with recognition', () => {
  const FakeCtor = function SpeechRecognition() {};
  const support = getSpeechInputSupport({
    secureContext: true,
    window: { SpeechRecognition: FakeCtor, isSecureContext: true, matchMedia: () => ({ matches: false }) },
    navigator: { userAgent: 'Mozilla/5.0 (X11; Linux x86_64) Chrome/136.0.0.0', platform: 'Linux x86_64', maxTouchPoints: 0 },
  });

  expect(support.mode).toBe('native');
  expect(support.showButton).toBe(true);
  expect(support.canStart).toBe(true);
  expect(support.recognitionCtor).toBe(FakeCtor);
});

test('getSpeechInputSupport downgrades iOS standalone PWA to fallback even when recognition exists', () => {
  const FakeCtor = function webkitSpeechRecognition() {};
  const support = getSpeechInputSupport({
    secureContext: true,
    window: {
      webkitSpeechRecognition: FakeCtor,
      isSecureContext: true,
      matchMedia: (query: string) => ({ matches: query === '(display-mode: standalone)' }),
    },
    navigator: { userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)', platform: 'iPhone', maxTouchPoints: 5 },
  });

  expect(support.mode).toBe('fallback');
  expect(support.reason).toBe('ios-standalone-fallback');
  expect(support.showButton).toBe(true);
  expect(support.canStart).toBe(false);
});

test('getSpeechInputSupport falls back to keyboard dictation guidance on iOS without recognition', () => {
  const support = getSpeechInputSupport({
    secureContext: true,
    window: { isSecureContext: true, matchMedia: () => ({ matches: false }) },
    navigator: { userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)', platform: 'iPhone', maxTouchPoints: 5 },
  });

  expect(support.mode).toBe('fallback');
  expect(support.reason).toBe('ios-keyboard-dictation');
  expect(support.showButton).toBe(true);
  expect(support.detail).toContain('keyboard dictation');
});

test('getSpeechInputSupport hides speech input when insecure or unsupported generically', () => {
  const insecure = getSpeechInputSupport({
    secureContext: false,
    window: { isSecureContext: false, matchMedia: () => ({ matches: false }) },
    navigator: { userAgent: 'Mozilla/5.0 (X11; Linux x86_64)', platform: 'Linux', maxTouchPoints: 0 },
  });
  expect(insecure.mode).toBe('unavailable');
  expect(insecure.showButton).toBe(false);
  expect(insecure.reason).toBe('secure-context-required');

  const unsupported = getSpeechInputSupport({
    secureContext: true,
    window: { isSecureContext: true, matchMedia: () => ({ matches: false }) },
    navigator: { userAgent: 'Mozilla/5.0 (X11; Linux x86_64) Firefox/145.0', platform: 'Linux', maxTouchPoints: 0 },
  });
  expect(unsupported.mode).toBe('unavailable');
  expect(unsupported.showButton).toBe(false);
  expect(unsupported.reason).toBe('unsupported');
});

test('mergeSpeechComposeText appends final and interim transcript safely', () => {
  expect(mergeSpeechComposeText('', 'hello world', '')).toBe('hello world');
  expect(mergeSpeechComposeText('Existing draft', 'hello', 'world')).toBe('Existing draft hello world');
  expect(mergeSpeechComposeText('Existing draft\n', 'hello', '')).toBe('Existing draft\nhello');
  expect(mergeSpeechComposeText('Existing draft', '', '')).toBe('Existing draft');
});

test('extractSpeechRecognitionText separates final and interim transcript chunks', () => {
  const results = [
    { isFinal: true, 0: { transcript: 'hello' } },
    { isFinal: false, 0: { transcript: 'brave' } },
    { isFinal: true, 0: { transcript: 'new world' } },
  ];

  expect(extractSpeechRecognitionText(results, 0)).toEqual({
    finalText: 'hello new world',
    interimText: 'brave',
  });
  expect(extractSpeechRecognitionText(results, 1)).toEqual({
    finalText: 'new world',
    interimText: 'brave',
  });
});

test('describeSpeechRecognitionError maps browser error codes to user-facing text', () => {
  expect(describeSpeechRecognitionError('not-allowed', { ios: false })).toContain('denied');
  expect(describeSpeechRecognitionError('not-allowed', { ios: true })).toContain('keyboard dictation');
  expect(describeSpeechRecognitionError('no-speech')).toContain('No speech was detected');
  expect(describeSpeechRecognitionError('network')).toContain('network or service failure');
  expect(describeSpeechRecognitionError('')).toBe('Voice input failed.');
});
