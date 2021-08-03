import React from 'react'
// import Mail from '/Users/andrewogilvy/development/PROJECTS/portfolio/src/logos/mail.png'
import Photo from '../logos/IMG_3539.jpeg'

const Contact = () => {

  return (
    <div className='contact'>
      <hr></hr>
      <h1 className='contact-title' id='section5'>Contact</h1>
      <hr></hr>
      <div className='contact-content'>
        <a href='photo' className='headshot-tag'>
          <img alt='headshot' src={Photo} className='headshot'></img>
        </a>
        <div className='email-content'>
          <a href='https://linkedin.com/in/andrew-ogilvy'>
            <i class="devicon-linkedin-plain" id='contact-icon'>
            </i>
          </a>
          <a href='https://github.com/aogilvy10'>
            <i class="devicon-github-original-wordmark" id='contact-icon'>
            </i>
          </a>
          <a href='Mailto: ogilvyandrew@gmail.com'>
            <i class="devicon-google-plain" id='contact-icon'></i>
          </a>
          <p className='email'> EMAIL</p>
        </div>
      </div>
    </div>
  )
}

export default Contact


