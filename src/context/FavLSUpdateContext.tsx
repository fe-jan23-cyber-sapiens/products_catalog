import { createContext, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Product } from '../utils/typedefs';
import { hasProduct } from '../utils/hasProduct';

type FavLSUpdateContextType = {
  handleModifyFavLS: (product: Product) => void;
  favProducts: Product[],
};

export const FavLSUpdateContext = createContext<FavLSUpdateContextType>({
  handleModifyFavLS: () => {},
  favProducts: [],
});

type LocalStorageProviderProps = {
  children: ReactNode;
};

export const FavLSUpdateProvider = ({
  children,
}: LocalStorageProviderProps) => {
  const [
    favProducts,
    setFavProducts,
  ] = useLocalStorage<Product[]>('favourites', []);

  const handleModifyFavLS = (product: Product) => {
    const isAlreadyAdded = hasProduct(favProducts, product.phoneId);

    if (isAlreadyAdded) {
      const newProducts = favProducts.filter(
        ({ phoneId }) => phoneId !== product.phoneId,
      );

      setFavProducts(newProducts);

      return;
    }

    const newProducts = [...favProducts, product];

    setFavProducts(newProducts);
  };

  return (
    <FavLSUpdateContext.Provider value={{ handleModifyFavLS, favProducts }}>
      {children}
    </FavLSUpdateContext.Provider>
  );
};
