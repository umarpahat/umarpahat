import React, { useState, useEffect } from "react";
import { hitAppUseCase } from "../store/modules/userDetails/actions";
import { connect } from "react-redux";
import { Accordion, Card, Container } from "react-bootstrap";
import Header from "./Header";
import "../../src/home.css";
import MetaTags from "react-meta-tags";
import { api } from "../services/api";
import Loader from "../component/Loader";
import Confirmotpmobile from "./ApplyNowButton/Confirmotpmobile";

import Cookies from "universal-cookie";
const cookies = new Cookies();

import { Link } from "react-router-dom";
import {API_ENDPOINT, S3_IMAGES_URL} from "../constant";
import Footer from "./Footer";

const PayRent = (props) => {
  const token = cookies.get('token')
  let [loader, setloader] = useState(false);
  let [number, setnumber] = useState(null);
  let [error, seterror] = useState(null);
  let [newUser, setnewUser] = useState(false);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
 
    if (token) {
      props.history.push({
        pathname: "/payrent-other-details",
      });
    }

    const url = `${API_ENDPOINT}/api/faq_list/`;
    fetch(url)
      .then((res) => res.json())
      .then((res) =>
        setFaqs([
          ...res.data.General,
          ...res.data.Eligibility,
          ...res.data.Repayment,
        ])
      );
    // .then(res => //console.log('umar', [...res.data.General,...res.data.Eligibility,...res.data.Repayment] ))
  }, []);

  const handleSubmit = (event) => {
    // window.fbq('track', 'Lead');
    cookies.set("userCase", "pay-rent");
    event.preventDefault();
    /^[6-9]\d{9}$/.test(number)
      ? verifyPhone()
      : seterror("Please input valid 10 digit mobile number");
  };

  const verifyPhone = () => {
    setloader(true);

    api
      .post(
        `api/authentication/phone_no_verify/`,
        { phone_number: Number(number) },
        {}
      )
      .then((response) => {
        if (response.status === 200 && !response.data.phone_number_verified) {
          setloader(false);
          setnewUser(true);
        } else if (
          response.status === 200 &&
          response.data.phone_number_verified
        ) {
          cookies.set("phoneNumber", number),
            props.history.push({
              pathname: "/login-with-mob-mpin",
            });
        } else {
          //console.log(response.status);
        }
        return response;
      })
      .catch((error) => {
        if (error.response.status === 401) {
          cookies.remove("token", { path: "/" });
        }
        //console.log(error);
        setloader(false);
      });
  };

  return (
    <>
      <MetaTags>
        <title>Loan for Rent | Pay rent online with credit card - PayMe India</title>
        <meta name="description" content="PayMe India offers quick pay rent loans at the lowest interest rates with 100% transparency, no hidden costs, and no collaterals."/>
        <meta
            name="keyword"
            content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"
        />
        <meta
            property="og:title"
            content="Loan for Rent | Pay rent online with credit card - PayMe India"
        />
      </MetaTags>
      <Header {...props} active="payrent" />

      <div className="info">
        Make sure the mobile number is associated in this specific device, we
        will send and verify the new number with reverse OTP.
      </div>

      {loader ? (
        <div className="loader">
          {" "}
          <Loader color={"#33658a"} />{" "}
        </div>
      ) : newUser ? (
        <Confirmotpmobile
          {...props}
          phone_number={Number(number)}
          resendOtp={verifyPhone}
        />
      ) : (
        <div>
          <div className="content">
            <div className="banner">
              <div className="container">
                <div className="row align-items-center">
                  
                  <div className="col-sm-12 col-md-6">
                    <h1 className="heading1 p-b-30 p-t-80">
                      Pay rent with your credit card and get amazing Offers
                    </h1>

                    <div className="col-sm-12 col-md-5 m-t-40 d-md-none">
                    <div className="fromFrame">
                      <div className="advertisePay" style={{ marginTop: 0 }}>
                        <div>
                          <img
                            src={S3_IMAGES_URL+'/svg/green-star.svg'}
                            alt="Totam corrupti"
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <strong>
                          Get exiting rewards by paying your rent online
                          </strong>
                        </div>
                      </div>
                      <form id="form" name="form">
                        <div className="form-group ms-input-group">
                          <label className="form-label pb-2">
                            Phone Number
                          </label>
                          <input
                            name="phone"
                            type="number"
                            maxLength="10"
                            pattern="[0-9]+"
                            className="form-control input-field"
                            placeholder="Enter Phone"
                            value={number || ""}
                            onChange={(event) => {
                              setnumber(event.target.value.slice(0, 10));
                              if (
                                event.target.value.length === 0 ||
                                event.target.value.length === 10
                              ) {
                                seterror("");
                              }
                            }}
                          />
                          {error ? (
                            <span style={{ color: "red" }}>{error}</span>
                          ) : null}
                        </div>
                        <Link to={{pathname:''}}  onClick={handleSubmit} className="btnLarge m-t-40"  style={{
                          display: "block",
                          cursor: "pointer",
                          color: "#fff",
                        }}>
                          Get Started
                        </Link>
                      </form>
                    </div>
                  </div>
                    <div className="advertisePay ">
                      <div>
                        <img
                          src={S3_IMAGES_URL+'/svg/creditcard.svg'}
                          alt="Get instant"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <h4 style={{ fontSize: "20px" }}>
                          Pay Rent with Credit Card
                        </h4>
                        <span style={{ fontWeight: 450 }}>
                          Earn miles and reward points on your Visa and
                          Mastercard cards
                        </span>
                      </div>
                    </div>
                    <div className="advertisePay">
                      <div>
                        <img
                          src={S3_IMAGES_URL+'/svg/homeIcon.svg'}
                          alt="Home icon"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <h4 style={{ fontSize: "20px" }}>
                          Stress-free Timely Payement
                        </h4>
                        <span style={{ fontWeight: 450 }}>
                          Enjoy 45 days Interest-free credit period depending on
                          your card statement
                        </span>
                      </div>
                      {/* <div>
                                        <Link to='#' className='small-green-link'>Know More</Link>
                                    </div> */}
                    </div>

                    <div className="advertisePay">
                      <div>
                        <img
                          src={S3_IMAGES_URL+'/svg/reward.svg'}
                          alt="Milestone icon"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <h4 style={{ fontSize: "20px" }}>
                          Meet Spends Milestones Easily
                        </h4>
                        <span style={{ fontWeight: 450 }}>
                          Earn Reward with your credit card by reaching spending
                          milestones
                        </span>
                      </div>
                      {/* <div>
                                        <Link to='/' className='small-green-link'>Know More</Link>
                                    </div> */}
                    </div>
                    <div className="advertisePay">
                      <div>
                        <img
                            src={S3_IMAGES_URL+'/svg/secure.svg'}
                          alt="secure"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <h4 style={{ fontSize: "20px" }}>
                          100% Secure Payments
                        </h4>
                        <span style={{ fontWeight: 450 }}>
                          All your information is secured. We never store your
                          credit card details
                        </span>
                      </div>
                      {/* <div>
                                        <Link to='#' className='small-green-link'>Know More</Link>
                                    </div> */}
                    </div>
                    <br />
                    {/* <Link to='#' className='small-green-link'>View All Offers</Link> */}
                  </div>
                  <div className="col-sm-12 col-md-1 ">&nbsp;</div>
                  <div className="col-sm-12 col-md-5 m-t-40 d-none d-md-block d-lg-block">
                    <div className="fromFrame">
                      <div className="advertisePay" style={{ marginTop: 0 }}>
                        <div>
                          <img
                            src={S3_IMAGES_URL+'/svg/green-star.svg'}
                            alt="card"
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <strong>
                          Get exiting rewards by paying your rent online
                          </strong>
                        </div>
                      </div>
                      <form id="form" name="form">
                        <div className="form-group ms-input-group">
                          <label className="form-label pb-2">
                            Phone Number
                          </label>
                          <input
                            name="phone"
                            type="number"
                            maxLength="10"
                            pattern="[0-9]+"
                            className="form-control input-field"
                            placeholder="Enter Phone"
                            value={number || ""}
                            onChange={(event) => {
                              setnumber(event.target.value.slice(0, 10));
                              if (
                                event.target.value.length === 0 ||
                                event.target.value.length === 10
                              ) {
                                seterror("");
                              }
                            }}
                          />
                          {error ? (
                            <span style={{ color: "red" }}>{error}</span>
                          ) : null}
                        </div>
                        <Link to={{pathname:''}} onClick={handleSubmit}  className="btnLarge m-t-40" style={{
                          display: "block",
                          cursor: "pointer",
                          color: "#fff",
                        }}>

                          Get Started
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="heading7 text-center p-t-80">
              Frequently Asked Questions
            </h4>
            <div className="payRentSection">
              <div className="container">
                <div className="row p-b-30 p-t-30">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Accordion defaultActiveKey="0">
                      {faqs.map((item, index) => (
                        <Card>
                          <Accordion.Toggle
                            as={Card.Header}
                            eventKey={index === 0 ? "0" : index}
                          >
                            {item.question}
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey={index === 0 ? "0" : index}
                          >
                            <Card.Body>{item.answer}</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const dispatchToProps = { hitAppUseCase };

export default connect(mapStateToProps, dispatchToProps)(PayRent);
