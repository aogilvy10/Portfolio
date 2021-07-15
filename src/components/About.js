import React from 'react'

const About = () => {


  return (
    <div className='about'>
      <hr></hr>
      <h1 className='about-header' id='section1'>About Me</h1>
      <hr></hr>
      <div className='aboutMe'>
        <p className="about-descrip">
          I am an eager and success-driven individual orginally from San Diego, California. I have come from very different workplaces within hospitality, assisting all types of people around the world. Being fascinated with the technological world, I recently made a career change and entered a software engineering bootcamp looking for a new challenge. Coupling a natural ability for problem-solving with strong interpersonal skills, I look forward to bringing my unique array of skills to a junior software developer role.
        </p>
        <div className='icons-container'>
          <div className='icon-one'>
            <i class="devicon-javascript-plain skills" id='icon'></i>
            <i class="devicon-html5-plain-wordmark" id='icon'></i>
            <i class="devicon-css3-plain-wordmark" id='icon'></i>
            <i class="devicon-react-original-wordmark" id='icon'></i>
          </div>
          <div className='icon-one'>
            <i class="devicon-postgresql-plain-wordmark" id='icon'></i>
            <i class="devicon-express-original-wordmark" id='icon'></i>
            <i class="devicon-github-original-wordmark" id='icon'></i>
            <i class="devicon-python-plain-wordmark" id='icon'></i>
          </div>
          <div className='icon-one'>
            <i class="devicon-mongodb-plain-wordmark" id='icon'></i>
            <i class="devicon-nodejs-plain-wordmark" id='icon'></i>
            <i class="devicon-mysql-plain-wordmark" id='icon'></i>
            <i class="devicon-heroku-original-wordmark" id='icon'></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About


