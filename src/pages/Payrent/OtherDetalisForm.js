import React, { useState, useEffect } from "react";
import InputRange from "react-input-range";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getS3SignedUrl, postS3, api } from "../../services/api";
import {
  hitAllUserData,
  hitAppUseCase,
} from "../../store/modules/userDetails/actions";
import Loader from "../../component/Loader";
import axios from "axios";
import { API_ENDPOINT_STAGING } from "../../constant";
//import Header from "../../component/Header";
import Header from "../Header";
import Footer from "../Footer";
import Cookies from "universal-cookie";
import { Container } from "react-bootstrap";
import tip from "../../images/svg/tip.png";
import { bindActionCreators } from 'redux';
const cookies = new Cookies();

const OtherDetalisForm = (props) => {
  
  const token = cookies.get("token");
  // const [logintoken, setlogintoken] = usest
  const [serviceCharge, setserviceCharge] = useState(0);
  const [kyc_verified, setkyc_verified] = useState(false);
  const [landLordName, setlandLordName] = useState("");
  const [errorlandLordName, seterrorlandLordName] = useState("");
  const [yourName, setyourName] = useState("");
  const [name, setName] = useState(props.user.userData?.customusermodel.first_name);
  const [erroryourName, seterroryourName] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [errormobileNumber, seterrormobileNumber] = useState("");
  const [loader, setloader] = useState(false);
  const [pinCode, setpinCode] = useState("");
  const [AddressLine1, setAddressLine1] = useState("");
  const [AddressLine2, setAddressLine2] = useState("");
  const [state, setstate] = useState("");
  const [errorstate, seterrorstate] = useState("");
  const [uploadRentAgreement, setuploadRentAgreement] = useState({});
  const [signedUrl, setsignedUrl] = useState({});
  const [erroruploadRentAgreement, seterroruploadRentAgreement] = useState("");
  const [city, setcity] = useState("");
  const [errorcity, seterrorcity] = useState("");
  const [errorAddressLine1, seterrorAddressLine1] = useState("");
  const [errorPincode, seterrorPincode] = useState("");
  const [RentAmount, setRentAmount] = useState(100);
  const [errorRentAmount, seterrorRentAmount] = useState("");
  const [userdocumentsmodel, setuserdocumentsmodel] = useState({});
  const [landlordActNumber, setlandlordActNumber] = useState("");
  const [errorlandlordActNumber, seterrorlandlordActNumber] = useState("");
  const [conflandlordActNumber, setconflandlordActNumber] = useState("");
  const [errorconflandlordActNumber, seterrorconflandlordActNumber] =
    useState("");
  const [ifscCode, setifscCode] = useState("");
  const [errorifscCode, seterrorifscCode] = useState("");
  const [bankName, setbankName] = useState("");
  const [errorbankName, seterrorbankName] = useState("");
  const [panNumber, setpanNumber] = useState("");
  const [errorpanNumber, seterrorpanNumber] = useState("");
  const [jwtToken, setjwtToken] = useState("");
  const [transactionHistory, settransactionHistory] = useState({});
  const [lastName, setLastName] = useState("");
  const [screen1, setScreen1] = useState(true);
  const [screen2, setScreen2] = useState(false);
  const [screen3, setScreen3] = useState(false);
  const[correctPan,setcorrectPan]=useState("")
  

  async function getSignedUrl() {
    const pathArray = [
      `pay_rent/${props.user.userData?.id}/rent_agreement.jpeg`,
    ];
    const signedUrlObj = await getS3SignedUrl({
      token: token,
      payload: { s3_path: pathArray },
    });
    setsignedUrl(signedUrlObj.data.data);
    console.log(343434, signedUrlObj.data.data);
  }


  const handleAggrementUpload = (event) => {
    seterroruploadRentAgreement("");
    setuploadRentAgreement(event.target.files[0]);
  };

  async function updateDocStatus(data) {
    return await api.post(
      "/api/update_document_status/",
      { doc_type: data.docType, path: data.path },
      { headers: { Authorization: "Token " + token } }
    );
  }

  useEffect(() => {
   
    if(!token )
    {props.history.push("/")}
    handleName();
    props.hitAllUserData({ token: token });
   
   

    props.user.userData
      ? setuserdocumentsmodel(props.user.userData.userdocumentsmodel)
      : null;
    getSignedUrl();
    if (
      (props.user.userData &&
        props.user.userData.props.user.userData?.userdocumentsmodel.kyc_verified === "VERIFIED") ||
      props.user.userData?.userdocumentsmodel.kyc_verified === "VERIFIED"
    ) {
      setkyc_verified(true);
    }
    let url = `${API_ENDPOINT_STAGING}/api/pay-rent/get-jwt-initiate-payment/`;
    console.log("eerererer", url);
    let config = {
      headers: {
        Authorization: "Token " + token,
        "Content-Type": "application/json",
      },
    };
    console.log("tokennn",token)
    // return (dispatch) => new Promise(async (resolve, reject) => {
    axios
      .get(url, config)
      .then((response) => {
        console.log("response1 hi hi hi",response)
        setserviceCharge(response.data.service_charge);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          // cookies.remove("token", { path: "/" });
        }
        console.log(userdocumentsmodel);
        console.log("eeeeee", err);
      });

    let url2 = `${API_ENDPOINT_STAGING}/api/pay-rent/get-jwt-initiate-payment/?request_type=token`;
    // let config = {
    //   headers: {
    //     Authorization: "Token " + token,
    //     'Content-Type': "application/json"
    //   }
    // }
    // return (dispatch) => new Promise(async (resolve, reject) => {
    axios
      .get(url2, config)
      .then((response) => {
        console.log("response1",response)
        setjwtToken(response.data.token);
      })
      .catch((err) => {
        console.log(34343434, err);
      });

    let url3 = `${API_ENDPOINT_STAGING}/api/pay-rent/list-payment-history/`;
    let config3 = {
      headers: {
        Authorization: "Token " + token,
      },
    };
    // return (dispatch) => new Promise(async (resolve, reject) => {
    axios
      .get(url3, config3)
      .then((res) => {
        console.log("response hisotry",res)
        console.log("history man", res.data.results);
        settransactionHistory(res.data);
        // setTransactionHistory(res.data)
        // return resolve(res.data)
      })
      .catch((err) => {
        console.log("history", err);
      });
    // })
  }, []);
  
  useEffect(() => {

    handleName();
   
  }, [props]);
console.log("namenmane",props.user.userData?.customusermodel.first_name,props.user.userData?.customusermodel.last_name)
  function handleName  ()  {
    console.log("setName")
    setName(props.user.userData?.customusermodel.first_name);
    setLastName(props.user.userData?.customusermodel.last_name);
  };

  const handleScreen2 = () => {
    if (!RentAmount || !/^\d+$/.test(RentAmount) || Number(RentAmount) <= 0) {
      seterrorRentAmount("Please enter rent amount in digits");
      return;
    }
    if (Number(RentAmount) > 15000 && !panNumber) {
      seterrorpanNumber("Please enter your pan number");
      return;
    }
    if (Number(RentAmount) > 15000 && !uploadRentAgreement.name) {
      seterroruploadRentAgreement("Please upload rent agreement");
      return;
    }
    setScreen1(false);
    setScreen2(true);
  };
  const handleScreen3 = () => {
    if (!landLordName) {
      seterrorlandLordName("Please enter your landlord name");
      return;
    }
    if (!yourName) {
      seterroryourName("Please enter your name");
      return;
    }
    if (!mobileNumber) {
      seterrormobileNumber("Please enter your mobile number");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
      seterrormobileNumber("Please input valid 10 digit mobile number");
      return;
    }
    if (!AddressLine1) {
      seterrorAddressLine1("Please enter your address");
      return;
    }
    if (!pinCode) {
      seterrorPincode("Please enter your pincode");
      return;
    }
    if (!/^\d{6}$/.test(pinCode)) {
      seterrorPincode("Please input valid 6 digit pin code");
      return;
    }
    if (!state) {
      seterrorstate("Please enter your state");
      return;
    }
    if (!city) {
      seterrorcity("Please enter your city");
      return;
    }
    setScreen2(false);
    setScreen1(false);
    setScreen3(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!landlordActNumber ) {
      seterrorlandlordActNumber("Please enter landlord account number");
      return;
    }
    if (!conflandlordActNumber) {
      seterrorconflandlordActNumber("Please confirm landlord account number");
      return;
    }
    if (landlordActNumber !== conflandlordActNumber) {
      seterrorconflandlordActNumber(
        "Account number and Confirm account number does not matched."
      );
      return;
    }
    if (!ifscCode ) {
      seterrorifscCode("Please enter ifsc code");
      return;
    }
    if (!bankName) {
      seterrorbankName("Please enter bank name");
      return;
    }

    setloader(true);
    const payer = {
      amount: parseInt(RentAmount),
      first_name: yourName,
      phone_number: mobileNumber,
      city: city,
      zipcode: pinCode,
      address: `${AddressLine1} ${AddressLine2}`,
      state: state,
      country: "India",
    };

    const payee = {
      bene_name: landLordName,
      bank_name: bankName,
      ifsc_code: ifscCode,
      account_number: landlordActNumber,
      pan_number: panNumber,
    };

    if (Number(RentAmount) > 15000) {
      const updateREntAgreementstatus = updateDocStatus({
        docType: "rent_agreement",
        path: `pay_rent/${props.user.userData.id}/rent_agreement.jpeg`,
      });
      const uploadREntAgreement = postS3({
        res: uploadRentAgreement,
        presignedPostData:
          signedUrl[`pay_rent/${props.user.userData.id}/rent_agreement.jpeg`],
      });
      Promise.all([uploadREntAgreement, updateREntAgreementstatus])
        .then((response) => {
          setloader(false);
          props.history.push({
            pathname: "/detail-summary",
            state: { payer, payee, serviceCharge, jwt_token: jwtToken },
          });
        })
        .catch((error) => {
          setloader(false);
        });
    } else {
      setloader(false);
      props.history.push({
        pathname: "/detail-summary",
        state: { payer, payee, serviceCharge, jwt_token: jwtToken },
      });
    }
  };
  console.log(
    "name",
    name,
    kyc_verified,
    props.user.userData?.userdocumentsmodel.kyc_verified
  );

  return (
    <>
      <Header {...props} />
      <div className="content darkBg">
       
        {loader ? (
          <div className="loader">
            {" "}
            <Loader color={"#33658a"} />{" "}
          </div>
        ) : (
          // kyc_verified ?
          <Container>
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                <br />
                <a className="back-arrow" href="">
                  Back
                </a>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                <div className="form-container">
                  <div className="ms-Tabs">
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <Link
                        to="/payrent-other-details"
                        class="btn  ms-group-btn active-btn"
                      >
                        New Transaction
                      </Link>
                      <Link
                        to={{
                          pathname: "/payrent-transaction-history",
                          state: { transactionHistory: transactionHistory },
                        }}
                        class="btn  ms-group-btn "
                      >
                        Transaction History
                      </Link>
                    </div>
                  </div>
                  {props.user.userData?.userdocumentsmodel.kyc_verified==="VERIFIED" ? (
                    <form onSubmit={handleSubmit}>
                      {screen1 ? (
                        <div>
                          <div className="home-contact-form" style={{marginBottom:"10px"}}>
                            <h4 className="form-heading text-center">
                              Fill Out The Following Details
                            </h4>
                            <div className="form-block">
                              <div class="form-group ms-input-group">
                                <label className="form-label">
                                  Hi {name + " " + lastName}, How Much Rent
                                  Would You Like To Pay?
                                </label>
                              </div>
                              <input
                                name="RentAmount"
                                type="text"
                                class="form-control ms-form-input"
                                value={RentAmount}
                                onChange={(e) => {
                                  seterrorRentAmount("");
                                  setRentAmount(e.target.value);
                                }}
                              />
                              {errorRentAmount ? (
                                <span style={{ color: "red" }}>
                                  {errorRentAmount}
                                </span>
                              ) : null}
                              <br></br>
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
                                <br></br>

                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                ></div>
                              </div>
                              {RentAmount > 15000 && (
                                <div>
                                  <div class="form-group ms-input-group">
                                    <label className="form-label">
                                      Landlord's PAN Number
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control ms-form-input"
                                      placeholder="Enter 10 Digit PAN Number Here"
                                      value={panNumber}
                                      onChange={(e) => {

                                        if (e.target.value.match(/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/)) {
                                          setcorrectPan("Correct");
                                         
                                      }
                                   
                                        seterrorpanNumber("");
                                        setpanNumber(e.target.value.toUpperCase());
                                      }}
                                    />
                                    {errorpanNumber ? (
                                      <span style={{ color: "red" }}>
                                        {errorpanNumber}
                                      </span>
                                    ) : null}
                                  </div>
                                  <br></br>
                                  <label className="form-label">
                                    <h4 className="form-heading">
                                      Your Rent Agreement
                                    </h4>
                                  </label>
                                  <br></br>
                                  <label className="form-label ">
                                    Kindly Upload Your Rent Agreement Here
                                  </label>
                                  <br></br>
                                  <div className="file-uploading-block">
                                    <p className="small-text-ms">
                                      Upload Rent Agreement (.jpg, .pdf upto
                                      20MB)
                                    </p>
                                    <br></br>
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
                                      onChange={handleAggrementUpload}
                                      hidden
                                    />
                                    <br/>

                                    {uploadRentAgreement.name? (<span>
                                        {uploadRentAgreement.name}
                                      </span>)
                                     : null}
                                    {erroruploadRentAgreement ? (
                                      <span style={{ color: "red" }}>
                                        {erroruploadRentAgreement}
                                      </span>
                                    ) : null}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          <button
                            onClick={handleScreen2}
                            className="getstartbtn "
                            style={{marginTop:"15x"}}
                          >
                            Save & Continue
                          </button>
                        </div>
                      ) : null}

                      <div>
                        {screen2 ? (
                          <div>
                            <div className="home-contact-form mt-4">
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
                                      seterrorlandLordName("");
                                      if (e.target.value.match(/^[A-Za-z{" "}]+$/)) {
                                        setlandLordName(e.target.value);
                                    } else if (e.target.value.length === 0) {
                                        setlandLordName(e.target.value);
                                    }
                                     
                                    }}
                                  />
                                  {errorlandLordName ? (
                                    <span style={{ color: "red" }}>
                                      {errorlandLordName}
                                    </span>
                                  ) : null}
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
                                      seterroryourName("");
                                      if (e.target.value.match(/^[A-Za-z{" "}]+$/)) {
                                        setyourName(e.target.value);
                                    } else if (e.target.value.length === 0) {
                                        setyourName(e.target.value);
                                    }
                                    
                                    }}
                                  />
                                  {erroryourName ? (
                                    <span style={{ color: "red" }}>
                                      {erroryourName}
                                    </span>
                                  ) : null}
                                </div>
                                <div class="form-group ms-input-group">
                                  <label className="form-label">
                                    Landlord's Mobile Number
                                  </label>

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
                                      type="number"
                                      class="form-control ms-form-input"
                                      placeholder="9999999999"
                                      value={mobileNumber}
                                      onChange={(e) => {
                                        seterrormobileNumber("");
                                        setmobileNumber(e.target.value.slice(0,10));
                                      }}
                                    />
                                    {errormobileNumber ? (
                                      <span style={{ color: "red" }}>
                                        {errormobileNumber}
                                      </span>
                                    ) : null}
                                  </div>
                                </div>

                                <div class="form-group ms-input-group">
                                  <label className="form-label">
                                    Property Address (for which you are paying
                                    Rent)
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control ms-form-input"
                                    placeholder="Address Line 1"
                                    value={AddressLine1}
                                    onChange={(e) => {
                                      seterrorAddressLine1("");
                                      setAddressLine1(e.target.value);
                                    }}
                                  />
                                  {errorAddressLine1 ? (
                                    <span style={{ color: "red" }}>
                                      {errorAddressLine1}
                                    </span>
                                  ) : null}
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
                                    type="number"
                                    class="form-control ms-form-input"
                                    placeholder="Enter Pincode Of Your Property"
                                    value={pinCode}
                                    onChange={(e) => {
                                      seterrorPincode("");
                                      setpinCode(e.target.value.slice(0,6));
                                    }}
                                  />
                                  {errorPincode ? (
                                    <span style={{ color: "red" }}>
                                      {errorPincode}
                                    </span>
                                  ) : null}
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
                                        seterrorstate("");
                                        if (e.target.value.match(/^[A-Za-z{" "}]+$/)) {
                                          setstate(e.target.value);
                                     } else if (e.target.value.length === 0) {
                                          setstate(e.target.value);
                                     }
                                      
                                      }}
                                    />
                                    {errorstate ? (
                                      <span style={{ color: "red" }}>
                                        {errorstate}
                                      </span>
                                    ) : null}
                                  </div>
                                  <div class="form-group ms-input-group col-6">
                                    <label className="form-label">City</label>
                                    <input
                                      type="text"
                                      class="form-control ms-form-input"
                                      placeholder="Delhi"
                                      value={city}
                                      onChange={(e) => {
                                        seterrorcity("");
                                        if (e.target.value.match(/^[A-Za-z{" "}]+$/)) {
                                           setcity(e.target.value);
                                      } else if (e.target.value.length === 0) {
                                           setcity(e.target.value);
                                      }
                                      
                                      }}
                                    />
                                    {errorcity ? (
                                      <span style={{ color: "red" }}>
                                        {errorcity}
                                      </span>
                                    ) : null}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={handleScreen3}
                              className="getstartbtn "
                              style={{ marginTop: "15px" }}
                            >
                              Save & Continue
                            </button>
                          </div>
                        ) : null}

                        {screen3 ? (
                          <div>
                            <div className="home-contact-form mt-4">
                              <h4 className="form-heading">
                                Landlord's Bank Details
                              </h4>
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
                                      seterrorlandlordActNumber("");
                                    
                                      setlandlordActNumber(e.target.value.slice(0,22));
                                    }}
                                  />
                                  {errorlandlordActNumber ? (
                                    <span style={{ color: "red" }}>
                                      {errorlandlordActNumber}
                                    </span>
                                  ) : null}
                                </div>
                                <div class="form-group ms-input-group">
                                  <label className="form-label">
                                    Confirm Account Number
                                  </label>
                                  <input
                                    type="number"
                                    class="form-control ms-form-input"
                                    placeholder="Enter 16 digits A/c Number"
                                    value={conflandlordActNumber}
                                    onChange={(e) => {
                                      seterrorconflandlordActNumber("");
                                      setconflandlordActNumber(e.target.value.slice(0,22));
                                    }}
                                  />
                                  {errorconflandlordActNumber ? (
                                    <span style={{ color: "red" }}>
                                      {errorconflandlordActNumber}
                                    </span>
                                  ) : null}
                                </div>
                                <div class="form-group ms-input-group">
                                  <label className="form-label">
                                    Bank IFSC Code
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control ms-form-input"
                                    placeholder="Enter IFSC Code Here"
                                    value={ifscCode}
                                    onChange={(e) => {
                                      seterrorifscCode("");
                                      setifscCode(e.target.value.toUpperCase());
                                    }}
                                  />
                                  {errorifscCode ? (
                                    <span style={{ color: "red" }}>
                                      {errorifscCode}
                                    </span>
                                  ) : null}
                                </div>
                                <div class="form-group ms-input-group">
                                  <label className="form-label">
                                    Bank Name
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control ms-form-input"
                                    placeholder="Enter 16 digits A/c Number"
                                    value={bankName}
                                    onChange={(e) => {
                                      seterrorbankName("");
                                      setbankName(e.target.value);
                                    }}
                                  />
                                  {errorbankName ? (
                                    <span style={{ color: "red" }}>
                                      {errorbankName}
                                    </span>
                                  ) : null}
                                </div>
                              </div>
                              <input
                                type="submit"
                                value="Submit"
                                className="getstartbtn "
                              />
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </form>
                  ) : (
                    <div className="home-contact-form">
                      <h4 className="form-heading text-center">
                        Your KYC is not verified
                      </h4>
                      <br></br>
                      {props.user.userData?.userdocumentsmodel.kyc_verified === "NOT_SUBMITTED" ||
                      props.user.userData?.userdocumentsmodel.kyc_verified === "NOT_VALID" ? (
                        <div>
                          <span
                            className="reloadicon"
                            style={{
                              opacity: "0.59",
                              right: "200px",
                              fontFamily: "Montserrat",
                            }}
                          >
                            Kyc status:{" "}
                          </span>
                          <span
                            className="reloadicon"
                            style={{
                              color: "red",
                              opacity: "0.59",
                              right: "200px",
                              fontFamily: "Montserrat",
                            }}
                          >
                            {props.user.userData?.userdocumentsmodel.kyc_verified}
                          </span>
                        </div>
                      ) : null}

                      {props.user.userData?.userdocumentsmodel.kyc_verified ===
                      "PENDING_VERIFICATION" ? (
                        <div>
                          <span
                            className="reloadicon"
                            style={{
                              opacity: "0.59",
                              right: "200px",
                              fontFamily: "Montserrat",
                            }}
                          >
                            Kyc status:{" "}
                          </span>
                         <Link to="#"  onClick={() => {
                            props.hitAppUseCase({ useCase: "pay-rent" });
                            props.history.push({ pathname: "/kycoption" });
                          }}> <span
                            className="reloadicon"
                            style={{
                              color: "#ff8000",
                              opacity: "0.59",
                              right: "200px",
                              fontFamily: "Montserrat",
                            }}
                          >
                            {props.user.userData?.userdocumentsmodel.kyc_verified}
                          </span> </Link>
                        </div>
                      ) : null}

                      {props.user.userData?.userdocumentsmodel.kyc_verified ===
                      "PENDING_VERIFICATION" ? (
                        <div>
                          <br></br>
                          <p style={{ fontFamily: "Montserrat" }}>
                            We are verifying your details.
                          </p>
                        </div>
                      ) : null}
                      {props.user.userData?.userdocumentsmodel.kyc_verified !==
                      "PENDING_VERIFICATION" ? (
                        <input
                          type="button"
                          value="CLICK HERE TO DO KYC AGAIN"
                          className="getstartbtn "
                          onClick={() => {
                            props.hitAppUseCase({ useCase: "pay-rent" });
                            props.history.push({ pathname: "/kycoption" });
                          }}
                          style={{ margin: "83px 0px 72px 0" ,cursor:"pointer"}}
                        />
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                <div className="height100">
                  <div>
                    <div className="circle-half">
                      <div className="full-circle">
                        <img src={tip} alt="Icon" />
                      </div>
                      <div className="full-text text-left">
                        <h5>Tips</h5>
                        <p>
                          In expedita et occaecati ullam a cumque maiores
                          perspiciatis. Non labore exercitationem rerum nulla ea
                          veniam facilis et.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="circle-half">
                      <p className="p-a-10">
                        In expedita et occaecati ullam a cumque maiores
                        perspiciatis.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        )}
      </div>
    </>
  );
};

// export default OtherDetalisForm;

const mapStateToProps = (state) => {
  return {
    token: state.authDetails.token,
    phoneNumber: state.authDetails.phone_number,
    user: state.user,
  };
};

const dispatchToProps = (dispatch)=>{
  return bindActionCreators({
    hitAppUseCase,
    hitAllUserData
  }, dispatch)
}

export default connect(mapStateToProps, dispatchToProps)(OtherDetalisForm);
