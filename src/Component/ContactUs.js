import React from 'react'
import ContactForm from '../../src/Component/Contact/contactForm.js'
import SimpleMap from '../../src/Component/Contact/SimpleMap.js'
import Footer from '../../src/Component/Contact/footer.js'

import W_P from '../assets/abstract-architecture-black-and-white-boardwalk-262367.jpg'


const ContactUs=()=>{
    return(
        <div>
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
                            <div className='font-weight-bold text-white h2' style={{ fontFamily:'Playfair Display'}}>Contact Us</div>
                            <div className="d-flex flex-row align-items-center">
                                <a href="/" className="text-white">Home</a>
                                <i class="px-2 fa fa-chevron-right text-white" style={{ fontSize: 14 }}></i>
                                <a href="/" style={{ color: "#cda274" }}>Contact Us</a>
                            </div>
                        </div>
                    </div>
                     {/* <img className="d-flex-center" src={W_P} style={{width:'100%', }}/> */}
                    {/* <div className='text-center' style={{fontSize:30,fontFamily:'Playfair Display', position: "absolute", top: "50%", left: "50%" }}>
                        <h5 className='' style={{fontSize:50,fontFamily:'Playfair Display'}}><b>Contact Us</b></h5>
                        <p className=""><a className=''>Home</a><i class=" p-3 fa fa-chevron-circle-right text-warning"></i>Contact Us</p>
                    </div> */}
                </div>
            </div>
            <div className='d-flex flex-row py-5 justify-content-center '>
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
                    <div className='d-flex'>
                            <div className=''>
                                <i className="p-3 fa fa-mobile text-warning" style={{fontSize:'50px'}}></i>
                            </div>
                                <div className='p-2'style={{fontSize:'18px'}}>
                                    (+95)9443322115<br></br>
                                    (+95)9443322116    
                                </div>
                                    
                            </div>
                    </div>
                <div className='col-lg-3'>
                    <div className='d-flex'>
                        <div className=''>
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
            {/* <div className='py-2 col-sm-12 d-flex flex-wrap container-fluid text-light justify-content-center' 
            style={{backgroundColor: 'black', fontSize:'20'}}>
                <div className='pt-3 col-sm-3 text-light text-left'>
                    <div className='row' style={{fontSize:17}}>
                        <p><a className='p-3 text-warning'>Kumo Solutions</a>© 2019 All Right Reserved</p>
                    </div>
                </div>
                <div className='col-sm-3 text-light text-left'></div>
                <div className='col-sm-3 text-light text-left'></div>
                <div className='py-3 col-sm-3 text-light'>
                    <div className='' style={{fontSize:17}}>
                            <a className='p-3 text-warning'>Terms of Service</a>
                            <a>|</a>
                            <a className='p-3 text-warning'>Privacy Policy</a>            
                    </div>
                </div>
            </div> */}
        </div>
        )
}
export default ContactUs;