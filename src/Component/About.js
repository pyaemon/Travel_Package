import React from 'react'
import Hotel from './Hotel.js';
import Background from './Background.js'
import Footer from './Contact/footer.js'
import W_P from '../assets/Wallpaper.jpg'
import Event from './Carousel.js'
import Tab from './Tab.js'
//test commit
const About=()=>{
    return(
    <div className="">
        <div style={{fontFamily:''}}>
            <div>
                <div style={{ position: "relative" }}>                
                    <div style={{ 
                        height: 250, 
                        backgroundImage: `url('${W_P}')`, 
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center center"
                    }}>
                    </div>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "#000000", opacity: 0.4 }}>

                    </div>
                    <div className="" style={{ position: "absolute", left: "50%", top: "50%"}}>
                        <div style={{fontSize:20,fontFamily:'Playfair Display', position: "relative", top: -64, left: "-50%" }}>
                            <div className='font-weight-bold text-white h2' style={{ fontFamily:'Playfair Display'}}>About Us</div>
                            <div className="d-flex flex-row align-items-center">
                                <a href="/" className="text-white">Home</a>
                                <i class="px-2 fa fa-chevron-right text-white" style={{ fontSize: 14 }}></i>
                                <a href="/" style={{ color: "#cda274" }}>About</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Hotel/>
        <Background/>
        <Tab/>
        <Event/>
        <Footer/>
    </div>
    )
}
export default About;