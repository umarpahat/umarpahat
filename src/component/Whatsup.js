import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {API_ENDPOINT_STAGING, S3_IMAGES_URL} from "../constant";
import OtpDialog from "../pages/OtpDialog";
export const Whatsup = (props) => {
  const [phone, setPhone] = useState("");
  const [phoneerr, setPhoneerr] = useState("");
  const [otpScreen, setOtpScreen] = useState("");
  const WhatsappOtpScreen =()=>{
    setOtpScreen(false)
  }
  const handleWhatsappApi = () => {
    if (phone === "") {
      setPhoneerr("Phone can't be empty");
      return;
    }

    let url = `${API_ENDPOINT_STAGING}/api/customer-lead/customer-query/`;
    let data = {
      phone_number: phone,
    };

    axios
      .post(url, data)
      .then(function (response) {
        setOtpScreen(true);
      })
      .catch(function (error) {
        toast.error("wrong OTP", { ...options });
      });
  };

  return (
    <div className="container-fluid whatsup-bg ">
      {otpScreen ? (
        <OtpDialog {...props} phone={phone} lead_from="WHATSAPP" WhatsappOtpScreen={WhatsappOtpScreen} />
      ) : null}
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-1 m-t-m-7 center-mobile p-t-20-mobile">
            <img className="img-fluid" alt="whatsup"  src={S3_IMAGES_URL +'/svg/whatsup.svg'} />
          </div>
          <div className="col-sm-12 col-md-7 col-lg-6 p-t-5 center-mobile">
              <strong className="white-color whatsup-text">
                A credit score is more than just a number. Know your Cibil score
                completely free with PayMe India.
              </strong>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-5 p-t-30 ">
            <div className=" center-mobile right-box">
              <input
                placeholder="Enter your number"
                className="input"
                value={phone}
                onChange={(e) => {
                  setPhoneerr("");
                  setPhone(e.target.value);
                }}
              />
              <button
                className="whatsup-btn"
                type="submit"
                onClick={handleWhatsappApi}
              >
                <img className="img-fluid" alt="arrow-white" src={S3_IMAGES_URL +'/svg/arrow-white.svg'} />
              </button>
              <div
                style={{ paddingTop: 15, fontSize: 12 }}
                className="white-color btn-checkbox"
              >
                <input
                  type="checkbox"
                  name="thing"
                  value="valuable"
                  id="thing"
                />
                <label htmlFor="thing">
                  I accept the Terms & coditions of Payme India
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
