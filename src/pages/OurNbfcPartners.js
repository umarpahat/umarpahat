import React, { useState, useEffect } from "react";
import { hitAppUseCase } from "../store/modules/userDetails/actions";
import { connect } from "react-redux";
import { Accordion, Card, Container } from "react-bootstrap";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Footer from "./Footer";
import Header from "./Header";
import "../../src/home.css";

import { Link } from "react-router-dom";
import $ from "jquery";
import arvog from "../images/arvog.jpg";
import money2me from "../images/money2me.jpg";
import paymeindia from "../images/paymeindia.png";

const OurNbfcPartners = (props) => {
  let [loader, setloader] = useState(false);

  return (
    <>
      <Header {...props} />
      <div className='content'>
      <div className="services">
        <div className="container">
          <div className="col col-md-12 reg-second-heading">
            <h4>Our NBFC Partners</h4>
          </div>
          <div className="row p-b-30">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="box-shadow">
                <img src={arvog} alt="paymeindia"/>
              </div>
              <div className="nbfc nbfcWidth"><p>Finkurve Financial Services Ltd</p></div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="box-shadow">
                <img src={money2me} alt="paymeindia"/>
              </div>
              <div className="nbfc nbfcWidth"><p>Money2me Finance Private Limited</p></div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <div className="box-shadow">
                <img src={paymeindia} alt="paymeindia"/>
              </div>
              <div className="nbfc"><p>PayMe India Financial Services</p></div>
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
      <Footer />
    </>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const dispatchToProps = { hitAppUseCase };

export default connect(mapStateToProps, dispatchToProps)(OurNbfcPartners);
