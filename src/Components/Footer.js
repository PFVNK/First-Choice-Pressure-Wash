import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import '../App.scss';

class Footer extends Component {
  render() {
    return (
      <div className='footer-icons'>
        <div className='footer-phone-container'>
          <a href='#'><FontAwesomeIcon icon={faPhone} className='footer-phone-icon' /></a>
          <h1>832-970-0540</h1>
        </div>
        <div className='footer-icon-container'>
          <a href='#'><FontAwesomeIcon icon={faTwitter} className='footer-twitter-icon' /></a>
          <a href='#'><FontAwesomeIcon icon={faFacebook} className='footer-facebook-icon' /></a>
          <a href='#'><FontAwesomeIcon icon={faInstagram} className='footer-instagram-icon' /></a>
        </div>
      </div>
    )
  }
}

export default Footer