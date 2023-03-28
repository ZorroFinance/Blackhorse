import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/PuffLoader';
import Contact from './Pages/Contact';

function App() {
  const [loading , setloading] = useState(false)
  useEffect (() => {
    setloading(true)
    setTimeout (() =>{
      setloading (false)
    },3000)
  },[])

  return (
    <div className="App scroll-smooth duration-300 overflow-hidden">
      { loading ?
      <ClipLoader color={"#CD252B"} loading={loading} size={50} className='justify-center text-center align-middle items-center mx-auto md:my-96 my-72'/>
      :
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      }
    </div>
  )
}

export default App