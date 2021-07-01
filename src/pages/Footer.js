import React, {useState} from "react";
import {hitAppUseCase} from '../store/modules/userDetails/actions';
import {connect} from 'react-redux'
import "../../src/home.css"
import Loader from '../component/Loader'
import {Link} from "react-router-dom";
import instagram from "../images/instagram.png";
import Linkedin from "../images/linkdin.png";
import Twitter from "../images/twitter.png";
import Facebook from "../images/facebook.png";
import sslLogo from "../images/ssl-logo.png";
// let[loader,setloader]=useState(false);


const Footer = (props) => {
  
    
    return (
        <div className="footer" style={{backgroundColor: "#F1F3F5"}}>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="ol col-md-4">
                            <h6>About</h6>
                        </div>
                        <div className="ol col-md-4">
                            <h6>FAQ</h6>
                        </div>
                        <div className="ol col-md-4">
                            <h6>Policies</h6>
                        </div>
                    </div>
                    <div className="row">
                        {/* <div className="ol col-md-3">
                <ul>
                    <li><Link to="#" data-toggle="modal" data-target="#slidingModal">Seo link 1</Link></li>
                    <li><Link to="#">Seo link 2</Link></li>
                    <li><Link to="#">Seo link 3</Link></li>
                    <li><Link to="#">Seo link 4</Link></li>
                    <li><Link to="#">Seo link 5</Link></li>
                    <li><Link to="#">Seo link 6</Link></li>
                </ul>
            </div>*/}
                        <div className="ol col-md-4">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                {/*<li><Link to="#media">Media</Link></li>*/}
                                <li><Link to="/about">About us</Link></li>
                                {/*<li><Link to="#how-we-work">How we work</Link></li>*/}
                                {/*<li><Link to="#blog">Blog</Link></li>*/}
                                <li><Link to="/contact">Contact us</Link></li>
                                {/*<li><Link to="#join-us">Join us</Link></li>*/}
                            </ul>

                        </div>
                        <div className="ol col-md-4">
                            <ul>
                                {/* <li><Link to="#corporate">Corporate</Link></li>
                    <li><Link to="#nbfc">Our NBFC Partners</Link></li>
                    <li><Link to="#advance-salary-loan">Advance Salary Loan</Link></li>
                    <li><Link to="#loans-for-low-salary">Loan For Low Salary</Link></li>
                    <li><Link to="#short-term-loans">Short Term Cash Loans</Link></li>*/}
                                <li><Link to="/faq">FAQ</Link></li>

                                {/* <li><Link to="#sitemap">Sitemap</Link></li> */}
                            </ul>
                        </div>
                        <div className="ol col-md-4">
                            <ul>
                                <li><Link to="/terms">Terms &amp; Conditions</Link></li>
                                <li><Link to="/policy">Privacy Policy</Link></li>
                                <li><Link to="/refund">Refund Policy</Link></li>
                                <li><Link to="/disclaimer">Disclaimer</Link></li>

                            </ul>

                        </div>
                    </div>
                    <div className="row p-t-20">
                        <div className="ol col-md-4 ">
                            {/* Modal */}
                            <div className="modal fade" id="slidingModal" tabIndex="-1" role="dialog"
                                 aria-labelledby="slidingModal" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Let us call you back</h5>
                                            <button type="button" className="close" data-dismiss="modal"
                                                    aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <form action="#" method="post">
                                            <div className="modal-body">

                                                <div className="form-group-item">
                                                    <label htmlFor="mobile" className="col-form-label">Mobile
                                                        No:</label>
                                                    <input type="text" className="form-control" id="mobile"/>
                                                </div>
                                                <div className="form-group-item">
                                                    <label htmlFor="pan" className="col-form-label">Pan No:</label>
                                                    <input type="text" className="form-control" id="pan"/>
                                                </div>

                                            </div>
                                            <div className="modal-footer">
                                                <button type="reset" className="button-gray btn">Cancel</button>
                                                <button type="submit" className="button-gray btn">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade bd-example-modal-lg" id="referModal" tabIndex="-1" role="dialog"
                                 aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <button type="button" className="close btn-position" data-dismiss="modal"
                                                aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <div className="full-height">
                                            <div className="child" id="referal-img"
                                                 style={{backgroundImage: "url(" + "https://pbs.twimg.com/media/EwbuNk5WYAIBIPS.jpg" + ")"}}>

                                            </div>
                                            <div className="child referal-text text-center p-t-40">
                                                <h4>Refer a friend and get Rs. 500</h4>
                                                <h5 className="p-t-20">Your friends have amazing things to frame, too.
                                                    Let them know we’re here to help.</h5>
                                                <p className="p-t-20">Enter your email to start sharing with
                                                    friends:</p>
                                                <p><input className="form-control" type="email"
                                                          placeholder="Enter email"/>
                                                </p>
                                                <p>
                                                    <button type="submit" className="button-gray btn">START SHARING
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="sticky-bot black-bg-btn" data-toggle="modal" data-target="#referModal">Get
                                Rs.500
                            </div> */}
                            <Link to="https://www.facebook.com/PayMeIndia.in/" target="_blank">
                                <img className="social-img" src={Facebook} alt="payme-india"/>
                            </Link>
                            <Link to="https://twitter.com/PayMeIndia" target="_blank">
                                <img className="social-img" src={Twitter} alt="payme-india"/></Link>
                            <Link to="https://www.linkedin.com/company/payme-india" target="_blank">
                                <img className="social-img" src={Linkedin} alt="payme-india"/></Link>
                            <Link to="https://www.instagram.com/paymeindia/" target="_blank">
                                <img className="social-img" src={instagram} alt="payme-india"/></Link>
                        </div>
                        <div className="ol col-md-4 text-center d-none d-sm-block"><img className="middle_ssl_image"
                                                                                        width="100" src={sslLogo}
                                                                                        alt="PayMeIndia"/></div>
                        <div className="ol col-md-4 d-block d-sm-none"><img className="middle_ssl_image" width="100"
                                                                            src={sslLogo} alt="PayMeIndia"/></div>
                        <div className="ol col-md-4 col-xd-12">
                            <p className="p-t-20">Copyright@2021 Huey Tech Pvt. Ltd.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
const mapStateToProps = state => {
    return {}
}

const dispatchToProps = {hitAppUseCase};

export default connect(mapStateToProps, dispatchToProps)(Footer)
