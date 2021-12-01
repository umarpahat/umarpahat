import React, {useEffect, useState} from "react";
import payrent from "../images/svg/payrent-icon.svg";
import {Link} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import googlePay from "../images/svg/google-play.svg";
import appStore from "../images/svg/app-store.svg";

export const FooterTop = (props) => {
    return (
        <div className="container-fluid footerStripe p-t-40">
            <div className="container p-t-40">
                <Carousel>
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-2">
                            <img src={payrent} alt="pay rent" className="img-fluid"/>
                        </div>
                        <div className="col-sm-12 col-md-8 justify-content-center">
                            <p><strong>Get</strong> instant benifits and cashbacks on the <strong>Payme Rent
                                app </strong> on every rent payment to your landlord.</p>
                            <div className=" tablar p-b-30">
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
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-2">
                            <img src={payrent} alt="pay rent" className="img-fluid"/>
                        </div>
                        <div className="col-sm-12 col-md-8 justify-content-center">
                            <p><strong>Get</strong> instant benifits and cashbacks on the <strong>Payme Rent
                                app </strong> on every rent payment to your landlord.</p>
                            <div className=" tablar p-b-30">
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
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-2">
                            <img src={payrent} alt="pay rent" className="img-fluid"/>
                        </div>
                        <div className="col-sm-12 col-md-8 justify-content-center">
                            <p><strong>Get</strong> instant benifits and cashbacks on the <strong>Payme Rent
                                app </strong> on every rent payment to your landlord.</p>
                            <div className=" tablar p-b-30">
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
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-2">
                            <img src={payrent} alt="pay rent" className="img-fluid"/>
                        </div>
                        <div className="col-sm-12 col-md-8 justify-content-center">
                            <p><strong>Get</strong> instant benifits and cashbacks on the <strong>Payme Rent
                                app </strong> on every rent payment to your landlord.</p>
                            <div className=" tablar p-b-30">
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
                </Carousel>
            </div>
        </div>
    );
};
