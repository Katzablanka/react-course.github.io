import React from 'react';
import s from './Header.module.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import ListItemText from '@mui/material/ListItemText';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
          <Button
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </Button>
        </div>
      </header>

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
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Messages</MenuItem>
        <MenuItem onClick={handleClose}>News</MenuItem> */}
        {/*  */}
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
        {/*  */}
      </Menu>
    </div>
  );
};

export default Header;
