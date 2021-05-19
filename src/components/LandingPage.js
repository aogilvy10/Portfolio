import React from 'react'
// import { HashLink as Link } from 'react-router-hash-link'
import computer from '/Users/andrewogilvy/development/PROJECTS/portfolio/src/logos/computer-code-icon-17.jpeg'
const LandingPage = () => {



  return (
    <div className='container'>
      <div className='picture'>
        <h1 className='name'>
          Andrew Ogilvy
        </h1>
        <h3>Developer</h3>
        <div className='navbar'>
          <li>About Me</li>
          <li>Experience</li>
          <li>Interests</li>
          <li>Contact</li>
        </div>
        <img src={computer} alt='computer'></img>
      </div>
    </div>
  )
}

export default LandingPage
