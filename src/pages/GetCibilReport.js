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
  autoClose: 6000,
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
  const [addresstype, setAddresstype] = useState("01");
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
  const [title, setTitle] = useState("");
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
        .then(() => {
          document.getElementById("pincode").classList.remove("error");
        })
        .catch((err) => {
          document.getElementById("pincode").className = "error";
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
    if (lname.length === 0) {
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

    if (pincode.length === 0) {
      setPinCodeerr("Pin Code can't be empty");
      return false;
    }
    if (street.length === 0) {
      setAddresserr("Address Cant be empty");
      return;
    }
    if (streetSecond.length === 0) {
      setSecondaddresserr("Address can't be empty");
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
        }
        if (response.data.Status === "Success") {
          handleCunsumerAsset();
          return;
        } else {
          handleQuestions();
        }
      })
      .catch((error) => {
        let err = error.response.data.Message;

        toast.error(err, { ...options });
      });
  };

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
      });
  };
  const [otperr, setOtperr] = useState("");

  const handleVerificationAnswer = () => {
    setLoader(true);
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

    axios
      .post(url, data)
      .then((response) => {
        setLoader(false);
        if (response.data.IVStatus === "Success") {
          handleCunsumerAsset();
        }

        handleToClose();
      })
      .catch(function (error) {
        console.log(error);
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
    setLoader(true);
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

    axios
      .post(url, data)
      .then((response) => {
        handleQuestions();
        console.log("handleSkip", response);
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
        toast.success("Your cibil cibil report has been send to your Email", {
          ...options,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const [name,setName]=useState()
  const splitName = (value) => {
    setName(value)
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
  };

  const responseGoogleFail = (res) => {
    console.log("fail login ", res);
  };

  return (
    <>
      <Header {...props}/>

      {!loader ? (
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
          <div className="content">
            <div className="banner">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-sm-12 col-md-5">
                    <h1 className="heading1">Get your Credit Score</h1>
                    <h3 className="heading5">
                      just now, and improve your score
                    </h3>
                    <p className="heading6">
                      Illo harum eius aut quis nobis quo autem aperiam. Nesciunt
                      unde aut nihil sapiente aut. Voluptate ad magnam quia
                      itaque nesciunt iusto aspernatur.as deleniti.
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
                              type="radio"
                              className="others"
                              name="gender"
                              defaultChecked="true"
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
                          </div>
                        </div>
                      </div>
                      {gendererr ? (
                        <span style={{ color: "red" }}>{gendererr}</span>
                      ) : null}
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
                                if (
                                  e.target.value.match(/^[A-Za-z{" "}]+$/)
                                ) {
                                  splitName(e.target.value);
                                } else if (e.target.value.length === 0) {
                                  splitName(e.target.value);
                                }
                              }}
                               
                                
                              
                              required=""
                            />
                            {nameerr ? (
                              <span style={{ color: "red" }}>{nameerr}</span>
                            ) : null}
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <div className="form-group ms-input-group">
                            <label className="form-label pb-2">
                              Phone Number
                            </label>
                            <input
                              
                              type="number"
                              className="cibil_input"
                              placeholder="Enter Phone Number"
                              onChange={(event) => {
                                setPhoneerr("");
                                setPhone(event.target.value.slice(0, 10));
                              }}
                              required=""
                            />
                            {phoneerr ? (
                              <span style={{ color: "red" }}>{phoneerr}</span>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                          <div className="form-group ms-input-group">
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
                              <span style={{ color: "red" }}>{panerr}</span>
                            ) : null}
                            {correctpan ? (
                              <span style={{ color: "green" }}>
                                {correctpan}
                              </span>
                            ) : null}
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <div className="form-group ms-input-group">
                            <label className="form-label pb-2">
                              Date of birth
                            </label>
                            <input
                              name="name"
                              type="date"
                              className="cibil_input"
                              placeholder="DD/MM/YYYY"
                              onChange={(e) => {
                                setDate(e.target.value);
                              }}
                              required=""
                            />
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
                              type="number"
                              maxLength={6}
                              className="cibil_input"
                              placeholder="Enter Pin Code"
                              onChange={(e) => {
                                setPinCodeerr("");
                                handlePinCode(e.target.value.slice(0, 6));
                                setPin(e.target.value.slice(0, 6));
                              }}
                              required=""
                            />
                            {pincodeerr ? (
                              <span style={{ color: "red" }}>{pincodeerr}</span>
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
                            disabled={renderProps.disabled}
                          />
                        )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogleFail}
                        cookiePolicy={"single_host_origin"}
                      />
                            {emailerr ? (
                              <span style={{ color: "red" }}>{emailerr}</span>
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
                              type="radio"
                              className="others"
                              name="registration"
                              onChange={(e) => {
                                setAddresstype("01");
                              }}
                              value="Home"
                            />
                            <label className="m-r-15" htmlFor="address">
                              Home
                            </label>
                            <input
                              type="radio"
                              className="others"
                              name="registration"
                              defaultChecked="true"
                              onChange={(e) => {
                                setAddresstype("02");
                              }}
                              value="Office"
                            />
                            <label className="m-r-15" htmlFor="address">
                              Office
                            </label>
                            <input
                              type="radio"
                              className="others"
                              name="registration"
                              onChange={(e) => {
                                setAddresstype("03");
                              }}
                              value="Other"
                            />
                            <label className="m-r-15" htmlFor="others">
                              Other
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <div className="form-group">
                            <label className="form-label pb-2">
                              Street Address 1
                            </label>
                            <input
                              name="name"
                              type="text"
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
                              <span style={{ color: "red" }}>{addresserr}</span>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                          <div className="form-group ms-input-group">
                            <label className="form-label pb-2">
                              Street Address 2
                            </label>
                            <input
                             maxLength={120}
                              name="name"
                              type="text"
                              className="cibil_input"
                              placeholder="Enter Address Line 2"
                              onChange={(e) => {
                                setStreetSecond(e.target.value);
                                setSecondaddresserr("");
                              }}
                              required=""
                            />
                            {secondaddresserr ? (
                              <span style={{ color: "red" }}>
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
                              type="checkbox"
                              id="checkbox"
                              name="checkbox"
                              onChange={(e) => {
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
                          </div>
                        </div>
                      </div>
                    </div>

                    <Dialog open={open} onClose={handleToClose}>
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
                            style={{ width: "110%" }}
                            className="cibil_input"
                            placeholder="Enter Alternate Mobile Number"
                            onChange={(e) => {
                              setOtp(e.target.value);
                            }}
                            required=""
                          />
                        ) : (
                          <input
                            name="name"
                            type="text"
                            className="cibil_input"
                            placeholder="Enter otp"
                            onChange={(e) => {
                              setOtp(e.target.value);
                            }}
                            required=""
                          />
                        )}
                        {otperr ? (
                          <span style={{ color: "red" }}>{otperr}</span>
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
                          autoFocus
                        >
                          Submit
                        </Button>
                        {skipable ? (
                          <Button
                            onClick={handleSkip}
                            className="green"
                            autoFocus
                          >
                            Skip
                          </Button>
                        ) : (
                          <Button
                            className="black"
                            style={{ cursor: "not-allowed" }}
                            autoFocus
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
