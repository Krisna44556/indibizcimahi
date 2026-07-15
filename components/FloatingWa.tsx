'use client';

import React from 'react';

export default function FloatingWA() {
  // Ganti dengan nomor WhatsApp klien Anda (pastikan pakai kode negara 62 di depan tanpa tanda +)
  const phoneNumber = "6282338263646"; 
  const message = encodeURIComponent("Halo Indibiz Cimahi, saya tertarik untuk bertanya seputar paket internet.");
  const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:bg-[#20ba5a] hover:scale-110 group"
      aria-label="Chat WhatsApp"
    >
      {/* Efek Ripple/Denyut di belakang tombol */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none group-hover:hidden"></span>

      {/* Icon WhatsApp menggunakan SVG murni (ringan & tanpa library tambahan) */}
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.41 1.456 5.4 0 9.794-4.394 9.797-9.794.002-2.618-1.01-5.08-2.859-6.932C17.097 2.03 14.636 1.01 12.016 1.01c-5.4 0-9.793 4.393-9.797 9.794-.001 1.932.501 3.82 1.458 5.424l-.955 3.486 3.575-.937zm10.067-5.514c-.269-.134-1.593-.786-1.84-.876-.246-.089-.427-.134-.607.134-.181.269-.7 1.84-.858 2.02-.158.18-.317.202-.586.067-.27-.134-1.137-.42-2.167-1.34-.801-.715-1.342-1.597-1.5-1.866-.158-.269-.017-.415.118-.549.121-.12.269-.314.403-.472.135-.157.179-.269.269-.449.09-.18.045-.337-.022-.472-.068-.135-.607-1.46-.831-2.001-.219-.526-.44-.454-.607-.462-.157-.008-.337-.01-.517-.01-.18 0-.472.067-.719.336-.247.269-.943.921-.943 2.248 0 1.327.965 2.607 1.099 2.787.135.18 1.9 2.901 4.602 4.068.643.278 1.144.443 1.536.567.646.206 1.233.177 1.697.108.517-.078 1.593-.651 1.817-1.279.225-.628.225-1.167.157-1.279-.068-.112-.247-.18-.517-.314z" />
      </svg>
    </a>
  );
}