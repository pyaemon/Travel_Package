import React from 'react';
import Slider from "react-slick";
import { withMedia } from "react-media-query-hoc";
import img1 from '../assets/c1.PNG';
import img2 from '../assets/c2.PNG';
import img3 from '../assets/c3.PNG';
// import img4 from '../assets/c4.PNG'


const Carousel = props => {
    const { media } = props;
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: media.mobile ? false : true
    };
    return (
      <Slider {...settings}>
        <div>
          {" "}
          <SliderContent img={img1} media={media} />
        </div>
        <div>
          {" "}
          <SliderContent img={img2} media={media} />
        </div>
        <div>
          {" "}
          <SliderContent img={img3} media={media} />
        </div>
      </Slider>
    );
  };
  export default withMedia(Carousel);
  
  const SliderContent = ({ img, media }) => {
    return (
      <div style={{ height: media.desktop ? 600 : media.tablet ? 500 : "100%" }}>
        <img src={img} alt="slider_pics" className="img-fluid w-100" />
      </div>
    );
  };
  
 