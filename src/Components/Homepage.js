import React from 'react'
import Navbar from './Navbar'
import CarouselView from './CarouselView'
import '../App.scss';

import homepageVid from "../presswash1.mp4"

function Homepage() {
  return (
    <>
      <div className='video-container'>
        <video className='homepage-video' autoPlay loop>
          <source src={homepageVid} type='video/mp4' />
        </video>
        <div className='video-overlay'></div>
      </div>
      <div className='homepage-container'>
        <div className='homepage-headline'>
          <p>Make your home beautiful!</p>
          <p>Fast, reliable, affordable.</p>
        </div>

        <div className='carousel-container'>
          <div className='carousel'>
            <CarouselView />
          </div>
        </div>

        <div className='homepage-blurb'>
          <p>Call or apply for quote online anytime!</p>
          <h1>832-970-0540</h1>
        </div>
      </div>
    </>
  )
}

export default Homepage