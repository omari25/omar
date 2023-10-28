import React from 'react'

function Home() {
  return (
    <div className='home-div'>
        <div className='my-image-div'></div>
        <div className='home-right-div'>
          <p className='introduction-p'>INTRODUCTION</p>
          <h1>Hi, I'm Omar Mahat</h1>
          <h1>A Software Engineer</h1>
          <p className='my-description-p'>I am an accomplished full-stack software developer with expertise in both frontend and backend technologies. I excel in designing intuitive user interfaces and crafting robust, efficient server-side solutions. My skills include programming languages like JavaScript, React, Python, and Ruby and a keen understanding of various frameworks and databases.</p>
          <div>
            <button><a href="">About Me</a></button>
          </div>
        </div>
    </div>
  )
}

export default Home