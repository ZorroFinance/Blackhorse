import React from 'react';
import Email from './Email';

const Discover = () => {
    return (
        <>
            <div className='items-center overflow-hidden mx-auto'>
                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:px-10 px-5 justify-center text-center md:pb-32 py-5 pb-12'>
                    <div className='mx-auto overflow-hidden text-[#000]'>
                        <h1 className='md:text-3xl py-2 text-xl'>
                            Subscribe Our Newsletter
                        </h1>
                        <div className='max-w-xs justify-center text-center mx-auto overflow-hidden pt-5'>
                            <div className='fourth text-black'>
                                <Email/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Discover;
