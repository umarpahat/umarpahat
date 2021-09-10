import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { hitAllUserData } from '../../store/modules/userDetails/actions';
import { hitLogin } from '../../store/modules/auth/actions'
import googleimg from "../../component/img/googleimg.png";
import { GoogleLogin } from 'react-google-login';
import Loader from '../../component/Loader'
import "../ApplyNowButton/Applybtnallcomponent.css";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
 
const cookies = new Cookies()

const Getstartpaymeindia = (props) => {
  const token = cookies.get('token')
  console.log(props.history.location.state.phoneNumber);
  let [loader, setloader] = useState(false);
  const [acceptTandC, setacceptTandC] = useState(false)
  const [Error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      setloader(false)
      props.hitAllUserData({ token: token })
        props.history.push({pathname:'/referral-code'})
    } 
});

  const acceptTermsAndCond = (props) => {
    setError(null)
    setacceptTandC(!acceptTandC)
  }

  const responseGoogle = (response) => {
  
    try {
      props.hitLogin({ type: 'google', access_token: response.tokenId, phone_number: Number(props.history.location.state.phoneNumber)})
      props.history.push({pathname:'/referral-code'})
    } catch (error){
      if(error.response.status===401)
      {
        cookies.remove('token', { path: '/' })
      }
      setloader(false)
console.log(error)
    }
  }

  const responseGoogleFail = () => {
    setloader(false)
    setError("Unable to Sign up, please try again")
  }

  return (
    <>
      <Header {...props} />
        <div className='content darkBg'>
      {loader ? <div className="loader"> <Loader color={'#33658a'} /> </div> :
      <Container>
        <div className="pt-5 ">
          <div className="contenertQuicklone">
            <div className="slider-right-block">
              <div className="Home-contact-form">
                <h4 className="form-heading fornheadding pb-3">
                  Get Started With PayMe India
                </h4>
                <div className="d-flex pt-5">
                  <div className="pt-4 pr-3">
                    <label className="containercheck">
                      <input type="checkbox" onChange={acceptTermsAndCond}/>
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div>
                    <p className="stylepara">
                      By continuing, you agree to our
                     <Link to='/policy'> <span style={{ color: "black" }}>
                        <u> Privacy Policy, </u>
                      </span></Link>
                      <Link  to='/terms'><span style={{ color: "black" }}>
                        <u>T&C's</u>
                      </span>
                      </Link>
                      and authorize us to retreieve your Credit report and
                      communicate with you via phone, Email, sms, Whatsapp, etc.
                    </p>
                  </div>
                </div>
                {Error ? <span style={{color:"red"}}>{Error}</span> : null}
                <div className=" d-flex  pt-5">
                  <div className="input-group input-group-lg w-100">
                    <div
                      style={{ border: "1px solid #4673de", display: "flex" }}
                    >
                        <div className="test">
                        <GoogleLogin
    clientId="435990090197-cjdhhppfhvq8e9n0cullbtco1u22mf1g.apps.googleusercontent.com"
    render={renderProps => (
      <button onClick={()=>{
        if (acceptTandC){
          setloader(true)
        renderProps.onClick()
        } else {
          setError("Please accept Terms and Condition")
        }
      }} style={{"color": "white",
        "border": "none",
        "backgroundColor": "rgb(51, 101, 138)",
        "width": "453px",
        "height": "65px",
        "margin": "0px 0px 0px 0px"}} disabled={renderProps.disabled}> <img src={googleimg} alt="google"/> Sign Up with Google</button>
    )}
    onSuccess={responseGoogle}
    onFailure={responseGoogleFail}
    cookiePolicy={'single_host_origin'}
  /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>}
      </div>
      <Footer/>
    </>
  );
};


const mapStateToProps = state => {
  return {
      token: state.authDetails.token,
      phoneNumber: state.authDetails.phone_number,
  }
}


const dispatchToProps = (dispatch) => {
  return bindActionCreators({
      hitLogin,
      hitAllUserData
  }, dispatch)
}


export default connect(mapStateToProps, dispatchToProps)(Getstartpaymeindia)
