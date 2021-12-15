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
            <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showArrows={true}>
                <div className="get-instant-loan banner">
                    <div className="container">
                        <div className="row align-items-center ">
                            <div className="col-sm-6 col-md-6 bannerAlign">
                                <h1 className="heading2">Get Instant personal loan</h1>
                                <p className="heading6">No more financial crunches with PayMe India. Avail instant loans
                                    upto Rs. 2 lakhs
                                    anytime-anywhere with no hassle.</p>
                                <Link className="btnLarge" to={{
                                    pathname: '/apply-loan'
                                }}>
                                    Apply now
                                </Link>

                                <div className="home_social_link">
                                    <div>
                                        <a href="https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia">
                                            <img
                                                className="img_google"
                                                src={googlePay}
                                                alt="Pay Me India"
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://apps.apple.com/us/app/payme-india/id1282142711" >
                                            <img
                                                className="img_google"
                                                src={appStore}
                                                alt="Pay Me India"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className='p-b-20'>
                                    <img className="img-fluid"
                                         alt="Instant Loan"
                                         src={instantLoan}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gold-banner banner">
                    <div className="container">
                        <div className="row align-items-center ">
                            <div className="col-sm-6 col-md-6 bannerAlign">
                                <h2 className="heading2">Invest in Digital Gold as low as Rs. 500</h2>
                                <p className="heading6">Accumulate Gold digitally to build your savings over time and save for future life events</p>
                                    <a className="btnLarge" href='https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'>
                                    Start Investing
                                    </a>
                                <div className="home_social_link">
                                    <div>
                                        <a href="https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia">
                                            <img
                                                className="img_google"
                                                src={googlePay}
                                                alt="Pay Me India"
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://apps.apple.com/us/app/payme-india/id1282142711" >
                                            <img
                                                className="img_google"
                                                src={appStore}
                                                alt="Pay Me India"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 ">
                                <div className='p-b-20'>
                                    <img className="img-fluid"
                                         alt="Instant Loan"
                                         src={goldBanner}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="pay-rent-banner banner">
                    <div className="container">
                        <div className="row align-items-center ">
                            <div className="col-sm-6 col-md-6 bannerAlign">
                                <h2 className="heading2">Pay Rent Using Credit Card</h2>
                                <p className="heading6">Get exciting rewards and cashback by paying your rent online with your credit card</p>
                                <Link className="btnLarge"  to={{
                                    pathname: '/pay-rent-details'
                                }}>
                                    Pay your rent now
                                </Link>
                                <div className="home_social_link">
                                    <div>
                                        <a href="https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia">
                                            <img
                                                className="img_google"
                                                src={googlePay}
                                                alt="Pay Me India"
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://apps.apple.com/us/app/payme-india/id1282142711" >
                                            <img
                                                className="img_google"
                                                src={appStore}
                                                alt="Pay Me India"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-6 ">
                                <div className='p-b-20'>
                                    <img className="img-fluid"
                                         alt="Instant Loan"
                                         src={payRentBanner}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="cibil-banner-banner banner">
                    <div className="container">
                        <div className="row align-items-center ">
                            <div className="col-sm-6 col-md-6 bannerAlign">
                                <h2 className="heading2">Check your CIBIL score for free</h2>
                                <p className="heading6">Check your personalized credit report worth Rs.1500 in simple steps here!!</p>
                                <Link className="btnLarge" to={{
                                    pathname: '/get-cibil-report'
                                }}>
                                    Check your CIBIL
                                </Link>
                                <div className="home_social_link">
                                    <div>
                                        <a href="https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia">
                                            <img
                                                className="img_google"
                                                src={googlePay}
                                                alt="Pay Me India"
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://apps.apple.com/us/app/payme-india/id1282142711" >
                                            <img
                                                className="img_google"
                                                src={appStore}
                                                alt="Pay Me India"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 ">
                                <div className='p-b-20'>
                                    <img className="img-fluid"
                                         alt="CIBIL SCORE"
                                         src={cibilScoreBanner}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>

    );
};
