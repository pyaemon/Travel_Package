import React from 'react'
import r1 from '../assets/r1.jpg';
import r2 from '../assets/r4.jpg';
import r3 from '../assets/r3.jpg';
import { MDBMask, MDBView, MDBRow, MDBCol } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import 'font-awesome/css/font-awesome.min.css';

const LatestNew=()=>{
    return(
        <div className="pb-5 container">
                <h1 className="font-weight-bold" >Latest New</h1>
                <p>Excepteur sint occaecat cupidatat</p>
           
            <div className="pt-5 d-flex flex-wrap flex-row justify-content-center">
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
                                </MDBMask>
                                </MDBView>
                            </MDBCol>
                        </MDBRow>
                       
                        <div className="card-body">
                            <h3 className="pt-3 card-title">Electric Feel And Of Other Things</h3>
                            <p className="card-text">by adminon June 11, 2019</p>
                            <p className="card-text">Excepteur sint occaecat cupidatat non proi dent sunt in culpa qui officia deserunt mollit anim id est. laborum. ...</p>
                            <a href="#" className="btn btn-warning rounded-pill">Read More</a>
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
                                    </MDBMask>
                                    </MDBView>
                                </MDBCol>
                            </MDBRow>
                        
                            <div className="card-body">
                                <h3 className="pt-3 card-title">Cras Ultricies Ligula Sed Magna.</h3>
                                <p className="card-text">by adminon June 11, 2019</p>
                                <p className="card-text">Excepteur sint occaecat cupidatat non proi dent sunt in culpa qui officia deserunt mollit anim id est. laborum. ...</p>
                                <a href="#" className="btn btn-warning rounded-pill">Read More</a>
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
                                    </MDBMask>
                                    </MDBView>
                                </MDBCol>
                            </MDBRow>
                        
                            <div className="card-body">
                                <h3 className="pt-3 card-title">Lacinia eget consecte sed convallis.</h3>
                                <p className="card-text">by adminon June 11, 2019</p>
                                <p className="card-text">Excepteur sint occaecat cupidatat non proi dent sunt in culpa qui officia deserunt mollit anim id est. laborum. ...</p>
                                <a href="#" className="btn btn-warning rounded-pill">Read More</a>
                            </div>
                        </div>
                    </div>
            </div>        
        </div>     
    )
}
export default LatestNew;