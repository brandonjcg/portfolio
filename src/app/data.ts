import { type IProject, type IList } from './interfaces';

export const experiencesRows: IList[] = [
  {
    title: 'Full-stack developer',
    slug: 'full-stack-developer',
    period: 'May 2022 – Present',
    description:
      'Developed key modules for the inventory system, including invoices, pedimentos, and inventory discharge (FIFO, LIFO), using technologies such as React, NestJS (GraphQL & REST API), MySQL, MongoDB; Redux and Zustand for state management; and Tailwind CSS for styling.',
  },
  {
    title: 'Database analyst',
    slug: 'database-analyst',
    period: 'July 2019 – May 2022',
    description:
      'I developed migrations between Annex 24 and ERP systems, ensuring data integrity. I contributed to database design and normalization for the inventory system, improving scalability. To enhance reliability, I automated 90% of database backups with cron jobs and optimized processes by creating stored procedures, reducing manual work by 90%.',
  },
  {
    title: 'IT support technician',
    slug: 'it-support-technician',
    period: 'August 2018 – July 2019',
    description:
      'I developed a traceability system for TV series on physical pallets and purchase orders, significantly improving the efficiency of the logistics and shipping department. Additionally, I provided help-desk support to the plant, assisting with Active Directory, Office 365, Microsoft Dynamics ERP, and other internal systems, ensuring smooth operations and quick issue resolution.',
  },
];

export const projectsRows: IProject[] = [
  {
    slug: 'poke-api',
    name: 'Poke API',
    description:
      'List of Pokémon from the RESTful Pokémon API. You can also view the details of each Pokémon, such as its abilities, moves, and stats.',
    image: '/poke-api.png?height=300&width=500',
    technologies: [
      'React',
      'React Router',
      'Redux Toolkit',
      'Vite',
      'TypeScript',
    ],
    githubUrl: 'https://github.com/brandonjcg/pokeapi',
  },
];
