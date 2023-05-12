import { FC } from 'react';
import { ProductDetails } from '../../../utils/typedefs';
import { ColorButton } from '../ColorButton/ColorButton';
import { CapacityButton } from '../CapacityButton/CapacityButton';
import { TechSpecsItem } from '../TechSpecsItem/TechSpecsItem';
import './ProductActions.scss';

interface Props {
  product: ProductDetails;
}

export const ProductActions: FC<Props> = (props) => {
  const { product } = props;
  const {
    ram,
    screen,
    resolution,
    processor,
    priceRegular,
    priceDiscount,
    colorsAvailable,
    capacityAvailable,
  } = product;

  return (
    <div className="actions">
      <div className="actions__select">
        <p className="actions__small">Available colors</p>

        <div className="actions__buttons">
          {colorsAvailable.map((color) => (
            <ColorButton color={color} key={color} />
          ))}
        </div>
      </div>

      <div className="actions__select">
        <p className="actions__small">Select capacity</p>

        <div className="actions__buttons">
          {capacityAvailable.map((capacity) => (
            <CapacityButton
              capacity={capacity}
              product={product}
              key={capacity}
            />
          ))}
        </div>
      </div>

      <div className="actions__prices">
        <span className="actions__discount">{`$${priceDiscount}`}</span>

        <span className="actions__full">{`$${priceRegular}`}</span>
      </div>

      <div className="actions__button">
        <button type="button" className="actions__cart-button">
          Add to cart
        </button>
      </div>

      <div className="actions__characteristic">
        <TechSpecsItem title="Screen" option={screen} />

        <TechSpecsItem title="Resolution" option={resolution} />

        <TechSpecsItem title="Processor" option={processor} />

        <TechSpecsItem title="RAM" option={ram} />
      </div>
    </div>
  );
};
