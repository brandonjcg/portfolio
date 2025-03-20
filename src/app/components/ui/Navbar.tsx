import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="flex fixed top-0 w-full z-10 items-center justify-center py-8 bg-black">
      <div className="flex gap-6 text-sm">
        <Link
          href="#about"
          className="text-white hover:text-gray-300  transition-colors"
        >
          About
        </Link>
        <Link
          href="#projects"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};
