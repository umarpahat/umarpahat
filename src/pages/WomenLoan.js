import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import criteria from "../images/svg/criteria.svg";
import feature from "../images/svg/feature.svg";
import women from "../images/svg/women-pic.svg";
import easy from "../images/svg/easy-online.svg";
import hassle from "../images/svg/watch.svg";
import unsecure from "../images/svg/unsecure.svg";
import shield from "../images/svg/shield.svg";
import dotshadow from "../images/svg/dot-shadow.svg";
import womenFrame from "../images/svg/women-frame.svg";
import idProof from "../images/svg/id_proof.svg";
import addressProof from "../images/svg/address_proof.svg";
import doc from "../images/svg/doc.svg";
import employeeId from "../images/svg/employee_id.svg";
import {toast} from "react-toastify";
import axios from "axios";

toast.configure();
const options = {
    position: "top-center",
    autoClose: 2000,
    limit: 1,
    closeButton: false,
};
import Header from "./Header";
import Footer from "./Footer";
import {Dialog} from "@reach/dialog";
import {hitAppUseCase} from "../store/modules/userDetails/actions";
import {connect} from "react-redux";
import instantLoan from "../images/svg/instant-banner.svg";
import googlePay from "../images/svg/google-play.svg";
import appStore from "../images/svg/app-store.svg";
import tea from "../images/Sharp-Growth.png";
import remote from "../images/Productive-Challenges.png";
import timeline from "../images/Organization-Events.png";
import centralLocation from "../images/Central-Location.png";
import health from "../images/Medical-Insurance.png";
import environment from "../images/Cool-Environment.png";

export const WomenLoan = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [topic, setTopic] = useState("");
    const [nameerr, setNameerr] = useState("");
    const [emailerr, setEmailerr] = useState("");
    const [phoneerr, setPhoneerr] = useState("");
    const [topicerr, setTopicErr] = useState("");
    const [otp, setOtp] = useState("");
    const [otperr, setOtperr] = useState("");

    let url = "";
    let reg = /^[0-9]{1,10}$/;
    let emailReg =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const getOtp = () => {


        if (name.length === 0) {
            setNameerr("Name can't be empty");
            return;
        }
        if (email.length < 5) {
            setEmailerr("Email should be at least 5 charcters long");
            return;
        }
        if (email.split("").filter((x) => x === "@").length !== 1) {
            setEmailerr("Email should contain a @");
            return;
        }
        if (email.indexOf(".") === -1) {
            setEmailerr("Email should contain at least one dot");
            return;
        }
        if (!emailReg.test(email)) {
            setEmailerr("Email id is Invalid");
            return;
        }
        if (phone.length === 0) {
            setPhoneerr("Phone can't be empty");
            return;
        }
        if (phone.length < 10) {
            setPhoneerr("Phone should be 10 digit");
            return;
        }
        if (!reg.test(phone)) {
            setPhoneerr("Phone number is Invalid");
            return;
        }

        if (topic.length === 0) {
            setTopicErr("Topic can't be empty");
            return;
        }

        url = "https://staging.paymeindia.in/api/customer-lead/customer-query/";

        let data = {
            name: name,
            email: email,
            phone: phone,
            topic: topic,
            residential_address: cityName,
        };

        axios
            .post(url, data)
            .then(function (response) {
                console.log("city", response);
            })
            .catch(function (error) {
                // toast.error(error.response.data.message, { ...options });
                console.log(error)
            });
    };
    const SubmitOtp = () => {
        if (otp === "") {
            setOtperr("Name can't be empty");
            return;
        }

        url = "https://staging.paymeindia.in/api/customer-lead/customer-query/";

        let data = {
            otp: otp,
            name: name,
            email: email,
            phone: phone,
            topic: topic,
            residential_address: cityName,
        };

        axios
            .put(url, data)
            .then(function (response) {
                console.log("confitm otp", response);
            })
            .catch(function (error) {
                toast.error(error.response.data.message, {...options});
            });
    };
    return (
        <>
            <Header/>
            <div className="banner">
                <div className="container">
                    <div className="row align-items-center ">
                        <div className="col-sm-12 col-md-5 bannerAlign">
                            <h1 className="heading1">Loans for womens</h1>
                            <p className="heading6">We are an innovative Fin-Tech organization that offers, customized
                                personal loans to the salaried women at lowest interest rates. These loans are designed
                                to meet all your financial needs.</p>
                            <br/>
                            <Link className="btnLarge" to={{
                                pathname: '/apply-loan'
                            }}>
                                Apply now
                            </Link>
                            <div className=' p-t-50'><h3 className=' p-t-30'>Get Payme App Now</h3></div>
                            <div className="social_link">

                                <div>
                                    <Link
                                        to={{pathname: 'https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'}}
                                        target={"_blank"}>
                                        <img
                                            className="img_google"
                                            src={googlePay}
                                            alt="Pay Me India"
                                        />
                                    </Link>
                                </div>
                                <div>
                                    <img
                                        className="img_google"
                                        src={appStore}
                                        alt="Pay Me India"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-2 ">
                            &nbsp;
                        </div>
                        <div className="col-sm-12 col-md-5 m-t-40">
                            <div className='p-b-30'>
                                <img className="img-fluid"
                                     alt="Instant Loan"
                                     src={womenFrame}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="document-required">
                <div className="container">
                    <div className="row p-t-20 ">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center p-t-50 p-b-30">
                            <h3 className="text-center heading4">Document Required</h3>
                        </div>
                    </div>
                    <div className="row justify-content-md-center p-t-15">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div
                                className="row justify-content-md-center"
                                style={{ marginTop: 0 }}
                            >
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <div className="document-box justify-content-md-center text-center">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img
                                                className="img-fluid"
                                                src={idProof}
                                                alt="For Identity proof"
                                            />
                                        </div>
                                        <h3>For Identity proof</h3>
                                        <p>KYC documents such as Aadhar card, voter ID, PAN card, driving license, passport, or any other valid document issued by the government.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <div className="document-box justify-content-md-center text-center">
                                        <div className=" d-flex align-items-center justify-content-center">
                                            <img
                                                className="img-fluid"
                                                src={addressProof}
                                                alt="Address proof"
                                            />
                                        </div>

                                        <h3>Address proof</h3>
                                        <p>Apart from KYC documents, you can submit utility bills, etc. as address proof.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <div className="document-box justify-content-md-center text-center">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img
                                                className="img-fluid"
                                                src={doc}
                                                alt="Financial documents"
                                            />
                                        </div>
                                        <h3>Financial documents</h3>
                                        <p>Latest bank statement for the previous 3 months</p>
                                    </div>
                                </div><div className="col-lg-3 col-md-3 col-sm-12">
                                    <div className="document-box justify-content-md-center text-center">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img
                                                className="img-fluid"
                                                src={employeeId}
                                                alt="Employment proof"
                                            />
                                        </div>
                                        <h3>Employment proof</h3>
                                        <p>Two latest salary slips.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 p-t-50">
                        <h3 className="text-center heading4">Eligibility criteria</h3>

                    </div>
                </div>
                <div className="row p-t-50 p-b-30">
                    <div className="col-md-6 col-sm-12">
                        <div className="criteria ">
                            <p>Quibusdam nobis est voluptatibus voluptatem. Deleniti sunt
                                aliquam. Totam quae eos et aut rerum maxime. Provident id non.</p>
                            <ul >
                                <li>
                                    <img className='icon-criteria' src={dotshadow} alt="Pay Me India"/>
                                    <p>The woman must be an Indian citizen </p>
                                </li>
                                <li>
                                    <img className='icon-criteria' src={dotshadow} alt="Pay Me India"/>
                                    <p>The age group must be between 21 to 58 years.</p>
                                </li>
                                <li>
                                    <img className='icon-criteria' src={dotshadow} alt="Pay Me India"/>
                                    <p>The minimum salary must be above Rs. 12,000.</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 text-center">
                        <img className="img_google" src={criteria} alt="Pay Me India"/>

                    </div>

                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-center heading4">Features</h3>

                    </div>
                </div>
                <div className="row p-t-50 p-b-30">
                    <div className="col-md-6 col-sm-12 text-center">
                        <img className="img_google" src={feature} alt="Pay Me India"/>

                    </div>
                    <div className="col-md-6 col-sm-12 ">
                        <ul className="feature ">
                            <li>

                                <img className='icon-feature' src={easy} alt="Pay Me India"/>
                                <h4>Easy Online Application</h4>
                                <p>You can start your loan application process right from the comfort of home. All you
                                    need to do is go to PayMe India's official website and apply for a Personal loan for
                                    women or Download the application.</p>
                            </li>
                            <li>

                                <img className='icon-feature' src={hassle} alt="Pay Me India"/>
                                <h4>Hassle-free loan</h4>
                                <p>You can start your loan application process right from the comfort of home. All you
                                    need to do is go to PayMe India's official website and apply for a Personal loan for
                                    women or Download the application.</p>
                            </li>
                            <li>

                                <img className='icon-feature' src={unsecure} alt="Pay Me India"/>
                                <h4>Easy Online Application</h4>
                                <p>You can start your loan application process right from the comfort of home. All you
                                    need to do is go to PayMe India's official website and apply for a Personal loan for
                                    women or Download the application.</p>
                            </li>
                            <li>

                                <img className='icon-feature' src={shield} alt="Pay Me India"/>
                                <h4>Easy Online Application</h4>
                                <p>You can start your loan application process right from the comfort of home. All you
                                    need to do is go to PayMe India's official website and apply for a Personal loan for
                                    women or Download the application.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="women-bg">
                            <img className="img_google" src={women} alt="Pay Me India"/>

                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="rightSection ">
                            <h4 className="text-center">Get Loans for womens</h4>
                            <p className="text-center">Quibusdam nobis est voluptatibus voluptatem. Deleniti sunt
                                aliquam. Totam quae eos et aut rerum maxime. Provident id non.</p>
                            <form id="form" name="form">
                                <div className="form-group ms-input-group">
                                    <label className="form-label pb-2">Full Name</label>
                                    <input
                                        name="fname"
                                        type="text"
                                        className="form-control input-field"
                                        placeholder="Enter Full Name"
                                        value={name}
                                        onChange={(e) => {
                                            setNameerr("");
                                            setName(e.target.value);
                                        }}
                                    />
                                    {nameerr ? (
                                        <span style={{color: "red", fontSize: "16px"}}>
                    {nameerr}
                  </span>
                                    ) : null}
                                </div>
                                <div className="form-group ms-input-group">
                                    <label className="form-label pb-2">Email address</label>
                                    <input
                                        name="email"
                                        type="text"
                                        className="form-control input-field"
                                        placeholder="Enter Email address"
                                        onChange={(e) => {
                                            setEmailerr("");
                                            setEmail(e.target.value);
                                        }}
                                    />
                                    {emailerr ? (
                                        <span style={{color: "red", fontSize: "16px"}}>
                    {emailerr}
                  </span>
                                    ) : null}
                                </div>
                                <div className="form-group ms-input-group">
                                    <label className="form-label pb-2">Phone Number</label>
                                    <input
                                        name="phone"
                                        type="number"
                                        className="form-control input-field"
                                        placeholder="Enter your Phone Number"
                                        value={phone}
                                        onChange={(e) => {
                                            setPhoneerr("");
                                            setPhone(e.target.value);
                                        }}
                                    />
                                    {phoneerr ? (
                                        <span style={{color: "red", fontSize: "16px"}}>
                    {phoneerr}
                  </span>
                                    ) : null}
                                </div>

                                <button
                                    type="button"
                                    className="btnLarge m-t-40"
                                    style={{
                                        display: "block",
                                        cursor: "pointer",
                                        color: "#fff",
                                    }}
                                    onClick={getOtp}
                                >
                                    Submit
                                </button>
                            </form>
                            <div
                                className="p-t-20 text-center"
                                style={{
                                    fontWeight: "bold",
                                }}
                            >
                                <p>
                                    Any Doubt?
                                    <Link
                                        to={{pathname: ""}}
                                        style={{cursor: "pointer", color: "#02C650"}}
                                    >
                                         Leave a message
                                    </Link>
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

export default connect(mapStateToProps, dispatchToProps)(WomenLoan);
