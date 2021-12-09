import React, {useState} from "react";
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {hitAppUseCase} from '../store/modules/userDetails/actions';
import "../../src/footer.css"
import instagram from "../images/svg/instagram.svg";
import youtube from "../images/svg/youtube.svg";
import Linkedin from "../images/svg/linkedin.svg";
import Twitter from "../images/svg/twitter.svg";
import Facebook from "../images/svg/facebook.svg";
import sslLogo from "../images/svg/ssl.svg";
import whiteLogo from "../images/svg/logo.svg";
import {PopularCity} from "../component/PopularCity";
import {FooterTop} from "../component/FooterTop";
import {CibilScoreFooter} from "../component/CibilScoreFooter";
import {Dialog, DialogOverlay, DialogContent} from "@reach/dialog";
import "@reach/dialog/styles.css";
import cuate from "../images/svg/cuate.svg";
import googlePay from "../images/svg/google-play.svg";
import appStore from "../images/svg/app-store.svg";
import cibilScoreIcon from "../images/svg/cibil-score-icon.svg";


const Footer = (props) => {
    const [showDialog, setShowDialog] = React.useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);

    const [showDialogGrievance, setShowDialogGrievance] = React.useState(false);
    const openGrievance = () => setShowDialogGrievance(true);
    const closeGrievance = () => setShowDialogGrievance(false);


    return (
        <>
            <footer className='footer'>
                <FooterTop/>
                <PopularCity {...props}/>
                <div className="container">
                    <div className="row p-t-20">
                        <div className="ol col-md-2">
                            <div className='clearfix'><img className="img-fluid"
                                                           src={whiteLogo} alt="PayMe India"/></div>
                            <div className='clearfix p-t-20'>
                                <Link to={{pathname: 'https://www.facebook.com/PaymeIndiaofficial/'}} target={"_blank"}>
                                    <img className="social-img" src={Facebook} alt="PayMe India Facebook"/>
                                </Link>
                                <Link to={{pathname: 'https://twitter.com/PayMeIndia?s=08'}} target={"_blank"}>
                                    <img className="social-img" src={Twitter} alt="PayMe India Twitter"/>
                                </Link>
                                <Link to={{pathname: 'https://www.linkedin.com/company/payme-india'}} target={"_blank"}>
                                    <img className="social-img" src={Linkedin} alt="PayMe India Linkedin"/>
                                </Link>
                                <Link to={{pathname: 'https://www.instagram.com/paymeindia/'}} target={"_blank"}>
                                    <img className="social-img" src={instagram} alt="PayMe India Instagram"/>
                                </Link>
                                <Link to={{pathname: 'https://www.youtube.com/channel/UCeP0MLxaKLeVz0-2uWAtcFg'}}
                                      target={"_blank"}>
                                    <img className="social-img" src={youtube} alt="PayMe India youtube"/>
                                </Link>
                            </div>
                        </div>
                        <div className="ol col-md-2">
                            <h6 className='head6'>About Us</h6>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="/contact">Contact us</Link></li>
                                <li><Link to="/sitemap">Sitemap</Link></li>
                            </ul>
                        </div>
                        <div className="ol col-md-2">
                            <h6 className='head6'>Others</h6>
                            <ul>
                                <li><Link to="/faq">FAQs</Link></li>
                                <li><Link to="/career">Career</Link></li>
                                <li><Link to="/ourNbfcPartners">Our NBFC Partners</Link></li>
                                <li><Link to="/media-coverage">Media Coverage</Link></li>
                            </ul>
                        </div>
                        <div className="ol col-md-2">
                            <h6 className='head6'>Policies</h6>
                            <ul>
                                <li><Link to="/terms">Terms &amp; Conditions</Link></li>
                                <li><Link to="/policy">Privacy Policy</Link></li>
                                <li><Link to="/refund">Refund Policy</Link></li>
                                <li><Link to="/disclaimer">Disclaimer</Link></li>

                            </ul>
                        </div>
                        <div className="ol col-md-3">
                            <h6 className='head6 green-link'>Grievance Redressal Officer</h6>
                            <ul>
                                <li>Rohit Rai</li>
                                <li className=""><strong>Contact:</strong> 7669929906</li>
                                <li className=""><strong>Email:</strong> <Link
                                    to={{pathname: 'mailto:rohit.rai@paymeindia.in'}}
                                    target={"_blank"}>rohit.rai@paymeindia.in</Link></li>
                                <li><Link
                                    to={{pathname: 'https://openscecurityurl.s3.ap-south-1.amazonaws.com/NewAppAgreeDocs/grievance_redressal_mechanism.pdf'}}
                                    target={"_blank"}>Grievance Redressal Mechanism</Link></li>
                            </ul>
                        </div>
                        <div className="ol col-md-1">
                            <img className="middle_ssl_image" width="100"
                                 src={sslLogo} alt="PayMe India"/>
                        </div>

                    </div>

                    <div className="row p-t-20">
                        <div className="col col-md-12 text-center"><p className="p-t-20">Copyright@2021 Huey Tech Pvt.
                            Ltd.</p>
                        </div>

                    </div>
                </div>
            </footer>
            <Dialog isOpen={showDialog} onDismiss={close}>
                <button className="close-button" onClick={close}>
                    <span aria-hidden>×</span>
                </button>
                <div className="row">
                    <div className="col col-md-6 ">
                        <div className="cardImg unsplash">
                            <h4>Looking for a Help?</h4>
                            <p>Please leave a message, our team will get back shortly to you and will help you with
                                whatever possible.</p>
                            <strong>Get Payme App Now</strong>
                            <div className="tabularLess p-b-30">
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
                                    <img
                                        className="img_google"
                                        src={appStore}
                                        alt="Pay Me India"
                                    />
                                </div>
                            </div>
                            <div className="footer-align-stripe">
                                <div>
                                    <img src={cibilScoreIcon} alt="icon" className="img-fluid"/>
                                </div>
                                <div>
                                    <h4>Check your Loan eligibility now in free of cost</h4>
                                </div>
                                <div>
                                    <Link to="/get-cibil-report" className="green-btn-stripe">
                                        click here
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-6 ">
                        <div className="rightSection ">
                            <h4 className='text-center'>Leave a Message</h4>
                            <p className='text-center'>Quibusdam nobis est voluptatibus voluptatem. Deleniti sunt
                                aliquam. Totam quae eos et aut rerum maxime. Provident id non.</p>
                            <form id="form" name="form">
                                <div className="form-group ms-input-group">
                                    <label className="form-label pb-2">
                                        Full Name
                                    </label>
                                    <input
                                        name="fname"
                                        type="text"
                                        className="form-control input-field"
                                        placeholder="Enter Full Name"/>
                                </div>
                                <div className="form-group ms-input-group">
                                    <label className="form-label pb-2">
                                        Email address
                                    </label>
                                    <input
                                        name="email"
                                        type="text"
                                        className="form-control input-field"
                                        placeholder="Enter Email address"/>
                                </div>
                                <div className="form-group ms-input-group">
                                    <label className="form-label pb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        name="phone"
                                        type="number"
                                        maxLength="10"
                                        pattern="[0-9]+"
                                        className="form-control input-field"
                                        placeholder="Enter your Phone Number"/>
                                </div>
                                <div className="form-group ms-input-group">
                                    <label className="form-label pb-2">
                                        Enter Your reason
                                    </label>
                                    <textarea
                                        name="reason"
                                        rows='3'
                                        className="form-control input-field"
                                        placeholder="Type your message"/>
                                </div>
                                <Link to={{pathname: ''}} className="btnLarge m-t-40" style={{
                                    display: "block",
                                    cursor: "pointer",
                                    color: "#fff",
                                }}>

                                    Submit
                                </Link>

                            </form>

                        </div>
                    </div>
                </div>
            </Dialog>
            <Dialog isOpen={showDialogGrievance} className='dialog-box' onDismiss={closeGrievance}>
                <button className="close-button" onClick={closeGrievance}>
                    <span aria-hidden>×</span>
                </button>
                <div className="row">
                    <div className="col col-md-6 ">
                        <div className="cuate">

                            <img src={cuate} alt="icon" className="img-fluid"/>

                        </div>
                    </div>
                    <div className="col col-md-6 ">
                        <div className="rightSection ">
                            <h4 className='text-center'>Payme Grievance</h4>
                            <p className='text-center'>Quibusdam nobis est voluptatibus voluptatem. Deleniti sunt
                                aliquam. Totam quae eos et aut rerum maxime. Provident id non.</p>
                            <form id="form" name="form">
                                <div className="form-group ms-input-group">
                                    <label className="form-label pb-2">
                                        Full Name
                                    </label>
                                    <input
                                        name="fname"
                                        type="text"
                                        className="form-control input-field"
                                        placeholder="Enter Full Name"/>
                                </div>
                                <div className="form-group ms-input-group">
                                    <label className="form-label pb-2">
                                        Email address
                                    </label>
                                    <input
                                        name="email"
                                        type="text"
                                        className="form-control input-field"
                                        placeholder="Enter Email address"/>
                                </div>
                                <div className="form-group ms-input-group">
                                    <label className="form-label pb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        name="phone"
                                        type="number"
                                        maxLength="10"
                                        pattern="[0-9]+"
                                        className="form-control input-field"
                                        placeholder="Enter your Phone Number"/>
                                </div>
                                <div className="form-group ms-input-group">
                                    <label className="form-label pb-2">
                                        Enter Your reason
                                    </label>
                                    <textarea
                                        name="reason"
                                        rows='3'
                                        className="form-control input-field"
                                        placeholder="Type your message"/>
                                </div>
                                <Link to={{pathname: ''}} className="btnLarge m-t-40" style={{
                                    display: "block",
                                    cursor: "pointer",
                                    color: "#fff",
                                }}>

                                    Submit
                                </Link>

                            </form>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
const mapStateToProps = state => {
    return {}
}

const dispatchToProps = {hitAppUseCase};

export default connect(mapStateToProps, dispatchToProps)(Footer)
