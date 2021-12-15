import React, {useState} from "react";
import {hitAppUseCase} from "../store/modules/userDetails/actions";
import {connect} from "react-redux";
import "../header.css";
import logo from "../images/svg/payme-logo.svg";
import appStore from "../images/svg/app-store.svg";
import googlePay from "../images/svg/google-play.svg";
import {Link} from "react-router-dom";
import Cookies from "universal-cookie";
import LeaveMessage from "./LeaveMessage";
import CustomerGrievance from "./CustomerGrievance";

const cookies = new Cookies();

const Header = (props) => {
    const [showDialogGrievance, setShowDialogGrievance] = React.useState(false);
    const openGrievance = () => setShowDialogGrievance(true);
    const closeGrievance = () => setShowDialogGrievance(false);

    const [showDialog, setShowDialog] = React.useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);
    const token = cookies.get("token");
    const handlePayrent = () => {
        if (token) {
            props.history.push("/payrent-other-details");
        } else {
            props.history.push("/pay-rent-details");
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
            {showDialog ? <LeaveMessage close={close} {...props} /> : null}
            {showDialogGrievance ? (
                <CustomerGrievance closeGrievance={closeGrievance} {...props} />
            ) : null}
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
                                        <div
                                            onClick={handleApplyLoan}
                                            className="headerLink active"
                                        >
                                            Apply Loan
                                        </div>
                                    </li>

                                    <li>
                                        <a href="https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia">
                                            <div className="headerLink download">Download App</div>
                                        </a>
                                    </li>

                                    <li>
                                        {props.active === "payrent" ? (
                                            <div
                                                onClick={handlePayrent}
                                                style={{borderBottom:"2px solid #02C650"}}
                                                className="headerLink"
                                            >
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
                                            <span className="dropdown">
                        <Link
                            className="headerLink "
                            style={{borderBottom:"2px solid #02C650"}}
                            to="/offerings"
                        >
                          Our products <i className="arrow down"></i>
                        </Link>
                        <ul className="dropdown-content">
                          <li>
                          <Link to="/apply-loan">Instant loan</Link>
                          </li>

                          <li>
                            <a href='https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'>Digital gold</a>
                          </li>

                            <li>
                            <a href='https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'>Mutual funds</a>
                          </li>

                            <li>
                                 <Link to="/get-cibil-report">CIBIL score</Link>
                          </li>

                           <li>
                            <a href='https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'>SALT</a>
                          </li>


                           <li>
                                <Link to="/pay-rent">Pay Rent</Link>
                          </li>

                        </ul>
                      </span>
                                        ) : (
                                            <span className="dropdown">
                        <Link className="headerLink" to="/offerings">
                          Our products <i className="arrow down"></i>
                        </Link>
                        <ul className="dropdown-content">
                          <li>
                              <Link to="/apply-loan">Instant loan</Link>
                          </li>

                          <li>
                            <a href='https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'>Digital gold</a>
                          </li>

                            <li>
                            <a href='https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'>Mutual funds</a>
                          </li>

                            <li>
                                 <Link to="/get-cibil-report">CIBIL score</Link>
                          </li>

                           <li>
                            <a href='https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'>SALT</a>
                          </li>


                           <li>
                                <Link to="/pay-rent">Pay Rent</Link>
                          </li>

                        </ul>
                      </span>
                                        )}
                                    </li>

                                    <li>
                                        {props.active === "home" ? (
                                            <Link
                                                className="headerLink"
                                                style={{borderBottom:"2px solid #02C650"}}
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
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-6">
                                                        <ul>
                                                            <li>
                                                                {props.active === "home" ? (
                                                                    <Link style={{borderBottom:"2px solid #02C650"}} to="/">
                                                                        Home
                                                                    </Link>
                                                                ) : (
                                                                    <Link to="/">Home</Link>
                                                                )}
                                                            </li>

                                                           {/* <li>
                                                                <Link to="/blog">Blogs</Link>
                                                            </li>*/}
                                                            <li>
                                                                <Link to="/about">About us</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/media-coverage">Media Coverage</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ourNbfcPartners">
                                                                    Our NBFC Partners
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/sitemap">Sitemap</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/career">Career</Link>
                                                            </li>
                                                           {/* <li>
                                                                <Link to="/refer-and-earn">Refer & Earn</Link>
                                                            </li>*/}
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-12 col-md-6">
                                                        <ul>
                                                            <li>
                                                                <Link to="/eligbility-criteria">
                                                                    Eligbility Criteria
                                                                </Link>
                                                                <Link to={null} onClick={open}>
                                                                    Leave a message
                                                                </Link>
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
                                                                <Link to={null} onClick={openGrievance}>
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
                                                                            to={{
                                                                                pathname:
                                                                                    "https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia",
                                                                            }}
                                                                            target={"_blank"}
                                                                        >
                                                                            <img
                                                                                className="img_google"
                                                                                src={googlePay}
                                                                                alt="Pay Me India"
                                                                            />
                                                                        </Link>
                                                                    </div>
                                                                    <div>
                                                                        <Link
                                                                            to={{
                                                                                pathname:
                                                                                    "https://apps.apple.com/us/app/payme-india/id1282142711",
                                                                            }}
                                                                            target={"_blank"}
                                                                        >
                                                                            <img
                                                                                className="img_google"
                                                                                src={appStore}
                                                                                alt="Pay Me India"
                                                                            />
                                                                        </Link>
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
