import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer className="w-full text-white p-8 flex flex-col items-center justify-center">
      <div className="flex gap-6 mb-4">
        <Link
          className="flex gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/brandonjcg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
          Github
        </Link>
        <Link
          className="flex gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/in/brandonjcg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
          Linkedin
        </Link>
      </div>
      <>
        <span>Developed by Brandon Castillo 👨🏽‍💻</span>
      </>
    </footer>
  );
};
