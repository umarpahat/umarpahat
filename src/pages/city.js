import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import googlePay from "../images/svg/google-play.svg";
import appStore from "../images/svg/app-store.svg";
import cibilScoreIcon from "../images/svg/cibil-score-icon.svg";
import { toast } from "react-toastify";
import axios from "axios";

toast.configure();
const options = {
  position: "top-center",
  autoClose: 2000,
  limit: 1,
  closeButton: false,
};
import Header from "./Header";
import Footer from "./Footer";
import {Dialog} from "@reach/dialog";
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
    var cityName = "Navi Mumbai";
  } else if (props.location.pathname === "/personal-loan-in-lucknow") {
    var cityName = "Lucknow";
  } else if (props.location.pathname === "/personal-loan-in-ahmedabad") {
    var cityName = "Ahmedabad";
  } else if (props.location.pathname === "/personal-loan-in-bhubaneswar") {
    var cityName = "Bhubaneswar";
  } else if (props.location.pathname === "/personal-loan-in-nashik") {
    var cityName = "Nashik";
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

  let url = "";
  let reg = /^[0-9]{1,10}$/;
  let emailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const getOtp = () => {
   

    if (name.length === 0) {
      setNameerr("Name can't be empty");
      return ;
    }
    if (email.length < 5) {
      setEmailerr("Email should be at least 5 charcters long");
      return ;
    }
    if (email.split("").filter((x) => x === "@").length !== 1) {
      setEmailerr("Email should contain a @");
      return ;
    }
    if (email.indexOf(".") === -1) {
      setEmailerr("Email should contain at least one dot");
      return ;
    }
    if (!emailReg.test(email)) {
      setEmailerr("Email id is Invalid");
      return ;
    }
    if (phone.length === 0) {
      setPhoneerr("Phone can't be empty");
      return ;
    }
    if (phone.length < 10) {
      setPhoneerr("Phone should be 10 digit");
      return ;
    }
    if (!reg.test(phone)) {
      setPhoneerr("Phone number is Invalid");
      return ;
    }

    if (topic.length === 0) {
      setTopicErr("Topic can't be empty");
      return ;
    }

    url = "https://staging.paymeindia.in/api/customer-lead/customer-query/";

    let data = {
      name: name,
      email: email,
      phone: phone,
      topic: topic,
      residential_address: cityName,
    };

    axios
      .post(url, data)
      .then(function (response) {
        console.log("city", response);
      })
      .catch(function (error) {
        // toast.error(error.response.data.message, { ...options });
        console.log(error)
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
      phone: phone,
      topic: topic,
      residential_address: cityName,
    };

    axios
      .put(url, data)
      .then(function (response) {
        console.log("confitm otp", response);
      })
      .catch(function (error) {
        toast.error(error.response.data.message, { ...options });
      });
  };
  return (
    <>
      <Header />
      <div className="container">
      <div className="row">
        <div className="col col-md-6 ">
          <div className="cardImg">
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
                <input
                  name="email"
                  type="text"
                  className="form-control input-field"
                  placeholder="Enter Email address"
                  onChange={(e) => {
                    setEmailerr("");
                    setEmail(e.target.value);
                  }}
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
          className="dialog-box"
          onDismiss={closeCity}
      >
        <button className="close-button" onClick={closeCity}>
          <span aria-hidden>×</span>
        </button>
        <div className='container'>
          <div className="row">
            <div className="col col-md-6 ">
              <div className="cardImg">
                <h4>Looking for a Personal Loan in Delhi?</h4>
                <p>
                  PayMe India’s Instant Personal Loans in Delhi come with a hassle
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
                <h4 className="text-center">Get Loan In Delhi</h4>
                <p className="text-center">
                  Quibusdam nobis est voluptatibus voluptatem. Deleniti sunt
                  aliquam. Totam quae eos et aut rerum maxime. Provident id non.
                </p>
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
                      <span style={{ color: "red", fontSize: "16px" }}>
                    {otperr}
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
                    onClick={SubmitOtp}
                >
                  Submit
                </button>

              </div>
            </div>
          </div>
        </div>
      </Dialog>
      <Footer/>
    </>
  );
};
