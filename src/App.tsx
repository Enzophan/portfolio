import React from 'react';
import './App.css';
import Auth from './components/Auth';
import Header from './components/header';
import Home from './components/home';

function App() {
  const env = process.env.REACT_APP_FROM || "";
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
