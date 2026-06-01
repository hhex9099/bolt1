import { Clock, ChevronRight } from 'lucide-react';

const deals = [
  {
    id: 1,
    name: 'Samsung 65" 4K QLED Smart TV',
    originalPrice: 1299.99,
    salePrice: 799.99,
    savings: 500,
    rating: 4.7,
    reviews: 2341,
    badge: 'Deal of the Day',
    image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 2,
    name: 'Apple MacBook Air 15" M3',
    originalPrice: 1299.99,
    salePrice: 1049.99,
    savings: 250,
    rating: 4.9,
    reviews: 1872,
    badge: 'Hot Deal',
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5 Headphones',
    originalPrice: 399.99,
    salePrice: 279.99,
    savings: 120,
    rating: 4.8,
    reviews: 4210,
    badge: '30% Off',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 4,
    name: 'iPad Pro 12.9" with M4 Chip',
    originalPrice: 1099.99,
    salePrice: 899.99,
    savings: 200,
    rating: 4.9,
    reviews: 987,
    badge: 'Members Only',
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 5,
    name: 'LG 27" 4K UHD IPS Monitor',
    originalPrice: 599.99,
    salePrice: 379.99,
    savings: 220,
    rating: 4.6,
    reviews: 1543,
    badge: 'Weekend Special',
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpg?auto=compress&cs=tinysrgb&w=400',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className={`w-3 h-3 ${star <= Math.round(rating) ? 'text-[#FFE000]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-blue-600 ml-1">({rating.toFixed(1)})</span>
    </div>
  );
}

export default function DealsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Section header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-black text-gray-900">Deals of the Day</h2>
          <div className="flex items-center gap-1.5 bg-[#0046BE] text-white text-xs font-semibold px-3 py-1.5 rounded">
            <Clock size={13} />
            <span>Ends in 11:47:32</span>
          </div>
        </div>
        <a href="#" className="flex items-center gap-1 text-[#0046BE] font-semibold text-sm hover:underline">
          View All Deals <ChevronRight size={16} />
        </a>
      </div>

      {/* Deal cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {deals.map((deal) => (
          <a
            key={deal.id}
            href="#"
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <div className="relative">
              <img
                src={deal.image}
                alt={deal.name}
                className="w-full h-36 object-cover"
              />
              <span className="absolute top-2 left-2 bg-[#CC0000] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                {deal.badge}
              </span>
            </div>
            <div className="p-3">
              <p className="text-xs text-gray-700 font-medium leading-snug line-clamp-2 mb-2 group-hover:text-[#0046BE]">
                {deal.name}
              </p>
              <StarRating rating={deal.rating} />
              <p className="text-[10px] text-gray-500 mt-0.5">{deal.reviews.toLocaleString()} reviews</p>
              <div className="mt-2">
                <span className="text-lg font-black text-gray-900">${deal.salePrice.toFixed(2)}</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-xs text-gray-400 line-through">${deal.originalPrice.toFixed(2)}</span>
                  <span className="text-xs text-green-700 font-semibold">Save ${deal.savings}</span>
                </div>
              </div>
              <button className="mt-3 w-full bg-[#FFE000] text-[#003087] text-xs font-bold py-2 rounded hover:bg-yellow-400 transition-colors">
                Add to Cart
              </button>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
