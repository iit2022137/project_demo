import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import walmartLogo from "../Assets/images/walmartLogo.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Search } from "@material-ui/icons";
import ReactCountryFlag from "react-country-flag";
import { AiOutlineCaretDown } from "react-icons/ai";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import setUserAction from "../Actions/setUserAction";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import SignedInAction from "../Actions/SignedInAction";

// const useStyles = makeStyles({
//   appbar: {
//     background: "#0071ce",
//   },
//   toolbar: {
//     margin: 0,
//     paddingLeft: "1rem",
//   },
//   logo: {
//     // width: "6.7rem",
//     // height: "1.9rem",
//     width: "90px",
//     height: "90px",
//     marginTop: "0.2rem",
//   },
//   logo1: {
//     width: "35px",
//     height: "35px",
//     marginTop: "0.2rem",
//     marginLeft: "0.2rem"
//   },
//   location: {
//     display: "flex",
    
//     alignItems: "end",
//     margin: "0.2rem 0 0 0.75rem",
//     cursor: "pointer",
//     padding: "0.5rem 0.25rem",
//     "&:hover": {
//       outline: "1px solid",
//     },
//   },
//   icon: {
//     marginRight: "0.1rem",
//   },
//   text: {
//     fontSize: "0.7rem",
//     lineHeight: 0.5,
//     cursor: "pointer",
//     color: "#CCCCCC",
//   },
//   know: {
//     fontSize: "0.7rem",
//     lineHeight: 0.5,
//     cursor: "pointer",
//     color: "#CCCCCC",
//     lineWidth: "0.1rem"
//   },
//   text2: {
//     fontSize: "0.9rem",
//     fontWeight: 500,
//     cursor: "pointer",
//   },
//   search: {
//     display: "flex",
//     alignItems: "center",
//     borderRadius: "1.3rem"
//   },
//   searchbar: {
//     width: "40vw",
//     marginLeft: "0rem",
//     height: "2.5rem",
//     borderRadius: "1.3rem",
//     borderTopRightRadius: 0,
//     borderBottomRightRadius: 0,
//     border: "none",
//     fontSize: "1rem",
//     outline: "none",
//     "&:focus": {
//       outline: "1px solid #FEBD69",
//     },
//   },
//   searchBtn: {
//     width: "3rem",
//     minWidth: "2rem",
//     height: "2.7rem",
//     borderRadius: "1.3rem",
//     border: "none",
//     background: "	#ffc220",
//     borderTopLeftRadius: 0,
//     borderBottomLeftRadius: 0,
//     "&:hover": {
//       background: "	#ffc220",
//     },
//   },
//   searchIcon: {
//     width: "2rem",
//     height: "2rem",
//   },
//   headerButton: {
//     margin: "0.2rem 0.4rem 0 0.5rem",
//     padding: "0.5rem 0.25rem",
//     "&:hover": {
//       outline: "1px solid",
//     },
//   },
//   flagDiv: {
//     display: "flex",
//     alignItems: "end",
//     marginTop: "0.4rem",
//     justifyContent: "end",
//   },
//   downIcon: {
//     fontSize: "0.7rem",
//     marginLeft: "0.3rem",
//   },
//   cart: {
//     fontSize: "0.9rem",
//     textDecoration: "none",
//     color: "white",
//     marginLeft: "0.8rem",
//     display: "flex",
//     alignItems: "end",
//     width: "6vw",
//   },
//   cart2: {
//     fontSize: "0.75rem",
//     textDecoration: "none",
//     color: "white",
//     display: "flex",
//     alignItems: "end",
//     width: "6vw",
//   },
//   header_cart: {
//     display: "flex",
//     textAlign: "end",
//     justifyContent: "end",
//     position: "relative",
//     marginRight: "0.3rem",
//   },
//   cartItems: {
//     position: "absolute",
//     width: "1rem",
//     height: "1rem",
//     top: "-1.2rem",
//     borderRadius: "50%",
//     background: "red",
//     color: "	#ffc220",
//     boxSizing: "border-box",
//     fontSize: "0.7rem",
//     display: "flex",
//     justifyContent: "center",
//   },
//   cartIcon: {
//     fontSize: "1.9rem",
//   },
//   linkBtn: {
//     textDecoration: "none",
//     color: "white",
//   },
// });


const useStyles = makeStyles({
  appbar: {
    background: "#0071dc", // Walmart's official blue
    height: "60px",
    boxShadow: "none",
    borderBottom: "1px solid #e6e6e6",
  },
  toolbar: {
    minHeight: "60px",
    padding: "0 1rem",
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "45px", // Standard Walmart logo width
    height: "auto",
    padding: "8px 10px 8px 0",
    objectFit: "contain",
  },
  logo1: {
    width: "32px", // Perfect for account icon
    height: "32px",
    margin: "0 8px",
    padding: "4px",
    // borderRadius: "50%",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.1)",
    },
  },
  location: {
    display: "flex",
    alignItems: "flex-end",
    padding: "8px 10px",
    margin: "0 4px",
    cursor: "pointer",
    borderRadius: "4px",
    "&:hover": {
      outline: "1px solid white",
    },
  },
  icon: {
    fontSize: "18px",
    marginRight: "4px",
    color: "#ffc220", // Walmart yellow
  },
  text: {
    fontSize: "12px",
    lineHeight: "1.2",
    color: "#e6e6e6",
    fontWeight: 400,
  },
  know: {
    fontSize: "12px",
    color: "#e6e6e6",
    textDecoration: "underline",
    "&:hover": {
      color: "#ffc220",
    },
  },
  text2: {
    fontSize: "14px",
    fontWeight: 700,
    color: "white",
    lineHeight: "1.2",
  },
  search: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    maxWidth: "800px",
    margin: "0 12px",
  },
  searchbar: {
    width: "100%",
    height: "40px",
    padding: "0 16px",
    border: "none",
    borderRadius: "18px 0 0 18px",
    fontSize: "15px",
    "&:focus": {
      boxShadow: "0 0 0 2px #0071dc",
    },
  },
  searchBtn: {
    width: "44px",
    height: "40px",
    background: "#ffc220",
    border: "none",
    borderRadius: "0 18px 18px 0",
    cursor: "pointer",
    "&:hover": {
      background: "#f7ca00",
    },
  },
  searchIcon: {
    fontSize: "20px",
    color: "#333",
  },
  headerButton: {
    padding: "8px 10px",
    margin: "0 4px",
    borderRadius: "4px",
    "&:hover": {
      outline: "1px solid white",
    },
  },
  flagDiv: {
    display: "flex",
    alignItems: "center",
    padding: "8px",
  },
  downIcon: {
    fontSize: "16px",
    marginLeft: "4px",
    color: "#e6e6e6",
  },
  cart: {
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
    color: "white",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 700,
  },
  cart2: {
    fontSize: "12px",
    fontWeight: 400,
    color: "#e6e6e6",
    marginTop: "2px",
  },
  header_cart: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  cartItems: {
    position: "absolute",
    top: "-6px",
    right: "2px",
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    background: "#f44336",
    color: "white",
    fontSize: "12px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cartIcon: {
    fontSize: "24px",
    marginRight: "4px",
  },
  linkBtn: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  accountMenu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "8px 0",
  },
});

function NavBar() {
  const classes = useStyles();
  const initialUserState = {
    uid: "",
    email: "",
    emailVerified: false,
    displayName: "",
    isAnonymous: false,
    providerData: [
      {
        providerId: "",
        uid: "",
        displayName: "",
        email: "",
        phoneNumber: null,
        photoURL: null,
      },
    ],
    stsTokenManager: {
      refreshToken: "",
      accessToken: "",
      expirationTime: 0,
    },
    createdAt: "",
    lastLoginAt: "",
    apiKey: "",
    appName: "[DEFAULT]",
  };

  const name = useSelector((state) => state.user.displayName);
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.count);
  const onSignOut = async () => {
    dispatch(setUserAction(initialUserState));
    dispatch(SignedInAction(false));
    setTimeout(() => {
      setOpen(true);
    }, 300);
  };
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>Success</DialogTitle>
            <DialogContent>
              <Typography style={{ whiteSpace: "pre-line" }}>
                You have been Logged out successfully!
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Okay</Button>
            </DialogActions>
          </Dialog>
          <Link to="/">
            <img className={classes.logo} src={walmartLogo} alt="" />
          </Link>
          <div className={classes.location} onClick={() => alert("Clicked")}>
            <div>
              <HiOutlineLocationMarker
                size="1.15rem"
                className={classes.icon}
              />
            </div>
            <div>
              <Typography className={classes.text}>Hello {name}</Typography>
              <Typography className={classes.text2}>
                Select your address
              </Typography>
            </div>
          </div>
          <div className={classes.search}>
            <input type="text" className={classes.searchbar}></input>
            <Button className={classes.searchBtn}>
              <Search className={classes.searchIcon} />
            </Button>
            <a href="http://127.0.0.1:5500/ChatBot/index.html">
            <img className={classes.logo1} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Google_Chat_icon_%282020%29.svg/736px-Google_Chat_icon_%282020%29.svg.png" alt="" />
            </a>
          </div>
          <div className={classes.headerButton}>
            <Typography className={classes.text}>English</Typography>
            <Typography className={classes.flagDiv}>
              <ReactCountryFlag countryCode="IN" svg className={classes.flag} />
              <AiOutlineCaretDown className={classes.downIcon} />
            </Typography>
          </div>
          {name ? (
            <div className={classes.headerButton} onClick={onSignOut}>
              <Typography className={classes.text}>Hello {name}</Typography>
              <Typography className={classes.text2}>Sign out</Typography>
            </div>
          ) : (
            <Link to="/Login" className={classes.linkBtn}>
              <div className={classes.headerButton}>
                <Typography className={classes.text}>Hello Guest</Typography>
                <Typography className={classes.text2}>Sign in</Typography>
              </div>
            </Link>
          )}

          <div className={classes.headerButton}>
            <Typography className={classes.text}>Returns</Typography>
            <Typography className={classes.text2}>& Orders</Typography>
          </div>
          <Link to="/Cart" className={classes.cart}>
            <div className={classes.header_cart}>
              <ShoppingCartOutlinedIcon className={classes.cartIcon} />
              <p className={classes.cartItems}>{cartCount}</p>
            </div>
            Cart
          </Link>
          <Link to="/green-commerce" className={classes.cart2}>
            Know More About Green Score
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
