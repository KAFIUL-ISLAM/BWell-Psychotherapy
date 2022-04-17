import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../../CommonComp/Header/Header';

const Checkout = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const user = true;

    return (
        <div>
            <Header></Header>
            <div className='grid md:grid-cols-2'>
                <div>
                    <h1>this is another column</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='bg-green-600 p-24 flex flex-col gap-y-4'>
                    <h1 className='text-center mb-5 text-2xl text-white font-medium'>Enter Addtional Information to checkout</h1>
                    <input defaultValue={user?.useName} {...register("Name")} placeholder='Your name' className='rounded py-2 font-medium font-sans' />
                    <input type='number' {...register("firstName")} placeholder='Phone number' className='rounded py-2 font-medium font-sans' />
                    <input type="number" {...register("age", { min: 18, max: 99 })} placeholder='Your age' className='rounded py-2 font-medium font-sans' />
                    <select {...register("gender")} className='rounded py-2 font-medium font-sans'>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                    </select>
                    <textarea {...register("firstName")} placeholder='Address' className='rounded py-2 font-medium font-sans' />
                    <button type="submit" className='text-white'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;