import { ListItem } from './ListItem';

const items = [
  {
    date: 'February 17, 2025',
    title: 'Lorem ipsum mexicano',
    description: `En un lugar de la tierra del nopal, cuyo nombre es México, no hace mucho tiempo, entre tamales y atoles, nació un texto de ejemplo. Chale, dijo el cactus al ver el amanecer en el cerro, mientras el mariachi afinaba su guitarra y un mezcalito calentaba el alma.

Los tacos al pastor, con su piña bien dorada, eran la inspiración del poeta. Ándale pues, que en este país del chile y el maíz, la vida siempre da vueltas como los molcajetes.

Ahí va el texto, directo como el mariachi en Garibaldi:
“Se vale soñar, pero no se vale dejar al pozole sin grano ni al mole sin chocolate. En esta tierra de colores y sabores, cada esquina esconde un antojito y cada fiesta, una tradición. La chancla vuela, el comal calienta y el cempasúchil perfuma. Órale, que la vida es como un pambazo: aunque te manches, siempre es sabrosa.”

Y así, entre “no manches” y “qué padre,” el texto quedó listo.`,
    slug: 'lorem-ipsum-mexicano',
  },
];

export const List = () => {
  return (
    <div className="space-y-20 py-16">
      {items.map((post) => (
        <ListItem key={post.slug} {...post} />
      ))}
    </div>
  );
};
