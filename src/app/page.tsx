import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* 소개 섹션 */}
      <section className='mb-5'>
        <p className='text-[var(--text-second)]'>
          사용자와 <strong>부드럽게</strong> 상호작용하는 것, 복잡한 것을{' '}
          <strong>단순하고 간편하게</strong> 만드는 것에 열광합니다. 탐구하고 사색하는
          것을 좋아하여 발견한 것을 틈틈이 기록하려 합니다. 현재 <strong>카카오</strong>
          에서 <strong>브런치</strong>를 개발하고 있습니다.
        </p>
      </section>

      {/* 소셜 링크 */}
      <div className='flex items-center gap-4 mb-16'>
        <a
          href='mailto:soooonding@gmail.com'
          className='text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-5 h-5'
          >
            <path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
            <path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
          </svg>
        </a>
        <a
          href='https://github.com/bepyan'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-5 h-5'
          >
            <path
              fillRule='evenodd'
              d='M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z'
              clipRule='evenodd'
            />
          </svg>
        </a>
        <a
          href='https://twitter.com/bepyan'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-5 h-5'
          >
            <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
          </svg>
        </a>
        <a
          href='https://www.linkedin.com/in/bepyan'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-5 h-5'
          >
            <path d='M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' />
          </svg>
        </a>
        <a
          href='/resume'
          className='text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'
        >
          resume
        </a>
      </div>

      {/* 나의 공간 섹션 */}
      <section className='mb-24 flex gap-8'>
        <h2 className='font-semibold'>나의 공간</h2>
        <div className='flex flex-col gap-3'>
          <Link href='/blog' className='flex items-center gap-5 group'>
            <span className='w-12 group-hover:text-blue-500'>서재</span>
            <span className='text-sm text-gray-500'>인사이트를 보관하는 공간</span>
          </Link>
          <Link href='/collection' className='flex items-center group gap-5'>
            <span className='w-12 group-hover:text-blue-500'>수집</span>
            <span className='text-sm text-gray-500'>유용한 자료를 기록하는 공간</span>
          </Link>
          <Link href='/workshop' className='flex items-center group gap-5'>
            <span className='w-12 group-hover:text-blue-500'>공방</span>
            <span className='text-sm text-gray-500'>
              무언가 흥미로운 것을 만드는 공간
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
