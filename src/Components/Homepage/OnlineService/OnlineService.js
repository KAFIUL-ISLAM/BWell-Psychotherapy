import React from 'react';

const OnlineService = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 mt-24 justify-items-center content-center gap-4'>
            <div className='text-slate-600 p-12'>
                <h2 className='font-serif font-semibold'>ONLINE SESSION</h2>
                <h1 className='text-4xl font-semibold py-4'>Get a Counselling Right Now</h1>
                <p className='font-serif'>My clinic largest private mental health partnership, with a carefully selected nationwide team of Psychiatrists, Psychologists and Psychotherapists. I only work with highly experienced and capable partners who share our values.</p>
                <button className='py-4 px-8 bg-[#a29bfe] rounded-lg mt-8'>Get Now</button>
            </div>
            <div>
                <img src="https://livewp.site/html/optima/img/counselling/counselling_01.png" alt="" />
            </div>
        </div>
    );
};

export default OnlineService;