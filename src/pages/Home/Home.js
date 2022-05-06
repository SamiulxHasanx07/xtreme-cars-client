import React from 'react';
import Banner from './Banner/Banner';
import Cars from './Cars/Cars';
import InfoCount from './InfoCount/InfoCount';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cars></Cars>
            <InfoCount></InfoCount>
        </div>
    );
};

export default Home;