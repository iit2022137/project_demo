import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import StarRatings from "react-star-ratings";
import Divider from "@material-ui/core/Divider";
import AddBanner1 from "../Assets/images/walmartAdd1.png";
import AddBanner2 from "../Assets/images/walmartAdd2.jpg";
import AddBanner3 from "../Assets/images/walmartAdd3.webp";
import AddBanner4 from "../Assets/images/walmartAdd4.png";
import AddBanner5 from "../Assets/images/walmartAdd5.png";
import AddBanner6 from "../Assets/images/walmartAdd6.jpg";
import AddBanner7 from "../Assets/images/walmartAdd7.jpg";
import ProductDeliveryOptions from "./ProductDeliveryOptions";
import { TbDiscount2 } from "react-icons/tb";
import { BiRupee } from "react-icons/bi";
import Offers from "./Offers";
import { BiChevronLeft } from "react-icons/bi";
import AddNewProductToCartAction from "../Actions/AddNewProductToCartAction";
import AddExistingProductToCartAction from "../Actions/AddExistingProductToCartAction";
import { useDispatch, useSelector } from "react-redux";

// const useStyles = makeStyles({
//   main: {
//     marginTop: "3rem",
//     padding: "1rem",
//   },
//   addBanner: {
//     backgroundSize: "70vw 20vh",
//     backgroundRepeat: "no-repeat",
//     height: "20vh",
//   },
//   link: {
//     textDecoration: "none",
//   },
//   title: {
//     fontSize: "1.8rem",
//     fontWeight: "bold",
//     width: "60vw",
//   },
//   backBtn: {
//     textTransform: "none",
//     display: "flex",
//     alignItems: "center",
//     fontSize: "1.1rem",
//     color: "#007185",
//     "&:hover": {
//       background: "transparent",
//       textDecoration: "underline",
//     },
//   },
//   image: {
//     height: "60vh",
//     width: "22vw",
//   },
//   productInfo: {
//     display: "flex",
//     marginTop: "2rem",
//     justifyContent: "space-around",
//   },
//   descriptionDiv: {
//     width: "60vw",
//   },
//   description: {
//     fontSize: "1.2rem",
//     fontWeight: "bold",
//   },
//   category: {
//     fontSize: "1.2rem",
//     fontWeight: "bold",
//   },
//   rating: {
//     display: "flex",
//     alignItems: "center",
//   },
//   count: {
//     marginLeft: "0.5rem",
//     color: "#007185",
//     fontSize: "1rem",
//   },
//   offersDiv: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   offerTitle: {
//     display: "flex",
//     alignItems: "center",
//     fontWeight: "bold",
//     fontSize: "1rem",
//   },
//   offerIcon: {
//     color: "#C7511F",
//     fontSize: "1.8rem",
//     marginRight: "1rem",
//     fontWeight: "bolder",
//   },
//   price: {
//     fontSize: "1.7rem",
//     display: "flex",
//     alignItems: "center",
//   },
//   taxes: {
//     fontSize: "0.9rem",
//     margin: "0 0 0.5rem 0",
//   },
//   rateCategory: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   divider: {
//     margin: "0.5rem 0",
//   },
//   rupee: {
//     fontSize: "1.3rem",
//   },
//   addToCart: {
//     background: "#FFD814",
//     height: "2rem",
//     width: "8rem",
//     fontSize: "1rem",
//     textTransform: "none",
//     borderRadius: "0.5rem",
//     "&:hover": {
//       background: "#F7CA00",
//     },
//   },
//   linkStyle: {
//     textDecoration: "none",
//   },
//   quantityDiv: {
//     marginTop: "3rem",
//     display: "flex",
//     width: "50%",
//     justifyContent: "space-between",
//     paddingBottom: "5rem",
//   },
//   select: {
//     width: "6rem",
//     marginLeft: "1rem",
//     height: "2rem",
//     outline: "none",
//     cursor: "pointer",
//   },
// });


const useStyles = makeStyles({
  main: {
    marginTop: "3rem",
    padding: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundColor: "#F7F9FA" // Walmart's light background
  },
  addBanner: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "25vh",
    borderRadius: "0.4rem",
    marginBottom: "2rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  link: {
    textDecoration: "none",
    color: "#0066C0", // Walmart blue
    "&:hover": {
      textDecoration: "underline",
      color: "#004B91" // Darker blue on hover
    }
  },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    width: "100%",
    color: "#1A1A1A", // Dark gray
    marginBottom: "1rem"
  },
  backBtn: {
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    fontSize: "1.1rem",
    color: "#0066C0", // Walmart blue
    fontWeight: "500",
    padding: "0.5rem 0",
    "&:hover": {
      background: "transparent",
      textDecoration: "underline",
      color: "#004B91" // Darker blue
    }
  },
  image: {
    height: "400px",
    width: "350px",
    objectFit: "contain",
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "0.4rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  productInfo: {
    display: "flex",
    marginTop: "2rem",
    justifyContent: "space-between",
    gap: "2rem"
  },
  descriptionDiv: {
    width: "60%",
    padding: "1.5rem",
    backgroundColor: "white",
    borderRadius: "0.4rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  description: {
    fontSize: "1.3rem",
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: "1rem"
  },
  category: {
    fontSize: "1.1rem",
    fontWeight: "500",
    color: "#565959",
    marginBottom: "1.5rem"
  },
  rating: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem"
  },
  count: {
    marginLeft: "0.5rem",
    color: "#565959",
    fontSize: "1rem"
  },
  offersDiv: {
    display: "flex",
    flexDirection: "column",
    margin: "1.5rem 0"
  },
  offerTitle: {
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: "1.1rem",
    color: "#1A1A1A",
    marginBottom: "0.5rem"
  },
  offerIcon: {
    color: "#E31837", // Walmart red
    fontSize: "1.8rem",
    marginRight: "1rem"
  },
  price: {
    fontSize: "1.8rem",
    display: "flex",
    alignItems: "center",
    fontWeight: "700",
    color: "#1A1A1A",
    margin: "1rem 0"
  },
  taxes: {
    fontSize: "0.95rem",
    color: "#565959",
    margin: "0 0 1rem 0"
  },
  rateCategory: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem"
  },
  divider: {
    margin: "1rem 0",
    borderTop: "1px solid #E3E6E6"
  },
  rupee: {
    fontSize: "1.3rem",
    fontWeight: "500"
  },
  addToCart: {
    background: "#FFC220", // Walmart yellow
    height: "3rem",
    width: "12rem",
    fontSize: "1.1rem",
    textTransform: "none",
    borderRadius: "0.4rem",
    fontWeight: "500",
    color: "black",
    "&:hover": {
      background: "#E6AE1A" // Darker yellow
    }
  },
  linkStyle: {
    textDecoration: "none",
    color: "#0066C0",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  quantityDiv: {
    marginTop: "2rem",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "2rem"
  },
  select: {
    width: "8rem",
    marginLeft: "1rem",
    height: "2.5rem",
    outline: "none",
    cursor: "pointer",
    padding: "0.5rem",
    borderRadius: "0.3rem",
    border: "1px solid #E3E6E6",
    fontSize: "1rem",
    "&:focus": {
      borderColor: "#0066C0",
      boxShadow: "0 0 0 1px #0066C0"
    }
  },
  // Additional Walmart-style elements
  saveBadge: {
    backgroundColor: "#E31837",
    color: "white",
    padding: "0.3rem 0.8rem",
    borderRadius: "0.3rem",
    fontSize: "0.9rem",
    fontWeight: "500",
    marginRight: "1rem"
  },
  deliveryInfo: {
    display: "flex",
    alignItems: "center",
    margin: "0.5rem 0",
    color: "#067D62", // Walmart green
    fontSize: "0.95rem"
  }
});

const ProductDescription = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.products[id - 1]);
  const [addBanner, setAddBanner] = useState(AddBanner4);
  const [num, setNum] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const interval = setInterval(() => {
      const images = [AddBanner5, AddBanner6, AddBanner7, AddBanner1, AddBanner2, AddBanner3, AddBanner4];
      if (num === 6) {
        setNum(0);
      } else {
        setNum(num + 1);
      }
      setAddBanner(images[num]);
    }, 2000);
    return () => clearInterval(interval);
  }, [num]);
  useEffect(() => {
    const scrollTop = () => {
      window.scrollTo(0, 0);
    };
    scrollTop();
  }, []);

  const classes = useStyles();
  const [itemQuantity, setItemQuantity] = useState(1);
  const descriptionArray = (para) => {
    var arr = para.split(".");
    return arr;
  };
  const capitalize = (word) => {
    var newWord = word.charAt(0).toUpperCase() + word.substring(1, word.length);
    return newWord;
  };
  const rupeeCalculate = (val) => {
    const dec = Math.floor(val);
    return dec;
  };
  const addToCart = () => {
    let unique = true;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === product.id) {
        unique = false;
        break;
      }
    }
    unique
      ? dispatch(AddNewProductToCartAction(product, itemQuantity))
      : dispatch(AddExistingProductToCartAction(product.id, itemQuantity));
  };

  return (
    <>
      {product && (
        <div className={classes.main}>
          <a href="https://www.primevideo.com/" target="blank">
            <div
              className={classes.addBanner}
              style={{ backgroundImage: `url(${addBanner})` }}
            ></div>
          </a>
          <Link to="/" className={classes.link}>
            <Button className={classes.backBtn}>
              <BiChevronLeft /> <Typography>Back to products</Typography>
            </Button>
          </Link>
          <div className={classes.productInfo}>
            <img
              src={product.image}
              alt={product.title}
              className={classes.image}
            />

            <div>
              <Typography className={classes.title}>{product.title}</Typography>

              <div className={classes.rateCategory}>
                {product.rating && (
                  <span
                    title={product.rating.rate + " out of 5"}
                    className={classes.rating}
                  >
                    <StarRatings
                      rating={product.rating.rate}
                      starRatedColor="#FFA41C"
                      numberOfStars={5}
                      name="rating"
                      starDimension="1.2rem"
                      starSpacing="0.15rem"
                    />
                    <Typography className={classes.count}>
                      {product.rating.count}
                    </Typography>
                  </span>
                )}
                {product.category && (
                  <Typography className={classes.category}>
                    {capitalize(product.category)}
                  </Typography>
                )}
              </div>
              <Divider className={classes.divider} />
              <div className={classes.priceDiv}>
                <Typography className={classes.price}>
                  <BiRupee className={classes.rupee} />
                  {rupeeCalculate(product.price * 79.67).toLocaleString()}
                </Typography>
                <Typography className={classes.taxes}>
                  Inclusive of all taxes
                </Typography>
              </div>
              <Divider className={classes.divider} />
              <div className={classes.offersDiv}>
                <Typography className={classes.offerTitle}>
                  <TbDiscount2 className={classes.offerIcon} /> Offers
                </Typography>
                <Offers />
              </div>
              <Divider className={classes.divider} />
              <ProductDeliveryOptions />
              <Divider className={classes.divider} />
              <div className={classes.descriptionDiv}>
                <Typography className={classes.description}>
                  About this item
                </Typography>
                {descriptionArray(product.description).map((items, i) => {
                  items =
                    items.charAt(0).toUpperCase() +
                    items.substring(1, items.length);
                  return (
                    items.length > 2 && (
                      <Typography key={i}>• {items}</Typography>
                    )
                  );
                })}
              </div>
              <Divider className={classes.divider} />
              <div className={classes.quantityDiv}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Typography>Quantity: </Typography>
                  <select
                    name="ItemQuantity"
                    id="ItemQuantityId"
                    className={classes.select}
                    onChange={(e) => {
                      setItemQuantity(e.target.value);
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </select>
                </div>
                <Link to="AddedToCart" className={classes.linkStyle}>
                  <Button className={classes.addToCart} onClick={addToCart}>
                    Add to Cart
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDescription;
