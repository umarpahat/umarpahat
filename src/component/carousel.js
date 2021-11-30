import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Link} from "react-router-dom";
import instantLoan from "../images/svg/instant-banner.svg";
import goldBanner from "../images/svg/gold-banner.svg";
import cibilScoreBanner from "../images/svg/check-cibil-score.svg";
import payRentBanner from "../images/svg/pay-rent-banner.svg";
import googlePay from "../images/svg/google-play.svg";
import appStore from "../images/svg/app-store.svg";
export const CarouselPic = (props) => {
    return (
            <Carousel>
                <div className="get-instant-loan banner">
                    <div className="container">
                        <div className="row align-items-center ">
                            <div className="col-sm-12 col-md-3 bannerAlign">
                                <h1 className="heading1">Get Instant Loan Approval</h1>
                                <p className="heading6">No more financial crunches with PayMe India. Avail instant loans
                                    upto Rs. 2 lakhs
                                    anytime-anywhere with no hassle.</p>
                                <br/>
                                <br/>
                                <Link className="btnLarge" to={{
                                    pathname: '/apply-loan'
                                }}>
                                    Apply now
                                </Link>
                            </div>
                            <div className="col-sm-12 col-md-4 ">
                                &nbsp;
                            </div>
                            <div className="col-sm-12 col-md-5 m-t-40">
                                <div className='p-b-30'>
                                    <img className="img-fluid"
                                         alt="Instant Loan"
                                         src={instantLoan}/>
                                </div>
                                <div className="tabularLess p-b-30">
                                    <div >
                                        <Link
                                            to={{pathname: 'https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'}}
                                            target={"_blank"}>
                                            <img
                                                className="img_google"
                                                src={googlePay}
                                                alt="Pay Me India"
                                            />
                                        </Link>
                                    </div>
                                    <div>
                                        <img
                                            className="img_google"
                                            src={appStore}
                                            alt="Pay Me India"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gold-banner banner">
                    <div className="container">
                        <div className="row align-items-center ">
                            <div className="col-sm-12 col-md-3 bannerAlign">
                                <h1 className="heading1">Invest in Gold as low as Rs.500</h1>
                                <p className="heading6">Accumulate Gold digitally to build your savings over time and save for future life events</p>
                                <br/>
                                <br/>
                                <Link className="btnLarge"  to={{
                                    pathname: '/apply-loan'
                                }}>
                                    Apply now
                                </Link>
                            </div>
                            <div className="col-sm-12 col-md-4 ">
                                &nbsp;
                            </div>
                            <div className="col-sm-12 col-md-5 m-t-40">
                                <div className='p-b-30'>
                                    <img className="img-fluid"
                                         alt="Instant Loan"
                                         src={goldBanner}/>
                                </div>
                                <div className="tabularLess p-b-30">
                                    <div>
                                        <Link
                                            to={{pathname: 'https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'}}
                                            target={"_blank"}>
                                            <img
                                                className="img_google"
                                                src={googlePay}
                                                alt="Pay Me India"
                                            />
                                        </Link>
                                    </div>
                                    <div>
                                        <img
                                            className="img_google"
                                            src={appStore}
                                            alt="Pay Me India"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pay-rent-banner banner">
                    <div className="container">
                        <div className="row align-items-center ">
                            <div className="col-sm-12 col-md-3 bannerAlign">
                                <h1 className="heading1">Pay Rent Using Credit Card</h1>
                                <p className="heading6">Get exciting rewards and cashback by paying your rent online with your credit card</p>
                                <br/>
                                <br/>
                                <Link className="btnLarge"  to={{
                                    pathname: '/pay-rent-details'
                                }}>
                                    Pay Rent
                                </Link>
                            </div>
                            <div className="col-sm-12 col-md-4 ">
                                &nbsp;
                            </div>
                            <div className="col-sm-12 col-md-5 m-t-40">
                                <div className='p-b-30'>
                                    <img className="img-fluid"
                                         alt="Instant Loan"
                                         src={payRentBanner}/>
                                </div>
                                <div className="tabularLess p-b-30">
                                    <div>
                                        <Link
                                            to={{pathname: 'https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'}}
                                            target={"_blank"}>
                                            <img
                                                className="img_google"
                                                src={googlePay}
                                                alt="Pay Me India"
                                            />
                                        </Link>
                                    </div>
                                    <div>
                                        <img
                                            className="img_google"
                                            src={appStore}
                                            alt="Pay Me India"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cibil-banner-banner banner">
                    <div className="container">
                        <div className="row align-items-center ">
                            <div className="col-sm-12 col-md-3 bannerAlign">
                                <h1 className="heading1">Check your CIBIL For Free</h1>
                                <p className="heading6">Check your personalized credit report worth Rs.1500 in simple steps here!!</p>
                                <br/>
                                <br/>
                                <Link className="btnLarge" to={{
                                    pathname: '/get-cibil-report'
                                }}>
                                    Check your CIBIL
                                </Link>
                            </div>
                            <div className="col-sm-12 col-md-4 ">
                                &nbsp;
                            </div>
                            <div className="col-sm-12 col-md-5 m-t-40">
                                <div className='p-b-30'>
                                    <img className="img-fluid"
                                         alt="CIBIL SCORE"
                                         src={cibilScoreBanner}/>
                                </div>
                                <div className="tabularLess p-b-30">
                                    <div>
                                        <Link
                                            to={{pathname: 'https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'}}
                                            target={"_blank"}>
                                            <img
                                                className="img_google"
                                                src={googlePay}
                                                alt="Pay Me India"
                                            />
                                        </Link>
                                    </div>
                                    <div>
                                        <img
                                            className="img_google"
                                            src={appStore}
                                            alt="Pay Me India"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>

    );
};
