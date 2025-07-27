import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';

interface FeatureSectionProps {
  className?: string;
}

export default function FeatureSection({ className = '' }: FeatureSectionProps) {
  return (
    <div className={`space-y-8 ${className}`}>
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
  );
}
