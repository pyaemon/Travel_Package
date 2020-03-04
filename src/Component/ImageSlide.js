import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage
 } from "mdbreact";
import img1 from '../assets/c1.PNG';
import img2 from '../assets/c2.PNG';
import img3 from '../assets/c3.PNG';
import img4 from '../assets/c4.PNG'

const ImageSlide= () => {
  return (
    <div className="">
        <h1 className="text-center font-weight-bold"> What Other Say?</h1>
        <p className="text-center">Excepteur sint occaecat cupidatat</p>

        <MDBContainer>
            <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={true} multiItem>
                <MDBCarouselInner>
                <MDBRow>
                    {/* <MDBCarouselItem itemId="1"> */}
                    <MDBCol md="4">
                        <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src={img1} />
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src={img2} />
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src={img3} />
                        </MDBCard>
                    </MDBCol>
                    {/* </MDBCarouselItem> */}
                    <MDBCarouselItem itemId="2">
                    <MDBCol md="4">
                        <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src={img4} />
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src={img2} />
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src={img3} />
                        </MDBCard>
                    </MDBCol>
                    </MDBCarouselItem>

                </MDBRow>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    </div>
    
   
  );
}

export default ImageSlide;