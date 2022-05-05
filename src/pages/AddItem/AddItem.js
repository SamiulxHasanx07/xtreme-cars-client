import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const AddItem = () => {
    const [user] = useAuthState(auth);
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/car',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({...data, email:user?.email})
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success('New Car Added Successfully!!')
            
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
                        <input className='form-control mb-3' type="text" placeholder="Car Name" {...register("name", { required: true })} />

                        <label className='text-muted mb-2'>Photo</label>
                        <input className='form-control mb-3' type="text" placeholder="Car Image Url" {...register("img", {required: true, min: 1})} />
                        <label className='text-muted mb-2'>Price</label>
                        <input className='form-control mb-3' type="number" placeholder="Price" {...register("price", { required: true })} />
                        <label className='text-muted mb-2'>Stock Quantity</label>
                        <input className='form-control mb-3' type="text" placeholder="Quantity" {...register("qty", { required: true })} />
                        <label className='text-muted mb-2'>Supplier Name</label>
                        <input className='form-control mb-3' type="text" placeholder="Supplier" {...register("supplier", { required: true })} />
                        <label className='text-muted mb-2'>Brand Name</label>
                        <input className='form-control mb-3' type="text" placeholder="Brand Name" {...register("brand", { required: true })} />
                        <label className='text-muted mb-2'>Car Description</label>
                        <textarea className='form-control mb-3' placeholder='Add Car Description' {...register("des", { required: true })} />

                        <input className='btn custom-btn w-100' type="submit" />
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </Container>


    );
};

export default AddItem;