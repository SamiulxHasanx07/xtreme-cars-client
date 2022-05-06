import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItemsData from './MyItemsData/MyItemsData';

const MyItems = () => {
    const [myDatas, setMyDatas] = useState();
    const [user] = useAuthState(auth);
    console.log(myDatas);

    useEffect(() => {
        const url = `http://localhost:5000/myitems/${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyDatas(data))
    }, [myDatas])


    return (
        <div className='py-5'>
            <Container>
                <h2 className='title mb-4'>My <span className='custom-title'>Items</span></h2>

                <div className="product-table">
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
                                myDatas?.map(myData => <MyItemsData key={myData._id} myData={myData} ></MyItemsData>)
                            }
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default MyItems;