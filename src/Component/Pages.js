import React from 'react'
import Footer from './Contact/footer'

import W_P from '../assets/Wallpaper.jpg'
import Header2 from './Header2'

const Pages=()=>{
    return(
        <div>
            <Header2/>
            <div style={{fontFamily:''}}>
            <div>
                <div style={{ position: "relative" }}>                
                    <div style={{ 
                        height: 360, 
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
                            <div className='font-weight-bold text-white h2' style={{ fontFamily:'Playfair Display'}}>Our Gallery</div>
                            <div className="d-flex flex-row align-items-center">
                                <a href="/" className="text-white">Home</a>
                                <i class="px-2 fa fa-chevron-right text-white" style={{ fontSize: 14 }}></i>
                                <a href="/" style={{ color: "#cda274" }}>Our Gallery</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer/>
        </div>
        
    )
}
    


export default Pages