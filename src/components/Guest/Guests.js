import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import GuestData from "./GuestData";

export default class Guests extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      arrows: false,
      slidesToShow: 2,
      centerMode: false,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 709,
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
    return (
      <div style={{padding: "60px 0px"}}>
        <h1>What People Say </h1>
        <div className="underline" style={{width: "150px",height: "2px",background: "black",margin: "0px auto",borderRadius: "30px",marginBottom: "80px"}}></div>
        <Slider {...settings}>
          {/* <div> */}
           {
               GuestData.map((elem) =>{
                   return(
                       <>
                       <div style={{display: "flex",justifyContent: "center",alignItems: "center",width: "100%",margin: "0px auto"}}>
                       <div className="cards" style={{display: "flex",justifyContent: "center",columnGap: "10px",width: "100%",textAlign: "left"}}>
                       {/* <div> */}
            <img alt="" src={elem.img} style={{width: "100px",height: "100px",borderRadius: "10px",textAlign: "center"}}/>
            {/* </div> */}
                    <div style={{width: "60%"}}>
                    <h4 >{elem.title}</h4>
                        <p >{elem.para}</p>
                    </div>
            </div>
            </div>
                       </>
                   )
               })
           }

          {/* </div> */}
        </Slider>
      </div>
    );
  }
}