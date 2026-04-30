/**
 * post-copy-markdown.ts — Builds a plain Markdown string representation of a
 * post that can be placed on the clipboard.
 */

interface ContentBlock {
  type: string;
  text?: string;
  title?: string;
  uri?: string;
  name?: string;
}

interface PostData {
  content?: string | null;
  content_blocks?: ContentBlock[];
  media_ids?: unknown[];
}

interface Post {
  data?: PostData;
}

/**
 * Return a Markdown string for `post`.
 *
 *  - When the post has a non-empty `content` field it is returned as-is
 *    (the original markdown text).
 *  - Otherwise the content_blocks array is converted to a best-effort
 *    Markdown representation.
 */
export function buildPostMarkdownCopyPayload(post: Post): string {
  const data = post?.data;
  if (!data) return '';

  // Prefer the original markdown text when available
  const raw = data.content;
  if (raw && typeof raw === 'string' && raw.trim()) return raw;

  const blocks = data.content_blocks ?? [];
  const parts: string[] = [];
  const attachments: string[] = [];
  const images: string[] = [];

  for (const block of blocks) {
    switch (block.type) {
      case 'text':
        if (block.text) parts.push(block.text);
        break;
      case 'resource_link':
        if (block.title && block.uri) parts.push(`[${block.title}](${block.uri})`);
        break;
      case 'resource':
        if (block.uri) {
          const heading = `### ${block.uri}`;
          const body = block.text != null ? `\`\`\`\n${block.text}\n\`\`\`` : '';
          parts.push(body ? `${heading}\n${body}` : heading);
        }
        break;
      case 'file':
        if (block.name) attachments.push(block.name);
        break;
      case 'image':
        if (block.title) images.push(block.title);
        break;
      default:
        break;
    }
  }

  if (attachments.length > 0) {
    parts.push(`Attachments:\n${attachments.map((a) => `- ${a}`).join('\n')}`);
  }
  if (images.length > 0) {
    parts.push(`Images:\n${images.map((i) => `- ${i}`).join('\n')}`);
  }

  return parts.join('\n\n');
}
