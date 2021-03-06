import React from "react";
import {S3_IMAGES_URL} from "../constant";

export const Benefits = (props) => {
    return (
        <>
            <div className="loan-blue-benefit">
                <div className="container">
                    <div className="col col-md-12 reg-second-heading white-color">
                        <h4>Benefits of PayMe India</h4>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-sm-4 offset-sm-4 col-md-6  offset-md-0">
                            <div className="farmer text-center">
                                <img
                                    src={S3_IMAGES_URL +'/svg/benefit.svg'}
                                    className="farmer-img img-fluid"
                                    alt="App Icon"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 bg-in-mobile">
                            <p className="relative" style={{color: "#fff"}}>
                                <span className="font110">“</span>
                                <a
                                    className="white-color"
                                    href='https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'
                                >PayMe India is a one-stop answer for your financial crunches, endowing you with
                                an in-depth range of benefits. Whether it’s last-minute rent payment, planning a
                                vacation, or even a flash sale online, PayMe India features a loan for all processes.
                                Let’s get a quick sneak peek of the benefits you’ll experience on your financial
                                journey with PayMe India.</a><span className="font110 transform">“</span>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="loan-features">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <div className="farmer text-center">&nbsp;</div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 p-t-30">
                                    <div className="credit-history feature-box">
                                        <div className="content-box">
                                            <div>
                                                <img  src={S3_IMAGES_URL +'/svg/login-icon.svg'}  alt="Easy Login"/>
                                            </div>
                                            <div>
                                                <h4>Easy Login</h4>
                                                <span className="heading6" style={{fontSize: "17px"}}>
                            Walk a mile in a few steps with a unique mobile
                            app-based login process.
                          </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 p-t-30">
                                    <div className="instant-approval feature-box feature-box2">
                                        <div className="content-box">
                                            <div>
                                                <img src={S3_IMAGES_URL +'/svg/accurate-icon.svg'}  alt="Accurate Assessment"/>
                                            </div>
                                            <div>
                                                <h4>Accurate Assessment</h4>
                                                <span className="heading6" style={{fontSize: "17px"}}>You are valuable. Know your true worth.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-6 p-t-30">
                                    <div className="convinient-repayment feature-box feature-box3">
                                        <div className="content-box">
                                            <div>
                                                <img src={S3_IMAGES_URL +'/svg/swift-transfer.svg'} alt="Swift Approval"/>
                                            </div>
                                            <div>
                                                <h4>Swift approval</h4>
                                                <span className="heading6" style={{fontSize: "17px"}}>
                            Get prompt loan approval and money in your account
                          </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 p-t-30">
                                    <div className="credit-history feature-box feature-box4">
                                        <div className="content-box">
                                            <div>
                                                <img src={S3_IMAGES_URL +'/svg/instant-icon.svg'} alt="Instant Cash"/>
                                            </div>
                                            <div>
                                                <h4>Instant Cash</h4>
                                                <span className="heading6" style={{fontSize: "17px"}}>Don't let your dreams and wishes await cash.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
