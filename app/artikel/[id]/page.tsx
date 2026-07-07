import Link from 'next/link';

// 1. Kunci agar Next.js tidak mencari rute dinamis lain di luar list (Wajib untuk static export)
export const dynamicParams = false;

// 2. Daftarkan semua slug/id artikel secara sangat eksplisit
export async function generateStaticParams() {
  return [
    { id: 'panduan-wifi-kantor' },
    { id: 'manfaat-cloud-bisnis' },
    { id: 'strategi-bisnis-internet' },
    { id: 'digitalisasi-umkm-wisata' },
    { id: 'digital-marketing-bandung-barat' },
    { id: 'kisah-sukses-bisnis-online-kbb-indibiz'},
    { id: 'solusi-keamanan-aset-bisnis-kbb-cctv'}
  ];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

// 3. Komponen menggunakan async/await murni sisi Server (Tidak ada 'use client')
export default async function DetailArtikelPage({ params }: PageProps) {
  
  // 4. Buka data Promise params menggunakan await sesuai aturan Next.js 15
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // DATA KONTEN LENGKAP ARTIKEL
  const dataArtikel: Record<string, { title: string; date: string; author: string; bgImage: string; content: string[] }> = {
    'panduan-wifi-kantor': {
      title: 'Indibiz: Solusi Internet Bisnis Bandung Barat untuk UMKM Naik Kelas',
      date: '06 Juli 2026',
      author: 'Tim Ahli IndiBiz',
      bgImage: '/poster/solusi.jpeg',
      content: [
        'Kabupaten Bandung Barat (KBB) bukan lagi sekadar wilayah penyangga. Dalam beberapa tahun terakhir, kawasan seperti Padalarang, Ngamprah, hingga Lembang dan Parongpong telah bertransformasi menjadi pusat pertumbuhan ekonomi baru. Mulai dari UMKM kuliner, kerajinan tangan, hingga sektor pariwisata, semuanya tumbuh pesat',
        'Namun, di tengah pesatnya pertumbuhan ini, banyak pelaku usaha yang masih menghadapi satu masalah besar: bagaimana cara bersaing di era digital?',
        'Jika Anda merasa kebingungan memulai go digital, atau merasa iklan online Anda tidak menghasilkan penjualan, Anda tidak sendirian. Di sinilah Indibiz Internet Bisnis Bandung Barat hadir sebagai solusi dan mitra strategis untuk membawa bisnis Anda naik kelas.',
        'Mengapa Pelaku Usaha di KBB Harus Segera Go Digital?',
        'Perilaku konsumen telah berubah secara drastis. Sebelum memutuskan untuk membeli produk atau mengunjungi sebuah kafe di Lembang, konsumen kini akan mencari informasinya melalui smartphone mereka. Mereka akan membaca ulasan, melihat foto, dan membandingkan harga. Jika bisnis Anda di Bandung Barat tidak memiliki jejak digital yang kuat, Anda secara tidak langsung menyerahkan ribuan potensi pembeli lokal maupun wisatawan dari Jakarta dan sekitarnya kepada kompetitor Anda. Go digital bukan lagi sebuah pilihan mewah, melainkan fondasi utama untuk bertahan dan berkembang.',
        'Peran Indibiz dalam Mengakselerasi Bisnis Anda',
        'Sebagai pusat edukasi dan penyedia layanan internet bisnis Bandung Barat, Indibiz memahami bahwa setiap bisnis memiliki karakter yang unik. Kami tidak menggunakan pendekatan copy-paste. Kami memahami karakteristik pasar lokal KBB, mulai dari budaya konsumen hingga tren wisata yang sedang berkembang.',
        'Melalui pendekatan yang terukur, Indibiz Internet Bisnis Bandung Barat membantu Anda dalam beberapa aspek kunci:',
        '1. Pembangunan Aset Digital yang Solid Kami membantu Anda membuat website yang tidak hanya terlihat bagus, tetapi juga mobile-friendly, cepat, dan teroptimasi untuk mesin pencari (SEO). Website Anda akan menjadi toko online yang buka 24 jam non-stop.',  
        '2. Strategi Pemasaran Media Sosial yang Menarget Tidak semua pengikut (followers) akan membeli produk Anda. Tim kami membantu merancang strategi konten di Instagram, TikTok, dan Facebook yang menargetkan audiens spesifik di area Bandung Raya dan sekitarnya, mengubah likes menjadi sales.',
        '3. Pendampingan E-Commerce dan MarketplaceIngin produk khas Bandung Barat Anda dibeli oleh orang di luar pulau? Kami membantu Anda mendaftarkan, mengelola, dan mengoptimasi toko Anda di berbagai marketplace dan platform social commerce.',
        'Keuntungan Memilih Partner Lokal Bersama Indibiz',
        'Mengapa harus memilih agensi lokal? Ketika Anda bekerja sama dengan Indibiz Internet Bisnis Bandung Barat, Anda mendapatkan keuntungan berupa:',
        'Pemahaman Pasar Lokal Kami paham demografi dan budaya konsumen di KBB. Kampanye iklan yang kami buat akan terasa lebih "relate" dan tidak kaku dan Kemudahan Komunikasi Anda bisa bertemu langsung dengan tim kami untuk diskusi strategi, revisi, atau sekadar ngopi sambil membedah laporan marketing bulanan. Dan juga Biaya yang Kompetitif Kami menawarkan layanan berkualitas tinggi dengan struktur harga yang bersahabat, khusus disesuaikan untuk skala UMKM dan menengah di wilayah Bandung Barat.',
        'Mulai Transformasi Digital Anda Hari Ini?',
        'Bersama Indibiz Internet Bisnis Bandung Barat, kami tidak hanya menjual jasa, tetapi kami berkomitmen untuk tumbuh bersama kesuksesan Anda. Dari pembuatan website hingga strategi iklan yang menghasilkan return on investment (ROI) terbaik.',
        'Siap membawa bisnis Anda ke level selanjutnya?',
        'Klik tombol di bawah ini untuk terhubung langsung dengan konsultan digital kami dan dapatkan Sesi Konsultasi Gratis untuk membedah potensi digital bisnis Anda!',
      ]
    },
    'strategi-bisnis-internet': {
      title: '5 Strategi Internet Bisnis (KBB) Bersama IndiBiz Untuk Tingkatkan Omzet ',
      date: '05 Juli 2026',
      author: 'Tech Consultant',
      bgImage: '/poster/strategi.jpeg',
      content: [
        'Persaingan bisnis di wilayah Kabupaten Bandung Barat (KBB) semakin ketat. Dari warung kopi di Padalarang hingga glamping mewah di Lembang, semua berlomba-lomba mendapatkan perhatian konsumen. Untuk memenangkan hati pelanggan, Anda membutuhkan lebih dari sekadar produk yang bagus; Anda membutuhkan visibilitas.',
        'Namun, bagaimana cara memulainya? Tim ahli di Indibiz Internet Bisnis Bandung Barat telah merangkum 5 strategi ampuh yang bisa langsung Anda terapkan untuk mendongkrak omzet bisnis Anda',
        '1. Optimasi SEO Lokal (Local SEO) ',
        'Pernahkah Anda mencari "tempat makan enak dekat saya" di Google? Itulah kekuatan Local SEO. Pastikan bisnis Anda muncul ketika seseorang mencari "kafe dekat Lembang", "jasa servis motor Padalarang", atau "oleh-oleh Ngamprah". Indibiz Internet Bisnis Bandung Barat membantu Anda mendaftarkan dan mengoptimasi Google Business Profile (GBP) agar bisnis Anda muncul di Google Maps dengan ulasan yang meyakinkan, foto yang menarik, dan informasi kontak yang akurat.',
        '2. Konten Marketing yang Bercerita (Storytelling)',
        'Konsumen modern tidak suka dijejali iklan hard-selling. Mereka menyukai cerita. Angkat kearifan lokal, proses pembuatan produk, atau cerita di balik merek Anda menjadi konten video pendek di TikTok dan Instagram Reels.',
        'Misalnya, jika Anda menjual kopi khas Bandung Barat, buatlah video proses roasting biji kopi dari kebun lokal. Konten seperti ini jauh lebih mudah viral dan membangun loyalitas pelanggan.',
        '3. Memanfaatkan Marketplace dan Social Commerce',
        'Jangan hanya mengandalkan satu saluran penjualan. Integrasikan toko online Anda dengan WhatsApp Business, Instagram Shopping, dan TikTok Shop. Ini akan mempermudah konsumen untuk langsung melakukan transaksi tanpa harus berpindah aplikasi. Tim Indibiz dapat membantu Anda mengatur katalog produk, membalas chat dengan template yang persuasif, hingga mengelola pesanan secara otomatis.',
        '4. Kolaborasi dengan Influencer Lokal',
        'Bekerja sama dengan micro-influencer asal Bandung Barat (yang memiliki pengikut 5.000 - 50.000) seringkali memberikan hasil yang lebih autentik dan engaging dibandingkan influencer nasional yang mahal. Mereka memiliki audiens yang sangat relevan dengan pasar lokal Anda',
        '5. Analisis Data Pelanggan',
        'Berhenti menebak-nebak! Gunakan tools analitik untuk mengetahui siapa target pasar Anda, jam berapa mereka paling aktif berbelanja, dan produk apa yang paling mereka sukai. Bingung cara membaca data atau menggunakan tools-nya? Konsultasikan langsung dengan tim Indibiz Internet Bisnis Bandung Barat untuk mendapatkan roadmap digital marketing yang sesuai dengan budget dan tujuan bisnis Anda.',
        'Kesimpulan',
        'Menerapkan kelima strategi di atas secara konsisten akan membawa bisnis Anda selangkah lebih maju dari kompetitor. Ingat, di era digital, siapa yang cepat beradaptasi, dialah yang menang.',
        'Ingin strategi yang lebih detail dan disesuaikan dengan bisnis Anda? Hubungi Indibiz Internet Bisnis Bandung Barat sekarang juga',
       
      ]
    },
    'digitalisasi-umkm-wisata': {
      title: 'Digitalisasi Wisata dan Kuliner Bandung Barat: Peran Penting Indibiz',
      date: '04 Juli 2026',
      author: 'Cyber Security Analyst',
      bgImage: '/poster/digital.jpeg',
      content: [
        'Kabupaten Bandung Barat adalah surga bagi wisatawan. Dari kawasan wisata sejuk Lembang, petualangan di Ciwidey, hingga kawasan kuliner yang menjamur di sekitar Setu Cileunca dan Padalarang. Potensi alam dan kulinernya luar biasa',
        'Namun, ironisnya, banyak pemilik homestay, camping ground, villa, dan UMKM kuliner yang masih mengandalkan promosi dari mulut ke mulut atau menunggu pengunjung yang "kebetulan lewat". Akibatnya, di hari biasa (weekdays), bisnis mereka sepi pengunjung.',
        'Tantangan Digitalisasi Sektor Pariwisata KBB',
        'Banyak pelaku wisata yang memiliki fasilitas luar biasa—pemandangan indah, makanan lezat, pelayanan ramah—namun kalah saing karena:',
        '•	Tidak muncul di halaman pertama Google saat dicari',
        '•	Tidak memiliki sistem booking online yang terintegrasi (calon tamu malas menelepon atau chat manual).',
        '•	Foto-foto di media sosial kurang menarik dan tidak estetik.',
        '•	Tidak ada strategi iklan yang menargetkan warga Jakarta atau kota besar lainnya yang sedang merencanakan liburan.',
        'Solusi Komprehensif dari Indibiz Internet Bisnis Bandung Barat',
        'Indibiz memahami bahwa menjual "pengalaman" (seperti wisata dan kuliner) berbeda dengan menjual barang fisik. Kami menyediakan layanan khusus untuk sektor pariwisata dan kreatif dengan pendekatan yang unik:',
        '1. Sistem Booking & Pembayaran Terintegrasi',
        'Kami membantu Anda membuat website dengan sistem booking otomatis. Calon tamu bisa mengecek ketersediaan kamar, memilih tanggal, dan langsung melakukan pembayaran. Ini meningkatkan kepercayaan dan memudahkan Anda mengelola inventaris.',
        '2. Optimasi Visual untuk Platform Travel',
        'Foto adalah segalanya di bisnis wisata. Tim kami membantu mengoptimasi foto-foto properti Anda, menulis copywriting yang memikat untuk platform seperti Traveloka, Tiket.com, atau Airbnb, serta memastikan rating ulasan Anda selalu positif.',
        '3. Kampanye Iklan Tertarget (Geo-Targeting)',
        'Kami menjalankan iklan Facebook & Instagram Ads yang secara khusus menargetkan warga Jakarta, Bogor, Depok, Tangerang, dan Bekasi (Jabodetabek) yang sedang mencari destinasi liburan akhir pekan. Iklan Anda akan muncul tepat saat mereka merencanakan liburan!',
        '4. Manajemen Reputasi Online',
        'Kami membantu Anda membalas ulasan di Google Maps dan TripAdvisor secara profesional, mengubah keluhan menjadi peluang perbaikan, dan membangun citra positif di mata calon wisatawan.',
        'Wujudkan Bisnis Wisata yang Full Booked',
        'Dengan pendekatan internet bisnis Bandung Barat yang tepat dari Indibiz, bisnis pariwisata dan kuliner Anda siap menyambut lonjakan wisatawan, baik domestik maupun mancanegara. Tidak ada lagi hari-hari sepi di weekdays.',
        'Siap membuat villa atau kafe Anda selalu penuh? Mari ngopi bareng dan diskusikan strategi digitalnya bersama Indibiz Internet Bisnis Bandung Barat!',
      ]
    },
    'digital-marketing-bandung-barat': {
      title: 'Jasa Digital Marketing & Internet Bisnis Bandung Barat Terpercaya Indibiz',
      date: '04 Juli 2026',
      author: 'Cyber Security Analyst',
      bgImage: '/poster/marketing2.jpeg',
      content: [
        'Indibiz Internet Bisnis Bandung Barat adalah jawaban untuk kebutuhan digitalisasi perusahaan, toko retail, hingga UMKM di wilayah KBB dan sekitarnya. Layanan Unggulan Indibiz untuk Bisnis Anda Sebagai pusat internet bisnis Bandung Barat, kami menawarkan layanan end-to-end yang dirancang untuk memenuhi setiap tahap perjalanan digital bisnis Anda:',
        'Sebagai pusat internet bisnis Bandung Barat, kami menawarkan layanan end-to-end yang dirancang untuk memenuhi setiap tahap perjalanan digital bisnis Anda:',
        '1. Website Development (Pembuatan Website)',
        'Kami mendesain website yang profesional, cepat, aman, dan mobile-friendly. Baik itu company profile, landing page untuk jualan, hingga toko online dengan sistem pembayaran yang kompleks, kami siap mewujudkannya.',
        '2. Search Engine Optimization (SEO)',
        'Tidak ada gunanya punya website bagus jika tidak ada yang mengunjungi. Tim SEO kami akan memastikan website Anda "nangkring" di halaman 1 Google untuk kata kunci yang relevan dengan bisnis Anda, mendatangkan trafik organik secara jangka panjang.',
        '3. Social Media Management & Ads',
        'Kami mengelola akun Instagram, TikTok, dan Facebook Anda secara rutin. Tidak hanya membuat konten, kami juga menjalankan iklan berbayar (Ads) yang terukur untuk menghasilkan leads dan penjualan',
        '4. Internet Business Coaching & Training',
        'Ingin tim internal Anda yang mengelola digital marketing? Kami menyediakan pelatihan privat dan coaching intensif untuk membekali karyawan Anda dengan skill digital marketing terkini. ',
        ' Mengapa Memilih Agensi Lokal dari Indibiz?',
        'Dibandingkan memilih agensi besar dari luar kota, bekerja sama dengan Indibiz Internet Bisnis Bandung Barat memberikan Anda sejumlah keuntungan strategis:',
        '•	Pemahaman Mendalam tentang Pasar Lokal: Kami tahu persis apa yang disukai konsumen di Lembang, Ngamprah, atau Padalarang. Kampanye iklan yang kami buat akan terasa lebih "membumi" dan tidak kaku.',
        '•	Kemudahan Komunikasi & Koordinasi: Anda bisa bertemu langsung dengan tim kami untuk diskusi strategi, revisi, atau sekadar review laporan bulanan. Jarak bukan lagi masalah.',
        '•	Biaya yang Kompetitif & Transparan: Kami menawarkan layanan berkualitas tinggi dengan struktur harga yang bersahabat, khusus disesuaikan untuk skala UMKM dan bisnis menengah di wilayah Bandung Barat. Tidak ada biaya tersembunyi.',
        'Konsultasi Gratis Bersama Indibiz',
        'sekadar meminta saran. Kami percaya, komunikasi yang baik adalah awal dari kolaborasi yang sukses. Jadwalkan sesi konsultasi gratis bersama tim ahli Indibiz Internet Bisnis Bandung Barat sekarang juga. ',
        '',
        '',
        '',
        '',
      ]
    },
      'kisah-sukses-bisnis-online-kbb-indibiz': {
      title: 'Membangun Bisnis Online di KBB Kisah Sukses Bersama Indibiz',
      date: '04 Juli 2026',
      author: 'Cyber Security Analyst',
      bgImage: '/poster/sukses.jpeg',
      content: [
        'Banyak yang beranggapan bahwa memulai bisnis online itu rumit, membutuhkan modal besar, dan hanya cocok untuk anak muda yang "melek teknologi". Faktanya? Dengan bimbingan yang tepat, internet bisa menjadi mesin pencetak uang yang luar biasa bagi siapa saja, di usia berapapun. Inilah yang dialami oleh puluhan pelaku usaha yang telah bergabung dan tumbuh bersama Indibiz Internet Bisnis Bandung Barat. ',
        'Dari Offline Menuju Omzet Puluhan Juta: Kisah Pak Arief',
        'Pak Arief, seorang pengrajin suvenir dan oleh-oleh khas Sunda di kawasan Ngamprah, awalnya hanya menjual produknya secara offline. Pelanggannya terbatas pada wisatawan yang kebetulan mampir ke tokonya. Ketika pandemi melanda dan wisatawan sepi, omzetnya anjlok drastis.',
        '"Awalnya saya takut, saya sudah tua, mana bisa jualan online. Tapi setelah ikut program pendampingan di Indibiz, saya diajari pelan-pelan. Mulai dari foto produk pakai HP, bikin akun Instagram, sampai daftar marketplace," cerita Pak Arief.',
        'Setelah mengikuti program internet bisnis Bandung Barat di Indibiz selama 3 bulan, Pak Arief berhasil membangun toko online-nya. Ia mengoptimasi kata kunci lokal, rutin membuat konten video proses pembuatan suvenir, dan kini... omzetnya naik 300% dan rutin menerima pesanan dari luar pulau Jawa!',
        'Apa Kata Mereka tentang Indibiz?',
        '"Bekerja sama dengan Indibiz membuka mata saya tentang potensi internet bisnis Bandung Barat. Tim mereka sangat sabar membimbing kami yang gaptek hingga bisa mandiri mengelola iklan digital. Kafe saya di Lembang sekarang selalu penuh di akhir pekan!" — Ibu Sari, Pemilik Kafe & Resto di Lembang',
        '"Saya butuh website untuk jasa servis mobil saya di Padalarang. Indibiz buatkan website yang cepat dan SEO-nya jalan. Sekarang kalau orang cari "bengkel mobil Padalarang", toko saya muncul di halaman 1 Google. Orderan naik terus!" — Bapak Budi, Owner Bengkel Mobil',
        '"Yang paling saya suka dari Indibiz adalah mereka tidak cuma jualan jasa, tapi benar-benar jadi partner. Setiap bulan kita duduk bareng, bahas laporan, dan cari strategi baru. Recommended banget!" — Mbak Rina, Owner Fashion Brand Lokal',
        'Bergabunglah dengan Komunitas Digital Indibiz ',
        'Kesuksesan klien kami adalah prioritas dan kebanggaan kami. Indibiz bukan sekadar penyedia jasa digital marketing, melainkan mitra tumbuh bagi bisnis Anda. Kami percaya, ketika bisnis Anda sukses, kami pun ikut sukses.',
        'Mari bergabung dengan komunitas internet bisnis Bandung Barat terbesar bersama Indibiz. Tidak peduli apakah Anda baru memulai atau sudah memiliki bisnis yang mapan, kami memiliki solusi yang tepat untuk Anda.',
        'Raih kesuksesan digital Anda bersama kami!',
        '',
        '',
      ]
    },
    'solusi-keamanan-aset-bisnis-kbb-cctv': {
      title: 'Solusi Keamanan 24/7 di KBB Keamanan Bisnis Bersama CCTV Security Bandung Barat',
      date: '04 Juli 2026',
      author: 'Cyber Security Analyst',
      bgImage: '/poster/cctvbisnis.jpeg',
      content: [
        'Banyak pemilik toko dan pelaku usaha beranggapan bahwa memasang sistem keamanan tingkat tinggi itu mahal, rumit, dan memerlukan ruang monitor khusus yang merepotkan. Faktanya? Dengan integrasi teknologi yang tepat, sistem pemantauan modern kini bisa diakses langsung melalui ponsel pintar dari mana saja dan kapan saja. ',
        'Inilah yang dirasakan oleh puluhan pemilik usaha yang kini bisa tidur nyenyak setelah mempercayakan proteksi aset mereka kepada layanan CCTV Security Bandung Barat',
        'Dari Rasa Cemas Menjadi Tenang: Kisah Toko Sembako Ko Aliong Ko Aliong, seorang pemilik grosir sembako besar di kawasan Padalarang, awalnya sering merasa cemas saat harus meninggalkan tokonya di malam hari. Lokasi grosirnya yang berada di pinggir jalur utama lintas provinsi membuatnya rawan terhadap tindakan kriminalitas di jam-jam rawan. CCTV analog lama miliknya seringkali buram dan rekamannya mudah rusak jika mati listrik.',
        '"Dulu saya sering bolak-balik terbangun malam hari cuma buat cek CCTV rumah yang mengarah ke toko sebelah, tapi gambarnya pecah kalau gelap. Setelah beralih ke layanan smart cloud di Indibiz, hidup saya berubah. Gambarnya jernih, ada fitur night vision, dan rekamannya langsung tersimpan aman di cloud," cerita Ko Aliong.',
        'Setelah mengimplementasikan sistem CCTV Security Bandung Barat terintegrasi, Ko Aliong kini bisa memantau aktivitas bongkar muat barang dari luar kota secara real-time. Bahkan, fitur deteksi gerakan (motion detection) otomatis mengirimkan notifikasi ke HP-nya jika ada aktivitas mencurigakan di luar jam operasional. Hasilnya? Risiko kehilangan barang nihil dan operasional toko berjalan 100% kondusif.',
        'Apa Kata Mereka tentang CCTV Security Indibiz?',
        'Langkah preventif Ko Aliong telah diikuti oleh banyak pengusaha lain di wilayah Kabupaten Bandung Barat. Berikut adalah penuturan langsung dari para mitra kami:',
        '"Memasang CCTV Security Bandung Barat dari Indibiz adalah keputusan investasi terbaik untuk bisnis glamping saya di Lembang. Manajemen area yang luas jadi sangat mudah karena tim teknisi mereka menata titik kamera dengan sangat strategis tanpa blind spot. Area parkir dan kasir terpantau aman!" — Ibu Diana, Pengelola Wisata Glamping Lembang',
        '"Saya mengelola gudang material di Batujajar dan rawan sekali kehilangan bahan baku. Indibiz memasang kamera IP luar ruangan yang tahan cuaca ekstrem dan kualitas gambarnya tajam. Sekarang, pengawasan area luar gudang di malam hari jauh lebih ketat dan sistematis." — Bapak Hendra, Pemilik Gudang Material',
        '"Pelayanan purna jual dari Indibiz jempolan banget. Pernah ada kendala koneksi setelah tersambar petir di wilayah pariwisata kami, tim teknisinya langsung datang hari itu juga untuk kalibrasi ulang tanpa biaya tambahan. Benar-benar partner proteksi bisnis yang bisa diandalkan!" — Mbak Anita, Operational Manager Resort',
        'Amankan Aset Bisnis Anda Sekarang!',
        'Mari bergabung dengan jaringan ekosistem CCTV Security Bandung Barat bersama Indibiz. Mulai dari toko kelontong, kafe, hingga kompleks gudang manufaktur berskala besar, kami siap menghadirkan solusi keamanan yang presisi dan sesuai dengan anggaran Anda.',
        'Lindungi aset berharga Anda, bangun bisnis dengan rasa aman bersama kami!',
        '',
        '',
      ]
    }
  };

  // Fallback aman jika ID tidak sengaja tidak kecocokan
  const artikel = dataArtikel[id] || dataArtikel['panduan-wifi-kantor'];

  return (
    <div className="w-full min-h-screen pt-32 pb-20 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-6">
        
        <Link 
          href="/artikel" 
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-100 transition-all mb-8 group"
        >
         Kembali ke Artikel
        </Link>

        <div className="relative w-full h-[250px] md:h-[400px] rounded-[32px] overflow-hidden shadow-lg mb-10">
          <img src={artikel.bgImage} alt={artikel.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white">
            <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
              {artikel.title}
            </h1>
            <div className="flex items-center gap-4 text-xs md:text-sm text-slate-200 mt-4 font-semibold">
              <span>{artikel.date}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span>Oleh: {artikel.author}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-slate-100">
          <article className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            {artikel.content.map((paragraf, index) => (
              <p key={index}>{paragraf}</p>
            ))}
          </article>
        </div>
      
      <div className="mt-2 pt-3 border-t border-slate-100">
        <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 rounded-[32px] p-6 md:p-10 border border-emerald-500/20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Efek Kilau Background */}
          <div className="absolute -right-20 -top-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="text-center md:text-left max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 text-xs font-bold px-3.5 py-1.5 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              Kuota Terbatas Pekan Ini
            </div>
            <h4 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
              LANGSUNG KLIK <span className="text-emerald-600 underline decoration-wavy decoration-emerald-400">ICON WHATSAPP DI SAMPING INI</span>?
            </h4>
            <p className="text-slate-500 text-sm md:text-base mt-2 font-medium">
              Jangan Lupa Klaim voucher Menarik  
            </p>
          </div>

          <div className="w-full md:w-auto relative z-10">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Indibiz%20Bandung%20Barat,%20saya%20baru%20saja%20membaca%20artikel%20CCTV%20Security.%20Saya%20tertarik%20dengan%20Promo%20Voucher%20Konsultasi%20Denah%20Kamera%20Gratis-nya."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold px-8 py-4 rounded-full shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-500/40 active:scale-95 group text-center"
            >
              {/* Icon WhatsApp */}
              <svg 
                className="w-20 h-10 fill-current transition-transform duration-300 group-hover:rotate-12" 
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.411 0 11.981 0c3.186.001 6.182 1.242 8.432 3.496 2.25 2.253 3.488 5.249 3.487 8.425-.004 6.557-5.355 11.907-11.922 11.907-2.01-.002-3.998-.511-5.762-1.483L0 24zm6.59-4.846c1.6.95 3.52 1.449 5.333 1.451 5.429 0 9.849-4.394 9.853-9.782.002-2.61-1.013-5.064-2.859-6.911C17.07 1.964 14.611 1.05 12.01 1.05c-5.434 0-9.856 4.397-9.86 9.786-.001 1.87.492 3.7 1.426 5.32L2.57 21.53l5.312-1.392c.001-.001.001-.001.001-.001zM17.522 14.34c-.304-.153-1.8-.886-2.077-.988-.278-.102-.48-.153-.682.153-.201.304-.783.988-.959 1.192-.177.204-.353.23-.657.077-1.383-.693-2.28-1.219-3.184-2.774-.239-.41-.239-.775-.087-.928.137-.137.304-.357.456-.536.153-.179.204-.305.305-.51.101-.204.051-.382-.025-.536-.076-.153-.682-1.644-.935-2.255-.246-.594-.497-.514-.682-.523-.176-.008-.38-.01-.582-.01-.203 0-.531.076-.81.381-.278.305-1.062 1.039-1.062 2.535 0 1.497 1.088 2.943 1.24 3.147.152.204 2.142 3.272 5.19 4.588.725.312 1.29.5 1.73.64.729.23 1.391.197 1.914.12.584-.087 1.8-.737 2.053-1.451.253-.713.253-1.324.177-1.451-.075-.128-.278-.204-.582-.356z"/>
              </svg>
              <span>Ambil Voucher Konsultasi Gratis</span>
            </a>
          </div>
        </div>
      </div>
    </div>

      
    </div>
  );
}