import { useState } from 'react';
import { useQuery} from '@apollo/client';

import { Attribute } from '../../models';
import { AttributesQuery, AttributesQueryVariables } from '../../generated/graphql';
import attributesQuery from '../queries/attributes.graphql';


type Props = {
  parent?: Attribute,
}

const useListAttributes = (props: Props = {}) => {

  console.log('useListAttributes', props);

  const { parent } = props;

  const [items, setItems] = useState<Attribute[]|null>();

  const { error, loading } = useQuery<AttributesQuery, AttributesQueryVariables>(
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
