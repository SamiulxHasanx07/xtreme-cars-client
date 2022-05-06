import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const GetInTouch = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        e.target.reset();
        toast.success('Thanks for Contact Us')
    };
    return (
        <div className='py-5'>
            <Container>
                <h1 className='title text-center mb-4'><span className='custom-title'>Contact</span> Us</h1>
                <div className="form-wrapper mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='form-control mb-2' type="text" placeholder="Full Name" {...register("name", { required: "Please Enter Your Name", maxLength: 80 })} />
                        <ErrorMessage className='text-danger m-0 mb-3' errors={errors} name="name" as="p" />
                        <input className='form-control mb-2' type="email" placeholder="Your Business Mail" {...register("mail", { required: "Your Business Mail", pattern: /^\S+@\S+$/i })} />
                        <ErrorMessage className='text-danger m-0 mb-3' errors={errors} name="mail" as="p" />
                        <input className='form-control mb-2' type="text" placeholder="Subject" {...register("subject", { required: "Enter Subject" })} />
                        <ErrorMessage className='text-danger m-0 mb-3' errors={errors} name="subject" as="p" />
                        <textarea className='form-control mb-2' placeholder="Your Message" {...register("msg", { required: "Your Message" })} />
                        <ErrorMessage className='text-danger m-0 mb-3' errors={errors} name="msg" as="p" />
                        <input className='btn custom-btn w-100' type="submit" value='Send'/>
                    </form>
                </div>
                <ToastContainer/>
            </Container>
        </div>
    );
};

export default GetInTouch;