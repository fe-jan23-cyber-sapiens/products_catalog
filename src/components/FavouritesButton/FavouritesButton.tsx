import { FC } from 'react';
import classnames from 'classnames';
import './FavouritesButton.scss';

type Props = {
  isAddedToFavourites: boolean,
};

export const AddToFavourites: FC<Props> = ({ isAddedToFavourites }) => {
  return (
    <div
      className={classnames(
        'favourite-btn',
        {
          'favourite-btn--selected': isAddedToFavourites,
        },
      )}
    />
  );
};
