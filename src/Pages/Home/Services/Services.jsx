import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    // console.log(services);
    return (
        <div className='mt-10'>
            <div className='text-center'>
                <h4 className='text-3xl text-orange-400 font-semibold'>Service</h4>
                <h2 className='text-5xl font-bold my-5'>Our Service Area</h2>
                <p className='font-semibold'>the majority have suffered alteration in some form, by injected humour, or <br /> randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 p-5 my-20 '>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;