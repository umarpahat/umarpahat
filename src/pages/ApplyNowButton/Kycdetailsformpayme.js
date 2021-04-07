import React, { useState, useEffect } from "react";
import {
  faAngleDown,
  faArrowAltCircleDown,
  faArrowDown,
  faCalendarWeek,
} from "@fortawesome/free-solid-svg-icons";
import { hitAllUserData } from '../../store/modules/userDetails/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { Link } from "react-router-dom";
import DragbleImg from "../../component/DragbleImg";
import Header from "../../component/Header";
import backicon from "../../component/img/backicon.png";
import { Component } from "react";
import Select from "react-select";
import Progressbar from "../../component/ProgressBar";
import { Form } from "react-bootstrap";
import {getS3SignedUrl, postS3, api} from "../../services/api"
import Loader from '../../component/Loader' 

import DatePicker from "react-date-picker";

const Kycdetailsformpayme = (props) => {
  const [show, setShow] = useState(false);
  const [name, setname] = useState("")
  const [date, setdate] = useState("")
  const [gender, setgender] = useState("")
  const [panNumber, setpanNumber] = useState("")
  const [panFile, setpanFile] = useState({})
  const [aadhaarFileFront, setaadhaarFileFront] = useState({})
  const [aadhaarFileBack, setaadhaarFileBack] = useState({})
  const [errorName, seterrorName] = useState("")
  const [errorDob, seterrorDob] = useState("")
  const [errorGender, seterrorGender] = useState("")
  const [errorPan, seterrorPan] = useState("")
  const [errorUploadPan, seterrorUploadPan] = useState("")
  const [errorUploadAdhaarFront, seterrorUploadAdhaarFront] = useState("")
  const [errorUploadAdhaarBack, seterrorUploadAdhaarBack] = useState("")
  const [signedUrl, setsignedUrl] = useState({})
  const [loader, setloader] = useState(false);


  const handleClose = () => setShow(!show);

  async function getSignedUrl() {
    const pathArray = [`adhar_card/${props.user.id}/back.jpg`, `adhar_card/${props.user.id}/front.jpg`, `pan_card/${props.user.id}/front.jpg`]
    const signedUrlObj = await getS3SignedUrl({token: props.token, payload:{"s3_path":pathArray, "bucket_name" :"payme-test-documents"}})
    setsignedUrl(signedUrlObj.data.data)
    console.log(343434, signedUrlObj.data.data)
  }

  useEffect(() => {
    if (!props.user) {
      props.history.push({pathname:"/get-quick-loan-apply"})
      return;
    }
      getSignedUrl()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props])

  const handlePanUpload = (event) => {
    seterrorUploadPan("")
    setpanFile(event.target.files[0])
  }

  const handleAadhaarUploadFront = (event) => {
    seterrorUploadAdhaarFront("")
    setaadhaarFileFront(event.target.files[0])
  }

  const handleAadhaarUploadBack = (event) => {
    seterrorUploadAdhaarBack("")
    setaadhaarFileBack(event.target.files[0])
  }

  async function updateDocStatus(data){
    console.log("rrrtttyyy", data)
    return await api.post('/api/update_document_status/', {doc_type: data.docType, path: data.path}, {headers: { 'Authorization': 'Token ' + props.token } })
    // console.log("test1", test1)
  }

  async function updateBasicInfo() {
    console.log("bhbhbhbhbhbhb")
    return await api.post('/api/offline_manual_kyc/', {dob: date, gender: gender, pan_card_number: panNumber}, {headers: { 'Authorization': 'Token ' + props.token } })
    // console.log("test2", test2)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
if (!name) {seterrorName("Please enter name"); return;}
if (!date) {seterrorDob("Please enter date"); return;}
if (!gender) {seterrorGender("Please enter gender"); return;}
if (!panNumber) {seterrorPan("Please enter pan number"); return;}
if (!panFile.name) {seterrorUploadPan("Please upload pan"); return;}
if (!aadhaarFileBack.name) {seterrorUploadAdhaarBack("Please upload adhaar front"); return;}
if (!aadhaarFileFront.name) {seterrorUploadAdhaarFront("Please enter adhaar back"); return;}
setloader(true)
 const uploadAdhaarBack = postS3({res:aadhaarFileBack, presignedPostData: signedUrl[`adhar_card/${props.user.id}/back.jpg`]})
 const uploadAdhaarFront = postS3({res:aadhaarFileFront, presignedPostData: signedUrl[`adhar_card/${props.user.id}/front.jpg`]})
 const uploadPanCard = postS3({res:panFile, presignedPostData: signedUrl[`pan_card/${props.user.id}/front.jpg`]})
 const updateAdhaarBackStatus = updateDocStatus({docType:"adhar_card", path: `adhar_card/${props.user.id}/back.jpg`})
 const updateAdhaarFrontStatus = updateDocStatus({docType:"adhar_card", path: `adhar_card/${props.user.id}/front.jpg`})
 const updatePanStatus = updateDocStatus({docType:"pan_card", path: `pan_card/${props.user.id}/front.jpg`})
 Promise.all([uploadAdhaarBack, uploadAdhaarFront, uploadPanCard,
  updateAdhaarBackStatus, updateAdhaarFrontStatus, updatePanStatus, updateBasicInfo()]).then((response)=>{
    setloader(false)
  props.hitAllUserData({ token: props.token })
  if (!props.user.userbankdetail){
    props.history.push({pathname:'/bank-details-payme'})
  } else  if (props.user.userbankdetail.verified === 'VERIFIED' ||
  props.user.userbankdetail.verified === 'PENDING_VERIFICATION'){
    if (props.user.userdocumentsmodel && (props.user.userdocumentsmodel.salary_slip_verified === 'VERIFIED' ||
    props.user.userdocumentsmodel.salary_slip_verified === 'PENDING_VERIFICATION')) {
      props.history.push({pathname:'/pending-approval'})
    } else {
      props.history.push({pathname:'/professional-details-payme'})
    }
  } else{
    props.history.push({pathname:'/bank-details-payme'})
  }
 }).catch((error)=>{
   console.log(121212,error)
  setloader(false)
 })
  }

  const options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];
  return (
    <>
      <Header />
      {loader ? <div className="loader"> <Loader color={'#33658a'} /> </div> :
      <div className="form-container pb-5">
        <div className="pb-4">
          <Progressbar />
        </div>
        <div
          className="d-flex"
          onClick={() => {
            props.history.goBack();
          }}
          to="#"
          style={{ cursor: "pointer" }}
        >
          <div className="m-1">
            <img src={backicon} className="img-fluid" />
          </div>
          <div>
            <h6 className="backbtnsty">Back</h6>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="Home-contact-form">
            <h4 className="form-heading text-center">Tell Us about Yourself</h4>
            <div className="form-block">
              <div class="form-group ms-input-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  class="form-control ms-form-input"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(event) => {seterrorName(""); setname(event.target.value)}}
                />
                   {errorName ? <span style={{color:"red"}}>{errorName}</span> : null}
              </div>
              <div>
                <div class="form-group ms-input-group">
                  <label className="form-label">DOB(YY/MM/DD)</label>
                  <input
                    type="date"
                    class="form-control ms-form-input"
                    value={date}
                    onChange={(event) => {seterrorDob(""); setdate(event.target.value)}}
                  />
                     {errorDob ? <span style={{color:"red"}}>{errorDob}</span> : null}
                </div>
              </div>
              <div class="form-group ms-input-group">
                <label className="form-label">Gender</label>
                <div>
                  <Select isSearchable={false} options={options} value={gender} onChange={(value)=> {
                    seterrorGender("")
                    // console.log(222222, value.value)
                  setgender(value.value)
                  }} />
                </div>
                {errorGender ? <span style={{color:"red"}}>{errorGender}</span> : null}
              </div>

              <div class="form-group ms-input-group">
                <label className="form-label">Pan Number</label>
                <input
                  type="text"
                  class="form-control ms-form-input"
                  placeholder="AJTPN9876M"
                  value={panNumber}
                  onChange={(event) =>{seterrorPan(""); setpanNumber(event.target.value)}}
                />
                   {errorPan ? <span style={{color:"red"}}>{errorPan}</span> : null}
              </div>
              <label className="form-label">
                Upload a pictue of your PAN card
              </label>
              <div className="file-uploading-block">
                {/* <DragbleImg /> */}
                {/* <span className="">or </span> */}
                {/* <img src={panFile.name} className="img-fluid" /> */}
                <a
                  className="upload-btn-text"
                  href="javascript:document.querySelector('input#upload-pan').click()"
                >
                  Upload PAN
                </a>
                <br/>
                                {panFile.name ? <span style={{color:"black"}} className="">{panFile.name}</span>:null}
                <input type="file" class="custom-file-input" name="Upload PAN" id="upload-pan" onChange={handlePanUpload}/>
                {errorUploadPan ? <span style={{color:"red"}}>{errorUploadPan}</span> : null}
              </div>
              <div class="form-group ms-input-group">
                <div className="pb-1">
                  <label className="form-label ">Adhaar Card</label>
                </div>

                <label className="form-label">
                  Upload a pictue of your Aadhar card
                </label>
                <div style={{ display: "flex" }}>
                  <div className="twoboxdregdrop file-uploading-block  mr-2">
                    {/* <p className="small-text-ms mb-4">Upload Adhaar Front</p> */}

                    {/* <DragbleImg /> */}
                    {/* <span className="">or </span> */}

                    <a
                      className="upload-btn-text"
                      href="javascript:document.querySelector('input#Frontofadhaar').click()"
                    >
                      Upload Adhaar Front
                    </a>
                    <br/>
                                {aadhaarFileFront.name ? <span style={{color:"black"}} className="">{aadhaarFileFront.name}</span>:null}
                    <input
                      type="file"
                      class="custom-file-input"
                      id="Frontofadhaar"
                      hidden
                      onChange={handleAadhaarUploadFront}
                    />
                       {errorUploadAdhaarFront ? <span style={{color:"red"}}>{errorUploadAdhaarFront}</span> : null}
                  </div>

                  <div
                    for="Backofadhaar"
                    className="file-uploading-block twoboxdregdrop ml-3"
                  >
                    {/* <p className="small-text-ms mb-4">Back</p> */}

                    {/* <DragbleImg /> */}
                    {/* <span className="">or </span> */}
                    <a
                      href="javascript:document.querySelector('input#Backofadhaar').click()"
                      className="upload-btn-text"
                    >
                      Upload Adhaar Back
                    </a>
                    <br/>
                                {aadhaarFileBack.name ? <span style={{color:"black"}} className="">{aadhaarFileBack.name}</span>:null}
                    <input
                      type="file"
                      class="custom-file-input"
                      id="Backofadhaar"
                      hidden
                      onChange={handleAadhaarUploadBack}
                    />
                       {errorUploadAdhaarBack ? <span style={{color:"red"}}>{errorUploadAdhaarBack}</span> : null}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ul>
                <li> All documents should be clear in quality</li>
                <li> We accept documents in pdf/jpg/png format.</li>
                <li>Max file size 32MB</li>
              </ul>
            </div>

            <input
            type="submit"
              style={{color:"white", width:"500px"}}
              className="submit-btn text-center"
              value="Proceed with KYC"
            />
          </div>
        </form>
      </div>}
    </>
  );
};

// export default Kycdetailsformpayme;

const mapStateToProps = state => {
  return {
      token: state.authDetails.token,
      phoneNumber: state.authDetails.phone_number,
      user: state.user.userData
  }
}


const dispatchToProps = (dispatch) => {
  return bindActionCreators({
      // hitLogin,
      hitAllUserData,
      // hitForgotMpin,
  }, dispatch)
}


export default connect(mapStateToProps, dispatchToProps)(Kycdetailsformpayme)