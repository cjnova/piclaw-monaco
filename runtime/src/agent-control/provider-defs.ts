export interface ProviderCustomField {
  key: string;
  label: string;
  placeholder: string;
  required: boolean;
}

export interface ProviderDef {
  id: string;
  name: string;
  hasOAuth: boolean;
  hasApiKey: boolean;
  apiKeyHint?: string;
  isCustom?: boolean;
  customApi?: string;
  customFields?: ProviderCustomField[];
}

export const PROVIDER_DEFS: ProviderDef[] = [
  { id: "anthropic", name: "Anthropic", hasOAuth: true, hasApiKey: true, apiKeyHint: "sk-ant-..." },
  { id: "github-copilot", name: "GitHub Copilot", hasOAuth: true, hasApiKey: false },
  { id: "google-gemini-cli", name: "Google Gemini CLI", hasOAuth: true, hasApiKey: true, apiKeyHint: "AIza..." },
  { id: "antigravity", name: "Antigravity (Google Cloud)", hasOAuth: true, hasApiKey: false },
  { id: "openai-codex", name: "OpenAI Codex", hasOAuth: true, hasApiKey: false },
  { id: "openai", name: "OpenAI", hasOAuth: false, hasApiKey: true, apiKeyHint: "sk-proj-..." },
  {
    id: "opencode-zen",
    name: "OpenCode ZEN",
    hasOAuth: false,
    hasApiKey: false,
    isCustom: true,
    customApi: "openai-completions",
    customFields: [
      { key: "baseUrl", label: "Base URL", placeholder: "https://opencode.ai/zen", required: true },
      { key: "apiKey", label: "ZEN API Key", placeholder: "oc-...", required: true },
      { key: "modelId", label: "Model ID", placeholder: "big-pickle", required: true },
      { key: "modelIds", label: "Additional models (comma-separated)", placeholder: "gpt-5.4,glm-5,kimi-k2", required: false },
    ],
  },
  {
    id: "azure-openai",
    name: "Azure OpenAI",
    hasOAuth: false,
    hasApiKey: false,
    isCustom: true,
    customApi: "openai-responses",
    customFields: [
      { key: "baseUrl", label: "Base URL", placeholder: "https://myresource.openai.azure.com/openai/v1", required: true },
      { key: "apiKey", label: "API Key (or empty for managed identity)", placeholder: "Bearer ...", required: false },
      { key: "modelId", label: "Model ID", placeholder: "gpt-4o", required: true },
      { key: "modelIds", label: "Additional model IDs (comma-separated)", placeholder: "gpt-4o,o3-mini", required: false },
    ],
  },
  {
    id: "ollama",
    name: "Ollama",
    hasOAuth: false,
    hasApiKey: false,
    isCustom: true,
    customApi: "openai-completions",
    customFields: [
      { key: "baseUrl", label: "Base URL", placeholder: "http://192.168.1.100:11434/v1", required: true },
      { key: "modelId", label: "Model ID", placeholder: "llama3:latest", required: true },
      { key: "modelIds", label: "Additional model IDs (comma-separated)", placeholder: "qwen3:latest", required: false },
      { key: "contextWindow", label: "Context window", placeholder: "128000", required: false },
    ],
  },
  {
    id: "openai-compatible",
    name: "OpenAI-compatible",
    hasOAuth: false,
    hasApiKey: false,
    isCustom: true,
    customApi: "openai-completions",
    customFields: [
      { key: "baseUrl", label: "Base URL", placeholder: "https://api.example.com/v1", required: true },
      { key: "apiKey", label: "API Key", placeholder: "sk-...", required: true },
      { key: "modelId", label: "Model ID", placeholder: "gpt-4o", required: true },
      { key: "modelIds", label: "Additional model IDs (comma-separated)", placeholder: "model-a,model-b", required: false },
      { key: "contextWindow", label: "Context window", placeholder: "128000", required: false },
    ],
  },
];
