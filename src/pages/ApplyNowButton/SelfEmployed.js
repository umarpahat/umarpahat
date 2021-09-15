import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { hitAllUserData } from "../../store/modules/userDetails/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import backicon from "../../component/img/backicon.png";
import Modalkyccomplete from "../../component/modalkyccomplete";
import Progressbar from "../../component/ProgressBar";
import { getS3SignedUrl, postS3, api } from "../../services/api";
import Loader from "../../component/Loader";
import Footer from "../Footer";
import Header from "../Header";
import Cookies from 'universal-cookie';
import tip from "../../images/svg/tip.png";

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
    console.log(343434, signedUrlObj.data.data);
  }

  useEffect(() => {
    if (!props.user) {
      props.history.push({ pathname: "/" });
      return;
    }
    getSignedUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  async function updateDocStatus(data) {
    console.log("rrrtttyyy", data);
    return await api.post(
      "/api/update_document_status/",
      { doc_type: data.docType, path: data.path },
      { headers: { Authorization: "Token " + token } }
    );
  }

  async function updateProfessionalDetails() {
    console.log("bhbhbhbhbhbhb");
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
        console.log("xvxvxvxvx", response);
        props.hitAllUserData({ token: token });
        props.history.push({ pathname: "/pending-approval" });
      })
      .catch((error) => {
        console.log(121212, error);
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
            <div className="col-lg-5 col-md-5 col-sm-12 text-center">
          <div className="pt-2">
            <div className="pb-4">
              <Progressbar />
            </div>
            <div className="d-flex"
              onClick={() => {
                props.history.goBack();
              }}
              to="#"
              style={{ cursor: "pointer" }}>
              <div className="m-1">
                <img src={backicon} alt='back Icon' className="img-fluid" />
              </div>
              <div>
                <h6 className="backbtnsty">Back</h6>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div classNaEmploymentme="home-contact-form mt-4">
              <div class="form-group ms-input-group">
                <label className="form-label"> Status </label>
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
              <h4 className="form-heading text-center">Business Details</h4>
              <div className="form-block">
                <div>
                  <label className="form-label ">Upload Recent ITR </label>
                  <div className="file-uploading-block">
                    <a
                      className="upload-btn-text"
                      href="javascript:document.querySelector('input#PAN').click()"
                    >
                      Upload
                    </a>
                    <br />
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
                      class="custom-file-input"
                      id="PAN"
                      onChange={handleItrUpload}
                      hidden
                    />
                  </div>
                  <div class="form-group ms-input-group">
                    <div class="form-group ms-input-group">
                      <label className="form-label">Present Address</label>
                      <input
                        type="text"
                        class="form-control ms-form-input mt-2"
                        placeholder="Address Line 1"
                        value={presentAddLine1}
                        onChange={(event) => {
                          seterrorpresentAddLine1("");
                          setpresentAddLine1(event.target.value);
                        }}
                      />
                      <input
                        type="text"
                        class="form-control ms-form-input mt-2"
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
                    <div class="form-group ms-input-group">
                      <label className="form-label">Present Pin Code</label>
                      <input
                        type="number"
                        class="form-control ms-form-input"
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
            <div className="col-lg-5 col-md-5 col-sm-12 text-center">
              <div className='height100'>
                <div>
                  <div className='circle-half'>
                    <div className='full-circle'>
                      <img src={tip} alt='Icon'/>
                    </div>
                    <div className='full-text text-left'>
                      <h5>Tips</h5>
                      <p>In expedita et occaecati ullam a cumque maiores perspiciatis. Non labore exercitationem
                        rerum nulla ea veniam facilis et. </p>
                    </div>
                  </div>
                  <div className='circle-half'>
                    <p className='p-a-10'>In expedita et occaecati ullam a cumque maiores perspiciatis. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
      <Modalkyccomplete show={show} handleClose={handleClose} />
      </div>)}
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
