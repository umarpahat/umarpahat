import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import OtpDialog from "./OtpDialog";
import { GoogleLogin } from "react-google-login";
import {API_ENDPOINT_STAGING, S3_IMAGES_URL} from "../constant";
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
import MetaTags from "react-meta-tags";

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

  const closeCity = () => setOtpScreen(false);

  let url = "";
  let reg = /^[0-9]{1,10}$/;

  const getOtp = () => {
    console.log("button");

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

    let url = `${API_ENDPOINT_STAGING}/api/customer-lead/customer-query/`;

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
  useEffect(() => {
    window.scrollTo(0, 0);

    hotJarForWomen();
  }, []);

  const hotJarForWomen = () => {
    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 2759149, hjsv: 6 };
      a = o.getElementsByTagName("head")[0];
      r = o.createElement("script");
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
  };

  const responseGoogleFail = (res) => {
    toast.error("Please login google account in your device", { ...options });
    setTimeout(() => setIsButtonDisabled(false), 3000);
  };
  return (
    <>
      <MetaTags>
        <title>Mahila Loan: Get Personal Loan for Women - PayMe India</title>
        <meta name="description" content="Avail of instant approved personal loans from PayMe India. We provide loan facilities at competitive interest rates to women with an aim to help them meet their financial needs. " />
        <meta name="keyword" content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online" />
        <meta property="og:title" content="Mahila Loan: Get Personal Loan for Women - PayMe India" />
      </MetaTags>
      <Header />
      <div className="col-md-6 col-sm-12 hideDesktop">
        {otpScreen ? (
          <OtpDialog
            closeCity={closeCity}
            {...props}
            name={name}
            email={email}
            phone={phone}
            lead_from="WOMEN"
          />
        ) : null}
        <div className="rightSection ">
          <h2 className="text-center heading4">Get loans for women</h2>
          <p className="text-center">
            Personal financing for all rising women evolving needs
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
                type="text"
                className="form-control input-field"
                placeholder="Enter your Phone Number"
                value={phone}
                onChange={(e) => {
                  setPhoneerr("");
                  setPhone(e.target.value.slice(0, 10).replace(/\D/g, ""));
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
      <div className="banner" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-sm-12 col-md-6 bannerAlign p-t-20">
              <h1 className="heading1">Personal Loan for Women</h1>
              <p className="heading6 p-b-20">
                PayMe India provide today’s women path to financial freedom by
                offering collateral-free personal loan at affordable interest
                rate.
              </p>
              <a
                className="btnLarge"
                style={{ background: "#F60093" }}
                href="https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia"
              >
                Get app now
              </a>
              <div className=" p-t-10">
                <h3 className=" p-t-30">Get PayMe India app now</h3>
              </div>
              <div className="social_link">
                <div>
                  <a href="https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia">
                    <img
                      className="img_google"
                      src={googlePay}
                      alt="Pay Me India"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://apps.apple.com/us/app/payme-india/id1282142711">
                    <img
                      className="img_google"
                      src={appStore}
                      alt="Pay Me India"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <img
                  className="img-fluid"
                  alt="Instant Loan"
                  src={S3_IMAGES_URL+'/svg/loans-for-women.svg'}
                />
            </div>
          </div>
        </div>
      </div>
      <div className="document-wrapper">
        <div className="document-required">
          <div className="container">
            <div className="row p-t-20 ">
              <div className="col-lg-12 col-md-12 col-sm-12 text-center p-t-50 p-b-30">
                <h2 className="text-center heading4">
                  Documents required for women's loan
                </h2>
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
                          src={S3_IMAGES_URL+'/svg/id_proof.svg'}
                          alt="For identity proof"
                        />
                      </div>
                      <h3>For identity proof</h3>
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
                          src={S3_IMAGES_URL+'/svg/address_proof.svg'}
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
                          src={S3_IMAGES_URL+'/svg/doc.svg'}
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
                          src={S3_IMAGES_URL+'/svg/employee_id.svg'}
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
            <h2 className="text-center heading4">Eligibility criteria for personal loan for women</h2>
          </div>
        </div>
        <div className="row p-t-40 p-b-30 justify-content-md-center">
          <div className="col-md-5 col-sm-12">
            <div className="criteria ">
              <p>
                PayMe India finances ambitious females through instant personal loans on simple terms and conditions. Below is the list of eligibility requirements to avail of loans for women.
              </p>
              <ul>
                <li>
                  <img
                    className="icon-criteria"
                    src={S3_IMAGES_URL+'/svg/dot-shadow.svg'}
                    alt="Pay Me India"
                  />
                  <p>The woman must be an Indian citizen </p>
                </li>
                <li>
                  <img
                    className="icon-criteria"
                    src={S3_IMAGES_URL+'/svg/dot-shadow.svg'}
                    alt="Pay Me India"
                  />
                  <p>The age group must be between 21 to 58 years.</p>
                </li>
                <li>
                  <img
                    className="icon-criteria"
                    src={S3_IMAGES_URL+'/svg/dot-shadow.svg'}
                    alt="Pay Me India"
                  />
                  <p>The minimum salary must be above Rs. 12,000</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 text-center">
            <img className="img_google" src={S3_IMAGES_URL+'/svg/eligibility-criteria.svg'} alt="Pay Me India" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center heading4">Features of personal loan for women</h2>
          </div>
        </div>
        <div className="row p-t-50 p-b-30 justify-content-md-center">
          <div className="col-md-5 col-sm-12 text-center p-b-30">
            <img className="img_google" src={S3_IMAGES_URL+'/svg/feature.svg'} alt="Pay Me India" />
          </div>
          <div className="col-md-5 col-sm-12 ">
            <ul className="feature ">
              <li>
                <img className="icon-feature" src={S3_IMAGES_URL+'/svg/easy-online.svg'} alt="Pay Me India" />
                <h4>Easy online application</h4>
                <p>You can start your loan application process right from the comfort of home. All you need to do is go to PayMe India's official website and apply for a Personal loan for women or Download the application.</p>
              </li>
              <li>
                <img className="icon-feature"  src={S3_IMAGES_URL+'/svg/watch.svg'} alt="Pay Me India" />
                <h4>Hassle-free loan</h4>
                <p>PayMe India offers easy and quick small business loans of up to Rs.2 lakh at affordable interest rates. With approval in as little as 24 hours*. These high-value loans offer the ideal financial option to meet unexpected expenditures.</p>
              </li>
              <li>
                <img
                  className="icon-feature"
                  src={S3_IMAGES_URL+'/svg/unsecure.svg'}
                  alt="Pay Me India"
                />
                <h4>Unsecured loan with minimal paperwork</h4>
                <p>PayMe India provides unsecured loans that require no collateral, which means you need not worry about giving assets to get funds.</p>
              </li>
              <li>
                <img className="icon-feature" src={S3_IMAGES_URL+'/svg/shield.svg'} alt="Pay Me India" />
                <h4>No end-use restriction</h4>
                <p>How you use the money from a personal loan for women is up to you. There is no restriction on the end-use of the loan for women.</p>
              </li>
              <li>
                <img className="icon-feature" src={S3_IMAGES_URL+'/svg/secure-safety.svg'} alt="Pay Me India" />
                <h4>Safe & secure</h4>
                <p>From application to approval, all our processes are safe and secure. Your details are always at your fingertips.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row p-b-30">
          <div className="col-md-6 col-sm-12">
            <img className="img_google" src={S3_IMAGES_URL+'/svg/women-pic.svg'} alt="Pay Me India" />
          </div>
          <div className="col-md-6 col-sm-12 hideMobile p-t-50">
            <div className="rightSection">
              <h2 className="text-center heading4">Get loans for women</h2>
              <p className="text-center">
                Personal financing for all rising women evolving needs
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
                      setPhone(e.target.value.slice(0, 10));
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
                    width: "100%",
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
