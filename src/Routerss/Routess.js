import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "../components/navbar/Navbar";
import Footer from './../components/footer/Footer';
import Homes from "../pages/Homes";
import About from "../pages/About";
import Room from "../pages/Room";
import Events from "../pages/Events";
import Contact from "../pages/Contact";
import ScrollTop from "../components/scrollTop/ScrollTop";


const Routess = () => {
  return (
        <Router>    
           <ScrollTop>
        <Navbar/>
            <Routes>
                <Route path="/*" element={<Homes/>}/>
                <Route path="/room" element={<Room/>}/>
                <Route path="/events" element={<Events/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
            </ScrollTop>
        </Router>


  )
}

export default Routess