import React, { useState, useEffect } from "react";
import { hitAppUseCase } from "../store/modules/userDetails/actions";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import Loader from "../component/Loader";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Footer from "./Footer";
import Header from "./Header";
import "../../src/home.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import logo from "../images/logo.png";
import vision from "../images/vision.png";
import team from "../images/team.png";
import thumbnail from "../images/thumbup.png";
import heart from "../images/heart.png";
import people from "../images/people.png";
import about from "../images/about-us.png";

const About = (props) => {
  let [loader, setloader] = useState(false);

  return (
    <>
      <Header {...props} />

      <div className="services">
        <div className="container">
          <div className="col col-md-12 reg-second-heading">
            <h4>How we are</h4>
            <span className="reg-second-subheading">
              PayMeIndia is an innovative FinTech organization
            </span>
          </div>
          <div className="row align-items-center p-b-30">
            <div className="col-lg-6 col-md-6 col-sm-8 col-xs-8 text-center main-img">
              <img
                className="img-fluid"
                width="200"
                alt="About us"
                src={about}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 textAlign">
              <h3 className="heading3">About Us</h3>
              <p>
                {" "}
                PayMeIndia is an innovative FinTech organization that offers
                advance salary loans, instant payday loans, short term cash
                loans to the salaried corporate employees at lowest interest
                rates. These loans are designed to meet all your short term
                financial needs such as medical emergency or any other personal
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="container p-b-30 p-t-40">
          <div className="row align-items-center pb-3">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 textAlign">
              <h3 className="heading3">Our Mission and Vision</h3>
              <p>
                {" "}
                Payme India prefers to be prominent financial solution provider
                across the segment by offering ground-breaking products. We
                visualize growth in leaps while being present in every aspect of
                your life with our best in class services.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 imgLarge textAlign">
              <img className="img-fluid" alt="CIBIL" src={vision} />
            </div>
          </div>
        </div>
      </div>
      <div className="services p-t-40 ">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-8 text-center">
              <h3 className="heading3">Our Promise</h3>
              <p>
                At PayMe we are passionate to win trust of our customers and
                make our organization reliable for any of their financial need.
                We have designed this new concept of lending to help them manage
                their financial challenges.
              </p>
            </div>
          </div>
          <div className="row p-t-40 p-b-30">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="box justify-content-md-center">
                <div className="icon-left">
                  <img className="img-fluid" src={thumbnail} alt="paymeindia" />
                </div>
                <div className="icon-left-content">
                  <h3>Will never say no</h3>
                  <p> Fast hassle free instant loan disbursal</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="box justify-content-md-center">
                <div className="icon-left">
                  <img className="img-fluid" src={heart} alt="paymeindia" />
                </div>
                <h3>Will always trust </h3>
                <p>Reliable and secured lending process</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="box justify-content-md-center">
                <div className="icon-left">
                  <img className="img-fluid" src={people} alt="paymeindia" />
                </div>
                <h3>Will stand by you</h3>
                <p>We are here to assist you, Always!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-md-8 text-center p-t-40">
              <h3 className="heading3">Our Team</h3>
              <p>
                {" "}
                Team PayMe India is a set of customer oriented people who find
                their passion in helping out users to get over their financial
                crunches. Team strives to provide the best experience to our
                customers with their loan disbursal process.
              </p>
            </div>
          </div>
          <div className="row p-t-40 text-center p-b-30">
            <div className="col-lg-12 text-center">
              <img class="img-fluid" src={team} alt="Team" />
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
                <a href="mailto: admin@paymeindia.in">admin@paymeindia.in</a>
              </p>
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

export default connect(mapStateToProps, dispatchToProps)(About);
