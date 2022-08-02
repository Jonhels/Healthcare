import React from 'react';
import './App.css';
import { Outlet, Link } from 'react-router-dom';
import Information from './Information/Information';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Information></Information>
      <Navigation></Navigation>
      <Outlet />
    </div>
  );
}

export default App;
