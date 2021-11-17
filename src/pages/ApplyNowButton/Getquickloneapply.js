import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import {
  hitAppUseCase,
  hitAllUserData,
} from "../../store/modules/userDetails/actions";
import { connect } from "react-redux";
import { api } from "../../services/api";
import Loader from "../../component/Loader";
import Confirmotpmobile from "./Confirmotpmobile";
import "../ApplyNowButton/Applybtnallcomponent.css";
import Header from "../Header";
import "../../home.css";
import letsStart from "../../images/animated/lets-start-animation.gif";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Getquikloneapply = (props) => {
  const token = cookies.get('token')
  cookies.set("userCase", "apply-loan");
  const userCase = cookies.get("userCase");
  //console.log("apply loan",userCase)
  let [loader, setloader] = useState(false);
  let [number, setnumber] = useState(null);
  let [error, seterror] = useState(null);
  let [newUser, setnewUser] = useState(false);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    cookies.set("referral_code", params.referral_code)

   if(token){
    props.history.push({
      pathname: "/step-manual",
    });
   }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    /^[6-9]\d{9}$/.test(number)
      ? verifyPhone()
      : seterror("Please input valid 10 digit mobile number");
  };

  const verifyPhone = () => {
    setloader(true);

    api
      .post(
        `api/authentication/phone_no_verify/`,
        { phone_number: Number(number) },
        {}
      )
      .then((response) => {
        
        if (response.status === 200 && !response.data.phone_number_verified) {
          setloader(false);
          setnewUser(true);
        } else if (
          response.status === 200 &&
          response.data.phone_number_verified
        ) {
          cookies.set("phoneNumber", number)
            props.history.push({
              pathname: "/login-with-mob-mpin",
            });
        } else {
          //console.log(response.status);
        }
        return response;
      })
      .catch((error) => {
        if (error.response.status === 401) {
          cookies.remove("token", { path: "/" });
        }
        //console.log(error);
        setloader(false);
      });
  };

  return (
    <>
      {/* {!newUser ? <Header /> : null } */}
      <Header {...props} />
     
          {loader ? (
            <div className="loader">
              {" "}
              <Loader color={"#33658a"} />{" "}
            </div>
          ) : newUser ? (
            <Confirmotpmobile
              {...props}
              phone_number={Number(number)}
              resendOtp={verifyPhone}
            />
          ) : (
            <div className="content darkBg">
            <div className="info">
              Make sure the mobile number is associated in this specific device, we
              will send and verify the new number with reverse OTP.
            </div>
            <Container>
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                <br />
                <a
                  className="back-arrow"
                  onClick={() => {
                    props.history.push({ pathname: "/" });
                  }}
                >
                  Back
                </a>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                <div className="contenertQuicklone">
                  <div className="slider-right-block">
                    <form onSubmit={handleSubmit}>
                      <div className="home-contact-form">
                        <h4 className="form-heading formheadding">
                          Let's Get Started
                        </h4>

                        <div className="form-block">
                          <div className="form-group ms-input-group">
                            <label className="form-label">Mobile Number</label>

                            <input
                              type="number"
                              minLength={10}
                              className="form-control ms-form-input"
                              placeholder="Enter new mobile number"
                              value={number || ""}
                              onChange={(event) => {
                                setnumber(event.target.value.slice(0, 10));
                                if (
                                  event.target.value.length === 0 ||
                                  event.target.value.length === 10
                                ) {
                                  seterror("");
                                }
                              }}
                            />
                            {error ? (
                              <span style={{ color: "red" }}>{error}</span>
                            ) : null}
                          </div>
                        </div>
                        <div className="pt-3">
                          <label></label>
                          <input
                            type="submit"
                            value="Continue"
                            className="getstartbtn "
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                <div className="height100">
                  <div>
                    <div className="circle-half">
                      <div className="full-circle">
                        <img
                          src={letsStart}
                          className="img-fluid"
                          style={{ maxWidth: 150 }}
                          alt="Icon"
                        />
                      </div>
                      <div className="full-text text-left">
                        <h5>Tips</h5>
                        <p>
                          With the help of the registered mobile number
                          provided, we will reach out to you in a quicker
                          manner.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Container>
      </div>
          )}
     
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const dispatchToProps = { hitAppUseCase, hitAllUserData };

export default connect(mapStateToProps, dispatchToProps)(Getquikloneapply);
