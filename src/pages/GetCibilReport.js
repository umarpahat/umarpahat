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
import { faPlaneArrival } from "@fortawesome/free-solid-svg-icons";

const GetCibilReport = (props) => {
   
  const [nameerr, setNameerr] = useState("");
  const [toastToggle, setToastToggle] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [lname, setLName] = useState("");
  const [fname, setFName] = useState("");
  const [date, setDate] = useState("");
  const [street, setStreet] = useState("");
  const[streetSecond,setStreetSecond]=useState("");
  const [pincode, setPin] = useState("");
  const [addresstype, setAddresstype] = useState("01");
  const [prefix, setPrefix] = useState("");
  const [gender, setGender] = useState("Male");
  const[agree,setAgree]=useState(false);
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
  const[emailerr,setEmailerr]=useState("");
  const [lnameerr,setLnameerr]=useState("");
  const [phoneerr,setPhoneerr]=useState("");

  console.log("agree",agree);
  const handlePinCode = (value) => {
    if (value.length === 6) {
      setError("");
      axios
        .get(`https://api.postalpincode.in/Pincode/${value}`)
        .then((res) => {
          console.log(res)
          setRegion(res.data[0].PostOffice[0].Region);
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
  // let reg = /^[0-9]{1,10}$/;
  // let emailReg =
  //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handleCibilReport = () => {
  //   if (fname.length === 0) {
  //     setNameerr("Name can't be empty");
  //     return false;
  //   }
  //   if(lname.length===0){
  //       setLnameerr("Last name can't empty");
  //       return false;
  //   }
  //   if (email.length < 5) {
  //     setEmailerr("Email should be at least 5 charcters long");
  //     return false;
  //   }
  //   if (email.split("").filter((x) => x === "@").length !== 1) {
  //     setEmailerr("Email should contain a @");
  //     return false;
  //   }
  //   if (email.indexOf(".") === -1) {
  //     setEmailerr("Email should contain at least one dot");
  //     return false;
  //   }
  //   if (!emailReg.test(email)) {
  //     setEmailerr("Email id is Invalid");
  //     return false;
  //   }

  //   if (phone.length === 0) {
  //     setPhoneerr("Phone can't be empty");
  //     return false;
  //   }
  //   if (phone.length < 10) {
  //     setPhoneerr("Phone should be 10 digit");
  //     return false;
  //   }

  //   if (!reg.test(phone)) {
  //     setPhoneerr("Phone number is Invalid");
  //     return false;
  //   }

  //   if (topic.length === 0) {
  //     setTopicErr("Topic can't be empty");
  //     return false;
  //   }
    let url = "https://cibil.paymeindia.in/v1/fullfilloffer";
    let data = {
    //     ClientKey: pan,
    //     Name: {
    //       Title: "SHRI",
    //       Forename: [{ name: fname }],
    //       Surname: [{ name: lname }],
    //     },
    //     IdentificationNumber: [
    //       {
    //         IdentifierName: "TaxId",
    //         Id: pan,
    //       },
    //     ],
    //     Address: {
    //       StreetAddress: [
    //         {
    //           address: street ,
    //         },
    //         {
    //           address: streetSecond,
    //         },
    //       ],
    //       City: "Surat",
    //       PostalCode: pan,
    //       Region: "24",
    //       AddressType: addresstype,
    //     },
    //     DateOfBirth: date,
    //     PhoneNumber: {
    //       Number: phone,
    //     },
    //     Email: email,
    //     Gender: gender,
    //     LegalCopyStatus: "Accept",
    //     UserConsentForDataSharing: agree,
      // ClientKey: "CQNPK2612K",
      // Name: {
      //   Title: "Mr",
      //   Forename: [{ name: "BRAJESH" }],
      //   Surname: [{ name: "KUSHWAH" }],
      // },
      // IdentificationNumber: [
      //   {
      //     IdentifierName: "TaxId",
      //     Id: "CQNPK2612K",
      //   },
      // ],
      // Address: {
      //   StreetAddress: [
      //     {
      //       address: "Shankar ka puara gaipara joura morena",
      //     },
   
      //   ],
      //   City: "gwalior",
      //   PostalCode: "476221",
      //   Region: "23",
      //   AddressType: "01",
      // },
      // DateOfBirth: "1992-10-11",
      // PhoneNumber: {
      //   Number: 8889610615,
      // },
      // Email: "pramodsinghiit2016@gmail.com",
      // Gender: "Male",
      // LegalCopyStatus: "Accept",
      // UserConsentForDataSharing: true,
      ClientKey: 9873182834,
      Name: {
        Title: "Mr",
        Forename: [{ name: "Umar" }],
        Surname: [{ name: "deen" }],
      },
      IdentificationNumber: [
        {
          IdentifierName: "TaxId",
          Id: "APMPD6568D",
        },
      ],
      Address: {
        StreetAddress: [
          {
            address: "G-595,street 13, jaitpur extenstion part 2 new delhi",
          },
   
        ],
        City: "delhi",
        PostalCode: "110044",
        Region: "07",
        AddressType: "01",
      },
      DateOfBirth: "1984-06-05",
      PhoneNumber: {
        Number: 9873182834,
      },
      Email: "umar.pahat@gmail.com",
      Gender: "Male",
      LegalCopyStatus: "Accept",
      UserConsentForDataSharing: "True",
    };
    console.log("data", data);
    axios
      .post(url, data)
      .then((response) => {
        handleQuestions();
        console.log("cibil", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(answer, answerKey, questionKey, ConfigGUID);

  const handleVerificationAnswer = () => {
    let url = "https://cibil.paymeindia.in/v1/verify_answers";
    let data = {
      ClientKey: pan,
      IVAnswer: [
        {
          questionKey: questionKey,
          answerKey: [
            {
              key: answerKey,
            },
          ],
          UserInputAnswer: answer,
          resendOTP: true,
          skipQuestion: true,
        },
      ],
      ChallengeConfigGUID: ConfigGUID,
    };
    console.log("verify", data);
    axios
      .post(url, data)
      .then((response) => {
        console.log("cibil verification", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCunsumerAsset = () => {
    let url = "https://cibil.paymeindia.in/v1/customer_assets";
    let data = {
      ClientKey: "FVNPS9940R",
    };
    console.log("data", data);
    axios
      .post(url, data)
      .then((response) => {
        console.log("cibil", response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
                            id="volunteer"
                            name="registration"
                             onClick={(e) => {
                                                      setGender("true");
                                                    }}
                            value="Male"
                          />
                          <label htmlFor="volunteer">Male</label>
                          <input
                            type="radio"
                            id="register"
                            name="registration"
                            defaultChecked="true"
                              onClick={(e) => {
                                                     setGender("false");}}
                                                   
                            value="Female"
                          />
                          <label htmlFor="register">Female</label>
                          <input
                            type="radio"
                            id="others"
                            name="registration"
                               onClick={(e) => {
                                                     setGender("false");}}
                                                  
                            value="Others"
                          />
                          <label htmlFor="others">Others</label>
                        </div>
                      </div>
                    </div>

                    <div className="row align-items-center">
                      <div className="col-sm-12 col-md-6">
                        <div className="form-group ms-input-group">
                          <label className="form-label pb-2">First Name</label>
                          <input
                            name="name"
                            type="text"
                            className="form-input"
                            placeholder="Enter first Name"
                            value={fname}
                            onChange={(e) => {
                              setFName(e.target.value);
                              setNameerr("");
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
                              setLName(e.target.value);
                              setLnameerr("");
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
                            value={phone}
                            onChange={(e) => {
                              setPhone(e.target.value);
                              setPhoneerr("");
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
                            className="form-input"
                            placeholder="Enter PAN Number"
                            value={pan}
                
                            onChange={(e) => {
                              setPan(e.target.value);
                              setPanerr("");
                            }}
                            required=""
                          />
                          {panerr ? (
                            <span style={{ color: "red" }}>{panerr}</span>
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
                          {nameerr ? (
                            <span style={{ color: "red" }}>{nameerr}</span>
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
                            placeholder="Enter email"
                             onChange={(e) => {
                                                    setEmail(e.target.value);
                                                    setNameerr("");
                                                  }}
                            required=""
                          />
                          {nameerr ? (
                            <span style={{ color: "red" }}>{nameerr}</span>
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
                            id="volunteer"
                            name="registration"
                               onChange={(e) => {
                                                      setAddresstype("01");
                                                    }}
                            value="Home"
                          />
                          <label htmlFor="volunteer">Home</label>
                          <input
                            type="radio"
                            id="register"
                            name="registration"
                            defaultChecked="true"
                             onChange={(e) => {
                                setAddresstype("02");
                                                   }}
                            value="Office"
                          />
                          <label htmlFor="register">Office</label>
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
                            name="number"
                            type="text"
                            className="form-input"
                            placeholder="Enter PIN code"
                            onChange={(e) => {
                              handlePinCode(e.target.value);
                                                setNameerr("");
                                              }}
                            required=""
                          />
                          {nameerr ? (
                            <span style={{ color: "red" }}>{nameerr}</span>
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
                            placeholder="Enter address line 1"
                          onChange={(e) => {
                                                    setStreet(e.target.value);
                                                    setNameerr("");
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
                            Street Address 2
                          </label>
                          <input
                            name="name"
                            type="text"
                            className="form-input"
                            placeholder="Enter address line 2"
                            value={streetSecond}
                             onChange={(e) => {
                                                    setStreetSecond(e.target.value);
                                                    setNameerr("");
                                                  }}
                            required=""
                          />
                          {nameerr ? (
                            <span style={{ color: "red" }}>{nameerr}</span>
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
                            onClick={(e)=>{
                                setAgree(!agree)
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




export default GetCibilReport;
