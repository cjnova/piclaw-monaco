import { useState, useCallback } from "preact/hooks";

/**
 * Manages agent turn progress state (thought, status).
 * Draft stays local to MessageList for rendering performance.
 * Owned by ChatPanel, passed down to MessageList and AgentProgressPanel (future).
 */
export function useAgentProgress() {
  const [thought, setThought] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [statusText, setStatusText] = useState("");

  const clearTurn = useCallback(() => {
    setThought("");
    setStatus(null);
    setStatusText("");
  }, []);

  return {
    thought, setThought,
    status, setStatus,
    statusText, setStatusText,
    clearTurn,
  };
}
