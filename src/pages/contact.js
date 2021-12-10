import React, { useState, useEffect } from "react";
import { hitAppUseCase } from "../store/modules/userDetails/actions";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import Loader from "../component/Loader";
import "./ApplyNowButton/Applybtnallcomponent.css";

import Header from "./Header";
import "../../src/home.css";
import contact from "../images/svg/contact-us.svg";
import pointer from "../images/svg/map-pin.svg";
import phone from "../images/svg/phone-call.svg";
import printer from "../images/svg/printer.svg";
import timer from "../images/svg/clock.svg";
import MetaTags from "react-meta-tags";
import mailBox from "../images/svg/mail-box.svg";
import Footer from "./Footer";

const Contact = (props) => {
  let [loader, setloader] = useState(false);

  return (
    <>
      <Header {...props} />
      <MetaTags>
        <title>Contact Us - PayMeIndia</title>
        <meta name="description" content="PayMeIndia is a direct lender providing short terms and instant personal
              loans to the salaries employees at low interest rates. We offer advance salary loans, instant
        flexi loans, quick short term loans online. Contact us now via mail at support@paymeindia.in
        or on call at +91-1206748963." />
        <meta name="keyword" content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online" />
        <meta property="og:title" content="Contact Us - PayMeIndia" />
      </MetaTags>
      <div className='content'>
        <div className="container p-b-30">
          <div className="col col-md-12 reg-second-heading">
            <h1 className='heading1 blue-color'>Contact Info</h1>
            <span className="reg-second-subheading">
              We are just a whisper away
            </span>
          </div>
          <div className="row align-items-center p-b-30 p-t-30">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center main-img p-t-20">
              <img alt="About us" src={contact} />
            </div>
            <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12 "></div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 p-t-20">
            <div className="contactInfo white-color">
              <h5>Reach us out for any queries/concerns</h5>
              <div className="row p-t-20">
                <div className="col-md-12 col-sm-12 col-xd-12 ">
                  <div className="icon-left">
                    <img
                      src={pointer}
                      alt="PayMe India"
                      className="contact-payme"
                    />
                  </div>
                  <p className="icon-left-content">
                    5th Floor, Devasthali Corporate Tower, A- 42/5, Vishwakarma
                    Rd, Block A, Industrial Area, Sector 62, Noida, Uttar
                    Pradesh 201309
                  </p>
                </div>
              </div>
              <div className="row p-t-20">
                <div className="col-md-12 col-sm-12 col-xd-12">
                  <div className="icon-left">
                    <img
                      src={phone}
                      alt="PayMe India"
                      className="contact-payme"
                    />
                  </div>
                  <p className="icon-left-content">Tel 0120-690 5690</p>
                </div>
              </div>
              <div className="row p-t-20">
                <div className="col-md-12 col-sm-12 col-xd-12">
                  <div className="icon-left">
                    <img
                      src={printer}
                      alt="PayMe India"
                      className="contact-payme"
                    />
                  </div>
                  <p className="icon-left-content">Fax 120-428-0000</p>
                </div>
              </div>
              <div className="row p-t-20">
                <div className="col-md-12 col-sm-12 col-xd-12">
                  <div className="icon-left">
                    <img
                      src={timer}
                      alt="PayMe India"
                      className="contact-payme"
                    />
                  </div>
                  <p className="icon-left-content">
                    Working Hrs.: 10.00AM - 7.00PM (Monday – Friday)
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="contactBox p-t-80">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-9 text-center p-t-30 p-b-30 d-flex contactLine">
                <div className='mailPic'>
                  <img className="img-fluid" src={mailBox} alt="Mail"/>
                </div>
                <div className='contact'>
                  <h4 className="heading4">Contact Us</h4>
                  <p>Please contact us at<br/>
                    <a href="mailto: admin@paymeindia.in" target='_blank'>admin@paymeindia.in</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const dispatchToProps = { hitAppUseCase };

export default connect(mapStateToProps, dispatchToProps)(Contact);
