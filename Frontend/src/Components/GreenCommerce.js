import React, { useState } from "react";
import eco1 from "../Assets/images/eco1.jpg";
import eco2 from "../Assets/images/eco2.jpg";
import eco3 from "../Assets/images/eco3.jpg";
import "../greencommerce.css";
import { useSelector } from "react-redux";

const GreenCommerce = () => {
  const user = useSelector((state) => state.user);
  const [chkd, setchkd] = useState('');

  const handleChange = () => {
    if (chkd.length === 0)
      setchkd(`Coupon Code: ${Math.random().toString(36).substr(2, 10)}`);
    else
      setchkd('');
  }

  return (
    <div
      className="green-commerce-container"
      style={{ margin: "20px", padding: "20px" }}
    >
      <div className="profile" style={{ margin: "20px", padding: "20px" }}>
        <img
          className="user-image"
          src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
          alt="User"
        ></img>
        <h1>Welcome, {user && user["_delegate"] && user["_delegate"]["displayName"]}!</h1>
        <p className="green-count">
          Your Current Green Score: <span id="greenCount">4</span>
        </p>
        <div className="discount-checkbox">
          <input type="checkbox" id="greenDiscountCheckbox" onChange={handleChange} />
          <label htmlFor="greenDiscountCheckbox">Generate Coupon Code</label>
        </div>
        {chkd.length !== 0 && <div>
          <button className="discount-button" id="redeemDiscount" onClick={() => {
            alert(
              `Coupon Code: ${chkd}, this will be sent to your registered mobile number`
            );
          }}>
            Redeem Your Discount
          </button>
          <p className="coupon-message" id="couponMessage">
            Congratulations! You've unlocked a discount:
          </p>
          <p className="coupon-code" id="couponCode">{chkd}</p>
        </div>}
      </div>
      <h1
        className="green-commerce-header"
        style={{
          margin: "20px",
          marginTop: "50px",
          fontWeight: "bold",
          animation: "typing 3s steps(30, end)",
        }}
      >
        Eco-Friendly Practices
      </h1>
      <div className="green-commerce-content">
        <div
          className="green-commerce-video-placeholder"
          style={{ margin: "20px", padding: "20px" }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ux-2m5MnT_s?si=pnV5cnFFaCw_L6_N"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div
          className="green-commerce-article-placeholder"
          style={{ margin: "20px", padding: "20px" }}
        >
          <p>
            <div className="green-commerce-content">
              <h2
                className="green-commerce-subheader"
                style={{ fontWeight: "bold" }}
              >
                Eco-Friendly Practices
              </h2>
              <ul>
                <li>
                  <p><strong>Sustainable Packaging:</strong> Use recyclable or
                  biodegradable packaging materials. Encourage customers to
                  recycle packaging or offer a return system where packaging
                  materials can be sent back for reuse.</p>
                </li>
                <li>
                  <p>
                    <strong>Energy-Efficient Operations:</strong> Power your
                  warehouses and offices with renewable energy sources such as
                  solar or wind power. Use energy-efficient lighting and
                  appliances to reduce electricity consumption.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Carbon Neutral Shipping:</strong> Partner with
                  eco-friendly shipping companies and offset the carbon
                  footprint of shipping by investing in renewable energy
                  projects or reforestation programs.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Product Sustainability:</strong> Curate a selection of
                  products that are eco-friendly, made from sustainable
                  materials, and have minimal environmental impact. Clearly
                  label these products for easy identification.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Encourage Recycling:</strong> Encourage customers to
                  recycle their old electronics or products. Provide information
                  on how to recycle products responsibly and consider offering
                  incentives for recycling old items.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Offset Carbon Emissions:</strong> Offset the carbon
                  emissions generated by your business operations by investing
                  in carbon offset projects or initiatives. Communicate these
                  efforts transparently to your customers.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Paperless Transactions:</strong> Encourage digital
                  receipts and invoices instead of paper ones. Implement
                  paperless billing and communication systems within your
                  business.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Waste Reduction:</strong> Minimize waste by optimizing
                  inventory management to reduce excess products. Donate unsold
                  items to charities or recycling centers to prevent them from
                  ending up in landfills.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Customer Education:</strong> Raise awareness among
                  your customers about environmental issues and the importance
                  of sustainable shopping practices. Provide tips and guides on
                  how to be more eco-friendly in their daily lives.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Support Local and Fair Trade:</strong> Prioritize
                  products from local artisans and fair trade producers.
                  Supporting local businesses reduces the carbon footprint
                  associated with long-distance transportation and promotes
                  ethical practices.
                  </p>
                </li>
              </ul>
            </div>
          </p>
        </div>
        <div
          className="green-commerce-photo-placeholder"
          style={{ margin: "20px", padding: "20px" }}
        >
          <img
            src="https://www.dispatchtrack.com/hubfs/eco-friendly-delivery.webp"
            alt="Eco-Friendly Packaging"
            style={{ height: "300px", width: "500px" }}
          />
        </div>
        <h2
          className="green-commerce-subheader"
          style={{ margin: "20px", padding: "20px" }}
        >
          Sustainable Shipping
        </h2>
        <div
          className="green-commerce-content"
          style={{ margin: "20px", padding: "20px" }}
        >
          <div
            className="green-commerce-video-placeholder"
            style={{ margin: "20px", padding: "20px" }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YHpD-KhEaRs?si=FxflSXgqQknhunPO"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div
            className="green-commerce-article-placeholder"
            style={{ margin: "20px", padding: "20px" }}
          >
            <p>
              <div className="green-commerce-content">
                <ul>
                  <li style={{ fontWeight: "bold" }}>
                    Liaise with “green shippers”
                  </li>
                  <p>
                    Pay attention to sustainable packaging and also use
                    transportation that has low carbon emissions, including DHL,
                    UPS, and USPS.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                    Utilize eco-friendly shipping supplies
                  </li>
                  <p>
                    Pack your orders with recycled cardboard,
                    environmentally-friendly plastics, and biodegradable
                    materials.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                    Stick to the size of your products
                  </li>
                  <p>
                    Your boxes and packaging should be as close to the size of
                    your items as possible so that you’re not using unnecessary
                    materials. This improves space and cost efficiency and also
                    results in less waste.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                    Schedule your goods to be picked up
                  </li>
                  <p>
                    The courier’s delivery trucks can combine a number of
                    pickups, which reduces the number of carbon emissions
                    released into the atmosphere.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                    Reduce returns (or eliminate them completely)
                  </li>
                  <p>
                    Returns have a negative impact on the environment. As much
                    as possible, try to make sure you’re not delivering the
                    wrong or damaged items.
                  </p>
                  <li style={{ fontWeight: "bold" }}>
                    Offer eco shipping tracking receipts with paperless options
                  </li>
                  <p>
                    Customers can track their orders without resorting to slips
                    of paper that will be thrown away.
                  </p>
                </ul>
              </div>
            </p>
          </div>
          <div
            className="green-commerce-photo-placeholder"
            style={{ margin: "20px", padding: "20px" }}
          >
            <img
              src="https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/04/21102405/Packhelp25647-scaled.jpg"
              alt="Sustainable Shipping"
              style={{ height: "300px", width: "500px" }}
            />
          </div>
        </div>
        <h2
          className="green-commerce-subheader"
          style={{ margin: "20px", padding: "20px" }}
        >
          Earn More Green Points & Get Rewarded for Sustainable Choices!
        </h2>
        <div
          className="green-commerce-content"
          style={{ margin: "20px", padding: "20px" }}
        >
          <div
            className="green-commerce-video-placeholder"
            style={{ margin: "20px", padding: "20px" }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zx04Kl8y4dE?si=y4jVph__5DviAeYF"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div
            className="green-commerce-article-placeholder"
            style={{ margin: "20px", padding: "20px" }}
          >
            <p style={{ color: "#333", lineHeight: "1.5" }}>
              <span style={{ fontWeight: "bold" }}>
                At Green Commerce, we are committed to promoting eco-friendly
                practices and rewarding our customers for making sustainable
                choices. Introducing our Green Points program – an initiative
                designed to encourage and celebrate your efforts toward a
                greener planet.
              </span>
              <br />
              <br />
              <span style={{ fontWeight: "bold" }}>
                Here are the ways you can earn Green Points:
              </span>
              <br />
              <br />
              <span style={{ fontWeight: "bold" }}>
                1. Bundle Up for Bonus Points:
              </span>
              <br />
              Purchase our specially curated eco-friendly product bundles and
              earn bonus Green Points with every purchase. Choose products that
              make a positive impact, and you’ll be rewarded for your mindful
              shopping.
              <br />
              <br />
              <span style={{ fontWeight: "bold" }}>2. Recycling Rewards:</span>
              <br />
              Join our recycling program! Return packaging materials or old
              electronic items bought from us and earn Green Points for every
              item recycled. Help us reduce waste and earn points while you’re
              at it.
              <br />
              <br />
              <span style={{ fontWeight: "bold" }}>
                3. Share Your Eco-Friendly Journey:
              </span>
              <br />
              Share your eco-friendly purchases or sustainable lifestyle tips on
              social media with our dedicated hashtag. Earn Green Points for
              every post shared and inspire others to make environmentally
              conscious choices.
              <br />
              <br />
              <span style={{ fontWeight: "bold" }}>
                4. Refer Friends, Earn Points:
              </span>
              <br />
              Refer your friends and family to [Your Company Name] and earn
              Green Points for every referral. Plus, enjoy bonus points when
              your referred friends make eco-friendly purchases.
              <br />
              <br />
              <span style={{ fontWeight: "bold" }}>
                5. Eco-Challenge Participation:
              </span>
              <br />
              Participate in our monthly eco-challenges and earn Green Points
              based on your engagement. Small actions can make a big difference,
              and we want to reward you for your commitment to a greener world.
              <br />
              <br />
              <span style={{ fontWeight: "bold" }}>
                6. Leave Eco-Friendly Reviews:
              </span>
              <br />
              Leave reviews for products focusing on their eco-friendliness,
              durability, and sustainability. Earn extra Green Points for your
              thoughtful reviews, helping others make informed choices.
              <br />
              <br />
              <span style={{ fontWeight: "bold" }}>
                7. Exclusive Discounts & Early Access:
              </span>
              <br />
              Accumulate Green Points and unlock exclusive discounts on
              eco-friendly products. Enjoy early access to new arrivals,
              available only to our valued Green Points members.
              <br />
              <br />
              <span style={{ fontWeight: "bold" }}>
                8. Donate Points, Make a Difference:
              </span>
              <br />
              Donate your Green Points to environmental causes, and we’ll match
              your contribution with a monetary donation. Your points can
              support meaningful initiatives aimed at preserving our planet.
            </p>
          </div>
          <div
            className="green-commerce-photo-placeholder"
            style={{ margin: "20px", padding: "20px" }}
          >
            <img
              src="https://www.shipbob.com/wp-content/uploads/2021/04/eco-friendly-packaging.png"
              alt="Eco-Friendly Products"
              style={{ height: "300px", width: "500px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenCommerce;
