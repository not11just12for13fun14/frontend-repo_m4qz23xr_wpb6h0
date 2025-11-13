import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-white/30">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div onClick={() => scrollTo('top')} className="flex items-center gap-2 cursor-pointer select-none">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400" />
          <span className="font-semibold tracking-tight text-slate-800">Flames Design</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-slate-700">
          <button className="hover:text-slate-900" onClick={() => scrollTo('work')}>Work</button>
          <button className="hover:text-slate-900" onClick={() => scrollTo('packages')}>Packages</button>
          <button className="hover:text-slate-900" onClick={() => scrollTo('contact')}>Contact</button>
        </div>
        <button className="md:hidden p-2 rounded-lg hover:bg-white/60" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          <Menu className="w-6 h-6 text-slate-700" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t bg-white/90">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            <button className="text-left py-2" onClick={() => scrollTo('work')}>Work</button>
            <button className="text-left py-2" onClick={() => scrollTo('packages')}>Packages</button>
            <button className="text-left py-2" onClick={() => scrollTo('contact')}>Contact</button>
          </div>
        </div>
      )}
    </header>
  );
}
