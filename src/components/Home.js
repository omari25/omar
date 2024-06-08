import React from 'react';
import myImage from "./images/undraw_programming_re_kg9v.svg"

function Home() {
  return (
    <div className='home-div' id='home'>
        <div className='my-image-div'>
          <img src={myImage} alt="My pic" />
        </div>
        <div className='home-right-div'>
          <p className='introduction-p'>INTRODUCTION</p>
          <h1>Hi, I'm <span className='colored-name'>Omar Mahat</span></h1>
          <h1>A <span className='colored-name'>Software Engineer</span></h1>
          <p className='my-description-p'>I am an accomplished full-stack software developer with expertise in both frontend and backend technologies. I excel in designing intuitive user interfaces and crafting robust, efficient server-side solutions. My skills include programming languages like JavaScript, React, Python, and Ruby and a keen understanding of various frameworks and databases.</p>
          <div className='about-me-links'>
            <a href="" className='about-me-btn'>About Me</a>
            <div className='home-div-icons'>
              <a href="https://www.facebook.com/omar.mahat.75" target='__blank'><i class="fa-brands fa-facebook-f"></i></a>
              <a href="https://twitter.com/Omar_Mahat0" target='__blank'><i class="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.instagram.com/omar_mahat_25" target='__blank'><i class="fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/omar-mahat-33b289244" target='__blank'><i class="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home