import React, {useState, useEffect} from "react";
import {hitAppUseCase} from "../store/modules/userDetails/actions";
import {connect} from "react-redux";
import {Container} from "react-bootstrap";
import Loader from "../component/Loader";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Header from "./Header";
import "../../src/home.css";
import {Link} from "react-router-dom";
import instantLoan from "../images/svg/instant-loan.svg";
import mutualFund from "../images/svg/matual-fund.svg";
import MetaTags from "react-meta-tags";
import payRentLink from "../images/svg/pay-rent-link.svg";
import benefit from "../images/svg/benefit.svg";
import {Cibil} from "../component/Cibil";
import Footer from "./Footer";

const Offerings = (props) => {
    let [loader, setloader] = useState(false);

    return (
        <>
            <MetaTags>
            <title>Products & Features – PayMe India</title>
            <meta name="description" content="PayMe India offers instant personal loan, pay rent, cibil report, Buy digital Gold, invest mutual fund, saarthi – job opportunity during covid-19." />
            <meta name="keyword" content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online" />
            <meta property="og:title" content="Products & Features – PayMe India" />
            </MetaTags>
            <Header {...props} active="offer"/>
            <div className='content'>
                <div className="banner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-5">
                                <h1 className="heading1">Get Instant Loan Approval</h1>
                                <p className="heading6">No more financial crunches with PayMe India. Avail instant loans upto Rs. 2 lakhs 
anytime-anywhere with no hassle.</p>
                                <a href='https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia' target='_blank'
                                   className="btnLarge m-t-40">
                                    Apply now
                                </a>
                            </div>
                            <div className="col-sm-12 col-md-2 ">
                                &nbsp;
                            </div>
                            <div className="col-sm-12 col-md-5 m-t-40">
                                <img className="img-fluid scoreAnimate"
                                     alt="Instant Loan"
                                     src={instantLoan}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel p-b-30">
                    <div className="container p-b-30" >
                        <div className="row align-items-center pb-3">
                            <div className="col-sm-12 col-md-4 p-t-40"><img className="img-fluid"
                                                                            alt="Pay Rent using Payme app"
                                                                            src={payRentLink}/></div>
                            <div className="col-sm-12 col-md-2 ">
                                &nbsp;
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <h3 className="heading3 relative"><span className='circle-small'></span> Pay rent using the PayMe app and avail exciting rewards</h3>
                                <p className="heading6">Paying rent online is easier than ever! Make rent payment using your credit card with PayMe 
India in few simple steps.</p>
                                <Link to={{pathname:'https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'}} target={"_blank"}
                                   className="btnLarge m-t-40">Pay Rent Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="loan-rent-benefit m-t-40">
                    <div className="container">
                        <div className="row align-items-center p-t-80">

                            <div className="col-sm-12 col-md-6 bg-in-mobile-black">
                                <h6 className="heading5 relative white-color">Payme Gold app</h6>
                                <h3 className="heading3 relative white-color">Invest in Digital Gold as low as Rs. 500</h3>
                                <p className="white-color">Accumulate Gold digitally to build your savings over time and save for future life events</p>
                               <a href='https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia' target='_blank'
                                   className="btnLarge m-t-40">Get App Now</a>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="farmer text-center"><img src={benefit} className="farmer-img img-fluid"
                                                                         alt="App Icon"/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Cibil/>
                <div className="banner p-b-30">
                    <div className="container p-b-30">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-5">
                                <h1 className="heading1 relative"><span className='circle-small'></span> Stop Thinking, Start Investing today in mutual funds</h1>
                                <p className="heading6">Build your wealth by investing in the right mutual funds by selecting funds that suit your 
financial goals</p>
                                <br/>
                                <br/>
                               {/* <Link className="btnLarge" onClick={() => {
                                    props.hitAppUseCase({useCase: 'apply-loan'})
                                    props.history.push({pathname: '/apply-loan'})
                                }}>
                                    Explore now
                                </Link>*/}
                            </div>
                            <div className="col-sm-12 col-md-2 ">
                                &nbsp;
                            </div>
                            <div className="col-sm-12 col-md-5 m-t-40">
                                <img className="img-fluid"
                                     alt="Matual Fund"
                                     src={mutualFund}/>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="loan-rent-benefit m-t-40">
                    <div className="container">
                        <div className="row align-items-center p-t-80">
                            <div className="col-sm-12 col-md-6">
                                <div className="farmer text-center"><img src={benefit} className="farmer-img img-fluid"
                                                                         alt="App Icon"/></div>
                            </div>
                            <div className="col-sm-12 col-md-6 bg-in-mobile-black">
                                <h6 className="heading5 relative white-color">SALT- Buy Now Pay Later</h6>
                                <h3 className="heading3 relative white-color">Buy anything with one Tap and Pay later
                                </h3>
                                <p className="white-color">Shopping online is easy checkout options aren’t. Salt brings you the advantage of
                                    buying now and paying later, Increasing the affordability of the purchase</p>
                                {/*<a href='https://creditscore.paymeindia.in' target='_blank'
                                   className="btnLarge m-t-40">Get App Now</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};
const mapStateToProps = (state) => {
    return {};
};

const dispatchToProps = {hitAppUseCase};

export default connect(mapStateToProps, dispatchToProps)(Offerings);
