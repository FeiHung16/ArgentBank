import React from 'react';
import {Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home/Home';
import { Login } from './pages/login/Login';
import './App.scss';
import { Profile } from './pages/profile/Profile';


export const App:React.FC = () =>  {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path= '/profile' element= {<Profile />} />
      </Routes>
    </Router>
    </>
  )
}


