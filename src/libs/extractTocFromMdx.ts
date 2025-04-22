import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';

export type TocItem = {
  text: string;
  id: string;
  level: number;
};

export function extractTocFromMdx(markdown: string): TocItem[] {
  const toc: TocItem[] = [];

  const tree = unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .parse(markdown);

  visit(tree, 'heading', (node: any) => {
    const text = node.children.map((c: any) => c.value).join('');
    const id = text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');

    toc.push({ text, id, level: node.depth });
  });

  return toc;
}
