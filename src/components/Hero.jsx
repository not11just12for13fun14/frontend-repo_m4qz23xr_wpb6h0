import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative pt-20">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/70 via-white to-white" />
        <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute top-60 -left-20 w-[28rem] h-[28rem] rounded-full bg-cyan-200/40 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="py-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 ring-1 ring-black/5 px-3 py-1 text-xs font-medium text-slate-700 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Available for new projects
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Modern design that moves people
          </h1>
          <p className="mt-4 text-slate-600 text-lg max-w-prose">
            I craft interactive brands, delightful websites, and visuals that convert. Explore selected work and flexible packages designed for startups and creators.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#work" className="px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition">View work</a>
            <a href="#packages" className="px-5 py-3 rounded-lg bg-white text-slate-900 ring-1 ring-slate-200 hover:ring-slate-300 transition">Packages</a>
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] rounded-2xl overflow-hidden ring-1 ring-black/5 bg-white">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
        </div>
      </div>
    </section>
  );
}
