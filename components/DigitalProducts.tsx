'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

interface ProductItem {
    id: string;
    title: string;
    description: string;
    icon: string; // Menggunakan emoji atau svg path nantinya
    bgClass: string;
    gridClass: string;
}

const productsData: ProductItem[] = [
    {
        id: 'managed-wifi',
        title: 'WIFI Managed Service',
        description: 'Jaringan WiFi profesional yang terkelola penuh untuk kebutuhan kantor dan bisnis skala besar.',
        icon: '📶',
        bgClass: 'bg-[#1e3fae] text-white hover:text-white', // Kartu Utama (Hero Bento)
        gridClass: 'lg:col-span-2 lg:row-span-2',
    },
    {
        id: 'cctv-security',
        title: 'CCTV',
        description: 'Sistem keamanan pantau pintar 24/7 dengan integrasi penyimpanan aman.',
        icon: '📷',
        bgClass: 'bg-white [#1e3fae] border border-slate-100',
        gridClass: 'lg:col-span-1',
    },
    {
        id: 'cloud-storage',
        title: 'IndiBiz Oca',
        description: 'Penyimpanan data bisnis lokal yang aman, cepat, dan mudah diakses tim.',
        icon: '☁️',
        bgClass: 'bg-white [#1e3fae] border border-slate-100',
        gridClass: 'lg:col-span-1',
    },
    {
        id: 'pijar',
        title: 'IndiBiz Pijar',
        description: 'Aplikasi kasir & inventory modern untuk kelancaran transaksi harian usaha Anda.',
        icon: '🛒',
        bgClass: 'bg-white [#1e3fae] border border-slate-100',
        gridClass: 'lg:col-span-1',
    },
    {
        id: 'netmonk',
        title: 'IndiBiz NetMonk',
        description: 'Pembuatan profil perusahaan digital profesional untuk meningkatkan kredibilitas brand.',
        icon: '🌐',
        bgClass: 'bg-white [#1e3fae] border border-slate-100',
        gridClass: 'lg:col-span-1',
    },
];

export default function DigitalProducts() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="produk-digital" className="w-full py-28 bg-white px-6 md:px-24 border-t border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    } text-center max-w-2xl mx-auto mb-16`}>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
                        Digital Products
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold [#1e3fae] tracking-tight mt-3">
                        Solusi Digital untuk Bisnis Anda
                    </h2>
                    <p className="text-slate-500 text-sm md:text-base mt-3 leading-relaxed">
                        Lengkapi kebutuhan bisnis Anda dengan produk digital terbaik dari Indibiz.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 auto-rows-[200px] lg:auto-rows-[180px]">
                    {productsData.map((product, index) => (
                        <Link
                            href={`/produk-digital/${product.id}`} // Mengarah ke dynamic page baru
                            key={product.id}
                            style={{
                                transitionDelay: `${index * 100}ms`,
                                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                            }}
                            className={`group ${product.gridClass} ${product.bgClass} rounded-[24px] p-8 flex flex-col justify-between transform transition-all ${isVisible
                                ? 'duration-[1000ms] opacity-100 translate-y-0 scale-100'
                                : 'duration-500 opacity-0 translate-y-16 scale-95'
                                } hover:shadow-xl hover:-translate-y-1.5 cursor-pointer`}
                        >
                            {/* Bagian Atas: Ikon */}
                            <div className="flex justify-between items-start">
                                <div className={`text-3xl p-3 rounded-2xl transition-transform group-hover:scale-110 duration-300 ${product.id === 'managed-wifi' ? 'bg-blue-500/20' : 'bg-slate-50 border border-slate-100/50'
                                    }`}>
                                    {product.icon}
                                </div>

                                {/* Tanda panah indikator bahwa kartu bisa di-klik */}
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300 ${product.id === 'managed-wifi'


                                    }`}>

                                </div>
                            </div>

                            {/* Bagian Bawah: Teks Informasi */}
                            <div>
                                <h3 className={`text-lg md:text-xl font-bold tracking-tight ${product.id === 'managed-wifi' ? 'text-white' : '[#1e3fae] group-hover:text-blue-600 transition-colors'
                                    }`}>
                                    {product.title}
                                </h3>

                                {/* Deskripsi pendek muncul tipis, pada kartu utama terlihat lebih lengkap */}
                                <p className={`text-xs mt-2 leading-relaxed line-clamp-2 ${product.id === 'managed-wifi' ? 'text-blue-100' : 'text-slate-400 group-hover:text-slate-500 transition-colors'
                                    }`}>
                                    {product.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}