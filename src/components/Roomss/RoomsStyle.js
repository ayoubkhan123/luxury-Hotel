import { makeStyles} from "@material-ui/core";

const useStyle = makeStyles((theme) =>({
room_main:{
    width: "100%",
    paddingBottom: "50px",
},
head:{
    padding: "70px 0px",
},
underline:{
    background: "black",
    width: "130px",
    height: "2px",
    display: "flex",
    justifyContent: "center",
    margin: "0px auto",
    borderRadius: "20px",
},
cards_flex:{
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    flexWrap: "wrap",
    gap: "40px",
},
card:{
    width: "350px",
    height: "260px",
    marginBottom: "60px",
    "& img":{
            width: "100%",
            height: "100%",
            [theme.breakpoints.down("xs")]:{
                    padding: "0px 10px",
            },
    },
    "& h4":{
            color: "gray",
            fontSize: "18px",
            marginTop: "-6px",
    },
    "& h3":{
        fontWeight: "bold",
        marginTop: "10px",
        fontSize: "26px",
},
},

}))

export default useStyle;