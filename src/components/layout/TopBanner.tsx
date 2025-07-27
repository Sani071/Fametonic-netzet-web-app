import Typography from '@/components/ui/Typography';

export default function TopBanner() {
  return (
    <div className="w-full gradient-pink-cyan py-2 md:py-4 px-2 md:px-4">
      <div className="max-w-full mx-auto text-center">
        <Typography variant="body" font="figtree" className="text-white font-bold text-sm md:text-base lg:text-lg xl:text-xl">
          🎉 <span className="font-extrabold">FRESH BEGINNINGS SALE:</span> Extra 25% OFF, Limited Spots - start your journey today!
        </Typography>
      </div>
    </div>
  );
}
