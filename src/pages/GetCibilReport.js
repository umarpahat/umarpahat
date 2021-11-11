import React, { useState, useEffect } from "react";
import { hitAppUseCase } from "../store/modules/userDetails/actions";
import { connect } from "react-redux";
import { Accordion, Card, Container } from "react-bootstrap";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Header from "./Header";
import "../../src/home.css";
import MetaTags from "react-meta-tags";
import Cookies from "universal-cookie";

const cookies = new Cookies();

import { Link } from "react-router-dom";
import { API_ENDPOINT, API_ENDPOINT_SAARTHI } from "../constant";
import cibiLogo from "../images/svg/cibiLogo.svg";
import instantLoan from "../images/svg/instant-loan.svg";
import axios from "axios";
import { toast } from "react-toastify";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

toast.configure();
const options = {
  position: "top-right",
  autoClose: 6000,
  limit: 1,
  closeButton: false,
};
const GetCibilReport = (props) => {
  const [nameerr, setNameerr] = useState("");
  const [toastToggle, setToastToggle] = useState("");
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

  // let url = "";
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
    console.log("data", data);
    axios
      .post(url, data)
      .then((response) => {
        if (response.data.Status === "Failure") {
          toast.error("something went wrong", ...{ options });
        }
        if (response.data.Status === "Success") {
          handleCunsumerAsset();
          return;
        } else {
          handleQuestions();
        }

        console.log("cibil", response);
      })
      .catch(function (error) {
        console.log(error);
        let error = error;
        console.log(error)
        toast.error(error, ...{ options });
      });
  };
  console.log(answer, answerKey, questionKey, ConfigGUID);
  const handleQuestions = () => {
    let url = "https://cibil.paymeindia.in/v1/questions";
    let data = {
      ClientKey: clientKey,
    };

    axios
      .post(url, data)
      .then((response) => {
        setDialog(true);

        if (
          response.data.GetAuthenticationQuestionsSuccess.IVStatus === "Success"
        ) {
          handleCunsumerAsset();
        } else {
          handleClickToOpen();
        }

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
      .catch(function (error) {
        console.log(error);
      });
  };
  const [otperr, setOtperr] = useState("");

  const handleVerificationAnswer = () => {
    if (otp.length !== 6) {
      setOtperr("otp must be 6 digits");
      return;
    }
    console.log(
      questionKey,
      answerKey,
      question,
      ConfigGUID,
      resendEligible,
      skipable,
      lastQuestion
    );
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
    console.log("verify", data);
    axios
      .post(url, data)
      .then((response) => {
        toast.success(response.IVStatus, ...{ options });
        if (response.IVStatus === "Success") {
          handleCunsumerAsset();
        }

        console.log("cibil verification", response);
        handleToClose();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleResend = () => {
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

    console.log("resend", data);
    axios
      .post(url, data)
      .then((response) => {
        handleQuestions();
        console.log("handleresend", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleSkip = () => {
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

    console.log("resend", data);
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
    };
    console.log("data", data);
    axios
      .post(url, data)
      .then((response) => {
        toast.success("Your cibil cibil report has been send to your Email");
        console.log("cibil", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header {...props} active="payrent" />
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
                  <h3 className="heading5">just now, and improve your score</h3>
                  <p className="heading6">
                    Illo harum eius aut quis nobis quo autem aperiam. Nesciunt
                    unde aut nihil sapiente aut. Voluptate ad magnam quia itaque
                    nesciunt iusto aspernatur.as deleniti.
                  </p>
                  <br />
                  <br />
                  <Link
                    className="btnLarge"
                    onClick={() => {
                      props.hitAppUseCase({ useCase: "apply-loan" });
                      props.history.push({ pathname: "/apply-loan" });
                    }}
                  >
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
                          alt="Civbil"
                          src={cibiLogo}
                        />
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-sm-12 col-md-6">
                        <h5 className="heading5" style={{ textAlign: "left" }}>
                          Gender
                        </h5>
                        <div className="form-group">
                          <input
                            type="radio"
                            id="Male"
                            name="registration"
                            onChange={(e) => {
                              setGender("Male");
                              setGendererr("");
                            }}
                            value="Male"
                          />
                          <label
                            style={{ marginLeft: "4px" }}
                            htmlFor="register"
                          >
                            Male
                          </label>
                          <input
                            type="radio"
                            id="others"
                            name="registration"
                            defaultChecked="true"
                            onChange={(e) => {
                              setGender("Female");
                              setGendererr("");
                            }}
                            value="Female"
                          />
                          <label htmlFor="register">Female</label>
                          <input
                            type="radio"
                            id="others"
                            name="registration"
                            onChange={(e) => {
                              setGender("other");
                              setGendererr("");
                            }}
                            value="Others"
                          />
                          <label htmlFor="others">Others</label>
                        </div>
                      </div>
                    </div>
                    {gendererr ? (
                      <span style={{ color: "red" }}>{gendererr}</span>
                    ) : null}
                    <div className="row align-items-center">
                      <div className="col-sm-12 col-md-6">
                        <div className="form-group ms-input-group">
                          <label className="form-label pb-2">First Name</label>
                          <input
                            name="name"
                            type="text"
                            className="form-input"
                            placeholder="Enter Full Name"
                            onChange={(e) => {
                              setNameerr("");
                              setFName(e.target.value);
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
                          <label className="form-label pb-2">Last Name</label>
                          <input
                            name="name"
                            type="text"
                            className="form-input"
                            placeholder="Enter Last Name"
                            onChange={(e) => {
                              setLnameerr("");
                              setLName(e.target.value);
                            }}
                            required=""
                          />
                          {lnameerr ? (
                            <span style={{ color: "red" }}>{lnameerr}</span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-sm-12 col-md-6">
                        <div className="form-group ms-input-group">
                          <label className="form-label pb-2">
                            Phone Number
                          </label>
                          <input
                            name="name"
                            type="number"
                            className="form-input"
                            placeholder="Enter Phone Number"
                            onChange={(e) => {
                              setPhoneerr("");
                              setPhone(e.target.value.slice(0,10));
                            }}
                            required=""
                          />
                          {phoneerr ? (
                            <span style={{ color: "red" }}>{phoneerr}</span>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div className="form-group ms-input-group">
                          <label className="form-label pb-2">PAN Number</label>
                          <input
                            name="name"
                            type="text"
                            value={pan}
                            maxLength={10}
                            className="form-input"
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
                            <span style={{ color: "green" }}>{correctpan}</span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-sm-12 col-md-6">
                        <div className="form-group ms-input-group">
                          <label className="form-label pb-2">
                            Date of birth
                          </label>
                          <input
                            name="name"
                            type="date"
                            className="form-input"
                            placeholder="DD/MM/YYYY"
                            onChange={(e) => {
                              setDate(e.target.value);
                            }}
                            required=""
                          />
                          {/* {nameerr ? (
                            <span style={{ color: "red" }}>{nameerr}</span>
                          ) : null} */}
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div className="form-group ms-input-group">
                          <label className="form-label pb-2">Email</label>
                          <input
                            name="name"
                            type="text"
                            className="form-input"
                            placeholder="Enter Email"
                            onChange={(e) => {
                              setEmailerr("");
                              setEmail(e.target.value);
                            }}
                            required=""
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
                            id="address"
                            name="registration"
                            onChange={(e) => {
                              setAddresstype("01");
                            }}
                            value="Home"
                          />
                          <label htmlFor="address">Home</label>
                          <input
                            type="radio"
                            id="address"
                            name="registration"
                            defaultChecked="true"
                            onChange={(e) => {
                              setAddresstype("02");
                            }}
                            value="Office"
                          />
                          <label htmlFor="address">Office</label>
                          <input
                            type="radio"
                            id="others"
                            name="registration"
                            onChange={(e) => {
                              setAddresstype("03");
                            }}
                            value="Other"
                          />
                          <label htmlFor="others">Other</label>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div className="form-group">
                          <label className="form-label pb-2">Postal Code</label>
                          <input
                            name="name"
                            type="number"
                            className="form-input"
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
                            className="form-input"
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
                      <div className="col-sm-12 col-md-6">
                        <div className="form-group ms-input-group">
                          <label className="form-label pb-2">
                            Street Address 2
                          </label>
                          <input
                            name="name"
                            type="text"
                            className="form-input"
                            placeholder="Enter Address Line 2"
                            onChange={(e) => {
                              setStreetSecond(e.target.value);
                            }}
                            required=""
                          />
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
                            hereby authorize Payme India to check CIBIL score &
                            report for my profile
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Dialog open={open} onClose={handleToClose}>
                    <DialogContent>
                      {question ? (
                        <DialogContentText>{question}</DialogContentText>
                      ) : null}
                      <input
                        name="name"
                        type="text"
                        className="form-input"
                        placeholder="Enter otp"
                        onChange={(e) => {
                          setOtp(e.target.value);
                        }}
                        required=""
                      />
                      {otperr ? (
                        <span style={{ color: "red" }}>{otperr}</span>
                      ) : null}
                    </DialogContent>
                    <DialogActions>
                      {resendEligible ? (
                        <Button onClick={handleResend} className="green">
                          Resend
                        </Button>
                      ) : (
                        <Button className="black" style={{ cursor: "text" }}>
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
                          style={{ cursor: "text" }}
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
    </>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const dispatchToProps = { hitAppUseCase };

export default connect(mapStateToProps, dispatchToProps)(GetCibilReport);
