import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Image from 'next/image';

interface BannerProps {
  className?: string;
}

export default function Banner({ className = '' }: BannerProps) {
  return (
    <section className={`w-full bg-black text-white relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Simple 2-Section Grid with Order Control - 50/50 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 relative">

          {/* Text Content Section */}
          <div className="grid-item space-y-8 order-2 lg:order-1 relative z-20">
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

          {/* Image Section */}
          <div className="grid-item order-1 lg:order-2 relative lg:absolute lg:inset-0 lg:left-3/7 z-10">
              <Image
                src="/mobile-banner.png"
                alt="Mobile App Interface"
                width={769}
                height={600}
                className="h-auto max-w-full"
                priority
              />
          </div>

        </div>
      </div>
    </section>
  );
}
