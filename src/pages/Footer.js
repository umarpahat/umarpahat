import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { hitAppUseCase } from "../store/modules/userDetails/actions";
import "../../src/footer.css";
import instagram from "../images/svg/instagram.svg";
import youtube from "../images/svg/youtube.svg";
import Linkedin from "../images/svg/linkedin.svg";
import Twitter from "../images/svg/twitter.svg";
import Facebook from "../images/svg/facebook.svg";
import sslLogo from "../images/svg/ssl.svg";
import whiteLogo from "../images/svg/logo.svg";
import { PopularCity } from "../component/PopularCity";
import { FooterTop } from "../component/FooterTop";
import { CibilScoreFooter } from "../component/CibilScoreFooter";
import LeaveMessage from "./LeaveMessage";
import CustomerGrievance from "./CustomerGrievance";

const Footer = (props) => {
  const [showDialogGrievance, setShowDialogGrievance] = React.useState(false);
  const openGrievance = () => setShowDialogGrievance(true);
  const closeGrievance = () => setShowDialogGrievance(false);

  const [showDialog, setShowDialog] = React.useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);

  return (
    <>
      <footer className="footer">
        <FooterTop />
        <PopularCity {...props} />
        <div className="container">
          <div className="row p-t-20">
            <div className="col-md-3 relative">
              <div className="clearfix">
                <img className="img-fluid" src={whiteLogo} alt="PayMe India" />
              </div>
              <div className="clearfix p-t-20">
                <Link
                  to={{
                    pathname: "https://www.facebook.com/PaymeIndiaofficial/",
                  }}
                  target={"_blank"}
                >
                  <img
                    className="social-img"
                    src={Facebook}
                    alt="PayMe India Facebook"
                  />
                </Link>
                <Link
                  to={{ pathname: "https://twitter.com/PayMeIndia?s=08" }}
                  target={"_blank"}
                >
                  <img
                    className="social-img"
                    src={Twitter}
                    alt="PayMe India Twitter"
                  />
                </Link>
                <Link
                  to={{
                    pathname: "https://www.linkedin.com/company/payme-india",
                  }}
                  target={"_blank"}
                >
                  <img
                    className="social-img"
                    src={Linkedin}
                    alt="PayMe India Linkedin"
                  />
                </Link>
                <Link
                  to={{ pathname: "https://www.instagram.com/paymeindia/" }}
                  target={"_blank"}
                >
                  <img
                    className="social-img"
                    src={instagram}
                    alt="PayMe India Instagram"
                  />
                </Link>
                <Link
                  to={{
                    pathname:
                      "https://www.youtube.com/channel/UCeP0MLxaKLeVz0-2uWAtcFg",
                  }}
                  target={"_blank"}
                >
                  <img
                    className="social-img"
                    src={youtube}
                    alt="PayMe India youtube"
                  />
                </Link>
              </div>
              <div className="footerSSLLogo hideDesktop">
                {" "}
                <img
                  className="middle_ssl_image"
                  width="100"
                  src={sslLogo}
                  alt="PayMe India"
                />
              </div>
            </div>
            <div className="col-md-2 width50">
              <h6 className="head6">Quick links</h6>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact us</Link>
                </li>
               {/* <li>
                  <Link to="/blog">Blogs</Link>
                </li>*/}
              </ul>
            </div>
            <div className="col-md-2 width50">
              <h6 className="head6">Policies</h6>
              <ul>
                <li>
                  <Link to="/terms">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link to="/policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/refund">Refund Policy</Link>
                </li>
                <li>
                  <Link to="/disclaimer">Disclaimer</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 width50">
              <h6 className="head6">Others</h6>
              <ul>
               {/* <li>
                  <Link to="/refer-earn">Refer & Earn</Link>
                </li>*/}
                <li>
                  <Link to="/faq">FAQs</Link>
                </li>
                <li>
                  <Link to="/ourNbfcPartners">Our NBFC Partners</Link>
                </li>
                <li>
                  <Link to="/media-coverage">Media Coverage</Link>
                </li>
                <li>
                  <a  className="MessGrieForm"  onClick={openGrievance}>Custmer Grievance</a>
                </li>
                <li>
                  <a className="MessGrieForm" onClick={open}>Leave a message</a>
                </li>
                <li>
                  <Link to="/eligbility-criteria">Eligibility Criteria</Link>
                </li>
                <li>
                  <Link to="/career">Career</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 width50 relative">
              <h6 className="head6 green-link p-r-desktop">
                Grievance Redressal Officer
              </h6>
              <ul>
                <li>Rohit Rai</li>
                <li className="">
                  <strong>Contact:</strong> 7669929906
                </li>
                <li className="">
                  <strong>Email:</strong>{" "}
                  <Link
                    to={{ pathname: "mailto:rohit.rai@paymeindia.in" }}
                    target={"_blank"}
                  >
                    rohit.rai@paymeindia.in
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname:
                        "https://openscecurityurl.s3.ap-south-1.amazonaws.com/NewAppAgreeDocs/grievance_redressal_mechanism.pdf",
                    }}
                    target={"_blank"}
                  >
                    Grievance Redressal Mechanism
                  </Link>
                </li>
              </ul>
              <div className="footerSSLLogo hideMobile">
                {" "}
                <img
                  className="middle_ssl_image"
                  width="100"
                  src={sslLogo}
                  alt="PayMe India"
                />
              </div>
            </div>
          </div>
          { showDialog ? <LeaveMessage close={close} {...props} /> :null }
          {showDialogGrievance ? <CustomerGrievance  closeGrievance={closeGrievance} {...props} /> : null}

          <div className="row p-t-20">
            <div className="col-md-12 text-center">
              <p className="p-t-20">Copyright@2021 Huey Tech Pvt. Ltd.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const dispatchToProps = { hitAppUseCase };

export default connect(mapStateToProps, dispatchToProps)(Footer);
