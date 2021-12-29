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
import { API_ENDPOINT_STAGING, API_ENDPOINT } from "../../constant";
import successAnimation from "../../images/animated/success-animation.gif";
//import Header from "../../component/Header";
import Header from "../Header";
import Footer from "../Footer";
import Cookies from "universal-cookie";
import { Container } from "react-bootstrap";
import tip from "../../images/svg/tip.png";
import { bindActionCreators } from "redux";
import kycIcon from "../../images/svg/professional-details.svg";
const cookies = new Cookies();

const OtherDetalisForm = (props) => {
  const token = cookies.get("token");
  const payrentConversion = cookies.get("payrentconversion");
  const [serviceCharge, setserviceCharge] = useState(0);
  const [kyc_verified, setkyc_verified] = useState(false);
  const [landLordName, setlandLordName] = useState("");
  const [errorlandLordName, seterrorlandLordName] = useState("");
  const [yourName, setyourName] = useState("");
  const [name, setName] = useState(
    props.user.userData?.customusermodel.first_name
  );
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
  const [lastName, setLastName] = useState("");
  const [screen1, setScreen1] = useState(true);
  const [screen2, setScreen2] = useState(false);
  const [screen3, setScreen3] = useState(false);
  const [correctPan, setcorrectPan] = useState("");

  const [kycStatus, setKycStatus] = useState("");

  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };
    gtag("event", "conversion", {
      send_to: "AW-875618776/zLCQCPKg1PYCENjDw6ED",
      event_callback: callback,
    });
    return false;
  }

  useEffect(() => {
    if (payrentConversion) {
      hotJarForPayrent();
      gtag_report_conversion("");
      cookies.remove("payrentconversion");
    }
    const hotJarForPayrent = () => {
      (function (h, o, t, j, a, r) {
        h.hj =
          h.hj ||
          function () {
            (h.hj.q = h.hj.q || []).push(arguments);
          };
        h._hjSettings = { hjid: 2759152, hjsv: 6 };
        a = o.getElementsByTagName("head")[0];
        r = o.createElement("script");
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
      })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
    };

    if (token) {
      let url = `${API_ENDPOINT}/api/get_document_status/`;
      let config = {
        headers: {
          Authorization: "Token " + token,
        },
      };
      axios
        .get(url, config)
        .then((response) => {
          setKycStatus(response.data.data[0].kyc_verified);
          //console.log("stepmanual", response.data.data[0]);
        })
        .catch((err) => {
          if (err?.response?.status === 401) {
            cookies.remove("token", { path: "/" });
            props.history.push("/");
          }
          //console.log(err);
        });
    }
  });

  async function getSignedUrl() {
    const pathArray = [
      `pay_rent/${props.user.userData?.id}/rent_agreement.jpeg`,
    ];
    const signedUrlObj = await getS3SignedUrl({
      token: token,
      payload: { s3_path: pathArray },
    });
    setsignedUrl(signedUrlObj.data.data);
    //console.log(343434, signedUrlObj.data.data);
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
    if (!token) {
      props.history.push("/");
    }
    handleName();
    props.hitAllUserData({ token: token });
    getSignedUrl();

    props.user.userData
      ? setuserdocumentsmodel(props.user.userData.userdocumentsmodel)
      : null;
    getSignedUrl();

    let config = {
      headers: {
        Authorization: "Token " + token,
        "Content-Type": "application/json",
      },
    };

    // return (dispatch) => new Promise(async (resolve, reject) => {
    axios
      .get(
        `${API_ENDPOINT_STAGING}/api/pay-rent/get-jwt-initiate-payment/`,
        config
      )
      .then((response) => {
        setserviceCharge(response.data.service_charge);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          cookies.remove("token", { path: "/" });
        }
        //console.log("eeeeee", err);
      });

    // let url2 = `${API_ENDPOINT_STAGING}/api/pay-rent/get-jwt-initiate-payment/?request_type=token`;
    // let config = {
    //   headers: {
    //     Authorization: "Token " + token,
    //     'Content-Type': "application/json"
    //   }
    // }
    // return (dispatch) => new Promise(async (resolve, reject) => {
    axios
      .get(
        `${API_ENDPOINT_STAGING}/api/pay-rent/get-jwt-initiate-payment/?request_type=token`,
        config
      )
      .then((response) => {
        setjwtToken(response.data.token);
      })
      .catch((err) => {
        //console.log(34343434, err);
      });
  }, []);

  useEffect(() => {
    handleName();
  }, [props]);

  function handleName() {
    //console.log("setName")
    setName(props.user.userData?.customusermodel.first_name);
    setLastName(props.user.userData?.customusermodel.last_name);
  }

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

    if (!landlordActNumber) {
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
    if (!ifscCode) {
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

  return (
    <>
      <Header {...props} active="payrent" />

      {loader ? (
        <div className="loader">
          {" "}
          <Loader color={"#33658a"} />{" "}
        </div>
      ) : (
        // kyc_verified ?
        <div className="content darkBg">
          <Container>
            {kycStatus === "VERIFIED" ? (
              <form onSubmit={handleSubmit}>
                {screen1 ? (
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                      <br />
                      <a className="back-arrow" href="">
                        Back
                      </a>
                      <br />
                      <Link
                        to={{
                          pathname: "/payrent-transaction-history",
                        }}
                        className="small-green-btn"
                      >
                        Transaction History
                      </Link>
                      <br />
                      <br />
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                      <div
                        className="home-contact-form"
                        style={{ marginBottom: "10px" }}
                      >
                        <h4 className="h4 text-center">
                          Hi {name + " " + lastName}, How Much Rent Would You
                          Like To Pay?
                        </h4>
                        <div className="form-block p-b-30">
                          <input
                            name="RentAmount"
                            type="text"
                            className="form-control ms-form-input"
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
                              <div className="form-group ms-input-group">
                                <label className="form-label">
                                  Landlord's PAN Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control ms-form-input"
                                  placeholder="Enter 10 Digit PAN Number Here"
                                  value={panNumber}
                                  onChange={(e) => {
                                    if (
                                      e.target.value.match(
                                        /^([A-Z]){5}([0-9]){4}([A-Z]){1}$/
                                      )
                                    ) {
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
                              <div className="step-step p-t-30 border-btm">
                                <div className="img-wrapper">
                                  <img
                                    className="img-fluid"
                                    src={kycIcon}
                                    alt="Upload"
                                  />
                                </div>
                                <div className="img-text">
                                  <h6>Your Rent Agreement</h6>
                                  <p>
                                    Kindly Upload Your Rent Agreement Here
                                    <br /> Upload Rent Agreement (.jpg, .pdf
                                    upto 20MB)
                                  </p>
                                  {uploadRentAgreement.name ? (
                                    <span>{uploadRentAgreement.name}</span>
                                  ) : null}
                                  {erroruploadRentAgreement ? (
                                    <span style={{ color: "red" }}>
                                      {erroruploadRentAgreement}
                                    </span>
                                  ) : null}
                                  <input
                                    type="file"
                                    className="custom-file-input"
                                    id="PAN"
                                    onChange={handleAggrementUpload}
                                    hidden
                                  />
                                </div>
                                <div className="wrapper-button">
                                  <a
                                    className="green-button"
                                    href="javascript:document.querySelector('input#PAN').click()"
                                  >
                                    Upload
                                  </a>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <button
                          onClick={handleScreen2}
                          className="getstartbtn "
                          style={{ marginTop: "15x" }}
                        >
                          Save & Continue
                        </button>
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
                                Rent Agreement is required if your rent amount
                                is more than or equal to Rs. 15,000. For rent
                                more than Rs. 50,000 the landlord's PAN details
                                would be required.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div>
                  {screen2 ? (
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                        <br />
                        <a className="back-arrow" href="">
                          Back
                        </a>
                      </div>
                      <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                        <div className="home-contact-form mt-4">
                          <h4 className="form-heading">
                            What is your address?
                          </h4>
                          <div className="form-block">
                            <div className="form-group ms-input-group">
                              <label className="form-label">
                                Landlord Name
                              </label>
                              <input
                                type="text"
                                className="form-input"
                                placeholder="e.g Salman Khan"
                                value={landLordName}
                                onChange={(e) => {
                                  seterrorlandLordName("");
                                  if (
                                    e.target.value.match(/^[A-Za-z{" "}]+$/)
                                  ) {
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
                            <div className="form-group ms-input-group">
                              <label className="form-label">Your Name</label>
                              <input
                                type="text"
                                className="form-input"
                                placeholder="e.g Salman Khan"
                                value={yourName}
                                onChange={(e) => {
                                  seterroryourName("");
                                  if (
                                    e.target.value.match(/^[A-Za-z{" "}]+$/)
                                  ) {
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
                            <div className="form-group ms-input-group">
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
                                  className="form-input"
                                  placeholder="9999999999"
                                  value={mobileNumber}
                                  onChange={(e) => {
                                    seterrormobileNumber("");
                                    setmobileNumber(
                                      e.target.value.slice(0, 10)
                                    );
                                  }}
                                />
                                {errormobileNumber ? (
                                  <span style={{ color: "red" }}>
                                    {errormobileNumber}
                                  </span>
                                ) : null}
                              </div>
                            </div>

                            <div className="form-group ms-input-group">
                              <label className="form-label">
                                Property Address (for which you are paying Rent)
                              </label>
                              <input
                                type="text"
                                className="form-input"
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
                                className="form-input mt-2"
                                placeholder="Address Line 2"
                                value={AddressLine2}
                                onChange={(e) => {
                                  setAddressLine2(e.target.value);
                                }}
                              />
                            </div>
                            <div className="form-group ms-input-group">
                              <label className="form-label">Pin Code</label>
                              <input
                                type="number"
                                className="form-input"
                                placeholder="Enter Pincode Of Your Property"
                                value={pinCode}
                                onChange={(e) => {
                                  seterrorPincode("");
                                  setpinCode(e.target.value.slice(0, 6));
                                }}
                              />
                              {errorPincode ? (
                                <span style={{ color: "red" }}>
                                  {errorPincode}
                                </span>
                              ) : null}
                            </div>

                            <div className="row">
                              <div className="form-group ms-input-group col-6">
                                <label className="form-label">State</label>
                                <input
                                  type="text"
                                  className="form-input"
                                  placeholder="Delhi"
                                  value={state}
                                  onChange={(e) => {
                                    seterrorstate("");
                                    if (
                                      e.target.value.match(/^[A-Za-z{" "}]+$/)
                                    ) {
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
                              <div className="form-group ms-input-group col-6">
                                <label className="form-label">City</label>
                                <input
                                  type="text"
                                  className="form-input"
                                  placeholder="Delhi"
                                  value={city}
                                  onChange={(e) => {
                                    seterrorcity("");
                                    if (
                                      e.target.value.match(/^[A-Za-z{" "}]+$/)
                                    ) {
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
                          <button
                            onClick={handleScreen3}
                            className="getstartbtn "
                            style={{ marginTop: "15px" }}
                          >
                            Save & Continue
                          </button>
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
                                  It is suggested to fill the address correctly
                                  in order to avail of HRA benefits.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {screen3 ? (
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                        <br />
                        <a className="back-arrow" href="">
                          Back
                        </a>
                      </div>
                      <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                        <div className="home-contact-form mt-4">
                          <h4 className="form-heading">
                            Landlord's Bank Details
                          </h4>
                          <div className="form-block">
                            <div className="form-group ms-input-group">
                              <label className="form-label">
                                Landlord's Account Number
                              </label>
                              <input
                                type="text"
                                className="form-input"
                                placeholder="Enter 16 digits A/c Number"
                                value={landlordActNumber}
                                onChange={(e) => {
                                  seterrorlandlordActNumber("");

                                  setlandlordActNumber(
                                    e.target.value.slice(0, 22)
                                  );
                                }}
                              />
                              {errorlandlordActNumber ? (
                                <span style={{ color: "red" }}>
                                  {errorlandlordActNumber}
                                </span>
                              ) : null}
                            </div>
                            <div className="form-group ms-input-group">
                              <label className="form-label">
                                Confirm Account Number
                              </label>
                              <input
                                type="number"
                                className="form-input"
                                placeholder="Enter 16 digits A/c Number"
                                value={conflandlordActNumber}
                                onChange={(e) => {
                                  seterrorconflandlordActNumber("");
                                  setconflandlordActNumber(
                                    e.target.value.slice(0, 22)
                                  );
                                }}
                              />
                              {errorconflandlordActNumber ? (
                                <span style={{ color: "red" }}>
                                  {errorconflandlordActNumber}
                                </span>
                              ) : null}
                            </div>
                            <div className="form-group ms-input-group">
                              <label className="form-label">
                                Bank IFSC Code
                              </label>
                              <input
                                type="text"
                                className="form-input"
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
                            <div className="form-group ms-input-group">
                              <label className="form-label">Bank Name</label>
                              <input
                                type="text"
                                className="form-input"
                                placeholder="Enter Bank Name"
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
                                  It is suggested to cross-check your landlord's
                                  account details before submitting and
                                  proceeding with payment.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </form>
            ) : kycStatus === "NOT_SUBMITTED" || kycStatus === "NOT_VALID" ? (
              <div className="row" style={{ marginBottom: "10%" }}>
                <div className="col-lg-3 col-md-3 col-sm-12 text-center">
                  <br />
                  <a className="back-arrow" href="">
                    Back
                  </a>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                  <div className="home-contact-form">
                    <img
                      src={successAnimation}
                      className="img-fluid max-width70"
                      alt="Icon"
                    />
                    <br />
                    <br />
                    <h4
                      className="form-heading text-center"
                      style={{ fontSize: "25px" }}
                    >
                      Hi {name + " " + lastName} ,
                    </h4>
                    <h4
                      className="form-heading text-center"
                      style={{ fontSize: "25px" }}
                    >
                      Your KYC is not verified
                    </h4>

                    {kycStatus === "NOT_SUBMITTED" ||
                    kycStatus === "NOT_VALID" ? (
                      <div>
                        <span
                          className="reloadicon"
                          style={{
                            opacity: "0.59",
                            right: "200px",
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
                          }}
                        >
                          {kycStatus}
                        </span>
                      </div>
                    ) : null}

                    {kycStatus === "PENDING_VERIFICATION" ? (
                      <div>
                        <span
                          className="reloadicon"
                          style={{
                            opacity: "0.59",
                            right: "200px",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          Kyc status:{" "}
                        </span>
                        <Link
                          to="#"
                          onClick={() => {
                            props.hitAppUseCase({ useCase: "pay-rent" });
                            props.history.push({ pathname: "/kycoption" });
                          }}
                        >
                          {" "}
                          <span
                            className="reloadicon"
                            style={{
                              color: "#ff8000",
                              opacity: "0.59",
                              right: "200px",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            {kycStatus}
                          </span>{" "}
                        </Link>
                      </div>
                    ) : null}

                    {kycStatus === "PENDING_VERIFICATION" ? (
                      <div>
                        <br></br>
                        <b
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "18px",
                            fontStyle: "bold",
                          }}
                        >
                          Congratulations for successfully submitting your
                          documents . Kindly wait untill your documents are
                          verified
                        </b>
                      </div>
                    ) : null}
                    {kycStatus !== "PENDING_VERIFICATION" ? (
                      <input
                        type="button"
                        value="CLICK HERE TO DO KYC AGAIN"
                        className="getstartbtn "
                        onClick={() => {
                          props.hitAppUseCase({ useCase: "pay-rent" });
                          props.history.push({ pathname: "/kycoption" });
                        }}
                        style={{ margin: "83px 0px 72px 0", cursor: "pointer" }}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            ) : null}
          </Container>
        </div>
      )}
      <Footer />
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

const dispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      hitAppUseCase,
      hitAllUserData,
    },
    dispatch
  );
};

export default connect(mapStateToProps, dispatchToProps)(OtherDetalisForm);
