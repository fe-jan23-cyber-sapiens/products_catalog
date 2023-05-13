import { FC } from 'react';
import './TechSpecsItem.scss';

interface Props {
  title: string,
  option: string | number
}

export const TechSpecsItem: FC<Props> = ({ title, option }) => {
  return (
    <div className="techSpecs__item">
      <p className="techSpecs__item-title">
        {title}
      </p>

      <p className="techSpecs__item-text">
        {option}
      </p>
    </div>
  );
};
