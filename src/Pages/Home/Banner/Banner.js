import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div >
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 slider-img"
                        src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/slider-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h6>SWITZERLAND</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 slider-img"
                        src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/slider-2.jpg "
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h6>NORWAY</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-img"
                        src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/slider-3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h6>FINLAND</h6>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;