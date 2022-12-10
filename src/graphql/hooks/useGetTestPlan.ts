import {useState} from 'react';

import {useQuery} from '@apollo/client';

import getQuery from '../queries/testPlan.graphql.inactive';
import {
  TestPlan as TestPlanGraphQL,
  TestPlanQuery,
  TestPlanQueryVariables,
} from '../../generated/graphql';

import {TestPlan} from '../../models';

const Item = TestPlan;
type GetItem = TestPlanQuery;
type GetVariables = TestPlanQueryVariables;
type Item = TestPlan;

type Props = {
  id?: string|null,
  name?: string,
  model?: { new (): Item; },
}

const useGetBeverageGraphQL = (props?: Props) => {

  const {id, name, model=Item} = {...props};

  const [item, setItem] = useState<Item|null>(null);

  const {loading, error} = useQuery<GetItem, GetVariables>(getQuery, {
    variables: {testPlan: {id: id}},
    fetchPolicy: 'cache-and-network',
    skip: id == null && name == null,
    onCompleted: data => {
      if (data.testPlan != null) {
        const newItem = new model();
        newItem.setFromGraphQL(data.testPlan as TestPlanGraphQL);
        setItem(newItem);
      }
    },
  });

  return {
    item,
    gettingItem: loading,
    getError: error?.message || null,
  };
}

export default useGetBeverageGraphQL;