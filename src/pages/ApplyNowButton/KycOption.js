import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { hitAllUserData } from "../../store/modules/userDetails/actions";
import { bindActionCreators } from "redux";


const KycOption = (props) => {


  console.log(props)
  return (
    <>
      <Container>
        <div className="pt-5 ">
          <div className="contenertQuicklone">
            <div className="slider-right-block">
              <div className="Home-contact-form">
                <h4 className="form-heading fornheadding">
                  Choose from the preferred option below to proceed.
                </h4>

                <input
                  type="button"
                  value="E Kyc (Preferred)"
                  className="getstartbtn fontstyformQuiklone"
                  style={{ margin: "83px 0px 72px 0" }}
                />

                <input
                  type="button"
                  value="Manual Kyc"
                  className="getstartbtn fontstyformQuiklone"
                  style={{ height: "25px" }}
                  style={{ margin: "83px 0px 32px 0" }}
                  onClick={() => {
                    if(!props.user.userdocumentsmodel.adhar_card_front_url || !props.user.userdocumentsmodel.adhar_card_back_url)
                    {
                      props.history.push({ pathname: "/kyc-details-form"})
                    }
                    else if(!props.user.userbankdetail)
                    {
                    props.history.push({
              pathname: "/bank-details-payme",
             }) }
             else {
              props.history.push({
              pathname: "/pending-approval",
             })
             }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.authDetails.token,
    phoneNumber: state.authDetails.phone_number,
    user: state.user.userData,
    userCase: state.user.useCase,
  };
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // hitLogin,
      hitAllUserData,
      // hitForgotMpin,
    },
    dispatch
  );
};

export default connect(mapStateToProps,dispatchToProps) (KycOption);
