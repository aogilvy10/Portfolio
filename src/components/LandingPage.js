import React from 'react'
// import { HashLink as Link } from 'react-router-hash-link'
import computer from '../logos/computer-code-icon-17.jpeg'
// import { Link, BrowserRouter } from 'react-router-dom'

const LandingPage = () => {


  return (
    <div className='container'>
      <div className='navbar'>
        <a href='#section1' className="links">
          <li>About Me</li>
        </a>
        <a href='#section2' className="links">
          <li>Projects</li>
        </a>
        <a href='#section3' className="links">
          <li>Experience</li>
        </a>
        <a href='#section4' className="links">
          <li>Interests</li>
        </a>
        <a href='#section5' className="links">
          <li>Contact</li>
        </a>
      </div>
      <div className='picture'>
        <h1 className='name'>
          Andrew Ogilvy
        </h1>
        <h3 className="developer">Developer/Software Engineer</h3>
        <img src={computer} alt='computer'></img>
      </div>
    </div>
  )
}

export default LandingPage
