// components/Hero.tsx
'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    // 1. Kontainer Utama: Mengunci Gambar Full Screen dengan Efek Parallax (bg-fixed)
      <section 
        id="home"
        className="relative text-white pt-44 pb-20 px-4 text-center rounded-b-[45px] shadow-lg bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out"
        style={{ backgroundImage: "url('/poster/tema.jpeg')" }}
      >
        {/* Lapisan Overlay Biru Transparan */}
        <div className="absolute inset-0 bg-[#00a8ec]/35 rounded-b-[45px] z-0"></div>

        {/* Konten Utama */}
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Internet Cepat & <span className="text-black">Stabil</span> Untuk Bisnis Anda di Bandung & Cimahi
          </h1>
          <p className="text-white/90 text-base md:text-lg font-medium max-w-xl mx-auto">
            Indibiz hadir dengan koneksi andal tanpa batas kuota untuk mendukung kemajuan bisnis lokal Anda.
          </p>
        </div>
      </section>
  );
}