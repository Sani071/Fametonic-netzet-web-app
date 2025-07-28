"use client";
import Typography from '@/components/ui/Typography';
import Image from 'next/image';
import { useState } from 'react';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`w-full bg-black ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-center md:justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo-fametonic.png"
              alt="Fametonic Logo"
              width={150}
              height={40}
              className="h-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Typography variant="body" font="figtree" className="text-lg">
                About us
              </Typography>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Typography variant="body" font="figtree" className="text-lg">
                Contact
              </Typography>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="absolute right-0 md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                // Close icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/40 bg-opacity-50 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Overlay Panel */}
            <div className="fixed top-0 right-0 h-full w-72 bg-gray-900 border-l border-gray-700 z-50 md:hidden transform transition-transform duration-300 ease-in-out">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-700">
                <div className="flex items-center">
                  <Image
                    src="/logo-fametonic.png"
                    alt="Fametonic Logo"
                    width={120}
                    height={32}
                    className="h-auto"
                  />
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Navigation */}
              <nav className="px-6 py-8 space-y-6">
                <a 
                  href="#" 
                  className="block text-gray-400 hover:text-white transition-colors py-3 border-b border-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Typography variant="body" font="figtree" className="text-lg">
                    About us
                  </Typography>
                </a>
                <a 
                  href="#" 
                  className="block text-gray-400 hover:text-white transition-colors py-3 border-b border-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Typography variant="body" font="figtree" className="text-lg">
                    Contact
                  </Typography>
                </a>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
