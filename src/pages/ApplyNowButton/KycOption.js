import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import {
  hitAllUserData,
  hitEkyc,
} from "../../store/modules/userDetails/actions";
import { bindActionCreators } from "redux";
import { getEkyc } from "../../store/modules/userDetails/api";
import axios from "axios";

const KycOption = (props) => {
  console.log("pramodsprops", props);

  const [webview, setWebview] = useState();
  const [ekyc, setEkyc] = useState();
  const [adhaar, setAdhaar] = useState();

  console.log("after ekyc", ekyc);

  useEffect(() => {
    let url = `https://api.testing.paymeindia.in/api/webview_url/payme_ekyc/`;
    let config = {
      headers: {
        Authorization: "Token " + props.token,
      },
    };
    axios
      .get(url, config)
      .then((res) => {
        setWebview(res.data.url);
       
      })
      
      .catch((err) => {
        console.log(err);
      });
  }, []);

setInterval(function(){
  ekycCall();
},3000);



  const ekycCall = ()=> {

     let url2 = `https://api.testing.paymeindia.in/api/get_document_status/`;
     let config = {
      headers: {
        Authorization: "Token " + props.token,
      },
    };
    axios
      .get(url2, config)
      .then((response) => {
       setAdhaar(response.data.data[0].adhar_card_verified)
       setEkyc(response.data.data[0].kyc_verified);
        console.log("response ekyc", response.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });

  }
  
  //  setEkyc(props.ekycData.userdocumentsmodel?.address_proof_verified);
  //  setAdhaar(props.ekycData.userdocumentsmodel?.kyc_verified)


  console.log("statys kkyc", ekyc);
  console.log("pramod3", props.user.userbankdetail, props.userCase);

  const handleBankDetails = () => {
    if (props.userCase === "apply-loan") {
      if (!props.user.userbankdetail) {
        props.history.push({
          pathname: "/bank-details-payme",
        });
      } else if (
        props.user.userbankdetail.verified === "VERIFIED" ||
        props.user.userbankdetail.verified === "PENDING_VERIFICATION"
      ) {
        if (
          props.user.userdocumentsmodel &&
          (props.user.userdocumentsmodel.salary_slip_verified === "VERIFIED" ||
            props.user.userdocumentsmodel.salary_slip_verified ===
              "PENDING_VERIFICATION")
        ) {
          props.history.push({ pathname: "/pending-approval" });
        } else {
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
      {ekyc === "VERIFIED" ? (
        <Container>
          <div className="pt-5 ">
            <div className="contenertQuicklone">
              <div className="slider-right-block">
                <div className="Home-contact-form">
                  <h4 className="form-heading fornheadding">
                    Congratulation Your Kyc is verified click below to continue.
                  </h4>
                  <a
                    type="button"
                    className="getstartbtn fontstyformQuiklone"
                    style={{ margin: "83px 0px 72px 0" }}
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
                <div className="Home-contact-form">
                  <h4 className="form-heading fornheadding">
                    Your Kyc is Pending click below to complete
                  </h4>
                  <a
                    type="button"
                    className="getstartbtn fontstyformQuiklone"
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
                <div className="Home-contact-form">
                  <h4 className="form-heading fornheadding">
                    Choose from the preferred option below to proceed.
                  </h4>
                  <a
                    type="button"
                    className="getstartbtn fontstyformQuiklone"
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
                    className="getstartbtn fontstyformQuiklone"
                    style={{ height: "25px" }}
                    style={{ margin: "83px 0px 32px 0" }}
                    onClick={() => {
                      if (
                        !props.user.userdocumentsmodel.adhar_card_front_url ||
                        !props.user.userdocumentsmodel.adhar_card_back_url
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
    </>
  );
};
console.log("pramod ");
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

      // hitForgotMpin,
    },
    dispatch
  );
};

export default connect(mapStateToProps, dispatchToProps)(KycOption);
