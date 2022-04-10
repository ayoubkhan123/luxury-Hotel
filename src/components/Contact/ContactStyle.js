import { makeStyles} from "@material-ui/core";

const useStyle = makeStyles((theme) =>({
    root: {
        display: "flex",
        flexDirection: "column !important",
        justifyContent: "center",
        alignItems: "center", 
        textAlign: "left",
        "& p":{
            fontWeight: "bold",
        },
        '& > *': {
          margin: theme.spacing(1),
          width: '65ch',
          [theme.breakpoints.down("xs")]:{
                width: "90vw",
          },
        },
      },
      contact_main:{
          width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        columnGap: "80px",
        padding: "60px 0px",
        flexWrap: "wrap",
      },
      inputs:{
        display: "flex",
        flexDirection: "column !important",
        justifyContent: "center",
        alignItems: "center", 
        paddingBottom: "40px",
        "& button":{
            marginTop: "10px",
        },
      },
      contact_text:{
        display: "flex",
        flexDirection: "column !important",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "20px", 
        "& h1":{
            fontWeight: "bold",
            paddingBottom: "15px",
        },
        "& h4":{
            fontWeight: "bold",
            paddingTop: "10px",

        },
        "& h5":{
           color: "red",
        },


      },


}))

export default useStyle;