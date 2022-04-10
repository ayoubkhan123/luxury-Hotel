import React from 'react';
import useStyle from "./ContactStyle";
import img1 from "../../Assets/mara-conan-design-O_6dZUyxezo-unsplash.jpg";

const ContactImagee = () => {
    const classes = useStyle();
    return (
         <div className={classes.room_first}>
          <img src={img1}/>
          <div className={classes.text_center}>
          <h4>Chat With Us</h4>
          <h1>Get In Touch</h1>
          </div>
      </div>
  )
}

export default ContactImagee
