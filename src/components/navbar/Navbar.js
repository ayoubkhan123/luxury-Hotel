import React,{useState} from 'react';
import useStyle from "./NavbarStyle";
import {Link} from "react-router-dom";
import NavData from "./NavData";
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import logo from "../../Assets/jarvis-hotels-logo-svg-vector.svg";


const Navbar = () => {
  const classes = useStyle();
  const [burger, setBurger] = useState(false);
  console.log(burger);
  const handleMenuClick = () => {
    setBurger(true);
    console.log("clicked");
  };
  const handleDrawerClose = () =>{
    setBurger(false)
  }

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 90){
      setColor(true)
    }
    else{
      setColor(false)
    }
  }
  console.log(window.scrollY)
  window.addEventListener("scroll", changeColor)

  return (
    <>
    <div className={`${classes.navbar_copy} ${!color && classes.navbar_main}`}>
    <div className={classes.nav_logo}>
    <img alt="" src={logo}/>
    <h2>luxuryHotel</h2>
   
    </div>
    
    <div className={classes.nav_links}>
    <nav>

    {
      NavData.map((elem) =>{
        return(
          <>
    <Link style={{color: "white"}} to={elem.path}>{elem.title}</Link>
   
          </>
        )
      })
    }
    </nav>
 
    </div>
    <div className={classes.drawer_main}>
    <Drawer open={burger} anchor={"right"} className={classes.drawer} variant="temporary" classes={{
          paper: classes.drawerPaper,
        }}>
    <div>
    <CloseIcon style={{cursor: "pointer",margin: "25px 0px 0px 10px",fontSize: "30px"}} onClick={handleDrawerClose}/>
          </div>
          <div className={classes.nav_mobile}>
            <ul>
              {NavData.map((elem) => {
                return (
                  <div className={classes.linkss}>
                    <Link style={{color: "white"}} to={elem.path}>
                      {elem.title}
                    </Link>
                  </div>
                );
              })}
            </ul>
           
          </div>
        </Drawer>
        <MenuIcon style={{justifyContent: "center",display: "flex",alignItems: "center",cursor: "pointer", color: "white",marginRight: "10px"}} onClick={handleMenuClick}/>
        </div>
    </div>
    
    <div>
   
      </div>
    
      </>
  )
}

export default Navbar