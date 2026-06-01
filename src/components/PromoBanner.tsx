export default function PromoBanner() {
  const promos = [
    {
      bg: 'bg-[#003087]',
      accent: 'text-[#FFE000]',
      eyebrow: 'TotalTech Membership',
      headline: 'Unlimited tech support. Members-only prices.',
      sub: 'Starting at $199.99/yr',
      cta: 'Learn More',
      ctaStyle: 'bg-[#FFE000] text-[#003087]',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
    {
      bg: 'bg-[#1a1a1a]',
      accent: 'text-[#FFE000]',
      eyebrow: 'Trade-In & Save',
      headline: 'Get up to $830 for your old phone',
      sub: 'When you buy select smartphones',
      cta: 'Get an Estimate',
      ctaStyle: 'bg-[#FFE000] text-[#003087]',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-4">
        {promos.map((promo) => (
          <div
            key={promo.eyebrow}
            className={`${promo.bg} rounded-xl overflow-hidden flex items-center gap-6 px-7 py-6 min-h-[160px] relative`}
          >
            <div className="flex-1 z-10">
              <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${promo.accent}`}>
                {promo.eyebrow}
              </p>
              <h3 className="text-white text-xl font-black leading-tight mb-1">{promo.headline}</h3>
              <p className="text-gray-300 text-sm mb-4">{promo.sub}</p>
              <a
                href="#"
                className={`inline-block ${promo.ctaStyle} text-sm font-bold px-5 py-2 rounded hover:opacity-90 transition-opacity`}
              >
                {promo.cta}
              </a>
            </div>
            <div className="hidden sm:block flex-shrink-0">
              <img
                src={promo.image}
                alt={promo.headline}
                className="w-36 h-28 object-cover rounded-lg opacity-80"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
