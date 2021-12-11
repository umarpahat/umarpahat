import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { hitAllUserData } from "../../store/modules/userDetails/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getS3SignedUrl, postS3, api } from "../../services/api";
import Loader from "../../component/Loader";
import Footer from "../Footer";
import Header from "../Header";
import Cookies from 'universal-cookie';
import tip from "../../images/svg/tip.png";
import kycIcon from "../../images/svg/professional-details.svg";

const cookies = new Cookies()
const SelfEmployed = (props) => {
  const token = cookies.get('token')
  const [show, setShow] = useState(false);
  const [loader, setloader] = useState(false);
  const [uploadItr, setuploadItr] = useState({});
  const [signedUrl, setsignedUrl] = useState({});
  const [erroruploadItr, seterroruploadItr] = useState("");
  const [presentAddLine1, setpresentAddLine1] = useState("");
  const [presentAddLine2, setpresentAddLine2] = useState("");
  const [presentPincode, setpresentPincode] = useState("");
  const [errorpresentAddLine1, seterrorpresentAddLine1] = useState("");
  const [errorpresentPincode, seterrorpresentPincode] = useState("");
  const [errorPinCode, setErrorPinCode] = useState("");

  async function getSignedUrl() {
    const pathArray = [`other_document/${props.user.id}/latest_itr.pdf`];
    const signedUrlObj = await getS3SignedUrl({
      token: token,
      payload: { s3_path: pathArray, bucket_name: "payme-test-documents" },
    });
    setsignedUrl(signedUrlObj.data.data);
    //console.log(343434, signedUrlObj.data.data);
  }
  var something = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            props.hitAllUserData({ token: token });
        }
    };
})();

useEffect(() => {

   getSignedUrl();
  
 }, [props]);

  useEffect(() => {
   something();
    if (!token) {
      props.history.push({ pathname: "/" });
      return;
    }
    getSignedUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function updateDocStatus(data) {
    //console.log("rrrtttyyy", data);
    return await api.post(
      "/api/update_document_status/",
      { doc_type: data.docType, path: data.path },
      { headers: { Authorization: "Token " + token } }
    );
  }

  async function updateProfessionalDetails() {
    //console.log("bhbhbhbhbhbhb");
    const payload = {
      self_employed: true,
      present_address: `${presentAddLine1} ${presentAddLine2}`,
      present_pincode: presentPincode,
    };
    return await api.post("/api/user_details/professional_details/", payload, {
      headers: { Authorization: "Token " + token },
    });
  }

  const handleSubmit = (event) => {
    setloader(true)
    event.preventDefault();
    if (!uploadItr.name) {
      seterroruploadItr("Please upload your latest ITR");
      return;
    }
    if (!presentAddLine1) {
      seterrorpresentAddLine1("please enter adress.");
      return;
    }
    if (!presentPincode) {
      seterrorpresentPincode("Please enter pin code");
      return;
    }

    const uploadItrFront = postS3({
      res: uploadItr,
      presignedPostData:
        signedUrl[`other_document/${props.user.id}/latest_itr.pdf`],
    });
    const updateSalaryFrontStatus = updateDocStatus({
      docType: "latest_itr",
      path: `other_document/${props.user.id}/latest_itr.pdf`,
    });
    Promise.all([
      ...[uploadItrFront, updateSalaryFrontStatus],
      ...[updateProfessionalDetails()],
    ])
      .then((response) => {
        setloader(false);
        //console.log("xvxvxvxvx", response);
      
        props.history.push({ pathname: "/congratulations" });
      })
      .catch((error) => {
        //console.log(121212, error);
        setloader(false);
      });
  };

  const handleItrUpload = (event) => {
    seterroruploadItr("");
    setuploadItr(event.target.files[0]);
  };

  const handleClose = () => setShow(!show);
  return (
    <>
      <Header {...props} />
      {loader ?  (
          <div className="loader">
            {" "}
            <Loader color={"#33658a"} />{" "}
          </div>
        ) : (
      <div className='content darkBg'>
      <Container>
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
              <br/>
              <a className='back-arrow' href=''>Back</a>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 text-center">
          <form onSubmit={handleSubmit}>

            <div className="home-contact-form">
              <h4 className="form-heading formheadding">Status</h4>
              <div className="py-4">
                <Link to="/professional-details-payme">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      checked={false}
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label
                      className="form-check-label form-label pr-5"
                      for="inlineRadio1"
                    >
                      Salaried
                    </label>
                  </div>
                </Link>
                <Link to="/selfEmployed">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      checked={true}
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label
                      className="form-check-label form-label"
                      for="inlineRadio2"
                    >
                      Self-Employed
                    </label>
                  </div>
                </Link>
              </div>
              <h4 className="form-heading text-center">Business Details</h4>
              <div className='step-step p-t-30 border-btm'>
                <div className='img-wrapper'>
                  <img className='img-fluid' src={kycIcon} alt='Upload'/>
                </div>
                <div className='img-text'>
                  <h6>Upload Recent ITR </h6>
                  <p>ony pdf file</p>
                  {erroruploadItr ? (
                      <span style={{ color: "red" }}>{erroruploadItr}</span>
                  ) : null}
                  {uploadItr.name ? (
                      <span style={{ color: "black" }} className="">
                        {uploadItr.name}
                      </span>
                  ) : null}
                  <input
                      type="file"
                      accept=".pdf"
                      className="custom-file-input"
                      id="PAN"
                      onChange={handleItrUpload}
                      hidden
                  />
                </div>
                <div className='wrapper-button'>
                  <a className="green-button"  href="javascript:document.querySelector('input#PAN').click()" >
                    Upload</a>

                </div>

              </div>
              <div className="form-block">
                <div>

                  <div className="form-group ms-input-group">
                    <div className="form-group ms-input-group">
                      <label className="form-label">Present Address</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Address Line 1"
                        value={presentAddLine1}
                        onChange={(event) => {
                          seterrorpresentAddLine1("");
                          setpresentAddLine1(event.target.value);
                        }}
                      />
                      <br/>
                      <br/>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Address Line 2"
                        value={presentAddLine2}
                        onChange={(event) => {
                          setpresentAddLine2(event.target.value);
                        }}
                      />
                      {errorpresentAddLine1 ? (
                        <span style={{ color: "red" }}>
                          {errorpresentAddLine1}
                        </span>
                      ) : null}
                    </div>
                    <div className="form-group ms-input-group">
                      <label className="form-label">Present Pin Code</label>
                      <input
                        type="number"
                        className="form-input"
                        placeholder="110025"
                        maxLength={6}
                        value={presentPincode}
                        onChange={(event) => {

                          if (
                              event.target.value.match(
                                /^[1-9]{1}[0-9]{2}[0-9]{3}$/
                              )
                            ) {
                              setErrorPinCode("");
                            } else {
                              setErrorPinCode("PinCode must have 6 digit");
                            }

                          seterrorpresentPincode("");
                          setpresentPincode(event.target.value.slice(0,6));
                        }}
                      />


                      {errorPinCode ? (
                        <span style={{ color: "red" }}>{errorPinCode}</span>
                      ) : null}
                      {errorpresentPincode ? (
                        <span style={{ color: "red" }}>
                          {errorpresentPincode}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <input
                type="submit"
                style={{ color: "white" }}
                className="getstartbtn "
                value="Submit"
              />
            </div>
          </form>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 text-center">
              <div className="height100" style={{height: "100vh"}}>
                <div>
                  <div className="circle-half" style={{borderRadius: 20, padding: 20, position:'relative'}}>
                    <div className="full-circle" style={{
                      margin: 'auto',
                      position: 'absolute',
                      top: -76,
                      left: 0,
                      right: 0,
                      height:110,
                      width:110
                    }}>
                      <img src={tip} className='img-fluid' alt="Icon"/>
                    </div>
                    <div className="full-text text-left" style={{width:'100%'}}>
                      <h5>Tips</h5>
                      <p style={{fontSize:"15px"}}>Provide your professional details to help us in assigning a higher credit limit </p>
                    </div>
                  </div>
                  <div className="circle-half">
                    <p className="p-a-10" style={{fontSize:"15px"}}>Kindly share the latest information.</p>
                  </div>
                  <div className="circle-half">
                    <p className="p-a-10" style={{fontSize:"15px"}}>The latest ITR will increase your chance of getting the limit approved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
      </div>)}
        <Footer/>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.authDetails.token,
    phoneNumber: state.authDetails.phone_number,
    user: state.user.userData,
  };
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      hitAllUserData,
    },
    dispatch
  );
};

export default connect(mapStateToProps, dispatchToProps)(SelfEmployed);
