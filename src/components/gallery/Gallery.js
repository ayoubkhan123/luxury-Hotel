import React from 'react';
import useStyle from "./GalleryStyle";
import img1 from "../../Assets/depositphotos_3683191-stock-photo-king-size-bed-and-bathroom.jpg";
import img2 from "../../Assets/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg";
import img3 from "../../Assets/hotel-room-13225019.jpg";
import img4 from "../../Assets/images (1).jpg";
import img5 from "../../Assets/images.jpg";
import img6 from "../../Assets/pexels-photo-164595.jpeg";
import img7 from "../../Assets/manuel-moreno-DGa0LQ0yDPc-unsplash.jpg";
import img8 from "../../Assets/visualsofdana-T5pL6ciEn-I-unsplash.jpg";

const Gallery = () => {
    const classes = useStyle();
  return (
    <div className={classes.gallery_main}>
    <div className={classes.heading}>
        <h1>Our Gallery</h1>
    <div className={classes.underline}></div>

    <div className={classes.img_flex}>
          <img src={img1}/>
          <img src={img2}/>
          <img src={img3}/>
          <img src={img4}/>
          <img src={img5}/>
          <img src={img6}/>
          <img src={img7}/>
          <img src={img8}/>

    </div>

    </div>

    </div>
  )
}

export default Gallery;