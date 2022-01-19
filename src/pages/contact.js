import React, { useState} from "react";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Header from "./Header";
import "../../src/home.css";
import MetaTags from "react-meta-tags";
import Footer from "./Footer";
import {S3_IMAGES_URL} from "../constant";

const Contact = (props) => {
  let [loader, setloader] = useState(false);

  return (
    <>
      <MetaTags>
        <title>Contact Information - PayMe India</title>
        <meta name="description" content="Get instant answers to your queries. Concern or complaints by submitting a form or email us on admin@paymeindia.in or call us on 0120-6905690 to get the earliest response from us." />
        <meta name="keyword" content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online" />
        <meta property="og:title" content="Contact Information - PayMe India" />
      </MetaTags>
      <Header {...props} />
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
              <img alt="About us" src={S3_IMAGES_URL+'/svg/contact-us.svg'} />
            </div>
            <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12 "></div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 p-t-20">
            <div className="contactInfo white-color">
              <h5>Reach us out for any queries/concerns</h5>
              <div className="row p-t-20">
                <div className="col-md-12 col-sm-12 col-xd-12 ">
                  <div className="icon-left">
                    <img
                      src={S3_IMAGES_URL+'/svg/map-pin.svg'}
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
                      src={S3_IMAGES_URL+'/svg/phone-call.svg'}
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
                      src={S3_IMAGES_URL+'/svg/printer.svg'}
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
                      src={S3_IMAGES_URL+'/svg/clock.svg'}
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

      </div>
      <Footer/>
    </>
  );
};
export default Contact;
