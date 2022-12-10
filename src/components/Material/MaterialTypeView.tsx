import React, {Fragment, FunctionComponent, ReactNode} from 'react';
import {Typography} from '@mui/material';

import {itemViewStyles} from '../common/ItemView';
import {MaterialType} from '../../models';


interface Props {
  materialType: MaterialType,
  model?: typeof MaterialType,
  additionalFieldRenderer?: (item: MaterialType|null) => ReactNode,
}

const MaterialTypeView: FunctionComponent<Props> = props => {

  const {materialType, model=MaterialType, additionalFieldRenderer} = props;
  //console.log('MaterialTypeView', materialType);

  const classes = itemViewStyles;

  return (
      <Fragment>
        <Typography sx={classes.title} variant='h2'>
          {materialType?.name}
        </Typography>
        <Typography sx={classes.body} variant='body1'>
          {materialType?.description}
        </Typography>
        {additionalFieldRenderer && additionalFieldRenderer(materialType)}

      </Fragment>
  )
};

export default MaterialTypeView;