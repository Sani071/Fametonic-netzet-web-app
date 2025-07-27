import Image from 'next/image';

interface BannerProps {
  className?: string;
}

export default function Banner({ className = '' }: BannerProps) {
  return (
    <div className={`grid-item order-1 lg:order-2 relative lg:absolute lg:inset-0 lg:left-3/7 z-10 ${className}`}>
      <Image
        src="/mobile-banner.png"
        alt="Mobile App Interface"
        width={769}
        height={600}
        className="h-auto max-w-full"
        priority
      />
    </div>
  );
}
