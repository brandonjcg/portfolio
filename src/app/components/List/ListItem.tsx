import { IList } from '@/app/interfaces';

interface Props {
  experience: IList;
}

export const ListItem = ({ experience }: Props) => {
  return (
    <div key={experience.slug} className="bg-gray-800 rounded-md">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-100 mb-2">
          {experience.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{experience.period}</p>
        <p className="text-gray-300 text-base">{experience.description}</p>
      </div>
    </div>
  );
};
