import React from "react";
import { Link } from "react-router-dom";
import googlePay from "../images/svg/google-play.svg";
import appStore from "../images/svg/app-store.svg";
import cibilScoreIcon from "../images/svg/cibil-score-icon.svg";
import Header from "./Header";
export const City = (props) => {
  console.log("city", props.location.pathname);
  if (props.location.pathname === "/personal-loan-in-delhi") { 
      var cityName="Delhi";
  } else if (props.location.pathname === "/personal-loan-in-bangalore") {
    var cityName="Banglore";
  } else if (props.location.pathname === "/personal-loan-in-hyderabad") {
        var cityName="Hyderabad";
  } else if (props.location.pathname === "/personal-loan-in-pune") {var cityName="Pune";
  } else if (props.location.pathname === "/personal-loan-in-mumbai") {var cityName="Mumbai";
  } else if (props.location.pathname === "/personal-loan-in-chennai") {var cityName="Chennai";
  } else if (props.location.pathname === "/personal-loan-in-kolkata") {var cityName="Kolkata";
  } else if (props.location.pathname === "/personal-loan-in-noida") {var cityName="Noida";
  } else if (props.location.pathname === "/personal-loan-in-vadodara") {var cityName="Vadodara";
  } else if (props.location.pathname === "/personal-loan-in-coimbatore") {var cityName="Coimbatore";
  } else if (props.location.pathname === "/personal-loan-in-bhopal") {var cityName="Bhopal";
  } else if (props.location.pathname === "/personal-loan-in-jaipur") {var cityName="Jaipur";
  } else if (props.location.pathname === "/personal-loan-in-navi-mumbai") {var cityName="Navi Mumbai";
  } else if (props.location.pathname === "/personal-loan-in-lucknow") {var cityName="Lucknow";
  } else if (props.location.pathname === "/personal-loan-in-ahmedabad") {var cityName="Ahmedabad";
  } else if (props.location.pathname === "/personal-loan-in-bhubaneswar") {var cityName="Bhubaneswar";
  }else  {var cityName="Nashik";
}

  return (
    <div>
      <Header />

      <div className="row">
        <div className="col col-md-6 ">
          <div className="cardImg">
            <h4>Looking for a Personal Loan in {cityName}?</h4>
            <p>
              PayMe India’s Instant Personal Loans in {cityName} come with a hassle
              free online process and can be availed in 24 hours
            </p>
            <strong>Get Payme App Now</strong>
            <div className="tabularLess p-b-30">
              <div>
                <Link
                  to={{
                    pathname:
                      "https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia",
                  }}
                  target={"_blank"}
                >
                  <img
                    className="img_google"
                    src={googlePay}
                    alt="Pay Me India"
                  />
                </Link>
              </div>
              <div>
                <img className="img_google" src={appStore} alt="Pay Me India" />
              </div>
            </div>
            <div className="footer-align-stripe">
              <div>
                <img src={cibilScoreIcon} alt="icon" className="img-fluid" />
              </div>
              <div>
                <h4>Get Instant Loan and Unlimited Offers</h4>
              </div>
              <div>
                <Link to="/get-cibil-report" className="green-btn-stripe">
                  Check Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-6 ">
          <div className="rightSection ">
            <h4 className="text-center">Get Loan In {cityName}</h4>
            <p className="text-center">
              Quibusdam nobis est voluptatibus voluptatem. Deleniti sunt
              aliquam. Totam quae eos et aut rerum maxime. Provident id non.
            </p>
            <form id="form" name="form">
              <div className="form-group ms-input-group">
                <label className="form-label pb-2">Full Name</label>
                <input
                  name="fname"
                  type="text"
                  className="form-control input-field"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="form-group ms-input-group">
                <label className="form-label pb-2">Email address</label>
                <input
                  name="email"
                  type="text"
                  className="form-control input-field"
                  placeholder="Enter Email address"
                />
              </div>
              <div className="form-group ms-input-group">
                <label className="form-label pb-2">Phone Number</label>
                <input
                  name="phone"
                  type="number"
                  maxLength="10"
                  pattern="[0-9]+"
                  className="form-control input-field"
                  placeholder="Enter your Phone Number"
                />
              </div>
              <div className="form-group ms-input-group">
                <label className="form-label pb-2">Enter Your reason</label>
                <textarea
                  name="reason"
                  rows="3"
                  className="form-control input-field"
                  placeholder="Type your message"
                />
              </div>
              <Link
                to={{ pathname: "" }}
                className="btnLarge m-t-40"
                style={{
                  display: "block",
                  cursor: "pointer",
                  color: "#fff",
                }}
              >
                Submit
              </Link>
            </form>
            <div
              className="p-t-20 text-center"
              style={{
                fontWeight: "bold",
              }}
            >
              {" "}
              <p>
                Any Doubt?{" "}
                <Link
                  to={{ pathname: "" }}
                  style={{ cursor: "pointer", color: "#02C650" }}
                >
                  Leave a message
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
