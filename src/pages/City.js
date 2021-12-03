import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import googlePay from "../images/svg/google-play.svg";
import appStore from "../images/svg/app-store.svg";
import cibilScoreIcon from "../images/svg/cibil-score-icon.svg";
import { toast } from "react-toastify";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import Header from "./Header";
import { Dialog } from "@reach/dialog";
import Delhi from "../images/Delhi.png";
import Banglore from "../images/Banglore.png";
import Hyderabad from "../images/Hyderabad.png";
import Mumbai from "../images/Mumbai.png";
import NaviMumbai from "../images/Mumbai.png";
import Pune from "../images/Pune.png";
import Noida from "../images/Noida.png";
import Vadodara from "../images/Vadodara.png";
import Coimbatore from "../images/Coimbatore.png";
import Bhopal from "../images/Bhopal.png";
import Jaipur from "../images/Jaipur.png";
import Lucknow from "../images/Lucknow.png";
import Ahmedabad from "../images/Ahemdabad.png";
import Bhubaneswar from "../images/Bhubnashwer.png";
import Nashik from "../images/Nashik.png";
import Kolkata from "../images/Kolkata.png";
import Chennai from "../images/Chennai.png";
import NearMe from "../images/Random-India-image.png";
import "@reach/dialog/styles.css";

toast.configure();
const options = {
  position: "top-center",
  autoClose: 2000,
  limit: 1,
  closeButton: false,
};
const images = {
  Delhi,
  Banglore,
  Hyderabad,
  Chennai,
  Kolkata,
  Nashik,
  Bhubaneswar,
  Ahmedabad,
  Lucknow,
  Jaipur,
  Bhopal,
  Coimbatore,
  Vadodara,
  Noida,
  Pune,
  Mumbai,
  NearMe,
  NaviMumbai
};
console.log(images);
export const City = (props) => {
  const [showDialogCity, setShowDialogCity] = React.useState(false);
  const openCity = () => setShowDialogCity(true);
  const closeCity = () => setShowDialogCity(false);

  if (props.location.pathname === "/personal-loan-in-delhi") {
    var cityName = "Delhi";
  } else if (props.location.pathname === "/personal-loan-in-bangalore") {
    var cityName = "Banglore";
  } else if (props.location.pathname === "/personal-loan-in-hyderabad") {
    var cityName = "Hyderabad";
  } else if (props.location.pathname === "/personal-loan-in-pune") {
    var cityName = "Pune";
  } else if (props.location.pathname === "/personal-loan-in-mumbai") {
    var cityName = "Mumbai";
  } else if (props.location.pathname === "/personal-loan-in-chennai") {
    var cityName = "Chennai";
  } else if (props.location.pathname === "/personal-loan-in-kolkata") {
    var cityName = "Kolkata";
  } else if (props.location.pathname === "/personal-loan-in-noida") {
    var cityName = "Noida";
  } else if (props.location.pathname === "/personal-loan-in-vadodara") {
    var cityName = "Vadodara";
  } else if (props.location.pathname === "/personal-loan-in-coimbatore") {
    var cityName = "Coimbatore";
  } else if (props.location.pathname === "/personal-loan-in-bhopal") {
    var cityName = "Bhopal";
  } else if (props.location.pathname === "/personal-loan-in-jaipur") {
    var cityName = "Jaipur";
  } else if (props.location.pathname === "/personal-loan-in-navi-mumbai") {
    var cityName = "NaviMumbai";
  } else if (props.location.pathname === "/personal-loan-in-lucknow") {
    var cityName = "Lucknow";
  } else if (props.location.pathname === "/personal-loan-in-ahmedabad") {
    var cityName = "Ahmedabad";
  } else if (props.location.pathname === "/personal-loan-in-bhubaneswar") {
    var cityName = "Bhubaneswar";
  } else if (props.location.pathname === "/personal-loan-in-nashik") {
    var cityName = "Nashik";
  } else if (props.location.pathname === "/personal-loan-near-me") {
    var cityName = "NearMe";
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [nameerr, setNameerr] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const [phoneerr, setPhoneerr] = useState("");
  const [topicerr, setTopicErr] = useState("");
  const [otp, setOtp] = useState("");
  const [otperr, setOtperr] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState("");
  let url = "";
  let reg = /^[0-9]{1,10}$/;

  const getOtp = () => {
    if (name.length === 0) {
      setNameerr("Name can't be empty");
      return;
    }

    if (phone.length === 0) {
      setPhoneerr("Phone can't be empty");
      return;
    }
    if (phone.length < 10) {
      setPhoneerr("Phone should be 10 digit");
      return;
    }
    if (!reg.test(phone)) {
      setPhoneerr("Phone number is Invalid");
      return;
    }

    url = "https://staging.paymeindia.in/api/customer-lead/customer-query/";

    let data = {
      name: name,
      email: email,
      phone_number: phone,
      topic: "",
      lead_from: "GETLOAN",
      residential_address: cityName,
    };

    axios
      .post(url, data)
      .then(function (response) {
        console.log("city", response);
        console.log(response.status);
        setShowDialogCity(true);
      })
      .catch(function (error) {
        // toast.error(error.response.data.message, { ...options });
        console.log(error);
      });
  };
  const SubmitOtp = () => {
    if (otp === "") {
      setOtperr("Name can't be empty");
      return;
    }

    url = "https://staging.paymeindia.in/api/customer-lead/customer-query/";

    let data = {
      otp: otp,
      name: name,
      email: email,
      phone_number: phone,
      topic: "",
      lead_from: "GETLOAN",
      residential_address: cityName,
    };

    axios
      .put(url, data)
      .then(function (response) {
        closeCity()
        window.open(
          "https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia"
        );
      })
      .catch(function (error) {
        toast.error(error.response.data.message, { ...options });
      });
  };
  const GoogleCliendId =
    "435990090197-cjdhhppfhvq8e9n0cullbtco1u22mf1g.apps.googleusercontent.com";
  const responseGoogle = (res) => {
    console.log("cibil", res, res.accessToken);
    let access_token = res.tokenId;
    url = `https://oauth2.googleapis.com/tokeninfo?id_token=${access_token}`;
    axios
      .get(url)
      .then((response) => {
        if (res.profileObj.email === response.data.email) {
          setEmail(res.profileObj.email);
          toast.success("Email successfully signed in", { ...options });
          setIsButtonDisabled(true);
          setTimeout(() => setIsButtonDisabled(false), 3000);

          setEmailerr("");
        } else {
          toast.error("Please login with different email Id", { ...options });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const responseGoogleFail = (res) => {
    toast.error("Please login google account in your device", { ...options });
    setTimeout(() => setIsButtonDisabled(false), 3000);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-md-6 ">
            <div
              className="cardImg"
              style={{ backgroundImage: `url(${images[`${cityName}`]})` }}
            >
              <h4>Looking for a Personal Loan in {cityName}?</h4>
              <p>
                PayMe India’s Instant Personal Loans in {cityName} come with a
                hassle free online process and can be availed in 24 hours
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
                  <img
                    className="img_google"
                    src={appStore}
                    alt="Pay Me India"
                  />
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
                Avail of instant loans starting from ₹ 500 up to ₹ 2 Lakhs, with
                the funds credited directly to your bank account. Experience
                100% secure process, Minimal documentation, and fast disbursal.
              </p>
              <form id="form" name="form">
                <div className="form-group ms-input-group">
                  <label className="form-label pb-2">Full Name</label>
                  <input
                    name="fname"
                    type="text"
                    className="form-control input-field"
                    placeholder="Enter Full Name"
                    value={name}
                    onChange={(e) => {
                      setNameerr("");
                      setName(e.target.value);
                    }}
                  />
                  {nameerr ? (
                    <span style={{ color: "red", fontSize: "16px" }}>
                      {nameerr}
                    </span>
                  ) : null}
                </div>
                <div className="form-group ms-input-group">
                  <label className="form-label pb-2">Email address</label>

                  <GoogleLogin
                    clientId={GoogleCliendId}
                    render={(renderProps) => (
                      <input
                        onClick={renderProps.onClick}
                        name="name"
                        type="text"
                        value={email}
                        className="form-control input-field"
                        placeholder="Enter Email address"
                        required=""
                        disabled={renderProps.disabled || isButtonDisabled}
                      />
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogleFail}
                    cookiePolicy={"single_host_origin"}
                  />
                  {emailerr ? (
                    <span style={{ color: "red", fontSize: "16px" }}>
                      {emailerr}
                    </span>
                  ) : null}
                </div>
                <div className="form-group ms-input-group">
                  <label className="form-label pb-2">Phone Number</label>
                  <input
                    name="phone"
                    type="number"
                    className="form-control input-field"
                    placeholder="Enter your Phone Number"
                    value={phone}
                    onChange={(e) => {
                      setPhoneerr("");
                      setPhone(e.target.value);
                    }}
                  />
                  {phoneerr ? (
                    <span style={{ color: "red", fontSize: "16px" }}>
                      {phoneerr}
                    </span>
                  ) : null}
                </div>

                <button
                  type="button"
                  className="btnLarge m-t-40"
                  style={{
                    display: "block",
                    cursor: "pointer",
                    color: "#fff",
                  }}
                  onClick={getOtp}
                >
                  Submit
                </button>
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

      <Dialog
        isOpen={showDialogCity}
        onDismiss={closeCity}
        style={{ width: 400 }}
      >
        <button className="close-button" onClick={closeCity}>
          <span aria-hidden>×</span>
        </button>

        <div className="rightSection ">
          <h4 className="text-center">Get Loan In Delhi</h4>

          <div className="form-group ms-input-group">
            <label className="form-label pb-2">Enter OTP</label>
            <input
              name="otp"
              type="number"
              className="form-control input-field"
              placeholder="Enter your Phone Number"
              value={otp}
              onChange={(e) => {
                setOtperr("");
                setOtp(e.target.value);
              }}
            />
            {otperr ? (
              <span style={{ color: "red", fontSize: "16px" }}>{otperr}</span>
            ) : null}
          </div>

          <button
            type="button"
            className="btnLarge m-t-40"
            style={{
              display: "block",
              cursor: "pointer",
              color: "#fff",
            }}
            onClick={SubmitOtp}
          >
            Submit
          </button>
        </div>
      </Dialog>
    </>
  );
};
export default City;
