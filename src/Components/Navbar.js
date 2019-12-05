import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import MediaQuery from 'react-responsive'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-regular-svg-icons'
import logo from '../1stchoice.png'

class Navbar extends Component {
  render() {
    return (
      <div className='nav-container'>
        <p>FIRST CHOICE POWER WASHING</p>
        <MediaQuery query='(max-width: 1054px)'>
          <Menu right isOpen={this.props.menuOpen} onStateChange={(props) => this.props.handleStateChange(props)}>
            <ul className="nav-links">
              <Link to='/'><li className="nav-item"><a onClick={() => this.props.closeMenu()} href="#"><FontAwesomeIcon icon={faHome} size='1x' className='icon' />HOME</a></li></Link>
              {/* <Link to='/residential'><li className="nav-item"><a onClick={() => this.props.closeMenu()} href="#"><FontAwesomeIcon icon={faInfoCircle} size='1x' className='icon' />RESIDENTIAL</a></li></Link>
              <Link to='/commercial'><li className="nav-item"><a onClick={() => this.props.closeMenu()} href="#"><FontAwesomeIcon icon={faImage} size='1x' className='icon' />COMMERCIAL</a></li></Link> */}
            </ul>
            <Link to='/quote'>
              <button onClick={() => this.props.closeMenu()}>GET QUOTE</button>
            </Link>

          </Menu>
        </MediaQuery>
        <MediaQuery query='(min-width: 1054px)'>
          <ul className="nav-links">
            <Link to='/'><li className="nav-item"><a>HOME</a></li></Link>
            {/* <Link to='/residential'><li className="nav-item"><a href="#">RESIDENTIAL</a></li></Link>
            <Link to='/commercial'><li className="nav-item"><a href="#">COMMERCIAL</a></li></Link> */}
          </ul>
          <Link to='/quote'>
            <button>GET QUOTE</button>
          </Link>
        </MediaQuery>
      </div >
    )
  }

}

export default Navbar