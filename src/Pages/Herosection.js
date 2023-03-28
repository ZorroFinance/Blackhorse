// import React, { Component } from 'react';
// import Dashboard from './Dashboard'
// import Sliderbio from '../Component/Biopharma/Sliderbio';
// import Sliderweb3 from './../Component/Web3/Sliderweb3';
// import Slidertransportation from './../Component/Transportation/Slidertransportation';

// class Slider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentIndex: 0,
//       slides: [
//         {
//           component: <Dashboard />
//         },

//         {
//           component: <Sliderbio />
//         },

//         {
//           component: <Sliderweb3 />
//         },

//         {
//             component: <Slidertransportation/>
//         }
//       ],
//       autoplay: true
//     };
//     this.prevSlide = this.prevSlide.bind(this);
//     this.nextSlide = this.nextSlide.bind(this);
//     this.toggleAutoplay = this.toggleAutoplay.bind(this);
//   }

//   prevSlide() {
//     const { slides, currentIndex } = this.state;
//     const lastIndex = slides.length - 1;
//     const shouldResetIndex = currentIndex === 0;
//     const index = shouldResetIndex ? lastIndex : currentIndex - 1;
//     this.setState({
//       currentIndex: index
//     });
//   }

//   nextSlide() {
//     const { slides, currentIndex } = this.state;
//     const lastIndex = slides.length - 1;
//     const shouldResetIndex = currentIndex === lastIndex;
//     const index = shouldResetIndex ? 0 : currentIndex + 1;
//     this.setState({
//       currentIndex: index
//     });
//   }

//   toggleAutoplay() {
//     this.setState(prevState => ({
//       autoplay: !prevState.autoplay
//     }));
//   }

//   componentDidMount() {
//     const { autoplay } = this.state;
//     if (autoplay) {
//       this.interval = setInterval(() => {
//         this.nextSlide();
//       }, 9000);
//     }
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     const { slides, currentIndex, autoplay } = this.state;
//     const currentSlide = slides[currentIndex];
//     return (
//       <div className="slider text-white" onClick={this.toggleAutoplay}>
//         <div className="slider-component">{currentSlide.component}</div>
//         <div className="slider-buttons">
//           <button onClick={this.prevSlide}>Prev</button>
//           <button onClick={this.nextSlide}>Next</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Slider;