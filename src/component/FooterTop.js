import React, {useEffect, useState} from "react";
import payrent from "../images/svg/payrent-icon.svg";
import cibilBanner from "../images/svg/cibil-banner-pic.svg";
import digiGold from "../images/svg/digi-gold-banner-pic.svg";
import mutualFunds from "../images/svg/mutual-funds-banner-pic.svg";
import payRentPic from "../images/svg/pay-rent-pic.svg";
import refer from "../images/svg/refer-earn-banner-pic.svg";
import {Link} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import googlePay from "../images/svg/google-play.svg";
import appStore from "../images/svg/app-store.svg";
import {SocialLink} from "./SocialLink";

export const FooterTop = (props) => {
    return (
        <div className="container-fluid footerStripe ">
            <div className="container ">
            <div className="row">
            <div className="col-md-12">
                <Carousel autoPlay={true} infiniteLoop={true} stopOnHover={true} transitionTime={800} showArrows={false}
                          showStatus={false}>
                    <div className="dflex ">
                        <div className="order-1 imgSize"><img src={payRentPic} alt="pay rent" className="img-fluid"/></div>
                        <div className="order-2 p-3"><p>Experience instant benefits and cashbacks on every rent payment
                            to your landlord with credit card.</p>
                            <div className="social_link">
                                <SocialLink/>
                            </div>
                        </div>
                    </div>
                    <div className="dflex">
                        <div className="order-1 imgSize"><img src={digiGold} alt="pay rent" className="img-fluid"/></div>
                        <div className="order-2 p-3"><p>Invest In Digital Gold- The New Gold Standard for bright
                            future.</p>
                            <div className="social_link">
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
                                    <a href="https://apps.apple.com/us/app/payme-india/id1282142711">
                                        <img
                                            className="img_google"
                                            src={appStore}
                                            alt="Pay Me India"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dflex">
                        <div className="order-1 imgSize"><img src={refer} alt="pay rent" className="img-fluid"/></div>
                        <div className="order-2 p-3"><p>Get flat Rs. 100 on every time you refer PayMe India. The more
                            you share, the more you earn.</p>
                            <div className="social_link">
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
                                    <a href="https://apps.apple.com/us/app/payme-india/id1282142711">
                                        <img
                                            className="img_google"
                                            src={appStore}
                                            alt="Pay Me India"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dflex">
                        <div className="order-1 imgSize"><img src={cibilBanner} alt="pay rent" className="img-fluid"/></div>
                        <div className="order-2 p-3"><p>Check your CIBIL score for free before applying for a personal
                            loan. Get CIBIL report worth Rs. 1500 for free. </p>
                            <div className="social_link">
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
                                    <a href="https://apps.apple.com/us/app/payme-india/id1282142711">
                                        <img
                                            className="img_google"
                                            src={appStore}
                                            alt="Pay Me India"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dflex">
                        <div className="order-1 imgSize"><img src={mutualFunds} alt="pay rent" className="img-fluid"/></div>
                        <div className="order-2 p-3"><p>Diversify your investment portfolio by investing in mutual
                            fund.</p>
                            <div className="social_link">
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
                                    <a href="https://apps.apple.com/us/app/payme-india/id1282142711">
                                        <img
                                            className="img_google"
                                            src={appStore}
                                            alt="Pay Me India"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
            </div>
            </div>
        </div>
    );
};
