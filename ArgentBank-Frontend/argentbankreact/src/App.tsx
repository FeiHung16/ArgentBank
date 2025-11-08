import React from 'react';
import {Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home/Home';
import './App.scss';

export const App:React.FC = () =>  {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}


