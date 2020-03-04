import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import l1 from '../assets/l1.PNG';
import s1 from '../assets/s1.jpg'
import l2 from '../assets/l2.PNG';
import s2 from '../assets/s2.jpg'
// import Collapse from './Collapse.js'


const Service=()=>{
    return(
        <div className="pt-5 container">
            <div className="text-center">
                <h1 className="font-weight-bold">Our Services</h1>
                <p>Excepteur sint occaecat cupidatat</p>
            </div>
            
            <div className="pt-4 container">
                <div className="d-flex flex-wrap flex-row justify-content-center">
                    {/* <Collapse/> */}
                        <div className="">
                        <button className="btn " type="button" data-toggle="collapse" data-target="#restaurant" aria-expanded="false" aria-controls="restaurant" style={{width:'200px', height:'100px'}}>
                           <img src={l1} style={{width: '60px'}} /> Restruant</button> 
                        </div>      
                        <div className="pt-5 row">
                            <div className="col">
                                <div className="collapse multi-collapse" id="restaurant">
                                    <div className="container d-flex flex-wrap flex-row justify-content-center">
                                        <div className="col-6">
                                            <img src={s1} className=""/>
                                        </div>
                                        <div className="col-6">
                                            <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="">
                        <button className="btn " type="button" data-toggle="collapse" data-target="#spa" aria-expanded="false" aria-controls="spa" style={{width:'200px', height:'100px'}}>
                           <img src={l2} style={{width: '70px'}} />Spa</button> 
                        </div>      
                        <div className="pt-5 row">
                            <div className="col">
                                <div className="collapse multi-collapse" id="spa">
                                    <div className="container d-flex flex-wrap flex-row justify-content-center">
                                        <div className="col-6">
                                            <img src={s2} className=""/>
                                        </div>
                                        <div className="col-6">
                                            <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                </div>
            </div>
            
        </div>
    )

}
export default Service;