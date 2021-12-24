import React, {Component} from "react";
import {Link} from "react-router-dom";
import shortImg from "../images/svg/short-loan.svg";
import corporateImg from "../images/svg/corporate-loan.svg";
import advisoryImg from "../images/svg/advisory-loan.svg";

export const Services = (props) => {
    return (
        <div className="clearfix">
            <div className="container">
                <div className="col col-md-12 reg-second-heading ">
                    <h4 className="p-t-40">Services we offer</h4>
                </div>
                <div className="container">
                    <div className="row pb-3">
                        <div className="col-sm-12 col-md-4">
                            <Link to="/" className="product-link">
                                {" "}
                                <img alt="CIBIL Short" src={shortImg} />
                                <h5 className="heading5">Short term loans</h5>
                                <p className="heading6">
                                    For instant money needs, get a loan at attractive interest
                                    rates.
                                </p>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <Link
                                to="/"
                                id="link1"
                                className="product-link product-link1"
                            >
                                {" "}
                                <img alt="CIBIL Corporate" src={corporateImg} />
                                <h5 className="heading5">Corporate loans</h5>
                                <p className="heading6">Achieve new milestones in your existing business.</p>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <Link
                                to="/"
                                id="link2"
                                className="product-link product-link2"
                            >
                                {" "}
                                <img alt="CIBIL Advisory" src={advisoryImg} />
                                <h5 className="heading5">Loan Advisory</h5>
                                <p className="heading6">
                                    Business lending for an independent advisory- Get expert
                                    advice on your financial needs.
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
