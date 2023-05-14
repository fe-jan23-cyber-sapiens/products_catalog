import { Product } from './typedefs';

enum SortType {
  Price = 'price',
  Discount = 'discount',
  Year = 'year',
}

export const getSortedBy = (phones: Product[],
  sortBy: SortType): Product[] => {
  switch (sortBy) {
    case SortType.Price:
      return phones.sort((a, b) => Number(a.price) - Number(b.price));
    case SortType.Discount:
      return phones.map(phone => ({
        ...phone,
        discountPrice: phone.fullPrice - Number(phone.price),
      })).sort((a, b) => b.discountPrice - a.discountPrice);
    case SortType.Year:
      return phones.sort((a, b) => b.year - a.year);
    default:
      return phones;
  }
};
