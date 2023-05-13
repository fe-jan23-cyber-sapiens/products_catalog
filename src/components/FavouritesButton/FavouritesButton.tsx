import {
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import classnames from 'classnames';
import './FavouritesButton.scss';
import { Product } from '../../utils/typedefs';
import { hasProduct } from '../../utils/hasProduct';
import { FavLSUpdateContext } from '../../context/FavLSUpdateContext';
import { ThemeContext } from '../../context/ThemeContext';
import { THEME_DARK } from '../../utils/constants';

type Props = {
  product: Product,
};

export const AddToFavourites: FC<Props> = ({ product }) => {
  const { theme } = useContext(ThemeContext);
  const { handleModifyFavLS, favProducts } = useContext(FavLSUpdateContext);
  const [isInFav, setIsInFav] = useState(false);

  useEffect(() => {
    setIsInFav(hasProduct(favProducts, product.id));
  }, [favProducts]);

  const darkIconHeart = theme === THEME_DARK;

  return (
    <button
      type="button"
      onClick={() => handleModifyFavLS(product)}
      className={classnames(
        'favourite-btn',
        {
          'favourite-btn--dark': darkIconHeart,
          'favourite-btn--selected': isInFav,
        },
      )}
      aria-label="favourites button"
    />
  );
};
