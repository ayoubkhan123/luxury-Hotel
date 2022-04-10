import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import EventsData from "./EventsData";

export default class Events extends Component {
  render() {
    var settings = {
      arrows: false,
            dots: true,
            infinite: false,
            centerMode: false,
            speed: 500,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
              {
                breakpoint: 1015,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 655,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
    };
    // const classes = useStyle();
    return (
      <>
      <div style={{padding: "60px 0px"}}>
        <h1>Upcoming Events</h1>
        <div className="underline" style={{width: "150px",height: "2px",background: "black",margin: "0px auto",borderRadius: "30px",marginBottom: "60px"}}></div>
        <Slider {...settings}>
            {/* <div style={{display: "flex",justifyContent: "center"}}> */}
            {
              EventsData.map((elem) =>{
                return(
                
                  <div className="events" style={{display: "flex",justifyContent: "center",alignItems: "center",textAlign: "left"}}>
                  <div style={{display: "flex",justifyContent: "center",alignItems: "center",margin: "0px auto"}}>
            <img alt="" style={{width: "300px",height: "200px",display: "flex",justifyContent: "center"}} src={elem.img}/>
            </div>
                  <div className="text" style={{textAlign: "left",margin: "0px auto",display: "grid",justifyContent: "center"}}>
                <h5>{elem.title}</h5>
                <h6 style={{paddingBottom: "10px"}}>{elem.head}</h6>
                <p style={{width: "290px",margin: "0px auto",textAlign: "left"}}>{elem.para}</p>
                  </div>
            </div>
                )
              })
            }
            {/* </div>        */}
        </Slider>
      </div>
      </>
    );
  }
}

