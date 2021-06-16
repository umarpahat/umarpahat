import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import DragbleImg from "../../component/DragbleImg";
import Righticons from "../../component/img/Righticons.png";
import Righticons1 from "../../component/img/Righticons1.png";
import Congretmessage from "../../pages/ApplyNowButton/Congretmessage";
import reloadeicon from "../../component/img/reloadeicon.png";
import Loader from "../../component/Loader";

import Header from "../../component/Header";

import Progressbar from "../../component/ProgressBar";

const Pandingapprovalform = (props) => {
  const [userbankdetail, setuserbankdetail] = useState({});
  const [userdocumentsmodel, setuserdocumentsmodel] = useState({});

  console.log("props", props);

  useEffect(() => {
    if (!props.token) {
      props.history.push({ pathname: "/" });
    }
    if (Object.keys(props.user).length) {
      setuserdocumentsmodel(props.user.userData.userdocumentsmodel);
      setuserbankdetail(
        props.user.userData.userbankdetail
          ? props.user.userData.userbankdetail
          : { verified: "NOT_SUBMITTED" }
      );
    }
  });

  return (
    <>
      {/* <Header /> */}
      <Container>
        <div className="form-container formcontainermob  pt-4">
          <form>
            <div className="Home-contact-form mt-4">
              <h4 className="form-heading text-center">Pending Approval</h4>
              <p className="PreApprovePara">
                Please provide the rejected documents again. Reason for
                rejections is provided
              </p>
              <div className="form-block">
                <div>
                  <p className="form-label">Pending Approval</p>
                  <div className="classRighticons pt-3">
                    <div style={{ display: "flex" }}>
                      <div className="">
                        <img
                          src={
                            userdocumentsmodel.adhar_card_verified ===
                              "VERIFIED" ||
                            userdocumentsmodel.adhar_card_verified ===
                              "PENDING_VERIFICATION"
                              ? Righticons1
                              : Righticons
                          }
                          alt="tick-icon"
                        />
                      </div>
                      <div>
                        <p className="form-label ml-2">Aadhaar</p>
                      </div>
                    </div>
                    {userdocumentsmodel.adhar_card_verified ===
                    "PENDING_VERIFICATION" ? (
                      <span
                        className="reloadicon"
                        id="PAN"
                        style={{ opacity: "0.4" }}
                      >
                        Pending verification
                      </span>
                    ) : userdocumentsmodel.adhar_card_verified ===
                        "NOT_SUBMITTED" ||
                      userdocumentsmodel.adhar_card_verified === "NOT_VALID" ? (
                      <div className="reloadicon">
                        <span
                          id="PAN"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            props.history.push({
                              pathname: "/kyc-details-form",
                            })
                          }
                        >
                          Upload Again
                        </span>
                        <p style={{ fontSize: "10px", color: "black" }}>
                          (Your Dcument is rejected)
                        </p>
                      </div>
                    ) : userdocumentsmodel.adhar_card_verified ===
                      "VERIFIED" ? (
                      <div>
                        <img src={Righticons1} alt="tick-icon" />
                        <span className="reloadicon" id="PAN">
                          {" "}
                          Adhaar Verified
                        </span>
                      </div>
                    ) : null}
                  </div>

                  <div
                    className="classRighticons pt-2"
                    style={{ paddingTop: "0px" }}
                  >
                    <div style={{ display: "flex" }}>
                      <div className="">
                        <img
                          src={
                            userdocumentsmodel.pan_card_verified ===
                              "VERIFIED" ||
                            userdocumentsmodel.pan_card_verified ===
                              "PENDING_VERIFICATION"
                              ? Righticons1
                              : Righticons
                          }
                          alt="tick-icon"
                        />
                      </div>
                      <div>
                        <p className="form-label ml-2">PAN Card</p>
                      </div>
                    </div>
                    {userdocumentsmodel.pan_card_verified ===
                    "PENDING_VERIFICATION" ? (
                      <span
                        className="reloadicon"
                        id="PAN"
                        style={{ opacity: "0.4" }}
                      >
                        Pending verification
                      </span>
                    ) : userdocumentsmodel.pan_card_verified ===
                        "NOT_SUBMITTED" ||
                      userdocumentsmodel.pan_card_verified === "NOT_VALID" ? (
                      <div className="reloadicon">
                        <span
                          id="PAN"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            props.history.push({
                              pathname: "/kyc-details-form",
                            })
                          }
                        >
                          {/* {" "} */}
                          Upload Again
                        </span>
                        <p style={{ fontSize: "10px", color: "black" }}>
                          (Your Dcument is rejected)
                        </p>
                      </div>
                    ) : userdocumentsmodel.pan_card_verified === "VERIFIED" ? (
                      <div>
                        <img src={Righticons1} />
                        <span className="reloadicon" id="PAN">
                          {" "}
                          PAN Verified
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
                            userdocumentsmodel.bank_statement_verified ===
                              "VERIFIED" ||
                            userdocumentsmodel.bank_statement_verified ===
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
                    {userdocumentsmodel.bank_statement_verified ===
                    "PENDING_VERIFICATION" ? (
                      <span
                        className="reloadicon"
                        id="PAN"
                        style={{ opacity: "0.4" }}
                      >
                        {/* {" "} */}
                        Pending verification
                      </span>
                    ) : userdocumentsmodel.bank_statement_verified ===
                        "NOT_SUBMITTED" ||
                      userdocumentsmodel.bank_statement_verified ===
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
                        <p style={{ fontSize: "10px", color: "black" }}>
                          (Your Dcument is rejected)
                        </p>
                      </div>
                    ) : userdocumentsmodel.bank_statement_verified ===
                      "VERIFIED" ? (
                      <div>
                        <img src={Righticons1} />
                        <span className="reloadicon" id="PAN">
                          {" "}
                          Bank Statement Verified
                        </span>
                      </div>
                    ) : null}
                  </div>

                  {!props.user.userData.other_documents[0] ? (
                    <div>
                      <div className="classRighticons">
                        <div style={{ display: "flex" }}>
                          <div className="">
                            <img
                              src={
                                userdocumentsmodel.salary_slip_verified ===
                                  "VERIFIED" ||
                                userdocumentsmodel.salary_slip_verified ===
                                  "PENDING_VERIFICATION"
                                  ? Righticons1
                                  : Righticons
                              }
                              alt="tick-icon"
                            />
                          </div>
                          <div>
                            <p className="form-label ml-2">
                              Salary slip (in case Salaried)
                            </p>
                          </div>
                        </div>
                        {userdocumentsmodel.salary_slip_verified ===
                        "PENDING_VERIFICATION" ? (
                          <span
                            className="reloadicon"
                            id="PAN"
                            style={{ opacity: "0.4" }}
                          >
                            {/* {" "} */}
                            Pending verification
                          </span>
                        ) : userdocumentsmodel.salary_slip_verified ===
                            "NOT_SUBMITTED" ||
                          userdocumentsmodel.salary_slip_verified ===
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
                            </span>
                            <p style={{fontSize:"10px", color:"black"}}>
                        (Your Dcument is rejected)
                      </p>
                          </div>
                        ) : userdocumentsmodel.salary_slip_verified ===
                          "VERIFIED" ? (
                          <div>
                            <img src={Righticons1} />
                            <span className="reloadicon" id="PAN">
                              {" "}
                              Salary slip Verified
                            </span>
                          </div>
                        ) : null}
                      </div>
                      <div className="classRighticons">
                        <div style={{ display: "flex" }}>
                          <div className="">
                            <img
                              src={
                                userdocumentsmodel.office_id_verified ===
                                  "VERIFIED" ||
                                userdocumentsmodel.office_id_verified ===
                                  "PENDING_VERIFICATION"
                                  ? Righticons1
                                  : Righticons
                              }
                              alt="tick-icon"
                            />
                          </div>
                          <div>
                            <p className="form-label ml-2">
                              Office ID-Card (Optional)
                            </p>
                          </div>
                        </div>
                        {userdocumentsmodel.office_id_verified ===
                        "PENDING_VERIFICATION" ? (
                          <span
                            className="reloadicon"
                            id="PAN"
                            style={{ opacity: "0.4" }}
                          >
                            {/* {" "} */}
                            Pending verification
                          </span>
                        ) : userdocumentsmodel.office_id_verified ===
                            "NOT_SUBMITTED" ||
                          userdocumentsmodel.office_id_verified ===
                            "NOT_VALID" ? (
                          <span
                            className="reloadicon"
                            id="PAN"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              props.history.push({
                                pathname: "/professional-details-payme",
                              })
                            }
                          >
                            {/* {" "} */}
                            Upload
                          </span>
                        ) : userdocumentsmodel.office_id_verified ===
                          "VERIFIED" ? (
                          <div>
                            <img src={Righticons1} />
                            <span className="reloadicon" id="PAN">
                              {" "}
                              Office Id Verified
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
                              props.user.userData.other_documents[0].status ===
                                "VERIFIED" ||
                              props.user.userData.other_documents[0].status ===
                                "PENDING_VERIFICATION"
                                ? Righticons1
                                : Righticons
                            }
                            alt="tick-icon"
                          />
                        </div>
                        <div>
                          <p className="form-label ml-2">
                            ITR slip (Self Employed)
                          </p>
                        </div>
                      </div>
                      {props.user.userData.other_documents[0].status ===
                      "PENDING_VERIFICATION" ? (
                        <span
                          className="reloadicon"
                          id="PAN"
                          style={{ opacity: "0.4" }}
                        >
                          {/* {" "} */}
                          Pending verification
                        </span>
                      ) : props.user.userData.other_documents[0].status ===
                          "NOT_SUBMITTED" ||
                        props.user.userData.other_documents[0].status ===
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
                          </span>
                          <p style={{fontSize:"10px", color:"black"}}>
                        (Your Dcument is rejected)
                      </p>
                        </div>
                      ) : props.user.userData.other_documents[0].status ===
                        "VERIFIED" ? (
                        <div>
                          <img src={Righticons1} />
                          <span className="reloadicon" id="PAN">
                            {" "}
                            ITR slip Verified
                          </span>
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>

      {userdocumentsmodel.adhar_card_verified === "VERIFIED" &&
      userdocumentsmodel.pan_card_verified === "VERIFIED" &&
      userdocumentsmodel.salary_slip_verified === "VERIFIED" &&
      userdocumentsmodel.bank_statement_verified === "VERIFIED" ? (
        <Congretmessage />
      ) : null}

      {userdocumentsmodel.adhar_card_verified === "VERIFIED" &&
      userdocumentsmodel.pan_card_verified === "VERIFIED" &&
      props.user.userData.other_documents[0].status === "VERIFIED" ? (
        <Congretmessage />
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.authDetails.token,
    phoneNumber: state.authDetails.phone_number,
    user: state.user,
  };
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, dispatchToProps)(Pandingapprovalform);
