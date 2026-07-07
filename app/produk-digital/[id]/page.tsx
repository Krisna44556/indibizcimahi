import Link from 'next/link';
import PosterBox from '@/components/PosterBox';

// 1. Kunci agar Next.js tidak mencari id lain di luar yang didaftarkan (Wajib untuk static export)
export const dynamicParams = false;

// 2. Daftarkan semua slug/id produk yang ada di website kamu agar tidak error 500 lagi
export async function generateStaticParams() {
  return [
    { id: 'managed-wifi' },
    { id: 'oca' },
    { id: 'netmonk' },
    { id: 'cctv' },
    { id: 'pijar-sekolah' },
  ];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DetailProdukPage({ params }: PageProps) {
  // Buka Promise params di sisi server (Next.js 15)
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // DATA KONTEN LAYANAN
  const kontenLayanan: Record<string, { title: string; bgImage: string }> = {
    'managed-wifi': {
      title: 'WIFI Managed Service',
      bgImage: '/poster/w.jpeg', 
    },
    'oca': {
      title: 'Omnichannel Customer Assistant (OCA)',
      bgImage: '/poster/ocafix.png', 
    },
    'netmonk': {
      title: 'Cloud Infrastructure Storage',
      bgImage: '/poster/netmonkfix.png',
    },
    'cctv': {
      title: 'Antarez Eazy ',
      bgImage: '/poster/eazyfix.png',
    },
    'pijar-sekolah': {
      title: 'Pijar Sekolah',
      bgImage: '/poster/pijafix.png',
    },
  };

  const produkAktif = kontenLayanan[id] || { 
    title: 'Layanan Digital', 
    bgImage: '/poster/managed-wifi.jpg' 
  };

  const isManagedWifi = id === 'managed-wifi';

  return (
    <div className="w-full min-h-screen pt-31 pb-10 bg-slate-50/50">
      <div className="max-w-10xl mx-auto px-3 flex flex-col items-center">
        
        {/* HEADER JUDUL */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-blue-900 mb-2">{produkAktif.title}</h1>
          <p className="text-slate-500 font-medium">Halaman Detail Brosur dan Poster Layanan Digital</p>
        </div>

        {/* TOMBOL KEMBALI */}
        <Link href="/#produk-digital" className="bg-white hover:bg-slate-50 text-blue-600 font-bold border border-slate-200 px-6 py-2.5 rounded-full shadow-sm transition-all mb-12 inline-block text-center">
          Kembali ke Beranda
        </Link>

        {/* ========================================================================= */}
        {/* KONDISIONAL LAYOUT */}
        {/* ========================================================================= */}
        {isManagedWifi ? (
          /* LAYOUT KHUSUS MANAGED WIFI: 2 GAMBAR SEJAJAR BERDAMPINGAN */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl items-start bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-slate-100">
            <PosterBox src="/poster/w.jpeg" alt="Wifi Poster 1" />
            <PosterBox src="/poster/manage-wifi-brosur.jpeg" alt="Wifi Poster 2" />
          </div>
        ) : (
          /* LAYOUT STANDAR UNTUK LAYANAN LAIN: 1 GAMBAR DI TENGAH */
          <div className="w-full max-w-2xl bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-slate-100 flex justify-center">
            <PosterBox src={produkAktif.bgImage} alt={produkAktif.title} />
          </div>
        )}
        {/* ========================================================================= */}

        <div className="text-center mt-8">
            <h2 className="text-3xl font-black text-blue-900 mb-2">Syarat Dan ketentuan</h2>
            <p className="text-slate-500 font-medium">Baiya Pasang Baru 150.000 Dan DIbayarkan Saat Installasi Pemesanan DI Lokasi Anda</p>
            <p className="text-slate-500 font-medium">Baiya Pasang Belum Termasuk PPN 11%</p>
            <p className="text-slate-500 font-medium">Kontrak Minimal 1 Tahun</p>
        </div>

      </div>
    </div>
  );
}