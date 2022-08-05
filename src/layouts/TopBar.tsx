import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';

const classes = {
  root: {},
  toolbar: {
    height: 64
  }
};

type Props = {
  className?: string,
}

const TopBar = ({ className, ...rest }: Props) => {

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar sx={classes.toolbar}>
        <RouterLink to='/'>
          <Typography variant='h4'>
            Logo
          </Typography>
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;