import React from 'react'
import Quote from '../logos/Quote Garden.png'
import JETFLIX from '../logos/JETFLIX.png'
import Space from '../logos/Space Invaders.png'
import FUT from '../logos/FUT.png'
import Clip from '../logos/paperclip-solid.svg'

const Projects = () => {


  return (
    <div className='projects'>
      <hr></hr>
      <h1 className='project-title' id='section2'>Projects</h1>
      <hr></hr>
      <div className='projectOne' id="pic-animation">
        <div className='fut-team'>
          <a href='https://github.com/aogilvy10/FUT-Team-Builder'>
            <img src={FUT} alt='fut' className='main-images' ></img>
          </a>
          <div className='title-left'>
            <h2>Fut-Team-Builder</h2>
            <h3>Pair Project | One Week</h3>
          </div>
        </div>
        <div className='fut-description'>
          <p className='description'>With my partner and I both having a massive love for football we wanted to create a CRUD app where the user is able to build and create his/her own English Premier League team with players of their choice. I did not only have one main focus during this project as I oversaw each component, backend and frontend, knowing exactly what code was being written. Overall this project helped me gain confidence in my coding ability.
          </p>
          <div className='deployment'>
            <a href='https://github.com/aogilvy10/FUT-Team-Builder'>
              <i class="devicon-github-original-wordmark" id='project-icon-left' ></i>
            </a>
            <a href='here' >
              <img src={Clip} alt='clip' className='paperclip' id="animation"></img>
            </a>
          </div>
        </div>
      </div>
      <div className='projectTwo' id="pic-animation">
        <div className='jetflix'>
          <a href='https://github.com/aogilvy10/jetflix'><img src={JETFLIX} alt='quote' className='main-images' ></img></a>
          <div className='title-right'>
            <h2>JETFLIX</h2>
            <h3>Group Project | One Week</h3>
          </div>
        </div>
        <div className='jetflix-description'>
          <p className='description'>We built a MERN travel app that was a clone of Netflix with a social media platform. Our app allowed users to explore the top destinations in the world, while creating a profile and being able to upload their own photos, view, comment, and like others posts as well. We all worked full-stack but I mainly focused on the login and explore/feed page for users.
          </p>
          <div className='deployment'>
            <a href='https://github.com/aogilvy10/jetflix'>
              <i class="devicon-github-original-wordmark" id='project-icon-right'></i>
            </a>
            <a href='https://jetflixapp.herokuapp.com/'>
              <img src={Clip} alt='clip' className='paperclip move-right' id="animation"></img>
            </a>
          </div>
        </div>
      </div>
      <div className='projectThree' id="pic-animation">
        <div className='quote-garden'>
          <a href='https://github.com/aogilvy10/Quote-Garden'><img src={Quote} alt='quote' className='main-images' ></img></a>
          <div className='title-left'>
            <h2>Quote Garden</h2>
            <h3>Pair Project | One Week</h3>
          </div>
        </div>
        <div className ='garden-description'>
          <p className='description'> My partner and I were given two days to complete a React-based application using an external API. This is where I gained much knowledge and respect for the significance React has in computer programming, as well as coding alongside another programmer.
          </p>
          <div className='deployment'>
            <a href='https://github.com/aogilvy10/Quote-Garden'>
              <i class="devicon-github-original-wordmark" id='project-icon-left'></i>
            </a>
            <a href='https://masterofgardenquotes.netlify.app/'>
              <img src={Clip} alt='clip' className='paperclip' id="animation"></img>
            </a>
          </div>
        </div>
      </div>
      <div className='projectFour' id="pic-animation">
        <div className='space-invaders'>
          <a href='https://github.com/aogilvy10/Space-Invaders'><img src={Space} alt='quote' className='main-images' ></img></a>
          <div className='title-right'>
            <h2>Space Invaders</h2>
            <h3>Solo Project | One Week</h3>
          </div>
        </div>
        <div className='invaders-description'>
          <p className='description'>My first overall project included creating a very popular arcade game, called Space Invaders. It is a grid-based game using JavaScript, HTML and CSS. This project allowed me to gain further understanding on the importance of clean working code, as well as a slick and dynamic layout. </p>
          <div className='deployment'>
            <a href='https://github.com/aogilvy10/Space-Invaders'>
              <i class="devicon-github-original-wordmark" id='project-icon-right'></i>
            </a>
            <a href='https://aogilvy10.github.io/Space-Invaders/'>
              <img src={Clip} alt='clip' className='paperclip move-right' id="animation"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
