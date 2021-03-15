import { useQuery} from '@apollo/client';

import { Attribute } from '../../models';
import { Attributes, AttributesVariables } from '../types/Attributes';
import attributesQuery from '../queries/attributes.graphql';
import {useState} from 'react';


type Props = {
  parent?: Attribute,
}

const useListAttributes = (props: Props = {}) => {

  console.log('useListAttributes', props);

  const { parent } = props;

  const [items, setItems] = useState<Attribute[]|null>();

  const { error, loading } = useQuery<Attributes, AttributesVariables>(
    attributesQuery,
    {
      variables: {parent: parent},
      onCompleted: data => {
        setItems(data.attributes?.map(a => Attribute.fromGraphQL(a)));
      },
    }
  );

  return {
    items,
    error,
    loading,
  };
}


export default useListAttributes;
