import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { hitAllUserData } from "../../store/modules/userDetails/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import backicon from "../../component/img/backicon.png";
import Progressbar from "../../component/ProgressBar";
// import {getIndustryList} from "../../services/api";
import { getS3SignedUrl, postS3, api } from "../../services/api";
import Loader from "../../component/Loader";
import axios from "axios";
import { API_ENDPOINT } from "../../constant";
import Header from "../Header";
import Footer from "../Footer";

const Professionaldetailspayme = (props) => {
  const [inhandsalary, setInhandsalary] = useState("");
  const [industry, setIndustry] = useState("");
  const [workExp, setWorkExp] = useState("");
  const [officePincode, setOfficePincode] = useState("");
  const [organizationName, setorganizationName] = useState("");
  const [errororganizationName, seterrororganizationName] = useState("");
  const [salaryDate, setsalaryDate] = useState("");
  const [loader, setloader] = useState(false);
  const [errorsalaryDate, seterrorsalaryDate] = useState("");
  const [officeAddressLine1, setofficeAddressLine1] = useState("");
  const [officeAddressLine2, setofficeAddressLine2] = useState("");
  const [officeEmail, setofficeEmail] = useState("");
  const [uploadSalarySlip, setuploadSalarySlip] = useState({});
  const [signedUrl, setsignedUrl] = useState({});
  const [erroruploadSalarySlip, seterroruploadSalarySlip] = useState("");
  const [uploadOfficeId, setuploadOfficeId] = useState({});
  const [presentAddLine1, setpresentAddLine1] = useState("");
  const [presentAddLine2, setpresentAddLine2] = useState("");
  const [presentPincode, setpresentPincode] = useState("");
  const [errorpresentAddLine1, seterrorpresentAddLine1] = useState("");
  const [errorpresentPincode, seterrorpresentPincode] = useState("");
  const [errorOfficePincode, setErrorOfficePincode] = useState("");
  const [errorworkExp, setErrorworkExp] = useState("");
  const [errorindustry, setErrorindustry] = useState("");
  const [errorSalary, setErrorSalary] = useState("");
  const [errorOfficePinCode, setErrorOfficePinCode] = useState("");
  const [errorPinCode, setErrorPinCode] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    let url = `${API_ENDPOINT}api/industry_list/`;
    let config = {
      headers: {
        Authorization: "Token " + props.token,
      },
    };
    // return (dispatch) => new Promise(async (resolve, reject) => {
    axios
      .get(url, config)
      .then((res) => {
        setData(res.data.data);
        console.log("history man", res);

        // setTransactionHistory(res.data)
        // return resolve(res.data)
      })
      .catch((err) => {
        console.log("history", err);
      });
    // })
  }, []);

  // console.log(data)

  async function getSignedUrl() {
    const pathArray = [
      `salary_slip/${props.user.id}/front.jpg`,
      `office_id/${props.user.id}/front.jpg`,
    ];
    const signedUrlObj = await getS3SignedUrl({
      token: props.token,
      payload: { s3_path: pathArray, bucket_name: "payme-test-documents" },
    });
    setsignedUrl(signedUrlObj.data.data);
    console.log(343434, signedUrlObj.data.data);
  }

  async function updateDocStatus(data) {
    console.log("rrrtttyyy", data);
    return await api.post(
      "/api/update_document_status/",
      { doc_type: data.docType, path: data.path },
      { headers: { Authorization: "Token " + props.token } }
    );
  }

  async function updateProfessionalDetails() {
    const payload = {
      current_company: organizationName,
      self_employed: false,
      office_address: `${officeAddressLine1} ${officeAddressLine2}`,
      salary_date: salaryDate,
      present_address: `${presentAddLine1} ${presentAddLine2}`,
      present_pincode: presentPincode,
      in_hand_salary: inhandsalary,
      total_years_of_experience: workExp,
      company_pincode: officePincode,
      industry: Number(industry),
    };
    return await api.post("/api/user_details/professional_details/", payload, {
      headers: { Authorization: "Token " + props.token },
    });
  }

  useEffect(() => {
    if (!props.user) {
      props.history.push({ pathname: "/" });
      return;
    }
    getSignedUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!industry) {
      setErrorindustry("Please Select Your Employement ");
      alert("Please Select Your Employement");
      return;
    }
    if (!organizationName) {
      seterrororganizationName("Please enter your oraganization name");
      alert("Please enter your oraganization name");
      return;
    }
    if (!workExp) {
      setErrorworkExp("Please Enter Work Experience");
      alert("Please Enter Work Experience");
      return;
    }
    if (!inhandsalary) {
      setErrorSalary("Please Enter salary");
      alert("Please Enter salary");
      return;
    }
    if (!salaryDate) {
      seterrorsalaryDate("Please enter your salary date");
      alert("Please enter your salary date");
      return;
    }
    if (!uploadSalarySlip.name) {
      seterroruploadSalarySlip("Please upload your latest salary slip");
      alert("Please upload your latest salary slip");
      return;
    }
    if (!presentAddLine1) {
      seterrorpresentAddLine1("please enter adress.");
      alert("Please enter adress");

      return;
    }
    if (!presentPincode) {
      seterrorpresentPincode("Please enter pin code");
      alert("Please enter pin code");
      return;
    }
    const uploadSalaryFront = postS3({
      res: uploadSalarySlip,
      presignedPostData: signedUrl[`salary_slip/${props.user.id}/front.jpg`],
    });
    const updateSalaryFrontStatus = updateDocStatus({
      docType: "salary_slip",
      path: `salary_slip/${props.user.id}/front.jpg`,
    });
    let OfficeDataArr = [];
    if (uploadOfficeId.name) {
      const uploadOfficeFront = postS3({
        res: uploadOfficeId,
        presignedPostData: signedUrl[`office_id/${props.user.id}/front.jpg`],
      });
      const updateOfficeFrontStatus = updateDocStatus({
        docType: "office_id",
        path: `office_id/${props.user.id}/front.jpg`,
      });
      OfficeDataArr.push(uploadOfficeFront, updateOfficeFrontStatus);
    }
    Promise.all([
      ...[uploadSalaryFront, updateSalaryFrontStatus],
      ...OfficeDataArr,
      ...[updateProfessionalDetails()],
    ])
      .then((response) => {
        setloader(false);
        console.log("xvxvxvxvx", response);
        props.hitAllUserData({ token: props.token });
        props.history.push({ pathname: "/pending-approval" });
      })
      .catch((error) => {
        console.log(121212, error);
        setloader(false);
      });
  };

  const handlesalaryUpload = (event) => {
    seterroruploadSalarySlip("");
    setuploadSalarySlip(event.target.files[0]);
  };

  const handleofficeUpload = (event) => {
    setuploadOfficeId(event.target.files[0]);
  };
  console.log("pramod", data.data);
  return (
    <>
      <Header {...props}/>
      <Container className="pb-5">
        {loader ? (
          <div className="loader">
            {" "}
            <Loader color={"#33658a"} />{" "}
          </div>
        ) : (
          <div className="form-container formcontainermob  pt-4">
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
              <div className="Home-contact-form ">
                <div class="form-group ms-input-group">
                  <label className="form-label">Employment Status</label>
                </div>
                <div className="py-4">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      checked={true}
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
                  <Link to="/self-employed">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
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
                <h4 className="form-heading text-center">Job Details</h4>

                <div className="form-block">
                  <div class="form-group ms-input-group">
                    <label>What do you do ?</label>
                    <select
                      class="form-control ms-form-input"
                      onChange={(event) => {
                        setErrorindustry("");
                        setIndustry(event.target.value);
                      }}
                    >
                      <option value="" hidden>
                        Select employment
                      </option>
                      {data
                        ? data.map((industry) => (
                            <option key={industry.name} value={industry.id}>
                              {industry.name}
                            </option>
                          ))
                        : null}
                    </select>
                    {errorindustry ? (
                      <span style={{ color: "red" }}>{errorindustry}</span>
                    ) : null}
                  </div>
                </div>
                <div className="form-block">
                  <div class="form-group ms-input-group">
                    <label className="form-label">
                      Current Organization Name
                    </label>
                    <input
                      type="text"
                      class="form-control ms-form-input"
                      placeholder="Enter Organization Name"
                      value={organizationName}
                      onChange={(event) => {
                        seterrororganizationName("");
                        setorganizationName(event.target.value);
                      }}
                    />
                    {errororganizationName ? (
                      <span style={{ color: "red" }}>
                        {errororganizationName}
                      </span>
                    ) : null}
                  </div>
                  <div class="form-group ms-input-group">
                    <label className="form-label">Work Experience(years)</label>
                    <input
                      type="number"
                      class="form-control ms-form-input"
                      placeholder="Enter Work Experience"
                      value={workExp}
                      onChange={(event) => {
                        setErrorworkExp("");
                        setWorkExp(event.target.value);
                      }}
                    />
                    {errorworkExp ? (
                      <span style={{ color: "red" }}>{errorworkExp}</span>
                    ) : null}
                  </div>
                  <div class="form-group ms-input-group">
                    <label className="form-label">Salary</label>
                    <input
                      type="number"
                      class="form-control ms-form-input"
                      placeholder="Enter Salary"
                      value={inhandsalary}
                      onChange={(event) => {
                        setErrorSalary("");
                        setInhandsalary(event.target.value);
                      }}
                    />
                    {errorSalary ? (
                      <span style={{ color: "red" }}>{errorSalary}</span>
                    ) : null}
                  </div>
                  <div class="form-group ms-input-group">
                    <label className="form-label">Office Address</label>
                    <input
                      type="text"
                      class="form-control ms-form-input"
                      placeholder="Address Line 1"
                      value={officeAddressLine1}
                      onChange={(event) => {
                        setofficeAddressLine1(event.target.value);
                      }}
                    />
                    <input
                      type="text"
                      class="form-control ms-form-input mt-2"
                      placeholder="Address Line 2"
                      value={officeAddressLine2}
                      onChange={(event) => {
                        setofficeAddressLine2(event.target.value);
                      }}
                    />
                  </div>

                  <div class="form-group ms-input-group">
                    <label className="form-label">Office PinCode</label>
                    <input
                      type="number"
                      class="form-control ms-form-input"
                      placeholder="Enter Office PinCode"
                      maxlength= "6"
                      value={officePincode}
                      onChange={(event) => {
                        if (
                          event.target.value.match(/^[1-9]{1}[0-9]{2}[0-9]{3}$/)
                        ) {
                          setErrorOfficePinCode("");
                        } else {
                          setErrorOfficePinCode("PinCode must have 6 digit");
                        }

                        setErrorOfficePincode("");
                        setOfficePincode(event.target.value);
                      }}
                    />
                    {errorOfficePinCode ? (
                      <span style={{ color: "red" }}>{errorOfficePinCode}</span>
                    ) : null}
                    {errorOfficePincode ? (
                      <span style={{ color: "red" }}>{errorOfficePincode}</span>
                    ) : null}
                  </div>

                  <div class="form-group ms-input-group">
                    <label className="form-label">
                      Next Salary Date(DD/MM/YYYY)
                    </label>
                    <input
                      type="date"
                      class="form-control ms-form-input"
                      value={salaryDate}
                      onChange={(event) => {
                        seterrorsalaryDate("");
                        setsalaryDate(event.target.value);
                      }}
                    />
                    {errorsalaryDate ? (
                      <span style={{ color: "red" }}>{errorsalaryDate}</span>
                    ) : null}
                  </div>

                  <div class="form-group ms-input-group">
                    <label className="form-label">Official Email ID</label>
                    <input
                      type="email"
                      class="form-control ms-form-input"
                      placeholder="Enter Email ID"
                      value={officeEmail}
                      onChange={(event) => {
                        setofficeEmail(event.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label className="form-label">
                      Upload Recent salary slip
                    </label>

                    <div className="file-uploading-block">
                      <a
                        className="upload-btn-text"
                        href="javascript:document.querySelector('input#uploadsalary').click()"
                      >
                        Upload
                      </a>
                      <br />
                      {uploadSalarySlip.name ? (
                        <span style={{ color: "black" }} className="">
                          {uploadSalarySlip.name}
                        </span>
                      ) : null}
                      <input
                        type="file"
                        class="custom-file-input"
                        id="uploadsalary"
                        onChange={handlesalaryUpload}
                        hidden
                      />
                    </div>
                    {erroruploadSalarySlip ? (
                      <span style={{ color: "red" }}>
                        {erroruploadSalarySlip}
                      </span>
                    ) : null}
                  </div>
                  <div>
                    <label className="form-label">Upload Office ID card</label>

                    <div className="file-uploading-block">
                      <a
                        className="upload-btn-text"
                        href="javascript:document.querySelector('input#uploadoffice').click()"
                      >
                        Upload
                      </a>
                      <br />
                      {uploadOfficeId.name ? (
                        <span style={{ color: "black" }} className="">
                          {uploadOfficeId.name}
                        </span>
                      ) : null}
                      <input
                        type="file"
                        class="custom-file-input"
                        id="uploadoffice"
                        onChange={handleofficeUpload}
                        hidden
                      />
                    </div>

                    <div className="form-block">
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
                          type="text"
                          class="form-control ms-form-input"
                          placeholder="110025"
                          maxLength="6"
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
                            setpresentPincode(event.target.value);
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
                  style={{ color: "white"}}
                  className="getstartbtn fontstyformQuiklone"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        )}
      </Container>

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
      // hitLogin,
      hitAllUserData,
      // hitForgotMpin,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  dispatchToProps
)(Professionaldetailspayme);
