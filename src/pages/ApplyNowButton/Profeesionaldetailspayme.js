import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { hitAllUserData,hitAppUseCase } from "../../store/modules/userDetails/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getS3SignedUrl, postS3, api } from "../../services/api";
import Loader from "../../component/Loader";
import axios from "axios";
import { API_ENDPOINT } from "../../constant";
import Header from "../Header";
import Footer from "../Footer";
import Cookies from 'universal-cookie';
import tip from "../../images/animated/kyc-option.gif";
import panCard from "../../images/svg/pan-card.svg";
import kycIcon from "../../images/svg/professional-details.svg";

 
const cookies = new Cookies()



const Professionaldetailspayme = (props) => {
  //console.log("professional details",props)
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

  const token = cookies.get('token')
  
  useEffect(() => {
    props.hitAllUserData({ token: token });
    props.hitAppUseCase()
    let url = `${API_ENDPOINT}/api/industry_list/`;
    let config = {
      headers: {
        Authorization: "Token " + token,
      },
    };
    // return (dispatch) => new Promise(async (resolve, reject) => {
    axios
      .get(url, config)
      .then((res) => {
        setData(res.data.data);
        //console.log("history man", res);

        // setTransactionHistory(res.data)
        // return resolve(res.data)
      })
      .catch((err) => {
        //console.log("history", err);
      });
    // })
  }, []);

  // //console.log(data)

  async function getSignedUrl() {
    const pathArray = [
      `salary_slip/${props.user.id}/front.jpg`,
      `office_id/${props.user.id}/front.jpg`,
    ];
    const signedUrlObj = await getS3SignedUrl({
      token: token,
      payload: { s3_path: pathArray, bucket_name: "payme-test-documents" },
    });
    setsignedUrl(signedUrlObj.data.data);
    //console.log(343434, signedUrlObj.data.data);
  }

  async function updateDocStatus(data) {
    //console.log("rrrtttyyy", data);
    return await api.post(
      "/api/update_document_status/",
      { doc_type: data.docType, path: data.path },
      { headers: { Authorization: "Token " + token } }
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
      headers: { Authorization: "Token " + token },
    });
  }

  useEffect(() => {
    
    if (!token) {
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
     setloader(true);
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
        //console.log("xvxvxvxvx", response);
        props.hitAllUserData({ token: token });
        props.history.push({pathname: "/congratulations"});
      })
      .catch((error) => {
        if(error.response.status===401)
        {
          cookies.remove('token', { path: '/' })
        }
        //console.log(121212, error);
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
  //console.log("pramod", data.data);
  return (
    <>
      <Header {...props}/>
     
        {loader ? (
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
              <div className="home-contact-form ">
                <h4 className="form-heading formheadding">Provide your Bank Information</h4>
                <div className="py-4">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      checked={true}
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label
                      className="form-check-label form-label pr-5"
                      htmlFor="inlineRadio1"
                    >
                      Salaried
                    </label>
                  </div>
                  <Link to="/self-employed">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />

                      <label
                        className="form-check-label form-label"
                        htmlFor="inlineRadio2"
                      >
                        Self-Employed
                      </label>
                    </div>
                  </Link>
                </div>
                <h4 className="form-heading text-center">Job Details</h4>

                <div className="form-block">
                  <div className="form-group ms-input-group">
                    <label>What do you do ?</label>
                    <select
                      className="select-item"
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
                  <div className="form-group ms-input-group">
                    <label className="form-label">
                      Current Organization Name
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter Organization Name"
                      value={organizationName}
                      onChange={(event) => {
                        seterrororganizationName("");
                        if(event.target.value.match(/^[A-Za-z{" "}]+$/)){ 
                        setorganizationName(event.target.value);
                      }
                    else if (event.target.value.length===0)
                  {
                    setorganizationName(event.target.value);
                  }}}
                    />
                    {errororganizationName ? (
                      <span style={{ color: "red" }}>
                        {errororganizationName}
                      </span>
                    ) : null}
                  </div>
                  <div className="form-group ms-input-group">
                    <label className="form-label">Work Experience(years)</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter Work Experience"
                      value={workExp}
                      onChange={(event) => {
                        setErrorworkExp("");
                        setWorkExp(event.target.value.slice(0,2).replace(/\D/g, ""));
                      }}
                    />
                    {errorworkExp ? (
                      <span style={{ color: "red" }}>{errorworkExp}</span>
                    ) : null}
                  </div>
                  <div className="form-group ms-input-group">
                    <label className="form-label">Salary</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter Salary"
                      value={inhandsalary}
                      onChange={(event) => {
                        setErrorSalary("");
                        setInhandsalary(event.target.value.slice(0,10).replace(/\D/g, ""));
                      }}
                    />
                    {errorSalary ? (
                      <span style={{ color: "red" }}>{errorSalary}</span>
                    ) : null}
                  </div>
                  <div className="form-group ms-input-group">
                    <label className="form-label">Office Address</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Address Line 1"
                      value={officeAddressLine1}
                      onChange={(event) => {
                        setofficeAddressLine1(event.target.value);
                      }}
                    />
                    <input
                      type="text"
                      className="form-input mt-2"
                      placeholder="Address Line 2"
                      value={officeAddressLine2}
                      onChange={(event) => {
                        setofficeAddressLine2(event.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group ms-input-group">
                    <label className="form-label">Office PinCode</label>
                    <input
                      type="number"
                      className="form-input"
                      placeholder="Enter Office PinCode"
                      pattern="^[0-9]{6}"
                      maxLength={6}
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
                        setOfficePincode(event.target.value.slice(0,6));
                      }}
                  
                    />
                    {errorOfficePinCode ? (
                      <span style={{ color: "red" }}>{errorOfficePinCode}</span>
                    ) : null}
                    {errorOfficePincode ? (
                      <span style={{ color: "red" }}>{errorOfficePincode}</span>
                    ) : null}
                  </div>

                  <div className="form-group ms-input-group">
                    <label className="form-label">
                      Next Salary Date(DD/MM/YYYY)
                    </label>
                    <input
                      type="date"
                      className="form-input"
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

                  <div className="form-group ms-input-group">
                    <label className="form-label">Official Email ID</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="Enter Email ID"
                      value={officeEmail}
                      onChange={(event) => {
                        setofficeEmail(event.target.value);
                      }}/>
                  </div>
                  <div>

                    {erroruploadSalarySlip ? (
                      <span style={{ color: "red" }}>
                        {erroruploadSalarySlip}
                      </span>
                    ) : null}
                  </div>

                  <div className='step-step p-t-30 border-btm'>
                    <div className='img-wrapper'>
                      <img className='img-fluid' src={kycIcon} alt='Upload'/>
                    </div>
                    <div className='img-text'>
                      <h6>Upload Recent salary slip</h6>
                      <p>Kindly share your latest 3 months salary slip</p>

                      {uploadSalarySlip.name ? (
                          <span style={{ color: "black" }} className="">
                          {uploadSalarySlip.name}
                        </span>
                      ) : null}
                      <input
                          type="file"
                          accept="*/"
                          className="custom-file-input"
                          id="uploadsalary"
                          onChange={handlesalaryUpload}
                          hidden
                      />
                    </div>
                    <div className='wrapper-button'>
                      <a className="green-button"  href="javascript:document.querySelector('input#uploadsalary').click()" >
                        Upload</a>

                    </div>
                    <input
                        type="file"
                        className="custom-file-input"
                        id="uploadoffice"
                        onChange={handleofficeUpload}
                        hidden
                    />
                  </div>

                  <div className='step-step p-t-30 border-btm'>
                    <div className='img-wrapper'>
                      <img className='img-fluid' src={kycIcon} alt='Upload'/>
                    </div>
                    <div className='img-text'>
                      <h6>Upload Office ID card</h6>
                      <p>Kindly share your Office id or Visiting Card</p>
                      {uploadOfficeId.name ? (
                          <span style={{ color: "black" }} className="">
                          {uploadOfficeId.name}
                        </span>
                      ) : null}
                    </div>
                    <div className='wrapper-button'>
                      <a className="green-button"  href="javascript:document.querySelector('input#uploadoffice').click()" >
                        Upload</a>

                    </div>
                    <input
                        type="file"
                        className="custom-file-input"
                        id="uploadoffice"
                        onChange={handleofficeUpload}
                        hidden
                    />
                  </div>
                  <div>


                    <div className="form-block">
                      <div className="form-group ms-input-group">
                        <label className="form-label">Present Address</label>
                        <input
                          type="text"
                          className="form-input mt-2"
                          placeholder="Address Line 1"
                          value={presentAddLine1}
                          onChange={(event) => {
                            seterrorpresentAddLine1("");
                            setpresentAddLine1(event.target.value);
                          }}
                        />
                        <input
                          type="text"
                          className="form-input mt-2"
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
                          maxLength={6}
                          type="number"
                          className="form-input"
                          placeholder="110025"
                          pattern={/^[0-9]{6}$/}
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
                  style={{ color: "white"}}
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
                        <p style={{fontSize:"15px"}}>Provide your professional details to help us in assigning a higher credit limit</p>
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

export default connect(
  mapStateToProps,
  dispatchToProps
)(Professionaldetailspayme);
