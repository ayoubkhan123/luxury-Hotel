import React from 'react';
import useStyle from "./AboutStylee";
import img1 from "../../Assets/mara-conan-design-O_6dZUyxezo-unsplash.jpg";

const AboutStart = () => {
    const classes = useStyle();
    return (
         <div className={classes.room_first}>
          <img src={img1}/>
          <div className={classes.text_center}>
          <h4>Suites Hotel & Resort</h4>
          <h1>About Us</h1>
          </div>
      </div>
  )
}

export default AboutStart
