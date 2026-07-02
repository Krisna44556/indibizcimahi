import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HorizontalPortfolio from '@/components/HorizontalPortfolio';
import Pricing from '@/components/Pricing';
import DigitalProducts from '@/components/DigitalProducts';
import AreaLayanan from '@/components/AreaLayanan';
import Testimoni from '@/components/Tetimoni';
import FAQ from '@/components/FAQ';
import RunningLogo from '@/components/RunningLogo';



export default function Home() {
  return (
    <main className="bg-white antialiased selection:bg-white selection:text-slate-950">
      {/* 1. Bagian Atas: Scroll Vertikal Biasa */}
      <Hero />
      <Pricing />
      <Services />
      <DigitalProducts />
      <AreaLayanan />
      <Testimoni />
      
      <RunningLogo />
      <FAQ />
      
    </main>
  );
}