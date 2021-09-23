import React, {useState} from "react";
import {hitAppUseCase} from "../store/modules/userDetails/actions";
import {connect} from "react-redux";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Header from "./Header";
import "../../src/home.css";
import mediaCover from "../images/svg/media-cover.svg";
import MetaTags from "react-meta-tags";
import mailBox from "../images/svg/mail-box.svg";

const MediaCoverage = (props) => {
    let [loader, setloader] = useState(false);

    return (
        <>
            <Header {...props} />
            <MetaTags>
                <title>Instant Personal Loans Online | Small Personal Loans - PayMe India</title>
                <meta name="description" content="Instant personal loans online at an attractive interest rates.
		Apply small personal loans and get your loan approve instantly. Download PayMe India app now!!"/>
                <meta name="keyword"
                      content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
                <meta property="og:title" content="Instant Personal Loans Online | Small Personal Loans - PayMe India"/>
            </MetaTags>
            <div className='content'>
                <div className="banner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6">
                                <h1 className="heading1 blue-color">MEDIA COVERAGE</h1>
                                <p className="no-more-text">Know what the world is buzzing about PayMe India. Our new and exciting innovation always keeps us in media coverage.</p>
                            </div>
                            <div className="col-sm-12 col-md-1 ">
                                &nbsp;
                            </div>
                            <div className="col-sm-12 col-md-5 m-t-40">
                                <img className="img-fluid"
                                     alt="Media"
                                     src={mediaCover}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-3 px-sm-5 mediaCover">
                    <div className="container p-b-30">
                        <div className="row">
                            <div className="col-sm-4 col-md-4">
                                <div className="card">
                                    <div className="headStripe">
                                        <img
                                            src="https://yourstory.com/logos/logo_yourstory.svg"
                                            alt='your story logo'
                                            className="img-fluid imgCenter"/>
                                    </div>
                                    <h5>
                                        Launched by bankers, how PayMe India has transformed into...
                                    </h5>
                                    <p>
                                        <a target='_blank'
                                           href='https://yourstory.com/2021/06/payme-india-transformed-full-stack-personal-loan-startup/amp'>When
                                            Mahesh Shukla moved to Delhi from a small town in UP, he was disappointed to
                                            see
                                            how cumbersome and expensive it was to avail a credit card or personal loan.
                                            This in spite of him being in the banking sector, working for leading brands
                                            like Bank of America, DB, and Barclays</a></p>
                                    <p className='date'>8Th Jun 2021</p>
                                </div>
                            </div>

                            <div className="col-sm-4 col-md-4">
                                <div className="card ">
                                    <div className="headStripe"><img
                                        src="https://trak.in/wp-content/uploads/2017/07/Trak-Logo-Underline-small.png"
                                        alt='Trak underline'
                                        className="img-fluid imgCenter"/>
                                    </div>
                                    <h5>
                                        Citi Bank India Shuts Down Entire Banking Operations...
                                    </h5>
                                    <p>
                                        <a target='_blank'
                                           href='https://trak.in/tags/business/2021/04/16/citi-bank-india-shuts-down-entire-banking-operations-this-is-how-indian-startups-reacted/'>Citibank
                                            has announced that they will shut down entire retail banking operations
                                            across
                                            13 nations, and that includes India as well.</a></p>
                                    <p className='date'>17Th Apr 2021</p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <div className="card">
                                    <div className="headStripe"><img
                                        src="https://assets.entrepreneur.com/static/20190308060624-ENT-India-Logo-White.svg"
                                        alt='ENT india logo'
                                        className="img-fluid imgCenter"/>
                                    </div>
                                    <h5>
                                        PayMe India Secures Pre-Series A Angel Funding
                                    </h5>
                                    <p>
                                        <a target='_blank'
                                           href='https://www.entrepreneur.com/article/365585'>Noida-based fintech
                                            startup PayMe India is a stemming cash partner assiduously offering loans to
                                            employees has been said to have successfully raised an undisclosed.</a></p>
                                    <p className='date'>17Th Feb 2021</p>

                                </div>
                            </div>
                        </div>
                        <div className="row p-t-15">
                            <div className="col-sm-4 col-md-4">
                                <div className="card">
                                    <div className="headStripe"><img
                                        alt='Vcc logo'
                                        src="https://staticassets.vccircle.com/images/VCC-logo.svg"
                                        className="img-fluid imgCenter"/>
                                    </div>
                                    <h5>
                                        HYPD Store, PayMe India raise funding
                                    </h5>
                                    <p>
                                        <a target='_blank'
                                           href='https://www.vccircle.com/hypd-store-payme-india-raise-funding/'>HYPD
                                            Stores, a
                                            content-first ecommerce discovery platform, has raised an undisclosed sum in
                                            a strategic
                                            pre-seed investment from digital media company ScoopWhoop</a></p>
                                    <p className='date'>12Th Feb 2021</p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <div className="card">
                                    <div className="headStripe"><img
                                        alt='Google user content'
                                        src="https://play-lh.googleusercontent.com/50DCCw3YkXDw31At02T9alk9x2gmhapha-MP_d8p8A3zTK9A6rrxSzA4NSkWenSUpA"
                                        className="img-fluid imgCenter"/>
                                    </div>
                                    <h5>

                                        Interest on Rs 2.5 lakh plus EPF contribution becomes taxable
                                    </h5>
                                    <p>
                                        <a target='_blank'
                                           href='https://www.cnbctv18.com/personal-finance/as-interest-on-epf-over-rs-25-lakh-is-taxable-now-find-out-if-you-should-voluntarily-contribute-8210951.htm'>Budget
                                            2021 has proposed to restrict tax exemption for interest income earned on
                                            employees</a></p>
                                    <p className='date'>05Th Feb 2021</p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <div className="card">
                                    <div className="headStripe"><img
                                        src="https://images.newindianexpress.com/images/FrontEnd/images/new_logo.jpg"
                                        alt='New India express'
                                        className="img-fluid imgCenter"/>
                                    </div>
                                    <h5>PayMe India seeks to extend credit to the under-served
                                    </h5>
                                    <p>
                                        <a target='_blank'
                                           href='https://www.newindianexpress.com/business/2019/oct/05/payme-india-seeks-to-extend-credit-to-the-under-served-2043438.html'>While
                                            still in college in 2004, Mahesh Shukla, co-founder of PayMe India aspired
                                            to make an impact by offering financial services even in India’s remote
                                            areas.</a></p>
                                    <p className='date'>05Th Oct 2019</p>

                                </div>
                            </div>


                        </div>
                        <div className="row p-t-15">
                            <div className="col-sm-4 col-md-4">
                                <div className="card">
                                    <div className="headStripe"><img
                                        alt='the news minute'
                                        src="https://www.thenewsminute.com/sites/all/themes/tnm/The-News-Minute-Logo_mob.png"
                                        className="img-fluid imgCenter"/>
                                    </div>
                                    <h5>
                                        PayMe India receives NBFC certificate from RBI
                                    </h5>
                                    <p>
                                        <a target='_blank'
                                           href='https://www.thenewsminute.com/article/payme-india-receives-nbfc-certificate-rbi-106687'>After
                                            obtaining NBFC status, PayMe India is eligible to offer secured and
                                            unsecured financial
                                            products like short-term Personal Loan, Business Loan, Education Loan,
                                            Credit Cards</a>
                                    </p>
                                    <p className='date'>05Th Aug 2019</p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <div className="card">
                                    <div className="headStripe"><img
                                        alt='entrepreneur logo'
                                        src="https://assets.entrepreneur.com/static/20190308060624-ENT-India-Logo-White.svg"
                                        className="img-fluid imgCenter"/>
                                    </div>
                                    <h5>
                                        AI is Accelerating the Growth of FinTech Companies
                                    </h5>
                                    <p>
                                        <a target='_blank'
                                           href='https://www.entrepreneur.com/article/333278'>A customer-centric
                                            approach, real-time
                                            data integration, cost optimization, and advanced security are those topmost
                                            needs.</a>
                                    </p>
                                    <p className='date'>4Th May 2019</p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <div className="card">
                                    <div className="headStripe"><img
                                        alt='Your story logo'
                                        src="https://images.yourstory.com/logos/svg/logo_yourstory.svg"
                                        className="img-fluid imgCenter"/>
                                    </div>
                                    <h5>
                                        Online lending startup PayMe India raises $2 M from Singapore-based
                                    </h5>
                                    <p>
                                        <a target='_blank'
                                           href='https://yourstory.com/2018/04/payme-india-raises-2-m-from-singapore-based-angel-investors/amp'>Noida-based
                                            fintech startup PayMe India announced on Thursday that it has raised $2
                                            million from
                                            Singapore-based Angel investors.</a></p>
                                    <p className='date'>26Th Apr 2018</p>
                                </div>
                            </div>
                        </div>
                        <div className="row p-t-15">
                            <div className="col-sm-4 col-md-4">
                                <div className="card">
                                    <div className="headStripe"><img
                                        alt='toi img logo'
                                        src="https://static.toiimg.com/thumb/msid-47529300,imgsize-110164,width-400,resizemode-4/47529300.jpg"
                                        className="img-fluid imgCenter"/>
                                    </div>
                                    <h5>
                                        PayMe India gets funds from Singapore investors
                                    </h5>
                                    <p>
                                        <a target='_blank'
                                           href='https://timesofindia.indiatimes.com/business/india-business/payme-india-gets-funds-from-singapore-investors/articleshow/63918432.cms'>
                                            PayMe India, a Noida-based online lending platform, has raised $2 million
                                            from Singapore-based angel investors. Founded in 2016 by Mahesh Shukla.
                                        </a></p>
                                    <p className='date'>26Th Apr 2018</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="contactBox p-t-80">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-9 text-center p-t-30 p-b-30 d-flex contactLine">
                                <div className='mailPic'>
                                    <img className="img-fluid" src={mailBox} alt="Mail"/>
                                </div>
                                <div className='contact'>
                                    <h4 className="heading4">Contact Us</h4>
                                    <p>Please contact us at<br/>
                                        <a href="mailto: admin@paymeindia.in" target='_blank'>admin@paymeindia.in</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </>
    )
        ;
};
const mapStateToProps = (state) => {
    return {};
};

const dispatchToProps = {hitAppUseCase};

export default connect(mapStateToProps, dispatchToProps)(MediaCoverage);
