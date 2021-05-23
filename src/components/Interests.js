import React from 'react'
import Travel from '../logos/travel.png'
import Soccer from '../logos/soccer-icon.png'


const Interests = () => {


  return (
    <div className='interestsContainer'>
      <hr></hr>
      <h1 className='interests-title' id='section4'>Interests</h1>
      <hr></hr>
        <h2 className='travel-title'>Travel</h2>
      <div className='interests'>
        <p className='interests-p'>Traveling has always been a love of mine. In 2019 my best friends and I backpacked around Europe for three months seeing 8 different countries. From there my love for traveling was too great to just head home so I moved to Australia for just short of a year. Looking forward, there are plenty of countries I wish to visit that I hope one day I will.</p>
        <a href='travel'>
          <img src={Travel} alt='travel' className='travel'></img>
        </a>
      </div>
        <h2 className='sport-title'>Sport</h2>
      <div className='interests-right'>
        <p className='interests-sport'>Sport has always been one of my favorite hobbies, especially football (soccer). I have played soccer my whole life growing up, from being on the best ranked team in the nation, to winning MVP for my college soccer team, soccer is something that will always be prevalent in my life. I support the best team in Manchester as well, United of course. One day I will be a season ticket holder, but until then I watch every one of their games live. </p>
        <a href='travel'>
          <img src={Soccer} alt='soccer' className='soccer'></img>
        </a>
      </div>
    </div>
  )
}

export default Interests
