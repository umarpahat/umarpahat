import React, {useState, useEffect} from "react";
import {hitAppUseCase} from "../store/modules/userDetails/actions";
import {connect} from "react-redux";
import {Container} from "react-bootstrap";
import Loader from "../component/Loader";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Footer from "./Footer";
import Header from "./Header";
import "../../src/home.css";
import {Link} from "react-router-dom";
import $ from "jquery";
import logo from "../images/logo.png";
import vision from "../images/vision.png";
import team from "../images/team.jpg";
import apply from "../images/advisory.png";
import thumbnail from "../images/aproved.png";
import heart from "../images/corporate.png";
import people from "../images/instant-cash.png";
import howWeWork from "../images/dashboard.png";

const HowWeWork = (props) => {
    let [loader, setloader] = useState(false);

    return (
        <>
            <Header {...props} />
            <div className='content'>
                <div className="services">
                    <div className="container">
                        <div className="col col-md-12 reg-second-heading">
                            <h4>How it works?</h4>
                        </div>
                        <div className="row align-items-center p-b-30">
                            <div className="col-lg-6 col-md-6 col-sm-8 col-xs-8 text-center main-img">
                                <img
                                    className="img-fluid"
                                    width="200"
                                    alt="How We Work"
                                    src={howWeWork}
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 textAlign">
                                <h4>Apply for loan</h4>
                                <ul className='listing p-t-20'>
                                <li>
                                    <strong>Registration & login: </strong>
                                    Do easy registration with your email id & mobile number to get instant approval of your loan amount.
                                </li> <li>
                                <strong> Swiftly upload your document: </strong>
                                    Simply, upload your document via app/web for credit assessment and instant loan disbursement.
                            </li> <li>
                                <strong>Check eligibility:  </strong>
                                    Easily check eligibility by uploading the documents. Once it is verified you will get to know the loan amount you are eligible for.
                            </li> <li>
                                <strong>Loan Application: </strong>
                                    Once you get your credit limit, Apply the loan of desired about within minutes.
                            </li> <li>
                                <strong>Instant Disbursal: </strong>
                                    You are done! Get an instant disbursal directly in your bank account.
                            </li> <li>
                                <strong>Easy Repayment: </strong>
                                    PayMe India endows you with easy repayment by offering different payment modes.
                            </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services">
                    <div className="container p-b-30 p-t-40">
                        <div className="row align-items-center pb-3">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 textAlign">
                                <h3 className="heading3">Easy Steps to Follow</h3>
                                <p>
                                    Your urgent cash needs will be funded by following easy steps while registering through our application.
                                </p>
                            </div>
                        </div>
                        <div className="row p-t-40 p-b-30">
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="box justify-content-md-center">
                                    <div className="icon-left">
                                        <img className="img-fluid" src={apply} alt="PayMe India"/>
                                    </div>
                                    <div className="icon-left-content">
                                        <h3>Apply</h3>
                                        <p>online now</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="box justify-content-md-center">
                                    <div className="icon-left">
                                        <img className="img-fluid" src={thumbnail} alt="PayMe India"/>
                                    </div>
                                    <div className="icon-left-content">
                                        <h3>Approved</h3>
                                        <p>instantly</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="box justify-content-md-center">
                                    <div className="icon-left">
                                        <img className="img-fluid" src={heart} alt="PayMe India"/>
                                    </div>
                                    <h3>Funded</h3>
                                    <p>today or overnight</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="box justify-content-md-center">
                                    <div className="icon-left">
                                        <img className="img-fluid" src={people} alt="PayMe India"/>
                                    </div>
                                    <h3>Repay</h3>
                                    <p>on next pay period</p>
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

const dispatchToProps = {hitAppUseCase};

export default connect(mapStateToProps, dispatchToProps)(HowWeWork);
