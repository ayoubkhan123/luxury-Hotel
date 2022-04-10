import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) =>({
  navbar_main:{
    width: "100%",
    height: "80px",
    // background: "orange",
    display: "flex",
    background: "none !important",
    justifyContent: "space-around",
    alignItems: "center",
    // gap: "100px",
    position: "absolute !important",
    top: "0%",
    zIndex: "100",
  },
  navbar_copy:{
    width: "100%",
    height: "80px",
    // background: "orange",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    gap: "100px",
    // background: "black",
    background:"linear-gradient(113.49deg, #984D38 -30.3%, #181E41 58.12%)",

    transition: "background 0.8s",
    position: "fixed",
    zIndex: "100",
  },
  nav_logo:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px",
    padding: "0px",
    "& img":{
      width: "80px",
      height: "80px",
      [theme.breakpoints.down("xs")]:{
       display: "none",
      }
    },
"& h2":{
  color: "white",
  paddingLeft: "10px",
  display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    textAlign: "center",
},
  },
  nav_links:{

    [theme.breakpoints.down("sm")]:{
        display: "none",
    },
      "& :link":{
          padding: "0px 30px",
          textDecoration: "none",
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
          // textTransform: "uppercase",
      },
  },
  linkss:{
    padding: "20px 0px",
    "& :link":{
      textDecoration: "none",
      fontSize: "20px",
      fontWeight: "bold",
},
  },
  nav_mobile: {
    width: "260px",
    marginTop: "30px",
  },
  drawerPaper:{
  },
  drawer: {
    width: "600px !important",
    // height: "500px",
    "& .MuiDrawer-paper":{
      background: "linear-gradient(113.49deg, #984D38 -30.3%, #181E41 58.12%)",
      color: "white",
    },
    flexShrink: 10,
    // background: "black !important",
    zIndex: "110 !important",

    color: "white",
    // marginTop: "150px",
  },
  drawer_main:{
        display: "none",
        [theme.breakpoints.down("sm")]:{
            display: "block",
        },
  },


}))
export default useStyle;