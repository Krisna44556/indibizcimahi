'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Artikel {
  id: string;
  title: string;
  category: 'Network' | 'Cloud' | 'Security';
  tags: string[];
  points: string[];
  bgImage: string; // 🛠️ Sekarang menggunakan file gambar untuk background
}

export default function ArtikelPage() {
  const [activeFilter, setActiveFilter] = useState<string>('Semua');

  const daftarArtikel: Artikel[] = [
    {
      id: 'panduan-wifi-kantor',
      title: 'Panduan Memilih WIFI Managed Service untuk Kantor',
      category: 'Network',
      tags: ['Core Network', 'Cloud Infrastructure', 'Security'],
      points: [
        'Akses WiFi Berkecepatan Tinggi',
        'Integrasi Keamanan Jaringan',
        'Sistem Monitoring Real-time'
      ],
      bgImage: '/poster/img1.jpeg', // 📸 Gambar cover penuh kartu 1
    },
    {
      id: 'manfaat-cloud-bisnis',
      title: 'Manfaat Cloud Infrastructure untuk Skalabilitas Bisnis',
      category: 'Cloud',
      tags: ['Core Network', 'Cloud Infrastructure', 'Security'],
      points: [
        'Manfaat Cloud Infrastructure',
        'Integrasi Keamanan Jaringan',
        'Sistem Monitoring Real-time'
      ],
      bgImage: '/poster/img2.jpeg', // 📸 Gambar cover penuh kartu 2
    },
    {
      id: 'pentingnya-managed-it',
      title: 'Mengapa 24/7 Managed IT Support Penting untuk Keamanan Data',
      category: 'Security',
      tags: ['Core Network', 'Cloud Infrastructure', 'Security'],
      points: [
        'Mengapa 24/7 Managed IT Support',
        'Penting untuk Keamanan Data',
        'Sistem Monitoring Real-time'
      ],
      bgImage: '/poster/img3.jpeg', // 📸 Gambar cover penuh kartu 3
    },
  ];

  const artikelTersaring = activeFilter === 'Semua' 
    ? daftarArtikel 
    : daftarArtikel.filter(item => item.category === activeFilter);

  return (
    <div className="w-full min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* HEADER UTAMA */}
        <div className="text-center max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Artikel dan Wawasan Digital Terbaru
          </h1>
          <p className="text-slate-500 mt-4 text-base md:text-lg font-medium">
            Inspirasi dan Panduan untuk Transformasi Bisnis Anda
          </p>
        </div>

        {/* CONTROLLER FILTER INTERAKTIF */}
        <div className="flex items-center gap-2 md:gap-4 mb-16 bg-slate-100 p-1.5 rounded-full border border-slate-200/60 shadow-inner">
          {['Semua', 'Network', 'Cloud', 'Security'].map((kategori) => (
            <button
              key={kategori}
              onClick={() => setActiveFilter(kategori)}
              className={`px-5 py-2 text-xs md:text-sm font-bold rounded-full transition-all duration-300 ${
                activeFilter === kategori
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {kategori}
            </button>
          ))}
        </div>

        {/* 3-COLUMNS PREMIUM GRID LAYOUT DENGAN BACKGROUND COVER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
          {artikelTersaring.map((artikel) => (
            <div
              key={artikel.id}
              className="relative rounded-[36px] overflow-hidden border border-slate-100 flex flex-col justify-between transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl min-h-[500px] p-8 md:p-9 group text-white shadow-md"
            >
              
              {/* 🛠️ GAMBAR COVER BACKGROUND PENH */}
              <img 
                src={artikel.bgImage} 
                alt={artikel.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-0"
              />
              
              {/* 🛠️ LAPISAN GRADASI GELAP AGAR TEKS TETAP JELAS TERBACA */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 z-10"></div>

              {/* KONTEN ATAS (Terjaga di atas z-index gambar) */}
              <div className="relative z-20">
                {/* PIL BADGES */}
                <div className="flex flex-wrap gap-1.5 max-w-[90%] mb-6">
                  {artikel.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/15 border border-white/20 text-white/90 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* JUDUL UTAMA */}
                <h3 className="text-xl md:text-2xl font-black tracking-tight leading-snug mb-8 min-h-[56px] line-clamp-3 text-white">
                  {artikel.title}
                </h3>

                {/* TOMBOL BACA INTERAKTIF */}
                <div className="mb-8">
                  <Link
                    href={`/artikel/${artikel.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-sm font-bold bg-white text-blue-950 hover:bg-slate-100 shadow-sm transition-all duration-300 transform group-hover:scale-[1.02]"
                  >
                    Baca Artikel Lengkap
                    <svg 
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* KONTEN BAWAH: CHECKLIST POIN RELEVAN */}
              <div className="relative z-20 pt-6 border-t border-white/10">
                <ul className="space-y-3">
                  {artikel.points.map((poin, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs md:text-sm font-semibold">
                      <svg
                        className="w-4 h-4 shrink-0 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-200">
                        {poin}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}