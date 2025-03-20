import Link from 'next/link';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
  return (
    <nav className="flex fixed top-0 w-full z-10 items-center justify-center py-8 bg-black h-16">
      <div className="flex gap-6 text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-white hover:text-gray-300 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
