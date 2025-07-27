import Banner from "@/components/sections/homePage/Banner";
import FeatureSection from "@/components/sections/homePage/FeatureSection";


export default function HomePage() {
  return (
    <section className={`w-full bg-black text-white relative overflow-hidden`}>
      <div className="max-w-5xl mx-auto px-5 md:px-0 lg:pt-15">
        
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
