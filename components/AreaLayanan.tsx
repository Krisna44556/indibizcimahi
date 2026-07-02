'use client';

import { useEffect, useState, useRef } from 'react';

interface Region {
  name: string;
  count: string;
}

const regionsData: Region[] = [
  { name: 'Padalarang', count: '98% Coverage' },
  { name: 'Ngamprah', count: '95% Coverage' },
  { name: 'Batujajar', count: '92% Coverage' },
  { name: 'Cisarua', count: '89% Coverage' },
  { name: 'Lembang', count: '96% Coverage' },
  { name: 'Parongpong', count: '90% Coverage' },
];

export default function AreaLayanan() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    // 🛠️ WAJIB PASANG id="area-layanan" DI SINI AGAR SYNC DENGAN NAVBAR
    <section 
      ref={sectionRef} 
      id="area-layanan" 
      className="w-full py-28 bg-slate-50/50 px-6 md:px-24 border-t border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Kolom Kiri: Informasi Utama & Statistik */}
        <div className={`w-full lg:w-2/5 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
            Coverage Area
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 leading-tight">
            Jaringan Luas, Hadir <br /> di Sekitar Anda
          </h2>
          <p className="text-slate-500 text-sm md:text-base mt-4 leading-relaxed">
            Kami terus memperluas infrastruktur kabel fiber optik murni demi memastikan kestabilan koneksi internet terbaik untuk mendukung digitalisasi bisnis daerah Anda.
          </p>

          {/* Mini Info Banner */}
          <div className="mt-8 p-5 bg-white border border-slate-100 rounded-2xl flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl font-bold">
              ⚡
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">100% Pure Fiber Optic</h4>
              <p className="text-xs text-slate-400 mt-0.5">Koneksi simetris tanpa intervensi cuaca.</p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Grid Wilayah dengan Efek Stagger */}
        <div className="w-full lg:w-3/5 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {regionsData.map((region, index) => (
            <div
              key={region.name}
              style={{ 
                transitionDelay: `${index * 80}ms`,
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
              className={`bg-white border border-slate-100 p-6 rounded-2xl flex flex-col justify-between transform transition-all shadow-sm ${
                isVisible 
                  ? 'duration-1000 opacity-100 translate-y-0 scale-100' 
                  : 'duration-500 opacity-0 translate-y-12 scale-95'
              } hover:border-blue-500/30 hover:shadow-md hover:-translate-y-1.5 hover:bg-blue-50/10 group cursor-default`}
            >
              <div>
                {/* Pin Icon Kecil */}
                <span className="text-slate-300 group-hover:text-blue-500 transition-colors text-sm">📍</span>
                <h3 className="text-base font-bold text-slate-800 mt-3 group-hover:text-blue-600 transition-colors">
                  {region.name}
                </h3>
              </div>
              <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 group-hover:bg-blue-50 group-hover:text-blue-600 px-2 py-0.5 rounded-md mt-4 w-fit transition-colors">
                {region.count}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}