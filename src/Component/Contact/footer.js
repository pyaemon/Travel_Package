import React from 'react'
import Logo from '../../assets/kumo_Logo.png'

import '../../App.css'

const Footer=()=>{
    return(
        <div>
        <div className=' bg-dark py-4 d-flex'>
            <div className='container d-flex flex-wrap justify-content-between'>
                <div className='col py-3 text-white'>
                    <img src={Logo} style={{height:50}}></img>
                    <p className='py-2'>Lorem ipsum dolor amet consecte tur adi pisicing elit sed eiusm tempor incididunt</p>
                    <p>labore dolore magna aliqua enim ad minim veniam quis.nostrud exercita.</p>
                </div>
                <div className='col py-3 text-white'>
                    <h3 className=''>Services</h3>
                    <div className='py-3'>
                        <a href='https://www.google.com/' className='text-warning'>Resturent & Bar</a>
                    </div>
                    <div className=''>
                        <a className='pt-2 text-warning'>Swimming Pool</a>
                    </div>
                    <div className='py-3'>
                        <a className='text-warning'>Wellness & Spa</a>
                    </div>
                    <div className=''>
                        <a className='text-warning'>Restaurant</a>
                    </div>
                    <div className='py-3'>
                        <a className='text-warning'>Conference Room</a>
                    </div>  
                </div>
                <div className='col py-3 text-white'>
                    <h3>Contact Info</h3>
                     <p className='pt-3'>
                        Flat 20, Reynolds Neck, North<br></br>
                         Helenaville, FV77
                    </p>
                        <p>
                        +2(305) 587-3407
                        </p>
                        <p>
                        info@panola.com
                        </p>
                        <div className='pt-2'>
                            <a className='p-1 text-light' href='https://www.facebook.com/' title='facebook'><i className="fa fa-facebook-square"></i></a>
                            <a className='p-2 text-light' href='https://twitter.com/'title='twitter'><i class="fa fa-twitter-square" ></i></a>
                            <a className='p-2 text-light' href='https://vimeo.com/'title='vimeo'><i class="fa fa-vimeo-square" ></i></a>
                            <a className='p-2 text-light' href='https://www.pinterest.com/'title='pinterest'><i class="fa fa-pinterest-square" ></i></a>
                            <a className='p-2 text-light' href='https://plus.google.com/'title='google-plus'><i class="fa fa-google-plus-square" ></i></a>
                        </div>  
                </div>
                <div className='col-md-4 py-4 text-white'>
                    <h3>Newsletter</h3>
                    <p className=''>Eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className=''>
                        <div className='' >
                            <input type='input' className='border-1 p-1 px-0' placeholder='Email' title='Please fill out the field.' style={{borderRadius:15}}></input>
                            <button type='button' className="p- border-right-1 btn-sm btn-warning" style={{borderRadius:14}}>Subscribe</button>
                        </div >
                    </div>
                </div>
            </div>
        </div>
        <div className='py-2 col-sm-12 d-flex flex-wrap container-fluid text-light justify-content-center' 
            style={{backgroundColor: 'black', fontSize:'20'}}>
                <div className='pt-3 col-sm-3 text-light text-left'>
                    <div className='row' style={{fontSize:17}}>
                        <p><a className='p-1 text-warning'>Kumo Solutions</a>© 2019 All Right Reserved</p>
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
            </div>
        </div>
             
    )
}
export default Footer