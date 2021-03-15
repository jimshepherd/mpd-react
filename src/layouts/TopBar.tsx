import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
  root: {},
  toolbar: {
    height: 64
  }
}));

type Props = {
  className?: string,
}

const TopBar = ({ className, ...rest }: Props) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
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