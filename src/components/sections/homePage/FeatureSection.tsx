import Typography from "@/components/ui/Typography";
import Button from "@/components/ui/Button";

interface FeatureSectionProps {
  className?: string;
}

export default function FeatureSection({
  className = "",
}: FeatureSectionProps) {
  const features = [
    "Start growing your influence right away—no waiting required!",
    "Create viral TikToks and Reels step by step with easy-to-follow lessons",
    "Use a Personal AI Worker to boost your content",
    "Learn from expert-led courses designed for aspiring influencers"
  ];

  return (
    <div className={`space-y-8 ${className}`}>
      <div className="space-y-4">
        <Typography
          variant="h1"
          font="urbanist"
          className="text-white text-[25px] md:text-[35px] font-extrabold md:font-bold pl-2 md:pl-0"
        >
          Want to Turn Social Media Into a Profitable Career?
        </Typography>

        <div
          className="font-urbanist text-[25px] md:text-[35px] font-extrabold md:font-bold leading-tight"
          style={{
            color: "#00E7F9",
            textShadow: "0px 4px 4px rgba(252, 0, 78, 1)",
          }}
        >
          Discover your way to success with Fametonic:
        </div>
      </div>

      {/* Features List */}
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <span className="text-yellow-400 text-xl">✨</span>
            <Typography
              variant="body"
              font="figtree"
              className="text-white"
            >
              {feature}
            </Typography>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="pt-6 flex flex-col lg:flex-col items-center lg:items-start">
        {/* Footer Text */}
        <div className="order-1 lg:order-3 pb-6 lg:pb-0 lg:pt-8 space-x-5 md:space-x-0 text-center md:text-left space-y-2">
          <Typography
            variant="caption"
            font="figtree"
            className="text-[#ABABAB] font-medium text-xs"
          >
            By clicking &quot;Get Started&quot;, you agree with Terms and
            Conditions, Privacy Policy, Subscription Terms
          </Typography>
          <Typography
            variant="caption"
            font="figtree"
            className="text-[#ABABAB]"
          >
            Fametonic 2025 ©All Rights Reserved.
          </Typography>
        </div>

        {/* Button */}
        <div className="order-2 inline-block">
          <div className="flex flex-col">
            <Button
              size="lg"
              font="figtree"
              variant="danger"
              style={{
                boxShadow: "2px 2px 10px 0px rgba(0, 231, 249, 1)",
                opacity: 1,
              }}
              className="text-white text-lg font-bold rounded-lg border-0 gap-2 sm:w-75 w-80 cursor-pointer flex items-center justify-center transition-all duration-300 hover:scale-101 hover:brightness-110"
            >
              GET STARTED 
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
              >
                <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </Button>           
             <Typography
              variant="caption"
              font="figtree"
              className="mt-3  text-white text-xs whitespace-nowrap text-center"
            >
              1-minute quiz for personalized Insights
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
