'use client';

import { useState, useEffect, useRef } from 'react';

interface PricingPlan {
  id: string;
  speed: number;
  originalPrice: string;
  discountPrice: string;
  features: string[];
  isPopular?: boolean;
}


const pricingData: PricingPlan[] = [
  {
    id: 'p1',
    speed: 50,
    originalPrice: 'Rp 405.000',
    discountPrice: 'Rp 355.000',
    features: ['Unlimited', 'Koneksi Stabil', 'Support 24/7', 'Kecepatan Simetris 1 : 1'],
  },
  {
    id: 'p2',
    speed: 75,
    originalPrice: 'Rp 472.000',
    discountPrice: 'Rp 415.000',
   features: ['Unlimited', 'Koneksi Stabil', 'Support 24/7', 'Kecepatan Simetris 1 : 1'],
  },
  {
    id: 'p3',
    speed: 100,
    originalPrice: 'Rp 605.000',
    discountPrice: 'Rp 535.000',
    features: ['Unlimited', 'Koneksi Stabil', 'Support 24/7','Kecepatan Simetris 1 : 1'],
  },
    {
    id: 'p4',
    speed: 150,
    originalPrice: 'Rp 705.000',
    discountPrice: 'Rp 620.000',
    features: ['Unlimited', 'Koneksi Stabil', 'Support 24/7', 'Kecepatan Simetris 1 : 1'],
  },
    {
    id: 'p5',
    speed: 200,
    originalPrice: 'Rp 690.000',
    discountPrice: 'Rp 790.000',
    features: ['Unlimited', 'Koneksi Stabil', 'Support 24/7', 'Kecepatan Simetris 1 : 1'],
  },
    {
    id: 'p6',
    speed: 300,
    originalPrice: 'Rp 1.220.000',
    discountPrice: 'Rp 1.130.000',
    features: ['Unlimited', 'Koneksi Stabil', 'Support 24/7', 'Kecepatan Simetris 1 : 1'],
  },
];

export default function PricingPlan() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    // Menggunakan Intersection Observer bawaan browser (Sangat akurat dari arah scroll mana pun)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Muncul jika 10% dari grid sudah masuk layar
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="paket" className="w-full pt-14 pb-44 bg-white px-6 md:px-24 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' } text-center max-w-2xl mx-auto mb-16`}>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
            Paket Internet
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Pilih Paket yang Sesuai dengan <br /> Kebutuhan Bisnis Anda
          </h2>
          <p className="text-[#1e3fae]text-sm md:text-base mt-3 leading-relaxed">
            Koneksi cepat, stabil dan unlimited untuk mendukung produktivitas bisnis Anda.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingData.map((plan, index) => (
           <div
              key={plan.id}
              // Efek Stagger: index * 150ms membuat kartu muncul bergantian (kiri dulu baru kanan)
              style={{ 
                transitionDelay: `${index * 50}ms`,
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' // Efek elastic bounce yang premium
              }}
              className={`relative bg-white border rounded-[24px] p-8 flex flex-col justify-between transform transition-all ${
                isVisible 
                  ? 'duration-[1200ms] opacity-100 translate-y-0 scale-100' 
                  : 'duration-500 opacity-0 translate-y-20 scale-95'
              } hover:shadow-xl hover:-translate-y-2 ${ // Hover effect kartu terangkat sedikit saat disentuh kursor
                plan.isPopular 
                  ? 'border-blue-600 shadow-md shadow-blue-600/5' 
                  : 'border-slate-100 shadow-sm border hover:border-[#1e3fae]'
              }`}
            >
              {/* Bagian Atas: Kecepatan & Harga */}
              <div className="text-center pb-6 border-b border-slate-100/80">
                <div className="flex justify-center items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-[#1e3fae] tracking-tight">
                    {plan.speed}
                  </span>
                  <span className="text-[#1e3fae]font-semibold text-sm">Mbps</span>
                </div>
                
                <p className="text-xs text-[#1e3fae] line-through mt-4">
                  {plan.originalPrice}
                </p>
                <p className="text-2xl font-extrabold text-slate-900 mt-1">
                  {plan.discountPrice}
                </p>
                <span className="text-[10px] font-medium text-[#1e3fae]">/bulan</span>
              </div>

              {/* Bagian Tengah: Daftar Benefit / Fitur */}
              <ul className="my-8 flex flex-col gap-4 pl-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm [#1e3fae]">
                    {/* Icon Centang Biru Minimalis */}
                    <div className="w-4 h-4 rounded-full border border-blue-600 flex items-center justify-center bg-blue-50">
                      <span className="text-[9px] font-bold text-blue-600">✓</span>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Bagian Bawah: Tombol Aksi */}
              <button 
                className={`w-full py-3.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  plan.isPopular
                    ? 'bg-[#1e3fae] text-white hover:bg-blue-700 shadow-md shadow-blue-600/10'
                    : 'bg-blue-50 text-[#1e3fae] hover:bg-blue-100'
                }`}
              >
                Saya Tertarik
              </button>
            </div>
          ))}
        </div>
          <div className="mt-8 p-5 bg-white border border-slate-100 rounded-2xl flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl font-bold">
              ⭐
            </div>
              <div>
                <h4 className="text-sm font-bold text-[#1e3fae]">Biaya pasang baru sebesar Rp 150.000 (belum termasuk PPN 11%) dibayarkan saat proses instalasi selesai dilakukan di lokasi Anda.</h4>
              </div>
          </div>
      </div>
    </section>
  );
}
