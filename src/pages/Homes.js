import React from 'react';
import Home from "../components/homePage/Home";
import Rooms from "../components/Roomss/Rooms";
import About from "../components/aboutPage/About";
import Facilities from "../components/hotelFacilities/Facilities";
import Gallery from '../components/gallery/Gallery';
import Events from "../components/Events/Events";
import Guests from "../components/Guest/Guests";

const Homes = () => {
  return (
    <div>
    <Home/>
    <Rooms/>
    <About/>
    <Facilities/>
    <Gallery/>
    <Events/>
    <Guests/>
    </div>
  )
};

export default Homes;