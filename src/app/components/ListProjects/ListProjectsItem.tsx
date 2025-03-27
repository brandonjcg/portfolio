import Image from 'next/image';
import { type IProject } from '@/app/interfaces';
import { ListProjectsItemLinks } from './ListProjectsItemLinks';

interface Props {
  project: IProject;
}

export const ListProjectsItem = ({ project }: Props) => {
  return (
    <>
      <div key={project.slug} className="flex flex-col">
        <div className="bg-gray-800 rounded-lg overflow-hidden mb-4">
          <Image
            src={project.image || '/placeholder.svg'}
            alt={project.name}
            width={500}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>

        <h2 className="text-xl font-bold mb-2">{project.name}</h2>
        <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech.toLocaleLowerCase()}
              className="bg-gray-800 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <ListProjectsItemLinks project={project} />
      </div>
    </>
  );
};
