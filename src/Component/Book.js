import React from 'react'
import r1 from '../assets/r1.jpg';
import r2 from '../assets/r4.jpg';
import r3 from '../assets/r3.jpg';
import { MDBMask, MDBView, MDBRow, MDBCol } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import 'font-awesome/css/font-awesome.min.css';

const Book=()=>{
    return(
        <div className="container">
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
                                <MDBMask className="flex-center" overlay="red-strong">
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
                            <a href="#" className="btn btn-primary rounded-pill">Book Now</a>
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
                                    <MDBMask className="flex-center" overlay="red-strong">
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
                                <a href="#" className="btn btn-primary rounded-pill">Book Now</a>
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
                                    <MDBMask className="flex-center" overlay="red-strong">
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
                                <a href="/" className="btn btn-primary rounded-pill">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5">
                        <button type="button" className="btn btn-light rounded-pill">Book Now</button>
                    </div>
            </div>        
        </div>
       
    )
}
export default Book;