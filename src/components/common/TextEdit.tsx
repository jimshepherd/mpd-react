import {TextField, Tooltip} from '@mui/material';
import React, {ChangeEvent, ReactElement, useState} from 'react';
import {itemEditStyles} from './ItemEdit';

export type InputEvent = ChangeEvent<HTMLInputElement>;
export type SelectEvent = ChangeEvent<HTMLInputElement>;


type Props = {
  error?: string | null,
  label?: string | ReactElement | null,
  multiline?: boolean,
  name?: string,
  tooltip?: string,
  onBlur?: () => void,
  onChange?: (event: InputEvent|SelectEvent) => void,
  value?: string | null,
  variant?:  'filled' | 'standard' | 'outlined',
};

const TextEdit = (props: Props) => {

  const {error, label, multiline=false, name, tooltip, onBlur, onChange, value, variant} = props;

  const editClasses = itemEditStyles;
  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false);

  const handleTooltip = (open: boolean) => {
    if (tooltip != null) {
      setTooltipOpen(open);
    }
  }

  return (
    <Tooltip
      title={tooltip||''}
      open={tooltipOpen}
      placement='bottom-start'
    >
      <TextField
        autoComplete='off'
        sx={editClasses.textField}
        error={error != null}
        fullWidth
        helperText={error}
        label={label}
        multiline={multiline}
        onChange={onChange}
        onBlur={onBlur}
        type='text'
        value={value || ''}
        variant={variant || 'outlined'}
        onMouseEnter={() => {handleTooltip(true)}}
        onMouseLeave={() => {handleTooltip(false)}}
        onClick={() => {handleTooltip(false)}}
        {...(name && {'name': name})}
      />
    </Tooltip>
  );
}

export default TextEdit;