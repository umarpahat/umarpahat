import React, { useState } from "react";
import { Dialog  } from "@reach/dialog";
import "@reach/dialog/styles.css";
import OtpDialog from "./OtpDialog";
import { GoogleLogin } from "react-google-login";
import {API_ENDPOINT_STAGING, S3_IMAGES_URL} from "../constant";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
toast.configure();
const options = {
  position: "top-center",
  autoClose: 2000,
  limit: 1,
  closeButton: false,
};
const CustomerGrievance = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [nameerr, setNameerr] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const [phoneerr, setPhoneerr] = useState("");
  const [topicerror, setTopicerr] = useState("");
  const [otpScreen, setOtpScreen] = useState("");
  const [otp, setOtp] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState("");
  const [otperr, setOtperr] = useState("");
 

  const closeGrievance = () => {
    props.closeGrievance();
  };
  const closeOtpScreen = () => {
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
      phone_number: phone,
      comment: topic,
      lead_from: "GRIEVANCE",
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
      <Dialog
        isOpen={true}
        className="dialog-box"
        onDismiss={closeGrievance}
      >
        <button className="close-button" onClick={closeGrievance}>
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
              closeOtpScreen={closeOtpScreen}
              closeGrievance={closeGrievance}
              {...props}
              name={name}
              email={email}
              phone={phone}
              lead_from="GRIEVANCE"
            />
          ) : null}
          <div className="col-md-6 ">
            <div className="cuate">
              <img src={S3_IMAGES_URL+'/svg/cuate.svg'} alt="icon" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="rightSection ">
              <h4 className="text-center">Payme Grievance</h4>
              <p className="text-center">Customers can raise their concern regarding EMI schedule, Facility Type, Processing fee or any other queries.</p>
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
                        name="email"
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
                    maxLength="10"
                    pattern="[0-9]+"
                    className="form-control input-field"
                    placeholder="Enter your Phone Number"
                    value={phone}
                    onChange={(e) => {
                      setPhoneerr("");
                      setPhone(e.target.value.slice(0,10));
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

export default CustomerGrievance;
