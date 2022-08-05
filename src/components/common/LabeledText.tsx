import React from 'react';
import { Box, Tooltip, Typography } from '@mui/material';
import { itemViewStyles } from './ItemView';


interface Props {
  label?: string,
  text?: string|number|null|undefined,
  toolTipText?: string,
}


const LabeledText = (props: Props) => {

  const {label, text, toolTipText} = props;

  const viewClasses = itemViewStyles;

  return (
    <div>
      <Tooltip title={toolTipText || ''}>
      <Box sx={viewClasses.textBlock}>
        <Typography sx={viewClasses.label} variant='h6'>
          {label}
        </Typography>
        <Typography sx={viewClasses.text} variant='body1'>
          {text}
        </Typography>
      </Box>
      </Tooltip>
    </div>
  )
};

export default LabeledText;