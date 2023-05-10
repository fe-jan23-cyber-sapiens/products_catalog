import { FC } from 'react';

interface Props {
  image: string;
}

export const SliderItem: FC<Props> = ({ image }) => {
  return (
    <img
      src={image}
      alt="Slider Phones"
      className="carousel__image"
    />
  );
};
