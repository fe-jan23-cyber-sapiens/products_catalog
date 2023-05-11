import { FC } from 'react';
import './AboutProduct.scss';
import { DescriptionItem } from '../../../typedefs';

interface Props {
  point: DescriptionItem;
}

export const AboutProduct: FC<Props> = (props) => {
  const { point } = props;
  const { title, text } = point;

  return (
    <div className="about__info-box">
      <h3 className="about__info-title">
        {title}
      </h3>

      <p className="about__info-text">
        {text}
      </p>
    </div>
  );
};
