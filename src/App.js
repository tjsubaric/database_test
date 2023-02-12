import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import Login from './components/Login'
import useToken from './components/useToken';

function setToken(userToken){
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken(){
  const tokenString = sessionStorage.getItem('token')
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const {token, setToken } = useToken();

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