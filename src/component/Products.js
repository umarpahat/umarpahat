import React, {Component} from "react";
import {Link} from "react-router-dom";
import {S3_IMAGES_URL} from "../constant";

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
                                    <img src={S3_IMAGES_URL +'/svg/pay-rent-small-logo.svg'} alt="Create an account"/>
                                <Link to="/" className="product-list-d"><h5 className="heading5">Pay Rent</h5></Link>
                                <div className="p-b-30 apsAlign">
                                    <div className=" p-b-20">
                                        <a href='https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'>
                                            <img
                                                className="img_google"
                                                src={S3_IMAGES_URL +'/svg/google-play.svg'}
                                                alt="Pay Me India"
                                                height='35px'
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://apps.apple.com/us/app/payme-india/id1282142711" >
                                            <img
                                                className="img_google"
                                                src={S3_IMAGES_URL +'/svg/app-store.svg'}
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
                                    <img src={S3_IMAGES_URL +'/svg/gold-small-logo.svg'} alt="Create an account"/>
                                <Link to="/" className="product-list-d"><h5 className="heading5">Gold</h5></Link>
                                <div className="p-b-30 apsAlign">
                                    <div className=" p-b-20">
                                        <a href='https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'>
                                            <img
                                                className="img_google"
                                                src={S3_IMAGES_URL +'/svg/google-play.svg'}
                                                alt="Pay Me India"
                                                height='35px'
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://apps.apple.com/us/app/payme-india/id1282142711" >
                                            <img
                                                className="img_google"
                                                src={S3_IMAGES_URL +'/svg/app-store.svg'}
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
                                    <img src={S3_IMAGES_URL +'/svg/salt-small-logo.svg'} alt="Create an account"/>
                                <Link to="/" className="product-list-d"><h5 className="heading5">SALT BNPL</h5></Link>
                                <div className="p-b-30 apsAlign">
                                    <div className=" p-b-20">
                                        <a href='https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'>
                                            <img
                                                className="img_google"
                                                src={S3_IMAGES_URL +'/svg/google-play.svg'}
                                                alt="Pay Me India"
                                                height='35px'
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://apps.apple.com/us/app/payme-india/id1282142711" >
                                            <img
                                                className="img_google"
                                                src={S3_IMAGES_URL +'/svg/app-store.svg'}
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
                                    <img src={S3_IMAGES_URL +'/svg/mutual-funds-logo.svg'} alt="Create an account"/>
                                <Link to="/" className="product-list-d"><h5 className="heading5">Mutual Funds</h5></Link>
                                <div className="p-b-30 apsAlign">
                                    <div className=" p-b-20">
                                        <a href='https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'>
                                            <img
                                                className="img_google"
                                                src={S3_IMAGES_URL +'/svg/google-play.svg'}
                                                alt="Pay Me India"
                                                height='35px'
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://apps.apple.com/us/app/payme-india/id1282142711" >
                                            <img
                                                className="img_google"
                                                src={S3_IMAGES_URL +'/svg/app-store.svg'}
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
