import { createContext, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Product } from '../utils/typedefs';
import { hasProduct } from '../utils/hasProduct';

export interface ProductWithCount extends Product {
  count: number,
}

type CartLSUpdateContextType = {
  handleModifyCartLS: (product: Product, action: string) => void;
  cartProducts: ProductWithCount[],
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
  ] = useLocalStorage<ProductWithCount[]>('cart', []);

  const handleModifyCartLS = (product: Product, action: string) => {
    let tempCartProducts = [...cartProducts];

    switch (action) {
      case 'toggle':
        if (hasProduct(cartProducts, product.phoneId)) {
          tempCartProducts = cartProducts.filter(
            ({ phoneId }) => phoneId !== product.phoneId,
          );

          setCartProducts(tempCartProducts);

          return;
        }

        tempCartProducts = [...cartProducts, { ...product, count: 1 }];

        setCartProducts(tempCartProducts);

        break;

      case 'increment':
        tempCartProducts = cartProducts.map(cartProduct => {
          const tempCartProduct = { ...cartProduct };

          if (cartProduct.phoneId === product.phoneId) {
            tempCartProduct.count += 1;
          }

          return tempCartProduct;
        });

        setCartProducts(tempCartProducts);
        break;

      case 'decrement':
        tempCartProducts = cartProducts.map(cartProduct => {
          const tempCartProduct = { ...cartProduct };

          if (cartProduct.phoneId === product.phoneId) {
            tempCartProduct.count -= 1;
          }

          return tempCartProduct;
        });

        setCartProducts(tempCartProducts);
        break;

      default:
        break;
    }
  };

  return (
    <CartLSUpdateContext.Provider value={{ handleModifyCartLS, cartProducts }}>
      {children}
    </CartLSUpdateContext.Provider>
  );
};
