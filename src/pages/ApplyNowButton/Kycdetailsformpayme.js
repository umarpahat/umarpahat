import React, { useState, useEffect } from "react";
import {
  hitAllUserData,
  hitAppUseCase,
} from "../../store/modules/userDetails/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getS3SignedUrl, postS3, api } from "../../services/api";
import Loader from "../../component/Loader";
import Header from "../Header";
import Footer from "../Footer";
import Cookies from "universal-cookie";
import { Container } from "react-bootstrap";
import aadhaarCard from "../../images/svg/aadhaar-card.svg";
import panCard from "../../images/svg/pan-card.svg";
import selfie from "../../images/svg/selfie.svg";
import tip from "../../images/animated/kyc-option.gif";

const cookies = new Cookies();

const Kycdetailsformpayme = (props) => {
  const userCase = cookies.get("userCase");
  //console.log("kyc now ", props);
  const token = cookies.get("token");
  const [show, setShow] = useState(false);
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [gender, setgender] = useState("");
  const [panNumber, setpanNumber] = useState("");
  const [panFile, setpanFile] = useState({});
  const [aadhaarFileFront, setaadhaarFileFront] = useState({});
  const [aadhaarFileBack, setaadhaarFileBack] = useState({});
  const [errorName, seterrorName] = useState("");
  const [errorDob, seterrorDob] = useState("");
  const [errorGender, seterrorGender] = useState("");
  const [errorPan, seterrorPan] = useState("");
  const [errorPan1, seterrorPan1] = useState("");
  const [errorUploadPan, seterrorUploadPan] = useState("");
  const [errorUploadAdhaarFront, seterrorUploadAdhaarFront] = useState("");
  const [errorUploadAdhaarBack, seterrorUploadAdhaarBack] = useState("");
  const [signedUrl, setsignedUrl] = useState({});
  const [loader, setloader] = useState(false);
  const [profile, setProfile] = useState({});
  const [errorProfile, seterrorProfile] = useState("");
  const [correctPan, setcorrectPan] = useState("");
  const [refresh, setRefresh] = useState(true);

  function refreshhi() {
    props.hitAllUserData({ token: token });
    props.hitAppUseCase();
  }

  if (refresh) {
    refreshhi();
    setRefresh(false);
  }

  //console.log("userCase", userCase);

  const handleClose = () => setShow(!show);

  // const handleOnKeyPress =(event)=> {
  //   return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode==32)
  // }

  async function getSignedUrl() {
    const pathArray = [
      `adhar_card/${props.user.id}/back.jpg`,
      `adhar_card/${props.user.id}/front.jpg`,
      `pan_card/${props.user.id}/front.jpg`,
      `user_image/${props.user.id}/user_profile_photo.jpg`,
    ];
    const signedUrlObj = await getS3SignedUrl({
      token: token,
      payload: { s3_path: pathArray, bucket_name: "payme-test-documents" },
    });
    setsignedUrl(signedUrlObj.data.data);
    //console.log(343434, signedUrlObj.data.data);
  }

  useEffect(() => {
    if (!token) {
      props.history.push({ pathname: "/" });
    }
    getSignedUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  const handlePanUpload = (event) => {
    seterrorUploadPan("");
    setpanFile(event.target.files[0]);
  };
  const handleProfileUpload = (event) => {
    seterrorProfile("");
    setProfile(event.target.files[0]);
  };

  const handleAadhaarUploadFront = (event) => {
    seterrorUploadAdhaarFront("");
    setaadhaarFileFront(event.target.files[0]);
  };

  const handleAadhaarUploadBack = (event) => {
    seterrorUploadAdhaarBack("");
    setaadhaarFileBack(event.target.files[0]);
  };

  async function updateDocStatus(data) {
    return await api.post(
      "/api/update_document_status/",
      { doc_type: data.docType, path: data.path },
      { headers: { Authorization: "Token " + token } }
    );
  }

  async function updateBasicInfo() {
    return await api.post(
      "/api/offline_manual_kyc/",
      { dob: date, gender: gender, pan_card_number: panNumber },
      { headers: { Authorization: "Token " + token } }
    );
  }

  const handleSubmit = (event) => {
    // let panNum = event.target.value;
    // let pattarn = /^([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
    event.preventDefault();
    if (!name) {
      seterrorName("Please enter name");
      return;
    }
    if (!date) {
      seterrorDob("Please enter date");
      return;
    }
    if (!panNumber) {
      seterrorPan("Please enter pan number");
      return;
    }
    if (!gender) {
      seterrorGender("Please enter gender");
      return;
    }
   

  
    if (!aadhaarFileFront.name) {
      seterrorUploadAdhaarFront("Please upload adhaar front");
      return;
    }
    if (!aadhaarFileBack.name) {
      seterrorUploadAdhaarBack("Please upload adhaar Back");
      return;
    }
  if(!panFile.name){
    seterrorUploadPan("Please Upload PAN Card")
    return;
  }
    if (!profile.name) {
      seterrorProfile("Please Upload Profile");
      return;
    }

    setloader(true);
    const uploadAdhaarBack = postS3({
      res: aadhaarFileBack,
      presignedPostData: signedUrl[`adhar_card/${props.user.id}/back.jpg`],
    });
    const uploadAdhaarFront = postS3({
      res: aadhaarFileFront,
      presignedPostData: signedUrl[`adhar_card/${props.user.id}/front.jpg`],
    });

    const uploadPanCard = postS3({
      res: panFile,
      presignedPostData: signedUrl[`pan_card/${props.user.id}/front.jpg`],
    });
    const uploadProfile = postS3({
      res: profile,
      presignedPostData:
        signedUrl[`user_image/${props.user.id}/user_profile_photo.jpg`],
    });
    const updateAdhaarBackStatus = updateDocStatus({
      docType: "adhar_card",
      path: `adhar_card/${props.user.id}/back.jpg`,
    });
    const updateAdhaarFrontStatus = updateDocStatus({
      docType: "adhar_card",
      path: `adhar_card/${props.user.id}/front.jpg`,
    });

    const updatePanStatus = updateDocStatus({
      docType: "pan_card",
      path: `pan_card/${props.user.id}/front.jpg`,
    });
    const updateProfile = updateDocStatus({
      docType: "profile_pic_url",
      path: `user_image/${props.user.id}/user_profile_photo.jpg`,
    });
    Promise.all([
      uploadAdhaarBack,
      uploadAdhaarFront,
      uploadPanCard,
      uploadProfile,
      updateAdhaarBackStatus,
      updateProfile,
      updateAdhaarFrontStatus,
      updatePanStatus,
      updateBasicInfo(),
    ])
      .then((response) => {
        setloader(false);

        props.hitAllUserData({ token: token });

        if (userCase === "apply-loan") {
          if (!props.user.userbankdetail) {
            props.history.push({
              pathname: "/step-manual",
            });
          } else if (
            props.user.userbankdetail.verified === "VERIFIED" ||
            props.user.userbankdetail.verified === "PENDING_VERIFICATION"
          ) {
            if (
              props.user.userdocumentsmodel &&
              (props.user.userdocumentsmodel.salary_slip_verified ===
                "VERIFIED" ||
                props.user.userdocumentsmodel.salary_slip_verified ===
                  "PENDING_VERIFICATION")
            ) {
              props.history.push({ pathname: "/pending-approval" });
            } else {
              props.history.push({ pathname: "/professional-details-payme" });
            }
          } else {
            props.history.push({ pathname: "/bank-details-payme" });
          }
        } else if (userCase === "pay-rent") {
          props.history.push({ pathname: "/payrent-other-details" });
        } else {
          props.history.push({ pathname: "/" });
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          cookies.remove("token", { path: "/" });
        }
        setloader(false);
      });
  };

  return (
    <>
      <Header {...props} />
     
        {loader ? (
          <div className="loader">
            {" "}
            <Loader color={"#33658a"} />{" "}
          </div>
        ) : (
          <div className="content darkBg">
          <Container>
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                <br />
                <a
                  className="back-arrow"
                  onClick={() => {
                    props.history.goBack();
                  }}
                >
                  Back
                </a>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12 text-center">
                <form onSubmit={handleSubmit}>
                  <div className="home-contact-form">
                    <h4 className="form-heading formheadding">
                      Complete your KYC
                    </h4>
                    <div className="form-block">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group ms-input-group">
                            <label className="form-label-text">Full Name</label>
                            <input
                              className="form-input "
                              placeholder="Enter Full Name"
                              value={name}
                              onChange={(event) => {
                                seterrorName("");
                                if (
                                  event.target.value.match(/^[A-Za-z{" "}]+$/)
                                ) {
                                  setname(event.target.value);
                                } else if (event.target.value.length === 0) {
                                  setname(event.target.value);
                                }
                              }}
                            />
                            {errorName ? (
                              <span style={{ color: "red" }}>{errorName}</span>
                            ) : null}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group ms-input-group">
                            <label className="form-label-text">
                              Date of Birth
                            </label>
                            <input
                              type="date"
                              min="1920-01-01"
                              max="2003-01-01"
                              className="form-input"
                              value={date}
                              onChange={(event) => {
                                seterrorDob("");
                                setdate(event.target.value);
                              }}
                            />
                            {errorDob ? (
                              <span style={{ color: "red" }}>{errorDob}</span>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group ms-input-group">
                            <label className="form-label-text">
                              PAN Number
                            </label>
                            <input
                              type="text"
                              className="form-input "
                              placeholder="Enter PAN number"
                              maxLength="10"
                              value={panNumber}
                              onChange={(event) => {
                                if (event.target.value != 10) {
                                  seterrorPan1(
                                    "Pancard Number should be  10 characters"
                                  );
                                  setcorrectPan("");
                                }

                                if (
                                  event.target.value.toUpperCase().match(
                                    /^([A-Z]){5}([0-9]){4}([A-Z]){1}$/
                                  )
                                ) {
                                  setcorrectPan("Correct");
                                  seterrorPan1("");
                                } else {
                                  seterrorPan1(
                                    "Please Enter a valid PanCard Number"
                                  );
                                }

                                seterrorPan("");
                                setpanNumber(event.target.value.toUpperCase());
                              }}
                            />
                       

                            {correctPan ? (
                              <span style={{ color: "green" ,fontSize:"small"}}>
                                {correctPan}
                              </span>
                            ) : null}

                            {errorPan1 ? (
                              <span style={{ color: "red" }}>{errorPan1}</span>
                            ) : null}

                            {errorPan ? (
                              <span style={{ color: "red" }}>{errorPan}</span>
                            ) : null}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group ms-input-group">
                            <label className="form-label-text">Gender</label>
                            <div>
                              <select
                                value={gender}
                                placeholder="Select your gender"
                                onChange={(e) => {
                                  //console.log(e.target.value);
                                  seterrorGender("");
                                  setgender(e.target.value);
                                }}
                                className="select-item"
                              >
                                <option value="">Select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                              </select>
                            </div>
                            {errorGender ? (
                              <span style={{ color: "red" }}>
                                {errorGender}
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="step-step p-t-50 border-btm">
                        <div className="img-wrapper">
                          <img
                            className="img-fluid"
                            src={aadhaarCard}
                            alt="Upload Adhar card"
                          />
                        </div>
                        <div className="img-text">
                          <h6>Upload Adhar card</h6>
                          <p>Upload in pdf/jpg/png format</p>
                          {aadhaarFileFront.name ? (
                            <span style={{ color: "black" }} className="">
                              {aadhaarFileFront.name}
                            </span>
                          ) : null}
                          <br/>
                          {aadhaarFileBack.name ? (
                            <span style={{ color: "black" }} className="">
                              {aadhaarFileBack.name}
                            </span>
                          ) : null}
                           {errorUploadAdhaarFront ? (
                              <span style={{ color: "red" }}>
                                {errorUploadAdhaarFront}
                              </span>
                            ) : null}
                              {errorUploadAdhaarBack ? (
                              <span style={{ color: "red" }}>
                                {errorUploadAdhaarBack}
                              </span>
                            ) : null}
                        </div>
                        {/* <div className='wrapper-button'>
                                                    <a className="green-button" >Upload</a>
                                                </div>*/}

                        <div style={{ display: "flex" }}>
                          <div style={{ marginRight: 20 }}>
                            <a
                              className="green-button"
                              href="javascript:document.querySelector('input#Frontofadhaar').click()"
                            >
                              Front
                            </a>

                            <input
                              type="file"
                              accept="image/*"
                              className="custom-file-input"
                              id="Frontofadhaar"
                              hidden
                              onChange={handleAadhaarUploadFront}
                            />
                           
                          </div>
                          <div>
                            <a
                              href="javascript:document.querySelector('input#Backofadhaar').click()"
                              className="green-button"
                            >
                              Back
                            </a>
                            <input
                              type="file"
                              accept="image/*"
                              className="custom-file-input"
                              id="Backofadhaar"
                              hidden
                              onChange={handleAadhaarUploadBack}
                            />
                          
                          </div>
                        </div>
                      </div>
                      <div className="step-step p-t-30 border-btm">
                        <div className="img-wrapper">
                          <img
                            className="img-fluid"
                            src={panCard}
                            alt="Upload Pan Card"
                          />
                        </div>
                        <div className="img-text">
                          <h6>Upload Pan card</h6>
                          <p>Upload in pdf/jpg/png format</p>
                          {panFile.name ? (
                            <span style={{ color: "black" }} className="">
                              {panFile.name}
                            </span>
                          ) : null}
                           {errorUploadPan ? (
                        <span style={{ color: "red" }}>{errorUploadPan}</span>
                      ) : null}
                        </div>
                        <div className="wrapper-button">
                          <a
                            className="green-button"
                            href="javascript:document.querySelector('input#upload-pan').click()"
                          >
                            Upload
                          </a>
                        </div>
                      </div>
                      <div className="step-step p-t-30 border-btm">
                        <div className="img-wrapper">
                          <img
                            className="img-fluid"
                            src={selfie}
                            alt="Upload Selfie"
                          />
                        </div>
                        <div className="img-text">
                          <h6>Upload Photo</h6>
                          <p>Photo should be in clear quality. </p>
                          {profile.name ? (
                            <span style={{ color: "black" }} className="">
                              {profile.name}
                            </span>
                          ) : null}
                           {errorProfile ? (
                        <span style={{ color: "red" }}>{errorProfile}</span>
                      ) : null}
                          
                        </div>
                        <div className="wrapper-button">
                          <a
                            className="green-button"
                            href="javascript:document.querySelector('input#upload-profile').click()"
                          >
                            Upload
                          </a>
                        </div>
                      </div>

                      <input
                        type="file"
                        accept="image/*"
                        className="custom-file-input"
                        name="Upload PAN"
                        id="upload-pan"
                        onChange={handlePanUpload}
                      />
                     

                      <input
                        type="file"
                        accept="image/*"
                        className="custom-file-input"
                        name="Upload Profile"
                        id="upload-profile"
                        onChange={handleProfileUpload}
                      />
                     
                    </div>

                    <input
                      type="submit"
                      style={{ color: "white" }}
                      className="getstartbtn "
                      value="Save and  Continue"
                      onChange={handleSubmit}
                    />
                  </div>
                </form>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 text-center">
                <div className="height100" style={{ height: "100vh" }}>
                  <div>
                    <div
                      className="circle-half"
                      style={{
                        borderRadius: 20,
                        padding: 20,
                        position: "relative",
                      }}
                    >
                      <div
                        className="full-circle"
                        style={{
                          margin: "auto",
                          position: "absolute",
                          top: -76,
                          left: 0,
                          right: 0,
                          height: 110,
                          width: 110,
                        }}
                      >
                        <img src={tip} className="img-fluid" alt="Icon" />
                      </div>
                      <div
                        className="full-text text-left"
                        style={{ width: "100%" }}
                      >
                        <h4>Tips</h4>
                        <p style={{fontSize:"15px"}}>
                          EKYC helps in processing the loan application
                          instantly.
                        </p>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          </div>
        )}
      <Footer/>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.authDetails.token,
    phoneNumber: state.authDetails.phone_number,
    user: state.user.userData,
    useCase: state.user.useCase,
  };
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // hitLogin,
      hitAllUserData,
      hitAppUseCase,
      // hitForgotMpin,
    },
    dispatch
  );
};

export default connect(mapStateToProps, dispatchToProps)(Kycdetailsformpayme);
