import { Facebook, Twitter, Youtube, Instagram, CreditCard, Shield, Truck, RotateCcw } from 'lucide-react';

const footerLinks = {
  'Top Departments': [
    'TVs & Home Theater',
    'Computers & Tablets',
    'Cell Phones',
    'Audio',
    'Video Games',
    'Cameras & Camcorders',
    'Appliances',
    'Smart Home',
  ],
  'Help': [
    'Order Status',
    'Shipping & Delivery',
    'Returns & Exchanges',
    'Store Locator',
    'Contact Us',
    'Best Buy Credit Cards',
    'Geek Squad Support',
    'Accessibility',
  ],
  'About': [
    'About Best Buy',
    'Careers',
    'Corporate Responsibility',
    'Investor Relations',
    'Press Room',
    'Affiliate Program',
    'Advertise with Us',
    'Best Buy Health',
  ],
  'Programs': [
    'TotalTech Membership',
    'My Best Buy',
    'Best Buy Business',
    'Student Deals',
    'Trade-In Program',
    'Gift Cards',
    'Best Buy Outlet',
    'Geek Squad Services',
  ],
};

const serviceHighlights = [
  {
    icon: <Truck size={28} />,
    title: 'Free Delivery',
    desc: 'On orders $35 and up',
  },
  {
    icon: <RotateCcw size={28} />,
    title: 'Easy Returns',
    desc: '15-day return policy',
  },
  {
    icon: <Shield size={28} />,
    title: 'Secure Shopping',
    desc: '100% secure checkout',
  },
  {
    icon: <CreditCard size={28} />,
    title: '0% Financing',
    desc: 'On select purchases',
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 mt-4">
      {/* Service highlights */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {serviceHighlights.map((item) => (
              <div key={item.title} className="flex items-center gap-3">
                <div className="text-[#FFE000]">{item.icon}</div>
                <div>
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer links */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-bold text-sm mb-4">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 text-xs hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Social + bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {[
              { icon: <Facebook size={18} />, label: 'Facebook' },
              { icon: <Twitter size={18} />, label: 'Twitter' },
              { icon: <Youtube size={18} />, label: 'YouTube' },
              { icon: <Instagram size={18} />, label: 'Instagram' },
            ].map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-gray-400 hover:text-white transition-colors bg-gray-700 hover:bg-gray-600 rounded-full p-2"
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-500">
            <span>© {new Date().getFullYear()} Best Buy. All rights reserved.</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-gray-300 transition-colors">CA Privacy Rights</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Your Privacy Choices</a>
          </div>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {['VISA', 'MC', 'AMEX', 'DISC', 'PP'].map((card) => (
              <span
                key={card}
                className="bg-white text-gray-700 text-[10px] font-bold px-2 py-1 rounded border border-gray-200 leading-none"
              >
                {card}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
