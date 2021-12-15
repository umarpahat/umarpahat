import React, {Component} from "react";
import {Link} from "react-router-dom";
import payRent from "../images/svg/pay-rent-logo.svg";
import gold from "../images/svg/gold.svg";
import salt from "../images/svg/salt-logo.svg";
import matualFund from "../images/svg/pay-rent-logo.svg";
import googlePay from "../images/svg/google-play.svg";
import pRent from "../images/svg/pay-rent-small-logo.svg";
import slogo from "../images/svg/salt-small-logo.svg";
import glaon from "../images/svg/gold-small-logo.svg";
import mflaon from "../images/svg/mutual-funds-logo.svg";
import appStore from "../images/svg/app-store.svg";

export const Products = (props) => {
    return (
        <div className="clearfix p-b-30">
            <div className="container">
                <div className="col-md-12 reg-second-heading">
                    <h4 className="p-b-20">Our Products</h4>
                </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-md-3">
                            <div className='product-list-card'>
                                    <img src={pRent} alt="Create an account"/>
                                <Link to="/" className="product-list-d"><h5 className="heading5">Pay Rent</h5></Link>
                                <div className="p-b-30 apsAlign">
                                    <div className=" p-b-20">
                                        <Link
                                            to={{pathname: 'https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'}}
                                            target={"_blank"}>
                                            <img
                                                className="img_google"
                                                src={googlePay}
                                                alt="Pay Me India"
                                                height='35px'
                                            />
                                        </Link>
                                    </div>
                                    <div>
                                        <a href="https://apps.apple.com/us/app/payme-india/id1282142711" >
                                            <img
                                                className="img_google"
                                                src={appStore}
                                                alt="Pay Me India"
                                                height='35px'
                                            />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className='product-list-card'>
                                    <img src={glaon} alt="Create an account"/>
                                <Link to="/" className="product-list-d"><h5 className="heading5">Gold</h5></Link>
                                <div className="p-b-30 apsAlign">
                                    <div className=" p-b-20">
                                        <Link
                                            to={{pathname: 'https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'}}
                                            target={"_blank"}>
                                            <img
                                                className="img_google"
                                                src={googlePay}
                                                alt="Pay Me India"
                                                height='35px'
                                            />
                                        </Link>
                                    </div>
                                    <div>
                                        <a href="https://apps.apple.com/us/app/payme-india/id1282142711" >
                                            <img
                                                className="img_google"
                                                src={appStore}
                                                alt="Pay Me India"
                                                height='35px'
                                            />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className='product-list-card'>
                                    <img src={slogo} alt="Create an account"/>
                                <Link to="/" className="product-list-d"><h5 className="heading5">SALT BNPL</h5></Link>
                                <div className="p-b-30 apsAlign">
                                    <div className=" p-b-20">
                                        <Link
                                            to={{pathname: 'https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'}}
                                            target={"_blank"}>
                                            <img
                                                className="img_google"
                                                src={googlePay}
                                                alt="Pay Me India"
                                                height='35px'
                                            />
                                        </Link>
                                    </div>
                                    <div>
                                        <a href="https://apps.apple.com/us/app/payme-india/id1282142711" >
                                            <img
                                                className="img_google"
                                                src={appStore}
                                                alt="Pay Me India"
                                                height='35px'
                                            />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className='product-list-card'>
                                    <img src={mflaon} alt="Create an account"/>
                                <Link to="/" className="product-list-d"><h5 className="heading5">Mutual Funds</h5></Link>
                                <div className="p-b-30 apsAlign">
                                    <div className=" p-b-20">
                                        <Link
                                            to={{pathname: 'https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'}}
                                            target={"_blank"}>
                                            <img
                                                className="img_google"
                                                src={googlePay}
                                                alt="Pay Me India"
                                                height='35px'
                                            />
                                        </Link>
                                    </div>
                                    <div>
                                        <a href="https://apps.apple.com/us/app/payme-india/id1282142711" >
                                            <img
                                                className="img_google"
                                                src={appStore}
                                                alt="Pay Me India"
                                                height='35px'
                                            />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};
