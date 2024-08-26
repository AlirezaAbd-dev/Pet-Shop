import type { Metadata } from 'next';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

import { Toaster } from '@/components/ui/toaster';
import fonts from '@/fonts';

import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'uspetinc',
  description:
    "At US Pet Supplies, we're dedicated to providing quality products and supplies for your furry, feathered, and scaly friends. From nutrition to toys, we have everything you need to keep your pets happy and healthy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={fonts.variables + ' font-opensans bg-white text-text-500'}
        dir="ltr"
      >
        <Toaster />

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
