import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Header from '../../CommonComp/Header/Header';
import Spinner from '../../CommonComp/Spinner/Spinner';
import { ServiceContext } from '../../Homepage/Service/Service';

const Checkout = () => {

    const [user] = useAuthState(auth);
    const service = useContext(ServiceContext);
    console.log(service);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = () => {
        toast("Your Booking request is successfully sent!");
    };

    return (
        <div>
            <Header></Header>
            <div className='grid md:grid-cols-2'>
                <div className='bg-[#CAD5E2] px-24 py-24 md:py-48 flex justify-center items-center'> 
                    <div className='bg-[#D9BE93] p-12 text-white font-medium text-xl rounded-lg shadow-2xl'>
                        <h1>Package Information</h1>
                        <p>Name:</p>
                        <p>Details:</p>
                        <p>Price:</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='bg-[#D9BE93] px-24 py-24 md:py-48 flex flex-col gap-y-4'>
                    <h1 className='text-center mb-5 text-2xl text-white font-medium'>Enter Additional Information to checkout</h1>
                    <input defaultValue={user?.displayName} {...register("name")} placeholder='Your name' className='rounded py-2 font-medium font-sans' required />
                    <input type='number' {...register("phoneNumber")} placeholder='Phone number' className='rounded py-2 font-medium font-sans' required />
                    <input type="number" {...register("age", { min: 18, max: 99 })} placeholder='Your age' className='rounded py-2 font-medium font-sans' required />
                    {errors.age && "Your age should be 18 to 99"}
                    <select {...register("gender")} className='rounded py-2 font-medium font-sans' required>
                        <option value="" disable='true' hidden>Select your gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                    </select>
                    <textarea {...register("address")} placeholder='Address' className='rounded py-2 font-medium font-sans' required />
                    <button type="submit" className='text-[#D9BE93] bg-white hover:text-white hover:bg-[#D9BE93]
                    hover:border-2 text-2xl font-bold rounded-lg py-2'>Submit</button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default Checkout;