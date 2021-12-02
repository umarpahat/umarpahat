import React, {useState} from "react";
import {hitAppUseCase} from "../store/modules/userDetails/actions";
import {connect} from "react-redux";
import "../header.css";
import logo from "../images/svg/payme-logo.svg";
import appStore from "../images/svg/app-store.svg";
import googlePay from "../images/svg/google-play.svg";
import {Link} from "react-router-dom";
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
                                    <img className="home_logo" src={logo} alt="Pay Me India"/>
                                </Link>
                            </div>
                            <div className="col-md-10 p-t-13 p-r-80">
                                <ul className="navigationLink">
                                    <li>
                                        <div onClick={handleApplyLoan} className="headerLink active">
                                            Apply Loan
                                        </div>
                                    </li>

                                    <li>
                                        <div className="headerLink download">
                                            Download App
                                        </div>
                                    </li>

                                    <li>
                                        {props.active === "payrent" ? (
                                            <div onClick={handlePayrent} style={{color: "#02C650"}}
                                                 className="headerLink">

                                                Pay Rent
                                            </div>
                                        ) : (
                                            <div onClick={handlePayrent} className="headerLink">
                                                Pay Rent
                                            </div>
                                        )}
                                    </li>

                                    <li>
                                        {props.active === "offer" ? (
                                            <span className='dropdown'>
                      <Link
                          className="headerLink "
                          style={{color: "#02C650"}}
                          to="/offerings"
                      >
                        Our products <i className="arrow down"></i></Link>
                        <ul className="dropdown-content">
                          <li><Link to="/offerings#LoanApp">Loan App</Link></li>
                         <li><Link to="/offerings#LoanApp">Gold App</Link></li>
                         <li><Link to="/offerings#LoanApp">SALT App</Link></li>
                          <li><Link to="/offerings#LoanApp">Mutual Funds</Link></li>
                          <li><Link to="/offerings#LoanApp">Get CIBIL Score Now</Link></li>
                        </ul>
                      </span>
                                        ) : (
                                            <span className='dropdown'><Link className="headerLink" to="/offerings">
                        Our products <i className="arrow down"></i></Link>
                        <ul className="dropdown-content">
                          <li><Link to="/offerings#LoanApp">Loan App</Link></li>
                          <li><Link to="/offerings#LoanApp">Gold App</Link></li>
                          <li><Link to="/offerings#LoanApp">SALT App</Link></li>
                          <li><Link to="/offerings#LoanApp">Mutual Funds</Link></li>
                          <li><Link to="/offerings#LoanApp">Get CIBIL Score Now</Link></li>
                        </ul>
                      </span>
                                        )}
                                    </li>

                                    <li>
                                        {props.active === "home" ? (
                                            <Link
                                                className="headerLink"
                                                style={{color: "#02C650"}}
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
                                        <input type="checkbox"/>
                                        <span></span> <span></span> <span></span>
                                        <div id="menu">
                                            <div className="container">
                                                <div className="row firstRow">
                                                    <div className="col-sm-12 col-md-12">
                                                        <h4>Check CIBIL Score</h4>
                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-6">
                                                        <ul>
                                                            <li>
                                                                {props.active === "home" ? (
                                                                    <Link
                                                                        style={{color: "#02C650"}}
                                                                        to="/"
                                                                    >
                                                                        Home
                                                                    </Link>
                                                                ) : (
                                                                    <Link to="/">
                                                                        Home
                                                                    </Link>
                                                                )}
                                                            </li>

                                                            <li>
                                                                <Link to="/blog">Blogs</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/about">About us</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/media-coverage">Media Coverage</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ourNbfcPartners">Our NBFC Partners</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/sitemap">Sitemap</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/career">Career</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/refer-and-earn">Refer & Earn</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-12 col-md-6">
                                                        <ul>
                                                            <li>
                                                                <Link to="/eligbility-criteria">Eligbility Criteria</Link>
                                                                <Link to="/leave-a-message">Leave a message</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="row borderTop">
                                                    <div className="col-sm-12 col-md-12">
                                                        <h5>For your Help</h5>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-6">
                                                        <ul>
                                                            <li>
                                                                <Link to="/customer-grievance">
                                                                    Customer Grievance
                                                                </Link>
                                                            </li>

                                                            <li>
                                                                <Link to="/faq">FAQ</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/terms">T&C</Link>
                                                            </li>


                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-12 col-md-6">
                                                        <ul>
                                                            <li>
                                                                <Link to="/policy">Privacy Policy</Link>
                                                                <Link to="/refund">Refund Policy</Link>
                                                                <Link to="/disclaimer">Disclaimer</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="row borderTop">
                                                    <div className="col-sm-12 col-md-12">
                                                        <h5>Get Our App on</h5>
                                                    </div>

                                                </div>
                                                <div className="row ">
                                                    <div className="col-sm-12 col-md-12">
                                                        <ul>
                                                            <li>
                                                                <div className="tabularLess">
                                                                    <div>
                                                                        <Link
                                                                            to={{pathname: 'https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'}}
                                                                            target={"_blank"}>
                                                                            <img
                                                                                className="img_google"
                                                                                src={googlePay}
                                                                                alt="Pay Me India"
                                                                            />
                                                                        </Link>
                                                                    </div>
                                                                    <div>
                                                                        <Link to={{pathname: 'https://apps.apple.com/us/app/payme-india/id1282142711'}} target={"_blank"}>
                                                                        <img
                                                                            className="img_google"
                                                                            src={appStore}
                                                                            alt="Pay Me India"
                                                                        /></Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

const dispatchToProps = {hitAppUseCase};
export default connect(mapStateToProps, dispatchToProps)(Header);
