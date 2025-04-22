import React from 'react';
import '@/styles/mdx.css';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='mdx prose dark:prose-invert mx-auto mt-8'>
      {/* 
        프론트매터가 렌더링되지 않도록 children만 렌더링
        스타일은 mdx.css에서 처리
      */}
      {children}
    </div>
  );
}
