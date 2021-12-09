import React, { useState } from "react";
import { Dialog } from "@reach/dialog";
import axios from "axios";
import "@reach/dialog/styles.css";
import { API_ENDPOINT_STAGING } from "../constant";
import { toast } from "react-toastify";
toast.configure();
const options = {
  position: "top-center",
  autoClose: 2000,
  limit: 1,
  closeButton: false,
};
const OtpDialog = (props) => {
  const [otp, setOtp] = useState("");
  const [otperr, setOtperr] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState("");
  const [showDialogCity, setShowDialogCity] = useState(true);

  const closeCity = () => setShowDialogCity(false);

  const SubmitOtp = () => {
    if (otp === "") {
      setOtperr("OTP can't be empty");
      return;
    }

    let url = `${API_ENDPOINT_STAGING}/api/customer-lead/customer-query/`;
    let data = {
      otp: otp,
      name: props.name,
      email: props.email,
      phone_number: props.phone,
      lead_from: props.lead_from,
    };

    axios
      .put(url, data)
      .then(function (response) {
        window.location.href =
          "https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia";
        toast.success("data successfully submitted", { ...options });
        closeCity();
        console.log("confitm otp", response);
      })
      .catch(function (error) {
        toast.error("wrong OTP", { ...options });
      });
  };
  return (
    <div>
      <Dialog
        isOpen={showDialogCity}
        onDismiss={closeCity}
        style={{ width: 400 }}
      >
        <button className="close-button" onClick={closeCity}>
          <span aria-hidden>×</span>
        </button>

        <div className="rightSection ">
          {/* {cityName === "NearMe" ? (
            <h4 className="text-center">Get Instant Loan Online</h4>
          ) : (
            <h4 className="text-center">Get Loan In {cityName}</h4>
          )} */}

          <div className="form-group ms-input-group">
            <label className="form-label pb-2">Enter OTP</label>
            <input
              name="otp"
              type="number"
              className="form-control input-field"
              placeholder="Enter 4 digits OTP"
              value={otp}
              onChange={(e) => {
                setOtperr("");
                setOtp(e.target.value);
              }}
            />
            {otperr ? (
              <span style={{ color: "red", fontSize: "16px" }}>{otperr}</span>
            ) : null}
          </div>

          <button
            type="button"
            className="btnLarge m-t-40"
            style={{
              display: "block",
              cursor: "pointer",
              color: "#fff",
            }}
            onClick={SubmitOtp}
          >
            Submit
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default OtpDialog;
