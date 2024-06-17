import React from 'react';
import './App.css';
import Auth from './components/Auth';
import Header from './components/header';
import Home from './pages/Home';

function App() {
  const env = process.env.REACT_APP_FROM || "";
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
