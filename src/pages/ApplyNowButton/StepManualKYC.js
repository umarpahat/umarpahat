import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import {
  hitAllUserData,
  hitEkyc,
  hitAppUseCase,
} from "../../store/modules/userDetails/actions";
import { bindActionCreators } from "redux";
import axios from "axios";
import { API_ENDPOINT } from "../../constant";
import Header from "../Header";
import Footer from "../Footer";
import Cookies from "universal-cookie";
import tip from "../../images/animated/kyc-option.gif";
import kycIcon from "../../images/svg/complete-kyc.svg";
import bankDetails from "../../images/svg/bank-details.svg";
import professionalDetails from "../../images/svg/professional-details.svg";



const cookies = new Cookies();

const StepManual = (props) => {
  const token = cookies.get("token");
  //console.log("pramodsprops", props);

  const [documentstatus, setDocumentstatus] = useState();
  const [professionalStatus, setProfessionalStatus] = useState();
  const [bankstatus, setBankstatus] = useState("");
  const [kycstatus, setKycStatus] = useState("");
  const [adhaar, setAdhaar] = useState();
  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    if (token) {
      let url = `${API_ENDPOINT}/api/get_document_status/`;
      let config = {
        headers: {
          Authorization: "Token " + token,
        },
      };
      axios
        .get(url, config)
        .then((response) => {
          console.log("manual",response)
          //console.log("step",response.data.data[0])
          setDocumentstatus(response.data.data[0]);
          setProfessionalStatus(
            response.data.data[0].professional_details_verified
          );
          setBankstatus(response.data.data[0].bank_details_verified);
          setKycStatus(response.data.data[0].kyc_verified);
          //console.log("stepmanual", response.data.data[0]);
        })
        .catch((err) => {
          if (err?.response?.status === 401) {
            cookies.remove("token", { path: "/" });
            props.history.push("/");
          }
          //console.log(err);
        });
    }
  }, []);


    (kycstatus === "VERIFIED" || kycstatus === "PENDING_VERIFICATION") &&
    (bankstatus === "VERIFIED" || bankstatus === "PENDING_VERIFICATION") &&
    (professionalStatus === "VERIFIED" || professionalStatus === "PENDING_VERIFICATION")? props.history.push("/congratulations"):null;

    return (
      <>
        <Header {...props} />
        <div className="content darkBg">
              <Container>
                <div className="row">
                  <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                    <br />
                    <a
                      className="back-arrow"
                      onClick={(e) => {
                        props.history.goBack();
                      }}
                    >
                      Back
                    </a>
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                    <div className="contenertQuicklone">
                      <div className="slider-right-block">
                        <div className="home-contact-form">
                          <h4 className="form-heading formheadding">
                            Complete each step one by one for your manual KYC
                          </h4>

                          <div className="step">
                            <div className="step-step">
                              <div className="img-wrapper">
                                <img
                                  className="img-fluid"
                                  src={kycIcon}
                                  alt="Icon"
                                />
                              </div>
                              <div className="img-text">
                                <h6>Complete KYC</h6>
                                <p>
                                Provide your Aadhaar and Pan details.
                                </p>
                                { kycstatus === "NOT_VALID" ? (<p style={{color:"red"}} >Your Document Rejected Please Reupload</p>):null}
                              </div>
                              <div className="wrapper-button">
                                {kycstatus === "PENDING_VERIFICATION" ? (
                                  <a className="pending-button" style={{color:'#ffb84d'}}>
                                    Pending
                                  </a>
                                ) : kycstatus === "VERIFIED" ? (
                                  <a className="green-button" >
                                    Verified
                                  </a>
                                ) :  (
                                
                                <a
                                  className="green-button"
                                  href=""
                                  onClick={(e) => {
                                    props.history.push("/kycoption");
                                  }}
                                >
                              
                                  Continue
                                </a>)}
                              </div>
                            </div>
                            <div className="step-step">
                              <div className="img-wrapper">
                                <img
                                  className="img-fluid"
                                  src={bankDetails}
                                  alt="Icon"
                                />
                              </div>
                              <div className="img-text">
                                <h6>Bank Details</h6>
                                <p>Upload your latest bank statement and bank details.</p>
                                { bankstatus === "NOT_VALID" ? (<p style={{color:"red"}} >Your Document Rejected Please Reupload</p>):null}
                              </div>
                              <div className="wrapper-button">
                                {bankstatus === "VERIFIED" ? (
                                  <a className="green-button" >
                                    Verified
                                  </a>
                                ) : bankstatus === "PENDING_VERIFICATION" ? (
                                  <a className="pending-button" style={{color:'#ffb84d'}}>
                                  Pending
                                </a>
                                ) : kycstatus === "PENDING_VERIFICATION" ||
                                  kycstatus === "VERIFIED" || bankstatus==="NOT_VALID" ? (
                                  
                                  <a
                                    className="green-button"
                                    href=""
                                    onClick={(e) => {
                                      props.history.push("/bank-details-payme");
                                    }}
                                  >
                                
                                    Continue
                                  </a>
                                ) : (
                                  <a  className="green-button" href=""  onClick={(e) => {
                                    props.history.push("/bank-details-payme");
                                  }}>
                                    Continue
                                  </a>
                                )}
                              </div>
                            </div>
                            <div className="step-step">
                              <div className="img-wrapper">
                                <img
                                  className="img-fluid"
                                  src={professionalDetails}
                                  alt="Icon"
                                />
                              </div>
                              <div className="img-text">
                                <h6>Professional Details</h6>
                                <p>
                                  Provide your Salary slip and office details.
                                </p>
                                { professionalStatus === "NOT_VALID" ? (<p style={{color:"red"}} >Your Document Rejected Please Reupload</p>):null}
                              </div>
                              <div className="wrapper-button">
                                {professionalStatus === "VERIFIED" ? (
                                  <a className="green-button" >
                                    Verified
                                  </a>
                                ) : professionalStatus ===
                                  "PENDING_VERIFICATION" ? (
                                    <a className="pending-button" style={{color:'#ffb84d'}}>
                                    Pending
                                  </a>
                                ) : bankstatus === "PENDING_VERIFICATION" ||
                                  bankstatus === "VERIFIED" || professionalStatus==="NOT_VALID" ? (
                                  <a
                                    className="green-button"
                                    href=""
                                    onClick={(e) => {
                                      props.history.push("/professional-details-payme");
                                    }}
                                  >
                                    Continue
                                  </a>
                                ) : (
                                  <a className="disbled-button" href="">
                                    Continue
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                    <div className="height100">
                      <div>
                        <div className="circle-half">
                          <div className="full-circle">
                            <img src={tip} className="img-fluid"  style={{maxWidth:100}}  alt="Tips" />
                          </div>
                          <div className="full-text text-left">
                            <h5>Tips</h5>
                            <p>Complete the hassle-free paperless process to fulfill the mandatory KYC requirements.</p>
                          </div>
                        </div>
                        <div className="circle-half">
                          <p className="p-a-10">EKYC helps in processing the loan application instantly.</p>
                        </div>
                        <div className="circle-half">
                          <p className="p-a-10">Make sure that the image uploaded is not blurred. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
        </div>
        <Footer/>
      </>
    );
};

const mapStateToProps = (state) => {
  return {
    token: state.authDetails.token,
    phoneNumber: state.authDetails.phone_number,
    user: state.user.userData,
    useCase: state.user.useCase,
    ekycData: state.ekycData,
  };
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // hitLogin,
      hitAllUserData,
      hitEkyc,
      hitAppUseCase,
      // hitForgotMpin,
    },
    dispatch
  );
};

export default connect(mapStateToProps, dispatchToProps)(StepManual);
