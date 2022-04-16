import { Container } from 'postcss';
import React from 'react';

const Banner = () => {
    return (
        <div className='md:px-12 md:py-40 py-12 bg-cover bg-no-repeat bg-center text-white' style={{ backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://livewp.site/html/optima/img/home_page/img_box_04.jpg)', backgroundColor: '#0c1925'}}>
            <div className='container max-w-3xl px-8 '>
                <h6 className='text-sm font-bold font-sans'>YOUR PRIVATE PSYCHIATRIST & THERAPIST</h6>
                <h1 className='text-5xl font-bold font-serif mt-4'>Welcome to Psychologist & Family Consulting</h1>
                <p className='mt-8'>I am a certified specialist in the branch of psychology concerned with the assessment and treatment of mental illness and behavioural problems</p>
                <button className='rounded px-8 py-4 font-semibold mt-8' style={{ backgroundColor: '#04514B' }}>Book Now</button>
            </div>
       </div>
    );
};

export default Banner;