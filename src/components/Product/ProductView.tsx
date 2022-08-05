import React from 'react';
import { useNavigate } from 'react-router';
import { Box } from '@mui/material';

import LabeledText from '../common/LabeledText';
import LabeledList from '../common/LabeledList';
import useListProductSpecifications from '../../graphql/hooks/useListProductSpecifications';
import useListTestPlans from '../../graphql/hooks/useListTestPlans';
import { Product, ProductSpecification, TestPlan } from '../../models';


const noneProductSpecification = new ProductSpecification();
noneProductSpecification.name = 'None';

const noneTestPlan = new TestPlan();
noneTestPlan.name = 'None';

type Props = {
  product?: Product
}

export const ProductView = (props: Props = {}) => {

  console.log('ProductView');

  const { product } = props;

  const navigate = useNavigate();
  const { items: specs, loading: loadingSpecs } = useListProductSpecifications({
    product: product,
    requireProduct: true,
  });

  const { items: plans, loading: loadingPlans } = useListTestPlans({
    product: product,
    requireProduct: true,
  });

  const handleSelectSpecification = (item: ProductSpecification) => {
    console.log('Selected specification', item);
    navigate('/app/product_specification/'+item.id);
  }

  const handleSelectTestPlan = (item: TestPlan) => {
    console.log('Selected test plan', item);
    navigate('/app/test_plan/'+item.id);
  }

  if (product == null) {
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
          text={product?.name}
      />
      <LabeledList
          label='Product Specifications'
          items={displaySpecs}
          onSelect={handleSelectSpecification}
      />
      <LabeledList
          label='Test Plan'
          items={displayPlans}
          onSelect={handleSelectTestPlan}
      />
    </div>
  );
};

export default ProductView;