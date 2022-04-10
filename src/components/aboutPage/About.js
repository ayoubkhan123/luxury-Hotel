import React from 'react';
import useStyle from "./AboutStyle";
import img1 from "../../Assets/visualsofdana-T5pL6ciEn-I-unsplash.jpg";
import img2 from "../../Assets/hotel-room-13225019.jpg";
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const classes = useStyle();
  let navigate = useNavigate();
  function handleClick() {
    navigate('/about')
  }
  return (
    <div className={classes.about_main}>
    <div>
    <div className={classes.images}>
      <img className={classes.first_img} src={img1}/>
      <img className={classes.scnd_img} src={img2}/>
    </div>
    </div>


    <div className={classes.about_text}>
        <h1>About Us</h1>
        <div className={classes.underline}></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>

       Eaque, nisi Lorem ipsum dolor sit amet, consectetur<br/>  

       adipisicing elit. Odit nobis magni eaque velit eum,<br/>  id rem eveniet dolor possimus voluptas..</p>
            <Button variant='contained' color="primary" onClick={handleClick}>View More <ArrowForwardIcon style={{paddingLeft: "5px"}}/></Button>
    </div>
    </div>
  )
}

export default About