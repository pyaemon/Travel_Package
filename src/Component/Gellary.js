import React from "react";
import { withMedia } from "react-media-query-hoc";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Event1 from "../assets/i4.jpg";
import Event2 from "../assets/i5.jpg";
import Event3 from "../assets/i6.jpg";
import Event4 from "../assets/i7.jpg";
import Event5 from "../assets/i1.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Gallery = props => {
  const {media}=props
  return (
    <div className="container-fluid py-1 pt-2">
      <div className="">
       <h1 className="font-weight-bold text-center">Our Gallery</h1>
       <p className="text-center">Excepteur sint occaecat cupidatat</p>
      </div>

      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        customButtonGroup={media.mobile||media.tablet?null:<CustomButtonGroup />}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        arrows={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        //   deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="px-3 pt-5">
          <img className="w-100" src={Event1} alt="events" />
        </div>
        <div className="px-3  pt-5">
          <img className="w-100" src={Event2} alt="events" />
        </div>
        <div className="px-3  pt-5">
          <img className="w-100" src={Event3} alt="events" />
        </div>
        <div className="px-3  pt-5  ">
          <img className="w-100" src={Event4} alt="events" />
        </div>
        <div className="px-3  pt-5  ">
          <img className="w-100" src={Event5} alt="events" />
        </div>
      </Carousel>
    </div>
  );
};
export default withMedia(Gallery);

export const CustomButtonGroup = props => {
  const { next, previous } = props;
  return (   
      <div className="custom-button-group position-absolute" style={{marginTop:-220,marginLeft:'90%'}}>
      <i onClick={() => previous()} className="fa fa-chevron-left fa-1x pr-4" style={{cursor:'pointer'}}/>
      <i onClick={() => next()} className="fa fa-chevron-right fa-1x" style={{cursor:'pointer'}}/>
    </div>
  );
}