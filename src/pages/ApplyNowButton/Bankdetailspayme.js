import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Pdficon from "../../component/img/Pdficon.png";
import {
  hitAllUserData,
  hitAppUseCase,
} from "../../store/modules/userDetails/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Cancelicon from "../../component/img/Cancelicon.png";

import DragbleImg from "../../component/DragbleImg";
import { getS3SignedUrl, postS3, api } from "../../services/api";
import Loader from "../../component/Loader";
import axios from "axios";
import { API_ENDPOINT } from "../../constant";
import "../../home.css";
import Header from "../Header";
import Cookies from "universal-cookie";
import tip from "../../images/animated/kyc-option.gif";
import Footer from "../Footer";

const cookies = new Cookies();

const Bankdetailspayme = (props) => {
  const token = cookies.get("token");
  const userCase = cookies.get("userCase");

  const [actNumber, setactNumber] = useState("");
  const [ConfrmActNumber, setConfrmActNumber] = useState("");
  const [bankName, setbankName] = useState("");
  const [branchName, setbranchName] = useState("");
  const [bankStatementObj, setbankStatementObj] = useState([]);
  const [errorAct, seterrorAct] = useState("");
  const [errorConfAct, seterrorConfAct] = useState("");
  const [ifscError, setifscErro] = useState("");
  const [errorBnakStatement, seterrorBnakStatement] = useState("");
  const [loader, setloader] = useState(false);
  const [signedUrl, setsignedUrl] = useState({});
  const [bankStatementPassword, setbankStatementPassword] = useState("");
  const [validIfscCode, setValidIfscCode] = useState("");
  const [validAccount, setValidAccount] = useState("");
  const [ifscdetail, setifscdetail] = useState("");
  const [ifscData, setIfscData] = useState([]);
  const [errbackend, seterrBackend] = useState("");

  var something = (function () {
    var executed = false;
    return function () {
      if (!executed) {
        executed = true; 
        props.hitAllUserData({ token: token });
      }
    };
  })();
  //console.log("props user if", props);

  async function getSignedUrl() {
    const pathArray = [
      `bank_statement/${props.user.id}/0.pdf`,
      `bank_statement/${props.user.id}/1.pdf`,
      `bank_statement/${props.user.id}/2.pdf`,
    ];
    const signedUrlObj = await getS3SignedUrl({
      token: token,
      payload: { s3_path: pathArray },
    });
    //console.log("haaaaaaaaaaaa", signedUrlObj);
    setsignedUrl(signedUrlObj.data.data);
    //console.log("343434", signedUrlObj.data.data);
  }

  async function updateDocStatus(data) {
    return await api.post(
      "/api/update_document_status/",
      {
        doc_type: data.docType,
        path: data.path,
        password: bankStatementPassword,
      },
      { headers: { Authorization: "Token " + token } }
    );
  }

  const updateBankDetails = async () => {
    const payload = {
      account_number: actNumber,
      bank_address: branchName,
      bank_name: bankName,
      ifsc_code: ifscdetail,
    };
    //console.log("updatedocument", payload);
    return await api.post("/api/user_details/bank_details/", payload, {
      headers: { Authorization: "Token " + token },
    });
  };

  useEffect(() => {
    getSignedUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  useEffect(() => {
    getSignedUrl();
    if (!token) {
      props.history.push({ pathname: "/" });
      return;
    }
    something();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    //console.log("bank details props", props);
    if (!actNumber) {
      seterrorAct("Please enter account number");
      return;
    }
    if (!ConfrmActNumber) {
      seterrorConfAct("Please enter confirm account number");
      return;
    }
    if (ConfrmActNumber !== actNumber) {
      seterrorConfAct(
        "Account number and Confirm account number does not matched."
      );
      return;
    }
    if (!ifscdetail) {
      setifscErro("Please enter ifsc code");
      return;
    }
    if (validIfscCode) {
      setifscError("IFSC should be 4 letters, followed by 7 letters or digits");
      return;
    }

    if (!bankStatementObj.length) {
      seterrorBnakStatement("Please upload bank statement");
      return;
    }
    setloader(true);
    let updatedocStatus = [];
    const promiseTest = bankStatementObj.map((value, index) => {
      updatedocStatus.push(
        updateDocStatus({
          docType: "bank_statement",
          path: `bank_statement/${props.user.id}/${index}.pdf`,
        })
      );
      return postS3({
        res: value,
        presignedPostData:
          signedUrl[`bank_statement/${props.user.id}/${index}.pdf`],
      });
    });
    updateBankDetails();
    Promise.all([...promiseTest, ...updatedocStatus])
      .then((response) => {
        //console.log("bank response", response);

        props.history.push({ pathname: "/step-manual" });
      })
      .catch((error) => {
        setloader(false);
        //console.log(error.response, "shhajahak");
        let err = error?.response?.status;
        seterrBackend(err);
        //console.log(err, "hhhhhhhhhherror");
      });
  };
  //console.log(errbackend);
  function handleRemoveBankObj(id) {
    const newList = bankStatementObj.filter((item, index) => index !== id);
    setbankStatementObj(newList);
  }

  const content = bankStatementObj.map((value, index) => (
    <div className="d-flex pt-4" key={index.toString()}>
      <div>
        <img src={Pdficon} alt="pdf-icon" />
      </div>
      <div className="ml-3 w-100">
        <div className="d-flex justify-content-between">
          <p className="parastyPdfProgessbar">{value.name}</p>

          <img
            src={Cancelicon}
            style={{height:"16px",width:"16px"}}
            onClick={() => handleRemoveBankObj(index)}
            alt="bank"
          />
        </div>
      </div>
    </div>
  ));
  const handleifscDetail = (e) => {
    if (e.target.value.match(/^[A-Z]{4}0[A-Z0-9]{6}$/)) {
      setValidIfscCode("");
    } else if (e.target.value === "") {
      setValidIfscCode("");
    } else {
      setValidIfscCode(
        "IFSC should be 4 letters, followed by 7 letters or digits"
      );
    }
    setifscdetail(e.target.value.toUpperCase());
    ifscDetail(e.target.value.toUpperCase());
    e.preventDefault();
    $(".select_css").show();
  };

  const handleSelect = (e) => {
    setifscdetail(e.target.value);
    ifscDetail(e.target.value);
    $(".select_css").hide();
  };
  const handleBankUpload = (event) => {
    seterrorBnakStatement("");
    setbankStatementObj((bankStatementArr) => [
      ...bankStatementArr,
      ...[event.target.files[0]],
    ]);
  };

  const ifscDetail = (ifscd) => {
    // //console.log("ifscdetail",ifscd)
    let url = `${API_ENDPOINT}/api/bankdetails_list/`;
    let data = {
      ifsc: ifscd,
    };

    let config = {
      headers: {
        Authorization: "Token " + token,
      },
    };

    axios
      .post(url, data, config)
      .then((res) => {
        setIfscData(res.data.data);
        if (res.data.data.length == 1 || res.data.data.length == 0) {
          $(".select_css").hide();
          setbankName(res.data.data[0].name);
          setbranchName(res.data.data[0].address);
          setValidIfscCode("");
        } else {
          setbankName("");
          setbranchName("");
        }
      })

      .catch((err) => {
        //console.log(err);
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
              <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                <form onSubmit={handleSubmit}>
                  <div className="home-contact-form mt-4">
                    <h4 className="form-heading text-center">Bank Details</h4>
                    {errbackend ? (
                      <span style={{ color: "red" }}>{errbackend}</span>
                    ) : null}
                    <div className="form-block">
                      <div className="form-group ms-input-group">
                        <label className="form-label">Account Number</label>
                        <input
                          type="number"
                          className="form-input"
                          placeholder="Enter 16 Digit A/C Number"
                          value={actNumber}
                          onChange={(event) => {
                            if (event.target.value.match(/^\d{9,18}$/)) {
                              setValidAccount("");
                            } else {
                              setValidAccount("Enter a valid Account Number");
                            }

                            seterrorAct("");
                            setactNumber(event.target.value.slice(0, 22));
                          }}
                        />
                        {validAccount ? (
                          <span style={{ color: "red" }}>{validAccount}</span>
                        ) : null}
                        {errorAct ? (
                          <span style={{ color: "red" }}>{errorAct}</span>
                        ) : null}
                      </div>
                      <div className="form-group ms-input-group">
                        <label className="form-label">
                          Confirm Account Number
                        </label>
                        <input
                          type="number"
                          className="form-input"
                          placeholder="Enter 16 Digit A/C Number"
                          value={ConfrmActNumber}
                          onChange={(event) => {
                            seterrorConfAct("");
                            setConfrmActNumber(event.target.value.slice(0, 22));
                          }}
                        />
                        {errorConfAct ? (
                          <span style={{ color: "red" }}>{errorConfAct}</span>
                        ) : null}
                      </div>
                      <div className="form-group ms-input-group">
                        <label className="form-label">Bank IFSC Code </label>

                        <input
                          type="text"
                          className="form-input"
                          placeholder="Enter IFSC Code Here (E.G. KKBK0000430)"
                          value={ifscdetail}
                          onChange={handleifscDetail}
                          maxLength={11}
                        />
                        {validIfscCode ? (
                          <span style={{ color: "red" }}>{validIfscCode}</span>
                        ) : null}
                        <div className="select_css" style={{ display: "none" }}>
                          <select onChange={handleSelect} multiple>
                            {ifscData
                              ? ifscData.map((ifsc) => (
                                  <option>{ifsc.ifsc}</option>
                                ))
                              : null}
                          </select>
                        </div>

                        {ifscError ? (
                          <span style={{ color: "red" }}>{ifscError}</span>
                        ) : null}
                      </div>
                      <div className="row">
                        <div className="form-group ms-input-group col-6">
                          <label className="form-label">Bank Branch</label>
                          <input
                            type="text"
                            className="form-input"
                            placeholder="Delhi"
                            value={branchName}
                           
                            readOnly
                          />
                        </div>
                        <div className="form-group ms-input-group col-6">
                          <label className="form-label">Bank Name</label>
                          <input
                            type="text"
                            className="form-input"
                            placeholder="Kotak Mahindra Bank"
                            value={bankName}
                            readOnly

                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="form-label">
                        Bank Statement (Last 3 Months)
                      </label>
                      <div className="file-uploading-block">
                        <DragbleImg />
                        <span className="">or </span>

                        <a
                          className="upload-btn-text"
                          href="javascript:document.querySelector('input#bankupload').click()"
                        >
                          Upload
                        </a>
                        <input
                          type="file"
                          accept="application/pdf"
                          className="custom-file-input"
                          id="bankupload"
                          hidden
                          onChange={handleBankUpload}
                        />
                      </div>
                      {errorBnakStatement ? (
                        <span style={{ color: "red" }}>
                          {errorBnakStatement}
                        </span>
                      ) : null}
                      {content}
                      <div className="form-group ms-input-group">
                        <label className="form-label pb-2">
                          Bank Statement Password (If Any)
                        </label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Enter Statement PDF Password"
                          value={bankStatementPassword}
                          onChange={(event) => {
                            setbankStatementPassword(event.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <input
                      type="submit"
                      style={{ color: "white" }}
                      className="getstartbtn "
                      value="Save and  Continue"
                    />
                  </div>
                </form>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                <div className="height100">
                  <div>
                    <div className="circle-half">
                      <div className="full-circle">
                        <img
                          src={tip}
                          className="img-fluid"
                          style={{ maxWidth: 100 }}
                          alt="Tips"
                        />
                      </div>
                      <div className="full-text text-left">
                        <h5>Tips</h5>
                        <p style={{fontSize:"17px"}}>Kindly provide us with your primary bank account details to facilitate the disbursement.</p>
                      </div>
                    </div>
                    <div className="circle-half">
                      <p className="p-a-10" style={{fontSize:"15px"}}>Kindly share your latest 3 months bank statement.</p>
                    </div>
                    <div className="circle-half">
                      <p className="p-a-10" style={{fontSize:"15px"}}>Upload your bank statement in PDF form.</p>
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

export default connect(mapStateToProps, dispatchToProps)(Bankdetailspayme);
