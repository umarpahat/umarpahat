import React, { useState, useEffect } from "react";
import { hitAppUseCase } from "../store/modules/userDetails/actions";
import { connect } from "react-redux";
import Loader from "../component/Loader";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Header from "./Header";
import "../../src/home.css";
import saarthi from "../images/sarthi-logo.png";
import MetaTags from "react-meta-tags";
import { API_ENDPOINT_SAARTHI } from "../constant";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import mailBox from "../images/svg/mail-box.svg";
import termsCondition from "../images/svg/terms-and-condition.svg";

toast.configure();
const options = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 6000,
  limit: 1,
  closeButton: false,
};
const SocialInitiative = (props) => {
  let [loader, setloader] = useState(false);
  const [toggle, setToggle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [nameerr, setNameerr] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const [phoneerr, setPhoneerr] = useState("");
  const [topicerr, setTopicErr] = useState("");
  const [toastToggle, setToastToggle] = useState("");

  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };
    gtag("event", "conversion", {
      send_to: "AW-875618776/NqooCK7A1fYCENjDw6ED",
      event_callback: callback,
    });
    return false;
  }
  let url = "";
  let reg = /^[0-9]{1,10}$/;
  let emailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const postVolunteer = () => {
    gtag_report_conversion("https://www.paymeindia.in/social-initiative");

    if (name.length === 0) {
      setNameerr("Name can't be empty");
      return false;
    }
    if (email.length < 5) {
      setEmailerr("Email should be at least 5 charcters long");
      return false;
    }
    if (email.split("").filter((x) => x === "@").length !== 1) {
      setEmailerr("Email should contain a @");
      return false;
    }
    if (email.indexOf(".") === -1) {
      setEmailerr("Email should contain at least one dot");
      return false;
    }
    if (!emailReg.test(email)) {
      setEmailerr("Email id is Invalid");
      return false;
    }

    if (phone.length === 0) {
      setPhoneerr("Phone can't be empty");
      return false;
    }
    if (phone.length < 10) {
      setPhoneerr("Phone should be 10 digit");
      return false;
    }

    if (!reg.test(phone)) {
      setPhoneerr("Phone number is Invalid");
      return false;
    }

    if (topic.length === 0) {
      setTopicErr("Topic can't be empty");
      return false;
    }

    if (toggle === "true") {
      url = `${API_ENDPOINT_SAARTHI}/api/register-volunteer`;
    } else {
      url = `${API_ENDPOINT_SAARTHI}/api/register-trainee`;
    }
    let data = {
      name: name,
      email: email,
      phone: phone,
      topic: topic,
    };

    let config = {
      headers: {
        Authorization: "Token " + props.token,
      },
    };

    axios
      .post(url, data, config)
      .then(function (response) {
        if (toastToggle === "") {
          toast.success("Thank you for registering");
          setToastToggle("2");
        }
        document.getElementById("form").reset();
      })
      .catch(function (error) {
        if (toastToggle === "") {
          toast.error(error.response.data.message);
          setToastToggle("2");
        }
      });
  };

  return (
    <>
      <Header {...props} />
      <MetaTags>
        <title>Social Initiative</title>
        <meta
          name="description"
          content="PayMe India launches project ‘Saarthi’ to support families impacted by Coivd-19, through skill building and creation of employment opportunities."
        />
        <meta
          name="keyword"
          content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"
        />
        <meta property="og:title" content="Social Initiative" />
      </MetaTags>
      <div className="content">
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col col-md-12 reg-second-heading">
                <h1 className="heading1 blue-color">Social Initiative</h1>
              </div>
            </div>
            <div className="row align-items-center p-b-30">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                <img
                  className="img-fluid maxLimitWidth"
                  alt="Saarthi"
                  src={saarthi}
                />
              </div>
            </div>

            <div className="row">
              <div className="col col-md-5 reg-second-heading hideMobile">
                <img className="img-fluid" src={termsCondition} alt="Icons" />
              </div>
              <div className="col col-md-7">
                <h5 className="blue-color h3 p-t-20">
                  PayMe India launches project ‘Saarthi’ to support families
                  impacted by Coivd-19, through skill building and creation of
                  employment opportunities.
                </h5>
                <p className="p-t-15">
                  We are facing a global health crisis unlike any we have seen
                  in the last many decades. One that is killing people,
                  spreading human suffering, and upending people’s lives. But
                  much more than a health crisis, it is a human, economic and
                  social crisis which is attacking societies at their core.
                </p>
                <p className="p-t-15">
                  With casualties in India touching as high as 4000 per day,
                  numerous families have been impacted severely and more so from
                  the loss of their breadwinners. While children have been
                  orphaned, education has been impacted, families are struggling
                  to meet their basic needs.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col col-md-12">
                <p className="p-t-15">
                  As part of its ongoing social initiatives, PayMe India, a
                  Noida-based fintech company, is launching project ‘Saarthi’ to
                  support such families, who have lost their earning members due
                  to the ongoing pandemic. Shri. Mahesh Shukla, founder of PayMe
                  India, strongly believes that project ‘Saarthi’ will have a
                  significant impact in helping families in distress.
                </p>
                <p className="p-t-15">
                  While PayMe India appreciates the relief measures extended by
                  state and central governments, which has indeed provided
                  immediate support to the families, however a long term support
                  infrastructure has to be built through creation of new
                  employment. This is where project ‘Saarthi’ will play a
                  critical role, by empowering people with necessary skill set
                  to increase their employability and then assisting them in
                  securing an employment.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col col-md-7">
                <p className="p-t-15">
                  Through project ‘Saarthi’, PayMe India will provide free of
                  cost skill development training to one member from each
                  beleaguered family and further assist them in securing work
                  opportunities. PayMe India have themselves pledged to directly
                  employ people from this program.
                </p>
                <p className="p-t-15 p-b-30">
                  Driven by strong social values and a pledge to give back to
                  the society, PayMe India is determined be a forerunner in
                  supporting the nation through these testing times. Project
                  ‘Saarthi’ will surely bring hope and relief to numerous
                  families!
                </p>
              </div>
              <div className="col col-md-5 reg-second-heading hideMobile">
                <img className="img-fluid" src={termsCondition} alt="Icons" />
              </div>
            </div>
            <div
              className="col-lg-12 col-md-12 col-sm-12 col-xs-12  initiative"
              style={{ textAlign: "justify" }}
            >
              <form id="form" name="form">
                <div
                  className="home-contact-form mt-4"
                  style={{ maxWidth: 600, margin: "auto" }}
                >
                  <h4 className="form-heading text-center">
                    Volunteer and Trainee Registration
                  </h4>

                  <div className="form-block">
                    <div className="form-group ms-input-group">
                      <input
                        type="radio"
                        id="volunteer"
                        name="registration"
                        onChange={(e) => {
                          setToggle("true");
                        }}
                        value="Volunteer"
                      />
                      <label htmlFor="volunteer">Volunteer</label>
                      <input
                        type="radio"
                        id="register"
                        name="registration"
                        defaultChecked="true"
                        onChange={(e) => {
                          setToggle("false");
                        }}
                        value="Trainee Registration"
                      />
                      <label htmlFor="register">Trainee Registration</label>
                    </div>
                    <div className="form-group ms-input-group">
                      <label className="form-label pb-2">Name</label>
                      <input
                        name="name"
                        type="text"
                        className="form-control ms-form-input"
                        placeholder="Enter Full Name"
                        onChange={(e) => {
                          setName(e.target.value);
                          setNameerr("");
                        }}
                        required=""
                      />
                      {nameerr ? (
                        <span style={{ color: "red" }}>{nameerr}</span>
                      ) : null}
                    </div>
                    <div className="form-group ms-input-group">
                      <label className="form-label pb-2">Email</label>
                      <input
                        name="email"
                        type="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        className="form-control ms-form-input"
                        placeholder="Enter Email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setEmailerr("");
                        }}
                      />
                      {emailerr ? (
                        <span style={{ color: "red" }}>{emailerr}</span>
                      ) : null}
                    </div>
                    <div className="form-group ms-input-group">
                      <label className="form-label pb-2">Phone</label>
                      <input
                        name="phone"
                        type="number"
                        maxLength="10"
                        pattern="[0-9]+"
                        value={phone}
                        onChange={(e) => {
                          e.target.value = e.target.value
                            .replace(/[^0-9.]{10}/g, "")
                            .replace(/(\..*)\./g, "$1");
                          setPhone(e.target.value.slice(0, 10));
                          setPhoneerr("");
                        }}
                        className="form-control ms-form-input"
                        placeholder="Enter Phone"
                      />
                      {phoneerr ? (
                        <span style={{ color: "red" }}>{phoneerr}</span>
                      ) : null}
                    </div>
                    <div className="form-group ms-input-group">
                      <label className="form-label pb-2">Topic</label>
                      <input
                        name="topic"
                        type="text"
                        className="form-control ms-form-input"
                        placeholder="Enter Topic"
                        onChange={(e) => {
                          setTopic(e.target.value);
                          setTopicErr("");
                        }}
                        required=""
                      />
                      {topicerr ? (
                        <span style={{ color: "red" }}>{topicerr}</span>
                      ) : null}
                    </div>
                  </div>
                  <input
                    name="topic"
                    type="button"
                    className="btnLarge text-center"
                    placeholder="Enter Email"
                    value="Submit"
                    onClick={postVolunteer}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="contactBox p-t-80">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-9 text-center p-t-30 p-b-30 d-flex contactLine">
                <div className="mailPic">
                  <img className="img-fluid" src={mailBox} alt="Mail" />
                </div>
                <div className="contact">
                  <h4 className="heading4">Contact Us</h4>
                  <p>
                    Please contact us at
                    <br />
                    <a href="mailto: admin@paymeindia.in" target="_blank">
                      admin@paymeindia.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const dispatchToProps = { hitAppUseCase };

export default connect(mapStateToProps, dispatchToProps)(SocialInitiative);
