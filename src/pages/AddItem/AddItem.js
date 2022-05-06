import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { toast, ToastContainer } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Swal from 'sweetalert2';
const AddItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        console.log(errors);

        fetch('http://localhost:5000/car', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...data, email: user?.email })
        })
            .then(res => res.json())
            .then(data => {
                e.target.reset();
                // toast.success('New Car Added Successfully!!')
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully Added New Car!!',
                    confirmButtonColor: '#198754',
                })
            })

    };


    // console.log(errors);
    return (
        <Container>
            <div className='py-5'>
                <h2 className='title text-center mb-5'>Add <span className='custom-title'>Item</span></h2>

                <div className="form-wrapper w-50 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className='text-muted mb-2'>Car Name</label>
                        <input className='form-control mb-3' type="text" placeholder="Car Name" {...register("name", { required: 'Name Required' })} />
                        <ErrorMessage className='text-danger m-0 mb-3' errors={errors} name="name" as="p" />

                        <label className='text-muted mb-2'>Photo</label>
                        <input className='form-control mb-3' type="text" placeholder="Car Image Url" {...register("img", { required: "Photo Url Required"})} />
                        <ErrorMessage className='text-danger m-0 mb-3' errors={errors} name="img" as="p" />
                        <label className='text-muted mb-2'>Price</label>
                        <input className='form-control mb-3' type="number" placeholder="Price" {...register("price", { required: "Price Required", min: 1  })} />
                        <ErrorMessage className='text-danger m-0 mb-3' errors={errors} name="price" as="p" />
                        <label className='text-muted mb-2'>Stock Quantity</label>
                        <input className='form-control mb-3' type="number" placeholder="Quantity" {...register("qty", { required: "Enter Product Quantity", min: 1  })} />
                        <ErrorMessage className='text-danger m-0 mb-3' errors={errors} name="qty" as="p" />
                        <label className='text-muted mb-2'>Supplier Name</label>
                        <input className='form-control mb-3' type="text" placeholder="Supplier" {...register("supplier", { required: "Enter Supplier Name" })} />
                        <ErrorMessage className='text-danger m-0 mb-3' errors={errors} name="supplier" as="p" />
                        <label className='text-muted mb-2'>Brand Name</label>
                        <input className='form-control mb-3' type="text" placeholder="Brand Name" {...register("brand", { required: "Enter Brand Name" })} />
                        <ErrorMessage className='text-danger m-0 mb-3' errors={errors} name="brand" as="p" />
                        <label className='text-muted mb-2'>Car Description</label>
                        <textarea className='form-control mb-3' placeholder='Add Car Description' {...register("des", { required: "Please Enter Product Description" })} />
                        <ErrorMessage className='text-danger m-0 mb-3' errors={errors} name="des" as="p" />
                        <input className='btn custom-btn w-100' type="submit" />
                    </form>
                </div>
            </div>
            <ToastContainer />
        </Container>


    );
};

export default AddItem;