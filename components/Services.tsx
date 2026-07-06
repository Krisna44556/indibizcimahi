'use client';

interface ServiceItem {
  id: string;
  num: string;
  badge: string;
  title: string;
  desc: string;
  bgImage: string; // 📸 Daftarkan gambar untuk masing-masing kartu di sini
}

export default function ServiceCards() {
  const services: ServiceItem[] = [
    {
      id: 'high-speed-internet',
      num: '01',
      badge: 'Core Network',
      title: 'IndiBiz Health',
      desc: 'Koneksi simetris dedicated khusus untuk operasional bisnis.',
      bgImage: '/poster/img1.jpeg', // 🛠️ Sesuaikan dengan nama file gambarmu
    },
    {
      id: 'managed-it-support',
      num: '02',
      badge: 'Security',
      title: 'IndiBiz Hotel',
      desc: 'Tim ahli yang siap memonitor infrastruktur digital Anda.',
      bgImage: '/poster/img2.jpeg', 
    },
    {
      id: 'professional-technician',
      num: '03',
      badge: 'Security',
      title: 'IndiBiz MultiFinance',
      desc: 'Penanganan cepat oleh tenaga ahli yang berpengalaman di bidangnya.',
      bgImage: '/poster/img3.jpeg',
    },
    {
      id: 'professional-technician',
      num: '04',
      badge: 'Security',
      title: 'IndiBiz Sekolah',
      desc: 'Penanganan cepat oleh tenaga ahli yang berpengalaman di bidangnya.',
      bgImage: '/poster/img4.jpeg',
    },
    {
      id: 'professional-technician',
      num: '05',
      badge: 'Security',
      title: 'IndiBiz Managed WIFI Service',
      desc: 'Penanganan cepat oleh tenaga ahli yang berpengalaman di bidangnya.',
      bgImage: '/poster/img5.jpeg',
    },
    {
      id: 'professional-technician',
      num: '06',
      badge: 'Security',
      title: 'IndiBiz Ekspedisi',
      desc: 'Penanganan cepat oleh tenaga ahli yang berpengalaman di bidangnya.',
      bgImage: '/poster/img6.jpeg',
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* JUDUL SEKSI */}
        <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight mb-16 max-w-2xl leading-tight">
          Layanan Terintegrasi <br /> untuk Akselerasi Bisnis Anda
        </h2>

        {/* GRID LAYOUT KARTU INTERAKTIF */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative min-h-[380px] rounded-[32px] p-8 border border-slate-100 bg-slate-50/50 shadow-sm flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/15 cursor-pointer"
            >
              
              {/* 🛠️ 1. GAMBAR LATAR BELAKANG (Muncul Halus Saat Hover) */}
              <img
                src={service.bgImage}
                alt={service.title}
                className="absolute inset-2 w-full h-150 object-cover z-1 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
              
              {/* 🛠️ 2. LAPISAN GRADASI GELAP (Muncul Hanya Saat Hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* KONTEN ATAS (Badge & Angka) */}
              <div className="relative z-20 flex items-center justify-between">
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-blue-600 transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:text-white">
                  {service.badge}
                </span>
                <span className="text-3xl font-black text-blue-900/20 tracking-tight transition-colors duration-500 group-hover:text-white/30">
                  {service.num}
                </span>
              </div>

              {/* KONTEN BAWAH (Judul & Deskripsi) */}
              <div className="relative z-20 mt-auto">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug transition-colors duration-500 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 mt-3 leading-relaxed transition-colors duration-500 group-hover:text-slate-200">
                  {service.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}