import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Brand Identity — NovaLabs',
    tags: ['Branding', 'Visual System'],
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=1600&auto=format&fit=crop',
    ],
  },
  {
    id: 2,
    title: 'Product Website — Aurora',
    tags: ['Web Design', 'UI/UX'],
    images: [
      'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547658719-08f0b0be1bcb?q=80&w=1600&auto=format&fit=crop',
    ],
  },
  {
    id: 3,
    title: 'App UI — Flowdash',
    tags: ['Mobile', 'Design System'],
    images: [
      'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611162618071-b39a2ec3422f?q=80&w=1600&auto=format&fit=crop',
    ],
  },
];

export default function Portfolio() {
  const [lightbox, setLightbox] = useState({ open: false, image: '' });

  return (
    <section id="work" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Selected work</h2>
          <p className="text-slate-600 mt-2 max-w-prose">A few favorites across branding, websites and product design. Click any image to expand.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.id} className="bg-white rounded-xl overflow-hidden ring-1 ring-black/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => setLightbox({ open: true, image: p.images[0] })}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-200">{t}</span>
                  ))}
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {p.images.slice(1).map((img) => (
                    <img
                      key={img}
                      src={img}
                      alt={p.title}
                      className="w-full aspect-square object-cover rounded-md cursor-pointer hover:opacity-90"
                      onClick={() => setLightbox({ open: true, image: img })}
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {lightbox.open && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6" onClick={() => setLightbox({ open: false, image: '' })}>
          <img src={lightbox.image} alt="Expanded" className="max-h-[90vh] max-w-5xl rounded-xl shadow-2xl" />
        </div>
      )}
    </section>
  );
}
