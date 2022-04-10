import React from 'react';
import useStyle from './HomeStyle';
import img1 from "../../Assets/marten-bjork-n_IKQDCyrG0-unsplash.jpg";
import img2 from "../../Assets/manuel-moreno-DGa0LQ0yDPc-unsplash.jpg";
import img3 from "../../Assets/visualsofdana-T5pL6ciEn-I-unsplash.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'





const Home = () => {
  const classes = useStyle();
  return (
    <div className={classes.home_main}>
 <Carousel>
  <Carousel.Item >
    <img
      className="d-block w-100"
      style={{height: "100vh"}}
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption className={classes.top_one}>
      <h1>Welcome To Suites</h1>
      <p>Hotel & Resort.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{height: "100vh"}}
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption className={classes.top_one}>
      <h1>Unique Experience</h1>
      <p>Enjoy With Us.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{height: "100vh"}}
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption className={classes.top_one}>
      <h1>Relaxing Room</h1>
      <p>Your Room, Your Stay</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Home;