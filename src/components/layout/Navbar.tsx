import Typography from '@/components/ui/Typography';

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = '' }: NavbarProps) {
  return (
    <nav className={`w-full bg-gray-50 border-b border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Primary Navigation */}
          <div className="flex items-center space-x-8">
            <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-2">
              <Typography variant="body" font="figtree" className="font-medium">
                Dashboard
              </Typography>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors pb-2">
              <Typography variant="body" font="urbanist">
                Analytics
              </Typography>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors pb-2">
              <Typography variant="body" font="urbanist">
                Reports
              </Typography>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors pb-2">
              <Typography variant="body" font="urbanist">
                Settings
              </Typography>
            </a>
          </div>

          {/* Secondary Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="Search..." 
                className="text-sm border-0 bg-transparent focus:outline-none text-gray-600 placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
