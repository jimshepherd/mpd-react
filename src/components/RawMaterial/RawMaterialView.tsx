import React from 'react';
import { Box } from '@mui/material';

import LabeledText from '../common/LabeledText';
import { Material, ProductSpecification, TestPlan } from '../../models';


const noneProductSpecification = new ProductSpecification();
noneProductSpecification.name = 'None';

const noneTestPlan = new TestPlan();
noneTestPlan.name = 'None';

type Props = {
  material?: Material
}

export const RawMaterialView = (props: Props = {}) => {

  console.log('RawMaterialView');

  const { material } = props;

  if (material == null) {
    return (
      <Box/>
    )
  }

  const displaySpecs = (specs == null || specs.length === 0) && !loadingSpecs
    ? [noneProductSpecification]
    : specs

  const displayPlans = (plans == null || plans.length === 0) && !loadingPlans
    ? [noneTestPlan]
    : plans

  return (
    <div>
      <LabeledText
          label='Name'
          text={material?.name}
      />
    </div>
  );
};

export default ProductView;