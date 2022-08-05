import React, { useState } from 'react';
import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select, Tooltip
} from '@mui/material';
import clsx from 'clsx';
import { SelectEvent } from '../../helpers/useFormValidation';

const classes = {
  formControl: {
    //margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
};

type SelectItem = {
  id?: string|null,
  name?: string|null,
  picklistName?: string,
  [key: string]: any,
}

type Props<T> = {
  className?: string,
  id?: string,
  items?: T[],
  label?: string|null,
  name: string,
  onChange?: (values: T) => void,
  tooltip?: string,
  value?: T | string | null,
}

const SingleSelect = <T extends SelectItem | string>(props: Props<T>) => {

  const {className, id, items, label, name, onChange, tooltip, value} = props;

  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false);

  const handleTooltip = (open: boolean) => {
    if (tooltip != null) {
      setTooltipOpen(open);
    }
  }

  const handleChange = (event: SelectEvent) => {
    event.persist();
    if (onChange != null && items != null) {
      const selected = event.target.value;
      let match: T | undefined;
      match = (items as SelectItem[]).find(
        (item: SelectItem) => item.picklistName && selected === item.picklistName
      ) as T|undefined;
      if (match != null) {
        onChange(match);
        return;
      }
      match = (items as SelectItem[]).find(
        (item: SelectItem) => item.name && selected === item.name
      ) as T|undefined;
      if (match != null) {
        onChange(match);
        return;
      }
      match = (items as string[]).find(item => selected === item) as T|undefined;
      if (match != null) {
        onChange(match);
        return;
      }
    }
  };

  const valueString = (value as SelectItem)?.picklistName
    || (value as SelectItem)?.name
    || value as string
    || '';

  const _id = id || name;

  return (
    <div className={className} id={_id}>
      <Tooltip title={tooltip||''} open={tooltipOpen}>
        <FormControl className={clsx(classes.formControl, className)}>
          <InputLabel
            id={`${_id}-label`}
            onMouseEnter={() => {handleTooltip(true)}}
            onMouseLeave={() => {handleTooltip(false)}}
          >
            {label}
          </InputLabel>
          <Select
            id={`${_id}-select`}
            labelId={`${name}-label`}
            name={name}
            value={valueString}
            onChange={(event) =>
                handleChange(event as SelectEvent)}
            onMouseEnter={() => {handleTooltip(true)}}
            onMouseLeave={() => {handleTooltip(false)}}
            onOpen={() => {handleTooltip(false)}}
            input={<Input id={`${_id}-input`} />}
          >
            {items && items.map((item, i) => {
              const itemString =
                (item as SelectItem).picklistName
                || (item as SelectItem).name
                || item as string;
              return (
                <MenuItem key={i} value={itemString}>
                  {itemString}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Tooltip>
    </div>
  );
};

export default SingleSelect;
