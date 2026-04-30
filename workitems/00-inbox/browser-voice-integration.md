---
id: browser-voice-integration
title: Browser voice integration — speech-to-text input and text-to-speech output
status: inbox
created: 2026-04-30
updated: 2026-04-30
tags:
  - work-item
  - kanban
  - web
  - voice
  - accessibility
  - ui
owner: 
---

# Browser voice integration — speech-to-text input and text-to-speech output

## Summary

Integrate browser-native voice capabilities into the Monaco chat interface. Two features:

1. **Voice input (STT)**: Microphone button in compose bar — uses the Web Speech Recognition API to transcribe voice into text in the compose textarea.
2. **Read aloud (TTS)**: Button on agent messages — uses the Web Speech Synthesis API to read agent responses aloud.

Upstream piclaw v2.1.0 includes both in `runtime/web/src/ui/compose-speech.ts` (STT) and `runtime/web/src/components/post-speech.ts` (TTS). We adapt the logic to our Preact components.

## Backend requirements

None — both features are purely client-side using browser APIs:
- `SpeechRecognition` / `webkitSpeechRecognition` (STT)
- `speechSynthesis` + `SpeechSynthesisUtterance` (TTS)

## Security constraints

- STT requires HTTPS or localhost (secure context)
- Permissions-Policy header already allows `microphone=(self)` (see `runtime/src/channels/web/http/security.ts`)
- Browser will prompt user for microphone permission on first use

## Design

### Voice input (compose bar):
- Microphone icon button (codicon `mic`) next to attach button
- Click to start listening → icon turns RED (recording indicator)
- Transcribed text appended to textarea in real-time (interim results)
- Click again or silence timeout → stops recording
- Error handling: "Speech recognition not available in this browser"
- iOS/Safari: may need fallback messaging (keyboard dictation)

### Read aloud (message actions):
- Small speaker icon (codicon `unmute`) on each agent message (hover to reveal)
- Click to read the message content aloud
- While reading: icon changes to stop (codicon `mute`) — click to cancel
- Speaks plain text (strip markdown formatting before synthesis)

## Acceptance Criteria

- [ ] Microphone button in compose bar (visible only if SpeechRecognition supported)
- [ ] Click starts recording, transcribes into textarea
- [ ] Visual indicator (red dot/pulse) while recording
- [ ] Click again or silence stops recording
- [ ] Graceful fallback message for unsupported browsers
- [ ] Speaker icon on agent messages (hover-reveal or always visible)
- [ ] Click reads message aloud via speechSynthesis
- [ ] Stop button cancels speech mid-read
- [ ] Works over HTTPS and localhost
- [ ] No errors thrown when APIs unavailable

## Implementation

### STT:
```typescript
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) { /* hide mic button */ }
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.onresult = (e) => { /* append to textarea */ };
```

### TTS:
```typescript
const utterance = new SpeechSynthesisUtterance(plainText);
speechSynthesis.speak(utterance);
// Cancel: speechSynthesis.cancel();
```

## Reference files (upstream):
- `runtime/web/src/ui/compose-speech.ts` — full STT implementation with iOS detection, secure context check, error handling
- `runtime/web/src/components/post-speech.ts` — TTS with activeToken tracking, cancel support

## Test Plan

- [ ] Chrome: STT and TTS both work
- [ ] Firefox: TTS works, STT may be limited
- [ ] Safari: TTS works, STT needs secure context + may need keyboard fallback
- [ ] HTTP (non-secure): mic button hidden, graceful degradation
- [ ] Cancel mid-speech: stops immediately

## Definition of Done

- [ ] All acceptance criteria satisfied
- [ ] Build + typecheck pass
- [ ] Works on Chrome + Firefox (primary targets)
- [ ] Graceful degradation on unsupported browsers
- [ ] No regression in compose bar

## Notes

- SpeechRecognition API is not available in all browsers (Chrome has best support)
- Consider adding a user preference toggle in Settings to enable/disable voice features
- The upstream code handles iOS-specific quirks — review compose-speech.ts for edge cases
- Future: could integrate with Whisper API for better transcription if browser API is insufficient

## Links

- `runtime/web/src/ui/compose-speech.ts` — upstream STT reference
- `runtime/web/src/components/post-speech.ts` — upstream TTS reference
- `runtime/src/channels/web/http/security.ts` — Permissions-Policy (microphone=(self))
- Web Speech API: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
