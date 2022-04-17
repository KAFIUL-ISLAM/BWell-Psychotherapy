import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Header from '../../CommonComp/Header/Header';

const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = () => {
        toast("Registration successful! Verification E-mail sent");
    };
    const user = true;

    return (
        <div>
            <Header></Header>
            <div className='md:py-24'>
                <div className='md:w-1/2 mx-auto bg-[#91D0CC] rounded-lg shadow-2xl px-24 py-24 md:py-24'>
                    <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col gap-y-4 '>
                        <h1 className='text-center mb-5 text-4xl text-white font-bold'>Please Register</h1>
                        <input defaultValue={user?.userName} {...register("name")} placeholder='Your name' className='rounded py-2 font-medium font-sans' required />
                        <input defaultValue={user?.userName} {...register("email")} placeholder='Email' className='rounded py-2 font-medium font-sans' required />
                        <input type='password' {...register("password")} placeholder='Password' className='rounded py-2 font-medium font-sans' required />
                        <input type='password' {...register("confirmPassword")} placeholder='Confirm Password' className='rounded py-2 font-medium font-sans' required />
                        <p className='text-white'>Already registered? <Link className='underline font-medium' to={'/login'}>Login here</Link></p>
                        <button type="submit" className='text-[#91D0CC] bg-white hover:text-white hover:bg-[#91D0CC]
                        border-2 text-xl font-bold rounded-lg py-1'>Register</button>
                        <ToastContainer />
                    </form>
                    <div className='flex gap-4 items-center font-bold'>
                        <hr className='w-1/2' />
                        <p className='text-white'>or</p>
                        <hr className='w-1/2' />
                    </div>
                    <button className='mt-4 text-[#91D0CC] w-full bg-white text-xl font-medium py-1 flex justify-center items-center gap-8'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="40" height="40"
                            viewBox="0 0 48 48"
                            style={{ fill: '#000000' }}><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
                        Sign-up with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;