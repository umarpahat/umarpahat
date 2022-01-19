import React, { useState, useEffect } from "react";
import { hitAppUseCase } from "../store/modules/userDetails/actions";
import { connect } from "react-redux";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Header from "./Header";
import "../../src/home.css";
import getLoan from "../images/svg/get-loan-pic.svg";
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
import {Download} from "../component/Download";
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
  const [rate, setRate] = useState(0);
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

  const handleSliderChangeRate = (event, newValue) => {
    setRate(newValue);
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
  function valuetextRate(value1) {
    $("#interestId").text(rate);
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

    $("#interest").text(rate);
    $("#interestId").text(result);
    $("#roi").text(roi);
    $("#pfee").text(pfee);
    $("#amountInput").val(pfee);
    let repay = time * result;
    $("#repayment").text(repay);
    $("#roi2").text(rate);

    return result;
  }


  return (
    <>
      <MetaTags>
        <title>
          Apply for Instant Personal loan app| Quick Cash loan - Pay Me India
        </title>
        <meta name="description" content="Get a pre-approved instant personal loan online in India with the lowest interest rate. Apply for Quick Cash Loans up to 2L at PayMe India. Check your offers & eligibility now."/>
        <meta
          name="keyword"
          content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"
        />
        <meta
          property="og:title"
          content="Apply for Instant Personal loan app| Quick Cash loan - Pay Me India"
        />
      </MetaTags>
      <Header {...props} active="home" />
      <div className="content">
        <CarouselPic/>
        <Cibil/>
        <Download/>
        <Benefits/>
        <Services/>
        <GetLoanStep/>
        <Products/>
        <div className="clearfix light-bg ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-7 order-sm-2 order-md-1 re">
                <h2 className="heading2">Calculate your personal loan EMI for better planning</h2>
                <p className="heading6">
                  Personal Loan EMI calculator is a valuable online automatic tool to determine how much will be your
                  EMI (Equated Monthly Installment) expenses. <br/>
                  The personal loan calculator helps you instantly calculate your pay-outs and, therefore, plan your
                  loan and repayment better. All you need to do is enter the loan amount, and select the tenure of your
                  loan. The online calculator will provide you with the answer in a split second!
                </p>
                <Link className="btnLarge m-t-10" target='_blank'
                      to={{pathname: 'https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'}}>
                  Get App Now
                </Link>
              </div>
              <div className="col-sm-12 col-md-5 order-sm-1 order-md-2">
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
                      <h4>Interest Rate</h4>
                      <div className="relative">
                        <div className={classes.root}>
                          <Slider
                              getAriaValueText={valuetextRate}
                              aria-labelledby="discrete-slider-always"
                              step={.50}
                              max={36}
                              value={rate}
                              onChange={handleSliderChangeRate}
                              valueLabelDisplay="on"
                          />
                        </div>
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

        <Users/>
        <Whatsup {...props}/>
        <Blogs/>
        <Videos/>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="advertise">
                <div>
                  <img src={getLoan} alt="blog" className="img-fluid" />
                </div>
                <div>
                  <h4 className="white-color">
                    Refer And Earn With PayMe india
                  </h4>
                </div>
                <div>
                  <a className="green-btn" href="https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia">
                    Refer Now
                  </a>
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
