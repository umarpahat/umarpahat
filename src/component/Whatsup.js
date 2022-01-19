import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {API_ENDPOINT_STAGING, S3_IMAGES_URL} from "../constant";
// import OtpDialog from "../pages/OtpDialog";
import { toast } from "react-toastify";

toast.configure();
const options = {
  position: "top-center",
  autoClose: 5000,
  limit: 1,
  closeButton: false,
};
export const Whatsup = (props) => {
  const [phone, setPhone] = useState("");
  const [phoneerr, setPhoneerr] = useState("");
  const [otpScreen, setOtpScreen] = useState("");
  const[isButtonDisabled,setIsButtonDisabled]=useState(true)
  const WhatsappOtpScreen =()=>{
    setOtpScreen(false)
  }
  const handleWhatsappApi = () => {
    if (phone === "") {
      if(isButtonDisabled)
      {
      toast.error("Phone can't be empty",{...options});
      setIsButtonDisabled(false)
      setTimeout(() => setIsButtonDisabled(true), 6000);
      }
      return;
    }
if(phone.length!==10)
{
  if(isButtonDisabled)
  {
  toast.error("Phone Number Should be 10 digits",{...options});
  setIsButtonDisabled(false)
  setTimeout(() => setIsButtonDisabled(true), 6000);
  }

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
        if(isButtonDisabled)
        {
        toast.error("Something Went Wrong", { ...options });
        setIsButtonDisabled(false)
        setTimeout(() => setIsButtonDisabled(true), 6000);
        }
      });
  };

  return (
    <div className="container-fluid whatsup-bg ">
      {otpScreen ? (
          dd
        // <OtpDialog {...props} phone={phone} lead_from="WHATSAPP" WhatsappOtpScreen={WhatsappOtpScreen} />
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
                type="text"
                className="input"
                value={phone}
                onChange={(e) => {
                  setPhoneerr("");
                  setPhone(e.target.value.slice(0,10).replace(/\D/g, ""));
                }}
              />

              <button
                className="whatsup-btn"
                type="submit"
                onClick={handleWhatsappApi}
              >
                <img className="img-fluid" alt="arrow-white" src={S3_IMAGES_URL +'/svg/arrow-white.svg'} />
              </button>
              <br/>
              {phoneerr?<span style={{color:"red"}}>{phoneerr}</span>:null}
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
