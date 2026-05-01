import { useState, useEffect, useRef, useCallback } from "preact/hooks";

interface SearchResult {
  id: string | number;
  text?: string;
  content?: string;
  role?: string;
  created_at?: string;
  timestamp?: string;
  channel?: string;
}

interface SearchResponse {
  results?: SearchResult[];
  messages?: SearchResult[];
  items?: SearchResult[];
}

function formatTime(ts: string | undefined): string {
  if (!ts) return "";
  try {
    const d = new Date(ts);
    return d.toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return ts;
  }
}

function getSnippet(result: SearchResult): string {
  const r = result as unknown as Record<string, unknown>;
  const data = r.data as Record<string, unknown> | undefined;
  const text = result.text ?? result.content ?? (data?.content as string) ?? "";
  return typeof text === "string" ? text.slice(0, 300) : "";
}

function getTimestamp(result: SearchResult): string {
  return result.created_at ?? result.timestamp ?? "";
}

export function SearchPanel() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const doSearch = useCallback(async (q: string) => {
    if (!q.trim()) {
      setResults([]);
      setStatus("idle");
      return;
    }

    if (abortRef.current) {
      abortRef.current.abort();
    }
    const controller = new AbortController();
    abortRef.current = controller;

    setStatus("loading");
    try {
      const url = `/search?q=${encodeURIComponent(q)}&limit=50&offset=0&scope=all`;
      const res = await fetch(url, {
        credentials: "same-origin",
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: SearchResponse = await res.json();
      const items: SearchResult[] = data.results ?? data.messages ?? data.items ?? [];
      setResults(items);
      setStatus("done");
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") return;
      setResults([]);
      setStatus("error");
    }
  }, []);

  const handleInput = (e: Event) => {
    const val = (e.target as HTMLInputElement).value;
    setQuery(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      doSearch(val);
    }, 300);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      if (abortRef.current) abortRef.current.abort();
    };
  }, []);

  const renderBody = () => {
    if (!query.trim()) {
      return (
        <div className="search-panel__empty">
          Type to search messages
        </div>
      );
    }
    if (status === "loading") {
      return (
        <div className="search-panel__empty">
          Searching…
        </div>
      );
    }
    if (status === "error") {
      return (
        <div className="search-panel__empty search-panel__empty--error">
          Search failed. Try again.
        </div>
      );
    }
    if (results.length === 0) {
      return (
        <div className="search-panel__empty">
          No results for &ldquo;{query}&rdquo;
        </div>
      );
    }
    return (
      <ul className="search-panel__results">
        {results.map((r) => (
          <li
            key={r.id}
            className="search-panel__item"
            data-message-id={r.id}
            tabIndex={0}
            role="button"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("piclaw:scroll-to-message", { detail: { id: r.id } }));
            }}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); window.dispatchEvent(new CustomEvent("piclaw:scroll-to-message", { detail: { id: r.id } })); } }}
          >
            <div className="search-panel__item-header">
              <span className="search-panel__item-type">{((r as unknown as Record<string, unknown>).data as Record<string, unknown>)?.type === "user_message" ? "You" : "Agent"}</span>
              {getTimestamp(r) && (
                <span className="search-panel__item-time">{formatTime(getTimestamp(r))}</span>
              )}
            </div>
            <span className="search-panel__item-text">{getSnippet(r)}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="search-panel">
      <div className="search-panel__input-wrapper">
        <span className="search-panel__icon" aria-hidden="true">🔍</span>
        <input
          type="text"
          className="search-panel__input"
          placeholder="Search messages…"
          value={query}
          onInput={handleInput}
          spellcheck={false}
          autocomplete="off"
        />
      </div>
      {renderBody()}
    </div>
  );
}
