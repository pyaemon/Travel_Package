import React from 'react'
import ContactForm from '../../src/Component/Contact/contactForm.js'
import SimpleMap from '../../src/Component/Contact/SimpleMap.js'
import Footer from '../../src/Component/Contact/footer.js'
import W_P from '../assets/Wallpaper.jpg'
import Header2 from './Header2.js'


const ContactUs=()=>{
    return(
        <div>  
            {/* <div style={{fontFamily:''}}> */}
            <div>
                <div style={{ position: "relative" }}>
                <div>
            {/* <h1>NEWS Page</h1> */}
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
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, 
                    backgroundColor: "#000000", opacity: 0.4 }}>

                    </div>
                    <div className="" style={{ position: "absolute", left: "50%", top: "50%"}}>
                        <div style={{fontSize:20,fontFamily:'Playfair Display', position: "relative", top: -64, left: "-50%" }}>
                            <div className='font-weight-bold text-white h2' style={{ fontFamily:'Playfair Display'}}>Blog Grid View</div>
                            <div className="d-flex flex-row align-items-center">
                                <a href="/" className="text-white">Home</a>
                                <i class="px-2 fa fa-chevron-right text-white" style={{ fontSize: 14 }}></i>
                                <a href="/" style={{ color: "#cda274" }}>Blog Grid View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                                
                </div>
            </div>
            <div className='d-flex flex-row flex-wrap py-5 justify-content-center '>
                <div className='col-lg-3 border border-top-0 border-bottom-0 border-left-0'>
                    <div className='d-flex justify-content-center'>
                            <div className=''>
                                <i className="p-3 fa fa-map-marker text-warning" style={{fontSize:'40px'}}></i>
                            </div>
                            <div className='p-2' style={{fontSize:'18px'}}>
                                64th Street ,<br></br> Bet(105th St)& 
                                (106th),<br></br>ChanMyaTharSi Township,<br></br>Mandalay.  
                            </div>             
                    </div>
                </div>
                <div className='col-lg-3 border border-top-0 border-bottom-0 border-left-0'>
                    <div className='d-flex justify-content-center flex-wrap'>
                            <div className='d-flex justify-content-center'>
                                <i className="p-3 fa fa-mobile text-warning" style={{fontSize:'50px'}}></i>
                                    </div>
                                        <div className='p-2'style={{fontSize:'18px'}}>
                                            (+95)9443322115<br></br>
                                            (+95)9443322116    
                                        </div>
                                    </div>
                            </div>
                <div className='col-lg-3'>
                    <div className='d-flex justify-content-center '>
                        <div className='d-flex justify-content-center'>
                             <i className="p-3 fa fa-envelope text-warning" style={{fontSize:'40px'}}></i>

                        </div>
                        <div className='p-2' style={{fontSize:'18px'}}>
                            office@kumomyanmar.com<br></br>
                            https://kumomyanmar.com
                         </div>
                                    
                    </div>
                </div>
            </div>
        </div>
        
            <ContactForm />
            <SimpleMap />
            <Footer />
        </div>
        )
}
export default ContactUs;