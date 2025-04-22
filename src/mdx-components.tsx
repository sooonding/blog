import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';

// MDX 컴포넌트를 커스터마이징
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 기본 컴포넌트 오버라이드
    h1: ({ children }) => <h1 className='text-3xl font-bold mt-8 mb-4'>{children}</h1>,
    h2: ({ children }) => <h2 className='text-2xl font-bold mt-6 mb-3'>{children}</h2>,
    h3: ({ children }) => <h3 className='text-xl font-bold mt-4 mb-2'>{children}</h3>,
    p: ({ children }) => <p>{children}</p>,
    a: ({ href, children }) =>
      href?.startsWith('/') ? (
        <Link href={href} className='text-blue-500 hover:underline'>
          {children}
        </Link>
      ) : (
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline'
        >
          {children}
        </a>
      ),
    ul: ({ children }) => <ul className='list-disc ml-6 my-4'>{children}</ul>,
    ol: ({ children }) => <ol className='list-decimal ml-6 my-4'>{children}</ol>,
    li: ({ children }) => <li className='my-1'>{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className='border-l-4 border-gray-200 pl-2 py-1 my-2 italic'>
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className='bg-gray-100 dark:bg-gray-800 rounded-md px-1.5 py-0.5'>
        {children}
      </code>
    ),
    // 기존 컴포넌트 유지
    ...components,
  };
}
