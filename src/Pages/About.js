import React from 'react';

const About = () => {
    return (
        <div id='company' className='md:px-10 px-3'>
            <div className='text-black mx-auto lg:pb-28 pt-10 max-w-screen-xl justify-center relative'>
                <div className='py-5 gap-20 items-center mx-auto lg:grid lg:grid-cols-2'>
                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='px-4 md:pt-0 pt-10'>
                        <h1 className='text-base font-semibold text-[#b33e3e]'>
                            Our Company
                        </h1>
                        <h1 className='text-black lg:text-5xl text-2xl justify-center md:pt-5 pt-3 font-semibold'>
                            Blackhorse Trade & Investment SPC
                        </h1>
                        <p className='pt-5'>
                            Our company established in 1994 & started with minor construction projects. Later on 2006, heavy equipment, earth works are added to the organization since then the organization has sculptured its way to the apex. Within few years the organization has grown rapidly.
                        </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='border-2 border-[#CD252B] py-10 md:px-5 px-3 items-center mt-5 md:mt-0'>
                        <h1 className='text-black text-xl justify-center'>
                            Safety & Quality
                        </h1>
                        <p className='pt-5'>
                            Safety and quality policy have always been of utmost importance for us in all our operations. We have been maintaining high performance in terms of both quality and safety in all out operations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
