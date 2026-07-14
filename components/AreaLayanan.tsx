import React from 'react';

export default function AreaLayanan() {
  // Data wilayah cakupan agar mudah Anda edit/tambah di masa depan
  const wilayahList = [
    {
      kota: "Kota Bandung",
      kecamatan: ["Coblong", "Regol", "Antapani", "Buahbatu", "Lengkong", "Andir", "Sukajadi", "Bandung Kidul"],
      status: "Tersedia 100% Fiber",
      color: "border-blue-100 bg-blue-50/50"
    },
    {
      kota: "Kota Cimahi",
      kecamatan: ["Cimahi Utara", "Cimahi Tengah", "Cimahi Selatan"],
      status: "Tersedia 100% Fiber",
      color: "border-emerald-100 bg-emerald-50/30"
    },

  ];

  return (
   <section id="arealayanan" className="w-full py-16 px-4 md:px-8 bg-white">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-2xl md:text-4xl font-black text-slate-800 mb-4">
      Sudah Hadir di Wilayah Anda
    </h2>
    <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
      Nikmati koneksi internet super cepat Indibiz yang telah menjangkau berbagai ruko, sekolah, dan perkantoran di area berikut.
    </p>
  </div>

  {/* ================= DUA KARTU UTAMA (RESPONSIVE) ================= */}
  {/* Perubahan utama: flex-col di mobile, md:flex-row di desktop */}
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8">
    
    {/* KARTU KOTA BANDUNG */}
    <div className="w-full md:w-1/2 bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 flex flex-col justify-between shadow-sm">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">📍</span>
          <h3 className="font-extrabold text-slate-800 text-xl">Kota Bandung</h3>
        </div>
        <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-6">
          ⚡ Tersedia 100% Fiber
        </span>
        
        {/* Menggunakan grid agar list wilayah rapi saat menumpuk di HP */}
        <div className="grid grid-cols-2 gap-3 text-sm text-slate-600 font-medium text-left">
          <div>✓ Cibeunying</div>
          <div>✓ Regol</div>
          <div>✓ Antapani</div>
          <div>✓ Buahbatu</div>
          <div>✓ Lengkong</div>
          <div>✓ Andir</div>
          <div>✓ Sukasari</div>
          <div>✓ Bandung W.</div>
        </div>
      </div>
      
      <button className="mt-8 w-full bg-[#0b2347] hover:bg-[#143564] text-white text-sm font-bold py-3 rounded-xl transition-all">
        Cek Alamat Rumah
      </button>
    </div>

    {/* KARTU KOTA CIMAHI */}
    <div className="w-full md:w-1/2 bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 flex flex-col justify-between shadow-sm">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">📍</span>
          <h3 className="font-extrabold text-slate-800 text-xl">Kota Cimahi</h3>
        </div>
        <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-6">
          ⚡ Tersedia 100% Fiber
        </span>
        
        <div className="grid grid-cols-2 gap-3 text-sm text-slate-600 font-medium text-left">
          <div>✓ Cimahi Utara</div>
          <div>✓ Cimahi Tengah</div>
          <div>✓ Cimahi Selatan</div>
        </div>
      </div>
      
      <button className="mt-8 w-full bg-[#0b2347] hover:bg-[#143564] text-white text-sm font-bold py-3 rounded-xl transition-all">
        Cek Alamat Rumah
      </button>
    </div>

  </div>
</section>
  )
}