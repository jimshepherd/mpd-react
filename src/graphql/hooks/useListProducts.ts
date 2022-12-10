import { useQuery} from '@apollo/client';

import { Product } from '../../models';
import { Products } from '../types/Products';
import productsQuery from '../queries/products.graphql.inactive';
import {useState} from 'react';


type Props = {
}

const useListProducts = (props: Props = {}) => {

  console.log('useListAttributes', props);

  const {  } = props;

  const [items, setItems] = useState<Product[]|null>();

  const { error, loading } = useQuery<Products>(
    productsQuery,
    {
      onCompleted: data => {
        setItems(data.products?.map(p => Product.fromGraphQL(p)));
      },
    }
  );

  return {
    items,
    error,
    loading,
  };
}


export default useListProducts;
