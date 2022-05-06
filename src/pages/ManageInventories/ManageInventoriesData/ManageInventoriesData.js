import React from 'react';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const ManageInventoriesData = ({ car }) => {
    const { name, img, _id, price, qty, des, supplier, brand } = car;

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    const deleteCar = () => {
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: `Want to delete ${name} ?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `http://localhost:5000/car?_id=${_id}`
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        swalWithBootstrapButtons.fire(
                            'Deleted!',
                            `${name} has been successfully deleted.`,
                            'success'
                        )
                    })

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    `${name} Item not deleted`,
                    'error'
                )
            }
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
                <div className='d-flex'>
                    <Link to={`/editcarinfo/${_id}`} className='me-2 btn btn-success'>Edit <FontAwesomeIcon icon={faPen} /></Link>
                    <button onClick={deleteCar} className='btn custom-btn'>Delete <FontAwesomeIcon icon={faTrashCan} /></button>
                </div>
            </td>
        </tr>

    );
};

export default ManageInventoriesData;