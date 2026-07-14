import React from 'react';
import PricingList from "@/components/PricingList";
import AreaLayanan from "@/components/AreaLayanan";
import ArtikelList from "@/components/ArtikelList";
import VisiMisi from "@/components/VisiMisi";
import Hero from "@/components/Hero";
import Testimoni from "@/components/Tetimoni";
import ScrollAnimation from '@/components/ScrollAnimation'

export default function HomePage() {
  return (
    <main className="min-h-screen font-sans text-slate-800 scroll-smooth">
      
     <ScrollAnimation>
          <Hero />
          <PricingList />
          <VisiMisi />
          <AreaLayanan />
          <Testimoni />
          <ArtikelList />
    
      </ScrollAnimation> 
    </main>
   
  );
}