import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  path: string,
  imageSrc: string,
  alt: string,
  className?: string,
}

export const HeaderLinkWithIcon: FC<Props> = (props) => {
  const {
    path,
    imageSrc,
    alt,
    className,
  } = props;

  return (
    <Link to={path}>
      <img src={imageSrc} alt={alt} className={className} />
    </Link>
  );
};
