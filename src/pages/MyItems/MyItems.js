import { async } from '@firebase/util';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import MyItemsData from './MyItemsData/MyItemsData';

const MyItems = () => {
    const [myDatas, setMyDatas] = useState([]);
    const [user] = useAuthState(auth);

    const navigate = useNavigate();
    useEffect(() => {
        const url = `https://xtreme-cars-2022.herokuapp.com/myitems/${user?.email}`;
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    navigate('/login')
                } else {
                    return res.json()
                }
            })
            .then(data => {
                setMyDatas(data)
            })

    }, [myDatas])


    return (
        <div className='py-5'>
            <Container>
                <h2 className='title mb-4'>My <span className='custom-title'>Items</span></h2>

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
                                myDatas.length === 0 ? (
                                    <tr>
                                        <td colSpan={9} className='text-center py-5'>
                                            <Spinner variant='danger' animation="border" />
                                        </td>
                                    </tr>
                                ) : myDatas?.map(myData => <MyItemsData key={myData._id} myData={myData} ></MyItemsData>)
                            }
                        </tbody>
                    </Table>
                </div>
                <div className='text-center py-5'>
                    <Link to='/additem' className='btn btn-success'>Add New Item</Link>
                </div>
            </Container>
        </div>
    );
};

export default MyItems;