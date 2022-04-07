import React from 'react';
import c from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

const Navbar = () => {
  return (
    <div>
      {/* <nav className={c.navbar}>
        <div>
          <NavLink to="/profile" activeClassName={c.active}>
            Profile
          </NavLink>
        </div>
        <div className={c.item}></div>
        <div>
          <NavLink to="/messages" activeClassName={c.active}>
            Messages
          </NavLink>
        </div>
        <div className={c.item}></div>
        <div>
          <NavLink to="/news" activeClassName={c.active}>
            News
          </NavLink>
        </div>
        <div className={c.item}></div>
        <div>
          <NavLink to="/music" activeClassName={c.active}>
            Music
          </NavLink>
        </div>
        <div className={c.item}></div>
        <div>
          <NavLink to="/settings" activeClassName={c.active}>
            Settings
          </NavLink>
        </div>
        <div className={c.item}></div>
      </nav> */}

      {/* ////////// */}

      <MenuList className={c.navbar}>
        <MenuItem>
          <ListItemText>
            <NavLink to="/profile" activeClassName={c.active}>
              Profile
            </NavLink>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>
            <NavLink to="/messages" activeClassName={c.active}>
              Messages
            </NavLink>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>
            <NavLink to="/news" activeClassName={c.active}>
              News
            </NavLink>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <NavLink to="/music" activeClassName={c.active}>
            Music
          </NavLink>
        </MenuItem>
        <Divider className={c.item} />
        <MenuItem>
          <ListItemText>
            <NavLink to="/settings" activeClassName={c.active}>
              Settings
            </NavLink>
          </ListItemText>
        </MenuItem>
      </MenuList>

      {/* ////////// */}
    </div>
  );
};

export default Navbar;
