import { type IProject } from '@/app/interfaces';
import { ListProjectsItemLinks } from './ListProjectsItemLinks';
import { ListProjectsItemImage } from './ListProjectsItemImage';

interface Props {
  project: IProject;
}

export const ListProjectsItem = ({ project }: Props) => {
  return (
    <>
      <div key={project.slug} className="flex flex-col">
        <div className="group bg-gray-800 rounded-lg overflow-hidden mb-4 relative">
          <ListProjectsItemImage
            src={project.images[0]}
            alt={project.name}
            className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          <ListProjectsItemImage
            src={project.images[1]}
            alt={project.name}
            className="w-full h-auto object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        </div>

        <h2 className="text-xl font-bold mb-2">{project.name}</h2>
        <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech.toLowerCase()}
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
