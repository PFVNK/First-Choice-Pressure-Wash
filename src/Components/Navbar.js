import React from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import MediaQuery from 'react-responsive'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-regular-svg-icons'
import logo from '../1stchoice.png'

function Navbar() {
  return (
    <div className='nav-container'>
      <p>FIRST CHOICE POWER WASHING</p>
      <MediaQuery query='(max-width: 1054px)'>
        <Menu right>
          <ul className="nav-links">
            <li className="nav-item"><a href="#"><FontAwesomeIcon icon={faHome} size='1x' className='icon' />HOME</a></li>
            <li className="nav-item"><a href="#"><FontAwesomeIcon icon={faInfoCircle} size='1x' className='icon' />RESIDENTIAL</a></li>
            <li className="nav-item"><a href="#"><FontAwesomeIcon icon={faImage} size='1x' className='icon' />COMMERCIAL</a></li>
          </ul>
          <button>GET QUOTE</button>
        </Menu>
      </MediaQuery>
      <MediaQuery query='(min-width: 1054px)'>
        <ul class="nav-links">
          <li className="nav-item" tag={Link} to='/'><a>HOME</a></li>
          <li className="nav-item" tag={Link} to='/residential'><a href="#">RESIDENTIAL</a></li>
          <li className="nav-item" tag={Link} to='/commercial'><a href="#">COMMERCIAL</a></li>
        </ul>
        <button component={Link} to='/quote'>GET QUOTE</button>
      </MediaQuery>
    </div>
  )
}

export default Navbar