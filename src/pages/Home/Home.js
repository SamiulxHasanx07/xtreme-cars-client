import React from 'react';
import GetInTouch from '../GetInTouch/GetInTouch';
import Banner from './Banner/Banner';
import Cars from './Cars/Cars';
import InfoCount from './InfoCount/InfoCount';
import WhyXtremeCarBest from './WhyXtremeCarBest/WhyXtremeCarBest';
import FeaturedCar from '../FeaturedCar/FeaturedCar';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyXtremeCarBest />
            <Cars></Cars>
            <FeaturedCar />
            <InfoCount></InfoCount>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;