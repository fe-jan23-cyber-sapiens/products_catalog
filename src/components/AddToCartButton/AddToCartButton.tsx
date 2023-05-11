import React from 'react';
import { CustomButton } from '../Button/Button';
import './AddToCartButton.scss';

interface Props {
  height: string,
}

export const AddToCart: React.FC<Props> = ({ height }) => {
  return (
    <CustomButton
      btnWidth="100%"
      btnHeight={`${height}`}
      btnType="button"
    >
      Add to cart
    </CustomButton>
  );
};
