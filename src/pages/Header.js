import React, { useState } from "react";
import { hitAppUseCase } from "../store/modules/userDetails/actions";
import { connect } from "react-redux";
import "../../src/home.css";
import logo from "../images/logo.png";
import Loader from "../component/Loader";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


//  let[loader,setloader]=useState(false);
const Header = (props) => {
    
  return (
    <>
      <div className="sticky-top">
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-auto me-auto">
                <a href="/">
                  {" "}
                  <img
                    className="home_logo"
                    src={logo}
                    alt="Pay Me India"
                  />{" "}
                </a>
              </div>
              <div className="col-auto p-t-10">
                <Link
                  onClick={() => {
                    props.hitAppUseCase({ useCase: "apply-loan" });
                    props.history.push({ pathname: "/apply-loan" });
                  }}
                >
                  <a href="#" className="button">
                    Apply Loan
                  </a>
                </Link>
                <Link
                  onClick={() => {
                    props.hitAppUseCase({ useCase: "pay-rent" });
                    props.history.push({ pathname: "/pay-rent" });
                  }}
                >
                  <a href="#" className="button">
                    Pay Rent
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span> <span></span> <span></span>
              <ul id="menu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#media">Media</a>
                </li>
                <li>
                  <a href="#about-us">About us</a>
                </li>
                <li>
                  <a href="#corporate">Corporate</a>
                </li>
                <li>
                  <a href="#how-we-work">How we work</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#contact-us">Contact us</a>
                </li>
                <li>
                  <a href="#join-us">Join us</a>
                </li>
                <li>
                  <a href="#nbfc">Our NBFC Partners</a>
                </li>
                <li>
                  <a href="#advance-salary-loan">Advance Salary Loan</a>
                </li>
                <li>
                  <a href="#loans-for-low-salary">Loan For Low Salary</a>
                </li>
                <li>
                  <a href="#short-term-loans">Short Term Cash Loans</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const dispatchToProps = { hitAppUseCase };
export default connect(mapStateToProps, dispatchToProps)(Header);
