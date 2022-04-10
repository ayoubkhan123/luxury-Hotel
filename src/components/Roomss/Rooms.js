import React from 'react';
import useStyle from "./RoomsStyle";
import RoomsData from "./RoomsData";

const Rooms = () => {
  const classes = useStyle();

  return (
    <div className={classes.room_main}>
    <div className={classes.head}>
    <h1>Our Rooms<br/> </h1>
    <div className={classes.underline}></div>
    </div>
     
     <div className={classes.cards_flex}>
         {
            RoomsData.map((elem) =>{
              return(
                <>
                <div className={classes.card}>
                <img src={elem.img}/>
                <div>
                  <h3>{elem.title}</h3>
                  <h4>{elem.price}</h4>
                </div>
                </div>
                </>
              )
            })
         }
     </div>
    </div>
  )
}

export default Rooms;