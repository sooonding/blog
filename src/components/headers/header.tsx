'use client';

import { usePathname } from 'next/navigation';
import PostHeader from './post-header';
import ListHeader from './list-header';
import MainHeader from './main-header';

export default function Header() {
  const pathname = usePathname();

  // 블로그 포스트 페이지 체크
  if (pathname.match(/^\/(blog|collection|workshop)\/[^\/]+$/)) {
    return <PostHeader />;
  }

  // 리스트 페이지 체크
  if (pathname === '/blog' || pathname === '/collection' || pathname === '/workshop') {
    return <ListHeader />;
  }

  // 기본 메인 페이지
  return <MainHeader />;
}
