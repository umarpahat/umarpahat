import React, { useState,useEffect } from "react";
import { hitAppUseCase } from '../store/modules/userDetails/actions';
import { connect } from 'react-redux'
import { Container } from "react-bootstrap";
import Loader from '../component/Loader'
import "./ApplyNowButton/Applybtnallcomponent.css";
import Footer from "./Footer";
import Header from "./Header";
import '../../src/home.css';
import saltlogo from "../images/salt-logo.png";
import  appIcon from "../images/app-icon.png";
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
// import corporateImg from "../images/corporate-loan.svg";
//  import InstantCash from "../images/instant-cash.svg"
import {Link} from "react-router-dom";
import $ from "jquery";
import logo from "../images/logo.png";


const HomePage = (props) => {

  let [loader, setloader] = useState(false);






  return (
    <>
  
  {/* <Header />  */}
 
  <div class="sticky-top">
    <header className="header">
        <div class="container">
            <div class="row">
                <div class="col-auto me-auto">
                    <a href="/"> <img  className="home_logo" src={logo} alt="Pay Me India"/> </a>
                </div>
                <div class="col-auto p-t-10">
                <Link onClick={()=>{
                      props.hitAppUseCase({ useCase: 'apply-loan' })
                      props.history.push({pathname: '/apply-loan'})
                      }}>
                      
                <a href="#" className="button">Apply Loan</a>
                </Link>
                <Link onClick={()=>{
                      props.hitAppUseCase({ useCase: 'pay-rent' })
                      props.history.push({pathname: '/pay-rent'})
                      }}>
                 <a href="#" className="button">Pay Rent</a>
                 </Link>
                 </div>
              
            </div>
        </div>
        <nav role='navigation'>
            <div id="menuToggle">
                <input type="checkbox"/>
                <span></span> <span></span> <span></span>
                <ul id="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="#media">Media</a></li>
                    <li><a href="#about-us">About us</a></li>
                    <li><a href="#corporate">Corporate</a></li>
                    <li><a href="#how-we-work">How we work</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact-us">Contact us</a></li>
                    <li><a href="#join-us">Join us</a></li>
                    <li><a href="#nbfc">Our NBFC Partners</a></li>
                    <li><a href="#advance-salary-loan">Advance Salary Loan</a></li>
                    <li><a href="#loans-for-low-salary">Loan For Low Salary</a></li>
                    <li><a href="#short-term-loans">Short Term Cash Loans</a></li>
                </ul>
            </div>
        </nav>
    </header>
</div>



<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <div class="container">
                <div class="row align-items-center pb-3">
                    <div class="col col-md-6 p-t-40"><img class="img-fluid" alt="CIBIL" src={CibilImg}/></div>
                    <div class="col col-md-6">
                        <div class="p-l-30">
                            <h3 class="heading3"><span class="col-sky">CIBIL</span> Score & Report</h3>
                            <h3 class="heading3"><span class="col-orange">ABSOLUTELY FREE </span></h3>
                            <a href="#" class="button-large m-t-40">Get CIBIL report</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-item black-bg p-b-30">
            <div class="container">
                <div class="row align-items-center pb-3 text-center">
                    <div class="col col-md-12 p-t-20 animate__animated animate__slideInDown">
                    <img class="img-fluid" alt="CIBIL" src={saltlogo}/>
                    </div>
                    <div class="col col-md-12">
                        <h3 class="heading2 p-t-20 animate__animated animate__slideInDown white-color">Use as much as
                            you need
                        </h3>
                        <a href="#" class="button-blue m-t-40 animate__animated animate__slideInUp">Know More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="banner">
    <div class="container">
        <div class="row align-items-center">
            <div class="col col-md-6">
                <h3 class="heading1">Get Instant Loan Approval</h3>
                <h3 class="heading2"> Personal Loan upto 2 Lacs with Small Processing Fees</h3>
                <p class="para-13">No more financial crunch. Payme India gives you the amount of loan you require,
                    anytime-anywhere</p>
                {/* <div class="clearfix">
                    <a href="#" class="button-gray"><img alt="CIBIL" src="images/ios.png"/> Google Play
                    </a>
                    <a href="#" class="button-gray"><img alt="CIBIL" src="images/android.png"/> App Store</a>
                </div> */}
            </div>
            <div class="col col-md-6 m-t-40">
                <div class="price-box">
                    <form class="form-horizontal form-pricing" role="form">
                        <div class="price-slider">
                            <h4>How much cash do you need?</h4>
                            <div class="relative">
                                <div id="slider"></div>
                            </div>
                        </div>
                        <div class="price-slider">
                            <h4>For how long?</h4>
                            <div class="relative">
                                <div id="slider2"></div>
                            </div>
                        </div>
                        <p class="text"><span id="amount-label1"></span> over a period of <span
                                id="duration-label1"></span> months at a rate of 16.7%, Processing Fee: 400.00</p>
                        <div class="price-form">
                            <div class="form-group1">
                                <label for="total" class="col-sm-12 control-label">TOTAL AMOUNT &#8377;</label>
                                <div class="col-sm-12">
                                    <input type="hidden" id="total" class="form-control"/>
                                    <p class="price lead" id="total-label"></p>
                                    <span class="price"></span>
                                </div>
                            </div>
                            <div class="form-group1">
                                <label for="duration" class="col-sm-12 control-label">INTEREST &#8377;</label>
                                <div class="col-sm-12">
                                    <input type="hidden" id="duration" class="form-control"/>
                                    <p class="price lead" id="duration-label"></p>
                                </div>
                            </div>
                            <div class="form-group1">
                                <label for="amount" class="col-sm-12 control-label">REPAYMENT &#8377; </label>
                                <div class="col-sm-12">
                                    <input type="hidden" id="amount" class="form-control"/>
                                    <p class="price lead" id="amount-label"></p>
                                    <span class="price"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row p-t-40">
                            <div class="col-sm-12">
                            <Link  onClick={()=>{
                      props.hitAppUseCase({ useCase: 'apply-loan' })
                      props.history.push({pathname: '/apply-loan'})
                      }}>
                            <a href="#" class="button-gray">Apply Loan</a>
                            </Link>
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
</div>
<div class="loan-features">
    <div class="container">
        <div class="col col-md-12 reg-second-heading">
            <h4>Benefits of Payme India</h4>
            <span class="reg-second-subheading">If access to money is holding you back, were here to help</span>
        </div>
        <div class="row align-items-center">
            <div class="col col-md-6">
                <div class="farmer text-center"><img src={appIcon} class="farmer-img" alt="app"/></div>
            </div>
            <div class="col col-md-6">
                <div class="row">
                    <div class="col col-md-6 ">
                        <div class="credit-history feature-box">
                            <div class="content-box"><img src={loginImg} alt="Easy Login"/>
                                <h4>Easy Login</h4>
                                <p>Walk a mile in few steps with unique mobile app based login process</p>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-6 ">
                        <div class="instant-approval feature-box feature-box2">
                            <div class="content-box"><img src={assementImg} alt="Accurate Assessment"/>
                                <h4>Accurate Assessment</h4>
                                <p>You are valuable. Know your true worth.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row p-t-30">
                    <div class="col col-md-6">
                        <div class="convinient-repayment feature-box feature-box3">
                            <div class="content-box"><img src={aprovedImg} alt="Swift Approval"/>
                                <h4>Swift Approval</h4>
                                <p>You will never be in queue again</p>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-6">
                        <div class="credit-history feature-box feature-box4">
                            <div class="content-box">
                            
                            <img  alt="Instant Cash"/>
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
<div class="services">
    <div class="container">
        <div class="col col-md-12 reg-second-heading">
            <h4>Services</h4>
            <span class="reg-second-subheading">Best services we have provided</span>
        </div>
        <div class="row align-items-center">
            <div id="boxlink0" class="boxlink">
                <div class="container">
                    <div class="row align-items-center pb-3">
                        <div class="col col-md-6 text-center main-img"><img alt="CIBIL" src={serviceImg}/> <img
                                id="boxlink1" class="boxlink" alt="CIBIL" /> <img
                                id="boxlink2" class="boxlink" alt="CIBIL" src={advisoryImg}/></div>
                        <div class="col col-md-6">
                            <a id="link0" class="product-link active"> <img alt="CIBIL" src={shortImg}/>
                                <h3 class="heading3">Short Term Loans</h3>
                                <p> A loan provided to a salaried individual for 2 - 24 months.</p>
                            </a>
                            <a id="link1" class="product-link product-link1"> <img alt="CIBIL"
                                                                                   src={corporateImg}/>
                                <h3 class="heading3">Corporate Loans</h3>
                                <p>When the existing businesses or industrial houses need to generate funds.</p>
                            </a>
                            <a id="link2" class="product-link product-link2"> <img alt="CIBIL"
                                                                                   src={advisoryImg}/>
                                <h3 class="heading3">Loan Advisory</h3>
                                <p>Business Lending for Independent Advisors - Get expert guidance on Conventional.</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid px-3 px-sm-5 text-center testimonial">
    <div class="col col-md-12 reg-second-heading">
        <h4>Testimonials</h4>
        <span class="reg-second-subheading">Our Success Stories</span>
    </div>
    <div class="owl-carousel owl-theme">
        <div class="item first prev text-left">
            <div class="card  py-3 px-4">
                <div class="">
                    <div class="profile-pic float-left"><img src={userIcon} class="img-fluid"/></div>
                    <h6>Aghilesh Nair</h6>
                    <span>(Bengaluru)</span>
                </div>
                <p class="content mb-5 mx-2 pt-3">Now That's what I call a Service... Ignoring the fact that there were
                    couple of days delay in disbursal, what I love is the way they personalized my concern. A gentleman
                    named Mahesh called me up and made sure the disbursal happened.
                    He was very professional and sounded very eager to help. I recommend this to everyone.</p>
            </div>
        </div>
        <div class="item show text-left">
            <div class="card  py-3 px-4">
                <div class="">
                    <div class="profile-pic float-left"><img src={userIcon} class="img-fluid"/></div>
                    <h6>Sakar Verma</h6>
                    <span>(New Delhi)</span>
                </div>
                <p class="content mb-5 mx-2 pt-3">Excellent service Best service ever. I needed some money for medical
                    purpose and they made it quick and easy for me. I was in touch with Mr Vishal who is very
                    professional and got the job done quickly. The support staff is very courteous
                    and the transfer of money is lightening fast and easy documentation as well. Looking forward for
                    continued business. Thank you team Payme India.</p>
            </div>
        </div>
        <div class="item next text-left">
            <div class="card  py-3 px-4">
                <div class="">
                    <div class="profile-pic float-left"><img src={userIcon} class="img-fluid"/></div>
                    <h6>Nasrin Jahan</h6>
                    <span>(New Delhi)</span>
                </div>
                <p class="content mb-5 mx-2 pt-3">Needed moneyy It was a miracle for me that Payme India approved my
                    loan and disbursed the amount. I was not aware of it they took the cheque from my doorstep. I wasn't
                    sure about the loan. However my loan was approved and I was intimated
                    via mail. It was a great help. I would recommend them to others as well.</p>
            </div>
        </div>
        <div class="item next text-left">
            <div class="card  py-3 px-4">
                <div class="">
                    <div class="profile-pic float-left"><img src={userIcon} class="img-fluid"/></div>
                    <h6>Vikram Singh</h6>
                    <span>(New Delhi)</span>
                </div>
                <p class="content mb-5 mx-2 pt-3">Quick and easy service to fulfill short term cash needs, I got my
                    loan disbursed on second day itself and on timely payment I got higher eligibility for next loan.
                    Repayment was easy by NetBanking. The most important thing is the
                    highly competitive interest rates as compared to many other flexi loans available in India online.
                    Highly recommended..</p>
            </div>
        </div>
        <div class="item last text-left">
            <div class="card  py-3 px-4">
                <div class="">
                    <div class="profile-pic float-left"><img src={userIcon} class="img-fluid"/></div>
                    <h6>Ranjeeta Naik</h6>
                    <span>(Mumbai)</span>
                </div>
                <p class="content mb-5 mx-2 pt-3">Very fast service If anyone in urgently need in money then dont waste
                    your time in anywhere for cash loan. Just register with paymeindia and get a loan. Team is
                    supportive and provide very fast service.</p>
            </div>
        </div>
    </div>
</div>
<div class="float-full how-it-works">
    <div class="container">
        <div class="row align-items-center">
            <div class="col col-md-12 reg-second-heading">
                <h4>How Payme Works</h4>
                <span class="reg-second-subheading">Apply for loan</span>
            </div>
            <div class="row">
                <div class="col col-md-4 home-steps"><img class="icon" src={register}
                                                          alt="Registration and Login"/>
                    <div class="red-arrow hidden-xs"></div>
                    <div class="red-arrow-bottom hidden-xs"></div>
                    <div class="home-steps-in">
                        <div class="steps-heading"><strong>Registration and Login</strong></div>
                        <p>Register online with your email id and mobile no. to get instant approval for upto Rs.2
                            lacs</p>
                    </div>
                </div>
                <div class="col col-md-4 home-steps"><img class="icon" src={uploadImg}
                                                          alt="Upload Document Swiftly"/>
                    <div class="red-arrow hidden-xs"></div>
                    <div class="red-arrow-bottom hidden-xs"></div>
                    <div class="home-steps-in">
                        <div class="steps-heading"><strong>Upload Document Swiftly</strong></div>
                        <p>Uploading Documents. I have a hard copy of my document, how can I upload it? One of the
                            easiest ways.
                        </p>
                    </div>
                </div>
                <div class="col col-md-4 home-steps"><img class="icon" src={eligibilityImg} alt="Check Eligibility"/>
                    <div class="home-steps-in">
                        <div class="steps-heading"><strong>Check Eligibility</strong></div>
                        <p>the fact of having the necessary qualities or satisfying the necessary conditions: I'll have
                            to check her eligibility to take part.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-md-4 home-steps"><img class="icon" src={promptImg}  alt="Prompt Verification"/>
                    <div class="red-arrow hidden-xs"></div>
                    <div class="red-arrow-bottom hidden-xs"></div>
                    <div class="home-steps-in">
                        <div class="steps-heading"><strong>Prompt Verification</strong></div>
                        <p>We recommend Google prompts instead of text message (SMS) verification codes to help you:
                            Avoid phone.
                        </p>
                    </div>
                </div>
                <div class="col col-md-4 home-steps"><img class="icon" src={instantFund} alt="instant"/>
                    <div class="red-arrow hidden-xs"></div>
                    <div class="red-arrow-bottom hidden-xs"></div>
                    <div class="home-steps-in">
                        <div class="steps-heading"><strong>Instant Fund Transfer</strong></div>
                        <p>Instant Money Transfer (IMT) is an innovative domestic service that allows you to send cash
                            to a receiver
                        </p>
                    </div>
                </div>
                <div class="col col-md-4 home-steps"><img class="icon" src={easyRepay} alt="easy-repay"/>
                    <div class="home-steps-in">
                        <div class="steps-heading"><strong>Easy Repayment</strong></div>
                        <p>Repayment is the act of paying back money borrowed from a lender in accordance with a
                            loan's.</p>
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
    return {
    }
  }
  
  
  const dispatchToProps = { hitAppUseCase };
  
  export default connect(mapStateToProps, dispatchToProps)(HomePage)
