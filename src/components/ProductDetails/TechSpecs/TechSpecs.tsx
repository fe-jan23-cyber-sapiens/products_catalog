import { FC } from 'react';
import { ProductDetails } from '../../../typedefs';
import { TechSpecsItem } from '../TechSpecsItem/TechSpecsItem';

interface Props {
  product: ProductDetails;
}

export const TechSpecs: FC<Props> = (props) => {
  const { product } = props;
  const {
    screen,
    resolution,
    processor,
    capacity,
    camera,
    zoom,
    ram,
    cell,
  } = product;

  return (
    <>
      <TechSpecsItem title="Screen" option={screen} />
      <TechSpecsItem title="Resolution" option={resolution} />
      <TechSpecsItem title="Processor" option={processor} />
      <TechSpecsItem title="Screen" option={screen} />
      <TechSpecsItem title="RAM" option={ram} />
      <TechSpecsItem title="Built in memory" option={capacity} />
      <TechSpecsItem title="Camera" option={camera} />
      <TechSpecsItem title="Zoom" option={zoom} />
      <TechSpecsItem title="Cell" option={cell.splice(0, 3).join(',')} />
    </>
  );
};
