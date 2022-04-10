import React from 'react';
import useStyle from "./FacilityStyle";
import WifiIcon from '@material-ui/icons/Wifi';
import ScheduleIcon from '@material-ui/icons/Schedule';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import TvIcon from '@material-ui/icons/Tv';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';

const Facilities = () => {
    const classes = useStyle();
  return (
    <div className={classes.main_facility}>
    <div className={classes.heading}>
        <h1>Hotel <span style={{color: "orange"}}>Facilities</span></h1>
        <div className={classes.underline}></div>
    </div>

    <div className={classes.main_icons}>
    <div>
    <h5><WifiIcon style={{fontSize: "60px"}}/> <br/>Wifi Internet</h5>  
    </div>
    <div>  <h5><ScheduleIcon style={{fontSize: "60px"}}/> <br/>24 Hour Parking</h5></div>
    <div> <h5><FreeBreakfastIcon style={{fontSize: "60px"}}/> <br/>Delicious Breakfast</h5></div>
    <div> <h5><DriveEtaIcon style={{fontSize: "60px"}}/> <br/>Car Rentals</h5></div>
    <div> <h5><TvIcon style={{fontSize: "60px"}}/> <br/>Tv Cable</h5></div>
    <div> <h5><SingleBedIcon style={{fontSize: "60px"}}/> <br/>Electric Heating Matresses</h5></div>
    <div> <h5><TransferWithinAStationIcon style={{fontSize: "60px"}}/> <br/>Fire Exit</h5></div>



    </div>

    </div>
  )
}

export default Facilities