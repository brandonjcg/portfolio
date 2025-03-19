import { List } from './components/list/List';
import { Footer } from './components/ui/Footer';
import { Navbar } from './components/ui/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      <div className="mx-auto max-w-2xl px-6">
        <Navbar />

        <h1 className="text-4xl text-center">🚧 Portfolio in progress 🚧</h1>
        <div className="space-y-20 ">
          <List />
        </div>
      </div>
      <Footer />
    </div>
  );
}
