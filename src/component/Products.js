import React, {Component} from "react";
import {Link} from "react-router-dom";
import payRent from "../images/svg/pay-rent-logo.svg";
import gold from "../images/svg/gold.svg";
import salt from "../images/svg/salt-logo.svg";
import matualFund from "../images/svg/pay-rent-logo.svg";
import googlePay from "../images/svg/google-play.svg";
import appStore from "../images/svg/app-store.svg";

export const Products = (props) => {
    return (
        <div className="clearfix p-b-30">
            <div className="container">
                <div className="col col-md-12 reg-second-heading ">
                    <h4 className="p-b-30">Our Products</h4>
                </div>
                <div className="container">
                    <div className="row pb-3 justify-content-center">
                        <div className="col-sm-12 col-md-3">
                            <div className='product-list-card'>
                                <div className='product-list-card-img'>
                                    <img src={payRent} alt="Create an account"/>
                                </div>
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
                                        <img
                                            className="img_google"
                                            src={appStore}
                                            alt="Pay Me India"
                                            height='35px'
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className='product-list-card'>
                                <div className='product-list-card-img'>
                                    <img src={gold} alt="Create an account"/>
                                </div>
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
                                        <img
                                            className="img_google"
                                            src={appStore}
                                            alt="Pay Me India"
                                            height='35px'
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className='product-list-card'>
                                <div className='product-list-card-img'>
                                    <img src={salt} alt="Create an account"/>
                                </div>
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
                                        <img
                                            className="img_google"
                                            src={appStore}
                                            alt="Pay Me India"
                                            height='35px'
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className='product-list-card'>
                                <div className='product-list-card-img'>
                                    <img src={matualFund} alt="Create an account"/>
                                </div>
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
                                        <img
                                            className="img_google"
                                            src={appStore}
                                            alt="Pay Me India"
                                            height='35px'
                                        />
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
