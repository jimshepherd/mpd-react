import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { Product, TestPlan } from '../../models';
import testPlansQuery from '../queries/testPlans.graphql.inactive';
import {
  TestPlansQuery,
  TestPlansQueryVariables,
} from '../../generated/graphql';


type Props = {
  product?: Product,
  requireProduct?: boolean,
}

const useListTestPlans = (props: Props = {}) => {

  console.log('useListTestPlans', props);

  const { product, requireProduct=false } = props;

  const [items, setItems] = useState<TestPlan[]|null>();

  const { data, error, loading } = useQuery<TestPlansQuery, TestPlansQueryVariables>(
    testPlansQuery,
    {
      skip: requireProduct && (product == null),
      variables: {product: product?.toInput()},
    }
  );

  useEffect(() => {
      setItems(data?.testPlans?.map(p => TestPlan.fromGraphQL(p)));
    }, [data]);

  return {
    items,
    error,
    loading,
  };
}


export default useListTestPlans;
