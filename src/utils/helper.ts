interface Phone {
  id: number;
  category: string;
  phoneId: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: string;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
  createdAt: string;
  updatedAt: string;
}

function sortByPrice(phones: Phone[]): Phone[] {
  return phones.sort((a, b) => Number(a.price) - Number(b.price));
}

function sortByDiscount(phones: Phone[]): Phone[] {
  return phones.map(phone => ({
    ...phone,
    discountPrice: phone.fullPrice - Number(phone.price),
  }))
    .sort((a, b) => b.discountPrice - a.discountPrice);
}

function sortByYear(phones: Phone[]): Phone[] {
  return phones.sort((a, b) => b.year - a.year);
}
