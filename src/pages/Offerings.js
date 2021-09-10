import React, {useState, useEffect} from "react";
import {hitAppUseCase} from "../store/modules/userDetails/actions";
import {connect} from "react-redux";
import {Container} from "react-bootstrap";
import Loader from "../component/Loader";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Footer from "./Footer";
import Header from "./Header";
import "../../src/home.css";
import {Link} from "react-router-dom";
import instantLoan from "../images/svg/instant-loan.svg";
import mutualFund from "../images/svg/matual-fund.svg";
import MetaTags from "react-meta-tags";
import payRentLink from "../images/svg/pay-rent-link.svg";
import benefit from "../images/svg/benefit.svg";

const Offerings = (props) => {
    let [loader, setloader] = useState(false);

    return (
        <>
            <Header {...props} />
            <MetaTags>
            <title>Corporate - Instant Loans for Corporate - PayMeIndia</title>
            <meta name="description" content="PayMeIndia offers an exclusive lending programme for the corporate
			employees of organisations that are partnered or not partnered with PayMeIndia for Advance
			Salary. We allow them to borrow up to a whopping 50% of their net monthly income, payable
			against the following month’s salary." />
            <meta name="keyword" content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online" />
            <meta property="og:title" content="Corporate - Instant Loans for Corporate - PayMeIndia" />
        </MetaTags>
            <div className='content'>
                <div className="banner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-5">
                                <h1 className="heading1">Get Instant Loan Approval</h1>
                                <p className="no-more-text">Avail personal loan upto 2 lakhs with PayMe India. Get instant Loans anytime-anywhere.</p>
                                <br/>
                                <br/>
                                <Link className="btnLarge" onClick={() => {
                                    props.hitAppUseCase({useCase: 'apply-loan'})
                                    props.history.push({pathname: '/apply-loan'})
                                }}>
                                    Apply now
                                </Link>
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
                            <div className="col-sm-12 col-md-6 p-t-40"><img className="img-fluid"
                                                                            alt="Pay Rent using Payme app"
                                                                            src={payRentLink}/></div>
                            <div className="col-sm-12 col-md-1 ">
                                &nbsp;
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <h3 className="heading3 relative"><span className='circle-small'></span> Pay rent using the PayMe app and avail exciting rewards</h3>
                                <p className="heading6">Paying rent online is easier than ever! Just make your rental payment with credit cards in a couple of quick steps with no struggle at all.</p>
                                <a href='https://creditscore.paymeindia.in' target='_blank'
                                   className="btnLarge m-t-40">Get App Now</a>
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
                                <h6 className="heading6 relative white-color">SALT- Buy Now Pay Later</h6>
                                <h3 className="heading3 relative white-color">Buy Products of your choice now and pay them later</h3>
                                <p className="white-color">Shopping online is easy but checkout options aren’t. The Salt app brings you the advantages of buying now and paying later, Increasing the affordability of the purchase.</p>
                                {/*<a href='https://creditscore.paymeindia.in' target='_blank'
                                   className="btnLarge m-t-40">Get App Now</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner p-b-30">
                    <div className="container p-b-30">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-5">
                                <h1 className="heading1 relative"><span className='circle-small'></span> Start investing in Mutual Funds using our App</h1>
                                <p className="no-more-text">Stop Thinking, Start Investing Today in mutual funds with PayMe India. Build your wealth by investing in mutual funds, select funds that fit your financial goals</p>
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
