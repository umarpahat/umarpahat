import React, { useState, useEffect } from "react";
import { hitAppUseCase } from "../store/modules/userDetails/actions";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import Loader from "../component/Loader";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Header from "./Header";
import "../../src/home.css";
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
import InstantCash from "../images/svg/instant-icon.svg";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import MetaTags from "react-meta-tags";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import {CarouselPic} from "../component/carousel";
import {Cibil} from "../component/Cibil";
import {Benefits} from "../component/Benefits";
import {Services} from "../component/Services";
import {GetLoanStep} from "../component/GetLoanStep";
import {Products} from "../component/Products";
import {CorValue} from "../component/CorValue";
import {Users} from "../component/Users";
import {Blogs} from "../component/Blogs";
import {Videos} from "../component/Videos";
import {Whatsup} from "../component/Whatsup";
import Footer from "./Footer";
import googlePay from "../images/svg/google-play.svg";
import appStore from "../images/svg/app-store.svg";
const cookies = new Cookies();

toast.configure();
const options = {
  position: "top-center",
  autoClose: 2000,
  limit: 1,
  closeButton: false,
};
const HomePage = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {},
    margin: {
      height: theme.spacing(3),
    },
  }));
  const classes = useStyles();
  let [loader, setloader] = useState(false);
  const [amount, setAmount] = useState(0);
  const [time, setTime] = useState(0);
  const [successcibilreport,setsuccesscibilreport]=useState(props.location.state?.success)


  
  const notify = (err) => {
    toast.success(successcibilreport, { ...options });
    window.history.replaceState(null, '')
  };



  useEffect(() => {
    notify();
  }, []);

  const handleSliderChange = (event, newValue) => {
    setAmount(newValue);
  };

  const handleInputChange = (event) => {
    if (event.target.value > 200000) {
      setAmount(200000);
    } else {
      setAmount(event.target.value === "" ? "" : Number(event.target.value));
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
    let pfee = Math.round(amount / 20);

    const result = Math.round(
      amount * ((roi * (1 + roi) ** time) / ((1 + roi) ** time - 1))
    );

    $("#interest").text(36);
    $("#interestId").text(result);
    $("#roi").text(roi);
    $("#pfee").text(pfee);
    $("#amountInput").val(pfee);
    let repay = time * result;
    $("#repayment").text(repay);
    $("#roi2").text(36);

    return result;
  }


  return (
    <>
      <MetaTags>
        <title>
          Instant Personal Loans Online | Small Personal Loans - PayMe India
        </title>
        <meta
          name="description"
          content="Instant personal loans online at an attractive interest rates.
		Apply small personal loans and get your loan approve instantly. Download PayMe India app now!!"
        />
        <meta
          name="keyword"
          content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"
        />
        <meta
          property="og:title"
          content="Instant Personal Loans Online | Small Personal Loans - PayMe India"
        />
      </MetaTags>
      <Header {...props} active="home" />
      <div className="content">
        <CarouselPic/>
        <Cibil/>
        <Benefits/>
        <Services/>
        <GetLoanStep/>
        <Products/>
        <div className="clearfix light-bg p-b-30">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-6">
                <h1 className="heading1">Calculate your Loan EMI for better planning</h1>
                <p className="heading6">
                  Personal Loan EMI calculator is a valuable online automatic tool to determine how much will be your
                  EMI (Equated Monthly Installment) expenses. <br/>
                  The personal loan calculator helps you instantly calculate your pay-outs and, therefore, plan your
                  loan and repayment better. All you need to do is enter the loan amount, and select the tenure of your
                  loan. The online calculator will provide you with the answer in a split second!
                </p>
                <br/>
                <br/>
                <Link className="btnLarge" target='_blank'
                      to={{pathname: 'https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'}}>
                  Get App Now
                </Link>
              </div>
              <div className="col-sm-12 col-md-1 ">&nbsp;</div>
              <div className="col-sm-12 col-md-5 m-t-40 p-b-30">
                <div className="price-box">
                  <form className="form-horizontal form-pricing" role="form">
                    <h4>EMI Calculator</h4>
                    <div className="relative">
                      <div className="totalAmount">
                        ₹ <span id="interestId"></span>
                      </div>
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
                      <div className="relative">
                        <span className="rupeesIcon">₹</span>
                        <input
                            className="down-payment"
                            type="number"
                            value={amount}
                            onChange={handleInputChange}
                        />
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
                    <span className="text" style={{fontSize: "16px", fontWeight: 400}}>
                      <span id="total-amount1"></span> over a period of{" "}
                      <span id="duration-month"></span> months at a rate of{" "}
                      <span id="roi2"></span>%, Processing Fee:
                      <span id="pfee"></span>
                    </span>
                    <div className="price-form">
                      <div className="form-group1">
                        <label
                            htmlFor="total"
                            className="col-sm-12 control-label"
                        >
                          Amount ₹
                        </label>
                        <div className="col-sm-12">
                          <input
                              type="hidden"
                              value={handleResult()}
                              className="form-control"
                          />
                          <p className="price lead" id="total-amount"></p>
                          <span className="price"></span>
                        </div>
                      </div>
                      <div className="form-group1">
                        <label
                            htmlFor="duration"
                            className="col-sm-12 control-label"
                        >
                          Intrest %
                        </label>
                        <div className="col-sm-12">
                          <input
                              type="hidden"
                              id="duration"
                              className="form-control"
                          />
                          <p className="price lead" id="interest"></p>
                        </div>
                      </div>
                      <div className="form-group1">
                        <label
                            htmlFor="repaymentamount"
                            className="col-sm-12 control-label"
                        >
                          Repayment ₹
                        </label>
                        <div className="col-sm-12">
                          <input
                            type="hidden"
                            id="repaymentamount"
                            className="form-control"
                          />
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
        <CorValue/>
        <Users/>

        {/*<div className="float-full how-it-works">
          <div className="container">
            <div className="row align-items-center">
              <div className="col col-md-12 reg-second-heading">
                <h4>How to get started</h4>
              </div>
              <div className="steps">
                <div className="home-steps relative">
                  <div>
                    <img
                      className="icon"
                      src={register}
                      alt="Create an account"
                    />
                  </div>
                  <div className="home-steps-in">
                    <h5 className="steps-heading">Create an account</h5>
                    <p>Sign up to the App. Fill in the basic details.</p>
                  </div>
                </div>
                <div className="home-steps relative">
                  <div>
                    <img
                      className="icon"
                      src={uploadImg}
                      alt="Get your KYC done"
                    />
                  </div>
                  <div className="home-steps-in">
                    <h5 className="steps-heading">Get your KYC done</h5>
                    <p>
                      Upload your Aadhaar and Pan details for an instant loan.
                    </p>
                  </div>
                </div>

                <div className="home-steps relative">
                  <div>
                    <img
                      className="icon"
                      src={promptImg}
                      alt="Provide Bank details"
                    />
                  </div>
                  <div className="home-steps-in">
                    <h5 className="steps-heading">Provide Bank details</h5>
                    <p>
                      Provide Bank account details and bank statement to
                      facilitate the disbursement.
                    </p>
                  </div>
                </div>

                <div className="home-steps relative">
                  <div>
                    <img
                      className="icon"
                      src={easyRepay}
                      alt="Get boost limit & benefits"
                    />
                  </div>
                  <div className="home-steps-in">
                    <h5 className="steps-heading">
                      Get boost limit & benefits
                    </h5>
                    <p>Provide your Salary slip and get a boost limit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>*/}
        <Whatsup {...props}/>
        <Blogs/>
        <Videos/>
        <div className="container-fluid px-3 px-sm-5">
          <div className="container">
            <div className="row">
              <div className="advertise">
                <div>
                  <img src={getLoan} alt="blog" className="img-fluid" />
                </div>
                <div>
                  <h4 className="white-color">
                    Get Instant Loan and Unlimited Offers
                  </h4>
                </div>
                <div>
                  <Link to="/apply-loan" className="green-btn">
                    Apply Now
                  </Link>
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

const mapStateToProps = (state) => {
  return {};
};

const dispatchToProps = { hitAppUseCase };

export default connect(mapStateToProps, dispatchToProps)(HomePage);
