import React, { Component } from 'react'

class Commercial extends Component {
  render() {
    return (
      <>
        <div className='quote-container'>
          <div className='quote-headline'>
            <h1>COMMERCIAL</h1>
          </div>
          <div className='service-list'>
            <div>
              <ul>
                <li>PARKING LOT</li>
                <li>SIGNS</li>
                <li>BUILDING</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>WINDOWS</li>
                <li>GUTTERS</li>
                <li>WALKWAYS</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Commercial
