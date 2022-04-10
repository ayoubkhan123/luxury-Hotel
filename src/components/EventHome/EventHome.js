import React from 'react';
import img1 from "../../Assets/mara-conan-design-O_6dZUyxezo-unsplash.jpg";
import useStyle from "./EventStylee";

const EventHome = () => {
    const classes = useStyle();
  return (
       <div className={classes.room_first}>
        <img src={img1}/>
        <div className={classes.text_center}>
        <h4>Read Our</h4>
        <h1>Blogs & Events</h1>
        </div>
    </div>
  )
}

export default EventHome;
