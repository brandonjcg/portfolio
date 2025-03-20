import { IList } from '@/app/interfaces';
import { ListItem } from './ListItem';

interface Props {
  title: string;
  rows: IList[];
}

export const List = ({ rows, title }: Props) => {
  return (
    <>
      <h2 className="text-2xl font-bold py-4">{title}</h2>
      <div className="space-y-4">
        {rows.map((item) => (
          <ListItem key={item.title} experience={item} />
        ))}
      </div>
    </>
  );
};
