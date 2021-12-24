import React, {Component} from "react";
import {Link} from "react-router-dom";
import createAccount from "../images/svg/create-account.svg";
import kyc from "../images/svg/kyc.svg";
import bank from "../images/svg/bank.svg";

export const GetLoanStep = (props) => {
    return (
        <div className="clearfix getLoanStep p-b-30">
            <div className="container">
                <div className="col col-md-12 reg-second-heading ">
                    <h4 className="p-b-30">Get Loan in 3 simple Steps</h4>
                </div>
                <div className="container">
                    <div className="row pb-3 justify-content-center">
                        <div className="col-sm-12 col-md-8">
                            <div className='row'>
                                <div className="col-sm-12 col-md-4">
                                    <div className='step-card'>
                                        <div className='step-btn'>Step - 1</div>
                                        <Link to="/" className="product-link">
                                            <div className='img-circle-round'>
                                                <img src={createAccount} alt="Create an account"/>
                                            </div>
                                            <h5 className="heading5">Create an account</h5>
                                            <p className="heading6">Sign up to the app</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4">

                                    <div className='step-card'>
                                        <div className='step-btn'>Step - 2</div>
                                        <Link to="/" className="product-link">
                                            <div className='img-circle-round'>
                                                <img src={kyc} alt="Get your KYC done"/>
                                            </div>
                                            <h5 className="heading5">Get your KYC done</h5>
                                            <p className="heading6">Provide your Aadhaar and PAN details</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div className='step-card'>
                                        <div className='step-btn'>Step - 3</div>
                                        <Link to="/" className="product-link">
                                            <div className='img-circle-round'>
                                                <img src={bank} alt="Provide Bank details"/>
                                            </div>
                                            <h5 className="heading5">Provide Bank details</h5>
                                            <p className="heading6">Bank account details & bank statement</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
