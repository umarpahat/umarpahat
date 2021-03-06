import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { hitLogin } from "../../store/modules/auth/actions";
import {
  hitAllUserData,
  hitAppUseCase,
} from "../../store/modules/userDetails/actions";
import Confirmotpmobile from "./Confirmotpmobile";
import { api } from "../../services/api";
import Loader from "../../component/Loader";
import Header from "../Header";
import Footer from "../Footer";
import "../../home.css";
import Cookies from 'universal-cookie';
import tip from "../../images/animated/lets-start-animation.gif";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {Link} from "@material-ui/core";


const cookies = new Cookies()


function LoginWithMobMpin(props) {
  const history = useHistory()
  const token = cookies.get('token')
  const phoneNumber = cookies.get('phoneNumber')
  //console.log(token)
  const userCase = cookies.get("userCase");
  //console.log("user case",userCase)
  let [loader, setloader] = useState(false);
  let [errorPass, seterrorPass] = useState(null);
  let [password, setpassword] = useState(null);
  let [forgotPassword, setforgotPassword] = useState(false);
  //console.log("lllllllll",props,userCase);
  useEffect(() => {
    if (token) {
      if (forgotPassword) {
        props.history.push({
          pathname: "/change-mpin",
          state: { forgotPassword: forgotPassword },
        });
      } else {
        if (props.user.userData) {
          

          if (userCase === "apply-loan") {
            if (
              props.user.userData.userdocumentsmodel?.kyc_verified ===
                "VERIFIED" ||
              props.user.userData?.userdocumentsmodel?.kyc_verified ===
                "PENDING_VERIFICATION"
            ) {
              props.history.push({ pathname: "/step-manual" });
            }
           else {
              props.history.push({ pathname: "/kycoption" });
            }
          } else if (userCase === "pay-rent") {
            //console.log("payrent kyc", props.user.userData.userdocumentsmodel);
            if (
              props.user.userData.userdocumentsmodel.kyc_verified ===
                "VERIFIED" ||
              props.user.userData.userdocumentsmodel.kyc_verified ===
                "PENDING_VERIFICATION"
            ) {
              props.history.push({ pathname:"/payrent-other-details" });
            } else {
              //console.log("1414141414", props);
              props.history.push({ pathname:"/payrent-other-details" });
            }
          } else {
            props.history.push({ pathname: "/" });
          }
        } else {
          props.hitAllUserData({ token: token });
        }
      }
    }
    if (props.loginError) {
      setloader(false);
      seterrorPass(props.loginError);
    }
  });

  const sendOtp = () => {
    setloader(true);
    api
      .post(
        `api/send_otp_phone/`,
        { phone_number: phoneNumber},
        {}
      )
      .then((response) => {
        setloader(false);
        if (response.status === 200) {
          setforgotPassword(true);
        } else {
          setforgotPassword(false);
          //console.log(response.status);
        }
        return response;
      })
      .catch((error) => {
        setloader(false);
        setforgotPassword(false);
        //console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    /^\d{6}$/.test(password)
      ? login()
      : seterrorPass("Please input valid 6 digit MPIN");
  };

  const login = () => {
    setloader(true);
    props.hitLogin({
      type: "",
      phone_number: phoneNumber,
      mpin: password,
    })
    
  };

  return (
    <>
      <Header {...props} />
      
        {loader ? (
          <div className="loader">
            {" "}
            <Loader color={"#33658a"} />{" "}
          </div>
        ) : forgotPassword ? (
          <Confirmotpmobile
            {...props}
            phone_number={phoneNumber}
            forget_password={true}
            resendOtp={sendOtp} />
        ) : (
          <div className="content darkBg" >
            <Container>
              <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                <br/>
                <a className='back-arrow' onClick={() => {
                  props.history.goBack();
                }}
                >Back</a>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                <form onSubmit={handleSubmit}>
                  <div className="home-contact-form mt-4">
                    <div className="form-block">
                      <div className="form-group ms-input-group">
                        <label className="form-label pb-2">Mobile Number</label>
                        <input
                            maxLength={6}
                            type="number"
                            className="form-control ms-form-input"
                            placeholder="Phone Number"
                            value={phoneNumber || ""}
                            disabled={true}
                        />
                      </div>
                      <div className="form-group ms-input-group">
                        <label className="form-label pb-2">Enter Password</label>
                        <input
                            maxLength={6}
                            type="password"
                            className="form-control ms-form-input"
                            placeholder="Enter  Password"
                            value={password || ""}
                            onChange={(event) => {
                              if(event.target.value.match(/^[0-9]+$/)){
                              setpassword(event.target.value);
                              }
                              else if(event.target.value.length===0){
                                setpassword(event.target.value);
                              }
                              seterrorPass(null);
                            }}
                        />
                        {errorPass ? (
                            <span style={{ color: "red" }}>{errorPass}</span>
                        ) : null}
                      </div>
                      <div className="forgetmpin form-label pb-4">
                        <p onClick={sendOtp} style={{ cursor: "pointer" }}>
                          Forgot Password?
                        </p>
                      </div>
                    </div>
                    <div className="pt-3">
                      <label></label>
                      <input
                          type="submit"
                          value="Continue"
                          className="getstartbtn "
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                <div className='height100'>
                  <div>
                    <div className='circle-half'>
                      <div className='full-circle'>
                        <img src={tip} className='img-fluid' style={{maxWidth:100}} alt='Icon'/>
                      </div>
                      <div className='full-text text-left'>
                        <h5>Tips</h5>
                        <p>Password which will help you to log in faster into the PayMe India app.</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
          </div>
            </Container>
             </div>
        )}
      <Footer/>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.authDetails.token,
    phoneNumber: state.authDetails.phone_number,
    loginError: state.authDetails.error,
    user: state.user,
  };
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      hitLogin,
      hitAllUserData
    },
    dispatch
  );
};

export default connect(mapStateToProps, dispatchToProps)(LoginWithMobMpin);
