'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Berapa lama proses instalasi pemasangan Indibiz?',
    answer: 'Proses instalasi dan penarikan kabel fiber optik ke lokasi Anda umumnya memakan waktu 1 hingga 3 hari kerja setelah penjadwalan disetujui oleh tim teknisi lapangan.',
  },
  {
    question: 'Apakah biaya pasang baru bisa dicicil atau dibayar belakangan?',
    answer: 'Sesuai kebijakan, biaya pasang baru sebesar Rp 150.000 wajib dibayarkan secara tunai/transfer langsung saat proses instalasi fisik selesai dilakukan di lokasi Anda.',
  },
  {
    question: 'Apakah kecepatan download dan upload Indibiz sama besar?',
    answer: 'Ya! Semua paket internet Indibiz sudah mendukung rasio kecepatan 1:1 (Simetris). Jika Anda berlangganan paket 50 Mbps, maka kecepatan download maupun upload Anda akan sama-sama berada di kisaran 50 Mbps.',
  },
  {
    question: 'Berapa lama masa kontrak minimal berlangganan?',
    answer: 'Masa kontrak minimal berlangganan untuk seluruh paket bisnis Indibiz adalah 1 tahun (12 bulan) sejak status jaringan aktif.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-24 bg-slate-50 px-6 md:px-24 border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        
        {/* Header FAQ */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono bg-blue-50 px-3 py-1 rounded-md">
            Pertanyaan Umum
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Sering Ditanyakan (FAQ)
          </h2>
        </div>

        {/* List Accordion FAQ */}
        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                {/* Tombol Pertanyaan */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-800 hover:text-blue-600 transition-colors gap-4"
                >
                  <span className="text-sm md:text-base">{item.question}</span>
                  <span className={`text-xl transform transition-transform duration-300 ${isOpen ? 'rotate-185 text-blue-600' : 'text-slate-400'}`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {/* Konten Jawaban (Buka/Tutup) */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-40 border-t border-slate-50' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 text-xs md:text-sm text-slate-500 leading-relaxed bg-slate-50/50">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}