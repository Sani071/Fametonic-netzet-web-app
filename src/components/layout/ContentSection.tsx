import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';

interface ContentSectionProps {
  className?: string;
}

export default function ContentSection({ className = '' }: ContentSectionProps) {
  return (
    <main className={`w-full bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <Typography variant="h4" font="figtree" className="text-gray-900 mb-3">
              Lightning Fast
            </Typography>
            <Typography variant="body" font="urbanist" className="text-gray-600">
              Built with performance in mind. Experience blazing-fast load times and smooth interactions.
            </Typography>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <Typography variant="h4" font="figtree" className="text-gray-900 mb-3">
              Reliable
            </Typography>
            <Typography variant="body" font="urbanist" className="text-gray-600">
              99.9% uptime guarantee with robust infrastructure and enterprise-grade security.
            </Typography>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <Typography variant="h4" font="figtree" className="text-gray-900 mb-3">
              User Friendly
            </Typography>
            <Typography variant="body" font="urbanist" className="text-gray-600">
              Intuitive design and seamless user experience that your customers will love.
            </Typography>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 text-center">
          <Typography variant="h2" font="figtree" className="text-gray-900 mb-6">
            Ready to Get Started?
          </Typography>
          <Typography variant="body" font="urbanist" className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of satisfied customers who have transformed their business with our platform.
            Start your free trial today and see the difference.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" font="figtree">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" font="urbanist">
              Schedule Demo
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <Typography variant="h2" font="figtree" className="text-blue-600 font-bold mb-2">
              50K+
            </Typography>
            <Typography variant="body" font="urbanist" className="text-gray-600">
              Active Users
            </Typography>
          </div>
          <div>
            <Typography variant="h2" font="figtree" className="text-green-600 font-bold mb-2">
              1M+
            </Typography>
            <Typography variant="body" font="urbanist" className="text-gray-600">
              Transactions
            </Typography>
          </div>
          <div>
            <Typography variant="h2" font="figtree" className="text-purple-600 font-bold mb-2">
              99.9%
            </Typography>
            <Typography variant="body" font="urbanist" className="text-gray-600">
              Uptime
            </Typography>
          </div>
          <div>
            <Typography variant="h2" font="figtree" className="text-orange-600 font-bold mb-2">
              24/7
            </Typography>
            <Typography variant="body" font="urbanist" className="text-gray-600">
              Support
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
}
