import React from 'react';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
//
// <carousel
//   :per-page-custom="[[1400, 5], [640, 3]]"
//   :pagination-enabled="false"
//   :autoplay="true"
//   :autoplay-timeout="2500"
//   :autoplay-hover-pause="false"
//   :navigation-enabled="false"
//   :mouse-drag="true"
//   :touch-drag="true"
//   loop
//   class="technosCarousel"
// >
//   <slide v-for="image in slides" :key="image._uid" class="slick-slide">
//     <img :src="image.image" alt="">
//     <h2 class="title is-3 technosCarousel-sliderLegend">
//       {{ image.caption }}
//     </h2>
//   </slide>
// </carousel>


export class CarouselTechnos extends React.Component {
  render() {
    return (
      <div>
        <Carousel
          className="technosCarousel"
          keepDirectionWhenDragging
          autoPlay={2500}
          animationSpeed={1000}
          infinite
          slidesPerPage={3}
          breakpoints={{
            640: {
              slidesPerPage: 5,
              arrows: false
            }
          }}
        >
        {
          this.props.slides.map((slide, index) =>
            <div key={index}>
              <img src={slide.image} alt="" />
              <h2 className="title is-3 technosCarousel-sliderLegend">
                {slide.caption}
              </h2>
            </div>
          )
        }
        </Carousel>
      </div>
    )
  }
}
