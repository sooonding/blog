// import React from 'react';
// import Link from 'next/link';
// import DarkModeToggle from '../toggle/dark-mode';

// export default function () {
//   return (
//     <header className='flex items-center justify-between py-8 relative z-10'>
//       <Link href='/' className='flex items-center gap-2'>
//         <h1 className='font-bold'>전성진 · sooonding</h1>
//       </Link>
//       <div className='flex items-center gap-2'>
//         <button className='p-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'>
//           <svg
//             xmlns='http://www.w3.org/2000/svg'
//             fill='none'
//             viewBox='0 0 24 24'
//             strokeWidth={1.5}
//             stroke='currentColor'
//             className='w-5 h-5'
//           >
//             <path
//               strokeLinecap='round'
//               strokeLinejoin='round'
//               d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
//             />
//           </svg>
//         </button>
//         <DarkModeToggle />
//       </div>
//     </header>
//   );
// }

import React from 'react';
import Link from 'next/link';
import DarkModeToggle from '../toggle/dark-mode';

export default function MainHeader() {
  return (
    <header className='flex items-center justify-between py-2 relative'>
      <Link href='/' className='flex items-center gap-2'>
        <h1 className='font-bold'>전성진 · sooonding</h1>
      </Link>
      <div className='flex items-center gap-2'>
        <button className='p-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
        </button>
        <DarkModeToggle />
      </div>
    </header>
  );
}
