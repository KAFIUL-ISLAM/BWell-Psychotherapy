import React from 'react';
import Footer from '../CommonComp/Footer/Footer';
import Header from '../CommonComp/Header/Header';

const AboutMe = () => {
    return (
        <div>
            <Header></Header>
            <div className='mx-auto md:my-24 md:mx-48 bg-[#ffcccc]
            py-8 px-24 text-slate-600 font-medium text-xl rounded-lg shadow-lg'>
                <img className='w-1/2 mx-auto border-2 border-black rounded-lg' src="https://i.ibb.co/4SYzL4s/rsz-1img-3052-2-MB-realres.jpg" alt="" />
                <div className='py-8'>
                    <h1 className='text-center mb-4 text-4xl'>AL KAFIUL ISLAM</h1>
                    <p>I'm a student and a learner. Currently I'm learning Web Development to build my future career. Here I shared some personal motivation to work hard:</p>
               </div>
                <ul className='list-disc list-outside'>
                    <li>Start my day with the most important task</li>
                    <li>Break big goals into small tasks</li>
                    <li>Surround myself with motivated people</li>
                    <li>Reward yourself in small achievement</li>
                    <li>Give yourself breaks</li>
                    <li>Take care of yourself physically</li>
                    <li>Stay focused</li>
                </ul>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutMe;