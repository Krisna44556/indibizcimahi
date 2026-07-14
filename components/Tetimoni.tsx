'use client';

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  message: string;
  avatarBg: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'Pemilik Toko Kelontong Modern',
    company: 'Sembako Jaya Cimahi Utara',
    message: 'Sejak pakai Indibiz, kasir digital dan CCTV online di toko tidak pernah putus koneksi lagi. Kirim laporan harian jadi super cepat dan omset terpantau aman!',
    avatarBg: 'bg-blue-600',
  },
  {
    id: 2,
    name: 'Dewi Lestari',
    role: 'Founder & CEO',
    company: 'Creative Studio Lengkong',
    message: 'Rasio kecepatan 1:1 nya beneran kerasa pas kami upload file video backup project ke cloud server. Upload bergiga-giga beres dalam hitungan menit. Sangat rekomen untuk UMKM digital!',
    avatarBg: 'bg-indigo-600',
  },
  {
    id: 3,
    name: 'Hendra Wijaya',
    role: 'Manajer Operasional',
    company: 'Cafe & Resto Regol',
    message: 'WiFi Managed Service dari Indibiz membuat pelanggan cafe betah berlama-lama karena internetnya stabil walau diakses puluhan gadget sekaligus. Support tim teknisnya juga sigap.',
    avatarBg: 'bg-slate-700',
  },
];

export default function Testimoni() {
  return (
    // 🛠️ ID ini yang menyambungkan navigasi smooth scroll di Navbar
    <section id="testimoni" className="w-full py-24 bg-white px-6 md:px-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Seksi */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono bg-blue-50 px-3 py-1 rounded-md">
            Testimoni Pelanggan
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Dipercaya oleh Pelaku Bisnis <br /> Area Bandung & Cimahi
          </h2>
          <p className="text-slate-500 text-sm md:text-base mt-4">
            Dengarkan langsung cerita sukses dari para pemilik usaha yang telah meningkatkan produktivitasnya bersama jaringan andal kami.
          </p>
        </div>

        {/* Grid Komponen Kartu Testimoni */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id}
              className="bg-slate-50/60 border border-slate-100 p-8 rounded-3xl flex flex-col justify-between relative transition-all duration-300 hover:shadow-md hover:bg-white hover:border-blue-500/20 group"
            >
              {/* Tanda Kutip Estetik */}
              <span className="absolute top-6 right-8 text-4xl text-slate-200 font-serif group-hover:text-blue-200 transition-colors pointer-events-none">
                “
              </span>

              <div>
                {/* Rating Bintang Generik */}
                <div className="flex gap-1 text-amber-400 text-sm mb-4">
                  ★★★★★
                </div>
                {/* Isi Pesan */}
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  "{item.message}"
                </p>
              </div>

              {/* Detail Identitas Pelanggan */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-200/50">
                {/* Avatar Berbentuk Inisial Nama */}
                <div className={`w-10 h-10 ${item.avatarBg} text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm`}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {item.role}, <span className="text-blue-600 font-medium">{item.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}