import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  logotypeContainer: {
    backgroundColor:'rgb(0, 114, 105)',
    width: "60%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  logotypeImage: {
    width:200,
    marginBottom: theme.spacing(4),
  },
  logotypeText: {
    color: "black",
    fontWeight: 500,
    fontSize: 84,
    [theme.breakpoints.down("md")]: {//
      fontSize: 48,//
    },
  },
  formContainer: {
    width: "40%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
  },
  form: {
    width: 320,
  },
  tab: {//
    fontWeight: 400,//
    fontSize: 18,//
  },//
  greeting: {//
    fontWeight: 500,//
    textAlign: "center",//
    marginTop: theme.spacing(4),//
  },
  subGreeting: {//
    fontWeight: 500,//
    textAlign: "center",//
    marginTop: theme.spacing(2),//
  },
  
  creatingButtonContainer: {
    marginTop: theme.spacing(2.5),
    height: 46,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  
  formDividerContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: "flex",
    alignItems: "center",
  },
  formDividerWord: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  formDivider: {
    flexGrow: 1,
    height: 1,
    backgroundColor: theme.palette.text.hint + "40",
  },
  errorMessage: {
    textAlign: "center",
  },
  textFieldUnderline: {
    "&:before": {
      borderBottomColor: 'rgb(0, 114, 105)',
    },
    "&:after": {
      borderBottomColor: 'rgb(0, 114, 105)',
    },
    "&:hover:before": {
      borderBottomColor: `${'rgb(0, 114, 105)'} !important`,
    },
  },
  textField: {
    borderBottomColor: 'rgb(0, 114, 105)',
  },
  formButtons: {
    width: "100%",
    marginTop: theme.spacing(4),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  
  loginLoader: {
    marginLeft: theme.spacing(4),
  },
 
}));
