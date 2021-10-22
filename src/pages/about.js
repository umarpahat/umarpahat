import React, { useState } from "react";
import { hitAppUseCase } from "../store/modules/userDetails/actions";
import { connect } from "react-redux";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Header from "./Header";
import "../../src/home.css";
import vision from "../images/svg/rocket-up.svg";
import team from "../images/logo-fav.png";
import coreValue from "../images/Core-Values.png";
import PhonecoreValue from "../images/phone-Core-Values.png";
import team1 from "../images/Image-1.png";
import team2 from "../images/Image-2.png";
import team3 from "../images/Image-3.png";
import team4 from "../images/Image-4.png";
import team5 from "../images/Image-5.png";
import team6 from "../images/Image-6.png";
import team7 from "../images/Image-7.png";
import team8 from "../images/Image-8.png";
import teamAll from "../images/team.jpg";
import mailBox from "../images/svg/mail-box.svg";
import thumbnail from "../images/svg/thumb.svg";
import people from "../images/svg/will-stand.svg";
import about from "../images/svg/about-us.png";
import MetaTags from "react-meta-tags";
import goldStarIcon from "../images/svg/star.svg";
import * as url from "url";

const About = (props) => {
  let [loader, setloader] = useState(false);

  return (
    <>
      <Header {...props} />
      <MetaTags>
        <title>About Us - PayMeIndia</title>
        <meta
          name="description"
          content="PayMeIndia is an innovative FinTech organization that offers advance salary
              loans, instant flexi loans, short term cash loans to the salaried corporate employees at
        lowest interest rates. These loans are designed to meet all your short term financial needs such
        as medical emergency or any other personal needs."
        />
        <meta
          name="keyword"
          content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"
        />
        <meta property="og:title" content="About Us - PayMeIndia" />
      </MetaTags>
      <div className="content">
        <div className="aboutUs">
          <div className="container">
            <div className="col col-md-12 reg-second-heading">
              <h1 className="heading1 blue-color">Who we are</h1>
              <span className="reg-second-subheading">
                PayMe India is an innovative FinTech organization
              </span>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-14 m-t-40 d-none d-md-block d-lg-block text-center">
                <img className="img-fluid" alt="About us" src={about} style={{width:"700px",height:"400px",color:"#fff",marginBottom:"5%"}} />
              </div>

            </div>
             <div className="col-sm-12 col-md-6 m-t-40 d-md-none">
                <img className="img-fluid" alt="About us" src={about} style={{width:"1400px",height:"205px",color:"#fff"}} />
              </div>
          </div>
        </div>
        <div className="clearfix">
          <div className="container">
            <div className="row p-t-30 p-b-30">
              <div className="col-lg-4 col-md-4 col-sm-4">
              <h3 className="heading3 relative blue-color d-none d-md-block">
                  <span className="circle-small-shape"></span> About Us
                </h3>

                <h3 className="heading3 relative blue-color text-center d-md-none">
                  {" "}
                  <span className="circle-small-shape"></span> About Us{" "}
                </h3>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 textAlign">
                <p className="heading6">
                  PayMe India is an innovative new-age Fintech company,
                  transforming the lending landscape. The company was founded in
                  2016, to eliminate the difficulty of getting financial
                  assistance by leveraging modern technologies. The company
                  works with RBI registered NBFCs to facilitate advance salary
                  loans to bourgeois or any salaried employee who faces
                  financial constraints. Our lending model empowers loan seekers
                  to borrow easy, fast, safe & affordable personal loans. Our
                  passionate team of 150+ members aims to enrich you with a
                  platform where getting personal loans are instant and
                  hassle-free
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mission">
          <div className="container p-b-30 p-t-25">
            <div className="row align-items-center pb-3">
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 textAlign">
                <h4 className="heading4 blue-color">Our Mission and Vision</h4>
                <p className="p-t-10">
                  PayMe India is dedicated to the mission of becoming the
                  preferred choice of financial services, by providing
                  high-quality, moderate-priced, and transparent financial
                  products approachable to everyone in society. Our vision is to
                  become a globally acknowledged FinTech brand by spreading
                  “Financial Happiness” by utilizing the latest financial
                  technologies
                </p>
              </div>
            
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 imgLarge textAlign">
                <img className="img-fluid" alt="CIBIL" src={vision} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 m-t-40 d-md-none">
                <img src={PhonecoreValue} alt="core value" className="img-fluid"  />
              </div>
              <div className="col-sm-12 col-md-14 m-t-40 d-none d-md-block d-lg-block text-center">
                <img src={coreValue} alt="core value" className="img-fluid" style={{width:"70%",height:"600px",marginTop:"-13%",marginBottom:"5%"}} />
              </div>
        <div className="promise">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-sm-12 col-md-9 white-color text-center p-t-40 p-b-30">
                <h4 className="heading4">Our Promise</h4>
                <p className="p-b-30  p-t-30 white-color relative">
                  PayMe India promises to stay with you in every step by
                  offering you a truly modern solution for an instant personal
                  loan. With the paperless fully digitalized process, with
                  instant processing time, attractive interest rate, and without
                  repayment charges. The only thing we ask in return is your
                  trust, & believe us your trust in our service is our biggest
                  asset. Don't believe in words 1st try & then trust. So next
                  time when you are facing a financial crunch either in rent
                  payment, utility bills, or looking for an impromptu vacation
                  or season sale, PayMe India is there for you in every step as
                  your financial backup.
                </p>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="promise-mission">
          <div className="container">
            <div className="row justify-content-md-center ">
              <div className="col-lg-7 col-md-7 col-sm-12">
                <div className="row justify-content-md-center boxes">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="box-align justify-content-md-center text-center">
                      <div className="img-box d-flex align-items-center justify-content-center">
                        <img
                          className="img-fluid"
                          src={thumbnail}
                          alt="PayMe India"
                        />
                      </div>
                      <h3>Will never say no</h3>
                      <p>Fast hassle-free instant loan disbursal.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="box-align justify-content-md-center text-center">
                      <div className="img-box d-flex align-items-center justify-content-center">
                        <img
                          src={goldStarIcon}
                          alt="Star"
                          className="img-fluid"
                        />
                        <img
                          src={goldStarIcon}
                          alt="Star"
                          className="img-fluid"
                        />
                        <img
                          src={goldStarIcon}
                          alt="Star"
                          className="img-fluid"
                        />
                        <img
                          src={goldStarIcon}
                          alt="Star"
                          className="img-fluid"
                        />
                        <img
                          src={goldStarIcon}
                          alt="Star"
                          className="img-fluid"
                        />
                      </div>
                      <h3>Will always trust</h3>
                      <p>Reliable and secured lending process.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="box-align justify-content-md-center text-center">
                      <div className="img-box d-flex align-items-center justify-content-center">
                        <img
                          className="img-fluid"
                          src={people}
                          alt="PayMe India"
                        />
                      </div>
                      <h3>Will stand by you</h3>
                      <p>We are available to assist you, Always!.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="team-section">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-md-8 text-center p-t-40">
                <h4 className="heading4 blue-color">Our Team</h4>
                <p className="p-t-10">
                  Team PayMe India is a set of customer-oriented personalities,
                  who find their passion in helping out users to get over their
                  financial crunches. Our team of hard-working people strives to
                  provide the best experience to our customers with their loan
                  disbursal process.
                </p>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div
                className="col col-md-12 text-center"
                style={{ paddingBottom: 80 }}
              >
                {" "}
                &nbsp;
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col col-md-8 text-center">
                <div className="clearfix topFav">
                  <div className="team-pic">
                    <img
                      className="img-fluid circleImg"
                      src={team}
                      alt="Team"
                    />
                  </div>
                </div>
                <div className="clearfix clearboth right">
                  <div className="team-pic f-right">
                    <img className="img-fluid" src={team1} alt="Team" />
                  </div>
                </div>
                <div className="clearboth clearfix">
                  <div className="team-pic l-right">
                    <img className="img-fluid" src={team5} alt="Team" />
                  </div>
                </div>
                <div className="clearfix clearboth right">
                  <div className="team-pic f-right">
                    <img className="img-fluid" src={team3} alt="Team" />
                  </div>
                </div>
                <div className="clearboth clearfix">
                  <div className="team-pic l-right">
                    <img className="img-fluid" src={team2} alt="Team" />
                  </div>
                </div>
                <div className="clearfix clearboth right">
                  <div className="team-pic f-right">
                    <img className="img-fluid" src={team4} alt="Team" />
                  </div>
                </div>
                <div className="clearboth clearfix">
                  <div className="team-pic l-right">
                    <img className="img-fluid" src={team6} alt="Team" />
                  </div>
                </div>
                <div className="clearfix clearboth right">
                  <div className="team-pic f-right">
                    <img className="img-fluid" src={team7} alt="Team" />
                  </div>
                </div>
                <div className="clearboth clearfix">
                  <div className="team-pic l-right">
                    <img className="img-fluid" src={team8} alt="Team" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contactBox">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-9 text-center p-t-30 p-b-30 d-flex contactLine">
                <div className="mailPic">
                  <img className="img-fluid" src={mailBox} alt="Mail" />
                </div>
                <div className="contact">
                  <h4 className="heading4">Contact Us</h4>
                  <p>
                    Please contact us at
                    <br />
                    <a href="mailto: admin@paymeindia.in" target="_blank">
                      admin@paymeindia.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const dispatchToProps = { hitAppUseCase };

export default connect(mapStateToProps, dispatchToProps)(About);
