import React from 'react';
// import { color } from '../../../config/color'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import '../App.css';

const content = [
    {
        title: 'Quality Holiday With Us',
        description:
            'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
        image: require('../assets/i7.jpg'),
      
        
    },
    {
        title: 'Quality Holiday With Us',
        description:
            'Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
        image: require('../assets/i9.jpg'),
      
    },
    {
        title: 'Quality Holiday With Us',
        description:
            'quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentumconsectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
        image: require('../assets/i4.jpg'),
         
    }
];

const Slider1 = () => {
    return (
        <div>
            <Slider className="slider-wrapper position-relative" autoplay={2000}>
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center`,height:'80%' }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Slider1