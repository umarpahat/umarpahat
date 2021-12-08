import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import criteria from "../images/svg/eligibility-criteria.svg";
import feature from "../images/svg/feature.svg";
import women from "../images/svg/women-pic.svg";
import easy from "../images/svg/easy-online.svg";
import hassle from "../images/svg/watch.svg";
import unsecure from "../images/svg/unsecure.svg";
import shield from "../images/svg/shield.svg";
import dotshadow from "../images/svg/dot-shadow.svg";
import womenFrame from "../images/svg/loans-for-women.svg";
import idProof from "../images/svg/id_proof.svg";
import addressProof from "../images/svg/address_proof.svg";
import doc from "../images/svg/doc.svg";
import employeeId from "../images/svg/employee_id.svg";
import { toast } from "react-toastify";
import axios from "axios";
import OtpDialog from "./OtpDialog";
import { GoogleLogin } from "react-google-login";
import { API_ENDPOINT_STAGING } from "../constant";
toast.configure();
const options = {
  position: "top-center",
  autoClose: 2000,
  limit: 1,
  closeButton: false,
};
import Header from "./Header";
import Footer from "./Footer";
import { Dialog } from "@reach/dialog";
import { hitAppUseCase } from "../store/modules/userDetails/actions";
import { connect } from "react-redux";
import instantLoan from "../images/svg/instant-banner.svg";
import googlePay from "../images/svg/google-play.svg";
import appStore from "../images/svg/app-store.svg";
import tea from "../images/Sharp-Growth.png";
import remote from "../images/Productive-Challenges.png";
import timeline from "../images/Organization-Events.png";
import centralLocation from "../images/Central-Location.png";
import health from "../images/Medical-Insurance.png";
import environment from "../images/Cool-Environment.png";

export const WomenLoan = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [nameerr, setNameerr] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const [phoneerr, setPhoneerr] = useState("");
  const [topicerr, setTopicErr] = useState("");
  const [otpScreen, setOtpScreen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState("");
  const openCity = () => setShowDialogCity(true);
  const closeCity = () => setShowDialogCity(false);

  let url = "";
  let reg = /^[0-9]{1,10}$/;

  const getOtp = () => {
    console.log("button");

    if (name === "") {
      setNameerr("Name can't be empty");
      return;
    }
    if(email==="")
    {
        setEmailerr("Email Id can't be empty")
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

    console.log("hhh");
    url = `${API_ENDPOINT_STAGING}/api/customer-lead/customer-query/`;

    let data = {
      name: name,
      email: email,
      phone_number: phone,
      lead_from: "WOMEN",
      
    };

    axios
      .post(url, data)
      .then(function (response) {
        console.log("city", response);
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

      <div className="col-md-6 col-sm-12 hideDesktop">
        {otpScreen ? (
          <OtpDialog
          {...props}
            name={name}
            email={email}
            phone={phone}
            lead_from="WOMEN"
            
          />
        ) : null}
        <div className="rightSection ">
          <h4 className="text-center">Get Loans for womens</h4>
          <p className="text-center">
            Quibusdam nobis est voluptatibus voluptatem. Deleniti sunt aliquam.
            Totam quae eos et aut rerum maxime. Provident id non.
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
          {/* <div
                        className="p-t-20 text-center"
                        style={{
                            fontWeight: "bold",
                        }}
                    >
                        <p>
                            Any Doubt?
                            <Link
                                to={{pathname: ""}}
                                style={{cursor: "pointer", color: "#02C650"}}
                            > Leave a message
                            </Link>
                        </p>
                    </div>*/}
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-sm-12 col-md-5 bannerAlign">
              <h1 className="heading1">Loans for womens</h1>
              <p className="heading6">
                We are an innovative Fin-Tech organization that offers,
                customized personal loans to the salaried women at lowest
                interest rates. These loans are designed to meet all your
                financial needs.
              </p>
              <br />
              <Link
                className="btnLarge"
                to={{
                  pathname: "/apply-loan",
                }}
              >
                Apply now
              </Link>
              <div className=" p-t-50">
                <h3 className=" p-t-30">Get PayMe India App Now</h3>
              </div>
              <div className="social_link">
                <div>
                  <Link
                    to={{
                      pathname:
                        "https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia",
                    }}
                  >
                    <img
                      className="img_google"
                      src={googlePay}
                      alt="Pay Me India"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    to={{
                      pathname:
                        "https://apps.apple.com/us/app/payme-india/id1282142711",
                    }}
                  >
                    <img
                      className="img_google"
                      src={appStore}
                      alt="Pay Me India"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-2 ">&nbsp;</div>
            <div className="col-sm-12 col-md-5 m-t-40">
              <div className="p-b-30">
                <img
                  className="img-fluid"
                  alt="Instant Loan"
                  src={womenFrame}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="document-wrapper">
        <div className="document-required">
          <div className="container">
            <div className="row p-t-20 ">
              <div className="col-lg-12 col-md-12 col-sm-12 text-center p-t-50 p-b-30">
                <h3 className="text-center heading4">Document Required</h3>
              </div>
            </div>
            <div className="row justify-content-md-center p-t-15">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div
                  className="row justify-content-md-center"
                  style={{ marginTop: 0 }}
                >
                  <div className="col-lg-3 col-md-3 col-sm-12 p-b-30">
                    <div className="document-box justify-content-md-center text-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          className="img-fluid"
                          src={idProof}
                          alt="For Identity proof"
                        />
                      </div>
                      <h3>For Identity proof</h3>
                      <p>
                        KYC documents such as Aadhar card, voter ID, PAN card,
                        driving license, passport, or any other valid document
                        issued by the government.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 p-b-30">
                    <div className="document-box justify-content-md-center text-center">
                      <div className=" d-flex align-items-center justify-content-center">
                        <img
                          className="img-fluid"
                          src={addressProof}
                          alt="Address proof"
                        />
                      </div>

                      <h3>Address proof</h3>
                      <p>
                        Apart from KYC documents, you can submit utility bills,
                        etc. as address proof.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 p-b-30">
                    <div className="document-box justify-content-md-center text-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          className="img-fluid"
                          src={doc}
                          alt="Financial documents"
                        />
                      </div>
                      <h3>Financial documents</h3>
                      <p>Latest bank statement for the previous 3 months</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 p-b-30">
                    <div className="document-box justify-content-md-center text-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          className="img-fluid"
                          src={employeeId}
                          alt="Employment proof"
                        />
                      </div>
                      <h3>Employment proof</h3>
                      <p>Two latest salary slips.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 p-t-50">
            <h3 className="text-center heading4">Eligibility criteria</h3>
          </div>
        </div>
        <div className="row p-t-50 p-b-30 justify-content-md-center">
          <div className="col-md-5 col-sm-12">
            <div className="criteria ">
              <p>
                PayMe India finances ambitious females through instant personal
                loans on simple terms and conditions. Below is the list of
                eligibility requirements to avail of loans for women
              </p>
              <ul>
                <li>
                  <img
                    className="icon-criteria"
                    src={dotshadow}
                    alt="Pay Me India"
                  />
                  <p>The woman must be an Indian citizen </p>
                </li>
                <li>
                  <img
                    className="icon-criteria"
                    src={dotshadow}
                    alt="Pay Me India"
                  />
                  <p>The age group must be between 21 to 58 years.</p>
                </li>
                <li>
                  <img
                    className="icon-criteria"
                    src={dotshadow}
                    alt="Pay Me India"
                  />
                  <p>The minimum salary must be above Rs. 12,000.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 text-center">
            <img className="img_google" src={criteria} alt="Pay Me India" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center heading4">Features</h3>
          </div>
        </div>
        <div className="row p-t-50 p-b-30 justify-content-md-center">
          <div className="col-md-5 col-sm-12 text-center">
            <img className="img_google" src={feature} alt="Pay Me India" />
          </div>
          <div className="col-md-5 col-sm-12 ">
            <ul className="feature ">
              <li>
                <img className="icon-feature" src={easy} alt="Pay Me India" />
                <h4>Easy Online Application</h4>
                <p>
                  You can start your loan application process right from the
                  comfort of home. All you need to do is go to PayMe India's
                  official website and apply for a Personal loan for women or
                  Download the application.
                </p>
              </li>
              <li>
                <img className="icon-feature" src={hassle} alt="Pay Me India" />
                <h4>Hassle-free loan</h4>
                <p>
                  You can start your loan application process right from the
                  comfort of home. All you need to do is go to PayMe India's
                  official website and apply for a Personal loan for women or
                  Download the application.
                </p>
              </li>
              <li>
                <img
                  className="icon-feature"
                  src={unsecure}
                  alt="Pay Me India"
                />
                <h4>Easy Online Application</h4>
                <p>
                  You can start your loan application process right from the
                  comfort of home. All you need to do is go to PayMe India's
                  official website and apply for a Personal loan for women or
                  Download the application.
                </p>
              </li>
              <li>
                <img className="icon-feature" src={shield} alt="Pay Me India" />
                <h4>Easy Online Application</h4>
                <p>
                  You can start your loan application process right from the
                  comfort of home. All you need to do is go to PayMe India's
                  official website and apply for a Personal loan for women or
                  Download the application.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img className="img_google" src={women} alt="Pay Me India" />
          </div>
          <div className="col-md-6 col-sm-12 hideMobile p-t-50">
            <div className="rightSection">
              <h4 className="text-center">Get Loans for womens</h4>
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
                    background: "#F60093",
                  }}
                  onClick={getOtp}
                >
                  Submit
                </button>
              </form>
              {/*<div
                                className="p-t-20 text-center"
                                style={{
                                    fontWeight: "bold",
                                }}
                            >
                                <p>
                                    Any Doubt?
                                    <Link
                                        to={{pathname: ""}}
                                        style={{cursor: "pointer", color: "#02C650"}}
                                    >  Leave a message
                                    </Link>
                                </p>
                            </div>*/}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const dispatchToProps = { hitAppUseCase };

export default connect(mapStateToProps, dispatchToProps)(WomenLoan);
