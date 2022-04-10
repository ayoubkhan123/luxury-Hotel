import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) =>({
footer_main:{
    display: "flex",
    position: "relative",
    justifyContent: "space-around",
    flexWrap: "wrap",
    background: "#333333",
    padding: "80px 0px",
    textAlign: "left",
    "& div":{
            padding: "10px 0px",
    },
    "& button":{
        outline: "none",
        border: "none",
        padding: "8px 25px 8px 25px",
        borderRadius: "30px",
        fontWeight: "bold",
        background: "#F23A2E",
        color: "white",
    },
    "& p:hover":{
        color: "white !important",
        transition: "0.5s",
        cursor: "pointer",
},

    "& h5":{
            color: "white",
    },
    "& p":{
            fontWeight: "bold",
    color: "#717171",
    "& :hover":{
            color: "white !important",
    },
    },
    [theme.breakpoints.down("xs")]:{
        display: "flex !important",
        flexDirection: "column !important",
    },
    [theme.breakpoints.down("sm")]:{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        paddingLeft: "20px",
    },
},
icons:{
        "& a":{
        color: "gray !important",
        cursor: "pointer",
        },
},
bottom_text:{
position: "absolute",
bottom: "0px",
// width: "80%",
textAlign: "center",
display: "flex",
justifyContent: "center",
margin: "0px auto",
padding: "30px auto",
color: "#939993",
"& h6":{
    textAlign: "center",
    padding: "0px 5px",
    display: "flex",
justifyContent: "center",
alignItems: "flex-end",
margin: "20px auto",
},
},
}))


export default useStyle;
