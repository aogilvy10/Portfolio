import React from 'react'
import Hilton from '../logos/Hilton_Logo_.jpeg'
import Meriton from '../logos/meriton.png'
import General from '../logos/GALogo.png'

const Experience = () => {



  return (
    <div className='experience-container'>
      <hr></hr>
      <h1 className='experience-title' id='section3'>Experience</h1>
      <hr></hr>
      <div className='experience-content'>
        <div className='experienceOne'>
            <a href='hilton'><img src={General} alt='general' className='main-images'></img>
            </a>
            <h2>General Assembly</h2>
            <h3>Software Engineering</h3>
            <h3>London, UK (Remote)<br></br> Feb 2021 - April 2021</h3>
          <p className='e-description'>Full stack course, providing experience with the latest front-end and back-end programming languages, tools and methodologies.</p>
        </div>
        <div className='experienceTwo'>
          <a href='hilton'><img src={Meriton} alt='meriton' className='main-images'></img></a>
          <h2>Meriton Suites</h2>
          <h3>Concierge/Porter</h3>
          <h3>Sydney, Australia<br></br> Nov 2019 - April 2020</h3>
          <p className='e-description'>
            <li>Welcome/assist checking-in guests</li>
            <li className='e-list'>Responsible for any customers inquiries: reservations, events, suggestions, directions</li>
            <li>Assist with door malfunctions, safe assistance all computer-based problems</li>
            <li>Ensure all inquiries are forwarded to the relevant department via Apps</li>
          </p>
        </div>
        <div className='experienceThree'>
          <a href='hilton'><img src={Hilton} alt='hilton' className='main-images'></img></a>
          <h2>Hilton</h2>
          <h3>Front Desk Agent/Porter</h3>
          <h3>San Diego, California<br></br> Aug 2018 - Sept 2019</h3>
          <p className='e-description'>
            <li>Promote and up-sell rooms/amenities on the hotel property</li>
            <li>Manage guest bills, ensuring accuracy and settlement in a timely manner</li>
            <li>Be aware of the Hilton hotel’s availability and the availability of our local competitors</li>
         </p>
        </div>
      </div>
    </div>
  )
}

export default Experience
