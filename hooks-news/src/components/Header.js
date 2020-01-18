import React from "react";
import { NavLink } from "react-router-dom";
import { FirebaseContext } from "../firebase";

function Header() {
  const { user, firebase } = React.useContext(FirebaseContext);
  return (
    <div className='header'>
      <div className='flex'>
        <img src='/logo.png' alt='hooks news logo' className='logo' />
        <NavLink to='/' className='header-title'>
          Hooks news
        </NavLink>
        <NavLink to='/' className='header-link'>
          new
        </NavLink>
        <div className='divider'>|</div>
        <NavLink to='/top' className='header-link'>
          top
        </NavLink>
        <div className='divider'>|</div>
        <NavLink to='/search' className='header-link'>
          search
        </NavLink>
        <div className='divider'>|</div>
        {user && (
          <>
            <NavLink to='/create' className='header-link'>
              submit
            </NavLink>
          </>
        )}
      </div>
      <div className='flex'>
        {user ? (
          <>
            <div className='header-name'>{user.displayName}</div>
            <div className='divider'>|</div>
            <div className='header-button' onClick={() => firebase.logout()}>
              logout
            </div>
          </>
        ) : (
          <NavLink to='/login' className='header-link'>
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
