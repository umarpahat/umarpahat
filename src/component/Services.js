import React, {Component} from "react";
import {Link} from "react-router-dom";
import {S3_IMAGES_URL} from "../constant";

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
                                <img alt="Short term loans" src={S3_IMAGES_URL +'/svg/short-loan.svg'} />
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
                                <img alt="Corporate loans" src={S3_IMAGES_URL +'/svg/corporate-loan.svg'} />
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
                                <img alt="Loan Advisory" src={S3_IMAGES_URL +'/svg/advisory-loan.svg'} />
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
