import React from "react";
import { Link } from "react-router-dom";
import Header from "../../component/Header";

function Creatempn() {
  return (
    <>
      {/* <Header /> */}
      <div className="form-container formcontainermob  pt-4 pb-5">
        <div>
          <form>
            <div className="Home-contact-form mt-4">
              <h4 className="form-heading text-center">Create MPIN</h4>
              <div class="form-group ms-input-group">
                <div className="topnoticreferral">
                  <p className="p-4 mx-4">
                    Make sure the mobile number is associated in this specific
                    device, we will send and verify the new number with reverse
                    OTP.
                  </p>
                </div>
              </div>
              <div className="form-block">
                <div class="form-group ms-input-group">
                  <label className="form-label pb-2">New MPIN</label>
                  <input
                    type="text"
                    class="form-control ms-form-input"
                    placeholder="Enter New MPIN"
                  />
                </div>
                <div class="form-group ms-input-group">
                  <label className="form-label pb-2">Confirm MPIN</label>
                  <input
                    type="text"
                    class="form-control ms-form-input"
                    placeholder="Enter Confirm MPIN"
                  />
                </div>
              </div>
              <Link to="/kyc-details-form" className="submit-btn text-center">
                <a style={{ color: "#fff" }}>Continue</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Creatempn;
