import { makeStyles} from "@material-ui/core";

const useStyle = makeStyles((theme) =>({
        gallery_main:{
                padding: "80px",
        },
    heading:{
        textAlign: "center",
        margin: "0px auto",
        display: "grid",
        justifyContent: "center",
    },
    underline:{
        width: "120px",
        height: "2px",
        background: "black",
        margin: "0px auto",
        marginBottom: "60px",
    },
    img_flex:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        transform: "0.7s",
        "& :hover":{
            transform: "scale(1.1)"
            },
        gap: "30px",
        "& img":{
            maxWidth: "260px",
            height: "230px",
            "& :hover":{
            transform: "scale(1.1)"

            },
        },
    },


}))

    export default useStyle;