import React, {Fragment, ReactNode, useEffect, useState} from 'react';
import {useParams} from 'react-router';
import {
  CircularProgress,
  Typography
} from '@mui/material';

import {Item} from '../../models';
import {
  GetGraphQL,
  GetGraphQLPlaceholder,
  GetGraphQLProps,
} from '../../graphql/hooks/graphQLHookTypes';

export const BUTTON_VARIANT = 'outlined';

export const itemViewStyles = {
  root: {
    marginLeft: 10,
  },
  title: {
    marginTop: 15,
  },
  body: {
    marginTop: 10,
  },
  header: {
    display: 'inline-flex',
    width: '100%',
  },
  info: {
    display: 'inline-flex',
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  editButton: {
    float: 'inline-end',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginRight: 10,
  },
  leftCentered: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    height: 400,
    maxWidth: 400,
    width: '50vw',
    objectFit: 'contain',
    display: 'block',
  },
  textBlock: {
    display: 'inline-flex',
  },
  label: {
    minWidth: 75,
  },
  text: {
    marginLeft: 20,
  },
  error: {
    color: 'red',
  }
};

// Props passed into ItemView parents
export type ItemViewProps<T extends Item> = {
  item?: T | null,
  id?: string|null,
  ignoreParamId?: boolean,
};

type Props<T extends Item> = ItemViewProps<T> & {
  useGetGraphQL?: GetGraphQL<T>,
  useGetGraphQLProps?: GetGraphQLProps<T>,
  viewRenderer: (item: T|null) => ReactNode,
}

function ItemView<T extends Item>(props: Props<T>) {

  const {
    item, id,
    useGetGraphQL = GetGraphQLPlaceholder, useGetGraphQLProps,
    viewRenderer, ignoreParamId=false} = props;

  //console.log('ItemView');

  const classes = itemViewStyles;

  const {id: paramId} = useParams();

  const [resolvedId, setResolvedId] = useState<string|undefined>(undefined);
  useEffect(() => {
    if (id != null) {
      setResolvedId(id);
    } else if (!ignoreParamId && paramId != null) {
      setResolvedId(paramId);
    } else {
      setResolvedId(undefined);
    }
  }, [id, paramId, ignoreParamId]);

  const {item: graphQLItem, gettingItem, getError} =
    useGetGraphQL({currentId: resolvedId, ...useGetGraphQLProps});

  const [resolvedItem, setResolvedItem] = useState<T|null>(null);
  useEffect(() => {
    if (graphQLItem != null) {
      setResolvedItem(graphQLItem);
    } else if (item != null) {
      setResolvedItem(item);
    }
  }, [item, graphQLItem]);

  // "Not found" will be displayed prematurely since a cycle or two may be required
  // between initial graphQL call and loading state set to true
  const [waitIsOver, setWaitIsOver] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => setWaitIsOver(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (gettingItem) {
    return <CircularProgress/>
  }

  if (resolvedItem == null) {
    if (resolvedId != null && waitIsOver) {
      return (
        <Typography
          sx={classes.title}
          variant='h2'
        >
          Not found
        </Typography>
      );
    } else {
      return null;
    }
  }

  if (getError) {
    return (
        <Typography
          sx={classes.error}
          color='error'
          variant='body1'
        >
          {getError}
        </Typography>
    );
  }

  return (
    <Fragment>
      {viewRenderer(resolvedItem)}
    </Fragment>
  );
}

export default ItemView;