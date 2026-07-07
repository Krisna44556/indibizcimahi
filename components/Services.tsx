'use client';

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  bgImage: string; // 📸 Daftarkan gambar untuk masing-masing kartu di sini
}

export default function ServiceCards() {
  const services: ServiceItem[] = [
    {
      id: 'high-speed-internet',
      title: 'IndiBiz Health',
      desc: 'solusi digitalisasi layanan kesehatan dengan dukungan konektivitas terbaik.',
      bgImage: '/poster/rs.jpeg', // 🛠️ Sesuaikan dengan nama file gambarmu
    },
    {
      id: 'managed-it-support',
      title: 'IndiBiz Hotel',
      desc: 'ciptakan pengalaman yang tak terlupkan dengan memberi konektivitas yang stabil, den keamanan jaringan yang kuat.',
      bgImage: '/poster/hotel.jpeg',
    },
    {
      id: 'professional-technician',
      title: 'IndiBiz MultiFinance',
      desc: 'bisnis multifinance lebih efektif dengan dukungan konektivitas terbaik.',
      bgImage: '/poster/finance.jpeg',
    },
    {
      id: 'sekolah',
      title: 'IndiBiz Sekolah',
      desc: 'ciptakan sistem pembelajaran digital yang lebih mudah dan menyenangkan dengan dukungan konektivitas terbaik .',
      bgImage: '/poster/sekolah1.jpeg',
    },
    {
      id: 'wifi-service',
      title: 'IndiBiz Ruko',
      desc: 'dengan konektivitas cepat, jadikan oprasional bisnis ruko menjadi lebih mudah, agar bisa menjadi bisnis yang handal dan inovatif.',
      bgImage: '/poster/ruko.jpeg',
    },
    {
      id: 'ekspedisi',
      title: 'IndiBiz Ekspedisi',
      desc: 'optimalkan efisiensi proses logistik, manajemen invetaris yang efisien dan pelacakan pengiriman dengan konektivitas yang handal dan terbaik.',
      bgImage: '/poster/ekspedisi.jpeg',
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
              className="group relative min-h-[380px] rounded-[32px] p-8 border border-slate-100 bg-slate-50/50 shadow-sm flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/15 cursor-pointer "
            >

              {/* 🛠️ 1. GAMBAR LATAR BELAKANG (Muncul Halus Saat Hover) */}
              <img
                src={service.bgImage}
                alt={service.title}
                className="absolute inset-0  w-full h-full object-cover z-0 scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />


              {/* 🛠️ 2. LAPISAN GRADASI GELAP (Muncul Hanya Saat Hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* KONTEN BAWAH (Judul & Deskripsi) */}
              <div className="relative z-20 mt-auto">
                <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-snug transition-colors duration-500 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-white mt-3 leading-relaxed transition-colors duration-500 group-hover:text-slate-200">
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
      