import Link from 'next/link';
import { IList } from '@/app/interfaces';

export const ListItem = ({ date, title, description, slug }: IList) => {
  return (
    <article>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <time>{date}</time>
      </div>
      <h2 className="mt-2 text-xl font-medium text-white">
        <Link href={`/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h2>
      <p className="mt-3 text-gray-400 leading-relaxed">{description}</p>
    </article>
  );
};
