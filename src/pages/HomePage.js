import React, {useState, useEffect} from "react";
import {hitAppUseCase} from '../store/modules/userDetails/actions';
import {connect} from 'react-redux'
import {Container} from "react-bootstrap";
import Loader from '../component/Loader'
import "./ApplyNowButton/Applybtnallcomponent.css";
import Footer from "./Footer";
import Header from "./Header";
import Slider from "./Slider";
import '../../src/home.css';
import saltlogo from "../images/salt-logo.png";
import appIcon from "../images/app-icon.png";
import loginImg from "../images/login.png";
import assementImg from "../images/assement.png";
import aprovedImg from "../images/aproved.png";
import serviceImg from "../images/services.png";
import advisoryImg from "../images/advisory.png";
import shortImg from "../images/short.png";
import corporateImg from "../images/corporate.png";
import userIcon from "../images/user-icon.png";
import register from "../images/register.png";
import uploadImg from "../images/upload-doc.png";
import eligibilityImg from "../images/eligibility.png";
import promptImg from "../images/prompt.png";
import instantFund from "../images/instant-fund.png";
import easyRepay from "../images/easy-repay.png";
import CibilImg from "../images/cibil.png";
import InstantCash from "../images/instant-cash.svg"
import {Link} from "react-router-dom";





const HomePage = (props) => {

    let [loader, setloader] = useState(false);


    return (
        <>
            <Header {...props}/>
            <div className='content'>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row align-items-center pb-3">
                                <div className="col-sm-12 col-md-6 p-t-40"><img className="img-fluid" alt="CIBIL"
                                                                                src={CibilImg}/></div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="p-l-30">
                                        <h3 className="heading3"><span className="col-sky">CIBIL</span> Score & Report
                                        </h3>
                                        <h3 className="heading3"><span className="col-orange">ABSOLUTELY FREE </span>
                                        </h3>
                                        <Link to='/' className="button-large m-t-40">Get CIBIL report</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item black-bg p-b-30">
                        <div className="container">
                            <div className="row align-items-center pb-3 text-center">
                                <div className="col col-md-12 p-t-20 animate__animated animate__slideInDown">
                                    <img className="img-fluid svg-text" alt="CIBIL" src={saltlogo}/>
                                </div>
                                <div className="col col-md-12">
                                    <h3 className="heading2 animate__animated animate__slideInDown white-color">Use as
                                        much as
                                        you need
                                    </h3>
                                    <Link to='/' className="button-blue m-t-40 animate__animated animate__slideInUp">Know
                                        More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <h3 className="heading1">Get Instant Loan Approval</h3>
                            <h3 className="heading2"> Personal Loan upto 2 Lacs with Small Processing Fees</h3>
                            <p className="para-13">No more financial crunch. Payme India gives you the amount of loan
                                you require,
                                anytime-anywhere</p>
                            {/* <div className="clearfix">
                    <Link to='/' className="button-gray"><img alt="CIBIL" src="images/ios.png"/> Google Play
                    </Link>
                    <Link to='/ className="button-gray"><img alt="CIBIL" src="images/android.png"/> App Store</Link>
                </div> */}
                        </div>
                        <div className="col-sm-12 col-md-6 m-t-40">
                            <div className="price-box">
                                <form className="form-horizontal form-pricing" role="form">
                                    <div className="price-slider">
                                        <h4>How much cash do you need?</h4>
                                        <div className="relative">
                                            <Slider />
                                        </div>
                                    </div>
                                    <div className="price-slider">
                                        <h4>For how long?</h4>
                                        <div className="relative">
                                            <Slider />
                                        </div>
                                    </div>
                                    <p className="text"><span id="amount-label1"></span> over a period of <span
                                        id="duration-label1"></span> months at a rate of 16.7%, Processing Fee: 400.00
                                    </p>
                                    <div className="price-form">
                                        <div className="form-group1">
                                            <label htmlFor="total" className="col-sm-12 control-label">TOTAL
                                                AMOUNT &#8377;</label>
                                            <div className="col-sm-12">
                                                <input type="hidden" id="total" className="form-control"/>
                                                <p className="price lead" id="total-label"></p>
                                                <span className="price"></span>
                                            </div>
                                        </div>
                                        <div className="form-group1">
                                            <label htmlFor="duration"
                                                   className="col-sm-12 control-label">INTEREST &#8377;</label>
                                            <div className="col-sm-12">
                                                <input type="hidden" id="duration" className="form-control"/>
                                                <p className="price lead" id="duration-label"></p>
                                            </div>
                                        </div>
                                        <div className="form-group1">
                                            <label htmlFor="amount"
                                                   className="col-sm-12 control-label">REPAYMENT &#8377; </label>
                                            <div className="col-sm-12">
                                                <input type="hidden" id="amount" className="form-control"/>
                                                <p className="price lead" id="amount-label">

                                                </p>
                                                <span className="price"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row p-t-40">
                                        <div className="col-sm-12">
                                            <Link className="button-gray" onClick={() => {
                                                props.hitAppUseCase({useCase: 'apply-loan'})
                                                props.history.push({pathname: '/apply-loan'})
                                            }}>
                                                Apply Loan
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="loan-features">
                <div className="container">
                    <div className="col col-md-12 reg-second-heading">
                        <h4>Benefits of Payme India</h4>
                        <span className="reg-second-subheading">If access to money is holding you back, were here to help</span>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <div className="farmer text-center"><img src={appIcon} className="farmer-img img-fluid"
                                                                     alt="app"/></div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 p-t-30">
                                    <div className="credit-history feature-box">
                                        <div className="content-box"><img src={loginImg} alt="Easy Login"/>
                                            <h4>Easy Login</h4>
                                            <p>Walk a mile in few steps with unique mobile app based login process</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 p-t-30">
                                    <div className="instant-approval feature-box feature-box2">
                                        <div className="content-box"><img src={assementImg} alt="Accurate Assessment"/>
                                            <h4>Accurate Assessment</h4>
                                            <p>You are valuable. Know your true worth.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-6 p-t-30">
                                    <div className="convinient-repayment feature-box feature-box3">
                                        <div className="content-box"><img src={aprovedImg} alt="Swift Approval"/>
                                            <h4>Swift Approval</h4>
                                            <p>You will never be in queue again</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 p-t-30">
                                    <div className="credit-history feature-box feature-box4">
                                        <div className="content-box">

                                            <img src={InstantCash} alt="Instant Cash"/>
                                            <h4>Instant Cash</h4>
                                            <p>Don't let your dreams and needs wait for cash</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services">
                <div className="container">
                    <div className="col col-md-12 reg-second-heading">
                        <h4>Services</h4>
                        <span className="reg-second-subheading">Best services we have provided</span>
                    </div>
                    <div className="row align-items-center">
                        <div id="boxlink0" className="boxlink">
                            <div className="container">
                                <div className="row align-items-center pb-3">
                                    <div className="col-sm-12 col-md-6 text-center main-img"><img alt="CIBIL"
                                                                                                  src={serviceImg}/>
                                        <img
                                            id="boxlink1" className="boxlink" alt="CIBIL"/> <img
                                            id="boxlink2" className="boxlink" alt="CIBIL" src={advisoryImg}/></div>
                                    <div className="col-sm-12 col-md-6">
                                        <Link to='/' id="link0" className="product-link active"> <img alt="CIBIL"
                                                                                                      src={shortImg}/>
                                            <h3 className="heading3">Short Term Loans</h3>
                                            <p> A loan provided to a salaried individual for 2 - 24 months.</p>
                                        </Link>
                                        <Link to='/' id="link1" className="product-link product-link1"> <img alt="CIBIL"
                                                                                                             src={corporateImg}/>
                                            <h3 className="heading3">Corporate Loans</h3>
                                            <p>When the existing businesses or industrial houses need to generate
                                                funds.</p>
                                        </Link>
                                        <Link to='/' id="link2" className="product-link product-link2"> <img alt="CIBIL"
                                                                                                             src={advisoryImg}/>
                                            <h3 className="heading3">Loan Advisory</h3>
                                            <p>Business Lending for Independent Advisors - Get expert guidance on
                                                Conventional.</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid px-3 px-sm-5 text-center testimonial">
                <div className="col-sm-12 col-md-12 reg-second-heading">
                    <h4>Testimonials</h4>
                    <span className="reg-second-subheading">Our Success Stories</span>
                </div>
                <div className="owl-carousel owl-theme">
                    <div className="item first prev text-left">
                        <div className="card  py-3 px-4">
                            <div className="">
                                <div className="profile-pic float-left"><img src={userIcon} className="img-fluid"/>
                                </div>
                                <h6>Aghilesh Nair</h6>
                                <span>(Bengaluru)</span>
                            </div>
                            <p className="content mb-5 mx-2 pt-3">Now That's what I call a Service... Ignoring the fact
                                that there were
                                couple of days delay in disbursal, what I love is the way they personalized my concern.
                                A gentleman
                                named Mahesh called me up and made sure the disbursal happened.
                                He was very professional and sounded very eager to help. I recommend this to
                                everyone.</p>
                        </div>
                    </div>
                    <div className="item show text-left">
                        <div className="card  py-3 px-4">
                            <div className="">
                                <div className="profile-pic float-left"><img src={userIcon} className="img-fluid"/>
                                </div>
                                <h6>Sakar Verma</h6>
                                <span>(New Delhi)</span>
                            </div>
                            <p className="content mb-5 mx-2 pt-3">Excellent service Best service ever. I needed some
                                money for medical
                                purpose and they made it quick and easy for me. I was in touch with Mr Vishal who is
                                very
                                professional and got the job done quickly. The support staff is very courteous
                                and the transfer of money is lightening fast and easy documentation as well. Looking
                                forward for
                                continued business. Thank you team Payme India.</p>
                        </div>
                    </div>
                    <div className="item next text-left">
                        <div className="card  py-3 px-4">
                            <div className="">
                                <div className="profile-pic float-left"><img src={userIcon} className="img-fluid"/>
                                </div>
                                <h6>Nasrin Jahan</h6>
                                <span>(New Delhi)</span>
                            </div>
                            <p className="content mb-5 mx-2 pt-3">Needed moneyy It was a miracle for me that Payme India
                                approved my
                                loan and disbursed the amount. I was not aware of it they took the cheque from my
                                doorstep. I wasn't
                                sure about the loan. However my loan was approved and I was intimated
                                via mail. It was a great help. I would recommend them to others as well.</p>
                        </div>
                    </div>
                    <div className="item next text-left">
                        <div className="card  py-3 px-4">
                            <div className="">
                                <div className="profile-pic float-left"><img src={userIcon} className="img-fluid"/>
                                </div>
                                <h6>Vikram Singh</h6>
                                <span>(New Delhi)</span>
                            </div>
                            <p className="content mb-5 mx-2 pt-3">Quick and easy service to fulfill short term cash
                                needs, I got my
                                loan disbursed on second day itself and on timely payment I got higher eligibility for
                                next loan.
                                Repayment was easy by NetBanking. The most important thing is the
                                highly competitive interest rates as compared to many other flexi loans available in
                                India online.
                                Highly recommended..</p>
                        </div>
                    </div>
                    <div className="item last text-left">
                        <div className="card  py-3 px-4">
                            <div className="">
                                <div className="profile-pic float-left"><img src={userIcon} className="img-fluid"/>
                                </div>
                                <h6>Ranjeeta Naik</h6>
                                <span>(Mumbai)</span>
                            </div>
                            <p className="content mb-5 mx-2 pt-3">Very fast service If anyone in urgently need in money
                                then dont waste
                                your time in anywhere for cash loan. Just register with paymeindia and get a loan. Team
                                is
                                supportive and provide very fast service.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="float-full how-it-works">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-md-12 reg-second-heading">
                            <h4>How Payme Works</h4>
                            <span className="reg-second-subheading">Apply for loan</span>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 home-steps"><img className="icon" src={register}
                                                                                alt="Registration and Login"/>
                                <div className="red-arrow hidden-xs"></div>
                                <div className="red-arrow-bottom hidden-xs"></div>
                                <div className="home-steps-in">
                                    <div className="steps-heading"><strong>Registration and Login</strong></div>
                                    <p>Register online with your email id and mobile no. to get instant approval for
                                        upto Rs.2
                                        lacs</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 home-steps"><img className="icon" src={uploadImg}
                                                                                alt="Upload Document Swiftly"/>
                                <div className="red-arrow hidden-xs"></div>
                                <div className="red-arrow-bottom hidden-xs"></div>
                                <div className="home-steps-in">
                                    <div className="steps-heading"><strong>Upload Document Swiftly</strong></div>
                                    <p>Uploading Documents. I have a hard copy of my document, how can I upload it? One
                                        of the
                                        easiest ways.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 home-steps"><img className="icon" src={eligibilityImg}
                                                                                alt="Check Eligibility"/>
                                <div className="home-steps-in">
                                    <div className="steps-heading"><strong>Check Eligibility</strong></div>
                                    <p>the fact of having the necessary qualities or satisfying the necessary
                                        conditions: I'll have
                                        to check her eligibility to take part.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 home-steps"><img className="icon" src={promptImg}
                                                                                alt="Prompt Verification"/>
                                <div className="red-arrow hidden-xs"></div>
                                <div className="red-arrow-bottom hidden-xs"></div>
                                <div className="home-steps-in">
                                    <div className="steps-heading"><strong>Prompt Verification</strong></div>
                                    <p>We recommend Google prompts instead of text message (SMS) verification codes to
                                        help you:
                                        Avoid phone.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 home-steps"><img className="icon" src={instantFund}
                                                                                alt="instant"/>
                                <div className="red-arrow hidden-xs"></div>
                                <div className="red-arrow-bottom hidden-xs"></div>
                                <div className="home-steps-in">
                                    <div className="steps-heading"><strong>Instant Fund Transfer</strong></div>
                                    <p>Instant Money Transfer (IMT) is an innovative domestic service that allows you to
                                        send cash
                                        to a receiver
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 home-steps"><img className="icon" src={easyRepay}
                                                                                alt="easy-repay"/>
                                <div className="home-steps-in">
                                    <div className="steps-heading"><strong>Easy Repayment</strong></div>
                                    <p>Repayment is the act of paying back money borrowed from a lender in accordance
                                        with a
                                        loan's.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            <Footer/>
           
        </>
    );
};


const mapStateToProps = state => {
    return {}
}


const dispatchToProps = {hitAppUseCase};

export default connect(mapStateToProps, dispatchToProps)(HomePage)
