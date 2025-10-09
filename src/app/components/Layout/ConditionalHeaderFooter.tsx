'use client';
import Header from '@/app/components/Layout/Header';
import Footer from '@/app/components/Layout/Footer';
import { usePathname } from 'next/navigation';

export default function ConditionalHeaderFooter({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isUserPanel = pathname.startsWith('/user');

  return (
    <>
      {!isUserPanel && <Header />}
      {children}
      {!isUserPanel && <Footer />}
    </>
  );
}