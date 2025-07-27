import Typography from '@/components/ui/Typography';
import Image from 'next/image';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
  return (
    <header className={`w-full bg-black ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/log-fametonic.png"
              alt="Fametonic Logo"
              width={150}
              height={40}
              className="h-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Typography variant="body" font="urbanist" className="text-lg">
                About us
              </Typography>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Typography variant="body" font="urbanist" className="text-lg">
                Contact
              </Typography>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
