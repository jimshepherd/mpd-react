import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery} from '@apollo/client';
import { Button, Divider, MenuList, MenuItem, Popper } from '@mui/material';
import { Person } from '@mui/icons-material';

import Loading from '../components/common/Loading';
import currentUserQuery from '../graphql/queries/currentUser.graphql';


const classes = {
  link: {
    //margin: theme.spacing(1, 1.5),
  },
  dropdownItem: {

  },
};


const Profile = () => {

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
        sx={classes.link}
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
            sx={classes.dropdownItem}
          >
            Profile
          </MenuItem>
          <MenuItem
            onClick={handleCloseProfile}
            sx={classes.dropdownItem}
          >
            Settings
          </MenuItem>
          <Divider light />
          <MenuItem
            onClick={handleSignOut}
            sx={classes.dropdownItem}
          >
            Sign Out
          </MenuItem>
        </MenuList>
      </Popper>
    </div>
  );
}

export default Profile;