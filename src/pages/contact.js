import React, { useState, useEffect } from "react";
import { hitAppUseCase } from "../store/modules/userDetails/actions";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import Loader from "../component/Loader";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Footer from "./Footer";
import Header from "./Header";
import "../../src/home.css";
import contact from "../images/contact.png";
import appIcon from "../images/app-icon.png";
import loginImg from "../images/login.png";
import assementImg from "../images/assement.png";
import aprovedImg from "../images/aproved.png";
import serviceImg from "../images/services.png";
import advisoryImg from "../images/advisory.png";
import shortImg from "../images/short.png";
import corporateImg from "../images/corporate.png";
import userIcon from "../images/user-icon.png";
import register from "../images/register.png";
import uploadImg from "../images/upload-doc.png";
import eligibilityImg from "../images/eligibility.png";
import promptImg from "../images/prompt.png";
import instantFund from "../images/instant-fund.png";
import easyRepay from "../images/easy-repay.png";
import CibilImg from "../images/cibil.png";
// import corporateImg from "../images/corporate-loan.svg";
//  import InstantCash from "../images/instant-cash.svg"
import { Link } from "react-router-dom";
import $ from "jquery";
import logo from "../images/logo.png";
import pointer from "../images/pointer.png";
import phone from "../images/phone.png";
import printer from "../images/printer.png";
import timer from "../images/timer.png";
import MetaTags from "react-meta-tags";

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
      <div className="services">
        <div className="container">
          <div className="col col-md-12 reg-second-heading">
            <h4>Contact Info</h4>
            <span className="reg-second-subheading">
              We are just a whisper away
            </span>
          </div>
          <div className="row align-items-center p-b-30">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center main-img">
              <img width="300" alt="About us" src={contact} />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h5>Reach us out for any queries/concerns</h5>
              <div className="row p-t-20">
                <div className="col-md-10 col-sm-8 col-xd-8 ">
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
                <div className="col-md-10 col-sm-8 col-xd-8 ">
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
                <div className="col-md-10 col-sm-8 col-xd-8 ">
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
                <div className="col-md-10 col-sm-10">
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

      <div className="services">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-md-8 text-center p-t-30 p-b-30">
              <h4 className="heading4">Contact Us</h4>
              <p>
                Please contact us at{" "}
                <a href="mailto: admin@paymeindia.in" target='_blank'>admin@paymeindia.in</a>
              </p>
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
