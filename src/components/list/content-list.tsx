import React from 'react';
import Link from 'next/link';
import { getAllMDXSlugs, getMDXData } from '@/libs/mdx';

interface Post {
  slug: string;
  title: string;
  date: string;
}

interface ContentListProps {
  section: 'blog' | 'collection' | 'workshop';
}

export default async function ContentList({ section }: ContentListProps) {
  // 섹션별 디렉토리 매핑
  const sectionDirs = {
    blog: 'content/blog',
    collection: 'content/collection',
    workshop: 'content/workshop',
  };

  const contentDir = sectionDirs[section];

  // 모든 MDX 파일의 슬러그를 가져옴
  const slugs = getAllMDXSlugs(contentDir);

  // 각 슬러그에 대한 메타데이터 가져오기
  const posts = slugs.map(slug => {
    const post = getMDXData(slug, contentDir);
    return {
      ...post,
    } as Post;
  });

  // 연도별로 포스트 그룹화
  const postsByYear = posts.reduce<Record<string, Post[]>>((acc, post) => {
    const year = new Date(post.date).getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});

  // 연도 내림차순 정렬
  const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className='mdx'>
      {years.map(year => (
        <section key={year} className='mb-12'>
          <h2 className='text-lg font-bold'>{year}</h2>
          <div>
            {postsByYear[year]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map(post => (
                <Link
                  key={post.slug}
                  href={`/${section}/${post.slug}`}
                  className='group flex items-center justify-between py-2'
                >
                  <span>{post.title}</span>
                  <time>
                    {new Date(post.date)
                      .toLocaleDateString('ko-KR', {
                        month: '2-digit',
                        day: '2-digit',
                      })
                      .replace(/\. /g, '.')}
                  </time>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
