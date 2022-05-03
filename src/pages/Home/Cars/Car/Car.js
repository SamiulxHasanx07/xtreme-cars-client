import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Car = ({ singleCar }) => {
    console.log(singleCar);
    const { name, images, price, qty, supplier, des } = singleCar;

    return (
        <div>
            <Col>
                <Card className='car-card'>
                    <Card.Img variant="top" src={images} />
                    <Card.Body>
                        <h3>{name}</h3>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h5>${price}</h5>
                            <h6 className='text-danger'>In Stock: {qty}</h6>
                        </div>
                        <h5 className='text-info'>Supplier: {supplier}</h5>
                        <h5 className='text-danger'>Brand: {supplier}</h5>
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