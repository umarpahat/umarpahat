import React, { useState, useEffect } from "react";
import { hitAppUseCase } from "../store/modules/userDetails/actions";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import Loader from "../component/Loader";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Footer from "./Footer";
import Header from "./Header";
import "../../src/home.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import logo from "../images/logo.png";
import vision from "../images/vision.png";
import team from "../images/team.jpg";
import thumbnail from "../images/thumbup.png";
import heart from "../images/heart.png";
import people from "../images/people.png";
import about from "../images/about-us.png";

const About = (props) => {
  let [loader, setloader] = useState(false);

  return (
    <>
      <Header {...props} />
      <div className='content'>
      <div className="services">
        <div className="container">
          <div className="col col-md-12 reg-second-heading">
            <h4>Who we are</h4>
            <span className="reg-second-subheading">
              PayMe India is an innovative FinTech organization
            </span>
          </div>
          <div className="row align-items-center p-b-30">
            <div className="col-lg-6 col-md-6 col-sm-8 col-xs-8 text-center main-img">
              <img
                className="img-fluid"
                width="200"
                alt="About us"
                src={about}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 textAlign">
              <h3 className="heading3">About Us</h3>
              <p className='p-t-10'>
                PayMe India was founded in 2016, with an aim to eliminate the barrier of getting financial help by enabling frictionless transactions & revolutionizing the way people take loans. We are striving to endow advanced salary loans to bourgeois or any salaried employee who faces financial constraints.
              </p>
              <p className='p-t-30'>PayMe India is an RBI registered NBFC company striving to simplify financial services by providing <strong>online loans</strong> to corporate employees at the lowest interest rate. Our lending model empowers customers to borrow easy, fast, safe & affordable <strong>personal loans</strong>. With a commitment to drive credit penetration & financial inclusion. We are collaborating technology, money, design & data in the form of App, to lend money online in a time of need, by being your financial backup. We have a team of 100 passionate members who strive to endow you with a platform where you can get easy & hassle-free personal loans.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="container p-b-30 p-t-40">
          <div className="row align-items-center pb-3">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 textAlign">
              <h3 className="heading3">Our Mission and Vision</h3>
              <p className='p-t-10'>
                PayMe India wants to accelerate the digital transformation of the financial industry by providing loans from Rs500 to Rs 2,00,000. Our vision is to be the leader of a fintech hub by utilizing the latest financial technologies to future-proof PayMe India pillars to develop a vibrant platform to facilitate acceleration in lending loans.
              </p>
              <p className='p-t-30'>Our Mission is to bring effectiveness, efficiency, & excellence to our lending process by outperforming ourselves every day by leveraging our customers with a unique platform where they can get <strong>quick loans</strong>. And our unique platform helps our users in their financial journey by being present in every aspect of their life with our best-in-class service. We promise to ensure you complete privacy & customer safety through our modern infrastructure & secure online system.</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 imgLarge textAlign">
              <img className="img-fluid" alt="CIBIL" src={vision} />
            </div>
          </div>
        </div>
      </div>
      <div className="services p-t-40 ">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-12 text-center">
              <h3 className="heading3">Our Promise</h3>
              <p className='p-t-10'>
                PayMe India promises to stay with you in every step by offering you a truly modern solution for <strong>a personal loan</strong>. Without lengthy paperwork with instant processing time, attractive interest rate & without prepayment charges. The only thing we ask in return is your trust, & believe us your trust in our service is our biggest asset. Don't believe in words 1st try & then trust. So next time when you are facing a financial crunch either in rent payment, utility bills, or looking for an impromptu vacation or season sale, PayMe India is there for you in every step as your financial backup.
              </p>
            </div>
          </div>
          <div className="row p-t-40 p-b-30">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="box justify-content-md-center">
                <div className="icon-left">
                  <img className="img-fluid" src={thumbnail} alt="PayMe India" />
                </div>
                <div className="icon-left-content">
                  <h3>Will never say no</h3>
                  <p> Fast hassle free instant loan disbursal</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="box justify-content-md-center">
                <div className="icon-left">
                  <img className="img-fluid" src={heart} alt="PayMe India" />
                </div>
                <h3>Will always trust </h3>
                <p>Reliable and secured lending process</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="box justify-content-md-center">
                <div className="icon-left">
                  <img className="img-fluid" src={people} alt="PayMe India" />
                </div>
                <h3>Will stand by you</h3>
                <p>We are here to assist you, Always!</p>
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
              <p className='p-t-10'>
                Team PayMe India is a set of customer oriented people who find
                their passion in helping out users to get over their financial
                crunches. Team strives to provide the best experience to our
                customers with their loan disbursal process.
              </p>
            </div>
          </div>
          <div className="row p-t-40 text-center p-b-30">
            <div className="col-lg-12 text-center">
              <img className="img-fluid" src={team} alt="Team" />
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

const dispatchToProps = { hitAppUseCase };

export default connect(mapStateToProps, dispatchToProps)(About);
