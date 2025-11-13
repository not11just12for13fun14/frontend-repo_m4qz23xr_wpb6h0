const packages = [
  {
    name: 'Starter',
    price: 499,
    features: ['Logo + palette', 'Simple one-page site', '2 revisions', 'Delivery in 1 week'],
    cta: 'Get Starter',
    highlight: false,
  },
  {
    name: 'Growth',
    price: 1499,
    features: ['Brand kit + guidelines', 'Multi-page website', '5 revisions', 'Basic animations'],
    cta: 'Choose Growth',
    highlight: true,
  },
  {
    name: 'Premium',
    price: 2999,
    features: ['Full identity system', 'Custom website + CMS', 'Unlimited revisions (2 weeks)', 'Advanced interactivity'],
    cta: 'Go Premium',
    highlight: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Design packages</h2>
          <p className="text-slate-600 mt-2">Flexible options for different stages. Transparent pricing, no surprises.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div key={p.name} className={`rounded-2xl ring-1 ring-black/5 bg-white p-6 relative ${p.highlight ? 'shadow-xl scale-[1.02]' : ''}`}>
              {p.highlight && (
                <span className="absolute -top-3 right-4 text-xs px-2 py-1 rounded-full bg-indigo-600 text-white shadow">Popular</span>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
              <div className="mt-2">
                <span className="text-4xl font-extrabold text-slate-900">${p.price}</span>
                <span className="text-slate-500"> / project</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full justify-center rounded-lg px-4 py-2 font-medium transition ${p.highlight ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white text-slate-900 ring-1 ring-slate-200 hover:ring-slate-300'}`}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
