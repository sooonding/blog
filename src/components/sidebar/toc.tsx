import type { TocItem } from '@/libs/toc';

export function Toc({ items }: { items: TocItem[] }) {
  return (
    <aside className='hidden md:block fixed top-24 left-8 w-52 text-sm text-zinc-500 space-y-2'>
      {items.map(item => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className='block hover:text-zinc-900 transition-all'
          style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
        >
          {item.text}
        </a>
      ))}
    </aside>
  );
}
