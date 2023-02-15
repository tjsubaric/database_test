import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery'
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
    return <Gallery setToken={ setToken } />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
        <Route path='/' exact component={Gallery} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;