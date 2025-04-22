import { getMDXData } from '@/libs/mdx';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    // ✅ metadata 대신 전체 post 객체로 받기
    const post = getMDXData(slug, 'content/blog');
    const { default: Content } = await import(`@/content/blog/${slug}.mdx`);

    return (
      <article className='max-w-2xl mx-auto'>
        <header className='mb-8'>
          <h1 className='text-3xl font-bold mb-4'>{post.title}</h1>
          <p className='text-gray-600 dark:text-gray-400 mb-4'>{post.description}</p>
          <div className='flex flex-wrap items-center gap-2'>
            <time className='text-gray-500'>
              {new Date(post.date).toLocaleDateString('ko-KR')}
            </time>
            <div className='flex flex-wrap gap-2'>
              {Array.isArray(post.tags) &&
                post.tags.map((tag: string) => (
                  <span key={tag} className='text-sm text-gray-500'>
                    #{tag}
                  </span>
                ))}
            </div>
          </div>
        </header>

        <div className='prose dark:prose-invert max-w-none'>
          <Content />
        </div>
      </article>
    );
  } catch (error) {
    console.error(`Error loading post for slug \"${slug}\":`, error);
    notFound();
  }
}

export const dynamicParams = true;
