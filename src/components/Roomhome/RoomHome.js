import React from 'react';
import img1 from "../../Assets/mara-conan-design-O_6dZUyxezo-unsplash.jpg";
import useStyle from "./RoomStylee";

const RoomHome = () => {
    const classes = useStyle();
  return (
    <div className={classes.room_first}>
        <img src={img1}/>
        <div className={classes.text_center}>
        <h4>Luxurious Rooms</h4>
        <h1>Hotel Rooms</h1>
        </div>
    </div>
  )
}

export default RoomHome;
