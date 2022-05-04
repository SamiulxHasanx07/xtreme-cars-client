import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Inventory = () => {
    const { carId } = useParams();
    const [car, setCar] = useState([]);
    const [stockQty, setStockQty] = useState(false)
    const { name, img, _id, price, qty, des, supplier, brand } = car;

    useEffect(() => {
        const url = `http://localhost:5000/car/${carId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCar(data)
            })
    }, [stockQty])

    const updateQty = (e) => {
        e.preventDefault();
        const inputQty = e.target.qty.value;
        const oldQty = parseInt(qty)
        const updateQty = parseInt(inputQty)
        const data = {
            newQty: oldQty + updateQty
        }

        if (inputQty > 0) {
            const url = `http://localhost:5000/carqty/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(res => res.json())
                .then(data => {
                    setStockQty(!stockQty)
                    toast.success(`${updateQty} ${name} Added`)
                    e.target.reset()
                })
        } else {
            toast.warning('Enter Valid Number')
        }
    }

    const delivery = () => {
        const oldQty = parseInt(qty)
        const data = {
            newQty: oldQty - 1
        }
        if (qty > 0) {
            const url = `http://localhost:5000/carqty/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(res => res.json())
                .then(data => {
                    setStockQty(!stockQty)
                    toast.success(`${name} Deliverd`)
                })
        } else {
            toast.error('Stock Out!! Please Update Stock')
        }
    }
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
                            <h5>Brand: {brand ? brand : 'Data not exists'}</h5>
                            <h5>Supplier: {supplier}</h5>
                            <p>{des}</p>
                            {/* update stock */}
                            <div className='mb-3'>
                                <h5>Update Stock Quantity:</h5>
                                <Form onSubmit={updateQty} className='d-flex align-items-center'>
                                    <input name='qty' type="number" placeholder='Update Stock' className='d-block me-2 form-control w-25' />
                                    <div>
                                        <button className='btn custom-btn py-2 px-4'>Update</button>
                                    </div>
                                </Form>
                            </div>
                            <button onClick={delivery} className='btn custom-btn py-2 px-5'>Delivered</button>
                        </Col>
                    </Row>
                </div>

                <div className='py-5 text-center'>
                    <h2 className='title'>Manage <span className='custom-title'>All Inventories</span></h2>
                    <Link to='/manageinventories' className='custom-btn btn mt-3'>Manage Inventories</Link>
                </div>
            </Container>
            <ToastContainer />
        </div>
    );
};

export default Inventory;