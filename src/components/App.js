import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Contact from "./Contact";
import Footer from "./Footer";
import Blog from "./Blog";
import About from "./About";

const App = () => {

  return (
    <>
      <NavBar />
      <Home/>
      <About/>
      <Blog />
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
