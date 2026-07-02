'use client';

interface LogoItem {
  name: string;
  src: string;
}

// Daftar logo partner/mitra Indibiz
const logos: LogoItem[] = [
  { name: 'Telkom Indonesia', src: '/poster/telkom.png' },
  { name: 'Telkomsel', src: '/poster/danantara.png' },
  { name: 'IndiHome', src: '/poster/sekolah.jpg' },
  { name: 'Satu', src: '/poster/indibizlogo2-removebg-preview.png' },
  { name: 'Digihub', src: '/poster/logo-digihub.png' },
];

export default function RunningLogo() {
  return (
    <section className="w-full py-16 bg-white border-t border-b border-slate-100 overflow-hidden">
      <div className="w-full mx-auto">
        
        {/* Teks Pengantar */}
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 font-mono mb-10">
          Bagian dari Ekosistem Digital Terbesar
        </p>

        {/* Pembungkus Utama Slider (Ditambahkan w-full dan flex) */}
        <div className="relative w-full flex overflow-x-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          
          {/* 🛠️ BARISAN 1: Ditambahkan `shrink-0` dan `min-w-full` agar tidak gepeng/terpotong */}
          <div className="animate-infinite-scroll flex shrink-0 items-center justify-around gap-6 min-w-full pr-16">
            {logos.map((logo, index) => (
              <img
                key={`main-${index}`}
                src={logo.src}
                alt={logo.name}
                className="h-1 md:h-20 w-auto object-contain hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>

          {/* 🛠️ BARISAN 2 (Kloning): Wajib sama persis menggunakan `shrink-0` dan `min-w-full` */}
          <div className="animate-infinite-scroll flex shrink-0 items-center justify-around gap-16 min-w-full pr-16" aria-hidden="true">
            {logos.map((logo, index) => (
              <img
                key={`clone-${index}`}
                src={logo.src}
                alt={logo.name}
                className="h-1 md:h-20 w-auto object-contain hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}