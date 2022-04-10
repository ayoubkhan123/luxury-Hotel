import { makeStyles} from "@material-ui/core";

const useStyle = makeStyles((theme) =>({

home_main:{
    width: "100%",
},
image:{
    width: "100%",
},
top_one:{
    "& h1":{
        fontWeight: "bold",
        fontSize: "4rem",
        [theme.breakpoints.down("xs")]:{
            fontSize: "45px",
        },
    },
    "& p":{
        fontWeight: "bold",
        fontSize: "1.5rem",
    },
},
heading:{
    position: "absolute",
    top: "20%",
    color: "white",
    display: "flex",
    justifyContent: "center",
},
}))
export default useStyle;