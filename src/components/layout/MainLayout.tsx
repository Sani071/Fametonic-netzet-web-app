import { ReactNode } from 'react';
import TopBanner from './TopBanner';
import Header from './Header';
import Navbar from './Navbar';

interface MainLayoutProps {
  children: ReactNode;
  showNavbar?: boolean;
  showTopBanner?: boolean;
}

export default function MainLayout({ children, showNavbar = false, showTopBanner = true }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {showTopBanner && <TopBanner />}
      <Header />
      {showNavbar && <Navbar />}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
