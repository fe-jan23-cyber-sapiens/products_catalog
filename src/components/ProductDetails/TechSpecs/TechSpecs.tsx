import { FC, memo } from 'react';
import { ProductDetails } from '../../../utils/typedefs';
import { TechSpecsItem } from '../TechSpecsItem';

interface Props {
  product: ProductDetails;
}

export const TechSpecs: FC<Props> = memo((props) => {
  const { product } = props;
  const {
    screen,
    resolution,
    processor,
    capacity,
    camera,
    zoom,
    ram,
  } = product;

  return (
    <>
      <TechSpecsItem title="Screen" option={screen} />
      <TechSpecsItem title="Resolution" option={resolution} />
      <TechSpecsItem title="Processor" option={processor} />
      <TechSpecsItem title="RAM" option={ram} />
      <TechSpecsItem title="Built in memory" option={capacity} />
      <TechSpecsItem title="Camera" option={camera} />
      <TechSpecsItem title="Zoom" option={zoom} />
    </>
  );
});
