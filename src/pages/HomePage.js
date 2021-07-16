import React, {useState, useEffect} from "react";
import {hitAppUseCase} from '../store/modules/userDetails/actions';
import {connect} from 'react-redux'
import {Container} from "react-bootstrap";
import Loader from '../component/Loader'
import "./ApplyNowButton/Applybtnallcomponent.css";
import Footer from "./Footer";
import Header from "./Header";
//import Slider1 from "./Slider";
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
import {Link} from "react-router-dom"
import {makeStyles} from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import {propTypes} from "react-bootstrap/esm/Image";

const HomePage = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {

        },
        margin: {
            height: theme.spacing(3),
        },
    }));
    const classes = useStyles();
    let [loader, setloader] = useState(false);
    const [amount, setAmount] = useState(0);
    const [time, setTime] = useState(0);
    const [result, setResult] = useState("");
    const [rateofinterest, setrateofinterest] = useState(0.01);
    
    function getProcessFees(amount) {
        if (amount < 500){
           return 100
        } else if (amount >= 500 && amount <1000){
           return 100
        } else if (amount >= 1000 && amount <3000){
           return 150
        } else if (amount >= 3000 && amount <10000){
           return 300
        } else if (amount >= 10000 && amount <15000){
           return 400
        } else if (amount >= 15000 && amount <20000){
           return 500
        } else if (amount >= 20000 && amount <25000){
           return 600
        } else if (amount >= 25000 && amount <30000){
           return 750
        } else if (amount >= 30000 && amount <35000){
           return 900
        } else if (amount >= 35000 && amount <40000){
           return 1050
        } else if (amount >= 40000 && amount <45000){
           return 1200
        } else if (amount >= 45000 && amount <50000){
           return 1350
        } else if (amount >= 50000 && amount <55000){
           return 1500
        } else if (amount >= 55000 && amount <60000){
           return 1650
        } else if (amount >= 60000 && amount <65000){
           return 1800
        } else if (amount >= 65000 && amount <70000){
           return 1950
        } else if (amount >= 70000 && amount <75000){
           return 2100
        } else if (amount >= 75000 && amount <80000){
           return 2250
        } else if (amount >= 80000 && amount <85000){
           return 2400
        } else if (amount >= 85000 && amount <90000){
           return 2550
        } else if (amount >= 90000 && amount <95000){
           return 2700
        } else if (amount >= 95000 && amount <100000){
           return 2850
        } else if (amount >= 100000 && amount <105000){
           return 3000
        } else if (amount >= 105000 && amount <110000){
           return 3150
        } else if (amount >= 110000 && amount <115000){
           return 3300
        } else if (amount >= 115000 && amount <120000){
           return 3450
        } else if (amount >= 120000 && amount <125000){
           return 3600
        } else if (amount >= 125000 && amount <130000){
           return 3750
        } else if (amount >= 130000 && amount <135000){
           return 3900
        } else if (amount >= 135000 && amount <140000){
           return 4050
        } else if (amount >= 140000 && amount <145000){
           return 4200
        } else if (amount >= 145000 && amount <150000){
           return 4350
        } else if (amount >= 150000 && amount <155000){
           return 4500
        } else if (amount >= 155000 && amount <160000){
           return 4650
        } else if (amount >= 160000 && amount <165000){
           return 4800
        } else if (amount >= 165000 && amount <170000){
           return 4950
        } else if (amount >= 170000 && amount <175000){
           return 5100
        } else if (amount >= 175000 && amount <180000){
           return 5250
        } else if (amount >= 180000 && amount <185000){
           return 5400
        } else if (amount >= 185000 && amount <190000){
           return 5550
        } else if (amount >= 190000 && amount <195000){
           return 5700
        } else if (amount >= 195000 && amount <200000){
           return 5850
        } else if (amount >= 200000 && amount <205000){
           return 6000
        }
    }


    function valuetext(value1) {
        setAmount(value1);
        $("#total-amount1").text(amount);
        $("#total-amount").text(amount);
        console.log(amount)
    }

    function valuetext2(value2) {
        setTime(value2);
        $("#duration-month").text(time);
    }

    function handleResult() {
        let roi = Number(0.03);
        let pfee = getProcessFees(amount) 

        console.log(roi, amount, time)
        const result =
            Math.round(((amount * (((0.03)*((1.03)**time))/(((1.03)**time)-1)))*time) - amount);
        $('#interest').text(result)
        $('#roi').text(roi)
        $('#pfee').text(pfee)
        let repay = result + amount + pfee;
        $('#repayment').text(repay);
        return result;
    }


    return (
        <> <Header {...props}/>
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
                                            <h3 className="heading3"><span className="col-sky">CIBIL</span> Score &
                                                Report
                                            </h3>
                                            <h3 className="heading3"><span
                                                className="col-orange">ABSOLUTELY FREE </span>
                                            </h3>
                                            <a href='https://cibil.paymeindia.in/v1/fullfill_offer_form' target='_blank' className="button-large m-t-40">Download Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item black-bg p-b-30">
                            <div className="container">
                                <div className="row align-items-center pb-3 text-center">
                                    <div className="col-sm-12 col-md-12 p-t-20 animate__animated animate__slideInDown">
                                        <img className="img-fluid svg-text" alt="CIBIL" src={saltlogo}/>
                                    </div>
                                    <div className="col-sm-12 col-md-12">
                                        <h3 className="heading2 animate__animated animate__slideInDown white-color">Use
                                            as
                                            much as
                                            you need
                                        </h3>
                                        <Link to='/'
                                              className="button-blue m-t-40 animate__animated animate__slideInUp">Coming
                                            Soon </Link>
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
                                <p className="no-more-text">No more financial crunch. PayMe India gives you the amount of
                                    loan
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
                                                <div className={classes.root}>
                                                    <Slider
                                                        defaultValue={0}
                                                        getAriaValueText={valuetext}
                                                        aria-labelledby="discrete-slider-always"
                                                        step={500}
                                                        min={500}
                                                        max={200000}
                                                        valueLabelDisplay="on"
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="price-slider">
                                            <h4>For how long?(Months)</h4>
                                            <div className="relative">
                                                <div className={classes.root}>
                                                    <Slider
                                                        defaultValue={0}
                                                        getAriaValueText={valuetext2}
                                                        aria-labelledby="discrete-slider-always"
                                                        step={1}
                                                        min={2}
                                                        max={24}
                                                        valueLabelDisplay="on"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text"><span id="total-amount1"></span> over a period of <span
                                            id="duration-month"></span> months at a rate of <span id="roi"></span>%, Processing Fee:
                                             <span id="pfee"></span>
                                        </p>
                                        <div className="price-form">
                                            <div className="form-group1">
                                                <label htmlFor="total" className="col-sm-12 control-label">
                                                    AMOUNT &#8377;</label>
                                                <div className="col-sm-12">
                                                    <input type="hidden" value={handleResult()}
                                                           className="form-control"/>
                                                    <p className="price lead" id="total-amount"></p>
                                                    <span className="price"></span>
                                                </div>
                                            </div>
                                            <div className="form-group1">
                                                <label htmlFor="duration"
                                                       className="col-sm-12 control-label">INTEREST &#8377;</label>
                                                <div className="col-sm-12">
                                                    <input type="hidden" id="duration" className="form-control"/>
                                                    <p className="price lead" id="interest"></p>
                                                    {/*<input type="text" value={handleResult()}/>*/}
                                                </div>
                                            </div>
                                            <div className="form-group1">
                                                <label htmlFor="repaymentamount"
                                                       className="col-sm-12 control-label">REPAYMENT &#8377; </label>
                                                <div className="col-sm-12">
                                                    <input type="hidden" id="repaymentamount" className="form-control"/>
                                                    <p className="price lead" id="repayment"></p>
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
                            <h4>Benefits of PayMe India</h4>
                        </div>
                        <p className='text-center p-b-30'>PayMe India is here to endow you with an extensive range of benefits. Whether it's last-minute rent payment, utility bills or an impromptu vacation, or even flash sale online, PayMe India has a loan for all processes. Let’s get a quick sneak peek of the benefits you'll experience on your financial journey with PayMe India.</p>

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
                                                <p>Walk a mile in few steps with unique mobile app based login
                                                    process</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 p-t-30">
                                        <div className="instant-approval feature-box feature-box2">
                                            <div className="content-box"><img src={assementImg}
                                                                              alt="Accurate Assessment"/>
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
                                            <Link to='/' id="link1" className="product-link product-link1"> <img
                                                alt="CIBIL"
                                                src={corporateImg}/>
                                                <h3 className="heading3">Corporate Loans</h3>
                                                <p>When the existing businesses or industrial houses need to generate
                                                    funds.</p>
                                            </Link>
                                            <Link to='/' id="link2" className="product-link product-link2"> <img
                                                alt="CIBIL"
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
                        <h4>An experience people love to talk about</h4>
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
                                <p className="content mb-5 mx-2 pt-3">Now That's what I call a Service... Ignoring the
                                    fact
                                    that there were
                                    couple of days delay in disbursal, what I love is the way they personalized my
                                    concern.
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
                                    continued business. Thank you team PayMe India.</p>
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
                                <p className="content mb-5 mx-2 pt-3">Needed moneyy It was a miracle for me that Payme
                                    India
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
                                    loan disbursed on second day itself and on timely payment I got higher eligibility
                                    for
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
                                <p className="content mb-5 mx-2 pt-3">Very fast service If anyone in urgently need in
                                    money
                                    then dont waste
                                    your time in anywhere for cash loan. Just register with PayMe India and get a loan.
                                    Team
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
                                        <div className="steps-heading"><strong>Registration & login</strong></div>
                                        <p>Do easy registration with your email id & mobile number to get instant approval of your loan amount.</p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 home-steps"><img className="icon" src={uploadImg}
                                                                                    alt="Upload Document Swiftly"/>
                                    <div className="red-arrow hidden-xs"></div>
                                    <div className="red-arrow-bottom hidden-xs"></div>
                                    <div className="home-steps-in">
                                        <div className="steps-heading"><strong>Swiftly upload your document</strong></div>
                                        <p>Simply, upload your document via an app for credit assessment and instant loan disbursement.</p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 home-steps"><img className="icon"
                                                                                    src={eligibilityImg}
                                                                                    alt="Check Eligibility"/>
                                    <div className="home-steps-in">
                                        <div className="steps-heading"><strong>Check eligibility</strong></div>
                                        <p>Easily check eligibility by uploading the documents and the loan amount you are eligible for?</p>
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
                                        <p>We recommend Google prompts instead of text message (SMS) verification codes
                                            to
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
                                        <div className="steps-heading"><strong>Instant Fund transfer</strong></div>
                                        <p>Once your document is verified, get an instant fund transfer to your bank account.</p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 home-steps"><img className="icon" src={easyRepay}
                                                                                    alt="easy-repay"/>
                                    <div className="home-steps-in">
                                        <div className="steps-heading"><strong>Easy Repayment</strong></div>
                                        <p>PayMe India endows you with easy repayment by availing of different payment modes.</p>
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
