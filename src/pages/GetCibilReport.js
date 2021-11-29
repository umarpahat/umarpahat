import React, { useState, useEffect } from "react";
import { hitAppUseCase } from "../store/modules/userDetails/actions";
import { connect } from "react-redux";
import { Accordion, Card, Container } from "react-bootstrap";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Header from "./Header";
import "../../src/home.css";
import MetaTags from "react-meta-tags";
import Cookies from "universal-cookie";
import Loader from "../component/Loader";
import yesIcon from "../images/yes.png";
const cookies = new Cookies();

import { Link } from "react-router-dom";
import cibiLogo from "../images/svg/cibiLogo.svg";
import instantLoan from "../images/svg/instant-loan.svg";
import axios from "axios";
import { toast } from "react-toastify";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { GoogleLogin } from "react-google-login";

toast.configure();
const options = {
  position: "top-center",
  autoClose: 2000,
  limit: 1,
  closeButton: false,
};
const GetCibilReport = (props) => {
  const [nameerr, setNameerr] = useState("");
  const [toastToggle, setToastToggle] = useState("");
  const [loader, setLoader] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [lname, setLName] = useState("");
  const [fname, setFName] = useState("");
  const [date, setDate] = useState("");
  const [street, setStreet] = useState("");
  const [streetSecond, setStreetSecond] = useState("");
  const [pincode, setPin] = useState("");
  const [addresstype, setAddresstype] = useState("");
  const [addresstypeerr, setAddresstypeerr] = useState("");
  const [prefix, setPrefix] = useState("");
  const [gender, setGender] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [region, setRegion] = useState("");
  const [otp, setOtp] = useState("");
  const [questionKey, setQuestionKey] = useState("");
  const [answerKey, setAnswerKey] = useState("");
  const [answer, setAnswer] = useState(8959747704);
  const [question, setQuestion] = useState("");
  const [ConfigGUID, setConfigGUID] = useState("");
  const [pan, setPan] = useState("");
  const [panerr, setPanerr] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const [lnameerr, setLnameerr] = useState("");
  const [phoneerr, setPhoneerr] = useState("");
  const [pincodeerr, setPinCodeerr] = useState("");
  const [city, setCity] = useState("");
  const [termserr, setTermserr] = useState("");
  const [resendEligible, setResendEligible] = useState(false);
  const [skipable, setSkipable] = useState(false);
  const [lastQuestion, setLastQuestion] = useState(false);
  const [clientKey, setClientKey] = useState("");
  const [addresserr, setAddresserr] = useState("");
  const [dialog, setDialog] = useState(false);
  const [cibilFetchFail, setCibilFetchFail] = useState("");
  const [correctpan, setcorrectPan] = useState("");
  const [gendererr, setGendererr] = useState("");
  const [questiontype, setQuestionType] = useState("");
  const [counter, setCounter] = useState(0);
  const [secondaddresserr, setSecondaddresserr] = useState("");
  const [ isButtonDisabled, setIsButtonDisabled] = useState("");
  const [doberr, setDoberr] = useState("");
  // function gtag_report_conversion(url) {
  //   var callback = function() {
  //     if (typeof(url) != 'undefined') {
  //       window.location = url;
  //     }
  //   };
  //   gtag('event', 'conversion', {
  //     'send_to': 'AW-875618776/QNxsCJyg1PACENjDw6ED',
  //     'event_callback': callback
  //   });
  //   return false;
  // }
  // gtag_report_conversion("https://www.paymeindia.in/get-cibil-report");
  const GoogleCliendId =
    "435990090197-cjdhhppfhvq8e9n0cullbtco1u22mf1g.apps.googleusercontent.com";
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const handleClientKey = (value) => {
    if (value.length === 10) {
      let data = {
        Id: value,
      };
      axios
        .post(`https://cibil.paymeindia.in/v1/pan-to-client/`, data)
        .then((res) => {
          setClientKey(res.data.client_key);
        });
    }
  };
  const handlePinCode = (value) => {
  
    if (value.length === 6) {
      setError("");
      axios
        .get(`https://api.postalpincode.in/Pincode/${value}`)
        .then((res) => {
          setCity(res.data[0].PostOffice[0].Region);
          const region = res.data[0].PostOffice[0].State;

          axios
            .get(`https://cibil.paymeindia.in/v1/state-data/`)
            .then((res) => {
              setRegion(res.data[region]);

              console.log();
            })
            .catch((err) => {
              console.log(err);
            });
          console.log(res);
          setRegion(res.data[0].PostOffice[0].State);

          console.log(res);
        })

        .catch((err) => {
          setError("Invalid PIN Code");
        });
    }
    if (value.length !== 6) {
      setError("ZIP code must be of 6 digits");
    }
  };

  let url = "";
  let reg = /^[0-9]{1,10}$/;
  let emailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handleCibilReport = () => {
    if (gender.length === 0) {
      setGendererr("Please Select gender");
      return;
    }
    if (gender === "Male") {
      var forename = "Mr";
    } else {
      var forename = "Ms";
    }
    if (fname.length === 0) {
      setNameerr("Name can't be empty");
      return false;
    }
    if (!lname) {
      setLnameerr("Last name can't empty");
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
    if (correctpan.length === 0) {
      setPanerr("Please Enter correct PAN Number");
      return;
    }
    if (date === "") {
      setDoberr("Enter Date of Birth");
      return;
    }
    if (pincode.length !== 6) {
      setPinCodeerr("Please Enter 6 Digits PinCode ");
      return;
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
    if (addresstype.length === 0) {
      setAddresstypeerr("Please select Address type");
      return;
    }

    if (street.length === 0) {
      setAddresserr("Address Cant be empty");
      return;
    }
    if (streetSecond.length === 0) {
      setSecondaddresserr("Address can't be empty");
      return;
    }
    if (!agree) {
      setTermserr("Please accept term & conditions");
      return;
    }

    let url = "https://cibil.paymeindia.in/v1/fullfilloffer";
    let data = {
      ClientKey: clientKey,
      Name: {
        Title: forename,
        Forename: [{ name: fname }],
        Surname: [{ name: lname }],
      },
      IdentificationNumber: [
        {
          IdentifierName: "TaxId",
          Id: pan,
        },
      ],
      Address: {
        StreetAddress: [
          {
            address: street,
          },
          {
            address: streetSecond,
          },
        ],
        City: city,
        PostalCode: pincode,
        Region: region,
        AddressType: addresstype,
      },
      DateOfBirth: date,
      PhoneNumber: {
        Number: phone,
      },
      Email: email,
      Gender: gender,
      LegalCopyStatus: "Accept",
      UserConsentForDataSharing: agree,
    };
    setLoader(true);
    axios
      .post(url, data)
      .then((response) => {

        setLoader(false);
        if (response.data.Status === "Failure") {
          toast.error("something went wrong", { ...options });
          return;
        }
        if (response.data.Status === "Success") {
          handleCunsumerAsset();
          return;
        } else {
          handleQuestions();
        }
      })
      .catch((error) => {
        setLoader(false);
        let err = error.response.data.Message;

        toast.error(err, { ...options });
      });
  };

  const [questionlist, setQuestionlist] = useState();
  const [answerList, setAnswerList] = useState({});

  const handleQuestions = () => {
    setLoader(true);
    let url = "https://cibil.paymeindia.in/v1/questions";
    let data = {
      ClientKey: clientKey,
    };

    axios
      .post(url, data)
      .then((response) => {
        setLoader(false);
        setDialog(true);

        setCounter(59);

        if (
          response.data.GetAuthenticationQuestionsSuccess.IVStatus === "Success"
        ) {
          handleCunsumerAsset();
        } else {
          handleClickToOpen();
        }

        setAnswerList(response.data.GetAuthenticationQuestionsSuccess.question);
        setQuestionlist(
          response.data.GetAuthenticationQuestionsSuccess.question
        );
        setQuestionType(
          response.data.GetAuthenticationQuestionsSuccess.QueueName
        );
        setQuestionKey(
          response.data.GetAuthenticationQuestionsSuccess.question[0].Key
        );
        setAnswerKey(
          response.data.GetAuthenticationQuestionsSuccess.question[0]
            .AnswerChoice[0].AnswerChoiceId
        );
        setQuestion(
          response.data.GetAuthenticationQuestionsSuccess.question[0]
            .FullQuestionText
        );
        setConfigGUID(
          response.data.GetAuthenticationQuestionsSuccess.ChallengeConfigGUID
        );
        setResendEligible(
          response.data.GetAuthenticationQuestionsSuccess.question[0]
            .resendEligible
        );
        setSkipable(
          response.data.GetAuthenticationQuestionsSuccess.question[0]
            .skipEligible
        );
        setLastQuestion(
          response.data.GetAuthenticationQuestionsSuccess.question[0]
            .LastChanceQuestion
        );
      })
      .catch((error) => {
        let err = error.response.data.Message;

        toast.error(err, { ...options });
        setLoader(false);
      });
  };
  const [otperr, setOtperr] = useState("");

  const handleVerificationAnswer = () => {
    if (otp.length !== 6) {
      setOtperr("otp must be 6 digits");
      return;
    }

    let url = "https://cibil.paymeindia.in/v1/verify_answers";

    let data = {
      ClientKey: clientKey,
      IVAnswer: [
        {
          questionKey: questionKey,
          answerKey: [
            {
              key: answerKey,
            },
          ],
          UserInputAnswer: otp,
        },
      ],
      ChallengeConfigGUID: ConfigGUID,
    };
    setLoader(true);
    axios
      .post(url, data)
      .then((response) => {
        setLoader(false);
        console.log("answer", response);
        if (response.data.IVStatus === "Success") {
          handleCunsumerAsset();
        }
        if (response.data.IVStatus === "InProgress") {
          toast.error("Something went wrong", { ...options });
        }

        handleToClose();
      })
      .catch((error) => {
        console.log(error);
        let err = error.response.data.Message;

        toast.error(err, { ...options });
        setLoader(false);
      });
  };
  const handleResend = () => {
    setLoader(true);

    setOtp("");

    let url = "https://cibil.paymeindia.in/v1/verify_answers";

    let data = {
      ClientKey: clientKey,
      IVAnswer: [
        {
          questionKey: questionKey,
          answerKey: [
            {
              key: answerKey,
            },
          ],

          resendOTP: true,
        },
      ],
      ChallengeConfigGUID: ConfigGUID,
    };

    axios
      .post(url, data)
      .then((response) => {
        setLoader(false);
        handleQuestions();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleSkip = () => {
    setOtp("");
    let url = "https://cibil.paymeindia.in/v1/verify_answers";

    let data = {
      ClientKey: clientKey,
      IVAnswer: [
        {
          questionKey: questionKey,
          answerKey: [
            {
              key: answerKey,
            },
          ],
          skipQuestion: true,
        },
      ],
      ChallengeConfigGUID: ConfigGUID,
    };
    setLoader(true);
    axios
      .post(url, data)
      .then((response) => {
        if (response.data.IVStatus === "Failure") {
          toast.error("Something went wrong", { ...options });
          setLoader(false);
          return;
        } else {
          handleQuestions();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCunsumerAsset = () => {
    let url = "https://cibil.paymeindia.in/v1/customer_assets";
    let data = {
      ClientKey: clientKey,
      LegalCopyStatus: "Accept",
    };

    axios
      .post(url, data)
      .then((response) => {
        setLoader(false);
        props.history.push({ pathname: "/" , state:{success:"Your cibil cibil report has been send to your Email"}});
        
      
      })
      .catch((error) => {
        console.log(error);
        let err = error.response.data.Message;

        toast.error(err, { ...options });
        setLoader(false);
      });
  };
  const [name, setName] = useState();
  const splitName = (value) => {
    setName(value);
    let namearray = value.split(" ", 2);
    setFName(value.split(" ", 2)[0]);
    setLName(value.split(" ", 2)[1]);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  const responseGoogle = (res) => {
    setEmail(res.profileObj.email);
    toast.success("Email successfully signed in", { ...options });
    setIsButtonDisabled(true)
    setTimeout(() => setIsButtonDisabled(false), 3000);
    setEmailerr('')
  };

  const responseGoogleFail = (res) => {
    toast.error("Please login google account in your device", { ...options });
    setTimeout(() => setIsButtonDisabled(false), 3000);
  };

  return (
    <>
      <Header {...props} />

      {!loader ? (
        <>
          <MetaTags>
            <title>Get CIBIL score for Free - PayMeIndia</title>
            <meta
              name="description"
              content=""
            />
            <meta
              name="keyword"
              content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"
            />
            <meta
              property="og:title"
              content=" Get CIBIL score - PayMeIndia"
            />
          </MetaTags>
          <div className="content">
            <div className="banner">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-sm-12 col-md-5">
                    <h1 className="heading1">
                      Check your credit health report for free
                    </h1>
                    <h3 className="heading5 p-t-10">
                      Monitor your CIBIL Score to always be credit-ready
                    </h3>
                    <p className="heading6 p-t-10" >
                      Your credit score is an almost true image of your
                      creditworthiness. Higher is your Credit Score, higher are
                      chances of your loan getting approved. Get a Credit report
                      worth Rs.1500 absolutely free with PayMe India. Get a deep
                      analysis of your current credit profile.
                    </p>
                    <br />
                    <br />
                    <Link to="/apply-loan" className="btnLarge">
                      Apply now
                    </Link>
                  </div>
                  <div className="col-sm-12 col-md-2 ">&nbsp;</div>
                  <div className="col-sm-12 col-md-5 m-t-40">
                    <img
                      className="img-fluid scoreAnimate"
                      alt="Instant Loan"
                      src={instantLoan}
                    />
                  </div>
                </div>

                <form id="form" name="form">
                  <div
                    className="form-block-form mt-4"
                    style={{ maxWidth: 800, margin: "auto" }}
                  >
                    <div className="form-block">
                      <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                          <h4
                            className="form-heading"
                            style={{ textAlign: "left" }}
                          >
                            Personal Details
                          </h4>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <img
                            className="img-fluid"
                            alt="Cibil"
                            src={cibiLogo}
                          />
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                          <h5
                            className="heading5"
                            style={{ textAlign: "left" }}
                          >
                            Gender
                          </h5>
                          <div className="form-group">
                            <input
                              style={{ cursor: "pointer" }}
                              type="radio"
                              className="others"
                              name="gender"
                              onChange={(e) => {
                                setGender("Male");
                                setGendererr("");
                              }}
                              value="Male"
                            />
                            <label className="m-r-15" htmlFor="register">
                              Male
                            </label>
                            <input
                              style={{ cursor: "pointer" }}
                              type="radio"
                              className="others"
                              name="gender"
                              onChange={(e) => {
                                setGender("Female");
                                setGendererr("");
                              }}
                              value="Female"
                            />
                            <label className="m-r-15" htmlFor="register">
                              Female
                            </label>
                            <input
                              style={{ cursor: "pointer" }}
                              type="radio"
                              className="others"
                              name="gender"
                              onChange={(e) => {
                                setGender("other");
                                setGendererr("");
                              }}
                              value="Others"
                            />
                            <label className="m-r-15" htmlFor="others">
                              Others
                            </label>
                            <br />
                            {gendererr ? (
                              <span style={{ color: "red", fontSize: "16px" }}>
                                {gendererr}
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                          <div className="form-group ms-input-group">
                            <label className="form-label pb-2">Full Name</label>
                            <input
                              maxLength={60}
                              type="text"
                              className="cibil_input"
                              placeholder="Enter Full Name"
                              value={name}
                              onChange={(e) => {
                                setNameerr("");
                                setLnameerr("");
                                if (e.target.value.match(/^[A-Za-z{" "}]+$/)) {
                                  splitName(e.target.value);
                                } else if (e.target.value.length === 0) {
                                  splitName(e.target.value);
                                }
                              }}
                              required=""
                            />
                            {nameerr || lnameerr ? (
                              <>
                                <span
                                  style={{ color: "red", fontSize: "16px" }}
                                >
                                  {nameerr}{" "}
                                </span>
                                <span
                                  style={{ color: "red", fontSize: "16px" }}
                                >
                                  {lnameerr}{" "}
                                </span>
                              </>
                            ) : null}
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <div className="form-group ms-input-group">
                            <label className="form-label pb-2">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              className="cibil_input"
                              placeholder="Enter 10 digits Phone Number"
                              onChange={(event) => {
                                setPhoneerr("");

                                setPhone(
                                  event.target.value
                                    .slice(0, 10)
                                    .replace(/\D/g, "")
                                );
                              }}
                              value={phone}
                              required=""
                            />
                            {phoneerr ? (
                              <span style={{ color: "red", fontSize: "16px" }}>
                                {phoneerr}
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                          <div className="form-group ms-input-group relative">
                            <label className="form-label pb-2">
                              PAN Number
                            </label>
                            <input
                              name="pan"
                              type="text"
                              value={pan}
                              maxLength={10}
                              className="cibil_input"
                              placeholder="Enter Pan Number"
                              onChange={(e) => {
                                if (
                                  e.target.value
                                    .toUpperCase()
                                    .match(/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/)
                                ) {

                                  setcorrectPan("Correct");

                                  setPanerr("");
                                } else {
                                  setPanerr("Please input correct PAN Number");
                                  setcorrectPan("");
                                }

                                setPan(e.target.value.toUpperCase());

                                handleClientKey(e.target.value.toUpperCase());
                              }}
                              required=""
                            />

                            {panerr ? (
                              <span style={{ color: "red", fontSize: "16px" }}>
                                {panerr}
                              </span>
                            ) : null}
                            {correctpan ? (
                                <img className='yes-icon' alt='Yes icons' src={yesIcon} />
                            ) : null}

                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <div className="form-group ms-input-group">
                            <label className="form-label pb-2">
                              Date of birth
                            </label>
                            <input
                              style={{ cursor: "pointer" }}
                              name="name"
                              type="date"
                              value={date}
                              className="cibil_input"
                              placeholder="DD/MM/YYYY"
                              min="1920-01-01"
                              max="2003-01-01"
                              onChange={(e) => {
                                setDate(e.target.value);
                                setDoberr("");
                              }}
                              required=""
                            />
                            {doberr ? (
                              <span style={{ color: "red", fontSize: "16px" }}>
                                {doberr}
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                          <div className="form-group ms-input-group">
                            <label className="form-label pb-2">
                              Postal Code
                            </label>
                            <input
                              name="name"
                              type="text"
                              maxLength={6}
                              className="cibil_input"
                              placeholder="Enter Pin Code"
                              value={pincode}
                              onChange={(e) => {
                                setPinCodeerr("");
                                handlePinCode(e.target.value.slice(0, 6));
                                setPin(
                                  e.target.value.slice(0, 6).replace(/\D/g, "")
                                );
                              }}
                              required=""
                            />
                            {pincodeerr ? (
                              <span style={{ color: "red", fontSize: "16px" }}>
                                {pincodeerr}
                              </span>
                            ) : null}
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <div className="form-group ms-input-group">
                            <label className="form-label pb-2">Email</label>
                            <GoogleLogin
                              clientId={GoogleCliendId}
                              render={(renderProps) => (
                                <input
                                  onClick={renderProps.onClick}
                                  name="name"
                                  type="text"
                                  value={email}
                                  className="cibil_input"
                                  placeholder="Enter Email"
                                  required=""
                                  disabled={renderProps.disabled || isButtonDisabled}
                                />
                              )}
                              onSuccess={responseGoogle}
                              onFailure={responseGoogleFail}
                              cookiePolicy={"single_host_origin"}
                            />
                            {emailerr ? (
                              <span style={{ color: "red", fontSize: "16px" }}>
                                {emailerr}
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      <h4
                        className="form-heading"
                        style={{ textAlign: "left", paddingTop: 30 }}
                      >
                        Address Details
                      </h4>
                      <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                          <div className="form-group ms-input-group">
                            <input
                              style={{ cursor: "pointer" }}
                              type="radio"
                              className="others"
                              name="registration"
                              onChange={(e) => {
                                setAddresstype("01");
                                setAddresstypeerr("");
                              }}
                              value="Home"
                            />
                            <label className="m-r-15" htmlFor="address">
                              Home
                            </label>
                            <input
                              style={{ cursor: "pointer" }}
                              type="radio"
                              className="others"
                              name="registration"
                              onChange={(e) => {
                                setAddresstype("02");
                                setAddresstypeerr("");
                              }}
                              value="Office"
                            />
                            <label className="m-r-15" htmlFor="address">
                              Office
                            </label>
                            <input
                              style={{ cursor: "pointer" }}
                              type="radio"
                              className="others"
                              name="registration"
                              onChange={(e) => {
                                setAddresstype("03");
                                setAddresstypeerr("");
                              }}
                              value="Other"
                            />
                            <label className="m-r-15" htmlFor="others">
                              Other
                            </label>
                            <br />
                            {addresstypeerr ? (
                              <span style={{ color: "red", fontSize: "16px" }}>
                                {addresstypeerr}
                              </span>
                            ) : null}
                          </div>
                        </div>
                        </div>
                        <div className="row align-items-center">
                      <div className="col-sm-12 col-md-6">
                        <div className="form-group ms-input-group">
                            <label className="form-label pb-2">
                              Street Address 1
                            </label>
                            <input
                              name="name"
                              type="text"
                              value={street}
                              maxLength={120}
                              className="cibil_input"
                              placeholder="Enter Address Line "
                              onChange={(e) => {
                                setStreet(e.target.value);
                                setAddresserr("");
                              }}
                              required=""
                            />
                            {addresserr ? (
                              <span style={{ color: "red", fontSize: "16px" }}>
                                {addresserr}
                              </span>
                            ) : null}
                          </div>
                        </div>
                      

                      
                        <div className="col-sm-12 col-md-6">
                          <div className="form-group ms-input-group">
                            <label className="form-label pb-2">
                              Street Address 2
                            </label>
                            <input
                              maxLength={120}
                              name="name"
                              type="text"
                              value={streetSecond}
                              className="cibil_input"
                              placeholder="Enter Address Line 2"
                              onChange={(e) => {
                                setStreetSecond(e.target.value);
                                setSecondaddresserr("");
                              }}
                              required=""
                            />
                            {secondaddresserr ? (
                              <span style={{ color: "red", fontSize: "16px" }}>
                                {secondaddresserr}
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      <div className="row align-items-center">
                        <div className="col-sm-12 col-md-12">
                          <div className="form-group">
                            <input
                              style={{ cursor: "pointer" }}
                              type="checkbox"
                              id="checkbox"
                              value={agree}
                              name="checkbox"
                            defaultChecked={agree}
                              onChange={(e) => {
                                setTermserr("");
                                setAgree(!agree);
                               
                              }}
                            />
                            <label
                              htmlFor="checkbox"
                              style={{
                              display: "inline",
                              paddingLeft: 10,
                              fontSize: 11,
                              }}
                            >
                              I accept the Terms & Conditions of TU CIBIL and
                              hereby authorize Payme India to check CIBIL score
                              & report for my profile
                            </label>

                            <br />
                            {termserr ? (
                              <span style={{ color: "red", fontSize: "16px" }}>
                                {termserr}
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>

                    <Dialog
                      open={open}
                      onClose={handleToClose}
                      fullWidth={true}
                      style={{ boxSizing: 400 }}
                    >
                      <DialogContent>
                        <p style={{ textAlign: "center" }}>
                          00:{" "}
                          {counter > 9 ? (
                            <span>{counter}</span>
                          ) : (
                            <span>0{counter}</span>
                          )}
                        </p>
                        <br />
                        {question ? (
                          <DialogContentText>{question}</DialogContentText>
                        ) : null}
                        {questiontype === "OTP_AlternateEmail_Entry_Queue" ? (
                          <input
                            name="name"
                            type="text"
                            className="cibil_input"
                            placeholder="Enter Alternate Number"
                            onChange={(e) => {
                              setOtperr("");
                              setOtp(
                                e.target.value.slice(0, 10).replace(/\D/g, "")
                              );
                            }}
                            required=""
                          />
                        ) : questiontype === "IDM_KBA_Queue" ? (
                          questionlist.map(function (questiondata) {
                            <li key={ques}>
                              <DialogContentText>
                                {questiondata.FullQuestionText}
                              </DialogContentText>
                            </li>;

                            questiondata.AnswerChoice.map(function (
                              answerchoice
                            ) {
                              <select
                                className="select-item"
                                onChange={(event) => {
                                  setOtperr("");
                                  setOtp(event.target.value);
                                }}
                              >
                                {/* <option value="" hidden>
                            Select Answer
                          </option> */}

                                <option value={answerchoice.AnswerChoiceText}>
                                  {answerchoice.AnswerChoiceText}
                                </option>
                              </select>;
                            });
                          })
                        ) : (
                          <input
                            name="name"
                            type="text"
                            value={otp}
                            className="cibil_input"
                            placeholder="Enter otp"
                            onChange={(e) => {
                              setOtperr("");
                              setOtp(
                                e.target.value.slice(0, 6).replace(/\D/g, "")
                              );
                            }}
                            required=""
                          />
                        )}
                        {otperr ? (
                          <span style={{ color: "red", fontSize: "16px" }}>
                            {otperr}
                          </span>
                        ) : null}
                      </DialogContent>
                      <DialogActions>
                        {resendEligible && counter === 0 ? (
                          <Button onClick={handleResend} className="green">
                            Resend
                          </Button>
                        ) : (
                          <Button
                            className="black"
                            style={{ cursor: "not-allowed" }}
                          >
                            Resend
                          </Button>
                        )}
                        <Button
                          onClick={handleVerificationAnswer}
                          className="green"
                        >
                          Submit
                        </Button>
                        {skipable ? (
                          <Button onClick={handleSkip} className="green">
                            Skip
                          </Button>
                        ) : (
                          <Button
                            className="black"
                            style={{ cursor: "not-allowed" }}
                          >
                            Skip
                          </Button>
                        )}
                      </DialogActions>
                    </Dialog>
                    <div className="row align-items-center">
                      <div className="col-sm-12 col-md-12 text-center p-t-20">
                        <input
                          name="topic"
                          type="button"
                          className="btnLarge "
                          value="Download credit Report"
                          onClick={handleCibilReport}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const dispatchToProps = { hitAppUseCase };

export default connect(mapStateToProps, dispatchToProps)(GetCibilReport);
