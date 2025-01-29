import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl text-center">Portfolio in progress 🚧</h1>
        <p className="text-lg text-center">Brandon Castillo 👨🏽‍💻🚀</p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/brandonjcg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
          Github
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/in/brandonjcg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
          Linkedin
        </Link>
      </footer>
    </div>
  );
}
