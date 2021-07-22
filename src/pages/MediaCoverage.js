import React, {useState} from "react";
import {hitAppUseCase} from "../store/modules/userDetails/actions";
import {connect} from "react-redux";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Footer from "./Footer";
import Header from "./Header";
import "../../src/home.css";
import userIcon from "../images/user-icon.png";

const HowWeWork = (props) => {
    let [loader, setloader] = useState(false);

    return (
        <>
            <Header {...props} />
            <div className='content'>
                <div className="container-fluid px-3 px-sm-5  testimonial">
                    <div className="col-sm-12 col-md-12 reg-second-heading">
                        <h4>Media Coverage</h4>
                        <span className="reg-second-subheading ">Know what the world is Buzzing about PayMe India
                        </span>
                    </div>
                    <div className="container p-b-30">
                        <div className="row">
                            <div className="col-sm-4 col-md-4">
                                <div className="card py-3 px-4">
                                    <div className="">
                                        <h5 className='p-t-10'>
                                            <div className="profile-pic float-left relative"><img
                                                src="https://yourstory.com/logos/logo_yourstory.svg"
                                                className="img-fluid imgCenter"/>
                                            </div>
                                            PayMe India receives NBFC certificate from RBI
                                        </h5>
                                    </div>
                                    <p className="content mb-5 mx-2 pt-3">
                                        <a target='_blank'
                                           href='https://www.thenewsminute.com/article/payme-india-receives-nbfc-certificate-rbi-106687'>PayMe
                                            India, one of the country’s eminent FinTech establishments, has recently
                                            acquired NBFC licence from the nation’s apex financial institution, the
                                            Reserve Bank of India (RBI) under Section 45(1A). After obtaining NBFC
                                            status, PayMe India is eligible to offer</a></p>
                                    <p className='date'>8th Jun 2021</p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <div className="card py-3 px-4">
                                    <div className="">
                                        <h5 className='p-t-10'>
                                            <div className="profile-pic float-left relative"><img
                                                src="https://trak.in/wp-content/uploads/2017/07/Trak-Logo-Underline-small.png"
                                                className="img-fluid imgCenter"/>
                                            </div>
                                            Citi Bank India Shuts Down Entire Banking Operations...
                                        </h5>
                                    </div>
                                    <p className="content mb-5 mx-2 pt-3">
                                        <a target='_blank'
                                           href='https://trak.in/tags/business/2021/04/16/citi-bank-india-shuts-down-entire-banking-operations-this-is-how-indian-startups-reacted/'>Citibank has announced that they will shut down entire retail banking operations across 13 nations, and that includes India as well.</a></p>
                                    <p className='date'>17 Apr 2021</p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <div className="card py-3 px-4">
                                    <div className="">
                                        <h5 className='p-t-10'>
                                            <div className="profile-pic float-left relative black-bg"><img
                                                src="https://assets.entrepreneur.com/static/20190308060624-ENT-India-Logo-White.svg"
                                                className="img-fluid imgCenter"/>
                                            </div>
                                            PayMe India Secures Pre-Series A Angel Funding
                                        </h5>
                                    </div>
                                    <p className="content mb-5 mx-2 pt-3">
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
                                <div className="card py-3 px-4">
                                    <div className="">
                                        <h5 className='p-t-10'>
                                            <div className="profile-pic float-left relative"><img
                                                src="https://staticassets.vccircle.com/images/VCC-logo.svg"
                                                className="img-fluid imgCenter"/>
                                            </div>
                                            HYPD Store, PayMe India raise funding
                                        </h5>
                                    </div>
                                    <p className="content mb-5 mx-2 pt-3">
                                        <a target='_blank'
                                           href='https://www.vccircle.com/hypd-store-payme-india-raise-funding/'>HYPD Stores, a content-first ecommerce discovery platform, has raised an undisclosed sum in a strategic pre-seed investment from digital media company ScoopWhoop</a></p>
                                    <p className='date'>12th Feb 2021</p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <div className="card py-3 px-4">
                                    <div className="">
                                        <h5 className='p-t-10'>
                                            <div className="profile-pic float-left relative"><img
                                                src="https://play-lh.googleusercontent.com/50DCCw3YkXDw31At02T9alk9x2gmhapha-MP_d8p8A3zTK9A6rrxSzA4NSkWenSUpA"
                                                className="img-fluid imgCenter"/>
                                            </div>
                                            Interest on Rs 2.5 lakh plus EPF contribution becomes taxable
                                        </h5>
                                    </div>
                                    <p className="content mb-5 mx-2 pt-3">
                                        <a target='_blank'
                                           href='https://www.cnbctv18.com/personal-finance/as-interest-on-epf-over-rs-25-lakh-is-taxable-now-find-out-if-you-should-voluntarily-contribute-8210951.htm'>Budget
                                            2021 has proposed to restrict tax exemption for interest income earned on
                                            employees’</a></p>
                                    <p className='date'>05th Feb 2021</p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <div className="card py-3 px-4">
                                    <div className="">
                                        <h5 className='p-t-10'>
                                            <div className="profile-pic float-left relative"><img
                                                src="https://images.newindianexpress.com/images/FrontEnd/images/new_logo.jpg"
                                                className="img-fluid imgCenter"/>
                                            </div>
                                            PayMe India seeks to extend credit to the under-served
                                        </h5>
                                    </div>
                                    <p className="content mb-5 mx-2 pt-3">
                                        <a target='_blank'
                                           href='https://www.newindianexpress.com/business/2019/oct/05/payme-india-seeks-to-extend-credit-to-the-under-served-2043438.html'>While
                                            still in college in 2004, Mahesh Shukla, co-founder of PayMe India aspired
                                            to make an impact by offering financial services even in India’s remote
                                            areas.</a></p>
                                    <p className='date'>05th Oct 2019</p>

                                </div>
                            </div>


                        </div>
                        <div className="row p-t-15">

                            <div className="col-sm-4 col-md-4">
                                <div className="card py-3 px-4">
                                    <div className="">
                                        <h5 className='p-t-10'>
                                            <div className="profile-pic float-left relative"><img
                                                src="https://images.newindianexpress.com/images/FrontEnd/images/new_logo.jpg"
                                                className="img-fluid imgCenter"/>
                                            </div>
                                            PayMe India seeks to extend credit to the under-served
                                        </h5>
                                    </div>
                                    <p className="content mb-5 mx-2 pt-3">
                                        <a target='_blank'
                                           href='https://www.newindianexpress.com/business/2019/oct/05/payme-india-seeks-to-extend-credit-to-the-under-served-2043438.html'>While
                                            still in college in 2004, Mahesh Shukla, co-founder of PayMe India aspired
                                            to make an impact by offering financial services even in India’s remote
                                            areas.</a></p>
                                    <p className='date'>05th Aug 2019</p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <div className="card py-3 px-4">
                                    <div className="">
                                        <h5 className='p-t-10'>
                                            <div className="profile-pic float-left relative black-bg"><img
                                                src="https://assets.entrepreneur.com/static/20190308060624-ENT-India-Logo-White.svg"
                                                className="img-fluid imgCenter"/>
                                            </div>
                                            AI is Accelerating the Growth of FinTech Companies
                                        </h5>
                                    </div>
                                    <p className="content mb-5 mx-2 pt-3">
                                        <a target='_blank'
                                           href='entrepreneur.com/article/333278'>A customer-centric approach, real-time data integration, cost optimization, and advanced security are those topmost needs.</a></p>
                                    <p className='date'>4th May 2019</p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <div className="card py-3 px-4">
                                    <div className="">
                                        <h5 className='p-t-10'>
                                            <div className="profile-pic float-left relative"><img
                                                src="https://images.yourstory.com/logos/svg/logo_yourstory.svg"
                                                className="img-fluid imgCenter"/>
                                            </div>
                                            Online lending startup PayMe India raises $2 M from Singapore-based
                                        </h5>
                                    </div>
                                    <p className="content mb-5 mx-2 pt-3">
                                        <a target='_blank'
                                           href='https://yourstory.com/2018/04/payme-india-raises-2-m-from-singapore-based-angel-investors/amp'>Noida-based fintech startup PayMe India announced on Thursday that it has raised $2 million from Singapore-based Angel investors.</a></p>
                                    <p className='date'>26th Apr 2018</p>
                                </div>
                            </div>

                        </div>
                        <div className="row p-t-15">
                            <div className="col-sm-4 col-md-4">
                                <div className="card py-3 px-4">
                                    <div className="">
                                        <h5 className='p-t-10'>
                                            <div className="profile-pic float-left relative"><img
                                                src="https://static.toiimg.com/thumb/msid-47529300,imgsize-110164,width-400,resizemode-4/47529300.jpg"
                                                className="img-fluid imgCenter"/>
                                            </div>
                                            PayMe India gets funds from Singapore investors
                                        </h5>
                                    </div>
                                    <p className="content mb-5 mx-2 pt-3">
                                        <a target='_blank'
                                           href='https://timesofindia.indiatimes.com/business/india-business/payme-india-gets-funds-from-singapore-investors/articleshow/63918432.cms'>
                                            PayMe India, a Noida-based online lending platform, has raised $2 million
                                            from Singapore-based angel investors. Founded in 2016 by Mahesh Shukla.
                                        </a></p>
                                    <p className='date'>26th Apr 2018</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="services">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col col-md-8 text-center p-t-30 p-b-30">
                                <h4 className="heading4">Contact Us</h4>
                                <p>
                                    Please contact us at{" "}
                                    <a href="mailto: admin@paymeindia.in" target='_blank'>admin@paymeindia.in</a>
                                </p>
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

export default connect(mapStateToProps, dispatchToProps)(HowWeWork);
