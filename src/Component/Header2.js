import React from 'react'


const Header2=()=>{
    return(
    <div>
        <div className='container'>
            <div className='d-flex flex-row flex-wrap px-0 py-1 justify-content-between'>
                <div className='d-flex flex-row flex-wrap p-0 '>
                    <div className='col text-left justify-content-start p-0' style={{fontSize:16}}>
                        <div className='pt-2 d-flex flex-row'>
                            <div className=''>
                                <a className="p-1 fa fa-envelope text-warning"></a>
                            </div>
                            <div className=''>
                                 office@kumomyanmar.com
                            </div>
                        </div>                      
                    </div>
                    <div className='pt-2 col justify-content-end'>
                        <div className='d-flex flex-row'>
                            <div className=''>
                                <a className="p-1 fa fa-globe text-warning"></a>
                            </div>
                            <div className=''>
                                kumomyanmar.com
                            </div>
                        </div>
                    </div>
                </div>
            <div className='row justify-content-end' style={{fontSize:18}}>
                <a className='p-2 text-dark' href='https://www.facebook.com/' title='facebook'><i className="fa fa-facebook"></i></a>
                <a className='p-2 text-dark'  href='https://twitter.com/'title='twitter'><i class="fa fa-twitter" ></i></a>
                <a className='p-2 text-dark' href='https://vimeo.com/'title='vimeo'><i class="fa fa-vimeo" ></i></a>
                <a className='p-2 text-dark' href='https://www.pinterest.com/'title='pinterest'><i class="fa fa-pinterest" ></i></a>
                <a className='p-2 text-dark' href='https://plus.google.com/'title='google-plus'><i class="fa fa-google-plus" ></i></a>               
            </div>
        </div>
    </div>
    </div>

    )
}
export default Header2;