import Navbar from "./Nav";
import Dashboard from './Dashboard';
import About from "./About";
import Footer from "./Footer";
import Service from './Services';
import Aim from "./Aim";
import Email from './Discover';


function Home() {
  
  return (
    <>
    <Navbar/>
    <Dashboard/>
    <Service/>
    <About/>
    <Aim/>
    <Email/>
    <Footer/>
   </>
  );
}

export default Home;