import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { hitLogin, hitForgotMpin } from "../../store/modules/auth/actions";
import Loader from "../../component/Loader";
import { api } from "../../services/api";
import Header from "../Header";
import Footer from "../Footer";
import phone from "../../images/svg/phone.svg";
import { Container } from "react-bootstrap";

const Confirmotpmobile = (props) => {
  const [otp, setotp] = useState("");
  const [loader, setloader] = useState(false);
  const [otpError, setotpError] = useState(null);


  const verifyOtpNewUser = (otp_get) => {
    setloader(true);
    api
      .post(
        `api/authentication/create_onboard_user/`,
        { phone_number: props.phone_number, otp: otp_get },
        {}
      )
      .then((response) => {
        setloader(false);
        if (response.status === 200) {
          props.history.push({
            pathname: "/get-start-paymeindia",
            state: { phoneNumber: props.phone_number },
          });
        } else {
          setotpError(
            `Otp not verified, please enter correct otp sent to ${props.phone_number}`
          );
        }
      })
      .catch((error) => {
        console.log(error);
        setotpError(
          `Otp not verified, please enter correct otp sent to ${props.phone_number}`
        );
        setloader(false);
      });
  };

  const verifyOtp = (otp_get) => {
    setloader(true);
    api
      .post(
        `api/verify_otp_phone/`,
        {
          phone_number: props.phone_number,
          otp: otp_get,
          forget_password: props.forget_password,
        },
        {}
      )
      .then((response) => {
        setloader(false);
        if (response.status === 200) {
          props.hitForgotMpin({
            token: response.data.data.token,
            phone_number: props.phone_number,
          });
        } else {
          setotpError(
            `Otp not verified, please enter correct otp sent to ${props.phone_number}`
          );
        }
      })
      .catch((error) => {
        setloader(false);
        setotpError(
          `Otp not verified, please enter correct otp sent to ${props.phone_number}`
        );
      });
  };

  return (
    <>
      <div className='content darkBg'>
      {loader ? (
        <div className="loader">
          {" "}
          <Loader color={"#33658a"} />{" "}
        </div>
      ) : (
        <>
          <Container>
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                <br/>
                <a className='back-arrow' href=''>Back</a>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                <form>
                  <div className="home-contact-form">
                    <h4 className="form-heading fornheadding">
                      OTP Sent On {props.phone_number}
                    </h4>
                    <p>
                      22:01
                    </p>

                    <div className="form-block">
                      <div className="form-group ms-input-group">

                        <OtpInput
                            isInputNum
                            containerStyle="otp-input-container"
                            inputStyle="otp-input "
                            value={otp}
                            onChange={(otp) => {
                              setotpError(null);
                              otp.length === 4
                                  ? props.forget_password
                                  ? verifyOtp(otp)
                                  : verifyOtpNewUser(otp)
                                  : setotp(otp);
                            }}
                            numInputs={4}
                        />
                        {otpError ? (
                            <span style={{color: "red"}}>{otpError}</span>
                        ) : null}
                      </div>
                      <div className="green-text">
                        Didn’t recived OTP?
                      </div>
                      <div className="resent-btn" onClick={props.resendOtp}>
                        Resend OTP
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                <div className='height100'>
                  <div>
                    <div className='circle-half'>
                      <div className='full-circle'>
                        <img src={phone} alt='Icon'/>
                      </div>
                      <div className='full-text text-left'>
                        <h5>Tips</h5>
                        <p>In expedita et occaecati ullam a cumque maiores perspiciatis. Non labore exercitationem rerum nulla ea veniam facilis et. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </Container>
        </>
      )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      hitForgotMpin,
    },
    dispatch
  );
};

export default connect(mapStateToProps, dispatchToProps)(Confirmotpmobile);
