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
import letsStart from "../../images/animated/lets-start-animation.gif";
import getStarted from "../../images/animated/user-hexagon.gif";
import logoIcon from "../../images/svg/img.png";


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
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
              <br/>
              <a onClick={() => {
              props.history.push('/');
            }} className='back-arrow' >Back</a>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 text-center">

              <div className="home-contact-form">
                <div className="text-center p-b-30"><img src={logoIcon} alt='Icon' className='img-fluid' style={{maxWidth:40}} /></div>

                <h4 className="form-heading formheadding pb-3">
                  Get Started With PayMe India
                </h4>
                <div className="text-center"><img src={getStarted} alt='Icon' className='img-fluid' style={{maxWidth:200}} /></div>
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
                      style={{  display: "flex" ,textAlign:'center', margin:"auto"}}
                    >
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
      }} style={{"color": "#2A3C76",
        "background":"white",
        "boxShadow": "2px 2px 4px rgb(51, 101, 110, 0.5)",
        "border": " 1px solid #BCBFCB",
        "fontSize":"16px",
        "height": "55px",
        "margin": "0 auto",
        "padding": "5px 20px",
        "borderRadius": 8,
      cursor:"pointer"}} disabled={renderProps.disabled}> <img src={googleimg} alt="google"/> Sign Up with Google</button>
    )}
    onSuccess={responseGoogle}
    onFailure={responseGoogleFail}
    cookiePolicy={'single_host_origin'}
  />
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 text-center">
              <div className='height100'>
                <div>
                  <div className='circle-half'>
                    <div className='full-circle'>
                      <img src={letsStart} alt='Icon' className='img-fluid' style={{maxWidth:100}} />
                    </div>
                    <div className='full-text text-left'>
                      <h5>Tips</h5>
                      <p>In expedita et occaecati ullam a cumque maiores perspiciatis. Non labore exercitationem
                        rerum nulla ea veniam facilis et. </p>
                    </div>
                  </div>
                  <div className='circle-half'>
                    <p className='p-a-10'>In expedita et occaecati ullam a cumque maiores perspiciatis. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>}
      </div>
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
