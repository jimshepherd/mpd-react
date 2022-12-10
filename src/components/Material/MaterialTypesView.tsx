import React, { ElementType, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Grid,
  IconButton,
  List, ListItemButton, ListItemSecondaryAction, ListItemText,
  Typography,
} from '@mui/material';
import {
  TreeItem, TreeView,
} from '@mui/lab';
import { ChevronRight, Edit, ExpandMore } from '@mui/icons-material';

import { BUTTON_VARIANT } from '../common/ItemView';
import useListMaterialTypes from '../../graphql/hooks/useListMaterialTypes';
import { MaterialType } from '../../models';
import MaterialTypeView from './MaterialTypeView';
import { createTree, TreeObject } from '../../helpers/createTree';


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
  model?: typeof MaterialType,
  typeName?: string,
  //parent?: MaterialType,
  title?: string,
  ViewComponent?: ElementType,
  EditComponent?: ElementType,
}

export const MaterialTypesView = (props: Props) => {
  //console.log('Refreshing AttributesList');

  const {model=MaterialType, typeName='Material Type', title='Material Types',
         ViewComponent=MaterialTypeView, //EditComponent=AttributeEdit
  } = props;

  const [id, setId] = useState<string|null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [product, setProduct] = useState<MaterialType|null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number|null>(null);

  const [itemsTree, setItemsTree] = useState<TreeObject<MaterialType>[]|null>(null);

  const {items} = useListMaterialTypes();

  // const {canContribute} = useContext(AuthContext);
  const canContribute = true;

  useEffect(() => {
    setItemsTree(createTree(items));
  }, [items]);

  const handleAdd = () => {
    setId(null);
    setSelectedIndex(null);
    setIsEditing(true);
  };

  const handleDoneEditing = () => {
    setIsEditing(false);
    setSelectedIndex(null);
  };

  const handleEdit = (item: MaterialType) => {
    if (item.id != null) {
      setId(item.id);
      setIsEditing(true);
    }
  };

  const handleSelect = (item: MaterialType, index: number) => {
    setSelectedIndex(index);
    setProduct(item);
    setIsEditing(false);
    item.id && setId(item.id);
  };

  const renderTree = (nodes: TreeObject<MaterialType> | null) => (
    nodes?.id && <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );

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
    <Box sx={classes.root}>
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
      <TreeView
        aria-label='Material Types List'
        defaultCollapseIcon={<ExpandMore />}
        defaultExpandIcon={<ChevronRight />}
        sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
      >
        {itemsTree?.map(treeNode => renderTree(treeNode))}
      </TreeView>
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
    </Box>
  );
};

export default MaterialTypesView;