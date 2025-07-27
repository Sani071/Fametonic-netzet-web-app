import { ReactNode } from 'react';
import TopBanner from './TopBanner';
import Header from './Header';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <TopBanner />
      <Header />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
