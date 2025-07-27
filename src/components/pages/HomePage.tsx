import FeatureSection from '@/components/layout/FeatureSection';
import Banner from '@/components/layout/Banner';

interface HomePageProps {
  className?: string;
}

export default function HomePage({ className = '' }: HomePageProps) {
  return (
    <section className={`w-full bg-black text-white relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Simple 2-Section Grid with Order Control - 50/50 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 relative">

          {/* Text Content Section */}
          <div className="grid-item order-2 lg:order-1 relative z-20">
            <FeatureSection />
          </div>

          {/* Image Section */}
          <Banner />

        </div>
      </div>
    </section>
  );
}
