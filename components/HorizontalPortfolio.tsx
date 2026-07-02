'use client';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  client: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'IndiBiz Pijar',
    category: 'Web Development',
    client: 'Indibiz Pijar menghadirkan solusi yang Anda butuhkan untuk  menciptakan proses belajar mengajar yang lebih efektif dan efisien dengan dukungan produk dan layanan berbasis digital',
    image: 'https://pusatinteriormedan.com/wp-content/uploads/2026/05/image-2.png',
  },
  {
    id: 'p2',
    title: 'indiBiz',
    category: 'Infrastructure',
    client: 'TechCorp Indonesia',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgZBl51CdbljC-E8zNrqLWvIxnaDhl4EC7pbVseFtcdhon2jVSwuAfbs&s=10',
  },
  {
    id: 'p3',
    title: 'Telkom Indonesia',
    category: 'Internet Service Provider',
    client: 'Telkom Indonesia',
    image: 'https://www.telkom.co.id/minio/show/data/image_upload/page/1594108255409_compress_logo%20telkom%20indonesia.png',
  },
];

export default function HorizontalPortfolio() {
  // Menggabungkan data asli dengan kloningannya agar looping berjalan mulus tanpa putus
  const doubleData = [...portfolioData, ...portfolioData];

  return (
    <section id="portfolio" className="pt-1 bg-white overflow-hidden border-t border-slate-100">
      {/* Kontainer Luar Marquee */}
      <div className="relative w-full flex overflow-x-hidden py-4 bg-slate-50/50 border-y border-slate-100">

        {/* Efek Fade/Gradasi Blur di Sisi Kiri dan Kanan Layar agar kartu terlihat memudar halus saat masuk & keluar */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Track yang Berjalan Otomatis */}
        <div className="animate-marquee-infinite flex flex-nowrap gap-6 whitespace-nowrap">
          {doubleData.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[300px] md:w-[380px] bg-white border border-slate-100 rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image Area */}
              <div className="h-[200px] md:h-[240px] w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>

              {/* Text Area */}
              <div className="p-2 flex flex-col flex-grow justify-between bg-white">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-slate-900 mt-4 leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-50 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Client:</span>
                  <span className="font-semibold text-slate-700">{item.client}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}