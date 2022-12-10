import React, { ElementType, useContext, useState } from 'react';
import {
  Button,
  Grid,
  IconButton,
  List, ListItemButton, ListItemSecondaryAction, ListItemText,
  Typography
} from '@mui/material';
import { Edit } from '@mui/icons-material';

import { BUTTON_VARIANT } from '../common/ItemView';
import useListProducts from '../../graphql/hooks/useListProducts';
import { Product } from '../../models';
import { ProductView } from './ProductView';


const classes = {
  root: {
    width: '100%',
    //backgroundColor: theme.palette.background.paper,
  },
  list: {
    width: '100%',
    maxHeight: '60vh',
    maxWidth: 360,
    overflow: 'auto',
  },
  title: {
    //marginTop: theme.spacing(3)
  },
};


type Props = {
  model?: typeof Product,
  typeName?: string,
  //parent?: Attribute,
  title?: string,
  ViewComponent?: ElementType,
  EditComponent?: ElementType,
}

export const ProductsView = (props: Props) => {
  //console.log('Refreshing AttributesList');

  const {model=Product, typeName='Product', title='Products',
         ViewComponent=ProductView, //EditComponent=AttributeEdit
  } = props;

  const [id, setId] = useState<string|null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [product, setProduct] = useState<Product|null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number|null>(null);

  const {items} = useListProducts();

  // const {canContribute} = useContext(AuthContext);
  const canContribute = true;

  const handleAdd = () => {
    setId(null);
    setSelectedIndex(null);
    setIsEditing(true);
  };

  const handleDoneEditing = () => {
    setIsEditing(false);
    setSelectedIndex(null);
  };

  const handleEdit = (item: Product) => {
    if (item.id != null) {
      setId(item.id);
      setIsEditing(true);
    }
  };

  const handleSelect = (item: Product, index: number) => {
    setSelectedIndex(index);
    setProduct(item);
    setIsEditing(false);
    item.id && setId(item.id);
  };

  const renderComponent = () => {
    if (isEditing) {
      return (
          <ViewComponent id={id}/>
        /*
        <EditComponent
          id={id}
          onComplete={handleDoneEditing}
          onDelete={handleDoneEditing}
          ingredients={items}
          model={model}
          typeName={typeName}
        />
        */
      );
    } else {
      return (
        <ViewComponent
            id={id}
            product={product}
        />
      );
    }
  };

  return (
    <Grid container sx={classes.root}>
      <Grid item xs={6}>
        <Typography sx={classes.title} variant='h2'>
          {title}
        </Typography>
        {canContribute &&
          <Button
            size='small'
            color='primary'
            variant={BUTTON_VARIANT}
            onClick={handleAdd}
          >
            Add A New {typeName}
          </Button>
        }
        <List sx={classes.list} dense>
          {items?.map((item, i) => (
            <ListItemButton
              key={i}
              divider
              selected={selectedIndex === i}
              onClick={() => handleSelect(item, i)}
            >
              <ListItemText
                primary={item.name}
              />
              {canContribute &&
                <ListItemSecondaryAction>
                  <IconButton
                    edge='end'
                    aria-label='edit'
                    onClick={() => handleEdit(item)}
                  >
                    <Edit/>
                  </IconButton>
                </ListItemSecondaryAction>
              }
            </ListItemButton>
          ))}
        </List>
      </Grid>
      <Grid item xs={6}>
        {renderComponent()}
      </Grid>
    </Grid>
  );
};

export default ProductsView;