import React from 'react';
import p1 from '../assets/p1.PNG'

const Hotel =(props)=>{
    return(
        <div className="pt-5 container">
            <div className="d-flex flex-wrap flex-row justify-content-center">
                <div className="pt-5 col-md-6">
                    <h1 className="pb-4 font-weight-bold">Mandalay Hotel</h1>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut perspiciatis unde omnis natus error.</p>
                    <p className="pt-3">
                    Inventore veritatis et quasi architebeatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.
                    </p>
                    <div className="pt-4" >
                    <a onClick ={()=>props.history.push("/About")} className="btn btn-warning rounded-pill">Read More</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={p1} className="w-100"  />
                </div>
            </div>
        </div>
    )
}
export default Hotel;