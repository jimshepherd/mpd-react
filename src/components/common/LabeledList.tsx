import { useState } from 'react';
import {
  Box,
  List, ListItemButton, ListItemText,
  Typography,
} from '@mui/material';
import { itemViewStyles } from './ItemView';


type SelectItem = {
  id?: string|null,
  name?: string|null,
  picklistName?: string,
  [key: string]: any,
}


type Props<T> = {
  label?: string,
  items?: T[] | null | undefined,
  onSelect?: (item: T) => void,
}

const LabeledList = <T extends SelectItem | string>(props: Props<T>) => {

  const {
    label, items, onSelect
  } = props;

  const viewClasses = itemViewStyles;
  const [selectedIndex, setSelectedIndex] = useState<number|null>();

  const handleSelect = (index: number, item: T) => {
    setSelectedIndex(index);
    onSelect && onSelect(item);
  };

  return (
    <Box>
      <Box sx={viewClasses.textBlock}>
        {label &&
          <Typography sx={viewClasses.label} variant='h6'>
            {label}
          </Typography>
        }
      </Box>
      <Box sx={viewClasses.text}>
        <List>
          {items && items.map((item, i) => {
            const itemString =
              (item as SelectItem).picklistName
              || (item as SelectItem).name
              || item as string;

            return (
              <ListItemButton
                key={i}
                selected={selectedIndex === i}
                onClick={() => handleSelect(i, item)}
              >
                <ListItemText primary={itemString}/>
              </ListItemButton>
            )
          })}
        </List>
      </Box>
    </Box>
  )
};

export default LabeledList;