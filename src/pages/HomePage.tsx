import { SecondarySlider } from '../components/SecondarySlider';

const products = [
  'product1',
  'product2',
  'product3',
  'product4',
  'product5',
  'product6',
  'product7',
  'product8',
  'product9',
  'product10',
  'product11',
  'product12',
];

export const HomePage = () => {
  return <SecondarySlider products={products} title="Brand new models" />;
};
