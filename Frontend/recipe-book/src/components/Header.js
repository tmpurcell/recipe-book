import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

import { useNavigate } from "react-router-dom";

export default function MenuAppBar() {
  
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openNested, setOpenNested] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null); 

  const clickRightMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const clickFeatures = () => {
    setOpenNested(!openNested);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickLeftMenu = event => {
    setOpenNested(false);
    setAnchorEl2(event.currentTarget);
  };

  /* routePaths are defined in App.js */
  const redirectRoute = routePath => {
    navigate(routePath);
    setAnchorEl(null);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={clickLeftMenu}
          >
            <MenuIcon />
          </IconButton>


          {/* Left hand side */}

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl2}
            open={Boolean(anchorEl2)}
            onClose={() => {setAnchorEl2(null);setOpenNested(true);}}>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItem button onClick={() => redirectRoute("/")}>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button onClick={clickFeatures}>
                  <ListItemText primary="My Recipes" />
                  {openNested ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openNested} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                  <ListItem button onClick={() => redirectRoute("/uploadRecipe")}>
                      <ListItemText primary="Upload Recipe" />
                    </ListItem>
                    <ListItem button onClick={() => redirectRoute('/viewRecipes')}>
                      <ListItemText primary="View Recipes" />
                    </ListItem>
                  </List>
                </Collapse>
                <ListItem button  onClick={() => redirectRoute("/About")}>
                  <ListItemText primary="About" />
                </ListItem>
              </List>
          </Menu>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BYTES
          </Typography>

          {/* Right hand side */}

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={clickRightMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <ListItem button onClick={() => redirectRoute("/profile")}>
                  <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button onClick={() => redirectRoute("/myaccount")}>
                  <ListItemText primary="My Account" />
                </ListItem>                
                <ListItem button onClick={() => redirectRoute("/login")}>
                  <ListItemText primary="Login" />
                </ListItem>
                <ListItem button onClick={() => redirectRoute("/logout")}>
                  <ListItemText primary="Logout" />
                </ListItem>
                <ListItem button onClick={() => redirectRoute("/signup")}>
                  <ListItemText primary="Sign Up!" />
                </ListItem>
              </Menu>

        </Toolbar>
      </AppBar>
    </Box>



  );
}