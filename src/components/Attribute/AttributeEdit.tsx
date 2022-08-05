import React from 'react';

import useListAttributes from '../../graphql/hooks/useListAttributes';


export const AttributeEdit= () => {

  console.log('AttributeView');

  const { items } = useListAttributes();

  return (
    <div>
      {items?.map(i => <p key={i.id}>{i.name}</p>)}
    </div>
  );
};

export default AttributeEdit;