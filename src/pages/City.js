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
import Bangalore from "../images/Bangalore.png";
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
import { API_ENDPOINT_STAGING } from "../constant";
import Footer from "./Footer";
import OtpDialog from "./OtpDialog";
import MetaTags from "react-meta-tags";

toast.configure();
const options = {
  position: "top-center",
  autoClose: 2000,
  limit: 1,
  closeButton: false,
};
const images = {
  Delhi,
  Bangalore,
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
  NaviMumbai,
};

export const City = (props) => {
  const [showDialogCity, setShowDialogCity] = React.useState(false);
  const openCity = () => setShowDialogCity(true);
  const closeCity = () => setShowDialogCity(false);

  if (props.location.pathname === "/personal-loan-in-delhi") {
    var cityName = "Delhi";
  } else if (props.location.pathname === "/personal-loan-in-bangalore") {
    var cityName = "Bangalore";
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
  const [otp, setOtp] = useState("");
  const [otperr, setOtperr] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState("");
  const [otpScreen, setOtpScreen] = useState(false);
 const CloseOtpScreen =()=>{
  setOtpScreen(false)
 }
  let url = "";
  let reg = /^[0-9]{10}$/;

  const getOtp = () => {
    setOtp("");
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
    let url = `${API_ENDPOINT_STAGING}/api/customer-lead/customer-query/`;
    let data = {
      name: name,
      email: email,
      phone_number: phone,

      lead_from: "GETLOAN",
      residential_address: cityName,
    };

    axios
      .post(url, data)
      .then(function (response) {
        console.log("city", response);
        console.log(response.status);
        gtag_report_conversion();
        window.fbq('track', 'Lead');
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
  useEffect(() => {
    window.scrollTo(0, 0);
    GoogleAnalytics();
    faceBook()
    fbq('init', "4712656898789321");
    // hotJarForCity();
  }, []);

  const GoogleAnalytics =()=>{
    const script = document.createElement('script')
    script.id = 'G-1P4XMQV2BK'
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-1P4XMQV2BK'
    script.async = true
    script.defer = true
    script.crossOrigin = 'anonymous'
    script.onload = () => setHasLoaded(true)
    document.body.append(script)

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-1P4XMQV2BK');
    (window,document,'script','https://www.googletagmanager.com/gtag/js?id=G-1P4XMQV2BK','ga');
  }

  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };
    gtag("event", "conversion", {
      send_to: "AW-875618776/9y-ACJaIgosDENjDw6ED",
      event_callback: callback,
    });
    return false;
  }

  // const hotJarForCity=()=>{
  //   (function(h,o,t,j,a,r){
  //     h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  //     h._hjSettings={hjid:2758326,hjsv:6};
  //     a=o.getElementsByTagName('head')[0];
  //     r=o.createElement('script');r.async=1;
  //     r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
  //     a.appendChild(r);
  // })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  // }

  const faceBook=()=>{
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
    );
    fbq("init", "4712656898789321");
    fbq("track", "PageView");
    fbq('track', 'Lead');
  
  }
  return (
    <>
      {
        cityName === "Delhi"? <MetaTags>
          <title>Instant Personal loan in Delhi NCR – Check eligibility & apply online</title>
          <meta name="description" content="Looking for a low-interest personal loan in Delhi NCR? Get PayMe India’s instant loan at affordable interest rates. Get loan up to Rs. 2 lakhs hassle-free with PayMe India. "/>
          <meta name="keyword"
                content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
          <meta property="og:title" content="Instant Personal loan in Delhi NCR – Check eligibility & apply online"/>
        </MetaTags> : cityName === "Bangalore"? <MetaTags>
          <title>Instant Personal loan for low Cibil score in Bangalore – PayMe India</title>
          <meta name="description" content="Are you unable to get a personal loan in Bangalore due to a low CIBIL score? PayMe India offers you a hassle-free loan at low-interest rates. Apply for a personal loan now!"/>
          <meta name="keyword"
                content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
          <meta property="og:title" content="Instant Personal loan for low Cibil score in Bangalore – PayMe India"/>
        </MetaTags> : cityName === "Hyderabad"? <MetaTags>
          <title>Instant personal loan in Hyderabad – PayMe India</title>
          <meta name="description" content="Know your eligibility for an instant personal loan in Hyderabad and find competitive interest rates for applying online at paymeindia.in."/>
          <meta name="keyword"
                content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
          <meta property="og:title" content="Instant personal loan in Hyderabad – PayMe India"/>
        </MetaTags>  : cityName === "Pune"? <MetaTags>
          <title>Instant Online Personal loan in Pune | Urgent cash in Pune – PayMe India</title>
          <meta name="description" content="Looking for a low-interest rate instant online personal loan in Pune? PayMe India is here to offer flexible and easy to apply for quick/urgent cash loans in Pune."/>
          <meta name="keyword"
                content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
          <meta property="og:title" content="Instant Online Personal loan in Pune | Urgent cash in Pune – PayMe India"/>
        </MetaTags>  : cityName === "Mumbai"? <MetaTags>
          <title>Instant Personal loan online in Mumbai – PayMe India</title>
          <meta name="description" content="Get a personal loan in Mumbai at the lowest interest rate with PayMe India. Visit the website to apply online for an instant/quick personal loan in Mumbai. "/>
          <meta name="keyword"
                content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
          <meta property="og:title" content="Instant Personal loan online in Mumbai – PayMe India"/>
        </MetaTags>  : cityName === "Chennai"? <MetaTags>
          <title>Instant online Personal loan at low interest in Chennai – PayMe India</title>
          <meta name="description" content="Looking for a low-interest personal loan in Chennai? Apply now to get an instant loan at affordable interest rates in Chennai up to 2 lakhs without any hassle with PayMe India. "/>
          <meta name="keyword"
                content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
          <meta property="og:title" content="Instant online Personal loan at low interest in Chennai – PayMe India"/>
        </MetaTags>  : cityName === "Kolkata"? <MetaTags>
          <title>Instant Personal Loan in Kolkata - PayMe India</title>
          <meta name="description" content="Know your eligibility for an instant personal loan in Kolkata and find competitive interest rates for applying online at paymeindia.in."/>
          <meta name="keyword"
                content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
          <meta property="og:title" content="Instant Personal Loan in Kolkata - PayMe India"/>
        </MetaTags>  : cityName === "Noida"? <MetaTags>
          <title>Instant Personal Loan in Noida – PayMe India</title>
          <meta name="description" content="Personal loan in Noida: Apply for an online instant personal loan and get loan approval today from 500 to 2 lakh in a few hours for salaried professionals at flexible EMI."/>
          <meta name="keyword"
                content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
          <meta property="og:title" content="Instant Personal Loan in Noida – PayMe India"/>
        </MetaTags>  : cityName === "Vadodara"? <MetaTags>
          <title>Instant Personal Loan in Vadodara – PayMe India</title>
          <meta name="description" content="Personal Loan - Get an instant personal loan in Vadodara at low-interest rates at PayMe India. Apply for a personal loan online to fulfill your urgent financial needs."/>
          <meta name="keyword"
                content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
          <meta property="og:title" content="Instant Personal Loan in Vadodara – PayMe India"/>
        </MetaTags>  : cityName === "Coimbatore"? <MetaTags>
          <title>Instant personal loan in Coimbatore – PayMe India</title>
          <meta name="description" content="Know your eligibility for an instant personal loan in Coimbatore and find competitive interest rates for applying online at paymeindia.in."/>
          <meta name="keyword"
                content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
          <meta property="og:title" content="Instant personal loan in Coimbatore – PayMe India"/>
        </MetaTags>  : cityName === "Bhopal"? <MetaTags>
          <title>Apply Personal Loan online in Bhopal | Check your eligibility – PayMe India</title>
          <meta name="description" content="et up to Rs 2 lakh with a PayMe India Instant personal loan in Bhopal and meet various financial like vacation, education, wedding, and home renovation, etc."/>
          <meta name="keyword"
                content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
          <meta property="og:title" content="Apply Personal Loan online in Bhopal | Check your eligibility – PayMe India"/>
        </MetaTags>  : cityName === "Jaipur"? <MetaTags>
          <title>Instant Personal loan in Jaipur, Urgent Cash loan – PayMe India</title>
          <meta name="description" content="Looking for a low-interest rate instant personal loan in Jaipur? PayMe India is here to offer flexible and easy-to-apply quick/urgent cash loans in Jaipur."/>
          <meta name="keyword"
                content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
          <meta property="og:title" content="Instant Personal loan in Jaipur, Urgent Cash loan – PayMe India"/>
        </MetaTags>  : cityName === "NaviMumbai"? <MetaTags>
          <title>Instant Personal Loan in Navi Mumbai - PayMe India</title>
          <meta name="description" content="Get a personal loan in Navi Mumbai at the lowest interest rate with PayMe India. Visit the website to apply online for an instant personal loan in Navi Mumbai."/>
          <meta name="keyword"
                content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
          <meta property="og:title" content="Instant Personal Loan in Navi Mumbai - PayMe India"/>
        </MetaTags>  : cityName === "Lucknow"? <MetaTags>
          <title>Instant Personal loan in Lucknow, Urgent Cash loan – PayMe India</title>
          <meta name="description" content="Looking for a low-interest rate instant personal loan in Lucknow? PayMe India is here to offer flexible and easy to apply for quick/urgent cash loans in Lucknow. "/>
          <meta name="keyword"
                content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
          <meta property="og:title" content="Instant Personal loan in Lucknow, Urgent Cash loan – PayMe India"/>
        </MetaTags>  : cityName === "Ahmedabad"? <MetaTags>
          <title>Personal Loan in Ahmedabad - Check Eligibility & Apply Online – PayMe India</title>
          <meta name="description" content="Apply for an instant personal loan in Ahmedabad of up to ₹2 lakhs at affordable interest rates, zero collateral, and flexible EMIs. Best instant personal loan app in Ahmedabad that offers instant loans for every financing need."/>
          <meta name="keyword"
                content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
          <meta property="og:title" content="Personal Loan in Ahmedabad - Check Eligibility & Apply Online – PayMe India"/>
        </MetaTags>  : cityName === "Bhubaneswar"? <MetaTags>
          <title>Apply for Instant personal loan in Bhubaneswar - PayMe India</title>
          <meta name="description" content="Apply for an instant personal loan in Bhubaneswar online and get an approval of instant cash loan in a few hours up to Rs. 2 lakh from PayMe India. We offer online urgent personal loans and cash loans online for salaried professionals in Bhubaneswar."/>
          <meta name="keyword"
                content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
          <meta property="og:title" content="Apply for Instant personal loan in Bhubaneswar - PayMe India"/>
        </MetaTags>  : cityName === "Nashik"? <MetaTags>
          <title>Instant online Personal loan at low interest in Nashik – PayMe India</title>
          <meta name="description" content="Looking for a low-interest personal loan in Nashik? Get PayMe India’s instant loan at affordable interest rates. Get a loan up to Rs. 2 lakhs hassle-free with PayMe India."/>
          <meta name="keyword"
                content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
          <meta property="og:title" content="Instant online Personal loan at low interest in Nashik – PayMe India"/>
        </MetaTags>  : <MetaTags>
          <title>Personal Loan near me – PayMe India</title>
          <meta name="description" content="Get instant personal loan near me at low interest rates at PayMe India. Apply for personal loan online to fulfil your urgent financial needs."/>
          <meta name="keyword"
                content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
          <meta property="og:title" content="Personal Loan near me – PayMe India"/>
        </MetaTags>
      }


      <Header {...props} />
      {otpScreen ? (
          <OtpDialog
          CloseOtpScreen={CloseOtpScreen}
          {...props}
            name={name}
            email={email}
            phone={phone}
            lead_from="GETLOAN"

          />
        ) : null}
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 hideMobile">
            <div
              className="cardImg"
              style={{ backgroundImage: `url(${images[`${cityName}`]})` }}
            >
              {cityName === "NearMe" ? (
                <h4>Looking for a Personal Loan Online</h4>
              ) : (
                <h4>Looking for a Personal Loan {cityName}?</h4>
              )}
              <p>
                PayMe India’s Instant Personal Loan comes with a hassle-free
                online process and affordable interest rates
              </p>
              <strong>Get PayMe India App Now</strong>
              <div className="tabularLess p-b-30">
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
              <div className="footer-align-stripe">
                <div>
                  <img src={cibilScoreIcon} alt="icon" className="img-fluid" />
                </div>
                <div>
                  <h4>Get Your CIBIL Report Now</h4>
                </div>
                <div>
                  <Link to="/get-cibil-report" className="green-btn-stripe">
                    Check Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 ">
            <div className="rightSection ">
              {cityName === "NearMe" ? (
                <h4 className="text-center">Get Instant Loan Online</h4>
              ) : (
                <h4 className="text-center">Get Instant Loan {cityName}</h4>
              )}
              <p className="text-center">
                Avail instant loans starting from ₹ 500 up to ₹ 2 Lakhs, with
                the funds credited directly to your bank account. Experience
                100% secure process, minimal documentation and fast disbursal.
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
                    className="form-control input-field"
                    placeholder="Enter your phone number"
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

                <button
                  type="button"
                  className="btnLarge m-t-40"
                  style={{
                    display: "block",
                    cursor: "pointer",
                    color: "#fff",
                    width:"100%"

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
              </div>*/}
            </div>
          </div>
          <div className="col-md-6 col-sm-12 hideDesktop">
            <div
              className="cardImg"
              style={{ backgroundImage: `url(${images[`${cityName}`]})` }}
            >
              {cityName === "NearMe" ? (
                  <h4 className="text-center">Get Instant Loan Online</h4>
              ) : (
                  <h4 className="text-center">Get Loan In {cityName}</h4>
              )}
              <p>
                PayMe India’s Instant Personal Loan comes with a hassle-free
                online process and affordable interest rates
              </p>
              <strong>Get PayMe India App Now</strong>
              <div className="tabularLess p-b-30">
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
              <div className="footer-align-stripe">
                <div>
                  <img src={cibilScoreIcon} alt="icon" className="img-fluid" />
                </div>
                <div>
                  <h4>Get Your CIBIL Report Now</h4>
                </div>
                <div>
                  <Link to="/get-cibil-report" className="green-btn-stripe">
                    Check Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />


    </>
  );
};
export default City;
