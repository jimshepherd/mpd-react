import {useEffect, useState} from 'react';
import { useQuery} from '@apollo/client';

import { Product, ProductSpecification } from '../../models';
import productSpecificationsQuery from '../queries/productSpecifications.graphql';
import {
  ProductSpecificationsQuery,
  ProductSpecificationsQueryVariables,
} from '../../generated/graphql';


type Props = {
  product?: Product,
  requireProduct?: boolean,
}

const useListProductSpecifications = (props: Props = {}) => {

  console.log('useListProductSpecifications', props);

  const { product, requireProduct=false } = props;

  const [items, setItems] = useState<ProductSpecification[]|null>();

  const { data, error, loading } = useQuery<ProductSpecificationsQuery, ProductSpecificationsQueryVariables>(
    productSpecificationsQuery,
    {
      skip: requireProduct && (product == null),
      variables: {product: product?.toInput()},
    }
  );

  useEffect(() => {
      setItems(data?.productSpecifications?.map(p => ProductSpecification.fromGraphQL(p)));
    }, [data]);

  return {
    items,
    error,
    loading,
  };
}


export default useListProductSpecifications;
