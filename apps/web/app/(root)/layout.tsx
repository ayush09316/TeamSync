import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../globals.css';
import SidebarDemo from '@/components/layout/Sidebar';
import { cn } from '@/lib/utils';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'TeamSync',
  description:
    'All-in-one platform for remote teams to collaborate, communicate, and create together.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main
          className={cn(
            'flex flex-col md:flex-row bg-neutral-800 w-full  mx-auto border border-neutral-700 overflow-hidden',
            'h-screen',
          )}
        >
          <SidebarDemo />
          <section className="px-16 text-white py-10  rounded-tl-2xl border border-neutral-700 bg-neutral-900 flex flex-col gap-2 w-full h-full">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
