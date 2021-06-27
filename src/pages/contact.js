import React, {useState, useEffect} from "react";
import {hitAppUseCase} from '../store/modules/userDetails/actions';
import {connect} from 'react-redux'
import {Container} from "react-bootstrap";
import Loader from '../component/Loader'
import "./ApplyNowButton/Applybtnallcomponent.css";
import Footer from "./Footer";
import Header from "./Header";
import '../../src/home.css';
import saltlogo from "../images/salt-logo.png";
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
import {Link} from "react-router-dom";
import $ from "jquery";
import logo from "../images/logo.png";


const Contact = (props) => {

    let [loader, setloader] = useState(false);


    return (
        <>

            {/* <Header />  */}

            <div className="sticky-top">
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-auto me-auto">
                                <a href="/"> <img className="home_logo" src={logo} alt="Pay Me India"/> </a>
                            </div>
                            <div className="col-auto p-t-10">
                                <Link onClick={() => {
                                    props.hitAppUseCase({useCase: 'apply-loan'})
                                    props.history.push({pathname: '/apply-loan'})
                                }}>

                                    <a href="#" className="button">Apply Loan</a>
                                </Link>
                                <Link onClick={() => {
                                    props.hitAppUseCase({useCase: 'pay-rent'})
                                    props.history.push({pathname: '/pay-rent'})
                                }}>
                                    <a href="#" className="button">Pay Rent</a>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <nav role='navigation'>
                        <div id="menuToggle">
                            <input type="checkbox"/>
                            <span></span> <span></span> <span></span>
                            <ul id="menu">
                                <li><a href="/">Home</a></li>
                                <li><a href="#media">Media</a></li>
                                <li><a href="#about-us">About us</a></li>
                                <li><a href="#corporate">Corporate</a></li>
                                <li><a href="#how-we-work">How we work</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#contact-us">Contact us</a></li>
                                <li><a href="#join-us">Join us</a></li>
                                <li><a href="#nbfc">Our NBFC Partners</a></li>
                                <li><a href="#advance-salary-loan">Advance Salary Loan</a></li>
                                <li><a href="#loans-for-low-salary">Loan For Low Salary</a></li>
                                <li><a href="#short-term-loans">Short Term Cash Loans</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>

            <div className="services">
                <div className="container">
                    <div className="col col-md-12 reg-second-heading">
                        <h4>Contact Info</h4>
                        <span className="reg-second-subheading">We are just a whisper away</span>
                    </div>
                    <div className="row align-items-center p-b-30">
                        <div className="col col-md-6 text-center main-img"><img width='300' alt="About us"
                                                                                src="https://www.paymeindia.in/assets/images/Contact-us/1.webp"/>
                        </div>
                        <div className="col col-md-6">
                            <h6 >Reach us out for any queries/concerns</h6>
                            <div className="col col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="row p-t-20">
                                    <div className="col col-md-2 ">
                                        <img src="https://www.paymeindia.in/assets/images/Contact-us/2.png"
                                             alt="paymeindia" className="contact-payme"/>
                                    </div>
                                    <div className="col col-md-10 ">
                                        <p>5th Floor, Devasthali Corporate Tower, A- 42/5, Vishwakarma Rd, Block A,
                                            Industrial Area, Sector 62, Noida, Uttar Pradesh 201309</p>
                                    </div>
                                </div>
                                <div className="row p-t-20">
                                    <div className="col col-md-2 ">
                                        <img src="https://www.paymeindia.in/assets/images/Contact-us/3.png"
                                             alt="paymeindia" className="contact-payme"/>
                                    </div>
                                    <div className="col col-md-10 ">
                                        <p>Tel 0120-690 5690</p>
                                    </div>
                                </div>
                                <div className="row p-t-20">
                                    <div className="col col-md-2 ">
                                        <img src="https://www.paymeindia.in/assets/images/Contact-us/4.png"
                                             alt="paymeindia" className="contact-payme"/>
                                    </div>
                                    <div className="col col-md-10 ">
                                        <p>Fax 120-428-0000</p>
                                    </div>
                                </div>
                                <div className="row p-t-20">
                                    <div className="col col-md-2 ">
                                        <img
                                            src="https://www.paymeindia.in/assets/images/Contact-us/passage-of-time.png"
                                            alt="paymeindia" className="contact-payme"/>
                                    </div>
                                    <div className="col col-md-10 ">
                                        <p>Working Hrs.: 10.00AM - 7.00PM (Monday – Friday)</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services">
                <div className="container p-b-30 p-t-40">
                    <div className="row align-items-center pb-3">
                        <div className="col col-md-12 text-center main-img"><img
                            src="https://www.paymeindia.in/assets/images/Contact-us/escalation.webp"/>
                        </div>

                    </div>
                </div>
            </div>
            <div className="services">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-md-8 text-center p-t-30 p-b-30">
                            <h4 className="heading4">Contact Us</h4>
                            <p>Please contact us at <a href="mailto: admin@paymeindia.in">admin@paymeindia.in</a></p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
};
const mapStateToProps = state => {
    return {}
}


const dispatchToProps = {hitAppUseCase};

export default connect(mapStateToProps, dispatchToProps)(Contact)
