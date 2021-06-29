import React, { useState } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { hitLogin, hitForgotMpin } from '../../store/modules/auth/actions'
import Loader from '../../component/Loader'
import { api } from '../../services/api';

const Confirmotpmobile = (props) => {
  const [otp, setotp] = useState("");
 const [loader, setloader] = useState(false);
 const [otpError, setotpError] = useState(null);


 const verifyOtpNewUser = (otp_get) => {
  setloader(true)
  api.post(`api/authentication/create_onboard_user/`, {'phone_number' : props.phone_number, 'otp': otp_get}, {})
  .then((response) => {
      setloader(false)
      if (response.status === 200) {
        props.history.push({pathname: '/get-start-paymeindia', state: { phoneNumber: props.phone_number}})
      } else {
        setotpError(`Otp not verified, please enter correct otp sent to ${props.phone_number}`)
      }
  })
  .catch((error) => {
    console.log(error)
    setotpError(`Otp not verified, please enter correct otp sent to ${props.phone_number}`)
      setloader(false)
  });
}


const verifyOtp = (otp_get) => {
    setloader(true)
    api.post(`api/verify_otp_phone/`, {'phone_number' : props.phone_number, 'otp': otp_get, 'forget_password': props.forget_password}, {})
    .then((response) => {
        setloader(false)
        if (response.status === 200) {
            props.hitForgotMpin({'token':response.data.data.token, 'phone_number' : props.phone_number})
        } else {
            setotpError(`Otp not verified, please enter correct otp sent to ${props.phone_number}`)
        }
    })
    .catch((error) => {
        setloader(false)
        setotpError(`Otp not verified, please enter correct otp sent to ${props.phone_number}`)
    });
  }

  return (
    <>
   
      {loader ? <div className="loader"> <Loader color={'#33658a'} /> </div> :
      <div className="Enter-otp-form">
        <form>
          <div className="Home-contact-form">
            <h4 className="form-heading text-center">
              OTP Sent On {props.phone_number}
            </h4>

            <div className="form-block">
              <div className="form-group ms-input-group">
                <label className="form-label montserrat-600">
                  Enter OTP Here
                </label>
                <OtpInput
                  isInputNum
                  containerStyle="otp-input-container"
                  inputStyle="otp-input "
                  value={otp}
                  onChange={(otp) => {
                    setotpError(null)
                    otp.length === 4 ? props.forget_password ? verifyOtp(otp) : verifyOtpNewUser(otp): setotp(otp);
                  }}
                  numInputs={4}
                />
                {otpError ? <span style={{color:"red"}}>{otpError}</span> : null}
              </div>
            </div>

            <div className="resent-btn">
              <div className="">
                <p
                  style={{
                    color: "#33658A",
                    fontWeight: "700",
                    cursor: "pointer",
                    fontSize: "18px",
                  }}
                onClick={props.resendOtp} >
                  Resend OTP
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>}
    </>
  );
};


const mapStateToProps = state => {
  return {
  }
}


const dispatchToProps = (dispatch) => {
  return bindActionCreators({
      hitForgotMpin
  }, dispatch)
}


export default connect(mapStateToProps, dispatchToProps)(Confirmotpmobile)
