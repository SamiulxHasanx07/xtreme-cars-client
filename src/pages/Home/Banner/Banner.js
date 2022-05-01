import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://raw.githubusercontent.com/SamiulxHasanx07/xtreme-cars-images/main/banner/banner-1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>Upcoming BMW Stock 2022</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://raw.githubusercontent.com/SamiulxHasanx07/xtreme-cars-images/main/banner/banner-2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h2>Tesla Model 3 Upcoming Stock</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://raw.githubusercontent.com/SamiulxHasanx07/xtreme-cars-images/main/banner/banner-3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Upcoming Stock The Mercedes-Benz EQC</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

export default Banner;