import { type IProject } from '@/app/interfaces';
import { ListProjectsItem } from './ListProjectsItem';

interface Props {
  title: string;
  rows: IProject[];
}

export const ListProjects = ({ rows, title }: Props) => {
  return (
    <>
      <h2 className="text-2xl font-bold py-4">{title}</h2>
      <div className="space-y-4">
        {rows.map((item) => (
          <ListProjectsItem key={item.slug} project={item} />
        ))}
      </div>
    </>
  );
};
