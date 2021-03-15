import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery} from '@apollo/client';
import { Button, Divider, MenuList, MenuItem, Popper } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import Loading from '../components/common/Loading';
import currentUserQuery from '../graphql/queries/currentUser.graphql';


const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
  dropdownItem: {

  },
}));


const Profile = () => {

  const classes = useStyles();

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const { loading, data: { currentUser } = {}, client } = useQuery(
    currentUserQuery,
    { fetchPolicy: 'network-only' }
  );

  const handleClickProfile = (event: any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleCloseProfile = () => {
    setAnchorEl(null);
  };

  const handleSignOut = async () => {
    setAnchorEl(null);
    localStorage.removeItem('token');
    await client.clearStore();
    navigate('/');
  };

  if (loading) {
    return <Loading/>;
  }

  if (currentUser == null) {
    return (
      <Button
        href='/signin'
        color='inherit'
        variant='outlined'
        className={classes.link}
      >
        Sign In
      </Button>
    );
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <Button
        color='inherit'
        aria-describedby={id}
        onClick={handleClickProfile}
      >
        <Person/>
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <MenuList role='menu'>
          <MenuItem
            onClick={handleCloseProfile}
            className={classes.dropdownItem}
          >
            Profile
          </MenuItem>
          <MenuItem
            onClick={handleCloseProfile}
            className={classes.dropdownItem}
          >
            Settings
          </MenuItem>
          <Divider light />
          <MenuItem
            onClick={handleSignOut}
            className={classes.dropdownItem}
          >
            Sign Out
          </MenuItem>
        </MenuList>
      </Popper>
    </div>
  );
}

export default Profile;