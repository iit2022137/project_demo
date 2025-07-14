import { makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// const useStyles = makeStyles({
//   proceedToBuy: {
//     background: "#FFD814",
//     boxShadow: "0.5px 0.5px 2px 0.5px #F7CA00",
//     width: "18vw",
//     cursor: "pointer",
//     textAlign: "center",
//     padding: "0.2rem 0.3rem",
//     borderRadius: "0.3rem",
//     fontSize: "1rem",
//     color: "black",
//     marginTop: "1rem",
//     "&:hover": {
//       background: "#F7CA00",
//     },
//   },
//   link: {
//     textDecoration: "none",
//   },
// });

const useStyles = makeStyles({
  proceedToBuy: {
    background: "#FFC220", // Walmart's yellow color
    border: "1px solid #E6B800", // subtle border
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)", // more subtle shadow
    width: "100%", // full width of container
    cursor: "pointer",
    textAlign: "center",
    padding: "0.5rem 1rem", // more padding
    borderRadius: "4px", // slightly larger radius
    fontSize: "1rem",
    fontWeight: "500", // medium weight like Walmart
    color: "black",
    marginTop: "1rem",
    transition: "background-color 0.2s ease", // smooth transition
    textTransform: "none", // avoid uppercase
    "&:hover": {
      background: "#E6AE1A", // Walmart's hover yellow
      boxShadow: "0 2px 5px rgba(0,0,0,0.15)", // slightly stronger shadow on hover
    },
    "&:active": {
      backgroundColor: "#D9A518", // pressed state
      boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)", // inner shadow when pressed
    }
  },
  link: {
    textDecoration: "none",
    color: "#0066C0", // Walmart blue
    "&:hover": {
      textDecoration: "underline",
      color: "#004B91", // slightly darker blue on hover
    }
  },
});

function CheckoutButton({ quantity, offset }) {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user);
  const signedIn = useSelector((state) => state.signedIn);
  const classes = useStyles();
  const handleCheckout = () => {
    axios
      .post(`http://localhost:3000//checkout`, {
        cartItems,
        userId: user.uid,
        email: user.email,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  return (
    <>
      {signedIn ? (
        <Link to="/Checkout-success" state = {{offset}} className={classes.link}>
        <Typography
          className={classes.proceedToBuy}
          onClick={() => handleCheckout()}
        >
          {quantity === 0
            ? "Proceed to Buy"
            : `Proceed to Buy ( ${quantity} items )`}
        </Typography>
        </Link>
      ) : (
        <Link to="/Login" className={classes.link}>
          <Typography className={classes.proceedToBuy}>
            {quantity === 0
              ? "Proceed to Buy"
              : `Proceed to Buy ( ${quantity} items )`}
          </Typography>
        </Link>
      )}
    </>
  );
}

export default CheckoutButton;
