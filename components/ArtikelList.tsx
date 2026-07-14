'use client';

import React, { useRef } from 'react';

export default function ArtikelList() {
  // 1. Buat referensi (remot kontrol) untuk kontainer list artikel
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Data dummy artikel tetap aman
  const artikelDummy = [
    {
      title: "Pentingnya Internet Stabil untuk Efisiensi Operasional UMKM",
      desc: "Bagaimana konektivitas digital yang andal dapat memangkas biaya operasional dan mempercepat transaksi bisnis lokal Anda.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60",
      link: "/artikel/internet-stabil-umkm"
    },
    {
      title: "Transformasi Digital: Cara Bisnis Lokal Berkompetisi di Era Modern",
      desc: "Langkah mudah bagi para pelaku usaha di Bandung dan Cimahi untuk mulai memanfaatkan ekosistem digital secara maksimal.",
      image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?w=500&auto=format&fit=crop&q=60",
      link: "/artikel/transformasi-digital-lokal"
    },
    {
      title: "Mengenal Fitur Unggulan Indibiz untuk Menunjang Produktivitas Kantor",
      desc: "Ulasan mendalam mengenai keunggulan jaringan simetris 1:1 tanpa kuota yang dirancang khusus demi kebutuhan korporasi.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&auto=format&fit=crop&q=60",
      link: "/artikel/fitur-unggulan-indibiz"
    },
    {
      title: "Strategi Pemasaran Online yang Cocok untuk Pelaku Ruko & Cafe",
      desc: "Memanfaatkan fasilitas internet cepat untuk membangun engagement pelanggan lewat media sosial dan platform peta digital.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&auto=format&fit=crop&q=60",
      link: "/artikel/strategi-pemasaran-cafe"
    }
  ];

  // 2. Fungsi pengendali geser slider saat tombol dipencet
  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      // Lebar kartu (340px) + Gap antar kartu (24px) = 364px
      const scrollAmount = 364; 
      
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="artikel" className="py-4 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-2">
        
        {/* Bagian Atas: Judul Seksi & Tombol Navigasi Slider */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight pt-2">
              Artikel & Edukasi Terbaru
            </h2>
          </div>
          
          {/* 3. Tombol Panah Kiri-Kanan yang kini dipasangkan fungsi onClick */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-[#00a8ec] hover:text-white hover:border-[#00a8ec] transition-all duration-200 shadow-sm"
            >
              ⟨
            </button>
            <button 
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-[#00a8ec] hover:text-white hover:border-[#00a8ec] transition-all duration-200 shadow-sm"
            >
              ⟩
            </button>
          </div>
        </div>

        {/* 4. Menambahkan ref={scrollContainerRef} dan class scroll-smooth */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory [-webkit-overflow-scrolling:touch]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {artikelDummy.map((item, index) => (
            <div 
              key={index}
              className="min-w-[290px] md:min-w-[340px] max-w-[340px] bg-white rounded-[32px] p-5 shadow-sm border border-slate-100 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 snap-start group"
            >
              <div className="space-y-4">
                {/* Gambar Artikel dengan Efek Zoom on Hover */}
                <div className="w-full h-44 rounded-[22px] overflow-hidden bg-slate-100 relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Judul & Deskripsi Singkat */}
                <div className="space-y-2">
                  <h3 className="font-extrabold text-base md:text-lg text-slate-800 leading-snug tracking-tight line-clamp-2 group-hover:text-[#00a8ec] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Link Aksi 'Read Post' di Paling Bawah */}
              <div className="mt-6 pt-4 border-t border-slate-50 flex justify-center">
                <a 
                  href={item.link}
                  className="text-xs font-bold text-slate-400 hover:text-[#00a8ec] transition-colors tracking-wider uppercase underline decoration-2 underline-offset-4"
                >
                  Read Post
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}