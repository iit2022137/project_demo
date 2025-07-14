import React, { useState } from "react";
import { Button, Divider, makeStyles, Typography } from "@material-ui/core";
import walmartLogo from "../Assets/images/walmartLogoFooter.png";
import "react-dropdown/style.css";
import { Popover } from "react-tiny-popover";
import { BsGlobe } from "react-icons/bs";
import { TiArrowUnsorted } from "react-icons/ti";
// const useStyles = makeStyles({
//   main: {
//     width: "100%",
//     // height: "80vh",
//     height: "100%",
//     background: "#232F3E",
//   },
//   btn: {
//     width: "100%",
//     height: "10%",
//     textAlign: "center",
//     background: "#37475A",
//     textTransform: "none",
//     fontSize: "0.95rem",
//     fontWeight: "normal",
//     color: "white",
//     "&:hover": {
//       background: "#485769",
//     },
//   },
//   parentDiv: {
//     height: "60%",
//     display: "flex",
//     justifyContent: "space-around",
//     alignItems: "center",
//     padding: "0 7vw",
//   },
//   childDiv: {
//     width: "15%",
//     height: "80%",
//   },
//   childDivException: {
//     width: "18%",
//     height: "80%",
//   },
//   heading: {
//     fontWeight: "500",
//     fontSize: "1.15rem",
//     color: "white",
//   },
//   marginUp: {
//     marginTop: "0.5rem",
//     fontSize: "0.95rem",
//   },
//   link: {
//     textDecoration: "none",
//     color: "#DDDDDD",
//     "&:hover": {
//       textDecoration: "underline",
//     },
//   },
//   divider: {
//     background: "#3A4553",
//   },
//   lowerFooter: {
//     marginTop: "1%",
//     height: "25%",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   logo: {
//     height: "2rem",
//     width: "5rem",
//     marginRight: "4rem",
//   },
//   subDiv1: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: "1.5rem",
//   },
//   iconDiv: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-around",
//     margin: "0 2rem",
//     cursor: "pointer",
//     height: "2rem",
//     width: "8rem",
//     fontSize: "0.9rem",
//     color: "#DDDDDD",
//     border: "1px solid #848688",
//     borderRadius: "0.3rem",
//   },
//   text: {
//     fontSize: "0.9rem",
//     color: "#DDDDDD",
//     marginLeft: "1rem",
//   },
//   popover: {
//     padding: "1rem",
//     background: "white",
//     width: "12vw",
//     borderRadius: "0.5rem",
//     border: "1px solid grey",
//     boxShadow: "0.5px 0.5px 5px 0px grey",
//   },
//   onHover: {
//     color: "#444444",
//     fontSize: "0.9rem",
//     "&:hover": {
//       color: "#C7511F",
//       textDecoration: "underline",
//       cursor: "pointer",
//     },
//   },
//   subDiv2: {
//     width: "80%",
//     height: "50%",
//   },
//   linkText: {
//     fontSize: "0.8rem",
//     marginLeft: "1rem",
//   },
//   linkTextCustom: {
//     fontSize: "0.8rem",
//     marginLeft: "1rem",
//     width: "6rem",
//     marginTop: "-1rem",
//   },
//   linkTextCustom1: {
//     fontSize: "0.8rem",
//     marginLeft: "1rem",
//     width: "8rem",
//   },
//   alignRightItems: {
//     display: "flex",
//     justifyContent: "center",
//     marginTop: "1.2rem",
//   },
// });

const useStyles = makeStyles({
  main: {
    width: "100%",
    height: "100%",
    background: "#0071DC", // Walmart's primary blue
    padding: "2rem 0 0 0", // Added padding
  },
  btn: {
    width: "100%",
    height: "3rem", // Fixed height
    textAlign: "center",
    background: "#004F9A", // Darker Walmart blue
    textTransform: "none",
    fontSize: "0.95rem",
    fontWeight: "500", // Medium weight
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      background: "#003B75", // Even darker on hover
    },
  },
  parentDiv: {
    height: "60%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start", // Align to top
    padding: "2rem 7vw", // More vertical padding
    maxWidth: "1200px", // Max width for content
    margin: "0 auto", // Center the content
  },
  childDiv: {
    width: "15%",
    padding: "0 1rem", // Added padding
  },
  childDivException: {
    width: "18%",
    padding: "0 1rem", // Added padding
  },
  heading: {
    fontWeight: "700", // Bold weight
    fontSize: "1rem", // Slightly smaller
    color: "white",
    marginBottom: "1rem", // Added space below
    textTransform: "uppercase", // Walmart uses uppercase for headings
  },
  marginUp: {
    marginTop: "0.75rem", // Slightly more space
    fontSize: "0.9rem",
    lineHeight: "1.5", // Better readability
  },
  link: {
    textDecoration: "none",
    color: "rgba(255,255,255,0.9)", // Slightly transparent white
    transition: "color 0.2s ease",
    "&:hover": {
      textDecoration: "underline",
      color: "white", // Full white on hover
    },
  },
  divider: {
    background: "rgba(255,255,255,0.2)", // Subtle white divider
    height: "1px", // Thinner divider
    margin: "0.5rem 0", // Space around divider
  },
  lowerFooter: {
    marginTop: "2rem",
    padding: "2rem 0",
    background: "#004F9A", // Darker blue for lower section
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    height: "2.5rem", // Slightly larger
    width: "auto", // Maintain aspect ratio
    marginRight: "2rem", // Less margin
    filter: "brightness(0) invert(1)", // Make logo white
  },
  subDiv1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1.5rem 0",
    flexWrap: "wrap", // Allow wrapping on small screens
  },
  iconDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 1rem", // Less margin
    cursor: "pointer",
    height: "2.5rem",
    padding: "0 1.5rem",
    fontSize: "0.9rem",
    color: "white",
    border: "1px solid rgba(255,255,255,0.4)", // Subtle border
    borderRadius: "0.3rem",
    transition: "all 0.2s ease",
    "&:hover": {
      background: "rgba(255,255,255,0.1)", // Subtle hover effect
      borderColor: "white",
    },
  },
  text: {
    fontSize: "0.85rem",
    color: "rgba(255,255,255,0.9)",
    marginLeft: "0.5rem", // Less margin
  },
  popover: {
    padding: "1rem",
    background: "white",
    width: "14rem", // Slightly wider
    borderRadius: "0.3rem",
    border: "none",
    boxShadow: "0 2px 10px rgba(0,0,0,0.15)", // Cleaner shadow
  },
  onHover: {
    color: "#2D2D2D",
    fontSize: "0.9rem",
    padding: "0.5rem 0",
    display: "block",
    "&:hover": {
      color: "#E31837", // Walmart's red for hover
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  subDiv2: {
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  linkText: {
    fontSize: "0.75rem",
    margin: "0 0.5rem",
    color: "rgba(255,255,255,0.8)",
    "&:hover": {
      color: "white",
      textDecoration: "underline",
    },
  },
  linkTextCustom: {
    fontSize: "0.75rem",
    margin: "0 0.5rem",
    width: "auto", // Don't fix width
  },
  linkTextCustom1: {
    fontSize: "0.75rem",
    margin: "0 0.5rem",
    width: "auto", // Don't fix width
  },
  alignRightItems: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1.5rem",
    flexWrap: "wrap",
  },
  copyright: {
    color: "rgba(255,255,255,0.7)",
    fontSize: "0.7rem",
    marginTop: "1.5rem",
    textAlign: "center",
  }
});

function Footer() {
  const classes = useStyles();
  const options = [
    "English - EN",
    "हिन्दी - HI",
    "தமிழ் - TA",
    "తెలుగు - TE",
    "मराठी - MR",
  ];
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <div className={classes.main}>
      <Button onClick={scroll} className={classes.btn}>
        Back to top
      </Button>
      <div className={classes.parentDiv}>
        <div className={classes.childDiv}>
          <Typography className={classes.heading}>Get to Know Us</Typography>
          <a
            href="https://corporate.walmart.com/about"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>About Us</Typography>
          </a>
          <a
            href="http://www.careers.walmart.com/"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Careers</Typography>
          </a>
          <a
            href="https://tech.walmart.com/content/walmart-global-tech/en_us/careers.html"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Press Releases</Typography>
          </a>
          <a
            href="https://corporate.walmart.com/content/corporate/en_us/news.html"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Walmart Cares</Typography>
          </a>
          <a
            href="https://www.walmart.org/what-we-do/strengthening-community/local-community-support"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Gift a Smile</Typography>
          </a>
          <a
            href="https://careers.walmart.com/technology/data-science-and-analytics"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Walmart Science</Typography>
          </a>
        </div>
        <div className={classes.childDiv}>
          <Typography className={classes.heading}>Connect with Us</Typography>
          <a
            href="https://www.facebook.com/walmart/"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Facebook</Typography>
          </a>
          <a
            href="https://x.com/Walmart?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Twitter</Typography>
          </a>
          <a
            href="https://www.instagram.com/walmart/"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Instagram</Typography>
          </a>
        </div>
        <div className={classes.childDivException}>
          <Typography className={classes.heading}>
            Make Money with Us
          </Typography>
          <a
            href="https://marketplace.walmart.com/getting-started-in-seller-center/"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Sell on Walmart</Typography>
          </a>
          <a
            href="https://marketplace.walmart.com/review-accelerator/"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>
              Sell under Walmart
            </Typography>
          </a>
          <a
            href="https://marketplace.walmart.com/"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>
              Walmart Global Selling
            </Typography>
          </a>
          <a
            href="https://affiliates.walmart.com/"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>
              Become an Affiliate
            </Typography>
          </a>
          <a
            href="https://marketplace.walmart.com/india-sell-on-walmart/"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>
              Fulfilment by Walmart
            </Typography>
          </a>
          <a
            href="https://advertising.walmart.com/"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>
              Advertise Your Products
            </Typography>
          </a>
          <a
            href="https://www.walmart.com/cp/walmart-pay/3205993"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>
              Walmart Pay on Merchants
            </Typography>
          </a>
        </div>
        <div className={classes.childDivException}>
          <Typography className={classes.heading}>Let Us Help You</Typography>
          <a
            href="https://www.walmart.com/help"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>
              COVID-19 and Walmart
            </Typography>
          </a>
          <a
            href="https://www.walmart.com/account"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Your Account</Typography>
          </a>
          <a
            href="https://identity.walmart.com/account/login?client_id=5f3fb121-076a-45f6-9587-249f0bc160ff&redirect_uri=https%3A%2F%2Fwww.walmart.com%2Faccount%2FverifyToken&scope=openid+email+offline_access&tenant_id=elh9ie&state=%2Fhelp&code_challenge=8j16A9Wa2umDapRzZsB7B12htrHU151N4scA7eyM4KI"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Returns Centre</Typography>
          </a>
          <a
            href="https://www.walmart.com/help"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>
              100% Purchase Protection
            </Typography>
          </a>
          <a
            href="https://www.walmart.com/cp/walmart-app/1087865"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>
              Walmart App Download
            </Typography>
          </a>
          <a
            href="https://www.walmart.com/"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>
              Walmart Assistant Download
            </Typography>
          </a>
          <a
            href="https://www.walmart.com/help"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Help</Typography>
          </a>
        </div>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.lowerFooter}>
        <div className={classes.subDiv1}>
          <img src={walmartLogo} alt="" className={classes.logo} />
          <Popover
            isOpen={isPopoverOpen}
            positions={["bottom", "top"]}
            padding={15}
            reposition={true}
            onClickOutside={() => setIsPopoverOpen(false)}
            content={() => (
              <div className={classes.popover}>
                {options.map((option) => {
                  return (
                    <div style={{ display: "flex", margin: "0.8rem" }}>
                      <input type="radio" className={classes.onHover} />
                      <Typography className={classes.onHover}>
                        {option}
                      </Typography>
                    </div>
                  );
                })}
              </div>
            )}
          >
            <div
              className={classes.iconDiv}
              onClick={() => {
                setIsPopoverOpen(!isPopoverOpen);
              }}
            >
              <BsGlobe />
              <Typography className={classes.text}>English</Typography>
              <TiArrowUnsorted />
            </div>
          </Popover>
        </div>
        <div className={classes.subDiv2}>
          <div className={classes.alignRightItems}>
            <a
              href="https://www.walmart.com/c/kp/australian"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Australia</Typography>
            </a>
            <a
              href="https://www.walmart.com/c/kp/brasil"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Brazil</Typography>
            </a>
            <a
              href="https://www.walmart.ca/en"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Canada</Typography>
            </a>
            <a
              href="https://en.walmart.cn/"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>China</Typography>
            </a>
            <a
              href="https://www.walmart.com/c/kp/france"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>France</Typography>
            </a>
            <a
              href="https://www.walmart.com/"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Germany</Typography>
            </a>
            <a
              href="https://www.walmart.com/c/kp/germany"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Italy</Typography>
            </a>
            <a
              href="https://www.walmart.com/c/kp/japanese"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Japan</Typography>
            </a>
            <a
              href="https://www.walmart.com/"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Mexico</Typography>
            </a>
            <a
              href="https://www.walmart.com/c/kp/nederland"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Netherlands</Typography>
            </a>
            <a
              href="https://www.walmart.com/browse/pl/YnJhbmQ6UEwie"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Poland</Typography>
            </a>
            <a
              href="https://www.walmart.com/c/kp/singapore"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Singapore</Typography>
            </a>
            <a
              href="https://www.walmart.com/c/kp/es"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Spain</Typography>
            </a>
            <a
              href="https://www.walmart.com/c/kp/tr"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Turkey</Typography>
            </a>
            <a
              href="https://www.walmart.com/browse/ae/YnJhbmQ6QUUie"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkTextCustom1}>
                United Arab Emirates
              </Typography>
            </a>
          </div>
          <div className={classes.alignRightItems}>
            <a
              href="https://www.walmart.com/c/kp/uk"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkTextCustom}>
                United Kingdom
              </Typography>
            </a>
            <a
              href="https://www.walmart.com/"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkTextCustom}>
                United States
              </Typography>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
