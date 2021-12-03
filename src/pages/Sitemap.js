import React, {useState, } from "react";
import {hitAppUseCase} from '../store/modules/userDetails/actions';
import {connect} from 'react-redux'
import "./ApplyNowButton/Applybtnallcomponent.css";
import Header from "./Header";
import '../../src/home.css';
import {Link} from "react-router-dom";
import $ from "jquery";
import MetaTags from "react-meta-tags";
import mailBox from "../images/svg/mail-box.svg";
import Footer from "./Footer";


const Sitemap = (props) => {

    return (
        <>
            <Header {...props} />
            <MetaTags>
                <title>Sitemap - PayMeIndia</title>
                <meta name="description"
                      content=" Vist PayMeIndia Sitemap to easily navigate the website and explore new pages every day."/>
                <meta name="keyword"
                      content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
                <meta property="og:title" content="Sitemap - PayMeIndia"/>
            </MetaTags>
            <div className='content'>
                <div className="services">
                    <div className="container p-b-30">
                        <div className="col col-md-12 reg-second-heading">
                            <h1 className='heading1 blue-color'>Sitemap - PayMeIndia</h1>
                        </div>
                        <ul className='p-t-30'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/apply-loan">Apply Loan</Link></li>
                            <li><Link to="/pay-rent-details">Pay Rent</Link></li>
                            <li><Link to="/offerings">Offerings</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/faq">FAQs</Link></li>
                            <li><Link to="/ourNbfcPartners">Our NBFC Partners</Link></li>
                            <li>
                                <Link to="/career">Career</Link>
                            </li>
                            <li>
                                <Link to="/media-coverage">Media Coverage</Link>
                            </li>
                            <li>
                                <Link to="/social-initiative">Social Initiative</Link>
                            </li>
                            <li><Link to="/terms">Terms &amp; Conditions</Link></li>
                            <li><Link to="/policy">Privacy Policy</Link></li>
                            <li><Link to="/refund">Refund Policy</Link></li>
                            <li><Link to="/disclaimer">Disclaimer</Link></li>
                            <li><a target='_blank' href="https://openscecurityurl.s3.ap-south-1.amazonaws.com/NewAppAgreeDocs/grievance_redressal_mechanism.pdf">Grievance Redressal Mechanism</a></li>
                        </ul>

                    </div>
                </div>
                <div className="contactBox p-t-80">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-9 text-center p-t-30 p-b-30 d-flex contactLine">
                                <div className='mailPic'>
                                    <img className="img-fluid" src={mailBox} alt="Mail"/>
                                </div>
                                <div className='contact'>
                                    <h4 className="heading4">Contact Us</h4>
                                    <p>Please contact us at<br/>
                                        <a href="mailto: admin@paymeindia.in" target='_blank'>admin@paymeindia.in</a>
                                    </p>
                                </div>
                            </div>
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


const dispatchToProps =
    {
        hitAppUseCase
    }
;

export default connect(mapStateToProps, dispatchToProps)(Sitemap)
