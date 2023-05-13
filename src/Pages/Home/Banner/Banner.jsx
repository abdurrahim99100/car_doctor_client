import React from 'react';
import Ban1 from '../../../assets/images/banner/1.jpg'
import Ban2 from '../../../assets/images/banner/2.jpg'
import Ban3 from '../../../assets/images/banner/3.jpg'
import Ban4 from '../../../assets/images/banner/4.jpg'
import Ban5 from '../../../assets/images/banner/5.jpg'
import Ban6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[722px]">
                <img src={Ban1} className="w-full rounded-xl" />
                <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] 
                absolute flex h-full 
                justify-end gap-4 rounded-xl">
                    <div className='text-white pl-52 my-auto'>
                        <h2 className='text-6xl font-bold w-[400px]'>Affordable Price For Car Servicing</h2>
                        <p className='text-2xl my-5'>There are many variations of passages of available, but <br />the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 right-10 bottom-20">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[722px]">
                <img src={Ban2} className="w-full rounded-xl" />
                <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] 
                absolute flex h-full 
                justify-end gap-4 rounded-xl">
                    <div className='text-white pl-52 my-auto'>
                        <h2 className='text-6xl font-bold w-[400px]'>Affordable Price For Car Servicing</h2>
                        <p className='text-2xl my-5'>There are many variations of passages of available, but <br />the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 right-10 bottom-20">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[722px]">
                <img src={Ban3} className="w-full rounded-xl" />
                <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] 
                absolute flex h-full 
                justify-end gap-4  rounded-xl">
                    <div className='text-white pl-52 my-auto'>
                        <h2 className='text-6xl font-bold w-[400px]'>Affordable Price For Car Servicing</h2>
                        <p className='text-2xl my-5'>There are many variations of passages of available, but <br />the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 right-10 bottom-20">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[722px]">
                <img src={Ban4} className="w-full rounded-xl" />
                <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] 
                absolute flex h-full 
                justify-end gap-4  rounded-xl">
                    <div className='text-white pl-52 my-auto'>
                        <h2 className='text-6xl font-bold w-[400px]'>Affordable Price For Car Servicing</h2>
                        <p className='text-2xl my-5'>There are many variations of passages of available, but <br />the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 right-10 bottom-20">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full h-[722px]">
                <img src={Ban5} className="w-full rounded-xl" />
                <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] 
                absolute flex h-full 
                justify-end gap-4  rounded-xl">
                    <div className='text-white pl-52 my-auto'>
                        <h2 className='text-6xl font-bold w-[400px]'>Affordable Price For Car Servicing</h2>
                        <p className='text-2xl my-5'>There are many variations of passages of available, but <br />the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 right-10 bottom-20">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;