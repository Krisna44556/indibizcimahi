'use client';

interface PosterBoxProps {
  src: string;
  alt: string;
}

export default function PosterBox({ src, alt }: PosterBoxProps) {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-md bg-slate-100 border border-slate-200/60">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-auto object-contain"
        onError={(e) => {
          // Jika gambar produk belum ada/gagal dimuat, otomatis dialihkan ke gambar wifi
          (e.target as HTMLImageElement).src = '/poster/managed-wifi.jpg';
        }}
      />
    </div>
  );
}