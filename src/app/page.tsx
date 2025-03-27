import { List } from './components/List/List';
import { ListProjects } from './components/ListProjects/ListProjects';
import { experiencesRows, projectsRows } from './data';

export default function Home() {
  const beginDate = new Date('2019-07-24');
  const endDate = new Date();
  const years = endDate.getFullYear() - beginDate.getFullYear();

  return (
    <>
      <div className="space-y-10">
        <section id="about" className="scroll-mt-16">
          <h1 className="text-4xl text-center">{`I'm Brandon Castillo 👨🏽‍💻`}</h1>
          <p className="mt-3 text-gray-400 leading-relaxed">
            {`I'm a full-stack developer with ${years} years of experience in IT. I have been working with technologies like React, Node.js, NoSQL, and SQL databases. I have a strong background in database design, data analysis, and system optimization. I'm passionate about learning new technologies and building scalable and maintainable software.`}
          </p>
        </section>
        <section id="experience" className="scroll-mt-16">
          <List title="Experience" rows={experiencesRows} />
        </section>
        <section id="projects" className="scroll-mt-16">
          <ListProjects title="Projects" rows={projectsRows} />
        </section>
      </div>
    </>
  );
}
