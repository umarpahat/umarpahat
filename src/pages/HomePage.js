import React, {useState, useEffect} from "react";
import {hitAppUseCase} from '../store/modules/userDetails/actions';
import {connect} from 'react-redux'
import {Container} from "react-bootstrap";
import Loader from '../component/Loader'
import "./ApplyNowButton/Applybtnallcomponent.css";
import Header from "./Header";
import '../../src/home.css';
import benefit from "../images/svg/benefit.svg";
import loginImg from "../images/svg/login-icon.svg";
import getLoan from "../images/svg/get-loan-pic.svg";
import assementImg from "../images/svg/accurate-icon.svg";
import blogPic from "../images/logo.png";
import aprovedImg from "../images/svg/swift-transfer.svg";
import advisoryImg from "../images/svg/advisory-loan.svg";
import shortImg from "../images/svg/short-loan.svg";
import corporateImg from "../images/svg/corporate-loan.svg";
import goldStarIcon from "../images/svg/star.svg";
import userIcon from "../images/svg/user-icon.svg";
import register from "../images/svg/signup-icon.svg";
import uploadImg from "../images/svg/kyc-icon.svg";
import promptImg from "../images/svg/bank-doc.svg";
import easyRepay from "../images/svg/boost-icon.svg";
import scoreAnimation from "../images/animated/credit.gif";
import InstantCash from "../images/svg/instant-icon.svg"
import {Link} from "react-router-dom"
import {makeStyles} from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import MetaTags from 'react-meta-tags';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const HomePage = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {},
        margin: {
            height: theme.spacing(3),
        },
    }));
    const classes = useStyles();
    let [loader, setloader] = useState(false);
    const [amount, setAmount] = useState(500);
    const [time, setTime] = useState(0);
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        cookies.remove('token', { path: '/' })
        const url= "https://blog.paymeindia.in/?json=get_recent_posts&count=3"
        fetch(url)
            .then(res => res.json())
            .then(res => setPosts(res.posts))
            // .then(res => //console.log('umar',res.posts))
    },[])

  

    const handleSliderChange = (event, newValue) => {
       setAmount(newValue);
      };
    
      const handleInputChange = (event) => {
          if(event.target.value>200000){
              setAmount(200000)
          }
          else{
       setAmount(event.target.value === '' ? '' : Number(event.target.value));
          }
      };


    function valuetext(value1) {
        
        $("#total-amount1").text(amount);
        $("#total-amount").text(amount);
        

       
    }

    function valuetext2(value2) {
        setTime(value2);
        $("#duration-month").text(time);
    }

    function handleResult() {
        let roi = Number(0.03);
        let pfee = Math.round(amount/20);

       
        const result = Math.round(  amount * ((roi * (1 + roi) ** time) / ((1 + roi) ** time - 1)));
            
        $('#interest').text(36)
        $('#interestId').text(result)
        $('#roi').text(roi)
        $('#pfee').text(pfee)
        $('#amountInput').val(pfee)
        let repay = time*result;
        $('#repayment').text(repay);
        $('#roi2').text(36);

       
        return result;

    }
 

    return (
        <> <Header {...props} active="home"/>
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
                                <h1 className="heading1">Get Instant Loan Approval</h1>
                                <p className="no-more-text">Avail personal loan upto 2 lakhs with PayMe India. Get instant Loans anytime-anywhere</p>
                                <br/>
                                <br/>
                                <Link className="btnLarge"  to="/apply-loan">
                                    Apply now
                                </Link>
                            </div>
                            <div className="col-sm-12 col-md-1 ">
                                &nbsp;
                            </div>
                            <div className="col-sm-12 col-md-5 m-t-40">
                                <div className="price-box">
                                    <form className="form-horizontal form-pricing" role="form">
                                        <h4>EMI Calculator</h4>
                                        <div className='relative'>
                                            <div className='totalAmount'>₹ <span id='interestId'></span></div>
                                        </div>

                                        <div className="price-slider">
                                            <h4>Loan Amount</h4>
                                            <div className="relative">
                                                <div className={classes.root}>
                                                    <Slider
                                                      
                                                        getAriaValueText={valuetext}
                                                        aria-labelledby="discrete-slider-always"
                                                        step={500}
                                                        max={200000} 
                                                        value={amount}
                                                        onChange={handleSliderChange}
                                                        valueLabelDisplay="on"

                                                    />
                                                </div>
                                            </div>
                                            <div className='relative'>
                                                <span className='rupeesIcon'>₹</span>
                                                <input className='down-payment' type="number" value={amount} onChange={handleInputChange} />
                                            </div>

                                        </div>
                                        <div className="price-slider">
                                            <h4>Tenure (Months)</h4>
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
                                            id="duration-month"></span> months at a rate of <span id="roi2"></span>%,
                                            Processing Fee:
                                            <span id="pfee"></span>
                                        </p>
                                        <div className="price-form">
                                            <div className="form-group1">
                                                <label htmlFor="total" className="col-sm-12 control-label">
                                                    Amount ₹</label>
                                                <div className="col-sm-12">
                                                    <input type="hidden" value={handleResult()}
                                                           className="form-control"/>
                                                    <p className="price lead" id="total-amount"></p>
                                                    <span className="price"></span>
                                                </div>
                                            </div>
                                            <div className="form-group1">
                                                <label htmlFor="duration"
                                                       className="col-sm-12 control-label">Intrest %</label>
                                                <div className="col-sm-12">
                                                    <input type="hidden" id="duration" className="form-control"/>
                                                    <p className="price lead" id="interest"></p>

                                                </div>
                                            </div>
                                            <div className="form-group1">
                                                <label htmlFor="repaymentamount"
                                                       className="col-sm-12 control-label">Repayment ₹</label>
                                                <div className="col-sm-12">
                                                    <input type="hidden" id="repaymentamount" className="form-control"/>
                                                    <p className="price lead" id="repayment"></p>
                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel">
                    <div className="container">
                        <div className="row align-items-center pb-3">
                            <div className="col col-md-12 reg-second-heading">
                                <h4>Check Your Cibil Score Online </h4>
                            </div>
                        </div>
                        <div className="row align-items-center pb-3">
                            <div className="col-sm-12 col-md-6 p-t-40"><img className="img-fluid"
                                                                            alt="CIBIL"
                                                                            src={scoreAnimation}/></div>
                            <div className="col-sm-12 col-md-1 ">
                                &nbsp;
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <h3 className="heading3 relative"><span className='circle-small'></span> Get CIBIL Report worth Rs 1500</h3>
                                <h3 className="heading3"><span
                                    className="blue-color">Absolutely Free! </span>
                                </h3> <p className="heading6">A credit score is more than just a number. Know your Cibil score completely free with PayMe India.</p>
                                <a href="https://creditscore.paymeindia.in/" target='_blank'
                                   className="btnLarge m-t-40" style={{color:"#fff", cursor:"pointer"}}>Get CIBIL Report</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="loan-blue-benefit">
                    <div className="container">
                        <div className="col col-md-12 reg-second-heading white-color">
                            <h4>Benefits of PayMe India</h4>
                        </div>
                        <div className="row align-items-center p-t-80">
                            <div className="col-sm-12 col-md-6">
                                <div className="farmer text-center"><img src={benefit} className="farmer-img img-fluid"
                                                                         alt="App Icon"/></div>
                            </div>
                            <div className="col-sm-12 col-md-6 bg-in-mobile">
                                <p className='p-b-30  relative'>
                                    <a className='white-color' href='https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia' target='_blank'> <span className='font110'>“</span>PayMe India is a one-stop answer for your financial crunches, Benefit yourself with an in-depth range of benefits. Whether it’s shopping, planning a vacation, paying rents, or any other money requirement to satisfy your needs. PayMe India features a loan for all processes. Experience a smooth financial journey with PayMe India.<span className='font110 transform'>“</span></a></p>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="loan-features">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6">
                                <div className="farmer text-center">
                                    &nbsp;
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 p-t-30">
                                        <div className="credit-history feature-box">
                                            <div className="content-box">
                                                <div>
                                                    <img src={loginImg} alt="Easy Login"/>
                                                </div>
                                                <div>
                                                    <h4>Easy Login</h4>
                                                    <p>Walk a mile in a few steps with a unique mobile app-based login process.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 p-t-30">
                                        <div className="instant-approval feature-box feature-box2">
                                            <div className="content-box">
                                                <div><img src={assementImg}
                                                          alt="Accurate Assessment"/>
                                                </div>
                                                <div><h4>Accurate Assessment</h4>
                                                    <p>You are valuable. Know your true worth.</p>
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
                                                    <img src={aprovedImg} alt="Swift Approval"/>
                                                </div>
                                                <div><h4>Swift approval</h4>
                                                    <p>Get prompt loan approval and money in your account</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 p-t-30">
                                        <div className="credit-history feature-box feature-box4">
                                            <div className="content-box">
                                                <div>
                                                    <img src={InstantCash} alt="Instant Cash"/>
                                                </div>
                                                <div><h4>Instant Cash</h4>
                                                    <p>Don't let your dreams and wishes await cash.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix">
                    <div className="container">
                        <div className="col col-md-12 reg-second-heading ">
                            <h4 className='p-t-40'>Services we offer</h4>
                        </div>
                        <div className="container">
                            <div className="row pb-3">
                                <div className="col-sm-12 col-md-4">
                                    <Link to='/' className="product-link"> <img
                                        alt="CIBIL Short"
                                        src={shortImg}/>
                                        <h5 className="heading5">Short term loans</h5>
                                        <p>For instant money needs, get a loan at attractive interest rates.</p>
                                    </Link>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <Link to='/' id="link1" className="product-link product-link1"> <img
                                        alt="CIBIL Corporate"
                                        src={corporateImg}/>
                                        <h5 className="heading5">Corporate loans</h5>
                                        <p>Achieve new milestones in your existing business.</p>
                                    </Link>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <Link to='/' id="link2" className="product-link product-link2"> <img
                                        alt="CIBIL Advisory"
                                        src={advisoryImg}/>
                                        <h5 className="heading5">Loan Advisory</h5>
                                        <p>Business lending for an independent advisory- Get expert advice on your financial needs.</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-3 px-sm-5 testimonial p-t-40">
                    <div className="col-sm-12 col-md-12 reg-second-heading text-center">
                        <h4>Listen Our Users</h4>
                    </div>
                    <div className="container p-t-80">
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <div className="card">
                                    <div className="blog-head">
                                        <div className="profile-pic float-left"><img src={userIcon} alt='User Icon'
                                                                                     className="img-fluid"/>
                                        </div>
                                        <h6>Aghilesh Nair</h6>
                                        <span>Bengaluru</span>
                                        <div>
                                            <img src={goldStarIcon} alt='Star' className="img-fluid"/>
                                            <img src={goldStarIcon} alt='Star' className="img-fluid"/>
                                            <img src={goldStarIcon} alt='Star' className="img-fluid"/>
                                            <img src={goldStarIcon} alt='Star' className="img-fluid"/>
                                            <img src={goldStarIcon} alt='Star' className="img-fluid"/>
                                        </div>
                                    </div>
                                    <p className="content p-b-30 pt-3 px-4 ">Now That's what I call a Service...
                                        Ignoring
                                        the
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
                            <div className="col-sm-12 col-md-4">
                                <div className="card">
                                    <div className="blog-head">
                                        <div className="profile-pic float-left"><img src={userIcon} alt='User Icon'
                                                                                     className="img-fluid"/>
                                        </div>
                                        <h6>Sakar Verma</h6>
                                        <span>New Delhi</span>
                                        <div>
                                            <img src={goldStarIcon} alt='Star' className="img-fluid"/>
                                            <img src={goldStarIcon} alt='Star' className="img-fluid"/>
                                            <img src={goldStarIcon} alt='Star' className="img-fluid"/>
                                            <img src={goldStarIcon} alt='Star' className="img-fluid"/>
                                            <img src={goldStarIcon} alt='Star' className="img-fluid"/>
                                        </div>
                                    </div>
                                    <p className="content p-b-30 pt-3 px-4 ">Excellent service Best service ever. I
                                        needed
                                        some
                                        money for medical
                                        purpose and they made it quick and easy for me. I was in touch with Mr Vishal
                                        who is
                                        very
                                        professional and got the job done quickly. The support staff is very courteous
                                        and the transfer of money is lightening fast and easy documentation as well.
                                        Looking
                                        forward for
                                        continued business. Thank you team PayMe India.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <div className="card">
                                    <div className="blog-head">
                                        <div className="profile-pic float-left"><img src={userIcon} alt='User Icon'
                                                                                     className="img-fluid"/>
                                        </div>
                                        <h6>Nasrin Jahan</h6>
                                        <span>New Delhi</span>
                                        <div>
                                            <img src={goldStarIcon} alt='Star' className="img-fluid"/>
                                            <img src={goldStarIcon} alt='Star' className="img-fluid"/>
                                            <img src={goldStarIcon} alt='Star' className="img-fluid"/>
                                            <img src={goldStarIcon} alt='Star' className="img-fluid"/>
                                            <img src={goldStarIcon} alt='Star' className="img-fluid"/>
                                        </div>
                                    </div>
                                    <p className="content p-b-30 pt-3 px-4 ">Needed moneyy It was a miracle for me that
                                        Payme
                                        India
                                        approved my
                                        loan and disbursed the amount. I was not aware of it they took the cheque from
                                        my
                                        doorstep. I wasn't
                                        sure about the loan. However my loan was approved and I was intimated
                                        via mail. It was a great help. I would recommend them to others as well.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="float-full how-it-works">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col col-md-12 reg-second-heading">
                                <h4>How to get started</h4>
                            </div>
                            <div className="steps">
                                <div className="home-steps relative">
                                    <div><img className="icon" src={register}
                                              alt="Create an account"/>
                                    </div>
                                    <div className="home-steps-in">
                                        <h5 className="steps-heading">Create an account</h5>
                                        <p>Sign up to the App. Fill in the basic details.</p>
                                    </div>
                                </div>
                                <div className="home-steps relative">
                                    <div><img className="icon" src={uploadImg}
                                              alt="Get your KYC done"/>

                                    </div>
                                    <div className="home-steps-in">
                                        <h5 className="steps-heading">Get your KYC done</h5>
                                        <p>Upload your Aadhaar and Pan details for an instant loan.</p>
                                    </div>
                                </div>

                                <div className="home-steps relative">
                                    <div><img className="icon" src={promptImg}
                                              alt="Provide Bank details"/>
                                    </div>
                                    <div className="home-steps-in">
                                        <h5 className="steps-heading">Provide Bank details</h5>
                                        <p>Provide Bank account details and bank statement to facilitate the disbursement.</p>
                                    </div>
                                </div>

                                <div className="home-steps relative">
                                    <div>
                                        <img className="icon" src={easyRepay}
                                             alt="Get boost limit & benefits"/></div>
                                    <div className="home-steps-in">
                                        <h5 className="steps-heading">Get boost limit & benefits</h5>
                                        <p>Provide your Salary slip and get a boost limit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-3 px-sm-5 blog p-t-40">
                    <div className="col-sm-12 col-md-12 reg-second-heading text-center">
                        <h4>Our Blogs</h4>
                    </div>
                    <div className="container p-t-40">
                        <div className="row">


                            {
                                posts.map(post => <div className="col-sm-12 col-md-4" key={post.title}><div className="blogPic"><img src={blogPic} alt='blog' className="img-fluid"/></div><h5>{post.title} </h5><div className='line-clamp' dangerouslySetInnerHTML={ {__html: post.content} } /><a href={post.url} target='_blank' className='green-link'>Read More</a></div>)
                            }

                        </div>
                    </div>
                </div>
                <div className="container-fluid px-3 px-sm-5 p-t-40">
                    <div className="container">
                        <div className="row">
                            <div className="advertise">
                                <div>
                                    <img src={getLoan} alt='blog'
                                         className="img-fluid"/></div>
                                <div>
                                    <h4 className='white-color'>Get Instant Loan and Unlimited Offers</h4>
                                </div>
                                <div>
                                    <Link to='/apply-loan' className='green-btn'>Apply Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </>
    );
};


const mapStateToProps = state => {
    return {}
}


const dispatchToProps = {hitAppUseCase};

export default connect(mapStateToProps, dispatchToProps)(HomePage)
