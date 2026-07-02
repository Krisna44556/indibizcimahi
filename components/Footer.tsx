export default function Footer() {
  return (
    <footer className="bg-[#1e3fae] border-t border-white/5 pt-8 pb-2 px-6 md:px-24 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-bold mb-4">PRODUCT<span className="text-emerald-500">.</span></h3>
          <ul className="text-slate-400 space-y-2 text-sm">
            <li><a href="/#paket" className="hover:text-white">Internet</a></li>
            <li><a href="/@home" className="hover:text-white">Bisnis</a></li>
            <li><a href="/#produk-digital" className="hover:text-white">Produk Digital</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="text-slate-400 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Our Clients</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Support</h4>
          <ul className="text-slate-400 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all cursor-pointer">IG</div>
            <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all cursor-pointer">TW</div>
            <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all cursor-pointer">LI</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-sm text-slate-500">
        © 2024 COMPRO Digital Agency. All rights reserved.
      </div>
    </footer>
  );
}