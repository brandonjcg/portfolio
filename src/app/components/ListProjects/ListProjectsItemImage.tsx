import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const ListProjectsItemImage = ({
  src,
  alt,
  className,
  width = 500,
  height = 300,
}: Props) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
      />
    </>
  );
};
