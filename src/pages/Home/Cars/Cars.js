import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Loading from '../../Shared/Loading/Loading';
import Car from './Car/Car';

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data.slice(0, 6)))

    }, [])
    return (
        <div className='cars-section py-5 bg-light'>
            <Container>
                <h2 className='pb-4 title'>All <span className='custom-title'>Cars</span></h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        cars.length === 0 ? (
                            <div className='d-flex align-items-center justify-content-center w-100 py-5'>
                                <Spinner variant='danger' animation="border" />
                            </div>
                        ) : cars.map(car => <Car key={car._id} singleCar={car}></Car>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Cars;