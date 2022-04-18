import React from 'react';

const Footer = () => {
    return (
        <div className='px-24 pb-8 pt-24 bg-[#a29bfe] text-white'>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-y-12 gap-x-12 content-evenly '>
                <div className=''>
                    <h1 className='font-bold text-3xl font-mono mb-4'>BWell Psychotherapy</h1>
                    <p className=''>Our clinic largest private mental health partnership, with a carefully selected nationwide team of Psychiatrists.</p>
                </div>
                <div>
                    <h1 className='font-bold font-mono text-lg mb-4'>HEAD CLINICK</h1>
                    <p>455 Wallstreet St., New York, VA 12364 United States of America</p>
                    <p className='my-8 text-orange-800'>826 696 8370</p>
                    <p>We Work for You Every Day from 8.00 AM to 6.00 PM</p>
                </div>
                <div>
                    <h1 className='font-bold font-mono text-lg mb-4'>OUR LATEST NEWS</h1>
                    <p>Am i Depressed? 6 Signs You Should Know About<span className='text-sm'> 25 September, 2017</span></p>
                    <p className='mt-8'>Anxiety Disorder: Which Therapy is Right for Me<span className='text-sm'> 25 September, 2017</span></p>
                </div>
                <div className='md:pl-12'>
                    <h1 className='font-bold font-mono text-lg mb-4'>QUICK LINKS</h1>
                    <p className='text-blue-600'>Home</p>
                    <p className='text-blue-600'>About</p>
                    <p className='text-blue-600'>Services</p>
                    <p className='text-blue-600'> News</p>
                    <p className='text-blue-600'>Gallery</p>
                    <p className='text-blue-600'>Contacts</p>
                </div>
            </div>
            <p className='text-center mt-12'>Copyright&copy; 2022 | All rights reserved</p>
        </div>
    );
};

export default Footer;