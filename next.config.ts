import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 🛠️ WAJIB TAMBAHKAN BARIS INI
  images: {
    unoptimized: true, // 🛠️ Tambahkan ini jika kamu menggunakan komponen <Image /> bawaan Next.js
  },
};

export default nextConfig;
