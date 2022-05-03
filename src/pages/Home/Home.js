import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from './Banner/Banner';
import Cars from './Cars/Cars';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cars></Cars>
        </div>
    );
};

export default Home;