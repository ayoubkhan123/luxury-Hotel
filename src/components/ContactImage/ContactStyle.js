import { makeStyles} from "@material-ui/core";

const useStyle = makeStyles((theme) =>({
    room_first:{
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // margin: "0px auto",
            "& img":{
            width: "100% !important",
            height: "100vh",
            },
    },
    text_center:{
        position: "absolute",
        // top: "0px",
        "& h1":{
            color: "white",
            textTransform: "capitalize",
            fontSize: "64px",
            fontWeight: "bold",
        },
        "& h4":{
            color: "white",
            textTransform: "capitalize",
        },
    }

}))

export default useStyle;