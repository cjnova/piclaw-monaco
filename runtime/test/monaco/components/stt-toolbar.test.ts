/**
 * Tests for #140: speech-to-text + toolbar tray in compose bar.
 */
import { describe, test, expect } from "bun:test";
import { readFileSync } from "node:fs";

const CHAT_PANEL = readFileSync("runtime/web/frontend/src/panels/ChatPanel.tsx", "utf8");
const SHELL_CSS = readFileSync("runtime/web/static/css/shell.css", "utf8");

describe("Speech-to-text + compose toolbar (#140)", () => {
  describe("Toolbar", () => {
    test("has toolbar container", () => {
      expect(CHAT_PANEL).toContain("chat__toolbar");
    });

    test("clip button always visible in toolbar", () => {
      expect(CHAT_PANEL).toContain("chat__toolbar-btn");
      expect(CHAT_PANEL).toContain("codicon-attach");
    });
  });

  describe("Speech-to-text", () => {
    test("checks for SpeechRecognition support", () => {
      expect(CHAT_PANEL).toContain("SpeechRecognition");
      expect(CHAT_PANEL).toContain("webkitSpeechRecognition");
    });

    test("mic button only renders when speech is supported", () => {
      expect(CHAT_PANEL).toContain("hasSpeechSupport");
      expect(CHAT_PANEL).toContain('"mic"');
    });

    test("toggleListening starts and stops recognition", () => {
      expect(CHAT_PANEL).toContain("toggleListening");
      expect(CHAT_PANEL).toContain("recognition.start()");
      expect(CHAT_PANEL).toContain("recognitionRef.current?.stop()");
    });

    test("recognition is continuous with interim results", () => {
      expect(CHAT_PANEL).toContain("recognition.continuous = true");
      expect(CHAT_PANEL).toContain("recognition.interimResults = true");
    });

    test("uses navigator.language for recognition", () => {
      expect(CHAT_PANEL).toContain("navigator.language");
    });

    test("appends final transcript to textarea", () => {
      expect(CHAT_PANEL).toContain("isFinal");
      expect(CHAT_PANEL).toContain("el.value = current");
    });

    test("mic button has active state with pulsing animation", () => {
      expect(CHAT_PANEL).toContain("chat__toolbar-btn--active");
      expect(SHELL_CSS).toContain("@keyframes pulse-mic");
    });

    test("shows stop icon when listening", () => {
      expect(CHAT_PANEL).toContain("debug-stop");
    });
  });

  describe("Browser notifications", () => {
    test("notification button renders when Notification API available", () => {
      expect(CHAT_PANEL).toContain('"Notification" in window');
      expect(CHAT_PANEL).toContain('"bell"');
      expect(CHAT_PANEL).toContain('"bell-slash"');
    });

    test("toggleNotifications requests permission", () => {
      expect(CHAT_PANEL).toContain("Notification.requestPermission()");
    });

    test("persists state in localStorage", () => {
      expect(CHAT_PANEL).toContain('localStorage.setItem("piclaw:notifications"');
      expect(CHAT_PANEL).toContain('localStorage.getItem("piclaw:notifications"');
    });

    test("fires notification on new message when tab not focused", () => {
      expect(CHAT_PANEL).toContain("document.hasFocus()");
      expect(CHAT_PANEL).toContain('new Notification("PiClaw"');
    });

    test("notification-on state has accent color", () => {
      expect(SHELL_CSS).toContain(".chat__toolbar-btn--notif-on");
      expect(SHELL_CSS).toContain("color: var(--accent)");
    });
  });
});
