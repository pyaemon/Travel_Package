import React from 'react'

import Background from '../../assets/Con2.jpeg'

const ContactForm =()=>{
    return(
        
           
                    <div className='flex-row d-flex justify-content-center'> 
                        <div className='position-absolute w-100'>
                            <img className='img-fluid' src={Background} alt="bg" style={{width:'100%',height:500}}></img>
                        </div> 
                        <div className='col-lg-6 py-5 justify-content-center' >
                            <h4>Contact Form</h4>
                            <div className='pt-3'>
                                <input type='username' className='form-control input-col-sm' placeholder='Your Name' style={{borderRadius:5}}/>
                            </div>
                            <div className='pt-3'>
                                <input type='username' className='form-control input-col-sm' placeholder='Enter Email' style={{borderRadius:5}}/>
                            </div>
                            <div className='pt-3 text-left'>
                                <textarea type='Message' className='form-control input-sm' placeholder='Message' style={{borderRadius:5}}/>    
                            </div>
                            <div className='pt-2'>
                                <button type="button" className="btn btn-warning text-align-top" style={{borderRadius:20}}>Send Message</button>
                            </div>                      
                        </div> 
                           
                    </div>
                
    )
}
export default ContactForm