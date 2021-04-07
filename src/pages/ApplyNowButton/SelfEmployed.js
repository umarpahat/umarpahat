import React, { useState, useEffect } from "react";
// import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import DragbleImg from "../../component/DragbleImg";
import { hitAllUserData } from '../../store/modules/userDetails/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from "../../component/Header";
import backicon from "../../component/img/backicon.png";
import Modalkyccomplete from "../../component/modalkyccomplete";
import Progressbar from "../../component/ProgressBar";
import {getS3SignedUrl, postS3, api} from "../../services/api"
import Loader from '../../component/Loader' 

const SelfEmployed = (props) => {
  const [show, setShow] = useState(false);
  // const [organizationName, setorganizationName] = useState("")
  // const [errororganizationName, seterrororganizationName] = useState("")
  // const [salaryDate, setsalaryDate] = useState("")
  const [loader, setloader] = useState(false);
  // const [errorsalaryDate, seterrorsalaryDate] = useState("")
  // const [officeAddressLine1, setofficeAddressLine1] = useState("")
  // const [officeAddressLine2, setofficeAddressLine2] = useState("")
  // const [officeEmail, setofficeEmail] = useState("")
  const [uploadItr, setuploadItr] = useState({})
  const [signedUrl, setsignedUrl] = useState({})
  const [erroruploadItr, seterroruploadItr] = useState("")
  // const [uploadOfficeId, setuploadOfficeId] = useState({})
  const [presentAddLine1, setpresentAddLine1] = useState("")
  const [presentAddLine2, setpresentAddLine2] = useState("")
  const [presentPincode, setpresentPincode] = useState("")
  const [errorpresentAddLine1, seterrorpresentAddLine1] = useState("")
  const [errorpresentPincode, seterrorpresentPincode] = useState("")

  async function getSignedUrl() {
    const pathArray = [`other_document/${props.user.id}/latest_itr.pdf`]
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

  async function updateDocStatus(data){
    console.log("rrrtttyyy", data)
    return await api.post('/api/update_document_status/', {doc_type: data.docType, path: data.path}, {headers: { 'Authorization': 'Token ' + props.token } })
  }

  async function updateProfessionalDetails() {
    console.log("bhbhbhbhbhbhb")
    const payload = {self_employed: true,
      present_address: `${presentAddLine1} ${presentAddLine2}`,
      present_pincode: presentPincode
    }
    return await api.post('/api/user_details/professional_details/', payload, {headers: { 'Authorization': 'Token ' + props.token } })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
if (!uploadItr.name) {seterroruploadItr("Please upload your latest ITR"); return;}
if (!presentAddLine1) {seterrorpresentAddLine1("please enter adress."); return;}
if (!presentPincode) {seterrorpresentPincode("Please enter pin code"); return;}
const uploadItrFront = postS3({res:uploadItr, presignedPostData: signedUrl[`other_document/${props.user.id}/latest_itr.pdf`]})
const updateSalaryFrontStatus = updateDocStatus({docType:"latest_itr", path: `other_document/${props.user.id}/latest_itr.pdf`})
// let OfficeDataArr = []
// if (uploadOfficeId.name) {
//   const uploadOfficeFront = postS3({res:uploadOfficeId, presignedPostData: signedUrl[`office_id/${props.user.id}/front.jpg`]})
//   const updateOfficeFrontStatus = updateDocStatus({docType:"office_id", path: `office_id/${props.user.id}/front.jpg`})
//   OfficeDataArr.push(uploadOfficeFront, updateOfficeFrontStatus)
// }
 Promise.all([...[uploadItrFront, updateSalaryFrontStatus], ...[updateProfessionalDetails()]]).then((response)=>{
    setloader(false)
    console.log("xvxvxvxvx", response)
    props.hitAllUserData({ token: props.token })
    props.history.push({pathname:'/pending-approval'})
 }).catch((error)=>{
   console.log(121212,error)
  setloader(false)
 })
  }

  const handleItrUpload = (event) => {
    seterroruploadItr("")
    setuploadItr(event.target.files[0])
  }

  const handleClose = () => setShow(!show);
  return (
    <>
      <Header />
      <Container className="pb-5">
        <div className="form-container formcontainermob  pt-4 pb-5">
          <div className="pt-2">
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
          </div>
          <form onSubmit={handleSubmit}>
            <div className="Home-contact-form mt-4">
              <div class="form-group ms-input-group">
                <label className="form-label">Employment Status</label>
              </div>
              <div className="py-4">
                <Link to="/professional-details-payme">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      checked={false}
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label
                      class="form-check-label form-label pr-5"
                      for="inlineRadio1"
                    >
                      Salaried
                    </label>
                  </div>
                </Link>
                <Link to="/selfEmployed">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      checked={true}
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />

                    <label
                      class="form-check-label form-label"
                      for="inlineRadio2"
                    >
                      Self-Employed
                    </label>
                  </div>
                </Link>
              </div>
              <h4 className="form-heading text-center">
                KYC - Business Details
              </h4>
              <div className="form-block">
                <div>
                  <label className="form-label ">Upload Recent ITR </label>
                  <div className="file-uploading-block">
                    {/* <DragbleImg />
                    <span className="">or </span> */}

                    <a
                      className="upload-btn-text"
                      href="javascript:document.querySelector('input#PAN').click()"
                    >
                      Upload
                    </a>
                     <br/>
                      {uploadItr.name ? <span style={{color:"black"}} className="">{uploadItr.name}</span>:null}
                    <input
                      type="file"
                      class="custom-file-input"
                      id="PAN"
                      onChange={handleItrUpload}
                      hidden
                    />
                  </div>
                  {/* <div class="form-group ms-input-group">
                    <label className="form-label pb-2">
                      GSTIN Number (optional)
                    </label>
                    <input
                      type="text"
                      class="form-control ms-form-input"
                      placeholder="GSTIN Number"
                    />
                  </div> */}
                  <div class="form-group ms-input-group">
                    {/* <div class="form-group ms-input-group">
                      <label className="form-label">House Type</label>
                      <div className="pt-3">
                        <div class="form-check form-check-inline">
                          <input
                            id="own"
                            class="form-check-input"
                            type="radio"
                            name="housetype"
                          />
                          <label
                            for="own"
                            class="form-check-label form-label ml-1 pr-3"
                          >
                            Own
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input id="rented" type="radio" name="housetype" />
                          <label
                            for="rented"
                            class="form-check-label form-label ml-1"
                          >
                            Rented
                          </label>
                        </div>
                      </div>
                    </div> */}
                    <div class="form-group ms-input-group">
                      <label className="form-label">Present Address</label>
                      <input
                        type="text"
                        class="form-control ms-form-input mt-2"
                        placeholder="Address Line 1"
                        value={presentAddLine1}
                        onChange={(event)=>{seterrorpresentAddLine1(""); setpresentAddLine1(event.target.value)}}
                      />
                      <input
                        type="text"
                        class="form-control ms-form-input mt-2"
                        placeholder="Address Line 2"
                        value={presentAddLine2}
                        onChange={(event)=>{setpresentAddLine2(event.target.value)}}
                      />
                    {errorpresentAddLine1 ? <span style={{color:"red"}}>{errorpresentAddLine1}</span> : null}
                    </div>
                    <div class="form-group ms-input-group">
                      <label className="form-label">Present Pin Code</label>
                      <input
                        type="text"
                        class="form-control ms-form-input"
                        placeholder="110025"
                        value={presentPincode}
                        onChange={(event)=>{seterrorpresentPincode(""); setpresentPincode(event.target.value)}}
                      />
                      {errorpresentPincode ? <span style={{color:"red"}}>{errorpresentPincode}</span> : null}
                    </div>
                  </div>
                </div>
              </div>
              <input
            type="submit"
              style={{color:"white", width:"500px"}}
              className="submit-btn text-center"
              value="Proceed with Professional Details"
            />
            </div>
          </form>
        </div>
      </Container>

      <Modalkyccomplete show={show} handleClose={handleClose} />
    </>
  );
};

// export default SelfEmployed;

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


export default connect(mapStateToProps, dispatchToProps)(SelfEmployed)
