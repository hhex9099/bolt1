import { Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export interface Product {
  id: number;
  name: string;
  brand: string;
  originalPrice: number;
  salePrice: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  freeShipping?: boolean;
  openBox?: boolean;
}

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = star <= Math.floor(rating);
          const partial = !filled && star - 1 < rating;
          return (
            <span key={star} className="relative inline-block w-3.5 h-3.5">
              <svg className="w-3.5 h-3.5 text-gray-200" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {(filled || partial) && (
                <span className="absolute inset-0 overflow-hidden" style={{ width: filled ? '100%' : `${(rating % 1) * 100}%` }}>
                  <svg className="w-3.5 h-3.5 text-[#FFE000]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
              )}
            </span>
          );
        })}
      </div>
      <span className="text-xs text-[#0046BE] hover:underline cursor-pointer">
        ({reviews.toLocaleString()})
      </span>
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const [saved, setSaved] = useState(false);
  const [added, setAdded] = useState(false);
  const discount = Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <a
      href="#"
      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group flex flex-col"
    >
      <div className="relative bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.badge && (
          <span className="absolute top-2 left-2 bg-[#CC0000] text-white text-[10px] font-bold px-2 py-0.5 rounded z-10">
            {product.badge}
          </span>
        )}
        {discount >= 10 && (
          <span className="absolute top-2 right-2 bg-[#003087] text-white text-[10px] font-bold px-2 py-0.5 rounded z-10">
            -{discount}%
          </span>
        )}
        <button
          onClick={(e) => { e.preventDefault(); setSaved(!saved); }}
          className="absolute bottom-2 right-2 bg-white rounded-full p-1.5 shadow hover:scale-110 transition-transform z-10"
        >
          <Heart size={15} className={saved ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
        </button>
      </div>

      <div className="p-3 flex flex-col flex-1">
        <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wide mb-0.5">{product.brand}</p>
        <p className="text-sm text-gray-800 font-medium leading-snug line-clamp-2 mb-2 group-hover:text-[#0046BE] transition-colors flex-1">
          {product.name}
        </p>
        <StarRating rating={product.rating} reviews={product.reviews} />

        <div className="mt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-black text-gray-900">${product.salePrice.toFixed(2)}</span>
            {product.originalPrice > product.salePrice && (
              <span className="text-xs text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          {product.originalPrice > product.salePrice && (
            <p className="text-xs text-green-700 font-semibold">
              Save ${(product.originalPrice - product.salePrice).toFixed(2)}
            </p>
          )}
        </div>

        {product.freeShipping && (
          <p className="text-xs text-gray-500 mt-1">Free shipping</p>
        )}
        {product.openBox && (
          <p className="text-xs text-[#0046BE] mt-1 hover:underline">Open-Box from ${(product.salePrice * 0.82).toFixed(2)}</p>
        )}

        <button
          onClick={handleAddToCart}
          className={`mt-3 w-full flex items-center justify-center gap-2 text-xs font-bold py-2.5 rounded transition-all duration-200 ${
            added
              ? 'bg-green-600 text-white'
              : 'bg-[#FFE000] text-[#003087] hover:bg-yellow-400'
          }`}
        >
          <ShoppingCart size={14} />
          {added ? 'Added!' : 'Add to Cart'}
        </button>
      </div>
    </a>
  );
}
