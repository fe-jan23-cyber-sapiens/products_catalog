import { createContext, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Product } from '../utils/typedefs';
import { hasProduct } from '../utils/hasProduct';

type CartLSUpdateContextType = {
  handleModifyCartLS: (product: Product) => void;
  cartProducts: Product[],
};

export const CartLSUpdateContext = createContext<
CartLSUpdateContextType
>({
  handleModifyCartLS: () => {},
  cartProducts: [],
});

type LocalStorageProviderProps = {
  children: ReactNode;
};

export const CartLSUpdateProvider = ({
  children,
}: LocalStorageProviderProps) => {
  const [
    cartProducts,
    setCartProducts,
  ] = useLocalStorage<Product[]>('cart', []);

  const handleModifyCartLS = (product: Product) => {
    const isAlreadyAdded = hasProduct(cartProducts, product.phoneId);

    if (isAlreadyAdded) {
      const newProducts = cartProducts.filter(
        ({ phoneId }) => phoneId !== product.phoneId,
      );

      setCartProducts(newProducts);

      return;
    }

    const newProducts = [...cartProducts, product];

    setCartProducts(newProducts);
  };

  return (
    <CartLSUpdateContext.Provider value={{ handleModifyCartLS, cartProducts }}>
      {children}
    </CartLSUpdateContext.Provider>
  );
};
