import React from 'react'
import Footer from './Contact/footer'
import W_P from '../assets/Wallpaper.jpg'
import r1 from '../assets/r1.jpg';
import r2 from '../assets/r4.jpg';
import r3 from '../assets/r3.jpg';
import { MDBMask, MDBView, MDBRow, MDBCol } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import 'font-awesome/css/font-awesome.min.css';

const Room =()=>{
    return(
        <div>    
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
                            <div className='font-weight-bold text-white h2' style={{ fontFamily:'Playfair Display'}}>Room</div>
                            <div className="d-flex flex-row align-items-center">
                                <a href="/" className="text-white">Home</a>
                                <i class="px-2 fa fa-chevron-right text-white" style={{ fontSize: 14 }}></i>
                                <a href="/" style={{ color: "#cda274" }}>Room</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
         
            <div className="pt-5 pb-5 container">
            <div className="text-center">
                <h1 className="font-weight-bold" >Our Favourite Room</h1>
                <p>Excepteur sint occaecat cupidatat</p>
            </div>
            <div className="pt-5 d-flex flex-wrap flex-row justify-content-center">
                <div className="col-lg-4">
                    <div className="card" >
                        <MDBRow>
                            <MDBCol>
                                <MDBView hover>
                                <img
                                    src={r1}
                                    className="img-fluid w-100"
                                    alt=""
                                />
                                <MDBMask className="flex-center" overlay="black-strong">
                                    <p className="white-text">Strong overlay</p>
                                </MDBMask>
                                </MDBView>
                            </MDBCol>
                        </MDBRow>
                        {/* <div className="">
                            <p className="float-right border rounded-circle text-center" style={{width:'100px', height: '70px'}}>$110.0 Night</p>
                        </div>       */}
                        <div className="card-body">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            <h3 className="pt-3 card-title">Single Room</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-warning rounded-pill">Book Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card" >
                            <MDBRow>
                                <MDBCol>
                                    <MDBView hover>
                                    <img
                                        src={r3}
                                        className="img-fluid w-100"
                                        alt=""
                                    />
                                    <MDBMask className="flex-center" overlay="black-strong">
                                        <p className="white-text">Strong overlay</p>
                                    </MDBMask>
                                    </MDBView>
                                </MDBCol>
                            </MDBRow>
                            <div className="card-body">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                <h3 className="pt-3 card-title">Double Room</h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-warning rounded-pill">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="card" >
                            <MDBRow>
                                <MDBCol>
                                    <MDBView hover>
                                    <img
                                        src={r2}
                                        className="img-fluid w-100"
                                        alt=""
                                    />
                                    <MDBMask className="flex-center" overlay="black-strong">
                                        <p className="white-text">Strong overlay</p>
                                    </MDBMask>
                                    </MDBView>
                                </MDBCol>
                            </MDBRow>
                            <div className="card-body">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                <h3 className="pt-3 card-title">Single Room</h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-warning rounded-pill">Book Now</a>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="pt-5 d-flex flex-wrap flex-row justify-content-center">
                <div className="col-lg-4">
                    <div className="card" >
                        <MDBRow>
                            <MDBCol>
                                <MDBView hover>
                                <img
                                    src={r3}
                                    className="img-fluid w-100"
                                    alt=""
                                />
                                <MDBMask className="flex-center" overlay="black-strong">
                                    <p className="white-text">Strong overlay</p>
                                </MDBMask>
                                </MDBView>
                            </MDBCol>
                        </MDBRow>
                        {/* <div className="">
                            <p className="float-right border rounded-circle text-center" style={{width:'100px', height: '70px'}}>$110.0 Night</p>
                        </div>       */}
                        <div className="card-body">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            <h3 className="pt-3 card-title">Double Room</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-warning rounded-pill">Book Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card" >
                            <MDBRow>
                                <MDBCol>
                                    <MDBView hover>
                                    <img
                                        src={r1}
                                        className="img-fluid w-100"
                                        alt=""
                                    />
                                    <MDBMask className="flex-center" overlay="black-strong">
                                        <p className="white-text">Strong overlay</p>
                                    </MDBMask>
                                    </MDBView>
                                </MDBCol>
                            </MDBRow>
                            <div className="card-body">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                <h3 className="pt-3 card-title">Single Room</h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-warning rounded-pill">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="card" >
                            <MDBRow>
                                <MDBCol>
                                    <MDBView hover>
                                    <img
                                        src={r2}
                                        className="img-fluid w-100"
                                        alt=""
                                    />
                                    <MDBMask className="flex-center" overlay="black-strong">
                                        <p className="white-text">Strong overlay</p>
                                    </MDBMask>
                                    </MDBView>
                                </MDBCol>
                            </MDBRow>
                            <div className="card-body">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                <h3 className="pt-3 card-title">Single Room</h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-warning rounded-pill">Book Now</a>
                            </div>
                        </div>
                    </div>
            </div>                
        </div>
       
            <Footer/>
               
        </div>
    )
}
    


export default Room