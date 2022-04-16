import React from 'react';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {

    const [services] = useServices();
    return (
        <div>
            <h1 className='text-6xl text-center mb-16 mt-24'>My Services</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 md:px-12 gap-y-8'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
           </div>
        </div>
    );
};

export default Services;