import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import walmartLogo from "../Assets/images/walmartLogoBlack.png";
import { FaRegQuestionCircle } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";

// const useStyles = makeStyles({
//   main: {
//     display: "flex",
//     width: "100%",
//     height: "100vh",
//     alignItems: "center",
//     flexDirection: "column",
//   },
//   image: {
//     width: "8rem",
//     height: "2.5rem",
//     marginTop: "0.2rem",
//   },
//   innerDiv: {
//     marginTop: "1rem",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   icon: {
//     fontSize: "2.5rem",
//     color: "#CC6600",
//     marginRight: "1rem",
//   },
//   heading: {
//     color: "#E47911",
//     fontWeight: "bold",
//     fontSize: "1.1rem",
//   },
//   text: {
//     fontWeight: "bold",
//     marginTop: "0.5rem",
//     display: "flex",
//     alignItems: "center",
//   },
//   icon2: {
//     color: "#CC6600",
//     margin: "0 0.4rem",
//   },
//   link: {
//     color: "#CC6600",
//     margin: "0 0.4rem",
//   },
// });

const useStyles = makeStyles({
  main: {
    display: "flex",
    width: "100%",
    minHeight: "100vh",  // Changed to minHeight for better responsiveness
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#F7F9FA",  // Walmart's light background color
    padding: "2rem 0"  // Added padding
  },
  image: {
    width: "10rem",  // Slightly larger
    height: "auto",  // Maintain aspect ratio
    margin: "1rem 0",  // More balanced margin
    objectFit: "contain"  // Ensure proper image scaling
  },
  innerDiv: {
    marginTop: "2rem",  // More space
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",  // Constrained width
    maxWidth: "1200px",  // Max width for large screens
    padding: "1.5rem",
    backgroundColor: "white",  // White background for content area
    borderRadius: "0.5rem",  // Subtle rounding
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)"  // Subtle shadow
  },
  icon: {
    fontSize: "2.8rem",  // Slightly larger
    color: "#0071DC",  // Walmart blue instead of orange
    marginRight: "1.5rem"  // More space
  },
  heading: {
    color: "#1A1A1A",  // Dark gray instead of orange
    fontWeight: "700",  // Bold weight
    fontSize: "1.3rem",  // Slightly larger
    marginBottom: "0.5rem"  // Added space below
  },
  text: {
    fontWeight: "500",  // Medium weight instead of bold
    marginTop: "0.75rem",  // More space
    display: "flex",
    alignItems: "center",
    fontSize: "1rem",  // Standardized size
    color: "#2D2D2D"  // Dark gray text
  },
  icon2: {
    color: "#0071DC",  // Walmart blue
    margin: "0 0.5rem",  // Slightly more space
    fontSize: "1.2rem"  // Larger icon
  },
  link: {
    color: "#0066C0",  // Walmart link blue
    margin: "0 0.5rem",  // More space
    textDecoration: "none",
    fontWeight: "500",
    "&:hover": {
      textDecoration: "underline",
      color: "#004B91"  // Darker blue on hover
    }
  },
  // Additional Walmart-style elements:
  button: {
    backgroundColor: "#0071DC",
    color: "white",
    padding: "0.5rem 1.5rem",
    borderRadius: "0.3rem",
    fontWeight: "500",
    marginTop: "1.5rem",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#005EA6"
    }
  },
  secondaryText: {
    color: "#565959",
    fontSize: "0.9rem",
    marginTop: "0.5rem"
  }
});

function NotFound() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Link to="/">
        <img src={walmartLogo} alt="" className={classes.image} />
      </Link>
      <div className={classes.innerDiv}>
        <FaRegQuestionCircle className={classes.icon} />
        <div>
          <Typography className={classes.heading}>
            Looking for something?
          </Typography>
          <Typography className={classes}>
            We're sorry. The Web address you entered is not a functioning page
            on our site.
          </Typography>
          <Typography className={classes.text}>
            {" "}
            <AiFillCaretRight className={classes.icon2} />
            Go to Walmart.in's{" "}
            <a href="/" className={classes.link}>
              {" "}
              Home
            </a>{" "}
            Page
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
