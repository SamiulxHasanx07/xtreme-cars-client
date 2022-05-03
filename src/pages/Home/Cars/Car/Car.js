import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Car = ({ singleCar }) => {
    console.log(singleCar);
    const { name, images, price, qty, supplier, des } = singleCar;

    return (
        <div>
            <Col>
                <Card className='car-card border-0'>
                    <Card.Img variant="top" src={images} />
                    <Card.Body>
                        <h3>{name}</h3>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h4>${price}</h4>
                            <h6 className='text-danger'>In Stock: {qty}</h6>
                        </div>
                        <h6>Supplier: {supplier}</h6>
                        <h6>Brand: {supplier}</h6>
                        <Card.Text>
                            {des}
                        </Card.Text>
                        <div className='text-center my-4'>
                            <button className='btn btn-danger'>Update Details</button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Car;