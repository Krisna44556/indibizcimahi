'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Artikel {
  id: string;
  title: string;
  tags: string[];
  points: string[];
  desc: string;
}

export default function ArtikelPage() {
  const [activeFilter, setActiveFilter] = useState<string>('Semua');

  const daftarArtikel: Artikel[] = [
    {
      id: 'panduan-wifi-kantor',
      desc: 'Panduan Internet Bisnis Bandung Barat untuk UMKM Naik Kelas Kabupaten Bandung Barat (KBB) bukan lagi sekadar wilayah penyangga. Dalam beberapa tahun terakhir, kawasan seperti Padalarang, Ngamprah, hingga Lembang telah bertransformasi menjadi pusat pertumbuhan ekonomi baru.',
      title: 'Solusi Internet Bisnis Bandung Barat untuk UMKM Naik Kelas',
      tags: ['umkm naik kelas', 'bisnis umkn bandung barat', 'Security'],
      points: ['Akses WiFi Berkecepatan Tinggi', 'Integrasi Keamanan Jaringan', 'Sistem Monitoring Real-time'],
    },
    {
      id: 'strategi-bisnis-internet',
      desc: 'Semakin ketat Dari warung kopi di Padalarang hingga glamping mewah di Lembang semua berlomba-lomba mendapatkan perhatian konsumen Untuk memenangkan hati pelanggan Anda membutuhkan lebih dari sekadar produk yang bagus Anda membutuhkan visibilitas.',
      title: '5 Strategi Internet Bisnis (KBB) Bersama Indibiz untuk Tingkatkan Omzet',
      tags: ['staregi bisnis bandung barat', 'bisnis internet bandung barat', 'Security'],
      points: ['Indibiz Internet Bisnis Bandung Barat'],
    },
    {
      id: 'digitalisasi-umkm-wisata',
      title: 'Digitalisasi Wisata dan Kuliner Bandung Barat Peran Penting Indibiz',
      desc: 'Sektor wisata dan kuliner KBB butuh sentuhan digital. Simak bagaimana Indibiz Internet Bisnis Bandung Barat membantu homestay dan UMKM kuliner meraih wisatawan.',
      tags: ['Wisata Bandung Barat, Digital Marketing Kuliner, Homestay Lembang, Indibiz, UMKM KBB.'],
      points: ['Indibiz Internet Bisnis Bandung Barat'],
    },
    {
      id: 'digital-marketing-bandung-barat',
      title: 'Jasa Digital Marketing & Internet Bisnis Bandung Barat Terpercaya Indibiz',
      desc: 'Mencari jasa digital marketing di KBB? Indibiz Internet Bisnis Bandung Barat menawarkan layanan SEO, Web Development, dan Social Media Ads dengan harga kompetitif.',
      tags: ['Jasa SEO Bandung Barat, Web Development KBB, Social Media Ads, Indibiz, Agensi Digital Marketing'],
      points: ['Indibiz Internet Bisnis Bandung Barat'],
    },
    {
      id: 'kisah-sukses-bisnis-online-kbb-indibiz',
      title: 'Membangun Bisnis Online di KBB Kisah Sukses Bersama Indibiz',
      desc: 'Baca bagaimana pelaku usaha di Bandung Barat berhasil melipatgandakan pendapatan mereka melalui program pendampingan Indibiz Internet Bisnis Bandung Barat.',
      tags: ['Testimoni Indibiz, Kisah Sukses UMKM, Bisnis Online Bandung Barat, Pelatihan Digital Marketing, Indibiz.'],
      points: ['Indibiz Internet Bisnis Bandung Barat'],
    },
    {
      id: 'solusi-keamanan-aset-bisnis-kbb-cctv',
      title: 'Solusi Keamanan 24/7 di KBB Keamanan Bisnis Bersama CCTV Security Bandung Barat',
      desc: 'Pelajari bagaimana pemilik usaha dan properti di Bandung Barat mengamankan aset berharga mereka dari risiko kejahatan dengan teknologi smart cloud CCTV Security Bandung Barat.',
      tags: ['Keamanan Bisnis, CCTV Cloud Bandung Barat, Solusi Keamanan Toko, Pemantauan Real-time, Indibiz Security..'],
      points: ['Indibiz Internet Bisnis Bandung Barat'],
    },
  ];

  const artikelTersaring = activeFilter === 'Semua'
    ? daftarArtikel
    : daftarArtikel.filter(item => item.tags.includes(activeFilter));

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
        

        {/* 3-COLUMNS PREMIUM GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
          {artikelTersaring.map((artikel) => (
            <div
              key={artikel.id}
              className="relative rounded-[36px] p-8 md:p-9 border flex flex-col justify-between transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl bg-slate-50/50 border-slate-100 group"
            >
              <div>
                {/* JUDUL UTAMA */}
                <h3 className="text-xl md:text-2xl font-black tracking-tight leading-snug mb-4 min-h-[56px] line-clamp-3 text-slate-900">
                  {artikel.title}
                </h3>

                {/* DESKRIPSI SINGKAT */}
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium mb-8 line-clamp-4">
                  {artikel.desc}
                </p>
              </div>

              {/* TOMBOL BACA DINAMIS (Cukup 1 buah saja untuk semua kartu) */}
              <div className="w-full mt-auto">
                <Link
                  href={`/artikel/${artikel.id}`} // 👈 KUNCINYA DI SINI: Otomatis sesuai ID artikel masing-masing!
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-bold shadow-sm transition-all duration-300 transform bg-white border border-slate-200 text-blue-900 hover:bg-blue-600 hover:text-white hover:border-blue-600 group-hover:scale-[1.01]"
                >
                  Baca Artikel Lengkap
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    
                  </svg>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}