import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`w-full bg-gray-900 text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Typography variant="h4" font="figtree" className="text-white font-bold">
              Fametonic
            </Typography>
            <Typography variant="body" font="urbanist" className="text-gray-300">
              Building the future of digital experiences with innovative solutions 
              and cutting-edge technology.
            </Typography>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <Typography variant="h6" font="figtree" className="text-white font-semibold">
              Quick Links
            </Typography>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Typography variant="body" font="urbanist">Home</Typography>
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Typography variant="body" font="urbanist">About Us</Typography>
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Typography variant="body" font="urbanist">Services</Typography>
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Typography variant="body" font="urbanist">Contact</Typography>
              </a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <Typography variant="h6" font="figtree" className="text-white font-semibold">
              Support
            </Typography>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Typography variant="body" font="urbanist">Help Center</Typography>
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Typography variant="body" font="urbanist">Documentation</Typography>
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Typography variant="body" font="urbanist">Privacy Policy</Typography>
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Typography variant="body" font="urbanist">Terms of Service</Typography>
              </a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <Typography variant="h6" font="figtree" className="text-white font-semibold">
              Stay Updated
            </Typography>
            <Typography variant="body" font="urbanist" className="text-gray-300">
              Subscribe to our newsletter for the latest updates and insights.
            </Typography>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button size="sm" font="figtree" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Typography variant="caption" font="urbanist" className="text-gray-400">
              © 2025 Fametonic. All rights reserved.
            </Typography>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Typography variant="caption" font="urbanist">Privacy</Typography>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Typography variant="caption" font="urbanist">Terms</Typography>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Typography variant="caption" font="urbanist">Cookies</Typography>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
