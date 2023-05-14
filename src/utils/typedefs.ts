export interface DescriptionItem {
  text: string[];
  title: string;
}

export interface ProductDetails {
  id: string,
  namespaceId: string,
  name: string,
  capacityAvailable: string[],
  capacity: string,
  priceRegular: number,
  priceDiscount: number,
  colorsAvailable: string[],
  color: string,
  images: string[],
  description: DescriptionItem[],
  screen: string,
  resolution: string,
  processor: string,
  ram: string,
  camera: string,
  zoom: string,
  cell: string[],
}

export interface Product {
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

export interface Mate {
  name: string;
  imgURL: string;
  liURL: string;
  ghURL: string;
  phone: string;
  email: string;
}
