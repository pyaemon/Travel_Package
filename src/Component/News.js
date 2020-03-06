import React from 'react'
import Footer from './Contact/footer'

import W_P from '../assets/Wallpaper.jpg'
import Header2 from './Header2'
import LatestNew from './LatestNew'
import r1 from '../assets/r1.jpg';
import r2 from '../assets/r4.jpg';
import r3 from '../assets/r3.jpg';
import { MDBMask, MDBView, MDBRow, MDBCol } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import 'font-awesome/css/font-awesome.min.css';
import About from './About'

const News =(props)=>{
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

        <div className="p-3 container">
            <div className="pt-5 d-flex flex-wrap flex-row justify-content-center">
                <div className="col-lg-4">
                    <div className="card" >
                        <MDBRow>
                            <MDBCol>
                                <MDBView hover>
                                <img
                                    src="https://cardiogenix.com/wp-content/uploads/2016/04/hotel-bed-rooms-contemporary-design-9-on-bed-design-ideas.jpg"
                                    className="img-fluid w-100 opacity-2"
                                    alt=""
                                />
                                <MDBMask className="flex-center opacity-2" overlay="black-strong">
                                </MDBMask>
                                </MDBView>
                            </MDBCol>
                        </MDBRow>
                       
                        <div className="card-body">
                            <h3 className="pt-3 card-title">Electric Feel And Of Other Things</h3>
                            <p className="card-text">by adminon June 11, 2019</p>
                            <p className="card-text">Excepteur sint occaecat cupidatat non proi dent sunt in culpa qui officia deserunt mollit anim id est. laborum. ...</p>
                            <a onClick ={()=>props.history.push("/About")} className="btn btn-warning rounded-pill">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card" >
                            <MDBRow>
                                <MDBCol>
                                    <MDBView hover>
                                    <img
                                        src="https://i.pinimg.com/originals/ee/2b/6c/ee2b6cc371b360282534163cde417157.jpg"
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
                                        src="https://www.superiorwallpapers.com/images/lthumbs/2015-05/8229_Gorgeous-and-colorful-hotel-room-HD.jpg"
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
        <div className="p-3 container">
            <div className="pt-5 d-flex flex-wrap flex-row justify-content-center">
                <div className="col-lg-4">
                    <div className="card" >
                        <MDBRow>
                            <MDBCol>
                                <MDBView hover>
                                <img
                                    src="https://www.ahstatic.com/photos/9149_hofh_00_p_2560x1440.jpg"
                                    className="img-fluid w-100 opacity-2"
                                    alt=""
                                />
                                <MDBMask className="flex-center opacity-2" overlay="black-strong">
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
                                        src="https://pix10.agoda.net/hotelImages/169045/-1/399a983e06a2e5936e1cb9150adab5fb.jpg?s=1024x768"
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
        <div>
        <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
        <li class="page-item success">
        <a class="page-link" href="#" tabindex="-1" aria-disabled="true"></a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        {/* <li class="page-item"><a class="page-link" href="#">3</a></li> */}
        <li class="page-item">
        <a class="page-link" href="">Next</a>
        </li>
  </ul>
</nav>    
        </div>    
         
        <Footer/>
        </div>
    )
}
    


export default News