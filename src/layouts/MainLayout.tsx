import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  AppBar,
  Badge,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  Assignment,
  Category,
  Dashboard as DashboardIcon,
  Menu as MenuIcon,
  Notifications,
  ShoppingCart,
} from '@mui/icons-material';

import Copyright from './Copyright';
import Profile from './Profile';

export const mainListItems = [
  {
    icon: <DashboardIcon />,
    text:'Home',
    link: '/',
  }, {
    icon: <Category />,
    text:'Products',
    link: '/app/products',
  }, {
    icon: <ShoppingCart />,
    text:'Materials',
    link: '/app/materials',
  }, {
    icon: <ShoppingCart />,
    text:'Processes',
    link: '/app/processes',
  },
];

export const secondaryListItems = [
  {
    icon: <Assignment />,
    text:'Attributes',
    link: '/app/attributes',
  },
];

const drawerWidth = 240;

export const MainLayout = () => {

  console.log('MainLayout');

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton href={item.link}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader inset>Administrative</ListSubheader>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton href={item.link}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  //const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
          position='fixed'
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)`},
            ml: { sm: `${drawerWidth}px` },
          }}
      >
        <Toolbar sx={{ justifyContent: 'flex-end'}}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component='div' variant='h6' noWrap color={'inherit'} sx={{ flexGrow: 1 }}>
            Material Process Data
          </Typography>
          <IconButton color='inherit'>
            <Badge badgeContent={4} color='secondary'>
              <Notifications />
            </Badge>
          </IconButton>
          <Profile />
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='navigation'
      >
        <Drawer
          //container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet/>
        <Box pt={4}>
          <Copyright />
        </Box>

      </Box>
    </Box>
  );
}

export default MainLayout;