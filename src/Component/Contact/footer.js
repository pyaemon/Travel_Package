import React from 'react'
import Logo1 from '../../assets/kumo_Logo1.png'

import '../../App.css'

const Footer=()=>{
    return(
        <div>
        <div className='py-3 d-flex' style={{backgroundColor:'#0d2933'}}>
            <div className='container d-flex flex-wrap justify-content-between'>
                <div className='col pt-3 text-white'>
                    <img src={Logo1} style={{height:60}}></img>
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
                        64th Street ,<br></br>Bet(105th St)& (106th),
                        ChanMyaTharSi Township,<br></br>Mandalay.
                    </p>
                        <p>
                        (+95)9443322115
                        (+95)9443322116
                        </p>
                        <p>
                        office@kumomyanmar.com
                        </p>
                        <div className='pt-2'>
                            <a className='p-1 text-light' href='https://www.facebook.com/' title='facebook'><i className="fa fa-facebook-square"></i></a>
                            <a className='p-2 text-light' href='https://twitter.com/'title='twitter'><i class="fa fa-twitter-square" ></i></a>
                            <a className='p-2 text-light' href='https://vimeo.com/'title='vimeo'><i class="fa fa-vimeo-square" ></i></a>
                            <a className='p-2 text-light' href='https://www.pinterest.com/'title='pinterest'><i class="fa fa-pinterest-square" ></i></a>
                            <a className='p-2 text-light' href='https://plus.google.com/'title='google-plus'><i class="fa fa-google-plus-square" ></i></a>
                        </div>  
                </div>
                <div className='col-md-4 py-3 text-white'>
                    <h3>Newsletter</h3>
                    <p className='pt-3'>Eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='d-flex row '>
                        <div className='p-2' >
                            <input type='input' className='p-2' placeholder='Email' 
                            title='Please fill out the field.' style={{borderRadius:7}}></input>
                            </div > 
                        <div className='p-2 '>
                            <button type='button' className="p-2 btn-sm btn-warning" style={{borderRadius:7}}>Subscribe</button>
                        </div>
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