import Image from 'next/image';

interface Props {
  alt: string;
  src: string;
  className: string;
  width?: number;
  height?: number;
}

export const ListProjectsItemImage = ({
  src,
  alt,
  className,
  width,
  height,
}: Props) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        className={className}
        width={width ?? 500}
        height={height ?? 300}
      />
    </>
  );
};
