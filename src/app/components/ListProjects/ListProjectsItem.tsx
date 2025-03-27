'use client';

import { useState } from 'react';
import Image from 'next/image';
import { type IProject } from '@/app/interfaces';
import { ListProjectsItemLinks } from './ListProjectsItemLinks';

interface Props {
  project: IProject;
}

export const ListProjectsItem = ({ project }: Props) => {
  const [displayImage, setDisplayImage] = useState<string>(project.images[0]);

  return (
    <>
      <div key={project.slug} className="flex flex-col">
        <div className="bg-gray-800 rounded-lg overflow-hidden mb-4">
          <Image
            src={displayImage || '/placeholder.svg'}
            alt={project.name}
            width={500}
            height={300}
            className="w-full h-auto object-cover"
            onMouseEnter={() => setDisplayImage(project.images[1])}
            onMouseLeave={() => setDisplayImage(project.images[0])}
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
