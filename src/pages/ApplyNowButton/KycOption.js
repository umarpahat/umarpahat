import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import {
  hitAllUserData,
  hitEkyc,
  hitAppUseCase,
} from "../../store/modules/userDetails/actions";
import { bindActionCreators } from "redux";
import { getEkyc } from "../../store/modules/userDetails/api";
import axios from "axios";
import { API_ENDPOINT } from "../../constant";
import Header from "../Header";
import Footer from "../Footer";
import Cookies from "universal-cookie";
import tip from "../../images/animated/kyc-option.gif";
import { Link } from "react-router-dom";
import successAnimation from "../../images/animated/success-animation.gif";

const cookies = new Cookies();

const KycOption = (props) => {
  const token = cookies.get("token");
  const userCase = cookies.get("userCase");
  //console.log("pramodsprops", props);

  const [webview, setWebview] = useState();
  const [ekyc, setEkyc] = useState();
  const [adhaar, setAdhaar] = useState();
  const [refresh, setRefresh] = useState(true);
  const [status, setStatus] = useState(true);


  var something = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            props.hitAllUserData({ token: token });
        }
    };
})();
  //console.log("after ekyc", ekyc);

  useEffect(() => {
    something();
    let url = `${API_ENDPOINT}/api/webview_url/payme_ekyc/`;
    let config = {
      headers: {
        Authorization: "Token " + token,
      },
    };
    axios
      .get(url, config)
      .then((res) => {
        setWebview(res.data.url);
        //console.log("kykc url", res.data);
      })

      .catch((err) => {
        //console.log(err);
        if (err.response.status === 401) {
          cookies.remove("token", { path: "/" });
        }
      });
  }, []);

  var time = setInterval(function () {
    if (status) {
      ekycCall();
    }
  }, 3000);

  const ekycCall = () => {
    let url2 = `${API_ENDPOINT}/api/get_document_status/`;
    let config = {
      headers: {
        Authorization: "Token " + token,
      },
    };
    axios
      .get(url2, config)
      .then((response) => {
        setAdhaar(response.data.data[0].adhar_card_verified);
        setEkyc(response.data.data[0].kyc_verified);
        //console.log("set kyc",response.data)
      })
      .catch((err) => {
        //console.log(err);
      });
  };
  var time = setInterval(function () {
    if (status) {
      ekycCall();
    }
  }, 3000);

  if (setEkyc === "VERIFIED") {
    clearTimeout(time);
  }

  //  setEkyc(props.ekycData.userdocumentsmodel?.address_proof_verified);
  //  setAdhaar(props.ekycData.userdocumentsmodel?.kyc_verified)

  const handleBankDetails = () => {
    if (userCase === "apply-loan") {
      props.history.push("/step-manual");
    }
    else if (userCase === "pay-rent") {
      props.history.push({ pathname: "/payrent-other-details" });
    } else {
      props.history.push({ pathname: "/" });
    }
  };

  const handleWebView = () => {
    window.open(
      `${webview}`,
      "popup",
      "width=600,height=650,left=600,top=150,scrollbars=no,resizable=no"
    );

    return false;
  };
  return (
    <>
      <Header {...props} />
      <div className="content darkBg">
        <div className="navbar navbar-default navbar-fixed-top" id="topnavbar">
          <div className="slider-right-block">
            {ekyc === "VERIFIED" ? (
              <Container>
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12 text-center">
                    <br />

                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                        <div className="home-contact-form">
                          <img src={successAnimation} className='img-fluid max-width70'  alt='Icon'/>
                          <h4 className="form-heading formheadding">
                            Congratulation Your Kyc is verified click below to
                            continue.
                          </h4>
                          <a
                            type="button"
                            className="getstartbtn "
                            target="popup"
                            onClick={handleBankDetails}
                          >
                            Proceed
                          </a>
                        </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 text-center">
                    <br />
                  </div>
                </div>
              </Container>
            ) : adhaar === "VERIFIED" ? (
              <Container>
                <div className="row">
                  <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                    <br />
                    <a
                      className="back-arrow"
                      onClick={() => {
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
                            Your Kyc is Pending click below to complete
                          </h4>
                          <a
                            type="button"
                            className="getstartbtn "
                            target="popup"
                            onClick={handleWebView}
                          >
                            Continue For Kyc
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                    <div className="height100">
                      <div>
                        <div className="circle-half">
                          <div className="full-circle">
                            <img src={tip} className="img-fluid" alt="Tips" />
                          </div>
                          <div className="full-text text-left">
                            <h5>Tips</h5>
                            <p>
                              In expedita et occaecati ullam a cumque maiores
                              perspiciatis. Non labore exercitationem rerum
                              nulla ea veniam facilis et.{" "}
                            </p>
                          </div>
                        </div>
                        <div className="circle-half">
                          <p className="p-a-10">
                            In expedita et occaecati ullam a cumque maiores
                            perspiciatis.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            ) : (
              <Container>
                <div className="row">
                  <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                    <br />
                    <a
                      className="back-arrow"
                      onClick={() => {
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
                            Choose from the preferred option below to proceed.
                          </h4>
                          <p className="form-select-one">
                            Select one to proceed
                          </p>
                          <Link to="#" onClick={handleWebView}>
                            <div className="kyc-wrapper">
                              <span>
                                <a
                                  type="button"
                                  target="popup"
                                  onClick={handleWebView}
                                >
                                  &nbsp;
                                </a>
                              </span>
                              <h5>E-KYC</h5>
                              <p>It will be done on UADAAI Website.</p>
                            </div>
                          </Link>
                          <div
                            className="kyc-wrapper"
                            onClick={() => {
                              clearTimeout();
                              setStatus(false);
                              if (
                                props.user.userdocumentsmodel.kyc_verified ===
                                  "NOT_SUBMITTED" ||
                                props.user.userdocumentsmodel.kyc_verified ===
                                  "NOT_VALID" ||
                                props.user.userdocumentsmodel.kyc_verified ===
                                  "PENDING_VERIFICATION"
                              ) {
                                props.history.push({
                                  pathname: "/kyc-details-form",
                                });
                              } else if (!props.user.userbankdetail) {
                                props.history.push({
                                  pathname: "/step-manual",
                                });
                              } else {
                                props.history.push({
                                  pathname: "/step-manual",
                                });
                              }
                            }}
                          >
                            <h5>Manual KYC</h5>
                            <p>Upload your documents manually.</p>
                            <span>&nbsp;</span>
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
                            <img src={tip} className="img-fluid" alt="Tips" />
                          </div>
                          <div className="full-text text-left">
                            <h5>Tips</h5>
                            <p>
                              Complete the hassle-free paperless process to
                              fulfill the mandatory KYC requirements.
                            </p>
                          </div>
                        </div>
                        <div className="circle-half">
                          <p className="p-a-10">
                            EKYC helps in processing the loan application
                            instantly.
                          </p>
                        </div>
                        <div className="circle-half">
                          <p className="p-a-10">
                            Make sure that the image uploaded is not blurred.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            )}
          </div>
        </div>
        <div></div>
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

export default connect(mapStateToProps, dispatchToProps)(KycOption);
