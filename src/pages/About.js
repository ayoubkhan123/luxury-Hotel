import React from 'react';
import Abouts from "../components/aboutPage/About";
import AboutStart from "../components/AbouthomePage/AboutStart";
import HotelFacilities from "../components/hotelFacilities/Facilities";
import Gallery from "../components/gallery/Gallery";

const About = () => {
  return (
    <div >
      <AboutStart/>
    <Abouts/>
    <HotelFacilities/>
    <Gallery/></div>
  )
}

export default About