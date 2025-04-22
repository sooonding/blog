// src/libs/mdx.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type PostMeta = {
  title: string;
  date: string;
  tags?: string[];
  draft?: boolean;
  description?: string;
  category?: string;
};

export type Post = PostMeta & {
  slug: string;
  content: string;
};

// 개별 MDX 파일에서 메타데이터 + content 추출
export function getMDXData(slug: string, contentDir = 'content/blog'): Post {
  const filePath = path.join(process.cwd(), 'src', contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`MDX 파일을 찾을 수 없습니다: ${slug}`);
  }
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  return {
    slug,
    content,
    ...(data as PostMeta),
  };
}

// 사용 가능한 모든 slug 추출
export function getAllMDXSlugs(contentDir = 'content/blog'): string[] {
  const dir = path.join(process.cwd(), 'src', contentDir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx$/, ''));
}

// 전체 포스트 목록 추출 (draft 제외)
export function getAllPosts(contentDir = 'content/blog'): Post[] {
  return getAllMDXSlugs(contentDir)
    .map(slug => getMDXData(slug, contentDir))
    .filter(post => !post.draft);
}

// 태그 목록
export function getAllTags(contentDir = 'content/blog'): string[] {
  const posts = getAllPosts(contentDir);
  const tags = posts.flatMap(post => post.tags || []);
  return Array.from(new Set(tags));
}

// 특정 태그로 필터링
export function getPostsByTag(tag: string, contentDir = 'content/blog'): Post[] {
  return getAllPosts(contentDir).filter(post => post.tags?.includes(tag));
}

// 카테고리 필터링
export function getPostsByCategory(
  category: string,
  contentDir = 'content/blog'
): Post[] {
  return getAllPosts(contentDir).filter(post => post.category === category);
}

// 정렬
export function getSortedPosts(desc = true, contentDir = 'content/blog'): Post[] {
  return getAllPosts(contentDir).sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return desc ? dateB - dateA : dateA - dateB;
  });
}
