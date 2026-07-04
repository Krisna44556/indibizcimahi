import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 1. Import Navbar dan Footer yang sudah kamu buat
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IndiBiz Bandung Barat",
  description: "Landing page built with Next.js, TS, and GSAP",
};

// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        {/* 2. Taruh Navbar di paling atas */}
        <Navbar />
        
        {/* 3. children ini adalah isi dari app/page.tsx kamu */}
        {children}
        
        {/* 4. Taruh Footer di paling bawah */}
        <Footer />
      </body>
    </html>
  );

  
}