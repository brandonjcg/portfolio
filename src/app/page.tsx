import { List } from './components/List/List';
import { experiencesRows } from './data';

export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-center">🚧 Portfolio in progress 🚧</h1>
      <div className="space-y-10">
        <section id="about">
          <p className="mt-3 text-gray-400 leading-relaxed">
            Los tacos al pastor, con su piña bien dorada, eran la inspiración
            del poeta. Ándale pues, que en este país del chile y el maíz, la
            vida siempre da vueltas como los molcajetes.
          </p>
        </section>
        <section id="experience">
          <List title="Experience" rows={experiencesRows} />
        </section>
        <section id="contact">
          <List title="Contact" rows={experiencesRows} />
        </section>
      </div>
    </>
  );
}
