import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Car = ({ singleCar }) => {
    const { _id, name, img, price, qty, supplier, brand, des } = singleCar;

    return (
        <div>
            <Col>
                <Card className='car-card border-0'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <h3>{name}</h3>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h4>${price}</h4>
                            <h6 className='text-danger'>In Stock: {qty}</h6>
                        </div>
                        <h6>Supplier: {supplier}</h6>
                        <h6>Brand: {brand}</h6>
                        <Card.Text>
                            {des.length>80?des.slice(0,80)+'...':des}
                        </Card.Text>
                        <div className='text-center my-4'>
                            <Link to={`/inventory/${_id}`} className='btn btn-danger'>Update Details</Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Car;