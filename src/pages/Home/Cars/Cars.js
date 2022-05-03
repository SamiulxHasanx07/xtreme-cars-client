import React, { useEffect, useState } from 'react';
import {Container, Row } from 'react-bootstrap';
import Car from './Car/Car';

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data))

    }, [])
    return (
        <div className='cars-section py-5 bg-light'>
            <Container>
                <h2 className='pb-4'>All Cars</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        cars.map(car => <Car key={car._id} singleCar={car}></Car>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Cars;