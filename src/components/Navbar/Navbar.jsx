import React from 'react'
import c from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar=()=>{
    return(
     <nav className={c.navbar}>
        <div>
          <NavLink to='/profile' activeClassName={c.active}>Profile</NavLink>
        </div>
        <div className={c.item}></div>
        <div>
          <NavLink to='/messages' activeClassName={c.active}>Messages</NavLink>
        </div>
        <div className={c.item}></div>
        <div>
          <NavLink to='/news' activeClassName={c.active}>News</NavLink>
        </div>
        <div className={c.item}></div>
        <div>
          <NavLink to='/music' activeClassName={c.active}>Music</NavLink>
        </div>
        <div className={c.item}></div>
        <div> 
          <NavLink to='/settings' activeClassName={c.active}>Settings</NavLink>
        </div>
        <div className={c.item}></div>
      </nav>
    );

}

export default Navbar;




