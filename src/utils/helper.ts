import { Product } from './typedefs';

export enum SortType {
  Price = 'Price',
  Discount = 'Discount',
  Newest = 'Newest',
}

export const getSortedBy = (
  phones: Product[],
  sortBy: SortType,
): Product[] => {
  const sortedProducts = [...phones];

  switch (sortBy) {
    case SortType.Price:
      return sortedProducts.sort((a, b) => Number(a.price) - Number(b.price));

    case SortType.Discount:
      return sortedProducts.map(phone => ({
        ...phone,
        discountPrice: phone.fullPrice - Number(phone.price),
      })).sort((a, b) => b.discountPrice - a.discountPrice);

    case SortType.Newest:
      return sortedProducts.sort((a, b) => b.year - a.year);

    default:
      return phones;
  }
};
