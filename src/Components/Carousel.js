import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="./Assets/breakfast.jpg" alt='img-1' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="./Assets/dinner.png" alt='img-2'/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="./Assets/drinks.png" alt='img-3'/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

ReactDOM.render(<DemoCarousel />, document.getElementById('root'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>