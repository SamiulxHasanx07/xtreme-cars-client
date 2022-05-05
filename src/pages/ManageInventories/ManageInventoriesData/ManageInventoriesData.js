import React from 'react';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
const ManageInventoriesData = ({ car }) => {
    const { name, img, _id, price, qty, des, supplier, brand } = car;


    const deleteCar = () => {
        const url = `http://localhost:5000/car?_id=${_id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log('Delete Done');
                toast.success('Delete Done')
            })
    }

    return (
        <tr>
            <td title={_id}>{_id.slice(0, 5)}...</td>
            <td><img style={{ height: '40px' }} src={img} alt="" /></td>
            <td>{name}</td>
            <td>${price}</td>
            <td>{qty}</td>
            <td>{brand}</td>
            <td>{supplier}</td>
            <td title={des}>{des.slice(0, 15)}...</td>
            <td>
                <Link to={`/editcarinfo/${_id}`} className='me-2 btn btn-success'>Edit <FontAwesomeIcon icon={faPen} /></Link>
                <button onClick={deleteCar} className='btn custom-btn'>Delete <FontAwesomeIcon icon={faTrashCan} /></button>
            </td>
        </tr>

    );
};

export default ManageInventoriesData;