import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    badge: 'Limited Time',
    headline: 'Summer Tech Sale',
    subhead: 'Up to 40% off laptops, tablets & more',
    cta: 'Shop Now',
    bg: 'from-[#003087] to-[#0046BE]',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=700',
    tag: 'Deals End Sunday',
  },
  {
    id: 2,
    badge: 'New Arrival',
    headline: 'Next-Gen Gaming',
    subhead: 'The latest consoles & accessories in stock now',
    cta: 'Shop Gaming',
    bg: 'from-[#1a1a2e] to-[#16213e]',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=700',
    tag: 'While Supplies Last',
  },
  {
    id: 3,
    badge: 'Member Exclusive',
    headline: 'Smart Home Savings',
    subhead: 'Build your connected home for less',
    cta: 'Explore Deals',
    bg: 'from-[#0d3b2e] to-[#0f5132]',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=700',
    tag: 'Members Save Extra 10%',
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];

  return (
    <div className={`relative bg-gradient-to-r ${slide.bg} overflow-hidden transition-all duration-700`} style={{ minHeight: 380 }}>
      <div className="max-w-7xl mx-auto px-4 py-10 flex items-center justify-between gap-8 min-h-[380px]">
        {/* Text side */}
        <div className="flex-1 z-10 animate-fade-in">
          <span className="inline-block bg-[#FFE000] text-[#003087] text-xs font-bold px-3 py-1 rounded mb-4 uppercase tracking-wider">
            {slide.badge}
          </span>
          <h1 className="text-white text-4xl lg:text-5xl font-black leading-tight mb-3">
            {slide.headline}
          </h1>
          <p className="text-blue-100 text-lg mb-6 max-w-md">{slide.subhead}</p>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#"
              className="bg-[#FFE000] text-[#003087] font-bold px-7 py-3 rounded hover:bg-yellow-300 transition-colors text-sm"
            >
              {slide.cta}
            </a>
            <span className="text-yellow-300 text-sm font-medium">{slide.tag}</span>
          </div>
        </div>

        {/* Image side */}
        <div className="hidden md:block flex-1 max-w-sm lg:max-w-md">
          <img
            src={slide.image}
            alt={slide.headline}
            className="w-full h-64 lg:h-72 object-cover rounded-xl shadow-2xl"
          />
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors z-20"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors z-20"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'bg-[#FFE000] w-6 h-2.5' : 'bg-white/50 w-2.5 h-2.5'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
