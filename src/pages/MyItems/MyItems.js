import { async } from '@firebase/util';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import MyItemsData from './MyItemsData/MyItemsData';

const MyItems = () => {
    const [myDatas, setMyDatas] = useState([]);
    const [user] = useAuthState(auth);

    const navigate = useNavigate();
    useEffect(() => {


        // const url = `http://localhost:5000/myitems/${user?.email}`;
        // try {
        //     fetch(url, {
        //         headers: {
        //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //         }
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             try {

        //                 setMyDatas(data)
        //             }
        //             catch (error) {
        //                 console.log(error);
        //             }
        //             // console.log(data);

        //         })
        // }
        // catch (error) {
        //     console.log('test');

        //     // console.log(error);

        // }

        const url = `http://localhost:5000/myitems/${user?.email}`;
        // try {
        //     fetch(url, {
        //         headers: {
        //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //         }
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             // console.log(data.message);
        //             // console.log(data);   
        //             // setMyDatas(data)
        //             // console.log(data);
        //         })
        // } catch (error) {
        //     console.log('error');

        // }

        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res =>{
                if(res.status === 401 || res.status === 403 ){
                    signOut(auth)
                    navigate('/login')
                }else{
                    return res.json()
                }
            })
            .then(data => {
                setMyDatas(data)
            })

    }, [])


    return (
        <div className='py-5'>
            <Container>
                <h2 className='title mb-4'>My <span className='custom-title'>Items</span></h2>

                <div className="product-table">
                    <Table bordered hover responsive>
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