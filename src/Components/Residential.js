import React, { Component } from 'react'

class Residential extends Component {
  render() {
    return (
      <>
        <div className='quote-container'>
          <div className='quote-headline'>
            <h1>RESIDENTIAL</h1>
          </div>
          <div className='service-list'>
            <div className='service-col-one'>
              <ul>
                <li>DECKS</li>
                <li>DRIVEWAYS</li>
                <li>ROOFS</li>
              </ul>
            </div>
            <div className='service-col-two'>
              <ul>
                <li>WINDOWS</li>
                <li>GUTTERS</li>
                <li>FENCE</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Residential
