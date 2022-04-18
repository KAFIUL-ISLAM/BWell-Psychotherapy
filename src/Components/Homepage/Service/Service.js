import React from 'react';
import { useNavigate } from 'react-router-dom';


const Service = props => {

    const navigate = useNavigate();
    const { name, picture, about, price, id } = props.service;

    return (
        <div>
                <div id='book' className="max-w-xs bg-white rounded-lg hover:shadow-xl mx-auto text-center h-full">
                    <div className="h-full p-5 gap-4 grid grid-cols-1 content-between">
                        <div>
                            <img className="mx-auto mb-2" src={picture} alt="" />
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">{about}</p>
                            <p className='mb-5 text-gray-700'>Booking Price: <span className='font-bold text-gray-700'>{price}</span>/per session</p>
                        </div>
                        <div>
                            <button onClick={() => navigate(`/checkout/${id}`)}className="inline-flex items-center py-2 px-3 text-sm font-bold text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-[#91D0CC] align-bottom text-[#91D0CC] border-2 border-[#91D0CC] hover:bg-[#91D0CC] hover:text-white">
                                Book now
                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Service;