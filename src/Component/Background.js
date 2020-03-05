import React from 'react';
import {  MDBCol, MDBCard, MDBIcon, MDBBtn } from "mdbreact";

const Background = () => {
  return (
    <div className="">
        <section className="text-center my-5">
           
            <MDBCol md="12" className="mb-4">
                <MDBCard className="card-image w-100" style={{
                        backgroundImage:
                        "url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg)"
                    }}>
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                    <div>
                    <h6 className="purple-text">
                        <MDBIcon icon="plane" />
                        <strong> Travel</strong>
                    </h6>
                    <h3 className="py-3 font-weight-bold">
                        <strong>Enjoy your holiday</strong>
                    </h3>
                    <p className="text-center pb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Repellat fugiat, laboriosam, voluptatem, optio vero odio
                        nam sit officia accusamus minus error nisi architecto
                        nulla ipsum dignissimos. Odit sed qui, dolorum!
                    </p>
                    <MDBBtn color="secondary" rounded size="md">
                        <MDBIcon far icon="clone" className="left" /> View project
                    </MDBBtn>
                    </div>
                </div>
                </MDBCard>
            </MDBCol>
          
        </section>
    </div>
  
  );
}


export default Background;