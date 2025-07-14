import React from "react";
import { Typography } from "@material-ui/core";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { sendEmailVerification } from "firebase/auth";
import SignedInAction from "./../Actions/SignedInAction";
import walmartLogo from "../Assets/images/walmartLogoBlack.png";
import setUserAction from "../Actions/setUserAction";
// import { CenterFocusStrong } from "@material-ui/icons";
// import { BiBold } from "react-icons/bi";

// const useStyles = makeStyles({
//   upperDiv: {
//     padding: "0.5rem",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     background: "white",
//     paddingBottom: "1rem",
//   },
  
//   image: {
//     width: "170px",
//     height: "180px",
    
//   },
//   formDiv: {
//     height: "23.5rem",
//     width: "19rem",
//     margin: "1rem",
//     padding: "1rem 2rem",
//     // border: "0.1rem solid rgba(148, 148, 148, 0.5)",
//     borderRadius: "0.3rem",
//   },
//   label: {
//     fontWeight: "bold",
//     fontSize: "0.85rem",
//     letterSpacing: "0.05rem",
//   },
//   input: {
//     width: "18.5rem",
//     height: "1.5rem",
//     border: "0.1rem solid #949494",
//     margin: "0.3rem 0 0.7rem 0",
//     padding: "0.2rem",
//     fontSize: "0.85rem",
//     borderRadius: "0.2rem",
//     outline: "none",
//     "&:focus": {
//       boxShadow: "0 0 0.2rem 0.1rem 	#ffc220 ",
//       border: "1px solid orange",
//     },
//     "&::placeholder": {
//       fontSize: "0.85rem",
//     },
//   },
//   heading: {
//     fontSize: "2rem",
//     marginBottom: "1rem",
//     textAlign:"center",
    
//   },
//   submitBtn: {
//     background: "linear-gradient(to bottom,#F7DDA0,#F0C14B)",
//     border: "0.1rem solid 	#fac14eff",
//     borderRadius: "0.2rem",
//     fontSize: "0.9rem",
//     marginTop: "1rem",
//     width: "19rem",
//     height: "1.8rem",
//     cursor: "pointer",
//     "&:hover": {
//       background: "linear-gradient(to top,#EEB934,#F4D485)",
//     },
//   },
//   conditions: {
//     fontSize: "0.8rem",
//     margin: "1rem 0",
//   },
//   link: {
//     textDecoration: "none",
//     color: "#0066C0",
//     fontSize: "0.8rem",
//     "&:hover": {
//       color: "#C45500",
//       textDecoration: "underline",
//     },
//   },
//   divider: {
//     width: "23rem",
//     fontSize: "0.8rem",
//     color: "#767676",
//     padding: 0,
//   },
//   createNewAccountbutton: {
//     width: "23rem",
//     height: "1.8rem",
//     fontSize: "0.9rem",
//     border: "0.1rem solid #8D9096",
//     marginTop: "1rem",
//     borderRadius: "1.6rem",
//     cursor: "pointer",
//     background: "linear-gradient(to top,#E7E9EC,#FBFCFD)",
//     "&:hover": {
//       background: "linear-gradient(to top,#DADDE2,#F5F7F9)",
//     },
//   },
//   lowerDiv: {
//     padding: "0.5rem",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     background: "transparent",
//     height: "4.5rem",
//     borderTop: "0.15rem solid #d9d7d7",
//   },
//   footerConditionsDiv: {
//     width: "20%",
//     display: "flex",
//     justifyContent: "space-around",
//   },
//   copyright: {
//     fontSize: "0.75rem",
//     color: "#555555",
//     marginTop: "0.5rem",
//   },
// });

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#f7f7f7",
    minHeight: "100vh",
    fontFamily: "'Roboto', Arial, sans-serif",
  },
  upperDiv: {
    padding: "1rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    borderBottom: "1px solid #e6e6e6",
    width: "100%",
  },
  logoContainer: {
    margin: "1rem 0",
    textAlign: "center",
  },
  image: {
    width: "200px", // Slightly larger for better visibility
    height: "auto", // Maintain aspect ratio
    objectFit: "contain",
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  formDiv: {
    height: "auto",
    width: "22rem",
    margin: "1rem 0",
    padding: "1.5rem",
    backgroundColor: "white",
    borderRadius: "4px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    border: "1px solid #ddd",
  },
  heading: {
    fontSize: "1.75rem",
    marginBottom: "1.5rem",
    textAlign: "center",
    color: "#1a1a1a",
    fontWeight: 400,
  },
  label: {
    fontWeight: 600,
    fontSize: "0.85rem",
    letterSpacing: "0.02rem",
    color: "#1a1a1a",
    marginBottom: "0.25rem",
    display: "block",
  },
  input: {
    width: "100%",
    height: "2rem",
    border: "1px solid #949494",
    margin: "0 0 1rem 0",
    padding: "0.5rem",
    fontSize: "0.9rem",
    borderRadius: "3px",
    outline: "none",
    boxSizing: "border-box",
    "&:focus": {
      boxShadow: "0 0 0 3px rgba(0, 125, 204, 0.2)",
      borderColor: "#007dcc",
    },
  },
  submitBtn: {
    background: "linear-gradient(to bottom,#007dc1,#006bb4)",
    border: "1px solid #006bb4",
    borderRadius: "3px",
    fontSize: "0.95rem",
    marginTop: "0.5rem",
    width: "100%",
    height: "2.5rem",
    color: "white",
    cursor: "pointer",
    fontWeight: 400,
    "&:hover": {
      background: "linear-gradient(to bottom,#006bb4,#005a9c)",
    },
  },
  conditions: {
    fontSize: "0.75rem",
    margin: "1rem 0",
    color: "#555",
    lineHeight: "1.4",
  },
  link: {
    textDecoration: "none",
    color: "#0066c0",
    fontSize: "0.8rem",
    "&:hover": {
      color: "#c45500",
      textDecoration: "underline",
    },
  },
  divider: {
    display: "flex",
    alignItems: "center",
    margin: "1.5rem 0",
    color: "#767676",
    "&::before, &::after": {
      content: '""',
      flex: 1,
      borderBottom: "1px solid #e6e6e6",
    },
    "&::before": {
      marginRight: "0.5rem",
    },
    "&::after": {
      marginLeft: "0.5rem",
    },
  },
  createNewAccountBtn: {
    width: "100%",
    height: "2.5rem",
    fontSize: "0.9rem",
    border: "1px solid #8D9096",
    marginTop: "0.5rem",
    borderRadius: "3px",
    cursor: "pointer",
    backgroundColor: "white",
    color: "#1a1a1a",
    "&:hover": {
      backgroundColor: "#f7f7f7",
    },
  },
  lowerDiv: {
    padding: "1.5rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    width: "100%",
    marginTop: "2rem",
  },
  footerLinks: {
    width: "100%",
    maxWidth: "800px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "1rem",
  },
  footerLink: {
    margin: "0 0.5rem",
    fontSize: "0.75rem",
    color: "#0066c0",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  copyright: {
    fontSize: "0.75rem",
    color: "#555555",
    marginTop: "0.5rem",
  },
  errorText: {
    color: "#c40000",
    fontSize: "0.8rem",
    marginTop: "-0.5rem",
    marginBottom: "0.5rem",
  },
  passwordToggle: {
    color: "#0066c0",
    fontSize: "0.8rem",
    cursor: "pointer",
    marginTop: "-0.75rem",
    marginBottom: "1rem",
    display: "block",
    textAlign: "right",
  },
}));

function SignUp() {
  const classes = useStyles();
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const createNewAccount = (e) => {
    e.preventDefault();
    var form = document.getElementById("form");
    var nameCheck = document.getElementById("name");
    var emailCheck = document.getElementById("email");
    var passwordCheck = document.getElementById("password");

    if (form.checkValidity()) {
      auth
        .createUserWithEmailAndPassword(email, pass)
        .then(() => {
          var user = auth.currentUser;
          user
            .updateProfile({
              displayName: username,
            })
            .then(() => {
              sendEmailVerification(auth.currentUser).then(() => {
                dispatch(SignedInAction(true));
                dispatch(setUserAction(user));
                navigate(-2);
              });
            })
            .catch((e) => {
              alert(e.message);
            });
        })
        .catch((e) => {
          var index = e.message.search("characters");
          index === -1
            ? setError(e.message + "\n\n Please sign in with this email.")
            : setError(e.message + "\n\n Please try stronger password");
          setOpen(true);
        });
    } else {
      !passwordCheck.checkValidity() &&
        setError("Please enter the password to continue");
      !emailCheck.checkValidity() &&
        setError("Please enter valid email address");
      !nameCheck.checkValidity() &&
        setError("Please enter display name to continue ");
      !emailCheck.checkValidity() &&
        !passwordCheck.checkValidity() &&
        !nameCheck.checkValidity() &&
        setError("Please enter all the fields to continue");

      setOpen(true);
    }
  };
  return (
    <div className={classes.main}>
      <div className={classes.upperDiv}>
        <Link to="/">
          <img src={walmartLogo} alt="" className={classes.image} />
        </Link>
        <div className={classes.formDiv}>
          <Typography className={classes.heading}>Sign up</Typography>
          <form id="form">
            <Typography className={classes.label}>Display Name</Typography>
            <input
              id="name"
              type="text"
              maxLength="10"
              className={classes.input}
              required
              placeholder="Enter your name ( Max length is 10 characters )"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Typography className={classes.label}>
              Email or mobile phone number
            </Typography>
            <input
              type="email"
              id="email"
              className={classes.input}
              required
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Typography className={classes.label}>Password</Typography>
            <input
              type="password"
              id="password"
              required
              className={classes.input}
              placeholder="Enter your password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <button
              type="submit"
              className={classes.submitBtn}
              onClick={createNewAccount}
            >
              Create your Walmart account
            </button>
          </form>
          <Typography className={classes.conditions}>
            By continuing, you agree to Walmart's{" "}
            <a
              href="https://www.walmart.com/help"
              target="blank"
              className={classes.link}
            >
              Conditions of Use
            </a>{" "}
            and{" "}
            <a
              href="https://www.walmart.com/help"
              target="blank"
              className={classes.link}
            >
              Privacy Notice
            </a>
            .
          </Typography>
        </div>
        <Divider
          className={classes.divider}
          textAlign="center"
          sx={{ borderBottomWidth: "50px" }}
        >
          Already a Member?
        </Divider>
        <Link to="/Login">
          <button className={classes.createNewAccountbutton}>Sign In</button>
        </Link>
      </div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Oops😢 an Error Occured"}</DialogTitle>
        <DialogContent>
          <Typography style={{ whiteSpace: "pre-line" }}>{error}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Okay</Button>
        </DialogActions>
      </Dialog>
      <div className={classes.lowerDiv}>
        <div className={classes.footerConditionsDiv}>
          <a
            href="https://corporate.walmart.com/terms-of-use"
            target="blank"
            className={classes.link}
          >
            Conditions of Use
          </a>
          <a
            href="https://corporate.walmart.com/privacy-security/walmart-privacy-notice"
            target="blank"
            className={classes.link}
          >
            Privacy Notice
          </a>
          <a
            href="https://www.walmart.com/help"
            target="blank"
            className={classes.link}
          >
            Help
          </a>
        </div>
        <Typography className={classes.copyright}>
          © 1996-2023, Walmart.com, Inc. or its affiliates
        </Typography>
      </div>
    </div>
  );
}

export default SignUp;
