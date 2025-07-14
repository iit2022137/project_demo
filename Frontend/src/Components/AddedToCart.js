import React, { useEffect, useState } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { BiChevronLeft } from "react-icons/bi";
import { BiRupee } from "react-icons/bi";
import CheckoutButton from "./CheckoutButton";
// const useStyles = makeStyles({
//   main: {
//     marginTop: "10vh",
//     paddingTop: "10vh",
//     height: "70vh",
//     width: "100%",
//     display: "flex",
//     justifyContent: "space-around",
//     alignItems: "start",
//     background: "#F4F4F4",
//   },
//   card: {
//     height: "50vh",
//     width: "50vw",
//     display: "flex",
//     background: "white",
//     padding: "1rem 2rem",
//   },
//   card2: {
//     height: "20vh",
//     width: "27vw",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "start",
//     justifyContent: "space-around",
//     background: "white",
//     paddingLeft: "4vw",
//     padding: "3vh 0",
//   },
//   heading: {
//     fontSize: "2rem",
//     display: "flex",
//     alignItems: "center",
//   },
//   checkIcon: {
//     color: "#53f000",
//     marginRight: "0.5rem",
//   },
//   image: {
//     height: "45vh",
//     width: "20vw",
//   },
//   subDiv2: {
//     marginLeft: "2rem",
//   },
//   backBtn: {
//     textTransform: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "start",
//     fontSize: "1.8rem",
//     color: "#007185",
//     "&:hover": {
//       background: "transparent",
//       textDecoration: "underline",
//     },
//   },
//   buttonText: {
//     fontSize: "1.6rem",
//   },
//   rupee: {
//     fontSize: "1.1rem",
//     display: "flex",
//     alignItems: "center",
//   },
//   goToCart: {
//     width: "18vw",
//     padding: "0.2rem 0.3rem",
//     borderRadius: "0.3rem",
//     border: "1px solid lightgrey",
//     cursor: "pointer",
//     fontSize: "1rem",
//     textAlign: "center",
//     marginTop: "0.5rem",
//     color: "black",
//     boxShadow: "0.5px 0.5px 2px 0px grey",
//     "&:hover": {
//       background: "#F7FAFA",
//     },
//   },
//   bottomButton: {
//     height: "20vh",
//   },
//   link: {
//     textDecoration: "none",
//   },
// });

const useStyles = makeStyles({
  main: {
    marginTop: "72px", // Matches Walmart's header height
    padding: "24px 0",
    minHeight: "70vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#F7F7F7", // Walmart's background color
    gap: "24px", // Adds consistent spacing between cards
  },
  card: {
    height: "auto",
    width: "55%", // Responsive width
    maxWidth: "600px",
    display: "flex",
    backgroundColor: "white",
    padding: "24px",
    borderRadius: "4px", // Walmart's card corner radius
    boxShadow: "0 1px 4px 0 rgba(0,0,0,0.1)", // Subtle shadow like Walmart
  },
  card2: {
    height: "auto",
    width: "35%", // Responsive width
    maxWidth: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: "24px",
    borderRadius: "4px",
    boxShadow: "0 1px 4px 0 rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "1.5rem", // More standard heading size
    fontWeight: 500, // Medium weight like Walmart
    display: "flex",
    alignItems: "center",
    color: "#1a1a1a", // Walmart's dark text color
    marginBottom: "16px",
  },
  checkIcon: {
    color: "#0071dc", // Walmart blue instead of green
    marginRight: "8px",
    fontSize: "1.8rem",
  },
  image: {
    height: "300px",
    width: "100%",
    maxWidth: "250px",
    objectFit: "contain", // Ensures proper image display
    marginRight: "24px",
  },
  subDiv2: {
    marginLeft: "24px",
    flex: 1,
  },
  backBtn: {
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: "1rem",
    color: "#0066c0", // Walmart link blue
    padding: "8px 0",
    "&:hover": {
      backgroundColor: "transparent",
      textDecoration: "underline",
      color: "#c45500", // Walmart hover orange
    },
  },
  buttonText: {
    fontSize: "1rem",
    marginLeft: "8px",
  },
  rupee: {
    fontSize: "1.1rem",
    display: "flex",
    alignItems: "center",
    color: "#B12704", // Walmart price color
    fontWeight: 700,
    margin: "8px 0",
  },
  goToCart: {
    width: "100%",
    padding: "8px",
    borderRadius: "8px", // Rounded corners like Walmart buttons
    border: "1px solid #d5d9d9", // Walmart border color
    cursor: "pointer",
    fontSize: "1rem",
    textAlign: "center",
    marginTop: "16px",
    color: "black",
    backgroundColor: "#FFD814", // Walmart yellow button
    borderColor: "#FCD200", // Walmart yellow border
    "&:hover": {
      backgroundColor: "#F7CA00", // Slightly darker yellow on hover
      borderColor: "#F2C200",
    },
  },
  bottomButton: {
    marginTop: "auto",
    width: "100%",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    width: "100%",
  },
  priceContainer: {
    display: "flex",
    alignItems: "baseline",
    gap: "8px",
    margin: "12px 0",
  },
  originalPrice: {
    textDecoration: "line-through",
    color: "#565959", // Walmart's gray for original price
    fontSize: "0.9rem",
  },
  savingsBadge: {
    color: "#CC0C39", // Walmart's red for savings
    fontSize: "0.9rem",
    fontWeight: 500,
  }
});
function AddedToCart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const classes = useStyles();
  const product = useSelector((state) => state.products[id - 1]);
  const cartItems = useSelector((state) => state.cart.items);
  const quantity = useSelector((state) => state.cart.count);
  const cartTotal = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total = cartItems[i].price * cartItems[i].quantity + total;
    }
    return Math.floor(total);
  };
  const calcItemQuantity = () => {
    let itemQuantity = 0;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === product.id) {
        itemQuantity = cartItems[i].quantity;
      }
    }
    return itemQuantity;
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
  return (
    <>
      {product && (
        <div>
          <div className={classes.main}>
            <div className={classes.card}>
              <div>
                <img src={product.image} alt="" className={classes.image} />
              </div>
              <div className={classes.subDiv2}>
                <Typography className={classes.heading}>
                  <FaCheckCircle className={classes.checkIcon} />
                  Added to Cart
                </Typography>
                <Typography>{product.title}</Typography>
                <Typography>Total Quantity: {calcItemQuantity()}</Typography>
              </div>
            </div>
            <div className={classes.card2}>
              <Typography className={classes.rupee}>
                <b>Cart subtotal:</b> &nbsp;
                <BiRupee className={classes.rupee} />
                
                {cartTotal().toLocaleString()}
                
              </Typography>
              <Checkbox />

              <CheckoutButton quantity={quantity} offset={offsetCharge}/>

              <Link to="/Cart" className={classes.link}>
                <Typography className={classes.goToCart}>Go to Cart</Typography>
              </Link>
            </div>
          </div>
          <div className={classes.bottomButton}>
            <center>
              <Link to="/" className={classes.link}>
                <Button className={classes.backBtn}>
                  <BiChevronLeft />{" "}
                  <Typography className={classes.buttonText}>
                    See more products
                  </Typography>
                </Button>
              </Link>
            </center>
          </div>
        </div>
      )}
    </>
  );
}

export default AddedToCart;
