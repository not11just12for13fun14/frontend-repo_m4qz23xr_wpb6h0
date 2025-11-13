export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white ring-1 ring-black/5 p-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Let’s create something great</h3>
            <p className="text-slate-600 mt-2">Tell me about your goals and timeline. I’ll reply within 24 hours.</p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Brand identity</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Website design</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Product UI/UX</li>
            </ul>
          </div>
          <form className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Your name" className="px-4 py-3 rounded-lg ring-1 ring-slate-200 focus:ring-slate-300 outline-none" />
            <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg ring-1 ring-slate-200 focus:ring-slate-300 outline-none" />
            <textarea placeholder="Project details" rows={4} className="px-4 py-3 rounded-lg ring-1 ring-slate-200 focus:ring-slate-300 outline-none" />
            <button type="submit" className="mt-2 px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition">Send inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}
