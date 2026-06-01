import { ChevronRight } from 'lucide-react';

const categories = [
  {
    name: 'TVs',
    image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=300',
    link: '#',
  },
  {
    name: 'Laptops',
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=300',
    link: '#',
  },
  {
    name: 'Headphones',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300',
    link: '#',
  },
  {
    name: 'Tablets',
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=300',
    link: '#',
  },
  {
    name: 'Monitors',
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpg?auto=compress&cs=tinysrgb&w=300',
    link: '#',
  },
  {
    name: 'Cameras',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=300',
    link: '#',
  },
  {
    name: 'Gaming',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=300',
    link: '#',
  },
  {
    name: 'Smart Home',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=300',
    link: '#',
  },
  {
    name: 'Appliances',
    image: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=300',
    link: '#',
  },
  {
    name: 'Cell Phones',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=300',
    link: '#',
  },
  {
    name: 'Speakers',
    image: 'https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=300',
    link: '#',
  },
  {
    name: 'Car Audio',
    image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=300',
    link: '#',
  },
];

export default function CategoryGrid() {
  return (
    <section className="bg-white border-t border-b border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-black text-gray-900">Shop by Category</h2>
          <a href="#" className="flex items-center gap-1 text-[#0046BE] font-semibold text-sm hover:underline">
            All Departments <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.link}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-100 ring-2 ring-transparent group-hover:ring-[#0046BE] transition-all duration-200">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium group-hover:text-[#0046BE] transition-colors leading-tight">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
