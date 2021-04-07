import {
  faAngleDown,
  faArrowAltCircleDown,
  faArrowDown,
  faCalendarWeek,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import DragbleImg from "../../component/DragbleImg";
import Header from "../../component/Header";
import backicon from "../../component/img/backicon.png";
import { Component } from "react";
import Select from "react-select";
import Progressbar from "../../component/ProgressBar";
import { Form } from "react-bootstrap";

import DatePicker from "react-date-picker";

const Kycdetailsformpayme = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(!show);

  const options = [
    { value: "male", label: "Male" },
    { value: "femal", label: "Female" },
    { value: "other", label: "Other" },
  ];
  // const [value, onChange] = useState(new Date());
  return (
    <>
      <Header />

      <div className="form-container pb-5">
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

        <form>
          <div className="Home-contact-form">
            <h4 className="form-heading text-center">Tell Us about Yourself</h4>
            <div className="form-block">
              <div class="form-group ms-input-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  class="form-control ms-form-input"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label className="form-label">DOB(DD/MM/YY)</label>
                <div>
                  {/* <DatePicker
                      onChange={onChange}
                      className="form-control ms-form-input datepicker"
                      value={value}
                      clearIcon={false}
                      String={"Calendar"}
                    /> */}
                </div>
              </div>
              <div class="form-group ms-input-group">
                <label className="form-label">Gender</label>
                <div>
                  <Select isSearchable={false} options={options} />
                </div>

                {/* <form className="">
                    <div className="">
                      <div className="selectParent w-100 arrowgendercls">
                        <select className="w-100">
                          <option value="1" for="select" className="optioncls ">
                            Select Gender
                          </option>
                          <option value="2">Male</option>
                          <option value="3">Female</option>
                          <option value="4">Other</option>
                        </select>
  
                        <span className="genderArrowposition">
                          <FontAwesomeIcon
                            icon={faAngleDown}
                           
                          />
                        </span>
                      </div>
                    </div>
                  </form> */}
              </div>

              <div class="form-group ms-input-group">
                <label className="form-label">Pan Number</label>
                <input
                  type="text"
                  class="form-control ms-form-input"
                  placeholder="AJTPN9876M"
                />
              </div>
              <label className="form-label">
                Upload a pictue of your PAN card
              </label>
              <div className="file-uploading-block">
                <DragbleImg />
                <span className="">or </span>

                <a
                  className="upload-btn-text"
                  href="javascript:document.querySelector('input#PAN').click()"
                >
                  Upload
                </a>
                <input type="file" class="custom-file-input" id="PAN" hidden />
              </div>
              <div class="form-group ms-input-group">
                <div className="pb-1">
                  <label className="form-label ">Adhaar Card</label>
                </div>

                <label className="form-label">
                  Upload a pictue of your Aadhar card
                </label>
                <div style={{ display: "flex" }}>
                  <div className="twoboxdregdrop file-uploading-block  mr-2">
                    <p className="small-text-ms mb-4">Front</p>

                    <DragbleImg />
                    <span className="">or </span>

                    <a
                      className="upload-btn-text"
                      href="javascript:document.querySelector('input#Frontofadhaar').click()"
                    >
                      Browse File
                    </a>
                    <input
                      type="file"
                      class="custom-file-input"
                      id="Frontofadhaar"
                      hidden
                    />
                  </div>

                  <div
                    for="Backofadhaar"
                    className="file-uploading-block twoboxdregdrop ml-3"
                  >
                    <p className="small-text-ms mb-4">Back</p>

                    <DragbleImg />
                    <span className="">or </span>
                    <a
                      href="javascript:document.querySelector('input#Backofadhaar').click()"
                      className="upload-btn-text"
                    >
                      Browse File
                    </a>
                    <input
                      type="file"
                      class="custom-file-input"
                      id="Backofadhaar"
                      hidden
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ul>
                <li> All documents should be clear in quality</li>
                <li> We accept documents in pdf/jpg/png format.</li>
                <li>Max file size 32MB</li>
              </ul>
            </div>

            <Link
              to="/bank-details-payme"
              //   onClick={() => {
              //     setShow(true);
              //   }}
              className="submit-btn text-center"
            >
              <a style={{ color: "#fff" }}>Proceed</a>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Kycdetailsformpayme;
