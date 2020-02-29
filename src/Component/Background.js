import React from 'react';

const Background=()=>{
    let imgUrl='images/bg1.jpg';
    return(
        <div className="pt-3" style = {{  backgroundImage: 'url(' + imgUrl + ')',backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <h1 className="text-center">Enjoy your holiday</h1>
        </div>
        
    )
}
export default Background