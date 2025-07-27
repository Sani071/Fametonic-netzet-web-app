import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Image from 'next/image';

interface BannerProps {
  className?: string;
}

export default function Banner({ className = '' }: BannerProps) {
  return (
    <section className={`w-full bg-black text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Typography variant="h1" font="figtree" className="text-white leading-tight text-4xl lg:text-5xl">
                Want to Turn Social Media Into a Profitable Career?
              </Typography>
              
              <Typography variant="h2" font="figtree" className="text-gradient-pink-cyan leading-tight text-3xl lg:text-4xl">
                Discover your way to success with Fametonic:
              </Typography>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-xl">✨</span>
                <Typography variant="body" font="urbanist" className="text-white text-lg">
                  Start growing your influence right away—no waiting required!
                </Typography>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-xl">✨</span>
                <Typography variant="body" font="urbanist" className="text-white text-lg">
                  Create viral TikToks and Reels step by step with easy-to-follow lessons
                </Typography>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-xl">✨</span>
                <Typography variant="body" font="urbanist" className="text-white text-lg">
                  Use a Personal AI Worker to boost your content
                </Typography>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-xl">✨</span>
                <Typography variant="body" font="urbanist" className="text-white text-lg">
                  Learn from expert-led courses designed for aspiring influencers
                </Typography>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Button 
                size="lg" 
                font="figtree" 
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg font-bold rounded-full"
              >
                GET STARTED ▶
              </Button>
              
              <Typography variant="caption" font="urbanist" className="text-gray-400 block mt-3">
                1-minute quiz for personalized Insights
              </Typography>
            </div>

            {/* Footer Text */}
            <div className="pt-8 space-y-2">
              <Typography variant="caption" font="urbanist" className="text-gray-400">
                By clicking &quot;Get Started&quot;, you agree with Terms and Conditions, Privacy Policy, Subscription Terms
              </Typography>
              <Typography variant="caption" font="urbanist" className="text-gray-400">
                Fametonic 2025 ©All Rights Reserved.
              </Typography>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Glowing rings background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 rounded-full border-2 border-cyan-400/30 absolute animate-pulse"></div>
                <div className="w-80 h-80 rounded-full border-2 border-pink-400/30 absolute animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="w-64 h-64 rounded-full border-2 border-blue-400/30 absolute animate-pulse" style={{animationDelay: '2s'}}></div>
              </div>
              
              {/* Mobile Banner Image */}
              <div className="relative z-10 mx-auto">
                <Image
                  src="/mobile-banner.png"
                  alt="Mobile App Interface"
                  width={300}
                  height={600}
                  className="h-auto max-w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
