import React, { useState, useEffect } from 'react';
import "../Slider/styles.css"

const slides = [
    {
        eachSlide: 'url(./iStock.jpg)',
        heading: 'We Are Creative & Professional',
    },

    {
        eachSlide: 'url(./Chemical.jpeg)',
        heading: 'Chemical Transport',
        text: 'Chemical Transport provides full-fledged solutions for transporting petroleum, liquid chemicals and other non-hazardous materials to different locations.'
    },

    {
        eachSlide: 'url(./Logi.jpg)',
        heading: 'Fastest Logistics Service',
    },

    {
        eachSlide: 'url(./Blockchain.jpg)',
        heading: 'Blockchain Solutions For Frictionless Business',
    },
];

const Dashboard = () => {
    const [active, setActive] = useState(0);
    const max = slides.length;

    const intervalBetweenSlides = () => setActive(active === max - 1 ? 0 : active + 1)

    useEffect(() => {
        const interval = setInterval(() => intervalBetweenSlides(), 6000);
        return () => clearInterval(interval);
    }, [active]);

    const nextOne = () => active < max - 1 && setActive(active + 1)

    const prevOne = () => active > 0 && setActive(active - 1)

    const isActive = value => active === value && 'active'

    const setSliderStyles = () => {
        const transition = active * - 100;
        
        return {
          width: ( slides.length * 100 ) + 'vw',
          transform: 'translateX(' + transition + 'vw)'
        }
    }

    const renderSlides = () => slides.map((item, index) => (
        <div 
            className='each-slide items-center align-middle' 
            key={ index } 
            style={{ backgroundImage: item.eachSlide }}>
            <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="400"  data-aos-easing="ease-in-sine" 
            className='text-white bg-black bg-opacity-50 lg:mx-44 lg:mt-80 md:py-8 py-2 pt-12 md:pt-16 mt-48 items-center mx-6 px-5 justify-center text-center relative'>
                <h1 className="slide-heading md:text-5xl text-2xl text-white md:max-w-2xl mx-auto justify-center">{item.heading}</h1>
                <p className="slide-text md:text-lg text-base py-7 max-w-screen-md mx-auto justify-center">{item.text}</p>
            </div>
        </div> 
    ));


    const renderDots = () => slides.map((slide, index) => (
        <li 
            className={ isActive(index) + ' dots' }   
            key={ index }>
                <button onClick={ () => setActive(index) }>
                    <span>&#9679;</span>
                </button>
        </li> 
    ));

    const renderArrows = () => (
        <React.Fragment>
            <button 
                type='button'
                className='arrows prev md:px-5' 
                onClick={ () => prevOne() } >
                <svg fill='#ffffff' width='50' height='50' viewBox='0 0 24 24'>
                    <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
                    <path d='M0 0h24v24H0z' fill='none'/>
                </svg>
            </button>
            <button 
                type='button'
                className='arrows next md:px-5' 
                onClick={ () => nextOne() } > 
                <svg fill='#ffffff' height='50' viewBox='0 0 24 24' width='50'>
                    <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
                    <path d='M0 0h24v24H0z' fill='none'/>
                </svg>
            </button>
        </React.Fragment>
    )

    return (
        <section className='slider'>
            <div 
                className='wrapper' 
                style={ setSliderStyles() }>
                { renderSlides() }
            </div>
            { renderArrows() }
            <ul className='dots-container'>
                { renderDots() }
            </ul>
        </section>
    );
};

  export default Dashboard;