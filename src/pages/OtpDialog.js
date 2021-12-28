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
  console.log("props", props);
  const [otp, setOtp] = useState("");
  const [otperr, setOtperr] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState("");
  const [showDialogCity, setShowDialogCity] = useState(true);
  const [disableToast, setDisableToast] = useState(true);

  const CloseOtpScreen = () => {
    if (props.CloseOtpScreen) {
      props.CloseOtpScreen();
    }
    if (props.closeCity) {
      props.closeCity();
    }
    if (props.closeOtpScreenMess) {
      props.closeOtpScreenMess();
    }
    if (props.closeOtpScreen) {
      props.closeOtpScreen();
    }
    if (props.WhatsappOtpScreen) {
      props.WhatsappOtpScreen();
    }
  };

  const SubmitOtp = () => {
    if (otp === "") {
      setOtperr("OTP can't be empty");
      return;
    }
    if (otp.length !== 4) {
      setOtperr("OTP should be 4 digits");
      return;
    }
    if (props.lead_from === "WHATSAPP") {
      let url = `${API_ENDPOINT_STAGING}/api/jwt-auth/verify-otp-phone/`;
      let data = {
        otp: otp,
        phone_number: props.phone,
      };

      axios
        .post(url, data)
        .then(function (response) {
          if (disableToast) {
            setDisableToast(false);
            toast.success("data successfully submitted", { ...options });
          }
          CloseOtpScreen();
          console.log("confitm otp", response);
        })
        .catch(function (error) {
          toast.error("wrong OTP", { ...options });
        });
    } else {
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

          CloseOtpScreen();
          console.log("confitm otp", response);
        })
        .catch(function (error) {
          toast.error("wrong OTP", { ...options });
        });
    }
  };
  return (
    <div>
      <Dialog
        isOpen={showDialogCity}
        onDismiss={CloseOtpScreen}
        style={{ maxWidth: 600 }}
      >
        <button className="close-button" onClick={CloseOtpScreen}>
          <span aria-hidden>×</span>
        </button>

        <div className="rightSection ">
          <div className="form-group ms-input-group">
            <label className="form-label pb-2 text-center">Enter OTP</label>
            <input
              name="otp"
              type="number"
              className="form-control input-field"
              placeholder="Enter 4 digits OTP"
              value={otp}
              onChange={(e) => {
                setOtperr("");
                setOtp(e.target.value.slice(0, 4));
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
              width: "100%",
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
