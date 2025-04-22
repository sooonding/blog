import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import DarkModeToggle from '../toggle/dark-mode';
import SearchIcon from '../icons/search-icon';

export default function PostHeader() {
  const pathname = usePathname();
  const section = pathname.split('/')[1]; // blog, collection, workshop
  const sectionTitles = {
    blog: '서재',
    collection: '수첩',
    workshop: '공방',
  };

  return (
    <header className='py-8 relative z-10'>
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-2'>
          <Link
            href={`/${section}`}
            className='flex items-center gap-2 text-[var(--text-second)] hover:text-[var(--text-body)] transition-colors'
          >
            <ChevronLeft className='w-5 h-5' />
            <span>{sectionTitles[section as keyof typeof sectionTitles]}</span>
          </Link>
        </div>
        <div className='flex items-center gap-2'>
          <button className='p-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'>
            <SearchIcon />
          </button>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
