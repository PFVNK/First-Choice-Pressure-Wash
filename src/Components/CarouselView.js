import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import dirtydriveway from '../dirtydriveway.jpg'
import cleandriveway from '../cleandriveway.jpg'
import dirtydrivewayfar from '../dirtydrivewayfar.jpg'
import cleandrivewayfar from '../cleandrivewayfar.jpg'


class CarouselView extends Component {
  render() {
    return (
      <Carousel infiniteLoop autoPlay width='100%' showStatus={false} showThumbs={false} showArrows={false} showIndicators={false}>
        <div>
          <img src={cleandriveway} />
          <p className="legend">Before</p>
        </div>
        <div>
          <img src={dirtydriveway} />
          <p className="legend">After</p>
        </div>
        <div>
          <img src={cleandrivewayfar} />
          <p className="legend">Before</p>
        </div>
        <div>
          <img src={dirtydrivewayfar} />
          <p className="legend">After</p>
        </div>
      </Carousel>
    );
  }
};


export default CarouselView;