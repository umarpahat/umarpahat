import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import backicon from "../../component/img/backicon.png";

import Pdficon from "../../component/img/Pdficon.png";
import { hitAllUserData } from "../../store/modules/userDetails/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Cancelicon from "../../component/img/Cancelicon.png";

import DragbleImg from "../../component/DragbleImg";
import { getS3SignedUrl, postS3, api } from "../../services/api";
import Header from "../../component/Header";
import Progressbar from "../../component/ProgressBar";
import Loader from "../../component/Loader";

const Bankdetailspayme = (props) => {
  const [actNumber, setactNumber] = useState("");
  const [ConfrmActNumber, setConfrmActNumber] = useState("");
  const [ifsc, setifsc] = useState("");
  const [bankName, setbankName] = useState("");
  const [branchName, setbranchName] = useState("");
  const [bankStatementObj, setbankStatementObj] = useState([]);
  const [errorAct, seterrorAct] = useState("");
  const [errorConfAct, seterrorConfAct] = useState("");
  const [ifscError, setifscErro] = useState("");
  const [errorbankName, seterrorbankName] = useState("");
  const [errorbranchName, seterrorbranchName] = useState("");
  const [errorBnakStatement, seterrorBnakStatement] = useState("");
  const [loader, setloader] = useState(false);
  const [signedUrl, setsignedUrl] = useState({});
  const [bankStatementPassword, setbankStatementPassword] = useState("");

  async function getSignedUrl() {
    const pathArray = [
      `bank_statement/${props.user.id}/0.pdf`,
      `bank_statement/${props.user.id}/1.pdf`,
      `bank_statement/${props.user.id}/2.pdf`,
    ];
    const signedUrlObj = await getS3SignedUrl({
      token: props.token,
      payload: { s3_path: pathArray, bucket_name: "payme-test-documents" },
    });
    setsignedUrl(signedUrlObj.data.data);
    console.log(343434, signedUrlObj.data.data);
  }

  async function updateDocStatus(data) {
    return await api.post(
      "/api/update_document_status/",
      {
        doc_type: data.docType,
        path: data.path,
        password: bankStatementPassword,
      },
      { headers: { Authorization: "Token " + props.token } }
    );
  }

  async function updateBankDetails() {
    const payload = {
      account_number: actNumber,
      bank_address: branchName,
      bank_name: bankName,
      ifsc_code: ifsc,
    };
    return await api.post("/api/user_details/bank_details/", payload, {
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
    if (!ifsc) {
      setifscErro("Please enter ifsc code");
      return;
    }
    if (!bankName) {
      seterrorbankName("Please enter bank name");
      return;
    }
    if (!branchName) {
      seterrorbranchName("Please enter branch name");
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
    Promise.all([...promiseTest, ...updatedocStatus, ...[updateBankDetails()]])
      .then((response) => {
        setloader(false);
        props.hitAllUserData({ token: props.token });
        props.history.push({ pathname: "/professional-details-payme" });
        //   if (props.user.userdocumentsmodel && (props.user.userdocumentsmodel.salary_slip_verified !== 'VERIFIED' ||
        // props.user.userdocumentsmodel.salary_slip_verified !== 'PENDING_VERIFICATION')) {
        //   props.history.push({pathname:'/professional-details-payme'})
        // } else{
        //   props.history.push({pathname:'/pending-approval'})
        // }
      })
      .catch((error) => {
        setloader(false);
      });
  };

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
            onClick={() => handleRemoveBankObj(index)}
            alt="bank"
          />
        </div>
      </div>
    </div>
  ));

  const handleBankUpload = (event) => {
    seterrorBnakStatement("");
    setbankStatementObj((bankStatementArr) => [
      ...bankStatementArr,
      ...[event.target.files[0]],
    ]);
  };

  return (
    <>
      {/* <Header /> */}
      <Container>
        {loader ? (
          <div className="loader">
            {" "}
            <Loader color={"#33658a"} />{" "}
          </div>
        ) : (
          <div className="kycDeatailsSecondFormsty pb-5">
            <div className="pt-2">
              <div className="pb-4 pt-4">
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
                <h4 className="form-heading text-center">Bank Details</h4>
                <div className="form-block">
                  <div className="form-group ms-input-group">
                    <label className="form-label">Account Number</label>
                    <input
                      type="text"
                      className="form-control ms-form-input"
                      placeholder="Enter 16 Digit A/C Number"
                      value={actNumber}
                      onChange={(event) => {
                        seterrorAct("");
                        setactNumber(event.target.value);
                      }}
                    />
                    {errorAct ? (
                      <span style={{ color: "red" }}>{errorAct}</span>
                    ) : null}
                  </div>
                  <div className="form-group ms-input-group">
                    <label className="form-label">Confirm Account Number</label>
                    <input
                      type="text"
                      className="form-control ms-form-input"
                      placeholder="Enter 16 Digit A/C Number"
                      value={ConfrmActNumber}
                      onChange={(event) => {
                        seterrorConfAct("");
                        setConfrmActNumber(event.target.value);
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
                      className="form-control ms-form-input"
                      placeholder="Enter IFSC Code Here (E.G. KKBK0000430)"
                      value={ifsc}
                      onChange={(event) => {
                        setifscErro("");
                        setifsc(event.target.value);
                      }}
                    />
                    {ifscError ? (
                      <span style={{ color: "red" }}>{ifscError}</span>
                    ) : null}
                  </div>
                  <div className="row">
                    <div className="form-group ms-input-group col-6">
                      <label className="form-label">Bank Branch</label>
                      <input
                        type="text"
                        className="form-control ms-form-input"
                        placeholder="Delhi"
                        value={branchName}
                        onChange={(event) => {
                          seterrorbranchName("");
                          setbranchName(event.target.value);
                        }}
                      />
                      {errorbranchName ? (
                        <span style={{ color: "red" }}>{errorbranchName}</span>
                      ) : null}
                    </div>
                    <div className="form-group ms-input-group col-6">
                      <label className="form-label">Bank Name</label>
                      <input
                        type="text"
                        className="form-control ms-form-input"
                        placeholder="Kotak Mahindra Bank"
                        value={bankName}
                        onChange={(event) => {
                          seterrorbankName("");
                          setbankName(event.target.value);
                        }}
                      />
                      {errorbankName ? (
                        <span style={{ color: "red" }}>{errorbankName}</span>
                      ) : null}
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
                      className="custom-file-input"
                      id="bankupload"
                      hidden
                      onChange={handleBankUpload}
                    />
                  </div>
                  {errorBnakStatement ? (
                    <span style={{ color: "red" }}>{errorBnakStatement}</span>
                  ) : null}
                  {content}
                  <div className="form-group ms-input-group">
                    <label className="form-label pb-2">
                      Bank Statement Password (If Any)
                    </label>
                    <input
                      type="text"
                      className="form-control ms-form-input"
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
                  style={{ color: "white", width: "500px" }}
                  className="submit-btn text-center"
                  value="Proceed with Bank Details"
                />
              </div>
            </form>
          </div>
        )}
      </Container>
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

export default connect(mapStateToProps, dispatchToProps)(Bankdetailspayme);
