import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo.webp';


 export const Navigation:React.FC = () => {

     const [userProfileName, setUserProfileName] = useState(''); // Remplacez par la logique réelle pour obtenir le nom du profil utilisateur


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
          { false ? (
            <>
              <NavLink className="main-nav-item" to="/profile">
                {userProfileName}
                <i className="fa fa-user-circle"></i>
              </NavLink>
              <NavLink to="/" className="main-nav-item">
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