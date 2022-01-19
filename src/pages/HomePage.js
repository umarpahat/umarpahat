import React, { useState, useEffect } from "react";
import { hitAppUseCase } from "../store/modules/userDetails/actions";
import { connect } from "react-redux";
// import "./ApplyNowButton/Applybtnallcomponent.css";
import Header from "./Header";
import "../../src/home.css";
// import getLoan from "../images/svg/get-loan-pic.svg";
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
import {S3_IMAGES_URL} from "../constant";
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
      {/*  <CarouselPic/>*/}
       {/* <Cibil/>
        <Benefits/>
        <Services/>
        <GetLoanStep/>
        <Products/>

        <Users/>
        <Whatsup {...props}/>
        <Blogs/>
        <Videos/>*/}
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="advertise">
                <div>
                  <img  src={S3_IMAGES_URL+'/svg/get-loan-pic.svg'} alt="blog" className="img-fluid" />
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
