// components/Hero.tsx
'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    // 1. Kontainer Utama: Mengunci Gambar Full Screen dengan Efek Parallax (bg-fixed)
    <section 
      id="home" 
      className="relative w-full min-h-screen bg-fixed bg-center bg-cover flex items-center px-6 md:px-24 overflow-hidden"
      style={{ backgroundImage: "url('/poster/page.jpg')" }} // <-- Pastikan file gambar ditaruh di public/poster/gambar-hero.jpg
    >
      
      {/* 2. Overlay Kegelapan: Menjamin Teks Tetap Kontras & Mudah Dibaca */}
      <div className="absolute inset-0 bg-slate-950/45 z-10" />

      {/* 3. Konten Utama: Naik ke Atas Overlay Menggunakan z-20 */}
      <div className="relative z-20 max-w-3xl text-left text-white mt-16 animate-fade-in">
        
        {/* Sub-heading kecil */}
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono bg-blue-950/40 border border-blue-800/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
          DANANTARA TELKOM DAN INDIBIZ
        </span>

        {/* Judul Utama */}
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mt-6 leading-[1.15]">
          Internet Cepat & <span className="text-[#1e3fae] drop-shadow-sm">Stabil</span> <br />
          Untuk Bisnis Anda <br />
          di Bandung Barat
        </h1>

        {/* Deskripsi */}
        <p className="text-slate-200 text-sm md:text-lg mt-6 max-w-xl leading-relaxed font-medium">
          Indibiz hadir dengan koneksi andal untuk mendukung bisnis Anda
        </p>

        {/* Mini Fitur / Badges Keunggulan di Paling Bawah */}
        <div className="flex flex-wrap items-center gap-4 mt-12 pt-1 border-t border-white/10">
          <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="text-blue-400 text-xs">✓</span>
            <span className="text-xs font-semibold text-slate-200">Unlimited</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="text-blue-400 text-xs">✓</span>
            <span className="text-xs font-semibold text-slate-200">Stabil</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="text-blue-400 text-xs">✓</span>
            <span className="text-xs font-semibold text-slate-200">Support 24/7</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="text-blue-400 text-xs">✓</span>
            <span className="text-xs font-semibold text-slate-200">Rasio Kecepatan 1 : 1</span>
          </div>
        </div>

      </div>

    </section>
  );
}