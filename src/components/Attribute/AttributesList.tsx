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
import useListAttributes from '../../graphql/hooks/useListAttributes';
import { Attribute } from '../../models';
import { AttributeEdit, AttributeView } from './index';


const classes = {
  root: {
    width: '100%',
    // backgroundColor: theme.palette.background.paper,
  },
  list: {
    width: '100%',
    maxHeight: '60vh',
    maxWidth: 360,
    overflow: 'auto',
  },
  title: {
    // marginTop: theme.spacing(3)
  },
};


type Props = {
  model?: typeof Attribute,
  typeName?: string,
  parent?: Attribute,
  title?: string,
  ViewComponent: ElementType,
  EditComponent: ElementType,
}

const AttributesList = (props: Props) => {
  //console.log('Refreshing AttributesList');

  const {model=Attribute, typeName='Attribute', parent, title='Attributes',
    ViewComponent=AttributeView, EditComponent=AttributeEdit} = props;

  //const classes = useStyles();

  const [id, setId] = useState<string|null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number|null>(null);

  const {items} = useListAttributes({parent: parent});

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

  const handleEdit = (item: Attribute) => {
    if (item.id != null) {
      setId(item.id);
      setIsEditing(true);
    }
  };

  const handleSelect = (item: Attribute, index: number) => {
    setSelectedIndex(index);
    setIsEditing(false);
    item.id && setId(item.id);
  };

  const renderComponent = () => {
    if (isEditing) {
      return (
        <EditComponent
          id={id}
          onComplete={handleDoneEditing}
          onDelete={handleDoneEditing}
          ingredients={items}
          model={model}
          typeName={typeName}
        />
      );
    } else {
      return (
        <ViewComponent id={id}/>
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

export default AttributesList
