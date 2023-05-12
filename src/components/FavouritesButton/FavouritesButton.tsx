import React from 'react';
import { CustomButton } from '../Button/Button';
import './FavouritesButton.scss';
import favouriteIcon from '../../assets/heart_icon.svg';

interface Props {
  size: string,
}
export const AddToFavourites: React.FC<Props> = ({ size }) => {
  return (
    <CustomButton
      btnWidth={size}
      btnHeight={size}
      btnType="button"
    >
      <img
        src={favouriteIcon}
        alt="Favourite"
      />
    </CustomButton>
  );
};
