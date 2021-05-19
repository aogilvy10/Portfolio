import React from 'react'
// import Mail from '/Users/andrewogilvy/development/PROJECTS/portfolio/src/logos/mail.png'
import Photo from '/Users/andrewogilvy/development/PROJECTS/portfolio/src/logos/IMG_3539.jpeg'

const Contact = () => {


  return (
    <div className='contact'>
      <hr></hr>
      <h1 className='contact-title'>Contact</h1>
      <hr></hr>
      <a href='photo' className='headshot-tag'>
        <img alt='headshot' src={Photo} className='headshot'></img>
      </a>
      <div className='contact-content'>
        <a href='www.linkedin.com/in/andrew-ogilvy'>
          <i class="devicon-linkedin-plain" id='contact-icon'>
          </i>
        </a>
        <a href='https://github.com/aogilvy10'>
          <i class="devicon-github-original-wordmark" id='contact-icon'>
          </i>
        </a>
      </div>
      <div className='email-content'>
        <p className='email'> ogilvyandrew@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact


