import { readContentFile } from '@/lib/content';
import { renderMarkdown } from '@/lib/markdown';
import { MarkdownRenderer } from '@/components/markdown/markdown-renderer';

export function PostsEmpty() {
  const rawContent = readContentFile('posts/index.md');
  const htmlContent = renderMarkdown(rawContent);

  return <MarkdownRenderer content={htmlContent} />;
}

