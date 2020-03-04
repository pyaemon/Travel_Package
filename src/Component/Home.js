import React from 'react'
import Slider1 from './Slider.js';
import Check from './Check.js';
import Hotel from './Hotel.js';
import Book from './Book.js';
import LatestNew from './LatestNew.js'
import Background from './Background.js'
//import Carousel from './Carousel.js';
// import ImageSlide from './ImageSlide.js'
import Service from './Service.js';

const Home=()=>{
    return(
        <div className="">
            <Slider1/>
            <Check/>
            <Hotel/>
            <Book/>
            <Service/>
            {/* <ImageSlide/> */}
            {/* <Carousel/> */}
            <Background/>
            <LatestNew/>
        </div>
        )
}
    

export default Home;