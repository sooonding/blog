import '@/styles/globals.css';

import Header from '@/components/headers/header';
import Footer from '@/components/Footer';
import Providers from './providers';
import type { Metadata } from 'next';
import AnimateIn from '@/components/animate/animate-in';

export const metadata: Metadata = {
  title: '전성진 · sooonding',
  description: '전성진의 블로그입니다.',
  openGraph: {
    images: [
      'https://user-images.githubusercontent.com/65283190/262039301-7ca908de-e523-478e-b0af-b70665dd7703.jpg',
    ],
    locale: 'ko_KR',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <body>
        <Providers>
          {/* blur 레이어 */}
          <div className='blur-layer' aria-hidden='true' />

          {/* 메인 컨테이너 */}
          <div className='container mx-auto max-w-[720px] px-6'>
            {/* 메인 콘텐츠 */}
            <main className='font-sans'>
              <div className='mb-7'>
                <Header />
              </div>
              <AnimateIn>
                <div data-animate data-animate-speed='slow' className='w-full'>
                  {children}
                </div>
              </AnimateIn>
            </main>

            {/* 푸터 */}
            <footer className='mt-[var(--page-half-top)] mb-[var(--page-half-top)]'>
              <div className='mx-auto max-w-[var(--content-width)] text-center text-sm text-[var(--text-second)]'>
                <Footer />
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
