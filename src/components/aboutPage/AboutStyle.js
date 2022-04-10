import { makeStyles} from "@material-ui/core";

const useStyle = makeStyles((theme) =>({
about_main:{
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    columnGap: "90px",
    alignItems: "center",
    padding: "80px 0px",
    flexWrap: "wrap-reverse"

},
images:{
        width: "100%",
        position: "relative",
        transition: "0.7",
        [theme.breakpoints.down("xs")]:{
        //    margin: "0px 15px",
    },
        "& :hover":{
            transform: "scale(1.1)",
    },
    
},
first_img:{
    maxWidth: "100%",
    height: "350px",
    [theme.breakpoints.down("xs")]:{
            width: "90% !important",
            height: "auto",
    },
},
scnd_img:{
    width: "50%",
    height: "50%",
    [theme.breakpoints.down("xs")]:{
        // width: "50%",
        display: "none",
},
    position: "absolute",
    top: "60%",
    left: "59%",
    border: "6px solid white",
},
about_text:{
    textAlign: "left",
    paddingBottom: "80px",
    [theme.breakpoints.down("xs")]:{
         padding: "0px 15px",
         margin: "30px 0px",
    },
    "& p":{
            paddingTop: "20px",
    },
    "& button":{
        marginTop: "20px",
},
},
underline:{
        height: "2px",
        width: "100px",
        marginTop: "-5px",
        background: "black",
        
},
}))

export default useStyle;