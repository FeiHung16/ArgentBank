import React, { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo.webp';
import { logout } from '../../redux/feature/authSlices';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../../redux/store';
import { selectIsAuthenticated, selectUserProfile } from '../../redux/feature/authSelector';



 export const Navigation:React.FC = () => {
      const dispatch: AppDispatch = useDispatch();
      const isAuthenticated = useSelector(selectIsAuthenticated);
      const user = useSelector(selectUserProfile);
      const [userProfileName, setUserProfileName] = useState(''); 

      const handleLogout = () => {
        dispatch(logout());
      };

      useMemo(() => { 
        if (isAuthenticated) {
          setUserProfileName( user?.userName || '');
        }
       }, [isAuthenticated, user?.userName]);

    return (
     <header>
        <nav className='main-nav'>
            {/* Logo et titre masqué pour l'accessibilité */}
        <NavLink to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          { isAuthenticated ? (
            <>
              <NavLink className="main-nav-item" to="/profile">
                {userProfileName}
                <i className="fa fa-user-circle"></i>
              </NavLink>
              <NavLink to="/" className="main-nav-item" onClick ={handleLogout}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </NavLink>
            </>
          ) : (
            <NavLink to="/login" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          )}
        </div>
      </nav>
     </header>
    )
 }