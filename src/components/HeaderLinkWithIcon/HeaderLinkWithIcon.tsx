import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  path: string,
  imageSrc: string,
  alt: string,
  className: string,
};

export const HeaderLinkWithIcon: React.FC<Props> = ({
  path,
  imageSrc,
  alt,
  className,
}) => {
  return (
    <Link to={path}>
      <img
        src={imageSrc}
        alt={alt}
        className={className}
      />
    </Link>
  );
};
