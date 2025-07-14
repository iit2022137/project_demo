import { Button, Divider, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import SetCartFromLocalStorageAction from "./../Actions/SetCartFromLocalStorageAction";
import "../index.css";
import reward from "../Assets/images/reward.png";

// const useStyles = makeStyles({
//   main: {
//     marginTop: "2.5rem",
//     display: "flex",
//     height: "calc(100vh - 2.5rem)",
//     flexDirection: "column",
//     alignItems: "center",
//     background: "white",
//     padding: "1rem 2rem",
//   },
//   container: {
//     height: "67%",
//     width: "99%",
//     display: "flex",
//     background: "#ebebeb",
//     flexDirection: "column",
//     borderRadius: "0.3rem",
//     marginTop: "1.5rem",
//     padding: "1.3rem",
//   },
//   box: {
//     background: "white",
//     padding: "1.5rem",
//     height: "calc(100% - 3rem)",
//     borderRadius: "0.3rem",
//     boxShadow: "0.5px 0.5px 3px 2px lightgrey",
//     display: "flex",
//   },
//   confirmation: {
//     fontSize: "1rem",
//     marginTop: "0.7rem",
//   },
//   buy: {
//     background: "gold",
//     fontSize: "1.2rem",
//     padding: "0.5rem 2rem",
//     marginTop: "2rem",
//     "&:hover": {
//       background: "gold",
//     },
//   },
//   link: {
//     textDecoration: "none",
//   },
//   orderPlaced: {
//     color: "#0d755e",
//     fontSize: "1.2rem",
//     fontWeight: "bold",
//     display: "flex",
//     alignItems: "center",
//   },
//   checkIcon: {
//     marginRight: "0.5rem",
//   },
//   rating: {
//     display: "flex",
//     alignItems: "center",
//   },
//   shippingTo: {
//     fontWeight: "bold",
//     fontSize: "1rem",
//     marginTop: "1rem",
//   },
//   left: {
//     width: "50%",
//   },
//   right: {
//     width: "50%",
//     overflow: "none",
//   },
//   orderImage: {
//     width: "100%",
//     height: "100%",
//     borderRadius: "0.7rem",
//     "&:hover": {
//       cursor: "pointer",
//     },
//   },
//   divider: {
//     margin: "0.7rem 0",
//     width: "98%",
//   },
//   date: {
//     color: "green",
//     fontWeight: "bold",
//   },
// });

const useStyles = makeStyles({
  main: {
    marginTop: "2rem",
    display: "flex",
    minHeight: "calc(100vh - 2rem)",
    flexDirection: "column",
    alignItems: "center",
    background: "#f7f7f7",
    padding: "1.5rem 2rem",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  },
  container: {
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    background: "#ffffff",
    flexDirection: "column",
    borderRadius: "8px",
    marginTop: "1.5rem",
    padding: "1.5rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    border: "1px solid #e6e6e6",
  },
  box: {
    background: "#ffffff",
    padding: "1.5rem",
    height: "100%",
    borderRadius: "6px",
    display: "flex",
    gap: "2rem",
  },
  confirmation: {
    fontSize: "1rem",
    marginTop: "0.8rem",
    color: "#565959",
    lineHeight: "1.5",
  },
  buy: {
    background: "#0071dc",
    color: "white",
    fontSize: "1.1rem",
    fontWeight: "bold",
    padding: "0.75rem 2.5rem",
    marginTop: "2rem",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s",
    "&:hover": {
      background: "#0060b9",
    },
  },
  link: {
    textDecoration: "none",
    color: "#0066c0",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  orderPlaced: {
    color: "#007600",
    fontSize: "1.3rem",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    marginBottom: "0.5rem",
  },
  checkIcon: {
    marginRight: "0.75rem",
    fontSize: "1.5rem",
  },
  rating: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginTop: "1rem",
  },
  shippingTo: {
    fontWeight: "600",
    fontSize: "1.1rem",
    marginTop: "1.2rem",
    color: "#222",
  },
  left: {
    width: "55%",
    paddingRight: "1.5rem",
  },
  right: {
    width: "45%",
    overflow: "hidden",
  },
  orderImage: {
    width: "100%",
    height: "auto",
    maxHeight: "300px",
    objectFit: "contain",
    borderRadius: "8px",
    border: "1px solid #e6e6e6",
    transition: "transform 0.2s",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.02)",
    },
  },
  divider: {
    margin: "1rem 0",
    border: "none",
    borderTop: "1px solid #e6e6e6",
    width: "100%",
  },
  date: {
    color: "#007600",
    fontWeight: "600",
    fontSize: "1.05rem",
  },
  price: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#222",
    margin: "0.5rem 0",
  },
  productTitle: {
    fontSize: "1.1rem",
    fontWeight: "500",
    lineHeight: "1.4",
    margin: "0.5rem 0",
  },
});

function CheckoutSuccess() {
  const offsetCharge = useLocation().state.offset;
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const signedIn = useSelector((state) => state.signedIn);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify({ items: [], count: 0 }));
    localStorage.setItem("signedIn", JSON.stringify(signedIn));
    dispatch(SetCartFromLocalStorageAction({ items: [], count: 0 }));
  }, [dispatch, signedIn]);
  const classes = useStyles();

  const deliveryDate = () => {
    let current = new Date();
    current.setDate(current.getDate() + 5);
    const date = current.getDate();
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][current.getMonth()];
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][current.getDay()];
    return weekday + ", " + date + " " + month;
  };
  const [show, setShow] = useState(offsetCharge > 0);
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.box}>
          {show && <div style={{height: "100vh", width: "100vw", position: "absolute", top: 0, left: 0, opacity: 0.7, backgroundColor: "grey", zIndex: 9}}>
          </div>}
          <dialog open={show} style={{ margin: "auto", backgroundColor: "#f1f1f1", textAlign: "center", zIndex: 10}}>
            <img src={reward} alt="Reward"/>
            <p>Congratulations on your eco-conscious purchase!</p>
            <p>You've earned 10 points while making a positive impact on our planet.</p>
            <p>Welcome to the green side of e-commerce</p>
            <b><p>Leveled Up &uarr;</p></b>
            <button onClick={() => setShow(false)}>
              ok
            </button>
          </dialog>
          <div className={classes.left}>
            <Typography className={classes.confirmation}>
              <h2>Order Summary</h2>
              <ul style={{ listStyleType: 'none' }}>
                <li><p>Product Name: <b>Mens Casual Premium Slim Fit T-Shirts</b></p></li>
                <li><p>Subtotal: ₹1,776</p></li>
                <li><p>Shipping: ₹5.00</p></li>
                {offsetCharge > 0 && <li><p>Carbon Offset Charge: ₹{offsetCharge}.00</p></li>}
                <Divider className={classes.divider} style={{ width: "50%" }} />
                <li><p>Total: ₹{1781 + offsetCharge}</p></li>
              </ul>
            </Typography>
            <Typography className={classes.shippingTo}>
              Shipping to {user && user["_delegate"] && user["_delegate"]["displayName"]}
            </Typography>
            <Divider className={classes.divider} />
            <Typography className={classes.date}>{deliveryDate()}</Typography>
            <Typography className={classes}>Delivery date</Typography>
          </div>
          <div className={classes.right}>
            <Link to={`/products/2`}>
              <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" className={classes.orderImage} style={{ height: '90%', width: '70%' }} />
            </Link>
          </div>
        </div>
      </div>
      <Link to="/" className={classes.link}>
        <Button className={classes.buy}>Continue Shopping</Button>
      </Link>
    </div>
  );
}

export default CheckoutSuccess;
