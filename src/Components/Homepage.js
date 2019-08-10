import React from 'react'
import Navbar from './Navbar'
import '../App.scss';

import homepageVid from "../presswash1.mp4"

function Homepage() {
  return (
    <div className='video-container'>
      <video className='homepage-video' autoPlay loop>
        <source src={homepageVid} type='video/mp4' />
      </video>
      <div className='video-overlay'></div>
    </div>
  )
}

export default Homepage