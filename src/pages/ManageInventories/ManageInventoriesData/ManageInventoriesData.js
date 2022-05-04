import React from 'react';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ManageInventoriesData = ({car}) => {
    const { name, img, _id, price, qty, des, supplier, brand } = car;
    return (
        <tr>
            <td title={_id}>{_id.slice(0,5)}...</td>
            <td><img style={{height:'40px'}} src={img} alt="" /></td>
            <td>{name}</td>
            <td>${price}</td>
            <td>{qty}</td>
            <td>{brand}</td>
            <td>{supplier}</td>
            <td title={des}>{des.slice(0,15)}...</td>
            <td>
                <button className='me-2 btn btn-success'>Update <FontAwesomeIcon icon={faPen}/></button>
                <button className='btn custom-btn'>Delete <FontAwesomeIcon icon={faTrashCan}/></button>
            </td>
        </tr>
    );
};

export default ManageInventoriesData;