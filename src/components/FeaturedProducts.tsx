import { ChevronRight } from 'lucide-react';
import ProductCard, { type Product } from './ProductCard';

const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Samsung 65" Class S95B OLED 4K Smart TV',
    brand: 'Samsung',
    originalPrice: 2199.99,
    salePrice: 1499.99,
    rating: 4.8,
    reviews: 1203,
    image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Best Seller',
    freeShipping: true,
    openBox: true,
  },
  {
    id: 2,
    name: 'Apple MacBook Pro 14" M3 Pro 512GB',
    brand: 'Apple',
    originalPrice: 1999.99,
    salePrice: 1799.99,
    rating: 4.9,
    reviews: 876,
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Top Rated',
    freeShipping: true,
    openBox: false,
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5 Wireless Noise Canceling Headphones',
    brand: 'Sony',
    originalPrice: 399.99,
    salePrice: 278.00,
    rating: 4.8,
    reviews: 4210,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    freeShipping: true,
    openBox: true,
  },
  {
    id: 4,
    name: 'iPad Pro 12.9" Wi-Fi 256GB with M4 Chip',
    brand: 'Apple',
    originalPrice: 1099.99,
    salePrice: 899.00,
    rating: 4.9,
    reviews: 987,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'New',
    freeShipping: true,
  },
  {
    id: 5,
    name: 'Canon EOS R50 Mirrorless Camera with 18-45mm Lens',
    brand: 'Canon',
    originalPrice: 849.99,
    salePrice: 699.99,
    rating: 4.7,
    reviews: 643,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400',
    freeShipping: true,
    openBox: true,
  },
  {
    id: 6,
    name: 'LG 27" UltraGear QHD 165Hz Gaming Monitor',
    brand: 'LG',
    originalPrice: 549.99,
    salePrice: 349.99,
    rating: 4.6,
    reviews: 1543,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Sale',
    freeShipping: true,
  },
];

const topPicksProducts: Product[] = [
  {
    id: 7,
    name: 'Samsung Galaxy S24 Ultra 256GB Unlocked',
    brand: 'Samsung',
    originalPrice: 1299.99,
    salePrice: 1099.99,
    rating: 4.7,
    reviews: 2103,
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Best Seller',
    freeShipping: true,
    openBox: true,
  },
  {
    id: 8,
    name: 'Bose SoundLink Max Portable Bluetooth Speaker',
    brand: 'Bose',
    originalPrice: 399.99,
    salePrice: 329.00,
    rating: 4.8,
    reviews: 872,
    image: 'https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=400',
    freeShipping: true,
  },
  {
    id: 9,
    name: 'PlayStation 5 Console Slim Disc Edition',
    brand: 'Sony',
    originalPrice: 499.99,
    salePrice: 499.99,
    rating: 4.9,
    reviews: 5678,
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'In Stock',
    freeShipping: true,
  },
  {
    id: 10,
    name: 'Ring Video Doorbell Pro 2 with Head-to-Toe HD+ Video',
    brand: 'Ring',
    originalPrice: 249.99,
    salePrice: 169.99,
    rating: 4.5,
    reviews: 3421,
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: '32% Off',
    freeShipping: true,
    openBox: true,
  },
  {
    id: 11,
    name: 'Dyson V15 Detect Absolute Cordless Vacuum',
    brand: 'Dyson',
    originalPrice: 749.99,
    salePrice: 599.99,
    rating: 4.7,
    reviews: 1298,
    image: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=400',
    freeShipping: true,
  },
  {
    id: 12,
    name: 'Garmin Fenix 7 Sapphire Solar Multisport GPS Watch',
    brand: 'Garmin',
    originalPrice: 899.99,
    salePrice: 699.99,
    rating: 4.8,
    reviews: 521,
    image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=400',
    freeShipping: true,
    openBox: true,
  },
];

interface ProductSectionProps {
  title: string;
  products: Product[];
  viewAllLabel?: string;
}

function ProductSection({ title, products, viewAllLabel = 'View All' }: ProductSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-black text-gray-900">{title}</h2>
        <a href="#" className="flex items-center gap-1 text-[#0046BE] font-semibold text-sm hover:underline">
          {viewAllLabel} <ChevronRight size={16} />
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default function FeaturedProducts() {
  return (
    <>
      <ProductSection
        title="Featured Products"
        products={featuredProducts}
        viewAllLabel="Shop All Electronics"
      />
      <div className="bg-gray-50 border-t border-gray-200">
        <ProductSection
          title="Top Picks for You"
          products={topPicksProducts}
          viewAllLabel="View All Recommendations"
        />
      </div>
    </>
  );
}
