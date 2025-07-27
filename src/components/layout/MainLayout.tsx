import { ReactNode } from 'react';
import TopPromoBanner from './TopPromoBanner';
import Header from './Header';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex flex-col gap-4 lg:gap-9 justify-content-center">
        <TopPromoBanner />
        <Header />
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
