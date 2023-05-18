import { Product } from './typedefs';

export const findProducts = (products: Product[], text: string) => {
  return products.filter(
    item => item.name.toLowerCase().includes(text.toLowerCase()),
  );
};

export const getSortedBy = (
  phones: Product[],
  sortBy: string,
): Product[] => {
  const sortedProducts = [...phones];

  switch (sortBy) {
    case 'price':
      return sortedProducts.sort((a, b) => Number(a.price) - Number(b.price));

    case 'discount':
      return sortedProducts.map(phone => ({
        ...phone,
        discountPrice: phone.fullPrice - Number(phone.price),
      })).sort((a, b) => b.discountPrice - a.discountPrice);

    case 'newest':
      return sortedProducts.sort((a, b) => b.year - a.year);

    default:
      return phones;
  }
};
