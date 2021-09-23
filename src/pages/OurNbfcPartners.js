import React, {useState, useEffect} from "react";
import {hitAppUseCase} from "../store/modules/userDetails/actions";
import {connect} from "react-redux";
import {Accordion, Card, Container} from "react-bootstrap";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Header from "./Header";
import "../../src/home.css";

import {Link} from "react-router-dom";
import $ from "jquery";
import arvog from "../images/arvog.jpg";
import money2me from "../images/money2me.jpg";
import paymeindia from "../images/paymeindia.png";
import MetaTags from "react-meta-tags";
import mailBox from "../images/svg/mail-box.svg";

const OurNbfcPartners = (props) => {
    let [loader, setloader] = useState(false);

    return (
        <>
            <Header {...props} />
            <MetaTags>
                <title>NBFC Partners - PayMeIndia</title>
                <meta name="description" content="No more financial crunch. PayMeIndia gives you the amount of loan you require,
		anytime-anywhere. Fill the application to apply now!"/>
                <meta name="keyword"
                      content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
                <meta property="og:title" content="NBFC Partners - PayMeIndia"/>
            </MetaTags>
            <div className='content'>
                <div className="partners">
                    <div className="container">
                        <div className="col col-md-12 reg-second-heading ">
                            <h1 className='heading1 blue-color p-t-80'>Our NBFC Partners</h1>
                        </div>
                        <div className="row p-b-30 nbfc_img row justify-content-md-center p-t-80">

                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                <img className='img-fluid' src={paymeindia} alt="paymeindia"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                <img className='img-fluid' src={money2me} alt="paymeindia"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                <img className='img-fluid' src={arvog} alt="paymeindia"/>
                            </div>

                        </div>
                        <div className="row p-b-30 nbfc_img row justify-content-md-center p-t-80">

                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                <h4 className='heading4'>About our partners</h4>
                                <p>We work with an objective to provide best in class service to our customers with help
                                    of our NBFCs Partners Arvog (Finkurve Financial Services Limited), Money2money
                                    Finance Private Limited, and PayMe India financial services private limited.</p>


                                <h5 className='heading5  p-t-30'>Arvog (Finkurve Financial Services Limited)</h5>
                                <p className='p-t-20'>
                                    Arvog (Finkurve Financial Services Limited) is a listed company on the Bombay Stock
                                    Exchange and registered as an NBFC (Non-Banking Financial Company) with the RBI
                                    (Reserve Bank of India). The founders have built a reputed business on principles of
                                    value creation, integrity, radical transparency, and innovation. Arvog’s fulcrum of
                                    growth has been its relentless focus on spotting and unlocking worth in worthy ideas
                                    and ventures, preference for smart-tech-enabled scalability.</p>

                                <h5 className='heading5  p-t-30'>Money 2 Me Finance Private Limited</h5>
                                <p className='p-t-20'>Money2me Finance Private Limited was incorporated in 1991. It is
                                    an RBI registered NBFC(Non-Banking Financial Company). Money2Me is the germination
                                    of an idea. The idea is to help middle-class India realize and make its dreams come
                                    true. This idea is further based on a broader vision. The vision to empower Indians
                                    to become mini-powerhouses, within an economic giant.</p>

                                <h5 className='heading5  p-t-30'>PayMe India Financial Services Private Limited </h5>
                                <p className='p-t-20'>PayMe India Financial Services Private Limited is an RBI
                                    registered NBFC (Non-Banking Financial Company), founded in 2016. Striving to
                                    simplify financial services by providing online loans to corporate employees at the
                                    lowest interest rate. Their lending model empowers customers to borrow easy, fast,
                                    safe & affordable personal loans.</p>


                                                 <h5 className='heading5  p-t-30'>Ours align partners</h5>
                                <p className='p-t-20'>Organizational alignment is the key to any successful organization. We have developed partnerships with a diverse range of companies to share the ultimate vision of success. Our aligned partners Myntra, Acru.in, Medibuddy.in, Hicredit, CashTap, Afinos.com, Trufedu have played a major role in accomplishing our goal to become the fastest-growing company in India.</p>



                                                 <h5 className='heading5  p-t-30'>Myntra</h5>
                                <p className='p-t-20'>Myntra is a one-stop-shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products, Myntra aims at providing a hassle-free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal. </p>



                                                 <h5 className='heading5  p-t-30'>Acru.in</h5>
                                <p className='p-t-20'>Acru embarks on this Mission with the first of its kind platform for Micro-Investing; making investing accessible and easy for everyone, including the uninitiated. It facilitates participation in savings & investment products offered by SEBI registered Mutual Funds in India. Acru’s innovative online (mobile only) platform facilitates channelizing your savings however small into mutual funds of your choice.</p>



                                                 <h5 className='heading5  p-t-30'>Meddybuddy.in</h5>
                                <p className='p-t-20'>Meddybuddy is India’s Largest & most Trusted Digital Healthcare Platform for inpatient, outpatient, wellness & fitness needs. With a network of 90,000 doctors, 7,000 hospitals, 3000 diagnostic centers, Meddybuddy covers over 95% of all pin codes in India. </p>



                                                 <h5 className='heading5  p-t-30'>CashTap</h5>
                                <p className='p-t-20'>CashTap is a convenient financial marketplace that allows you to apply for loans, credit cards, and virtual credit cards from banks, NBFCs and finance consultants. The company aims to ease comparing interest rates, tenure, processing fees, and other factors within a matter of minutes. CashTap creates a competitive lender landscape that enables you to get the best financial terms. </p>


                                                 <h5 className='heading5  p-t-30'>Afinos.com</h5>
                                <p className='p-t-20'>A comprehensive hub to simplify the consumption of all applications, all media, and every form of content; plus best-of-breed collaboration and multitasking tools. Afinos renders the most popular Apps inter-operable and their experiences shareable. The company operates as a Cloud-based SaaS plus SDK, for developers to add interoperability and sharing to their products.</p>


                                  <h5 className='heading5  p-t-30'>CreditHaat</h5>
                                <p className='p-t-20'>CreditHaat is an online marketplace for getting loans. CreditHaat uses big data and analytics to assess the user’s risk profile and recommend the right lenders and loan products to the user.</p>

                    <h5 className='heading5  p-t-30'>Trufedu</h5>
                                <p className='p-t-20'>Trufedu is a one-stop solution for all your Health and Wealth needs under one umbrella at an affordable price. Trufedu aims to create awareness on financial planning/products besides building a structured module covering households, schools, colleges, and the working population.</p>



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
    );
};
const mapStateToProps = (state) => {
    return {};
};

const dispatchToProps = {hitAppUseCase};

export default connect(mapStateToProps, dispatchToProps)(OurNbfcPartners);
