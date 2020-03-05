import React from 'react'
import Slider1 from './Slider.js';
import Check from './Check.js';
import Hotel from './Hotel.js';
import Book from './Book.js';
import LatestNew from './LatestNew.js'
import Background from './Background.js'
import SimpleMap from './Contact/SimpleMap.js'
import Footer from './Contact/footer.js'
import Event from './Carousel.js'
import Gallery from './Gellary.js'
import Tab from './Tab.js'

const Home=()=>{
    return(
        <div className="">
            <Slider1/>
            <Check/>
            <Hotel/>
            <Book/>
            <Tab/>
            <Gallery/>
            <Event/>
            <Background/>
            <LatestNew/>
            <SimpleMap />
            <Footer />
        </div>
        )
}
    

export default Home;