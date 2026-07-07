'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItem {
  name: string;
  id: string;
  href: string;
}

export default function Navbar() {

  const pathname = usePathname(); // Ambil jalur URL saat ini (misal: '/' atau '/produk-digital/managed-wifi')
  const isHomePage = pathname === '/'; // Cek apakah sedang di beranda atau bukan
  const [isOpen, setIsOpen] = useState(false);


  // State untuk menyimpan ID seksi yang sedang aktif dilihat user
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

 // 1. Efek untuk mengubah latar belakang Navbar saat di-scroll
  useEffect(() => {
    // Jika BUKAN di halaman utama, paksa navbar selalu berwarna (tidak boleh transparan)
    if (!isHomePage) {
      setIsScrolled(true);
      setActiveSection('artikel'); // Kunci tombol aktif pada menu "Produk Digital"
      return;
    }

    // Jika KEMBALI ke halaman utama, jalankan deteksi scroll normal
    setIsScrolled(window.scrollY > 20);
    setActiveSection('home');

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, pathname]);
 
  // 2. Efek Intersection Observer (Hanya berjalan aktif jika berada di Halaman Utama)
  useEffect(() => {
    if (!isHomePage) return;

    const sections = ['home', 'paket', 'produk-digital', 'area-layanan', 'artikel'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isHomePage]);

const menuItems = [
  { name: 'Home', id: 'home', href: '/#' },
  { name: 'Paket', id: 'paket', href: '#paket' },
  { name: 'Produk Digital', id: 'produk-digital', href: '#produk-digital' },
  { name: 'Area Layanan', id: 'area-layanan', href: '#area-layanan' },
  { name: 'Artikel', id: 'artikel', href: '/#artikel' },
];


const getNavLinkClass = (id: string) => {
    const baseClass = "text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 ";
    
    if (activeSection === id) {
      // Jika seksi aktif, berikan gaya pil aktif (biru)
      return baseClass + "bg-blue-600/10 text-blue-500 shadow-sm border border-blue-500/20 backdrop-blur-sm";
    }
    
    // Jika tidak aktif, sesuaikan warna teks berdasarkan status scroll Navbar
    return isScrolled
      ? baseClass + "text-slate-600 hover:text-blue-600 border border-transparent" // Warna saat navbar solid putih
      : baseClass + "text-slate-200 hover:text-white border border-transparent";   // Warna saat navbar transparan di atas Hero
  };

  return (
  <header 
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100/80 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
    <nav className={`fixed top-0 left-0 right-0 h-20 z-50 px-6 md:px-24 flex justify-between items-center transition-all duration-500 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm" 
        : "bg-transparent border-b border-white/5"
      }`}>

     {/* 🗺️ AREA LOGO (KIRI) - Diberikan w-auto / flex-shrink-0 agar ukurannya solid */}
        <Link href="/" className="flex items-center gap-3 md:gap-4 shrink-0">
          

          {/* Pembatas Vertikal Desktop */}
          

          {/* Logo Partner (Hanya muncul di desktop layar lebar) */}
          <div className="hidden lg:flex items-center gap-10 shrink-10">
            <img src="/poster/telkom.png" alt="Telkom Indonesia" className="h-16 w-auto object-contain" />
            <div className="hidden lg:block h-10 w-[1px] bg-slate-200"></div>
            <img src="/poster/image1.png" alt="Indibiz" className="h-20 w-auto object-contain" />
          </div>
        </Link>
        
      {/* 2. Menu Navigasi dengan Deteksi Otomatis */}
      <div className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-500 ${
        isScrolled ? "bg-slate-50 border border-slate-100" : "bg-white/5 border border-white/10 backdrop-blur-sm"
      }`}>
        <Link href="/#home" className={getNavLinkClass('home')}>Home</Link>
        <Link href="/#paket" className={getNavLinkClass('paket')}>Paket</Link>
        <Link href="/#produk-digital" className={getNavLinkClass('produk-digital')}>Produk Digital</Link>
        <Link href="/#area-layanan" className={getNavLinkClass('area-layanan')}>Area Layanan</Link>
        <Link href="/artikel" className={getNavLinkClass('artikel')}>Artikel</Link>
      </div>

       <div className="flex items-center gap-1">
       <img 
          src="/poster/indibizlogo2-removebg-preview.png" 
          alt="LogoIndibiz" 
          className="h-9 w-auto object-contain " 
        />
        <span className="font-extrabold text-[#1e3fae] text-lg tracking-tight">Indibiz</span>
      </div>

      
      {/* 3. Tombol Aksi */}
     <div className="hidden md:block">
          <Link 
            href="https://wa.me/628xxxxxx" 
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-md shadow-blue-600/10 transition-all"
          >
            Chat WhatsApp
          </Link>
        </div>
      
      {/* 🛠️ HAMBURGER BUTTON (Hanya muncul di Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} // Toggle state true/false
          type="button"
          className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            // Ikon Silang (X) saat menu terbuka
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Ikon Garis Tiga (Hamburger) saat menu tertutup
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* 🛠️ MOBILE MENU PANEL (Animasi Dropdown Slide-Down) */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 transition-all duration-300 ease-in-out shadow-lg overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {menuItems.map((link, i) => (
            <Link 
              key={i} 
              href={link.href}
              onClick={() => setIsOpen(false)} // Otomatis tutup menu kalau link diklik
              className="text-base font-bold text-slate-700 hover:text-blue-600 transition-colors block"
            >
              {link.name}
            </Link>
          ))}
          
          <hr className="border-slate-100 my-1" />
          
          {/* Tombol WA versi Mobile */}
          <Link 
            href="https://wa.me/628xxxxxx"
            target="_blank"
            onClick={() => setIsOpen(false)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-center py-3 rounded-full shadow-md block transition-all"
          >
            Chat WhatsApp
          </Link>
        </div>
      </div>



    </nav>
    </header>
  );
}