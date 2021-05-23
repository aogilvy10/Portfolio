import React from 'react'
// import { HashLink as Link } from 'react-router-hash-link'
import computer from '../logos/computer-code-icon-17.jpeg'
// import { Link, BrowserRouter } from 'react-router-dom'

const LandingPage = () => {


  return (
    <div className='container'>
      <div className='picture'>
        <h1 className='name'>
          Andrew Ogilvy
        </h1>
        <h3>Developer/Software Engineer</h3>
        <div className='navbar'>
          <a href='#section1'>
            <li>About Me</li>
          </a>
          <a href='#section2'>
            <li>Projects</li>
          </a>
          <a href='#section3'>
            <li>Experience</li>
          </a>
          <a href='#section4'>
            <li>Interests</li>
          </a>
          <a href='#section5'>
            <li>Contact</li>
          </a>
        </div>
        <img src={computer} alt='computer'></img>
      </div>
    </div>
  )
}

export default LandingPage
