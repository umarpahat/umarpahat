import React, { useState, useEffect } from "react";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { Link } from "react-router-dom";
import cuate from "../images/svg/cuate.svg";
import googlePay from "../images/svg/google-play.svg";
import appStore from "../images/svg/app-store.svg";
import cibilScoreIcon from "../images/svg/cibil-score-icon.svg";
import OtpDialog from "./OtpDialog";
import { GoogleLogin } from "react-google-login";
import { API_ENDPOINT_STAGING } from "../constant";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
toast.configure();
const options = {
  position: "top-center",
  autoClose: 2000,
  limit: 1,
  closeButton: false,
};

const LeaveMessage = (props) => {
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [nameerr, setNameerr] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const [phoneerr, setPhoneerr] = useState("");
  const [topicerror, setTopicerr] = useState(false);
  const [otpScreen, setOtpScreen] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState("");
  const [otperr, setOtperr] = useState("");

  const close = () => {
    props.close();
  };
  const closeOtpScreenMess = () => {
    setOtpScreen(false);
  };
  let reg = /^[0-9]{1,10}$/;
  const getOtp = () => {
    if (name === "") {
      setNameerr("Name can't be empty");
      return;
    }
    if (email === "") {
      setEmailerr("Email Id can't be empty");
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
    if (topic === "") {
      setTopicerr("Enter your reaose");
      return;
    }
    let url = `${API_ENDPOINT_STAGING}/api/customer-lead/customer-query/`;

    let data = {
      name: name,
      email: email,
      comment: topic,
      phone_number: phone,
      lead_from: "MESSAGE",
    };

    axios
      .post(url, data)
      .then(function (response) {
       
        setOtpScreen(true);
      })
      .catch(function (error) {
        toast.error(error.response.data.message, { ...options });
        console.log(error);
      });
  };
  const GoogleCliendId =
    "435990090197-cjdhhppfhvq8e9n0cullbtco1u22mf1g.apps.googleusercontent.com";
  const responseGoogle = (res) => {
    console.log("cibil", res, res.accessToken);
    let access_token = res.tokenId;
    let url = `https://oauth2.googleapis.com/tokeninfo?id_token=${access_token}`;
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
    <div>
      <Dialog isOpen={true} onDismiss={close}>
        <button className="close-button" onClick={close}>
          <span aria-hidden>×</span>
        </button>
        <div className="row">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {otpScreen ? (
            <OtpDialog
              closeOtpScreenMess={closeOtpScreenMess}
              close={close}
             
              {...props}
              name={name}
              email={email}
              phone={phone}
              lead_from="MESSAGE"
            />
          ) : null}
          <div className="col-md-6">
            <div className="cardImg unsplash">
              <h4>Looking for a Help?</h4>
              <p>
                Please leave a message, our team will get back shortly to you
                and will help you with whatever possible.
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
                  <h4>Check your Loan eligibility now in free of cost</h4>
                </div>
                <div>
                  <Link to="/get-cibil-report" className="green-btn-stripe">
                    click here
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="rightSection ">
              <h4 className="text-center">Leave a Message</h4>
              <p className="text-center">Kindly leave a message, our team will contact you shortly</p>
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
                      if (e.target.value.match(/^[A-Za-z{" "}]+$/)) {
                        setName(e.target.value);
                      } else if (e.target.value.length === 0) {
                        setName(e.target.value);
                      }
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
                    type="text"
                    maxLength="10"
                    pattern="[0-9]+"
                    className="form-control input-field"
                    placeholder="Enter your Phone Number"
                    value={phone}
                    onChange={(e) => {
                      setPhoneerr("");
                      setPhone(e.target.value.slice(0,10).replace(/\D/g, ""));
                    }}
                  />
                  {phoneerr ? (
                    <span style={{ color: "red", fontSize: "16px" }}>
                      {phoneerr}
                    </span>
                  ) : null}
                </div>
                <div className="form-group ms-input-group">
                  <label className="form-label pb-2">Enter Your reason</label>
                  <textarea
                    name="reason"
                    rows="3"
                    className="form-control input-field"
                    placeholder="Type your message"
                    value={topic}
                    onChange={(e) => {
                      setTopicerr("");
                      setTopic(e.target.value);
                    }}
                  />
                  {topicerror ? (
                    <span style={{ color: "red", fontSize: "16px" }}>
                      {topicerror}
                    </span>
                  ) : null}
                </div>
                <button
                 type="button"
                  onClick={getOtp}
                  className="btnLarge m-t-40"
                  style={{
                    display: "block",
                    cursor: "pointer",
                    color: "#fff",
                    width: "100%",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default LeaveMessage;
