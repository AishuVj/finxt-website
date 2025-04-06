import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home Page' },
    { href: '/aboutus', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="bg-white w-full z-50 top-0 shadow-md">
      <div className="max-w-[1100px] mx-auto px-4 flex justify-between items-center h-16">
        <h1 className="text-xl font-bold">FinXTrust</h1>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8 text-gray-800 text-lg font-medium">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span className={`cursor-pointer uppercase transition duration-300 ${
                pathname === item.href ? 'text-amber-700 font-bold' : 'hover:text-amber-700'
              }`}>
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden bg-white px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span className={`block py-2 uppercase text-gray-800 ${
                pathname === item.href ? 'text-amber-700 font-bold' : 'hover:text-amber-700'
              }`}>
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}