import React, { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const EditCarInfo = () => {
    const { id } = useParams();
    const [carInfo, setCarInfo] = useState([]);
    const { _id, name, img, price, qty, supplier, brand, des } = carInfo;

    useEffect(() => {
        const url = `http://localhost:5000/car/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setCarInfo(data)
            })
    }, [])


    const formSubmit = (e) => {
        e.preventDefault();
        const updateName = (e.target.name.value);
        const updateImg = (e.target.img.value);
        const updatePrice = (e.target.price.value);
        const updateQty = (e.target.qty.value);
        const updateSupplier = (e.target.supplier.value);
        const updateBrand = (e.target.brand.value);
        const updateDes = (e.target.des.value);

        const data = {
            name: updateName, img: updateImg, price: updatePrice, qty: updateQty, supplier: updateSupplier, brand: updateBrand, des: updateDes
        }
        // console.log(data);

        if (updateQty < 1 || updatePrice < 1) {

            toast.error('Please Enter Valid Price & Quantity')
        } else {

            const url = `http://localhost:5000/car/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Info Updated!!')
                })

        }
    }
    return (
        <div className='py-5'>
            <Container>
                <div className="from-wrapper mx-auto">
                    <h2 className='title'>Update <span className='custom-title'>{name} Info</span></h2>
                    <Form onSubmit={formSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control defaultValue={name} name='name' type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicImg">
                            <Form.Label>Photo Url</Form.Label>
                            <Form.Control defaultValue={img} name='img' type="text" placeholder="Enter Photo Link" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control defaultValue={price} name='price' type="number" placeholder="Enter Price" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicQty">
                            <Form.Label>Total Stock</Form.Label>
                            <Form.Control defaultValue={qty} name='qty' type="number" placeholder="Enter Quantity" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSupplier">
                            <Form.Label>Supplier Name</Form.Label>
                            <Form.Control defaultValue={supplier} name='supplier' type="text" placeholder="Enter Supplier" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicBrand">
                            <Form.Label>Brand Name</Form.Label>
                            <Form.Control defaultValue={brand} name='brand' type="text" placeholder="Enter Brand Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDes">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name='des'
                                defaultValue={des}
                                placeholder="Enter Description"
                                style={{ height: '100px' }}
                            />
                        </Form.Group>

                        <ToastContainer></ToastContainer>
                        <input className='btn custom-btn w-100 mb-2' type="submit" value="Update" />
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default EditCarInfo;