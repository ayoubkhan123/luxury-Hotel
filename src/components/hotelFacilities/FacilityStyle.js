import { makeStyles} from "@material-ui/core";

const useStyle = makeStyles((theme) =>({
main_facility:{
// height: "500px",
padding: "60px 0px",
},
underline:{
    width: "130px",
    height: "2px",
    background: "black",
    margin: "0px auto",
    marginBottom: "60px",
},
main_icons:{
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridRowGap: "80px",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: "50px",
    "& h5:hover":{
        cursor: "pointer",
        color: "orange",
        transition: "0.3s all ease-in-out",
    },
    [theme.breakpoints.down("sm")]:{
        gridTemplateColumns: "1fr 1fr",

    },
    [theme.breakpoints.down("xs")]:{
        gridTemplateColumns: "1fr",

    },
},
}))

export default useStyle;