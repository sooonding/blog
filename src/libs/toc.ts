// src/libs/toc.ts
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';

export type TocItem = {
  id: string;
  text: string;
  level: number;
};

export function extractTocFromMarkdown(markdown: string): TocItem[] {
  const toc: TocItem[] = [];

  const tree = unified().use(remarkParse).parse(markdown);

  visit(tree, 'heading', (node: any) => {
    const text = node.children?.map((c: any) => c.value).join('') ?? '';
    const id = text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');

    toc.push({ id, text, level: node.depth });
  });

  return toc;
}
