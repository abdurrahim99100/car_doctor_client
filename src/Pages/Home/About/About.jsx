import React from 'react';
import Banner2 from '../../../assets/images/about_us/parts.jpg'
import Banner1 from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="">
            <div className="px-0 py-20 flex flex-col gap-52 lg:flex-row">
                <div className='relative'>
                    <img src={Banner1} className=" rounded-lg shadow-2xl
                    h-[600px] w-[520px]
                    " />
                    <img src={Banner2} className="rounded-lg shadow-2xl absolute border-t-8 border-white border-l-8 border-white 
                    h-[350px]
                    w-[330px]
                    right-[-40px]
                    top-[300px]
                    " />
                </div>
                <div className='py-10'>
                    <h1 className="text-5xl font-bold text-amber-600">About Us</h1>
                    <h3 className='text-4xl w-[290px] my-4 font-semibold'>We are qualified & of experience in this field</h3>
                    <p className="py-6 w-[500px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='w-[500px]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary my-10">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;