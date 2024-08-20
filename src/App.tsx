import React from "react";
import "./App.css";
import About from "./components/about";
// import Auth from './components/Auth';
import Header from "./components/header";
import Home from "./components/home";
import Skills from "./components/skills";
import Services from "./components/services";
import Qualification from "./components/qualification";

function App() {
  // const env = process.env.REACT_APP_FROM || "";
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
      </main>
    </>
  );
}

export default App;
