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
            <MetaTags>
                <title>Apply Instant Personal Loan Online | Quick Loan Approval – PayMe India</title>
                <meta name="description" content="Apply for a best & instant personal loan online at PayMe India. We offer quick and instant loan approval to those who are in need of emergency loan. Apply now!"/>
                <meta name="keyword"
                      content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
                <meta property="og:title" content="Apply Instant Personal Loan Online | Quick Loan Approval – PayMe India"/>
            </MetaTags>
            <Header {...props} />
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
