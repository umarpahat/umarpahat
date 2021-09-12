import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { hitAllUserData } from "../../store/modules/userDetails/actions";
import DragbleImg from "../../component/DragbleImg";
import Righticons from "../../component/img/Righticons.png";
import Righticons1 from "../../component/img/Righticons1.png";
import Congretmessage from "../../pages/ApplyNowButton/Congretmessage";
import reloadeicon from "../../component/img/reloadeicon.png";
import Loader from "../../component/Loader";
import { API_ENDPOINT } from "../../constant";
import axios from "axios";

import Progressbar from "../../component/ProgressBar";
import Header from "../Header";
import Footer from "../Footer";
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();


const Pandingapprovalform = (props) => {
 const token = cookies.get('token')
  console.log("latest",token)
  const [documentstatus, setDocumentstatus] = useState({});
  const [userdocumentsmodel,setuserdocumentsmodel]=useState({});
  const[userbankdetail,setuserbankdetail]=useState({});
  const[professionalStatus,setProfessionalStatus]=useState("");

  useEffect(() => {
   
    if (!token) {
      props.history.push({ pathname: "/" });
    }
    // ekycCall();
    if (Object.keys(props.user).length) {
     
      setuserdocumentsmodel(props.user.userData.userdocumentsmodel);
      setuserbankdetail(
        props.user.userData.userbankdetail
         
      );
     
    }
  });

 useEffect(()=> {
   
    let url2 = `${API_ENDPOINT}/api/get_document_status/`;
    let config = {
     headers: {
       Authorization: "Token " + token,
     },
   };
   axios
     .get(url2, config)
     .then((response) => {
       
       
      setDocumentstatus(response.data.data[0]); 
      setProfessionalStatus(response.data.data[0].professional_details_verified)
      
     })
     .catch((err) => {
      if(err.response.status===401){
        cookies.remove('token', { path: '/' })
        props.history.push("/");
      }
       console.log(err);
     });

 }
 ,[]);
  return (
    <>
      <Header {...props}/>
        <div className='content darkBg' style={{paddingBottom:"90px",paddingTop:"20px"}}>
        <Container>
          <div className="form-container formcontainermob  pt-4">
            <form className='p-b-30'>
              <div className="home-contact-form mt-4">
                <h4 className="form-heading text-center">Pending Approval</h4>
                <p className="PreApprovePara">
                  Please provide the rejected documents again.
                </p>
                <div className="form-block">
                  <div>
                    <p className="form-label">Pending Approval</p>
                    <div className="classRighticons pt-3">
                      <div style={{ display: "flex" }}>
                        <div className="">
                          <img
                            src={
                             documentstatus.kyc_verified === "PENDING_VERIFICATION" 
                             || documentstatus.kyc_verified==="VERIFIED"
                                ? Righticons1
                                : Righticons
                            }
                            alt="tick-icon"
                          />
                        </div>
                        <div>
                          <p className="form-label ml-2">KYC</p>
                        </div>
                      </div>
                      {documentstatus.kyc_verified === "PENDING_VERIFICATION" ? (
                        <span
                          className="reloadicon"
                          id="PAN"
                          style={{ opacity: "0.4" ,cursor:"pointer" }}
                          onClick={() =>
                            props.history.push({
                              pathname: "/kycoption",
                            })
                          }
                        >
                          Pending KYC verification
                        </span>
                      ) : documentstatus.kyc_verified ===
                          "NOT_SUBMITTED" ||
                        documentstatus.kyc_verified ===
                          "NOT_VALID" ? (
                        <div className="reloadicon">
                          <span
                            id="PAN"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              props.history.push({
                                pathname: "/kycoption",
                              })
                            }
                          >
                            Upload Again{" "}
                            <span style={{ fontSize: "10px", color: "red" }}>
                              (Rejected)
                            </span>
                          </span>
                        </div>
                      ) : documentstatus.kyc_verified === "VERIFIED" ? (
                        <div>
                          <img src={Righticons1} alt="tick-icon" />
                          <span className="reloadicon" id="PAN">
                            {" "}
                            KYC Verified
                          </span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <div className="classRighticons">
                      <div style={{ display: "flex" }}>
                        <div className="">
                          <img
                            src={
                             documentstatus.bank_details_verified=== "VERIFIED" ||
                              documentstatus.bank_details_verified === "PENDING_VERIFICATION"
                                ? Righticons1
                                : Righticons
                            }
                            alt="tick-icon"
                          />
                        </div>
                        <div>
                          <p className="form-label ml-2">Bank Details</p>
                        </div>
                      </div>
                      {documentstatus.bank_details_verified === "PENDING_VERIFICATION" ? (
                        <span
                          className="reloadicon"
                          id="PAN"
                          style={{ opacity: "0.4",cursor: "pointer"  }}
                          onClick={() =>
                            props.history.push({
                              pathname: "/bank-details-payme",
                            })
                          }
                        >
                          {/* {" "} */}
                          Pending verification
                        </span>
                      ) : documentstatus.bank_details_verified === "NOT_SUBMITTED" ||
                      documentstatus.bank_details_verified === "NOT_VALID" ? (
                        <div className="reloadicon">
                          <span
                            id="PAN"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              props.history.push({
                                pathname: "/bank-details-payme",
                              })
                            }
                          >
                            {/* {" "} */}
                            Upload Again{" "}
                            <span style={{ fontSize: "10px", color: "red" }}>
                              (Rejected)
                            </span>
                          </span>
                        </div>
                      ) : documentstatus.bank_details_verified === "VERIFIED" ? (
                        <div>
                          <img src={Righticons1} alt='Right icon' />
                          <span className="reloadicon" id="PAN">
                            {" "}
                            Bank Details Verified
                          </span>
                        </div>
                      ) : null}
                    </div>
                    <div>
                      <div className="classRighticons">
                        <div style={{ display: "flex" }}>
                          <div className="">
                            <img
                              src={
                                documentstatus.bank_statement_verified ===
                                  "VERIFIED" ||
                                 documentstatus.bank_statement_verified ===
                                  "PENDING_VERIFICATION"
                                  ? Righticons1
                                  : Righticons
                              }
                              alt="tick-icon"
                            />
                          </div>

                          <div>
                            <p className="form-label ml-2">Bank Statement</p>
                          </div>
                        </div>
                        { documentstatus.bank_statement_verified ===
                        "PENDING_VERIFICATION" ? (
                          <span
                            className="reloadicon"
                            id="PAN"
                            style={{ opacity: "0.4",cursor: "pointer"  }}
                            onClick={() =>
                              props.history.push({
                                pathname: "/bank-details-payme",
                              })
                            }
                          >
                            {/* {" "} */}
                            Pending verification
                          </span>
                        ) :  documentstatus.bank_statement_verified ===
                            "NOT_SUBMITTED" ||
                           documentstatus.bank_statement_verified ===
                            "NOT_VALID" ? (
                          <div className="reloadicon">
                            <span
                              id="PAN"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                props.history.push({
                                  pathname: "/bank-details-payme",
                                })
                              }
                            >
                              {/* {" "} */}
                              Upload Again
                            </span>
                            <span style={{ fontSize: "10px", color: "red" }}>
                              (Rejected)
                            </span>
                          </div>
                        ) :  documentstatus.bank_statement_verified ===
                            "VERIFIED"  ? (
                          <div>
                            <img src={Righticons1} alt='Right Icon' />
                            <span className="reloadicon" id="PAN">
                              {" "}
                              Bank Statement Verified
                            </span>
                          </div>
                        ) : null}
                      </div>

                      {!props.user.userData?.other_documents[0] ? (
                        <div>
                          <div className="classRighticons">
                            <div style={{ display: "flex" }}>
                              <div className="">
                                <img
                                  src={
                                    professionalStatus ===
                                      "VERIFIED" ||
                                    professionalStatus ===
                                      "PENDING_VERIFICATION"
                                      ? Righticons1
                                      : Righticons
                                  }
                                  alt="tick-icon"
                                />
                              </div>
                              <div>
                                <p className="form-label ml-2">
                                  Professional Details
                                </p>
                              </div>
                            </div>
                            {professionalStatus ===
                            "PENDING_VERIFICATION" ? (
                              <span
                                className="reloadicon"
                                id="PAN"
                                style={{ opacity: "0.4" ,cursor: "pointer" }}
                                onClick={() =>
                                  props.history.push({
                                    pathname: "/professional-details-payme",
                                  })
                                }
                              >
                                {/* {" "} */}
                                Pending verification
                              </span>
                            ) : professionalStatus ===
                                "NOT_SUBMITTED" ||
                              professionalStatus ===
                                "NOT_VALID" ? (
                              <div className="reloadicon">
                                <span
                                  id="PAN"
                                  style={{ cursor: "pointer" }}
                                  onClick={() =>
                                    props.history.push({
                                      pathname: "/professional-details-payme",
                                    })
                                  }
                                >
                                  Upload Again{" "}
                                  <span
                                    style={{ fontSize: "10px", color: "red" }}
                                  >
                                    (Rejected)
                                  </span>
                                </span>
                              </div>
                            ) : professionalStatus ===
                              "VERIFIED" ? (
                              <div>
                                <img src={Righticons1} alt='Right Icon' />
                                <span className="reloadicon" id="PAN">
                                  {" "}
                                  ProfessionalDetails Verified
                                </span>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      ) : (
                        <div className="classRighticons">
                          <div style={{ display: "flex" }}>
                            <div className="">
                              <img
                                src={
                                 documentstatus.professional_details_verified === "VERIFIED" ||
                                 documentstatus.professional_details_verified  === "PENDING_VERIFICATION"
                                    ? Righticons1
                                    : Righticons
                                }
                                alt="tick-icon"
                              />
                            </div>
                            <div>
                              <p className="form-label ml-2">
                                Professional Details
                              </p>
                            </div>
                          </div>
                          {documentstatus.professional_details_verified  ===
                          "PENDING_VERIFICATION" ? (
                            <span
                              className="reloadicon"
                              id="PAN"
                              style={{ opacity: "0.4",cursor: "pointer"  }}
                              onClick={() =>
                                props.history.push({
                                  pathname: "/professional-details-payme",
                                })
                              }
                            >
                              {/* {" "} */}
                              Pending verification
                            </span>
                          ) : documentstatus.professional_details_verified  === "NOT_SUBMITTED" ||
                          documentstatus.professional_details_verified  ===
                              "NOT_VALID" ? (
                            <div className="reloadicon">
                              <span
                                id="PAN"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  props.history.push({
                                    pathname: "/professional-details-payme",
                                  })
                                }
                              >
                                Upload Again
                                <span
                                  style={{ fontSize: "10px", color: "red" }}
                                >
                                  (Rejected)
                                </span>
                              </span>
                            </div>
                          ) : documentstatus.professional_details_verified  === "VERIFIED" ||
                            props.user.userData?.other_documents[0]?.status ===
                              "VERIFIED" ? (
                            <div>
                              <img src={Righticons1} alt='Right Icon' />
                              <span className="reloadicon" id="PAN">
                                {" "}
                                Professional Details Verified
                              </span>
                            </div>
                          ) : null}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Container>
      </div>


      {documentstatus.kyc_verified === "VERIFIED" &&
      documentstatus.bank_details_verified === "VERIFIED" &&
      documentstatus.bank_statement_verified === "VERIFIED" &&
      documentstatus.professional_details_verified === "VERIFIED"
        ? props.history.push({ pathname: "/congratulations" })
        : null}

      {documentstatus.kyc_verified === "VERIFIED" &&
      documentstatus.bank_details_verified === "VERIFIED" &&
      props.user.userData?.other_documents[0]?.status === "VERIFIED"
        ? props.history.push({ pathname: "/congratulations" })
        : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.authDetails.token,
    phoneNumber: state.authDetails.phone_number,
    user: state.user,
    userCase: state.user.useCase,
  };
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // hitLogin,
      hitAllUserData,
      // hitForgotMpin,
    },
    dispatch
  );
};

export default connect(mapStateToProps, dispatchToProps)(Pandingapprovalform);
