import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ManageInventoriesData from './ManageInventoriesData/ManageInventoriesData';

const ManageInventories = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://xtreme-cars-2022.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => {
                setCars(data)
            })
    }, [cars])
    return (
        <div className='py-5'>
            <Container>
                <h2 className='title mb-4'>All <span className='custom-title'>Car Details</span></h2>
                <div className="product-table">
                    <Table bordered hover responsive>
                        <thead className='text-white black-bg'>
                            <tr>
                                <th>Id</th>
                                <th>Thumbnail</th>
                                <th>Car Model</th>
                                <th>Price</th>
                                <th>In Stock</th>
                                <th>Brand</th>
                                <th>Supplier</th>
                                <th>Descirption</th>
                                <th>Edit/Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                cars.length === 0 ? (
                                    <tr>
                                        <td colSpan={9} className='text-center py-5'>
                                            <Spinner variant='danger' animation="border" />
                                        </td>
                                    </tr>
                                ) : cars.map(car => <ManageInventoriesData key={car._id} car={car}></ManageInventoriesData>)
                            }
                        </tbody>
                    </Table>
                </div>

                <div className='text-center py-5'>
                    <Link to='/additem' className='btn btn-success'>Add New Item</Link>
                </div>
                <ToastContainer></ToastContainer>
            </Container>
        </div>
    );
};

export default ManageInventories;