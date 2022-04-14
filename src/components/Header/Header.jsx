import React from 'react';
import s from './Header.module.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import ListItemText from '@mui/material/ListItemText';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// ///////////////////////
import IconButton from '@mui/material/IconButton';

const options = ['profile', 'messages', 'news', 'music', 'settings'];

const ITEM_HEIGHT = 48;

// //////////////////////

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={s.container}>
      <header className={s.header}>
        <img
          src="https://i.pinimg.com/originals/63/9b/3d/639b3dafb544d6f061fcddd2d6686ddb.png"
          alt="logo"
        />
        <div className={s.menuButton}>
          {/* <Button
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </Button> */}
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        </div>
      </header>
      {/* 
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        
        <MenuItem onClick={handleClose}>
          <NavLink to="/profile">Profile</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/messages">Messages</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/news">News</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/music">Music</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText>
            <NavLink to="/settings">Settings</NavLink>
          </ListItemText>
        </MenuItem>
    
      </Menu> */}
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === 'Pyxis'}
            onClick={handleClose}
          >
            {/* {option} */}
            <ListItemText>
              <NavLink to={`/${option}`}>{option}</NavLink>
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Header;
