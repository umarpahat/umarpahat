import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import DragbleImg from "../../component/DragbleImg";
import Righticons from "../../component/img/Righticons.png";
import Righticons1 from "../../component/img/Righticons1.png";
import reloadeicon from "../../component/img/reloadeicon.png";
import Loader from '../../component/Loader'

import Header from "../../component/Header";

import Progressbar from "../../component/ProgressBar";

const Pandingapprovalform = (props) => {

  // console.log("mlmlm")
  // console.log(props)
//   let [loader, setloader] = useState(false);
const [userbankdetail, setuserbankdetail] = useState({})
const [userdocumentsmodel, setuserdocumentsmodel] = useState({})

  useEffect(() => {
    console.log("klklklklk")
    console.log(props)
    console.log("nmnmnmnm")
    if (!props.token) {
      props.history.push({pathname: '/get-quick-loan-apply'})
    }
    if (Object.keys(props.user).length) {
      console.log("::::::::::::;")
      console.log(props)
      setuserdocumentsmodel(props.user.userData.userdocumentsmodel)
      setuserbankdetail(props.user.userData.userbankdetail ? props.user.userData.userbankdetail : {verified:"NOT_SUBMITTED"})
    }

});
// "/KycDeatails"
  return (
    <>
      <Header />
      <Container>
        <div className="form-container formcontainermob  pt-4">
          <form>
            <div className="Home-contact-form mt-4">
              <h4 className="form-heading text-center">Pending Approval</h4>
              <p className="PreApprovePara">
                Please provide the rejected documents again. Reason for
                rejections is provided
              </p>
              <div className="form-block">
                <div>
                  <p className="form-label">Pending Approval</p>
                  <div className="classRighticons pt-3">
                    <div style={{display: "flex"}}>
                    <div className="">
                      <img src={userdocumentsmodel.adhar_card_verified === 'VERIFIED' ||
                      userdocumentsmodel.adhar_card_verified === 'PENDING_VERIFICATION' ? Righticons1 : Righticons} alt="tick-icon"/>
                    </div>
                    <div>
                      <p className="form-label ml-2">Aadhaar</p>
                    </div>
                    </div>
                   {userdocumentsmodel.adhar_card_verified === 'PENDING_VERIFICATION' ?
                    <span className="reloadicon" id="PAN" style={{opacity:"0.4"}}>
                    {/* {" "} */}
                    Pending verification
                  </span> : userdocumentsmodel.adhar_card_verified === 'NOT_SUBMITTED' ||
                  userdocumentsmodel.adhar_card_verified === 'NOT_VALID' ? 
                  <span className="reloadicon" id="PAN" style={{cursor:"pointer"}} onClick={()=>props.history.push({pathname:'/kyc-details-form'})}>
                  {/* {" "} */}
                  Upload
                </span> : null
                  }
                  </div>

                  <div className="classRighticons pt-2" style={{"padding-top": "0px"}}>
                  <div style={{display: "flex"}}>
                    <div className="">
                      <img src={userdocumentsmodel.pan_card_verified === 'VERIFIED' ||
                      userdocumentsmodel.pan_card_verified === 'PENDING_VERIFICATION' ? Righticons1 : Righticons} alt="tick-icon"/>
                    </div>
                    <div>
                      <p className="form-label ml-2">PAN Card</p>
                    </div>
                    </div>
                   {userdocumentsmodel.pan_card_verified === 'PENDING_VERIFICATION' ?
                    <span className="reloadicon" id="PAN" style={{opacity:"0.4"}}>
                    {/* {" "} */}
                    Pending verification
                  </span> : userdocumentsmodel.pan_card_verified === 'NOT_SUBMITTED' ||
                  userdocumentsmodel.pan_card_verified === 'NOT_VALID' ? 
                  <span className="reloadicon" id="PAN" style={{cursor:"pointer"}} onClick={()=>props.history.push({pathname:'/kyc-details-form'})}>
                  {/* {" "} */}
                  Upload
                </span> : null
                  }
                  </div>
                </div>
                <div>
                  <div className="classRighticons">
                  <div style={{display: "flex"}}>
                    <div className="">
                      <img src={userbankdetail.verified === 'VERIFIED' ||
                      userbankdetail.verified === 'PENDING_VERIFICATION' ? Righticons1 : Righticons} alt="tick-icon"/>
                    </div>
                    <div>
                      <p className="form-label ml-2">Bank Statement</p>
                    </div>
                    </div>
                   {userbankdetail.verified === 'PENDING_VERIFICATION' ?
                    <span className="reloadicon" id="PAN" style={{opacity:"0.4"}}>
                    {/* {" "} */}
                    Pending verification
                  </span> : userbankdetail.verified === 'NOT_SUBMITTED' ||
                  userbankdetail.verified === 'NOT_VALID' ? 
                  <span className="reloadicon" id="PAN" style={{cursor:"pointer"}} onClick={()=>props.history.push({pathname:'/bank-details-payme'})}>
                  {/* {" "} */}
                  Upload
                </span> : null
                  }
                  </div>
                  <div className="classRighticons">
                  <div style={{display: "flex"}}>
                    <div className="">
                      <img src={userdocumentsmodel.salary_slip_verified === 'VERIFIED' ||
                      userdocumentsmodel.salary_slip_verified === 'PENDING_VERIFICATION' ? Righticons1 : Righticons} alt="tick-icon"/>
                    </div>
                    <div>
                      <p className="form-label ml-2">Salary slip (in case Salaried)</p>
                    </div>
                    </div>
                   {userdocumentsmodel.salary_slip_verified === 'PENDING_VERIFICATION' ?
                    <span className="reloadicon" id="PAN" style={{opacity:"0.4"}}>
                    {/* {" "} */}
                    Pending verification
                  </span> : userdocumentsmodel.salary_slip_verified === 'NOT_SUBMITTED' ||
                  userdocumentsmodel.salary_slip_verified === 'NOT_VALID' ? 
                  <span className="reloadicon" id="PAN" style={{cursor:"pointer"}} onClick={()=>props.history.push({pathname:'/professional-details-payme'})}>
                  Upload
                </span> : null
                  }
                  </div>
                  <div className="classRighticons">
                  <div style={{display: "flex"}}>
                    <div className="">
                      <img src={userdocumentsmodel.office_id_verified === 'VERIFIED' ||
                      userdocumentsmodel.office_id_verified === 'PENDING_VERIFICATION' ? Righticons1 : Righticons} alt="tick-icon"/>
                    </div>
                    <div>
                      <p className="form-label ml-2">Office ID-Card (Optional)</p>
                    </div>
                    </div>
                   {userdocumentsmodel.office_id_verified === 'PENDING_VERIFICATION' ?
                    <span className="reloadicon" id="PAN" style={{opacity:"0.4"}}>
                    {/* {" "} */}
                    Pending verification
                  </span> : userdocumentsmodel.office_id_verified === 'NOT_SUBMITTED' ||
                  userdocumentsmodel.office_id_verified === 'NOT_VALID' ? 
                  <span className="reloadicon" id="PAN" style={{cursor:"pointer"}} onClick={()=>props.history.push({pathname:'/professional-details-payme'})}>
                  {/* {" "} */}
                  Upload
                </span> : null
                  }
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

// export default Pandingapprovalform;

const mapStateToProps = state => {
  return {
      token: state.authDetails.token,
      phoneNumber: state.authDetails.phone_number,
      user: state.user
  }
}


const dispatchToProps = (dispatch) => {
  return bindActionCreators({
      // hitLogin,
      // hitAllUserData,
      // hitForgotMpin,
  }, dispatch)
}


export default connect(mapStateToProps, dispatchToProps)(Pandingapprovalform)
