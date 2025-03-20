import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="flex fixed top-0 w-full z-10 items-center justify-center py-8 bg-black">
      <div className="flex gap-6 text-sm">
        <Link
          href="/"
          className="text-white hover:text-gray-300  transition-colors"
        >
          Experience
        </Link>
        <Link
          href="/"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Projects
        </Link>
        <Link
          href="/"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};
