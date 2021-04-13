import React, { useState, useEffect } from "react";
import InputRange from "react-input-range";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import {getS3SignedUrl, postS3, api} from "../../services/api"
import { hitAllUserData, hitAppUseCase } from '../../store/modules/userDetails/actions';
import Header from "../../component/Header";
import Loader from '../../component/Loader'
import axios from 'axios'
import {API_ENDPOINT_STAGING} from "../../constant" 

const OtherDetalisForm = (props) => {

  // const [logintoken, setlogintoken] = usest
  const [serviceCharge, setserviceCharge] = useState(0)
  const [kyc_verified, setkyc_verified] = useState(false)
  const [landLordName, setlandLordName] = useState("")
  const [errorlandLordName, seterrorlandLordName] = useState("")
  const [yourName, setyourName] = useState("")
  const [erroryourName, seterroryourName] = useState("")
  const [mobileNumber, setmobileNumber] = useState("")
  const [errormobileNumber, seterrormobileNumber] = useState("")
  const [loader, setloader] = useState(false);
  const [pinCode, setpinCode] = useState("")
  const [AddressLine1, setAddressLine1] = useState("")
  const [AddressLine2, setAddressLine2] = useState("")
  const [state, setstate] = useState("")
  const [errorstate, seterrorstate] = useState("")
  const [uploadRentAgreement, setuploadRentAgreement] = useState({})
  const [signedUrl, setsignedUrl] = useState({})
  const [erroruploadRentAgreement, seterroruploadRentAgreement] = useState("")
  const [city, setcity] = useState("")
  const [errorcity, seterrorcity] = useState("")
  const [errorAddressLine1, seterrorAddressLine1] = useState("")
  const [errorPincode, seterrorPincode] = useState("")
  const [RentAmount, setRentAmount] = useState(100);
  const [errorRentAmount, seterrorRentAmount] = useState(100);
  const [userdocumentsmodel, setuserdocumentsmodel] = useState({})
  const [landlordActNumber, setlandlordActNumber] = useState("")
  const [errorlandlordActNumber, seterrorlandlordActNumber] = useState("")
  const [conflandlordActNumber, setconflandlordActNumber] = useState("")
  const [errorconflandlordActNumber, seterrorconflandlordActNumber] = useState("")
  const [ifscCode, setifscCode] = useState("")
  const [errorifscCode, seterrorifscCode] = useState("")
  const [bankName, setbankName] = useState("")
  const [errorbankName, seterrorbankName] = useState("")
  const [panNumber, setpanNumber] = useState("")
  const [errorpanNumber, seterrorpanNumber] = useState("")
  const [jwtToken, setjwtToken] = useState("")
  
  async function getSignedUrl() {
    const pathArray = [`pay_rent/${props.user.userData.id}/rent_agreement.jpeg`]
    const signedUrlObj = await getS3SignedUrl({token: props.token, payload:{"s3_path":pathArray, "bucket_name" :"payme-test-documents"}})
    setsignedUrl(signedUrlObj.data.data)
    console.log(343434, signedUrlObj.data.data)
  }

  useEffect(() => {
    if (!props.token) {
      props.history.push({pathname: '/'})
    }
    if (props.user.userData && Object.keys(props.user.userData).length) {
      setuserdocumentsmodel(props.user.userData.userdocumentsmodel)
    }

});

async function updateDocStatus(data){
  return await api.post('/api/update_document_status/', {doc_type: data.docType, path: data.path}, {headers: { 'Authorization': 'Token ' + props.token } })
}


useEffect(() => {
  console.log("wwwww", props.user)
  props.user.userData ? setuserdocumentsmodel(props.user.userData.userdocumentsmodel) : null
  getSignedUrl()
  if (userdocumentsmodel.kyc_verified === 'VERIFIED') {
    setkyc_verified(true)
  }
  let url = `${API_ENDPOINT_STAGING}/api/pay-rent/get-jwt-initiate-payment/`
  console.log("eerererer", url)
  let config = {
    headers: {
      Authorization: "Token " + props.token,
      'Content-Type': "application/json"
    }
  }
  // return (dispatch) => new Promise(async (resolve, reject) => {
    axios.get(url, config)
    .then((response) => {
      setkyc_verified(true)
      setserviceCharge(response.data.service_charge)
    }).catch((err) => {
      console.log(userdocumentsmodel)
      console.log("eeeeee",err)
      setkyc_verified(false)
    });

    let url2 = `${API_ENDPOINT_STAGING}/api/pay-rent/get-jwt-initiate-payment/?request_type=token`
    // let config = {
    //   headers: {
    //     Authorization: "Token " + token,
    //     'Content-Type': "application/json"
    //   }
    // }
    // return (dispatch) => new Promise(async (resolve, reject) => {
      axios.get(url2, config)
      .then((response) => {
        setjwtToken(response.data.token)
      })
      .catch((err) => {
        console.log(34343434, err)
      })

      let url3 = `${API_ENDPOINT_STAGING}/api/pay-rent/list-payment-history/`
      let config3 = {
        headers: {
          Authorization: "Token " + props.token
        }
      }
      // return (dispatch) => new Promise(async (resolve, reject) => {
        axios.get(url3, config3)
        .then((res) => {
          console.log("history man", res.data)
          // setTransactionHistory(res.data)
          // return resolve(res.data)
        })
        .catch((err) => {
          console.log("history", err)
          // return reject("err: ", err)
        })
      // })

}, [])


const handleSubmit = (event) => {
  event.preventDefault()
if (!RentAmount || !(/^\d+$/.test(RentAmount)) || Number(RentAmount) <= 0) {seterrorRentAmount("Please enter rent amount in digits"); return;}
if (!landLordName) { seterrorlandLordName("Please enter your landlord name"); return;}
if (!yourName) { seterroryourName("Please enter your name"); return;}
if (!mobileNumber) { seterrormobileNumber("Please enter your mobile number"); return;}
if (!/^[6-9]\d{9}$/.test(mobileNumber)) { seterrormobileNumber("Please input valid 10 digit mobile number"); return;}
if (!AddressLine1) { seterrorAddressLine1("Please enter your address"); return;}
if (!pinCode) { seterrorPincode("Please enter your pincode"); return;}
if (!/^\d{6}$/.test(pinCode)) { seterrorPincode("Please input valid 6 digit pin code"); return;}
if (!state) { seterrorstate("Please enter your state"); return;}
if (!city) { seterrorcity("Please enter your city"); return;}
if (!landlordActNumber) {seterrorlandlordActNumber("Please enter landlord account number"); return;}
if (!conflandlordActNumber) {seterrorconflandlordActNumber("Please confirm landlord account number"); return;}
if (landlordActNumber !== conflandlordActNumber) {seterrorconflandlordActNumber("Account number and Confirm account number does not matched."); return;}
if (!ifscCode) {seterrorifscCode("Please enter ifsc code"); return;}
if (!bankName) {seterrorbankName("Please enter bank name"); return;}
if ( Number(RentAmount) > 15000 && !panNumber) { seterrorpanNumber("Please enter your pan number"); return;}
if ( Number(RentAmount) > 15000 && !uploadRentAgreement.name) { seterroruploadRentAgreement("Please upload rent agreement"); return;}
setloader(true)
const payer = {
  "amount": parseInt(RentAmount),
  "first_name": yourName,
  "phone_number": mobileNumber,
  "city": city,
  "zipcode": pinCode,
  "address": `${AddressLine1} ${AddressLine2}`,
  "state": state,
  "country": "India"
}

const payee = {
  "bene_name": landLordName,
  "bank_name": bankName,
  "ifsc_code": ifscCode,
  "account_number": landlordActNumber,
  "pan_number": panNumber
}

if (Number(RentAmount) > 15000) {
  const updateREntAgreementstatus = updateDocStatus({docType:"rent_agreement", path: `pay_rent/${props.user.userData.id}/rent_agreement.jpeg`})
  const uploadREntAgreement = postS3({res:uploadRentAgreement, presignedPostData: signedUrl[`pay_rent/${props.user.userData.id}/rent_agreement.jpeg`]})
  // let updatedocStatus = []
  // const promiseTest = uploadRentAgreement.map((value, index) => {
  // updatedocStatus.push(updateDocStatus({docType:"rent_agreement", path: `pay_rent/${props.user.userData.id}/rent_agreement.jpeg`}))
  // return postS3({res:value, presignedPostData: signedUrl[`bank_statement/${props.user.id}/${index}.pdf`]})
  // })
  Promise.all([uploadREntAgreement, updateREntAgreementstatus]).then((response)=>{
    setloader(false)
    props.history.push({pathname:'/detail-summary', state: {payer, payee, serviceCharge, jwt_token:jwtToken}})
  }).catch((error)=>{
  setloader(false)
  })
} else {
  setloader(false)
  props.history.push({pathname:'/detail-summary', state: {payer, payee, serviceCharge, jwt_token:jwtToken}})
}
// let updatedocStatus = []
// const promiseTest = uploadRentAgreement.map((value, index) => {
// updatedocStatus.push(updateDocStatus({docType:"rent_agreement", path: `pay_rent/${props.user.userData.id}/rent_agreement.jpeg`}))
// return postS3({res:value, presignedPostData: signedUrl[`bank_statement/${props.user.id}/${index}.pdf`]})
// })
// Promise.all([...promiseTest, ...updatedocStatus, ...[updateBankDetails()]]).then((response)=>{
//   setloader(false)
//   props.hitAllUserData({ token: props.token })
//   if (props.user.userdocumentsmodel && (props.user.userdocumentsmodel.salary_slip_verified !== 'VERIFIED' ||
// props.user.userdocumentsmodel.salary_slip_verified !== 'PENDING_VERIFICATION')) {
//   props.history.push({pathname:'/professional-details-payme'})
// } else{
//   props.history.push({pathname:'/pending-approval'})
// }
// }).catch((error)=>{
// setloader(false)
// })
}

  return (
    <>
          {loader ? <div className="loader"> <Loader color={'#33658a'} /> </div> :
kyc_verified ? 
      <div className="form-container">
        <div className="ms-Tabs">
          <div class="btn-group" role="group" aria-label="Basic example">
            <Link
              to="/payrent-other-details"
              class="btn  ms-group-btn active-btn"
            >
              New Transaction
            </Link>
            <Link to="/payrent-transaction-history" class="btn  ms-group-btn ">
              Transaction History
            </Link>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="Home-contact-form">
            <h4 className="form-heading text-center">
              Fill Out The Following Details
            </h4>
            <div className="form-block">
              <div class="form-group ms-input-group">
                <label className="form-label">
                  Hi XYX, How Much Rent Would You Like To Pay?
                </label>
              </div>
              <input
                name="RentAmount"
                type="text"
                class="form-control ms-form-input classtextrangrinput"
                value={RentAmount}
                onChange={(e) => {
                  seterrorRentAmount("")
                  setRentAmount(e.target.value);
                }}
              />
              {errorRentAmount ? <span style={{color:"red"}}>{errorRentAmount}</span> : null}

              <div className="ms-range-slider">
                <div className="py-3">
                  <InputRange
                    maxValue={50000}
                    minValue={100}
                    formatLabel={(maxvalue) => `₹${maxvalue}`}
                    value={RentAmount}
                    onChange={(value) => setRentAmount(value)}
                  />
                </div>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                ></div>
              </div>
              {RentAmount > 15000 && (
                <div>
                  <div class="form-group ms-input-group">
                    <label className="form-label">Landlord's PAN Number</label>
                    <input
                      type="text"
                      class="form-control ms-form-input"
                      placeholder="Enter 10 Digit PAN Number Here"
                      value={panNumber}
                      onChange={(e) => {
                        seterrorpanNumber("")
                        setpanNumber(e.target.value);
                      }}
                    />
                    {errorpanNumber ? <span style={{color:"red"}}>{errorpanNumber}</span> : null}
                  </div>
                  <label className="form-label">
                    <h4 className="form-heading">Your Rent Agreement</h4>
                  </label>
                  <label className="form-label ">
                    Kindly Upload Your Rent Agreement Here
                  </label>

                  <div className="file-uploading-block">
                    <p className="small-text-ms">
                      Upload Rent Agreement (.jpg, .pdf upto 20MB)
                    </p>
                    <a
                      className="upload-btn-text"
                      href="javascript:document.querySelector('input#PAN').click()"
                    >
                      Browse File
                    </a>
                    <input
                      type="file"
                      class="custom-file-input"
                      id="PAN"
                      hidden
                    />
                    {erroruploadRentAgreement ? <span style={{color:"red"}}>{erroruploadRentAgreement}</span> : null}
                  </div>
                </div>
              )}
            </div>
            {/* {RentAmount <= 15000 && (
              <Link to="/detail-summary" className="submit-btn text-center">
                <a style={{ color: "#fff" }}>Submit</a>
              </Link>
            )} */}
          </div>

          <div>
            <div className="Home-contact-form mt-4">
              <h4 className="form-heading">Details</h4>
              <div className="form-block">
                <div class="form-group ms-input-group">
                  <label className="form-label">
                    Landlord's Name (As Per Bank Account)
                  </label>
                  <input
                    type="text"
                    class="form-control ms-form-input"
                    placeholder="e.g Salman Khan"
                    value={landLordName}
                    onChange={(e) => {
                      seterrorlandLordName("")
                      setlandLordName(e.target.value);
                    }}
                  />
                  {errorlandLordName ? <span style={{color:"red"}}>{errorlandLordName}</span> : null}
                </div>
                <div class="form-group ms-input-group">
                  <label className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    class="form-control ms-form-input"
                    placeholder="e.g Salman Khan"
                    value={yourName}
                    onChange={(e) => {
                      seterroryourName("")
                      setyourName(e.target.value);
                    }}
                  />
                  {erroryourName ? <span style={{color:"red"}}>{erroryourName}</span> : null}
                </div>
                <div class="form-group ms-input-group">
                  <label className="form-label">Your Mobile Number</label>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "#fff",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 17,
                        fontWeight: "700",
                        marginLeft: 15,
                        marginRight: 15,
                        color: "#040b4d",
                      }}
                    >
                      +91
                    </span>
                    <input
                      type="text"
                      class="form-control ms-form-input"
                      placeholder="9999999999"
                      value={mobileNumber}
                      onChange={(e) => {
                        seterrormobileNumber("")
                        setmobileNumber(e.target.value);
                      }}
                    />
                    {errormobileNumber ? <span style={{color:"red"}}>{errormobileNumber}</span> : null}
                  </div>
                </div>

                <div class="form-group ms-input-group">
                  <label className="form-label">
                    Property Address (for which you are paying Rent)
                  </label>
                  <input
                    type="text"
                    class="form-control ms-form-input"
                    placeholder="Address Line 1"
                    value={AddressLine1}
                    onChange={(e) => {
                      seterrorAddressLine1("")
                      setAddressLine1(e.target.value);
                    }}
                  />
                  {errorAddressLine1 ? <span style={{color:"red"}}>{errorAddressLine1}</span> : null}
                  <input
                    type="text"
                    class="form-control ms-form-input mt-2"
                    placeholder="Address Line 2"
                    value={AddressLine2}
                    onChange={(e) => {
                      setAddressLine2(e.target.value);
                    }}
                  />
                </div>
                <div class="form-group ms-input-group">
                  <label className="form-label">Pin Code</label>
                  <input
                    type="text"
                    class="form-control ms-form-input"
                    placeholder="Enter Pincode Of Your Property"
                    value={pinCode}
                    onChange={(e) => {
                      seterrorPincode("")
                      setpinCode(e.target.value);
                    }}
                  />
                  {errorPincode ? <span style={{color:"red"}}>{errorPincode}</span> : null}
                </div>

                <div className="row">
                  <div class="form-group ms-input-group col-6">
                    <label className="form-label">State</label>
                    <input
                      type="text"
                      class="form-control ms-form-input"
                      placeholder="Delhi"
                      value={state}
                      onChange={(e) => {
                      seterrorstate("")
                      setstate(e.target.value);
                    }}
                    />
                    {errorstate ? <span style={{color:"red"}}>{errorstate}</span> : null}
                  </div>
                  <div class="form-group ms-input-group col-6">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      class="form-control ms-form-input"
                      placeholder="Delhi"
                      value={city}
                      onChange={(e) => {
                      seterrorcity("")
                      setcity(e.target.value);
                    }}
                    />
                    {errorcity ? <span style={{color:"red"}}>{errorcity}</span> : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="Home-contact-form mt-4">
              <h4 className="form-heading">Landlord's Bank Details</h4>
              <div className="form-block">
                <div class="form-group ms-input-group">
                  <label className="form-label">
                    Landlord's Account Number
                  </label>
                  <input
                    type="text"
                    class="form-control ms-form-input"
                    placeholder="Enter 16 digits A/c Number"
                    value={landlordActNumber}
                    onChange={(e) => {
                    seterrorlandlordActNumber("")
                    setlandlordActNumber(e.target.value);
                  }}
                  />
                  {errorlandlordActNumber ? <span style={{color:"red"}}>{errorlandlordActNumber}</span> : null}
                </div>
                <div class="form-group ms-input-group">
                  <label className="form-label">Confirm Account Number</label>
                  <input
                    type="text"
                    class="form-control ms-form-input"
                    placeholder="Enter 16 digits A/c Number"
                    value={conflandlordActNumber}
                    onChange={(e) => {
                    seterrorconflandlordActNumber("")
                    setconflandlordActNumber(e.target.value);
                  }}
                  />
                  {errorconflandlordActNumber ? <span style={{color:"red"}}>{errorconflandlordActNumber}</span> : null}
                </div>
                <div class="form-group ms-input-group">
                  <label className="form-label">Bank IFSC Code</label>
                  <input
                    type="text"
                    class="form-control ms-form-input"
                    placeholder="Enter IFSC Code Here"
                    value={ifscCode}
                    onChange={(e) => {
                    seterrorifscCode("")
                    setifscCode(e.target.value);
                  }}
                  />
                  {errorifscCode ? <span style={{color:"red"}}>{errorifscCode}</span> : null}
                </div>
                <div class="form-group ms-input-group">
                  <label className="form-label">Bank Name</label>
                  <input
                    type="text"
                    class="form-control ms-form-input"
                    placeholder="Enter 16 digits A/c Number"
                    value={bankName}
                    onChange={(e) => {
                    seterrorbankName("")
                    setbankName(e.target.value);
                  }}
                  />
                  {errorbankName ? <span style={{color:"red"}}>{errorbankName}</span> : null}
                </div>
              </div>
              <input type="submit" value="Submit" className="getstartbtn fontstyformQuiklone" />
            </div>
          </div>
        </form>
      </div> :   <div className="Home-contact-form">
            <h4 className="form-heading text-center">
              Your KYC is not verified
            </h4>
            <p>Kyc status: {userdocumentsmodel.kyc_verified}</p>
            {userdocumentsmodel.kyc_verified === "PENDING_VERIFICATION" ? <p>We are verifying your details.</p> : null}
            { userdocumentsmodel.kyc_verified !== "PENDING_VERIFICATION" ? <input type="button" value="CLICK HERE TO DO KYC AGAIN" className="getstartbtn fontstyformQuiklone" onClick={()=>{
    props.hitAppUseCase({ useCase: 'pay-rent' })
    props.history.push({pathname: "/kyc-details-form"})
    }} style={{margin: "83px 0px 72px 0"}}/>: null}
          </div>}
    </>
  );
};

// export default OtherDetalisForm;

const mapStateToProps = state => {
  return {
      token: state.authDetails.token,
      phoneNumber: state.authDetails.phone_number,
      user: state.user
  }
}


const dispatchToProps =  { hitAppUseCase }
//   return bindActionCreators({
//   }, dispatch)
// }


export default connect(mapStateToProps, dispatchToProps)(OtherDetalisForm)
