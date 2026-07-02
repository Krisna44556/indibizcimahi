'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-white px-6 md:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Info Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's start a <br/> <span className="text-emerald-500">conversation.</span></h2>
          <p className="text-slate-400 text-lg mb-10 max-w-md">Punya proyek impian? Ceritakan pada kami. Tim ahli kami siap membantu mewujudkannya dengan teknologi terbaru.</p>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 uppercase font-mono">Email Us</p>
              <p className="text-xl">hello@company.com</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 uppercase font-mono">Visit Us</p>
              <p className="text-xl">Sudirman Center, Jakarta, Indonesia</p>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-slate-900 p-8 rounded-3xl border border-white/5">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="bg-slate-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none w-full" />
              <input type="text" placeholder="Last Name" className="bg-slate-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none w-full" />
            </div>
            <input type="email" placeholder="Email Address" className="bg-slate-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none w-full" />
            <textarea placeholder="Tell us about your project" rows={4} className="bg-slate-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none w-full resize-none"></textarea>
            <button className="w-full bg-emerald-500 text-slate-950 font-bold py-4 rounded-xl hover:bg-emerald-400 transition-all">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}