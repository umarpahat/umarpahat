import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import {
  hitAllUserData,
  hitEkyc,
  hitAppUseCase
} from "../../store/modules/userDetails/actions";
import { bindActionCreators } from "redux";
import { getEkyc } from "../../store/modules/userDetails/api";
import axios from "axios";
import { API_ENDPOINT } from "../../constant";
import Header from "../Header";
import Footer from "../Footer";
import Cookies from 'universal-cookie';
 
const cookies = new Cookies()


const KycOption = (props) => {
  

  const token = cookies.get('token')
  console.log("pramodsprops", props);

  const [webview, setWebview] = useState();
  const [ekyc, setEkyc] = useState();
  const [adhaar, setAdhaar] = useState();
  const [refresh,setRefresh]=useState(true);
  const [status,setStatus]=useState(true)
  function refreshhi(){
    props.hitAllUserData({ token: token });
    props.hitAppUseCase()
    }
  if(refresh){
    refreshhi();
    setRefresh(false)
    
  }


  console.log("after ekyc", ekyc);
   
 


  useEffect(() => {
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
       
      })
      
      .catch((err) => {
        console.log(err);
        if(err.response.status===401)
        {
          cookies.remove('token', { path: '/' })
        }
      });
  }, []);

var time = setInterval(function(){
  if(status){
  ekycCall();
  }
},3000);



  const ekycCall = ()=> {

     let url2 = `${API_ENDPOINT}/api/get_document_status/`;
     let config = {
      headers: {
        Authorization: "Token " + token,
      },
    };
    axios
      .get(url2, config)
      .then((response) => {
       setAdhaar(response.data.data[0].adhar_card_verified)
       setEkyc(response.data.data[0].kyc_verified);
      })
      .catch((err) => {
        console.log(err);
      });

  }
  var time = setInterval(function(){
    if(status){
    ekycCall();
    }
  },3000);

  if(setEkyc==="VERIFIED")
  {
    clearTimeout(time);
  }
  
  //  setEkyc(props.ekycData.userdocumentsmodel?.address_proof_verified);
  //  setAdhaar(props.ekycData.userdocumentsmodel?.kyc_verified)


  

  const handleBankDetails = () => {



    if (props.userCase === "apply-loan") {

      if (!props.user.userbankdetail){
        clearTimeout();
        props.history.push({
          pathname: "/bank-details-payme",
        });
       
      } else if (
        props.user.userbankdetail.verified === "VERIFIED" ||
        props.user.userbankdetail.verified === "PENDING_VERIFICATION"
      ) {
        if (
         
          (props.user.userdocumentsmodel.salary_slip_verified === "VERIFIED" ||
            props.user.userdocumentsmodel.salary_slip_verified ===
              "PENDING_VERIFICATION"  || props.user.professionaldetails.verified ==="VERIFIED" || props.user.professionaldetails.verified ==="PENDING_VERIFICATION" )
        ) {clearTimeout();
          props.history.push({ pathname: "/pending-approval" });
          
        } else {
          clearTimeout();
          props.history.push({ pathname: "/professional-details-payme" });
         
        }
      }
    } else if (props.useCase === "pay-rent") {
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
   
    <div className='content darkBg'>
    <Header {...props}/>
    <div class="navbar navbar-default navbar-fixed-top" id="topnavbar"  >
    <div className="slider-right-block"  style={{marginBottom:"50px"}}>
      {ekyc === "VERIFIED" ? (
        <Container >
          <div className="pt-5 ">
            <div className="contenertQuicklone">
              <div className="slider-right-block">
                <div className="home-contact-form">
                  <h4 className="form-heading fornheadding">
                    Congratulation Your Kyc is verified click below to continue.
                  </h4>
                  <a
                    type="button"
                    className="getstartbtn "
                    style={{ margin: "83px 0px 72px 0",color:"white" }}
                    target="popup"
                    onClick={handleBankDetails}
                  >
                    Proceed
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      ) : adhaar === "VERIFIED" ? (
        <Container>
          <div className="pt-5 ">
            <div className="contenertQuicklone">
              <div className="slider-right-block">
                <div className="home-contact-form">
                  <h4 className="form-heading fornheadding">
                    Your Kyc is Pending click below to complete
                  </h4>
                  <a
                    type="button"
                    className="getstartbtn "
                    style={{ margin: "83px 0px 72px 0" }}
                    href={webview}
                    target="popup"
                    onClick={handleWebView}
                  >
                    Continue For Kyc
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <Container>
          <div className="pt-5 ">
            <div className="contenertQuicklone">
              <div className="slider-right-block">
                <div className="home-contact-form">
                  <h4 className="form-heading fornheadding">
                    Choose from the preferred option below to proceed.
                  </h4>
                  <a
                    type="button"
                    className="getstartbtn "
                    style={{ margin: "83px 0px 72px 0" }}
                    href={webview}
                    target="popup"
                    onClick={handleWebView}
                  >
                    E Kyc (Preferred)
                  </a>
                  <input
                    type="button"
                    value="Manual Kyc"
                    className="getstartbtn "
                    style={{ height: "25px" }}
                    style={{ margin: "83px 0px 32px 0" }}
                    onClick={() => {
                      clearTimeout();
                     setStatus(false)
                      if (
                        props.user.userdocumentsmodel.kyc_verified ==="NOT_SUBMITTED" ||
                        props.user.userdocumentsmodel.kyc_verified ==="NOT_VALID" || props.user.userdocumentsmodel.kyc_verified ==="PENDING_VERIFICATION"
                      ) {
                        props.history.push({ pathname: "/kyc-details-form" });
                      } else if (!props.user.userbankdetail) {
                        props.history.push({
                          pathname: "/bank-details-payme",
                        });
                      } else {
                        props.history.push({
                          pathname: "/pending-approval",
                        });
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
      </div>
      </div>
      <div >
      </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.authDetails.token,
    phoneNumber: state.authDetails.phone_number,
    user: state.user.userData,
    userCase: state.user.useCase,
    ekycData:state.ekycData,

    
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
