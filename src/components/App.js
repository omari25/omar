import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Contact from "./Contact";
import Footer from "./Footer";
import Blog from "./Blog";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";

const App = () => {

  return (
    <>
      <NavBar />
      <Home/>
      <About/>
      <Resume/>
      <Skills/>
      <Blog />
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
