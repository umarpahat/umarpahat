import React, {useState, useEffect} from "react";
import {hitAppUseCase} from '../store/modules/userDetails/actions';
import {connect} from 'react-redux'
import {Container} from "react-bootstrap";
import Loader from '../component/Loader'
import "./ApplyNowButton/Applybtnallcomponent.css";
import Footer from "./Footer";
import Header from "./Header";
import '../../src/home.css';
import {Link} from "react-router-dom";
import $ from "jquery";
import logo from "../images/logo.png";
import vision from "../images/vision.png";
import team from "../images/team.png";
import thumbnail from "../images/thumbup.png";
import heart from "../images/heart.png";
import people from "../images/people.png";
import about from "../images/about-us.png";


const Policy = (props) => {

    let [loader, setloader] = useState(false);


    return (
        <>

            {/* <Header />  */}

            <div className="sticky-top">
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-auto me-auto">
                                <a href="/"> <img className="home_logo img-fluid" src={logo} alt="Pay Me India"/> </a>
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
                    <div className="row align-items-center p-t-40 p-b-30">
                        <div className="col-lg-12  col-md-12  col-sm-12 col-xs-12 textAlign paragraphText">
                            <h5 className="heading5 p-t-30">DATA Protection Notice</h5>
                            <p>Details of your name, e-mail address and any other personal information about you which you include in response to parts of this website comprise "personal data" for the purposes of the Data Protection Act 1998. We therefore require you to give you the following information.</p>
                            <p>We will not pass your details on to any third party.</p>
                            <p>If you ask to be included on the list to receive any of our newsletters, we will use this personal data to send them to you each quarter.</p>
                            <p>We will not pass your details on to any third party and you may request to be removed from our lists at any time by e-mailing or writing to us and stating which lists and /or newsletters you wish to be removed from.</p>
                            <p>By providing us with your mailing details on the appropriate page, you are deemed to have consented to these forms of processing.</p>
                            <p>Under the Data Protection Act you have the right to access your personal data held by us and to correct any inaccuracies in that information.</p>

                            <h5 className="heading5 p-t-20">Disclaimer of Liability</h5>
                            <p>The contents of these pages and content reproduction is prohibited other than in accordance with the following full copyright notice and limited reproduction permissions.</p>
                            <p>These pages and any e-zines which we may send you from time to time contain general information only and do not constitute advice on any specific legal matter.</p>
                            <p>If you require advice on any specific legal problem or matter please contact one of our lawyers listed.</p>
                            <p>PayMeIndia assumes no responsibility for information contained on this site and disclaims all liability in respect of such information.</p>
                            <p>Copyright© 2021 PayMeIndia.in</p>
                            <p>PayMeIndia has no control over, and will accept no responsibility or liability in respect of, material on any web site that is not under the control of PayMeIndia.</p>
                            <p>The inclusion of links to Third Party Web Sites does not imply any endorsement of the material on them or any association with their operators. PayMeIndia is not responsible for the privacy or data protection practices of third party websites.</p>
                            <p>By following a link from this website to a third party website you may be supplying data directly to a third party.</p>

                            <h5 className="heading5 p-t-20">Copyright and Limited Reproduction Permissions</h5>
                            <p>Licence to copy for personal use</p>
                            <p>You may print or download to a local hard disk extracts from these pages for your personal use only.</p>
                            <p>Licence to recopy for limited purposes.</p>
                            <p>You may recopy the material to individual third parties for their personal information only, but only if:</p>
                            <p>you acknowledge PayMeindia web pages as the source of the material. You must include such acknowledgement and Batchelors Solicitors web address ( http://www.paymeindia.in) in the copy of the material; and</p>
                            <p>you inform the third party that these conditions apply to him or her and that he or she must comply with them. This licence to recopy does not permit incorporation of the material or any part of it in any other work or publication, whether in hard copy or electronic or any other form. In particular (but without limitation) no part of the PayMeindia web pages may be distributed or copied for any commercial purpose.</p>
                            <p>No part of PayMeindia web pages may be reproduced on or transmitted to or stored in any other web site or other form of electronic retrieval system.</p>

                            <h5 className="heading5 p-t-20">Downloads and e-mail</h5>
                            <p>This site allows for downloading of files. We do not accept liability for any loss or damage which may result from the downloading or e mailing of any of these files.</p>
                            <p>Email is not secure and can be intercepted, corrupted or amended.</p>

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

export default connect(mapStateToProps, dispatchToProps)(Policy)
