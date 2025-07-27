import Typography from '@/components/ui/Typography';

export default function TopBanner() {
  return (
    <div className="w-full gradient-pink-cyan py-3 px-4 relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-pulse opacity-20"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <Typography variant="body" font="figtree" className="text-white font-bold text-lg md:text-xl">
          🎉 <span className="font-extrabold text-white drop-shadow-lg">FRESH BEGINNINGS SALE:</span> 
          <span className="font-bold text-white ml-2">Extra 25% OFF, Limited Spots - start your journey today!</span>
        </Typography>
      </div>
      
      {/* Additional glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </div>
  );
}
