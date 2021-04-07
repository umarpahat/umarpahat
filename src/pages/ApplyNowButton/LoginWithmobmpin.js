import React, { useState, useEffect } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { hitLogin } from '../../store/modules/auth/actions'
import { hitAllUserData } from '../../store/modules/userDetails/actions';
import Confirmotpmobile from "./Confirmotpmobile";
import Header from "../../component/Header";
import { api } from '../../services/api';
import Loader from '../../component/Loader'

function LoginWithMobMpin(props) {
  let [loader, setloader] = useState(false);
  let [errorPass, seterrorPass] = useState(null);
  let [password, setpassword] = useState(null);
  let [forgotPassword, setforgotPassword] = useState(false);

  useEffect(() => {
    if (props.token) {
      if (forgotPassword) {props.history.push({pathname:'/change-mpin', state: { forgotPassword: forgotPassword}})}
      else {
        props.hitAllUserData({ token: props.token })
        props.history.push({pathname:'/pending-approval'})
      }
    } 
});

const sendOtp = () => {
  setloader(true)
  api.post(`api/send_otp_phone/`, {'phone_number' : Number(props.location.state.phoneNumber)}, {})
  .then((response) => {
      setloader(false)
      if(response.status === 200) {
        setforgotPassword(true)
      } else {
        setforgotPassword(false)
          console.log(response.status)
      }
    return response;
  })
  .catch((error) => {
      setloader(false)
      setforgotPassword(false)
      console.log(error)
  });
}

  const handleSubmit = (event) => {
    event.preventDefault();
    /^\d{6}$/.test(password) ? login() : seterrorPass("Please input valid 6 digit MPIN")
  }
  
  const login = () => {
    setloader(true)
    props.hitLogin({ type: '', phone_number: Number(props.location.state.phoneNumber), 'mpin': Number(password) })
  } 

  return (
    <>
      {!forgotPassword ? <Header /> : null }
      {loader ? <div className="loader"> <Loader color={'#33658a'} /> </div> :
      forgotPassword ? <Confirmotpmobile {...props} phone_number={Number(props.location.state.phoneNumber)} forget_password={true} resendOtp={sendOtp} /> :
      <div className="form-container formcontainermob  pt-4">
        <div>
        <form onSubmit={handleSubmit}>
            <div className="Home-contact-form mt-4">
              <div className="form-block">
                <div className="form-group ms-input-group">
                  <label className="form-label pb-2">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control ms-form-input"
                    placeholder="9999999999"
                    value={props.location.state.phoneNumber || ""}
                    disabled = {true}
                  />
                </div>
                <div className="form-group ms-input-group">
                  <label className="form-label pb-2">Enter MPIN</label>
                  <input
                    type="password"
                    className="form-control ms-form-input"
                    placeholder="Enter 6 digit MPIN"
                    value={password || ""}
                    onChange={(event) => {
                      setpassword(event.target.value)
                      seterrorPass(null)
                    }}
                  />
                  {errorPass ? <span style={{color:"red"}}>{errorPass}</span> : null}
                </div>
                  <div className="forgetmpin form-label pb-4">
                    <p onClick={sendOtp} style={{cursor: "pointer"}}>Forgot MPIN?</p>
                  </div>
              </div>
              <div className="pt-3">
                      <label>
                      </label>
                      <input type="submit" value="Continue" className="getstartbtn fontstyformQuiklone" />
                    </div>
            </div>
          </form>
        </div>
      </div>}
    </>
  );
}


const mapStateToProps = state => {
  return {
      token: state.authDetails.token,
      phoneNumber: state.authDetails.phone_number,
  }
}


const dispatchToProps = (dispatch) => {
  return bindActionCreators({
      hitLogin,
      hitAllUserData,
  }, dispatch)
}


export default connect(mapStateToProps, dispatchToProps)(LoginWithMobMpin)
