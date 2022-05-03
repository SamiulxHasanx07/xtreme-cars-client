import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { carId } = useParams();
    console.log(carId);
    const [car, setCar] = useState([]);
    console.log(car);
    const { name, img, _id, price, qty, des, supplier, brand } = car;

    useEffect(() => {
        const url = `http://localhost:5000/car/${carId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCar(data)
            })
    }, [])
    return (
        <div className='py-5'>
            <Container>
                <h2 className='text-center title'><span className='custom-title'>Inventory</span> Page</h2>
                <div className="mt-5">
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <div className="car-container">
                                <img className='border border-1 p-1' src={img} alt="" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <h2>Model: {name}</h2>
                            <p className='mb-1'>Car Id: {_id}</p>
                            <h3>Price: <span className='main-color'>${price}</span></h3>
                            <hr />
                            <h4>In Stock: {qty}</h4>
                            <h5>Brand: {brand?brand:'Data not exists'}</h5>
                            <h5>Supplier: {supplier}</h5>
                            <p>{des}</p>
                            <button className='btn custom-btn py-2 px-5'>Delivered</button>
                        </Col>
                    </Row>
                </div>
            </Container>

        </div>
    );
};

export default Inventory;