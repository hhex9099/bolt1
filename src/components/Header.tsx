import { useState } from 'react';
import { Search, ShoppingCart, User, MapPin, ChevronDown, Menu, X, Heart, Truck } from 'lucide-react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top utility bar */}
      <div className="bg-[#003087] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-1 hover:underline transition-colors">
              <Truck size={13} />
              <span>Free shipping on orders $35+</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-1 hover:underline">
              <MapPin size={13} />
              <span>Find a Store</span>
            </a>
            <span className="text-[#FFE000]">|</span>
            <a href="#" className="hover:underline">Order Status</a>
            <span className="text-[#FFE000]">|</span>
            <a href="#" className="hover:underline">Best Buy Business</a>
            <span className="text-[#FFE000]">|</span>
            <a href="#" className="hover:underline">Best Buy Health</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-[#0046BE] py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <div className="bg-[#FFE000] px-3 py-1.5 rounded font-black text-[#0046BE] text-xl tracking-tight leading-none">
              BEST<span className="block text-xs font-bold leading-none">BUY</span>
            </div>
          </a>

          {/* Menu button (desktop) */}
          <button className="hidden lg:flex items-center gap-2 text-white font-semibold text-sm px-3 py-2 rounded hover:bg-[#003087] transition-colors whitespace-nowrap">
            <Menu size={18} />
            Menu
          </button>

          {/* Search bar */}
          <div className="flex-1 flex max-w-2xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products, brands and more..."
              className="flex-1 px-4 py-2.5 rounded-l-md text-gray-900 text-sm outline-none border-2 border-transparent focus:border-[#FFE000] transition-colors"
            />
            <button className="bg-[#FFE000] px-5 py-2.5 rounded-r-md hover:bg-yellow-400 transition-colors flex items-center justify-center">
              <Search size={20} className="text-[#003087]" />
            </button>
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-1 ml-auto">
            <a href="#" className="flex flex-col items-center gap-0.5 text-white px-3 py-1.5 rounded hover:bg-[#003087] transition-colors group">
              <User size={22} />
              <span className="text-xs whitespace-nowrap">Account</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-0.5 text-white px-3 py-1.5 rounded hover:bg-[#003087] transition-colors">
              <Heart size={22} />
              <span className="text-xs">Saved</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-0.5 text-white px-3 py-1.5 rounded hover:bg-[#003087] transition-colors relative">
              <div className="relative">
                <ShoppingCart size={22} />
                <span className="absolute -top-2 -right-2 bg-[#FFE000] text-[#003087] text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">3</span>
              </div>
              <span className="text-xs">Cart</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Category nav */}
      <nav className="bg-[#003087] border-t border-[#0046BE] hidden lg:block">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center overflow-x-auto">
            {[
              'Deals',
              'TV & Home Theater',
              'Computers & Tablets',
              'Cell Phones',
              'Audio',
              'Video Games',
              'Appliances',
              'Camera & Photo',
              'Smart Home',
              'Car Electronics',
              'Health & Fitness',
              'Gift Ideas',
            ].map((cat) => (
              <li key={cat}>
                <a
                  href="#"
                  className="flex items-center gap-1 text-white text-xs font-medium px-3 py-3 hover:bg-[#0046BE] whitespace-nowrap transition-colors border-b-2 border-transparent hover:border-[#FFE000]"
                >
                  {cat}
                  {['TV & Home Theater', 'Computers & Tablets', 'Cell Phones', 'Audio'].includes(cat) && (
                    <ChevronDown size={12} />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t border-gray-200">
          <div className="flex flex-col">
            {['Deals', 'TV & Home Theater', 'Computers & Tablets', 'Cell Phones', 'Audio', 'Video Games', 'Appliances', 'Smart Home'].map((cat) => (
              <a key={cat} href="#" className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100 hover:bg-gray-50 flex items-center justify-between">
                {cat}
                <ChevronDown size={16} className="text-gray-400" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
