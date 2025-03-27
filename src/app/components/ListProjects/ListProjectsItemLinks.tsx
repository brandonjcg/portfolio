import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { FaPlayCircle } from 'react-icons/fa';
import { type IProject } from '@/app/interfaces';

interface Props {
  project: IProject;
}

export const ListProjectsItemLinks = ({ project }: Props) => {
  return (
    <div className="flex items-center gap-4 mt-2">
      {project.githubUrl && (
        <Link
          href={project.githubUrl}
          target="_blank"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <BsGithub size={20} />
          <span className="text-lg font-medium">Github</span>
        </Link>
      )}

      {project.websiteUrl && (
        <Link
          href={project.websiteUrl}
          target="_blank"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <FaPlayCircle size={20} />
          <span className="text-lg font-medium">Demo</span>
        </Link>
      )}
    </div>
  );
};
