import React, {useState, useEffect} from "react";
import {hitAppUseCase} from "../store/modules/userDetails/actions";
import {connect} from "react-redux";
import {Accordion, Card, Container} from "react-bootstrap";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Header from "./Header";
import "../../src/home.css";
import MetaTags from "react-meta-tags";
import faqImg from "../images/svg/faqs.svg";
import mailBox from "../images/svg/mail-box.svg";
import starIcon from "../images/svg/creditcard.svg";
import homeIcon from "../images/svg/homeIcon.svg";
import starIconLight from "../images/svg/reward.svg";
import starIconAqua from "../images/svg/secure.svg";
import starIconGreen from "../images/svg/green-star.svg";
import {api} from "../services/api";
import Loader from "../component/Loader";
import Confirmotpmobile from "./ApplyNowButton/Confirmotpmobile";

import Cookies from "universal-cookie";

const cookies = new Cookies();

import {Link} from "react-router-dom";
import {API_ENDPOINT, API_ENDPOINT_SAARTHI} from "../constant";
import Slider from "@material-ui/core/Slider";
import scoreAnimation from "../images/animated/credit.gif";
import benefit from "../images/svg/benefit.svg";
import loginImg from "../images/svg/login-icon.svg";
import assementImg from "../images/svg/accurate-icon.svg";
import aprovedImg from "../images/svg/swift-transfer.svg";
import InstantCash from "../images/svg/instant-icon.svg";
import shortImg from "../images/svg/short-loan.svg";
import corporateImg from "../images/svg/corporate-loan.svg";
import advisoryImg from "../images/svg/advisory-loan.svg";
import userIcon from "../images/svg/user-icon.svg";
import goldStarIcon from "../images/svg/star.svg";
import register from "../images/svg/signup-icon.svg";
import uploadImg from "../images/svg/kyc-icon.svg";
import promptImg from "../images/svg/bank-doc.svg";
import easyRepay from "../images/svg/boost-icon.svg";
import blogPic from "../images/logo.png";
import getLoan from "../images/svg/get-loan-pic.svg";
import instantLoan from "../images/svg/instant-loan.svg";
import payRentLink from "../images/svg/pay-rent-link.svg";
import mutualFund from "../images/svg/matual-fund.svg";
import axios from "axios";
import {toast} from "react-toastify";

const GetCibilReport = (props) => {
    let [loader, setloader] = useState(false);
    const [toggle, setToggle] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [topic, setTopic] = useState("");
    const [nameerr, setNameerr] = useState("");
    const [emailerr, setEmailerr] = useState("");
    const [phoneerr, setPhoneerr] = useState("");
    const [topicerr, setTopicErr] = useState("");
    const [toastToggle, setToastToggle] = useState("");

    function gtag_report_conversion(url) {
        var callback = function () {
            if (typeof url != "undefined") {
                window.location = url;
            }
        };
        gtag("event", "conversion", {
            send_to: "AW-10789488789/9sIvCMnf5vsCEJWR6pgo",
            event_callback: callback,
        });
        return false;
    }

    let url = "";
    let reg = /^[0-9]{1,10}$/;
    let emailReg =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const postVolunteer = () => {
        gtag_report_conversion("https://www.paymeindia.in/social-initiative");

        if (name.length === 0) {
            setNameerr("Name can't be empty");
            return false;
        }
        if (email.length < 5) {
            setEmailerr("Email should be at least 5 charcters long");
            return false;
        }
        if (email.split("").filter((x) => x === "@").length !== 1) {
            setEmailerr("Email should contain a @");
            return false;
        }
        if (email.indexOf(".") === -1) {
            setEmailerr("Email should contain at least one dot");
            return false;
        }
        if (!emailReg.test(email)) {
            setEmailerr("Email id is Invalid");
            return false;
        }

        if (phone.length === 0) {
            setPhoneerr("Phone can't be empty");
            return false;
        }
        if (phone.length < 10) {
            setPhoneerr("Phone should be 10 digit");
            return false;
        }

        if (!reg.test(phone)) {
            setPhoneerr("Phone number is Invalid");
            return false;
        }

        if (topic.length === 0) {
            setTopicErr("Topic can't be empty");
            return false;
        }

        if (toggle === "true") {
            url = `${API_ENDPOINT_SAARTHI}/api/register-volunteer`;
        } else {
            url = `${API_ENDPOINT_SAARTHI}/api/register-trainee`;
        }
        let data = {
            name: name,
            email: email,
            phone: phone,
            topic: topic,
        };

        let config = {
            headers: {
                Authorization: "Token " + props.token,
            },
        };

        axios
            .post(url, data, config)
            .then(function (response) {
                if (toastToggle === "") {
                    toast.success("Thank you for registering");
                    setToastToggle("2");
                }
                document.getElementById("form").reset();
            })
            .catch(function (error) {
                if (toastToggle === "") {
                    toast.error(error.response.data.message);
                    setToastToggle("2");
                }
            });
    };

    return (
        <>
            <Header {...props} active="payrent"/>
            <>
                <MetaTags>
                    <title>Frequently Asked Questions - PayMeIndia</title>
                    <meta
                        name="description"
                        content="Do you have questions about how the loan app works? Frequently asked questions for all
			loan related queries - PayMeIndia."
                    />
                    <meta
                        name="keyword"
                        content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"
                    />
                    <meta
                        property="og:title"
                        content="Frequently Asked Questions - PayMeIndia"
                    />
                </MetaTags>
                <div className='content'>
                    <div className="banner">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-sm-12 col-md-5">
                                    <h1 className="heading1">Get your Credit Score</h1>
                                    <h3 className="heading5">just now, and improve your score</h3>
                                    <p className="heading6">Illo harum eius aut quis nobis quo autem aperiam. Nesciunt
                                        unde aut nihil sapiente aut. Voluptate ad magnam quia itaque nesciunt iusto
                                        aspernatur.as deleniti.</p>
                                    <br/>
                                    <br/>
                                    <Link className="btnLarge" onClick={() => {
                                        props.hitAppUseCase({useCase: 'apply-loan'})
                                        props.history.push({pathname: '/apply-loan'})
                                    }}>
                                        Apply now
                                    </Link>
                                </div>
                                <div className="col-sm-12 col-md-2 ">
                                    &nbsp;
                                </div>
                                <div className="col-sm-12 col-md-5 m-t-40">
                                    <img className="img-fluid scoreAnimate"
                                         alt="Instant Loan"
                                         src={instantLoan}/>
                                </div>
                            </div>
                            <form id="form" name="form">
                                <div
                                    className="form-block-form mt-4"
                                    style={{maxWidth: 800, margin: "auto"}}
                                >
                                    <h4 className="form-heading" style={{textAlign:'left'}}>
                                        Personal Details
                                    </h4>

                                    <div className="form-block">

                                    <div className="row align-items-center">
                                    <div className="col-sm-12 col-md-6">

                                        <h5 className="heading5" style={{textAlign:'left'}}>
                                            Gender
                                        </h5>
                                        <div className="form-group">
                                            <input
                                                type="radio"
                                                id="volunteer"
                                                name="registration"
                                                /*    onChange={(e) => {
                                                      setToggle("true");
                                                    }}*/
                                                value="Male"
                                            />
                                            <label htmlFor="volunteer">Male</label>
                                            <input
                                                type="radio"
                                                id="register"
                                                name="registration"
                                                defaultChecked="true"
                                                /*   onChange={(e) => {
                                                     setToggle("false");
                                                   }}*/
                                                value="Female"
                                            />
                                            <label htmlFor="register">Female</label>
                                            <input
                                                type="radio"
                                                id="others"
                                                name="registration"
                                                /*   onChange={(e) => {
                                                     setToggle("false");
                                                   }}*/
                                                value="Others"
                                            />
                                            <label htmlFor="others">Others</label>
                                        </div>
                                    </div>
                                </div>


                                <div className="row align-items-center">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group ms-input-group">
                                            <label className="form-label pb-2">Your Full Name</label>
                                            <input
                                                name="name"
                                                type="text"
                                                className="form-input"
                                                placeholder="enter full name"
                                                /*  onChange={(e) => {
                                                    setName(e.target.value);
                                                    setNameerr("");
                                                  }}*/
                                                required=""
                                            />
                                            {nameerr ? (
                                                <span style={{color: "red"}}>{nameerr}</span>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group ms-input-group">
                                            <label className="form-label pb-2">Phone Number</label>
                                            <input
                                                name="name"
                                                type="text"
                                                className="form-input"
                                                placeholder="enter phone number"
                                                /*  onChange={(e) => {
                                                    setName(e.target.value);
                                                    setNameerr("");
                                                  }}*/
                                                required=""
                                            />
                                            {nameerr ? (
                                                <span style={{color: "red"}}>{nameerr}</span>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group ms-input-group">
                                            <label className="form-label pb-2">PAN Number</label>
                                            <input
                                                name="name"
                                                type="text"
                                                className="form-input"
                                                placeholder="enter PAN Number"
                                                /*  onChange={(e) => {
                                                    setName(e.target.value);
                                                    setNameerr("");
                                                  }}*/
                                                required=""
                                            />
                                            {nameerr ? (
                                                <span style={{color: "red"}}>{nameerr}</span>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group ms-input-group">
                                            <label className="form-label pb-2">Email</label>
                                            <input
                                                name="name"
                                                type="text"
                                                className="form-input"
                                                placeholder="enter email"
                                                /*  onChange={(e) => {
                                                    setName(e.target.value);
                                                    setNameerr("");
                                                  }}*/
                                                required=""
                                            />
                                            {nameerr ? (
                                                <span style={{color: "red"}}>{nameerr}</span>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group ms-input-group">
                                            <label className="form-label pb-2">Date of birth</label>
                                            <input
                                                name="name"
                                                type="text"
                                                className="form-input"
                                                placeholder="DD/MM/YYYY"
                                                /*  onChange={(e) => {
                                                    setName(e.target.value);
                                                    setNameerr("");
                                                  }}*/
                                                required=""
                                            />
                                            {nameerr ? (
                                                <span style={{color: "red"}}>{nameerr}</span>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group ms-input-group">
                                            <label className="form-label pb-2">Email</label>
                                            <input
                                                name="name"
                                                type="text"
                                                className="form-input"
                                                placeholder="enter email"
                                                /*  onChange={(e) => {
                                                    setName(e.target.value);
                                                    setNameerr("");
                                                  }}*/
                                                required=""
                                            />
                                            {nameerr ? (
                                                <span style={{color: "red"}}>{nameerr}</span>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                                <h4 className="form-heading" style={{textAlign:'left', paddingTop:30}}>
                                    Address Details
                                </h4>
                                <div className="row align-items-center">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group ms-input-group">
                                            <input
                                                type="radio"
                                                id="volunteer"
                                                name="registration"
                                                /*    onChange={(e) => {
                                                      setToggle("true");
                                                    }}*/
                                                value="Home"
                                            />
                                            <label htmlFor="volunteer">Home</label>
                                            <input
                                                type="radio"
                                                id="register"
                                                name="registration"
                                                defaultChecked="true"
                                                /*   onChange={(e) => {
                                                     setToggle("false");
                                                   }}*/
                                                value="Office"
                                            />
                                            <label htmlFor="register">Office</label>
                                            <input
                                                type="radio"
                                                id="others"
                                                name="registration"
                                                /*   onChange={(e) => {
                                                     setToggle("false");
                                                   }}*/
                                                value="Other"
                                            />
                                            <label htmlFor="others">Other</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6"><div className="form-group">
                                        <label className="form-label pb-2">Postal Code</label>
                                        <input
                                            name="name"
                                            type="text"
                                            className="form-input"
                                            placeholder="Enter "
                                            /*  onChange={(e) => {
                                                setName(e.target.value);
                                                setNameerr("");
                                              }}*/
                                            required=""
                                        />
                                        {nameerr ? (
                                            <span style={{color: "red"}}>{nameerr}</span>
                                        ) : null}
                                    </div></div>
                                </div>

                                <div className="row align-items-center">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group ms-input-group">
                                            <label className="form-label pb-2">Street Address 1</label>
                                            <input
                                                name="name"
                                                type="text"
                                                className="form-input"
                                                placeholder="enter address line 1"
                                                /*  onChange={(e) => {
                                                    setName(e.target.value);
                                                    setNameerr("");
                                                  }}*/
                                                required=""
                                            />
                                            {nameerr ? (
                                                <span style={{color: "red"}}>{nameerr}</span>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group ms-input-group">
                                            <label className="form-label pb-2">Street Address 2</label>
                                            <input
                                                name="name"
                                                type="text"
                                                className="form-input"
                                                placeholder="enter address line 2"
                                                /*  onChange={(e) => {
                                                    setName(e.target.value);
                                                    setNameerr("");
                                                  }}*/
                                                required=""
                                            />
                                            {nameerr ? (
                                                <span style={{color: "red"}}>{nameerr}</span>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>

                                        <div className="row align-items-center">
                                            <div className="col-sm-12 col-md-12">
                                                <div className="form-group">
                                                    <input
                                                        type="checkbox"
                                                        id="checkbox"
                                                        name="checkbox"
                                                    />
                                                    <label htmlFor="checkbox" style={{display:'inline', paddingLeft:10, fontSize:11}}>I accept the Terms & Conditions of TU CIBIL and hereby authorize Payme India to check CIBIL score & report for my profile</label>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-sm-12 col-md-12 text-center p-t-20">
                                            <input
                                                name="topic"
                                                type="button"
                                                className="btnLarge "
                                                value="Download credit Report"
                                                onClick={postVolunteer}
                                            />
                                        </div>

                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
};
const mapStateToProps = (state) => {
    return {};
};

const dispatchToProps = {hitAppUseCase};

export default connect(mapStateToProps, dispatchToProps)(GetCibilReport);
