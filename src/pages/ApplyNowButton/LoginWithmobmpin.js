import React, { useState, useEffect } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { hitLogin } from '../../store/modules/auth/actions'
import { hitAllUserData, hitAppUseCase } from '../../store/modules/userDetails/actions';
import Confirmotpmobile from "./Confirmotpmobile";
import { api } from '../../services/api';
import Loader from '../../component/Loader'
import Header from "../Header";
import Footer from "../Footer";
import "../../home.css";

function LoginWithMobMpin(props) {
  let [loader, setloader] = useState(false);
  let [errorPass, seterrorPass] = useState(null);
  let [password, setpassword] = useState(null);
  let [forgotPassword, setforgotPassword] = useState(false);
console.log(props)
  useEffect(() => {
    
    if (props.token) {
      if (forgotPassword) {props.history.push({pathname:'/change-mpin', state: { forgotPassword: forgotPassword}})}
      else {
        if (props.user.userData) {
          setloader(false)
          
          if (props.user.useCase === 'apply-loan') {
            if(props.user.userData.userdocumentsmodel?.kyc_verified === 'VERIFIED' || props.user.userData?.userdocumentsmodel?.kyc_verified === 'PENDING_VERIFICATION')
            {
              if(props.user.userData.userbankdetail)
              {
                if(props.user.userData.userdocumentsmodel?.salary_slip_verified==="VERIFIED" || props.user.userData.userdocumentsmodel?.salary_slip_verified==="PENDING_VERIFICATION" || props.user.userData.other_documents[0]?.doc_type==="ITR")
                {
                  props.history.push({pathname:'/pending-approval'})
                }
                else
                {
                  props.history.push({pathname:'/professional-details-payme'})
                }
              }
              else{


              props.history.push({pathname:'/bank-details-payme'})
              }
            }
         
            else{
              props.history.push({pathname:'/kycoption'})
            }
          } else if (props.user.useCase === 'pay-rent') {
            if (props.user.userData.userdocumentsmodel.kyc_verified === 'VERIFIED' || props.user.userData.userdocumentsmodel.kyc_verified === "PENDING_VERIFICATION") {
              props.history.push({pathname:'/payrent-other-details'})
            } else {
              console.log("1414141414", props)
              props.history.push({pathname:"/kyc-details-form"})
            }
          } else {
            props.history.push({pathname:'/'})
          }
        } else {
          props.hitAllUserData({ token: props.token })
        }
      }
    }
    if (props.loginError) {
      setloader(false)
      seterrorPass(props.loginError)
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
      <Header {...props}/>
      <div className='content darkBg'>
      {loader ? <div className="loader"> <Loader color={'#33658a'} /> </div> :
      forgotPassword ? <Confirmotpmobile {...props} phone_number={Number(props.location.state.phoneNumber)} forget_password={true} resendOtp={sendOtp} /> :
      <div className="form-container formcontainermob pt-4 " >
        <div className='p-b-30'>
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
      </div>
      }
      </div>
       <Footer/>
    </>
  );
}


const mapStateToProps = state => {
  return {
      token: state.authDetails.token,
      phoneNumber: state.authDetails.phone_number,
      loginError: state.authDetails.error,
      user: state.user
  }
}


const dispatchToProps = (dispatch) => {
  return bindActionCreators({
      hitLogin,
      hitAllUserData,
  }, dispatch)
}


export default connect(mapStateToProps, dispatchToProps)(LoginWithMobMpin)
