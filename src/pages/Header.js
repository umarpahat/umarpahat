import React, { useState } from "react";
import { hitAppUseCase } from "../store/modules/userDetails/actions";
import { connect } from "react-redux";
import "../header.css";
import logo from "../images/svg/payme-logo.svg";
import appStore from "../images/svg/app-store.svg";
import googlePay from "../images/svg/google-play.svg";
import { Link } from "react-router-dom";




const Header = (props) => {
  console.log("props", props);
  console.log("active", props.active);

  return (
    <>
      <div className="sticky-top">
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-2 p-t-10">
                <Link to="/">
                  <img className="home_logo" src={logo} alt="Pay Me India" />
                </Link>
              </div>
              <div className="col-md-10 p-t-13 p-r-80">
                <ul className="navigationLink">
                  <li>
                    <Link className="button active" to="/apply-loan">
                      Apply Loan
                    </Link>
                  </li>
                  {/* <li>

                                        <Link className="button" to="/login">
                                            Login
                                        </Link>
                                    </li>*/}
                  <li>
                    {props.active === "payrent" ? (
                      <Link
                        className="button"
                        style={{ color: "#02C650" }}
                        to="/pay-rent-details"
                      >
                        Pay Rent
                      </Link>
                    ) : (
                      <Link className="button" to="/pay-rent-details">
                        Pay Rent
                      </Link>
                    )}
                  </li>
                  <li>
                    {props.active === "offer" ? (
                      <Link
                        className="button"
                        style={{ color: "#02C650" }}
                        to="/offerings"
                      >
                        Offerings
                      </Link>
                    ) : (
                      <Link className="button" to="/offerings">
                        Offerings
                      </Link>
                    )}
                  </li>
                  <li>
                    {props.active === "home" ? (
                      <Link className="button" style={{ color: "#02C650" }} to="/">
                        Home
                      </Link>
                    ) : (
                      <Link className="button" to="/">
                        Home
                      </Link>
                    )}
                  </li>
                </ul>
                <nav role="navigation">
                  <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span> <span></span> <span></span>
                    <ul id="menu">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/faq">FAQs</Link>
                      </li>
                      <li>
                        <Link to="/ourNbfcPartners">Our NBFC Partners</Link>
                      </li>
                      <li>
                        <Link to="/career">Career</Link>
                      </li>
                      <li>
                        <Link to="/media-coverage">Media Coverage</Link>
                      </li>
                      <li>
                        <Link to="/social-initiative">Social Initiative</Link>
                      </li>
                      <li className="border-top">
                        <h3>Get Our App on</h3>
                        <div className="tabularLess">
                          <div>
                            <a
                              href="https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia"
                              target="_blank"
                            >
                              <img
                                className="img_google"
                                src={googlePay}
                                alt="Pay Me India"
                              />
                            </a>
                          </div>
                          <div>
                            <img
                              className="img_google"
                              src={appStore}
                              alt="Pay Me India"
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const dispatchToProps = { hitAppUseCase };
export default connect(mapStateToProps, dispatchToProps)(Header);
