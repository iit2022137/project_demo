import { Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProductCard from "./CartProductCard";
import emptyCart from "../Assets/images/emptyCart.png";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import CheckoutButton from "./CheckoutButton";
import ClearCartAction from "./../Actions/ClearCartAction";

// const useStyles = makeStyles({
//   main: {
//     background: "#EAEDED",
//     marginTop: "4rem",
//     display: "flex",
//     minHeight: "100vh",
//   },
//   leftDiv: {
//     margin: "2rem 1rem",
//     width: "72%",
//   },
//   rightDiv: {
//     margin: "2rem 1rem",
//     background: "white",
//     height: "12rem",
//     padding: "2rem",
//     borderRadius: "0.2rem",
//   },
//   lowerRightDiv: {
//     margin: "1rem",
//     background: "white",
//     height: "5rem",
//     padding: "1rem",
//     borderRadius: "0.2rem",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   innerleftDiv: {
//     padding: "1rem",
//     background: "white",
//   },
//   footer: {
//     fontSize: "0.8rem",
//     marginTop: "2rem",
//   },
//   divider: {
//     margin: "0.7rem 0",
//     height: "0.1rem",
//     color: "#DDDDDD",
//   },
//   heading: {
//     fontSize: "2rem",
//   },
//   noItemsDiv: {
//     margin: "2rem",
//     padding: "1rem",
//     background: "white",
//     display: "flex",
//     width: "80%",
//     height: "40vh",
//   },
//   noItems: {
//     margin: "1rem 2rem",
//     fontSize: "2rem",
//     fontWeight: "bold",
//   },
//   link: {
//     textDecoration: "none",
//     color: "#007185",
//   },
//   goToProducts: {
//     fontSize: "1.3rem",
//     margin: "3rem 2rem",
//   },
//   subTotal: {
//     textAlign: "end",
//     paddingRight: "1rem",
//   },
//   subTotalText: {
//     fontSize: "1.2rem",
//     marginTop: "1rem",
//   },
//   freeDelivery: {
//     color: "#067D62",
//     fontSize: "0.85rem",
//   },
//   checkIcon: {
//     color: "#067D62",
//     marginRight: "0.5rem",
//   },
//   checkoutText: {
//     fontSize: "0.85rem",
//     marginLeft: "1.5rem",
//   },
//   checkoutLink: {
//     textDecoration: "none",
//     color: "#007185",
//     "&:hover": {
//       color: "#D2511F",
//       textDecoration: "underline",
//     },
//   },
//   continueShopping: {
//     fontSize: "1.3rem",
//     background: "#FFD814",
//     padding: "0.3rem 3rem",
//     borderRadius: "0.3rem",
//     color: "black",
//     "&:hover": {
//       background: "#F7CA00",
//     },
//   },
//   clearCart: {
//     fontSize: "1.2rem",
//     color: "#007185",
//     "&:hover": {
//       cursor: "pointer",
//       color: "#C7511F",
//       textDecoration: "underline",
//     },
//   },
// });

const useStyles = makeStyles({
  main: {
    background: "#F7F9FA",  // Lighter background similar to Walmart
    marginTop: "4rem",
    display: "flex",
    minHeight: "100vh",
    padding: "0 2rem",  // Added side padding
  },
  leftDiv: {
    margin: "2rem 1rem",
    width: "70%",  // Slightly adjusted width
  },
  rightDiv: {
    margin: "2rem 1rem",
    background: "white",
    height: "14rem",  // Slightly taller
    padding: "1.5rem",
    borderRadius: "0.3rem",
    border: "1px solid #E6E6E6",  // Added subtle border
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",  // Subtle shadow
  },
  lowerRightDiv: {
    margin: "1rem",
    background: "white",
    height: "5.5rem",
    padding: "1rem",
    borderRadius: "0.3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #E6E6E6",
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
  },
  innerleftDiv: {
    padding: "1.5rem",  // Slightly more padding
    background: "white",
    borderRadius: "0.3rem",
    border: "1px solid #E6E6E6",
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
  },
  footer: {
    fontSize: "0.8rem",
    marginTop: "2rem",
    color: "#565959",  // Darker gray for footer text
  },
  divider: {
    margin: "0.8rem 0",
    height: "0.1rem",
    backgroundColor: "#E3E6E6",  // Changed to backgroundColor
  },
  heading: {
    fontSize: "1.8rem",  // Slightly smaller
    fontWeight: "500",  // Medium weight
    color: "#1A1A1A",  // Darker text
  },
  noItemsDiv: {
    margin: "2rem",
    padding: "2rem",  // More padding
    background: "white",
    display: "flex",
    width: "80%",
    height: "40vh",
    borderRadius: "0.3rem",
    border: "1px solid #E6E6E6",
    flexDirection: "column",  // Stack content vertically
    alignItems: "center",  // Center align
    justifyContent: "center",  // Center vertically
  },
  noItems: {
    margin: "1rem 0",  // Adjusted margin
    fontSize: "1.8rem",  // Slightly smaller
    fontWeight: "500",  // Medium instead of bold
    color: "#1A1A1A",
  },
  link: {
    textDecoration: "none",
    color: "#0066C0",  // Walmart blue
    "&:hover": {
      textDecoration: "underline",
    },
  },
  goToProducts: {
    fontSize: "1.2rem",
    margin: "2rem 0",  // Adjusted margin
  },
  subTotal: {
    textAlign: "end",
    paddingRight: "1rem",
    fontSize: "1.1rem",
  },
  subTotalText: {
    fontSize: "1.3rem",  // Slightly larger
    marginTop: "1rem",
    fontWeight: "500",
    color: "#1A1A1A",
  },
  freeDelivery: {
    color: "#007611",  // Walmart's green
    fontSize: "0.9rem",  // Slightly larger
    fontWeight: "500",
    margin: "0.5rem 0",
  },
  checkIcon: {
    color: "#007611",  // Matching green
    marginRight: "0.5rem",
  },
  checkoutText: {
    fontSize: "0.9rem",
    marginLeft: "1rem",  // Slightly less margin
  },
  checkoutLink: {
    textDecoration: "none",
    color: "#0066C0",
    "&:hover": {
      color: "#C7511F",
      textDecoration: "underline",
    },
  },
  continueShopping: {
    fontSize: "1.1rem",
    background: "#FFC220",  // Walmart's yellow
    padding: "0.5rem 3rem",  // More vertical padding
    borderRadius: "0.4rem",
    color: "black",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      background: "#E6AE1A",  // Slightly darker yellow
    },
  },
  clearCart: {
    fontSize: "1.1rem",
    color: "#0066C0",
    fontWeight: "500",
    "&:hover": {
      cursor: "pointer",
      color: "#C7511F",
      textDecoration: "underline",
    },
  },
});
function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();
  const calcTotal = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total = cartItems[i].price * cartItems[i].quantity + total;
    }
    return Math.floor(total);
  };

  const [offsetCharge, addOffset] = useState(2);
  const [checked, setChecked] = useState(true);

  function Checkbox() {
    return (
      <label>
        <input type="checkbox"
          defaultChecked={checked}
          onChange={handleOffset}
        />
        Carbon Offset Charge
      </label>
    );
  }

  function handleOffset() {
    if (offsetCharge > 0) {
      addOffset(0);
      setChecked(false);
    }
    else {
      addOffset(2);
      setChecked(true);
    }
  }
  const clearCart = () => {
    //dispatch action clear cart
    dispatch(ClearCartAction());
  };
  return (
    <div className={classes.main}>
      <div className={classes.leftDiv}>
        {cartItems.length === 0 ? (
          <div className={classes.noItemsDiv}>
            <img src={emptyCart} alt="" />
            <div>
              <Typography className={classes.noItems}>
                Your Walmart Cart is empty
              </Typography>
              <Link to="/" className={classes.link}>
                <Typography className={classes.goToProducts}>
                  Show Products
                </Typography>
              </Link>
            </div>
          </div>
        ) : (
          <div className={classes.innerleftDiv}>
            <Typography className={classes.heading}>Shopping Cart</Typography>
            {cartItems.map((item, i) => {
              return (
                <div key={i}>
                  <Divider className={classes.divider} />
                  <CartProductCard details={item} key={i} />
                </div>
              );
            })}
            <div className={classes.subTotal}>
              <Typography className={classes.subTotalText}>
                Subtotal ({cartCount} items) :{" "}
                <b>₹ {calcTotal().toLocaleString()}</b>
              </Typography>
            </div>
          </div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            paddingRight: "2rem",
            paddingTop: "1rem",
          }}
        >
          {cartItems.length !== 0 && (
            <Typography onClick={clearCart} className={classes.clearCart}>
              Clear Cart
            </Typography>
          )}
        </div>
        <Typography className={classes.footer}>
          The price and availability of items at Walmart.in are subject to
          change. The shopping cart is a temporary place to store a list of your
          items and reflects each item's most recent price. Do you have a
          promotional code? We'll ask you to enter your claim code when it's
          time to pay.
        </Typography>
      </div>
      {cartItems.length !== 0 && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={classes.rightDiv}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaCheckCircle className={classes.checkIcon} />
              <Typography className={classes.freeDelivery}>
                Your order is eligible for FREE Delivery.
              </Typography>
            </div>
            <Typography className={classes.checkoutText}>
              Select this option at checkout.{" "}
              <a
                href="https://www.walmart.com/help"
                target="blank"
                className={classes.checkoutLink}
              >
                Details
              </a>
            </Typography>
            <Typography className={classes.subTotalText}>
              Subtotal ({cartCount} items) :{" "}
              <b>₹ {calcTotal().toLocaleString()}</b><br />
              {offsetCharge > 0 && "Carbon Offset Charge: "}
              {offsetCharge > 0 && <b>₹ {offsetCharge}.00</b>}
            </Typography>
            <Checkbox />
            <br />
            <label>
              <input type="checkbox" />
              Common Package Delivery
            </label>
            <CheckoutButton quantity={0} offset={offsetCharge} />
          </div>
          <div className={classes.lowerRightDiv}>
            <Link to="/" className={classes.link}>
              <Typography className={classes.continueShopping}>
                Continue Shopping
              </Typography>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
