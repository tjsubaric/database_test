import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import Login from './components/Login'

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={ setToken } />
  }
  
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/preferences' exact component={Preferences} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;