import React from 'react';
import './App.css';
import Auth from './components/Auth';
import Home from './pages/Home';

function App() {
  const env = process.env.REACT_APP_FROM || "";
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
