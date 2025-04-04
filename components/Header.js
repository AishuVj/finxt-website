
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: 'Home Page' },
        { href: '/aboutus', label: 'About Us' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact Us' },
    ];

  return (
    <header className="bg-white  w-full z-50 top-0 h-6">
      <div className="max-w-[1100px]  mx-auto px-4">
        <nav className="flex justify-center py-3">
        <ul className="flex  justify-between w-full text-lg font-medium text-gray-800">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <span
                    className={`cursor-pointer uppercase transition duration-300 ${
                      pathname === item.href
                        ? 'text-amber-700 font-bold'
                        : 'hover:text-amber-700'
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
