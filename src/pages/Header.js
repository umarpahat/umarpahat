import React, { useState } from "react";
import { hitAppUseCase } from "../store/modules/userDetails/actions";
import { connect } from "react-redux";
import "../../src/home.css";
import logo from "../images/logo.png";
import Loader from "../component/Loader";
import { Link } from "react-router-dom";

const Header = (props) => {
  console.log("props", props);
  return (
    <>
      <div className="sticky-top">
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-auto me-auto">
                <Link to="/">
                  {" "}
                  <img
                    className="home_logo"
                    src={logo}
                    alt="Pay Me India"
                  />{" "}
                </Link>
              </div>
              <div className="col-auto p-t-10">
                <Link
                  className="button"
                  onClick={() => {
                    props.hitAppUseCase({ useCase: "apply-loan" });
                    props.history.push({ pathname: "/apply-loan" });
                  }}
                >
                  Apply Loan
                </Link>
               <Link
                  className="button"
                  onClick={() => {
                    props.hitAppUseCase({ useCase: "pay-rent" });
                    props.history.push({ pathname: "/pay-rent" });
                  }}
                >
                  Pay Rent
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
                  <Link to="/">Home</Link>
                </li>
              {/*  <li>
                  <Link to="#media">Media</Link>
                </li>*/}
                <li>
                  <Link to="/about">About us</Link>
                </li>
               {/* <li>
                  <Link to="#corporate">Corporate</Link>
                </li>
                <li>
                  <Link to="#how-we-work">How we work</Link>
                </li>*/}
               {/* <li>
                  <Link to="#blog">Blog</Link>
                </li>*/}
                <li>
                  <Link to="/contact">Contact us</Link>
                </li>
                <li>
                  <Link to="/faq">Faq</Link>
                </li>
                <li>
                  <Link to="/ourNbfcPartners">Our NBFC Partners</Link>
                </li>
              {/*  <li>
                  <Link to="#join-us">Join us</Link>
                </li>
                <li>
                  <Link to="#nbfc">Our NBFC Partners</Link>
                </li>
                <li>
                  <Link to="#advance-salary-loan">Advance Salary Loan</Link>
                </li>
                <li>
                  <Link to="#loans-for-low-salary">Loan For Low Salary</Link>
                </li>
                <li>
                  <Link to="#short-term-loans">Short Term Cash Loans</Link>
                </li>*/}
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
