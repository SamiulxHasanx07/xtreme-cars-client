import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import ManageInventoriesData from './ManageInventoriesData/ManageInventoriesData';

const ManageInventories = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => {
                setCars(data)
            })
    }, [])
    return (
        <div className='py-5'>
            <Container>
                <h2 className='title mb-4'>All <span className='custom-title'>Car Details</span></h2>
                <Table bordered hover>
                    <thead className='table-dark'>
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
                            cars.map(car=><ManageInventoriesData key={car._id} car={car}></ManageInventoriesData>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ManageInventories;