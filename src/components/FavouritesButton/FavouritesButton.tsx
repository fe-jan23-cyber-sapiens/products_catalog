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

type Props = {
  product: Product,
};

export const AddToFavourites: FC<Props> = ({ product }) => {
  const { handleModifyFavLS, favProducts } = useContext(FavLSUpdateContext);
  const [isInFav, setIsInFav] = useState(false);

  useEffect(() => {
    setIsInFav(hasProduct(favProducts, product.phoneId));
  }, [favProducts]);

  return (
    <button
      type="button"
      onClick={() => handleModifyFavLS(product)}
      className={classnames(
        'favourite-btn',
        {
          'favourite-btn--selected': isInFav,
        },
      )}
      aria-label="favourites button"
    />
  );
};
