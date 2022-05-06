import React from 'react';
import Banner from './Banner/Banner';
import Cars from './Cars/Cars';
import InfoCount from './InfoCount/InfoCount';
import WhyXtremeCarBest from './WhyXtremeCarBest/WhyXtremeCarBest';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyXtremeCarBest/>
            <Cars></Cars>
            <InfoCount></InfoCount>
        </div>
    );
};

export default Home;