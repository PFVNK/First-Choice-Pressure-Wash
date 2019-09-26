import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import dirtyhouse from '../dirtyhouse.jpg'
import cleanhouse from '../cleanhouse.jpg'
import cleansidewalk from '../cleansidewalk.jpg'
import dirtysidewalk from '../dirtysidewalk.jpg'
import cleansidehouse from '../cleansidehouse.jpg'
import dirtysidehouse from '../dirtysidehouse.jpg'


class CarouselView extends Component {
  render() {
    return (
      <Carousel infiniteLoop autoPlay width='100%' showStatus={false} showThumbs={false} showArrows={false} showIndicators={false}>
        <div>
          <img src={dirtyhouse} />
          <p className="legend">Before</p>
        </div>
        <div>
          <img src={cleanhouse} />
          <p className="legend">After</p>
        </div>
        <div>
          <img src={dirtysidehouse} />
          <p className="legend">Before</p>
        </div>
        <div>
          <img src={cleansidehouse} />
          <p className="legend">After</p>
        </div>
      </Carousel>
    );
  }
};


export default CarouselView;