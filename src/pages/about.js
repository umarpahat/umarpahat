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


const About = (props) => {

    let [loader, setloader] = useState(false);


    return (
        <>

            {/* <Header />  */}

            <div class="sticky-top">
                <header className="header">
                    <div class="container">
                        <div class="row">
                            <div class="col-auto me-auto">
                                <a href="/"> <img className="home_logo" src={logo} alt="Pay Me India"/> </a>
                            </div>
                            <div class="col-auto p-t-10">
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
                        <h4>How we are</h4>
                        <span className="reg-second-subheading">PayMeIndia is an innovative FinTech organization</span>
                    </div>
                    <div className="row align-items-center p-b-30">
                        <div className="col col-md-6 text-center main-img"><img width='200' alt="About us"
                                                                                src="https://www.paymeindia.in/assets/images/About-us/6.webp"/>
                        </div>
                        <div className="col col-md-6">
                            <h3 className="heading3">About Us</h3>
                            <p> PayMeIndia is an innovative FinTech organization that offers advance salary
                                loans, instant payday loans, short term cash loans to the salaried corporate
                                employees at lowest interest rates. These loans are designed to meet all
                                your short term financial needs such as medical emergency or any other
                                personal needs.</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="services">
                <div className="container p-b-30 p-t-40">
                    <div className="row align-items-center pb-3">
                        <div className="col col-md-6">
                            <h3 className="heading3">Our Mission and Vision</h3>
                            <p> Payme India prefers to be prominent financial solution provider across the segment by
                                offering ground-breaking products. We visualize growth in leaps while being present in
                                every aspect of your life with our best in class services.</p>

                        </div>
                        <div className="col col-md-6 text-center main-img"><img alt="CIBIL"
                                                                                src="https://www.paymeindia.in/assets/images/About-us/7.webp"/>
                        </div>

                    </div>
                </div>
            </div>
            <div className="services p-t-40 text-center">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-8">
                            <h3 className="heading3">Our Promise</h3>
                            <p>
                                At PayMe we are passionate to win trust of our customers and make our organization
                                reliable for
                                any
                                of their financial need. We have designed this new concept of lending to help them
                                manage their
                                financial challenges.
                            </p>
                        </div>
                    </div>
                    <div className="row p-t-40 p-b-30">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4 text-center">
                                        <img src="https://www.paymeindia.in/assets/images/About-us/12.png"
                                             alt="paymeindia"/>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-8">
                                        <h3>Will never say no</h3>
                                        <p> Fast hassle free instant loan disbursal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4 text-center">
                                        <img src="https://www.paymeindia.in/assets/images/About-us/14.png"
                                             alt="paymeindia"/>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-8">
                                        <h3>Will always trust </h3>
                                        <p>Reliable and secured lending process</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <div className="box">
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4 text-center">
                                        <img src="https://www.paymeindia.in/assets/images/About-us/13.png"
                                             alt="paymeindia"/>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-8">
                                        <h3>Will stand by you</h3>
                                        <p>We are here to assist you, Always!</p>
                                    </div>
                                </div>
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
                            <p> Team PayMe India is a set of customer oriented people who find their passion in helping
                                out users to get over their financial crunches. Team strives to provide the best
                                experience to our customers with their loan disbursal process.</p>

                        </div>
                    </div>
                    <div className="row p-t-40 text-center">
                        <div className="col col-md-3">
                            <div className="card">
                                <img src="https://www.paymeindia.in/assets/images/te/MAHESH-SHUKLA1.png"
                                     alt="paymeteam"/>
                                <div className="over-box">
                                    <h2>Mahesh Shukla</h2>
                                    <p className="title">Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-3">
                            <div className="card">
                                <img src="https://www.paymeindia.in/assets/images/te/VISHAL-SINGH1.png"
                                     alt="payme team"/>
                                <div className="over-box">
                                    <h2>Vishal Singh</h2>
                                    <p className="title">Operations Team</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-3">
                            <div className="card">
                                <img src="https://www.paymeindia.in/assets/images/te/Vishal-Gupta1.png"
                                     alt="payme team"/>
                                <div className="over-box">
                                    <h2>Vishal Gupta</h2>
                                    <p className="title">Technical Lead</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-3">
                            <div className="card">
                                <img src="https://www.paymeindia.in/assets/images/te/Sumit-nagar1.png"
                                     alt="payme team"/>
                                <div className="over-box">
                                    <h2>Sumit Nagar</h2>
                                    <p className="title">Operations Team</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div><div className="services">
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

export default connect(mapStateToProps, dispatchToProps)(About)
