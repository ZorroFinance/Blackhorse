import { Transition } from '@headlessui/react';
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  // const [headerVisible, setHeaderVisible] = useState(true);
  // const headerRef = useRef(null);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // const handleScroll = () => {
  //   setScrollPosition(window.scrollY);
  // };

  // useEffect(() => {
  //   if (scrollPosition > prevScrollPosition) {
  //     // Scrolling down
  //     setHeaderVisible(false);
  //   } else {
  //     // Scrolling up
  //     setHeaderVisible(true);
  //   }
  //   setPrevScrollPosition(scrollPosition);
  // }, [scrollPosition]);

  return (
    <>
      {/* <header
        ref={headerRef}
        className={`header fixed z-10 md:px-10 px-3 justify-center w-full duration-500 mx-auto items-center shadow-sm text-white ${
          headerVisible ? 'opacity-100 bg-[#00142c]' : 'opacity-0 invisible'
        }`}
      > */}
      <header className='header fixed z-10 md:px-10 px-2 justify-center w-full duration-500 mx-auto items-center shadow-sm text-black bg-[#fff]'>
        <div className="mx-auto items-center max-w-screen-2xl">
          <div className="flex items-center mx-auto justify-center">
            <div className="flex items-center w-full justify-between">
              <div className="flex-shrink-0 py-2">
                <a href="/">
                  <img src='./white.png' className='md:w-60 w-44' alt='favicon.png'/>
                </a>
              </div>
              <div className="hidden lg:block w-full">
                <div className="mx-auto items-center flex flex-row justify-end">
                  <div className='flex items-center'>
                    <a
                      href="/"
                      className="
                      
                      items-center text-sm font-semibold tracking-wider relative h-8 pt-0.5 duration-200 px-4 flex justify-center flex-row hover:text-[#CD252B]"
                    >
                      Home
                    </a>
                    <a
                      href="/#services"
                      className="
                      
                      items-center text-sm font-semibold tracking-wider relative h-8 pt-0.5 duration-200 px-4 flex justify-center flex-row hover:text-[#CD252B]"
                    >
                      Services
                    </a>
                    <a
                      href="/#company"
                      className="
                      
                      items-center text-sm font-semibold tracking-wider relative h-8 pt-0.5 duration-200 px-4 flex justify-center flex-row hover:text-[#CD252B]"
                    >
                      Our Company
                    </a>
                    <a
                      href="/#mission"
                      className="
                      
                      items-center text-sm font-semibold tracking-wider relative h-8 pt-0.5 duration-200 px-4 flex justify-center flex-row hover:text-[#CD252B]"
                    >
                      Mission
                    </a>
                  </div>
                  <div className='flex gap-3'>
                    <a 
                      href="/contact" className=" bg-[#CD252B] shadow-lg hover:bg-opacity-80 hover:font-bold text-white font-semibold items-center relative h-10 text-sm duration-200 px-4 flex rounded-sm ">
                        Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="py-3 inline-flex items-center justify-center duration-500 rounded-md"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-8 w-8 duration-500 font-light"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6 duration-500 font-light"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-500 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-400 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden w-full overflow-y-scroll pb-5" id="mobile-menu">
              <div ref={ref} className="mx-auto z-10 pt-5 px-5 flex flex-col">
                <a
                  href="/"
                  className="tracking-wider py-3 flex flex-row items-center duration-200 border-b text-[#000] border-[#000] border-opacity-10 text-sm font-semibold"
                >
                  Home
                </a>
                <a
                  href="/#services"
                  className="tracking-wider py-3 flex flex-row items-center duration-200 border-b text-[#000] border-[#000] border-opacity-10 text-sm font-semibold"
                >
                  Services
                </a>
                <a
                  href="/#company"
                  className="tracking-wider py-3 flex flex-row items-center duration-200 border-b text-[#000] border-[#000] border-opacity-10 text-sm font-semibold"
                >
                  Our Company
                </a>
                <a
                  href="/#mission"
                  className="tracking-wider py-3 flex flex-row items-center duration-200 border-b text-[#000] border-[#000] border-opacity-10 text-sm font-semibold"
                >
                  Mission
                </a>
                <div className=''>
                  <a 
                    href="/contact" className="hover:bg-[#CD252B] border border-[#CD252B] mx-auto items-center relative h-10 mt-8 tracking-wider duration-200 px-6 w-full justify-center flex rounded-sm">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </header>
    </>
  )};
export default Navbar;

// import { Transition } from '@headlessui/react';
// import React, { useState, useEffect, useRef } from 'react';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const headerRef = useRef(null);

//   useEffect(() => {
//     window.addEventListener('scroll', () => {
//       setScrollPosition(window.scrollY);
//     });
//   }, []);

//   useEffect(() => {
//     if (headerRef.current) {
//       if (scrollPosition > 0) {
//         headerRef.current.classList.add('scrolled');
//         document.getElementById("logo-img").src = "./white.png";
//       } else {
//         headerRef.current.classList.remove('scrolled');
//         document.getElementById("logo-img").src = "./white.png";
//       }
//     }
//   }, [scrollPosition]);

//   return (
//     <>
//       <header ref={headerRef} className="header fixed z-10 md:px-10 px-3 justify-center w-full duration-500 mx-auto items-center shadow-sm">
//         <div className="mx-auto items-center max-w-screen-xl">
//           <div className="flex items-center mx-auto justify-center">
//             <div className="flex items-center w-full">
//               <div className="flex-shrink-0 py-2">
//                 <a href="/">
//                   <img className='md:w-52 w-40' id="logo-img" alt='favicon.png'/>
//                 </a>
//               </div>
//               <div className="hidden md:block w-full">
//                 <div className="mx-auto items-center flex flex-row space-x-2 ">
//                   <div className='flex items-center'>
//                     <a
//                       href="/"
//                       className="
                      
//                       items-center text-sm font-semibold tracking-wider relative h-8 pt-0.5 duration-200 px-4 flex justify-center flex-row hover:text-[#CD252B]"
//                     >
//                       Home
//                     </a>
//                     <a
//                       href="/biopharma"
//                       className="
//                       items-center text-sm font-semibold tracking-wider relative h-8 pt-0.5 duration-200 px-4 flex justify-center flex-row hover:text-[#CD252B]"
//                     >
//                       BioPharma
//                     </a>
//                     <a
//                       href="/web3"
//                       className="
//                       items-center text-sm font-semibold tracking-wider relative h-8 pt-0.5 duration-200 px-4 flex justify-center flex-row hover:text-[#CD252B]"
//                     >
//                       Gaming & Web 3.0 Tech
//                     </a>
//                     <a
//                       href="/transportation"
//                       className="
//                       items-center text-sm font-semibold tracking-wider relative h-8 pt-0.5 duration-200 px-4 flex justify-center flex-row hover:text-[#CD252B]"
//                     >
//                       Transportation & Logistics
//                     </a>
//                   </div>
//                   <div className='flex gap-3 justify-end'>
//                     <a 
//                     href="/contact" className=" hover:bg-[#CD252B] hover:text-white font-semibold border border-[#CD252B] items-center relative h-8 text-sm duration-200 px-4 flex rounded-sm">
//                       Contact Us
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//                 className="py-3 inline-flex items-center justify-center duration-500 rounded-md"
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {!isOpen ? (
//                   <svg
//                     className="block h-8 w-8 duration-500 font-light"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="block h-6 w-6 duration-500 font-light"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//         <Transition
//           show={isOpen}
//           enter="transition ease-out duration-500 transform"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="transition ease-in duration-400 transform"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           {(ref) => (
//             <div className="md:hidden w-full min-h-screen" id="mobile-menu">
//               <div ref={ref} className="mx-auto z-10 pt-5 px-5 flex flex-col">
//               <a
//                   href="/"
//                   className="
//         tracking-wider py-3 flex flex-row items-center   duration-200 border-b text-[#000] border-[#000] border-opacity-10 text-sm font-semibold"
//                 >
//                   Home
//                 </a>
//                 <a
//                   href="/biopharma"
//                   className="
//         tracking-wider py-3 flex flex-row items-center   duration-200 border-b text-[#000] border-[#000] border-opacity-10 text-sm font-semibold"
//                 >
//                  BioPharma
//                 </a>
//                 <a
//                   href="/web"
//                   className="
//                   tracking-wider py-4 flex flex-row items-center  duration-200 border-b border-opacity-20 text-sm font-bold"
//                 >
//                   Gaming & Web 3.0 Tech
//                 </a>
//                 <a
//                   href="/transportation"
//                   className="
//         tracking-wider py-3 flex flex-row items-center   duration-200 border-b text-[#000] border-[#000] border-opacity-10 text-sm font-semibold"
//                 >
//                   Transportation & Logistics
//                 </a>
//                 <a
//                   target="_blank"
//                   href="/" 
//                   className="tracking-widest py-3 flex flex-row duration-200  items-center border-b border-opacity-10 font-bold text-sm" 
//                   rel="noreferrer">Telegram
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className=" fill-current stroke-current h-4 w-4"
//                     viewBox="0 0 40 40"
//                   >
//                     <path 
//                       d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z">
//                     </path>
//                   </svg>
//                 </a>
//                 <div className='mt-5 px-5 py-3'>
//                   <a 
//        font-semibold         href="/contact_us" className="hover:bg-[#CD252B] border border-[#CD252B] mx-auto items-center relative h-10 mt-8 tracking-wider duration-200 px-6 w-full justify-center flex rounded-sm">
//                     Contact Us
//                   </a>
//                 </div>
//               </div>
//             </div>
//           )}
//         </Transition>
//       </header>
//     </>
//   )};
// export default Navbar;