import React, { useState } from "react";
import { hitAppUseCase } from "../store/modules/userDetails/actions";
import { connect } from "react-redux";
import "../header.css";
import logo from "../images/svg/payme-logo.svg";
import appStore from "../images/svg/app-store.svg";
import googlePay from "../images/svg/google-play.svg";
import { Link} from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Header = (props) => {
  const token = cookies.get("token");
  const handlePayrent = () => {
   
    if (token) {
     
      props.history.push(
        "/payrent-other-details"
      );
    } else {
     
      props.history.push(
        "/pay-rent-details"
      );
    }
  };

  const handleApplyLoan = () => {
    if (token) {
      props.history.push({
        pathname: "/step-manual",
      });
    } else {
      props.history.push({
        pathname: "/apply-loan",
      });
    }
  };

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
                    <div onClick={handleApplyLoan} className="headerLink active" >
                      Apply Loan
                    </div>
                  </li>
                  {/* <li>

                                        <Link className="headerLink" to="/login">
                                            Login
                                        </Link>
                                    </li>*/}
                  <li>
                    {props.active === "payrent" ? (
                      <div onClick={handlePayrent}  style={{ color: "#02C650" }}  className="headerLink">

                        Pay Rent
                      </div>
                    ) : (
                      <div onClick={handlePayrent} className="headerLink" >
                        Pay Rent
                     </div>
                    )}
                  </li>
                  <li>
                    {props.active === "offer" ? (
                      <Link
                        className="headerLink"
                        style={{ color: "#02C650" }}
                        to="/offerings"
                      >
                        Offerings
                      </Link>
                    ) : (
                      <Link className="headerLink" to="/offerings">
                        Offerings
                      </Link>
                    )}
                  </li>
                  <li>
                    {props.active === "home" ? (
                      <Link
                        className="headerLink"
                        style={{ color: "#02C650" }}
                        to="/"
                      >
                        Home
                      </Link>
                    ) : (
                      <Link className="headerLink" to="/">
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
                        <Link to="/apply-loan">Apply Loan</Link>
                      </li>
                      <li>
                        <Link to="/pay-rent-details">Pay Rent</Link>
                      </li>
                      <li>
                        <Link to="/offerings">Offerings</Link>
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
                            <Link to={{pathname:'https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'}} target={"_blank"}>
                              <img
                                className="img_google"
                                src={googlePay}
                                alt="Pay Me India"
                              />
                            </Link>
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
