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
  const [isMounted, setMounted] = useState(false);


  // State untuk menyimpan ID seksi yang sedang aktif dilihat user
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Jika BUKAN di halaman utama, paksa navbar selalu berwarna (tidak boleh transparan)
    if (!isHomePage) {
      setIsScrolled(true);  
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

 useEffect(() => {
    if (!isHomePage) return;

    const sections = ['home', 'paket','visimisi', 'arealayanan', 'artikel'];
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

  if (!isMounted) return null;

  const menuItems: MenuItem[] = [
    { name: 'Home', id: 'home', href: '/' },
    { name: 'Paket', id: 'paket', href: '/#paket' },
    { name: 'Visi Misi', id: 'visimisi', href: '/#visimisi' },
    { name: 'Area Layanan', id: 'arealayanan', href: '/#arealayanan' },
    { name: 'Artikel', id: 'artikel', href: '/#artikel' },
  ];

  return (
    // 2. KELAS NAVIGASI DINAMIS BERDASARKAN STATE `isScrolled`
    <nav className={`w-full fixed top-0 left-0 right-0 z-50 px-6 h-20 transition-all duration-300 flex items-center ${
    isScrolled 
      ? 'bg-white/50 backdrop-blur-md shadow-sm' 
      : 'bg-transparent'
  }`}>
    <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
      
      {/* ================= SISI KIRI: LOGO ================= */}
      {/* Gunakan h-10 atau h-12 sebagai batas maksimal area logo agar serasi */}
      <div className="flex items-center gap-4 h-12">
        <div className="flex items-center gap-3 h-full">

          {/* TAMPILAN MOBILE: HANYA SATU LOGO INDIBIZ */}
          <div className="flex md:hidden items-center gap-2">
            <Link href="/#home" className="flex items-center gap-2">
              <img 
                src="/poster/indibizlogo2-removebg-preview.png" 
                alt="Logo Indibiz" 
                className="h-8 w-auto object-contain" 
              />
              <span className={`font-black text-xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-[#1e3fae]' : 'text-white'}`}>
                Indibiz
              </span>
            </Link>
          </div>
          
        {/* TAMPILAN DESKTOP: LOGO LENGKAP (Telkom | Danantara | Indibiz) */}
          <div className="hidden md:flex items-center gap-3 h-full">
            {/* Logo Telkom */}
            <div>
              <Link href="/#home" className="block h-full">
                <img 
                  src="/poster/image1.png" 
                  alt="Telkom Indonesia" 
                  className="h-19 max-h-19 w-auto object-contain block" 
                />
              </Link>
            </div>
            
            <div className={`h-4 w-[1px] transition-colors duration-300 ${isScrolled ? 'bg-slate-300' : 'bg-white/30'}`}></div>
            
            {/* Logo Danantara */}
            <div>
              <Link href="/#home" className="block h-full">
                <img 
                  src="/poster/images2.png" 
                  alt="Danantara" 
                  className="h-21 max-h-21 w-auto object-contain block" 
                />
              </Link>
            </div>

            <div className={`h-4 w-[1px] transition-colors duration-300 ${isScrolled ? 'bg-slate-300' : 'bg-white/30'}`}></div>
            
            {/* Logo Indibiz */}
            <div className="flex items-center gap-1 font-black text-2xl tracking-tight transition-colors duration-300">
              <img 
                src="/poster/indibizlogo2-removebg-preview.png" 
                alt="LogoIndibiz" 
                className="h-8 w-auto object-contain" 
              />
              <Link href="/" className={isScrolled ? 'text-[#1e3fae]' : 'text-white'}>Indibiz</Link>
            </div>
          </div>
        </div>

      </div>

        {/* ================= SISI KANAN: MENU NAVIGASI DAN BUTTON ================= */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2 text-sm font-semibold">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`transition-all duration-200 py-1.5 px-3 rounded-full ${
                    isActive 
                      ? isScrolled 
                        ? 'bg-[#00a8ec]/10 text-[#00a8ec]' 
                        : 'bg-white/20 text-white shadow-sm'
                      : isScrolled 
                        ? 'text-slate-600 hover:text-[#00a8ec]' 
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Tombol Chat WhatsApp */}
          <a 
            href="https://wa.me/6282338263646?text=Halo%20Indibiz,%20saya%20mau%20berlangganan%20paket%20${paket.mbps} Mbps" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md transition-all transform hover:scale-[1.02]"
          >
            Chat WhatsApp
          </a>
        </div>

        {/* TOMBOL MOBILE MENU */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`md:hidden p-2 focus:outline-none transition-colors ${isScrolled ? 'text-slate-800' : 'text-white'}`}
        >
          {isOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 w-full bg-white shadow-xl border-b border-slate-100 flex flex-col z-50 animate-in fade-in slide-in-from-top-5 duration-200">
        <div className="flex flex-col p-6 space-y-4 max-w-7xl mx-auto w-full">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
             return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-semibold text-base py-2.5 px-4 rounded-xl transition-all ${
                    isActive
                      ? 'bg-[#00a8ec]/10 text-[#00a8ec]'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.name}
                </Link>
              );
          })}
          <a href="https://wa.me/628xxxxxxxx" className="bg-[#00a8ec] text-white text-center text-sm font-bold py-2.5 rounded-xl block">
            Chat WhatsApp
          </a>
        </div>
      </div>
      )}
    </nav>
  );
}