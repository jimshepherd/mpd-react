import { useState } from 'react';
import { useQuery} from '@apollo/client';

import { MaterialType } from '../../models';
import { MaterialTypesQuery, MaterialTypesQueryVariables } from '../../generated/graphql';
import materialTypesQuery from '../queries/materialTypes.graphql';


type Props = {
  ancestor?: MaterialType,
}

const useListMaterialTypes = (props: Props = {}) => {

  console.log('useListMaterialTypes', props);

  const { ancestor } = props;

  const [items, setItems] = useState<MaterialType[]|null>();

  const { error, loading } = useQuery<MaterialTypesQuery, MaterialTypesQueryVariables>(
    materialTypesQuery,
    {
      variables: {ancestor: ancestor},
      onCompleted: data => {
        setItems(data.materialTypes?.map(mt => MaterialType.fromGraphQL(mt)));
      },
    }
  );

  return {
    items,
    error,
    loading,
  };
}


export default useListMaterialTypes;
