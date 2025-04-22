import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DarkModeToggle from '../toggle/dark-mode';
import SearchIcon from '../icons/search-icon';

const NAV_ITEMS = [
  { path: '/blog', title: '서재', description: '인사이트를 보관하는 공간' },
  { path: '/collection', title: '수첩', description: '유용한 지식을 기록하는 공간' },
  { path: '/workshop', title: '공방', description: '무언가 흥미로운 것을 만드는 공간' },
];

export default function ListHeader() {
  const pathname = usePathname();
  const currentPage = NAV_ITEMS.find(item => item.path === pathname);

  return (
    <header className='py-8 relative z-10'>
      <div className='flex items-center justify-between mb-2'>
        <h1 className='font-bold text-[var(--text-body)]'>{currentPage?.title}</h1>
        <div className='flex items-center gap-1'>
          <button className='p-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'>
            <SearchIcon />
          </button>
          <DarkModeToggle />
        </div>
      </div>
      <div className='text-[var(--text-second)] text-sm mb-2'>
        {currentPage?.description}
      </div>
      <div className='flex items-center gap-4 text-sm'>
        <div className='flex items-center gap-1'>
          <Link href='/'>
            <span>by 전성진</span>
          </Link>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 256 256'
            className='h-2 w-2 text-[var(--text-second)]'
          >
            <path fill='currentColor' d='M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28Z' />
          </svg>
        </div>
        <div className='flex items-center gap-4'>
          {NAV_ITEMS.map(item => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative hover:text-[var(--text-body)] transition-colors ${
                pathname === item.path
                  ? 'text-[var(--text-body)] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[var(--text-body)]'
                  : 'text-[var(--text-second)]'
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
