import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getS3SignedUrl, postS3, api } from "../../services/api";
import {
  hitAllUserData,
  hitAppUseCase,
} from "../../store/modules/userDetails/actions";
import Header from "../Header";
import Loader from "../../component/Loader";
import axios from "axios";
import { API_ENDPOINT_STAGING } from "../../constant";
import Footer from "../Footer";

import Cookies from "universal-cookie";
import tip from "../../images/svg/tip.png";
const cookies = new Cookies();

const DetailsSummary = (props) => {
  const token = cookies.get("token");

  useEffect(() => {
    if (!token) {
      props.history.push({ pathname: "/" });
    }
  });

  useEffect(() => {
    console.log(23232323, props.location.state);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let url = `${API_ENDPOINT_STAGING}/api/pay-rent/get-jwt-initiate-payment/`;
    let config = {
      headers: {
        Authorization: "Token " + token,
        "Content-Type": "application/json",
      },
    };
    axios
      .post(
        url,
        {
          token: props.location.state.jwt_token,
          payer: props.location.state.payer,
          payee: props.location.state.payee,
        },
        config
      )
      .then((res) => {
        window.open(res.data.payment_url, "_blank");
        props.history.push({ pathname: "/payrent-other-details" });
      })
      .catch((err) => {
        if (err.response.status === 401) {
          cookies.remove("token", { path: "/" });
        }
        console.log("eeee", err);
      });
  };

  return (
    <>
      <Header />
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
              <div className="form-container">
                <div className="ms-Tabs">
                  <h4 className="form-heading text-center">
                    Summary Of All Details
                  </h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="home-contact-form p-3 px-5">
                    <div className="form-block m-0">
                      <div className="details-block">
                        <h4>Rent Amount</h4>
                        <p>₹{props.location.state.payer.amount}</p>
                      </div>
                      <div className="details-block">
                        <h4>Service Charge (Inc. GST)</h4>
                        <p>
                          ₹
                          {(props.location.state.payer.amount *
                            props.location.state.serviceCharge) /
                            100}
                        </p>
                      </div>
                      <div className="details-block">
                        <h4>Landlord's PAN Number</h4>
                        <p>{props.location.state.payee.pan_number}</p>
                      </div>
                    </div>
                  </div>
                  <div className="home-contact-form mt-4  p-3 px-5">
                    <h4 className="form-heading">Landlord's Details</h4>
                    <div className="form-block m-0">
                      <div className="details-block">
                        <h4>Landlord's Name (As Per Bank Account)</h4>
                        <p>{props.location.state.payee.bene_name}</p>
                      </div>
                      <div className="details-block">
                        <h4>Mobile Number</h4>
                        <p>{props.location.state.payer.phone_number}</p>
                      </div>
                      <div className="details-block">
                        <h4>
                          Property Address (for which you are paying Rent)
                        </h4>
                        <p>{props.location.state.payer.address}</p>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-4 home-contact-form p-3 px-5">
                    <h4 className="form-heading">Landlord's Bank Details</h4>
                    <div className="form-block">
                      <div className="details-block">
                        <h4>Bank IFSC Code</h4>
                        <p>{props.location.state.payee.ifsc_code}</p>
                      </div>
                      <div className="details-block">
                        <h4>Bank Name</h4>
                        <p>{props.location.state.payee.bank_name}</p>
                      </div>
                      <div className="details-block">
                        <h4>Landlord's Account Number</h4>
                        <p>{props.location.state.payee.account_number}</p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <input
                      type="submit"
                      value="Proceed To Payment"
                      className="getstartbtn "
                      style={{ marginTop: "15px" }}
                    />
                  </div>
                </form>
                <div className="pb-5">
                  {/* <div >
          <Link
            to="/payrent-other-details"

          >
             <button

                      className="getstartbtn "
                    >
                    Back
                    </button>
          </Link>
        </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 text-center">
              <div className="height100">
                <div>
                  <div className="circle-half">
                    <div className="full-circle">
                      <img src={tip} alt="Icon" />
                    </div>
                    <div className="full-text text-left">
                      <h5>Tips</h5>
                      <p>
                        In expedita et occaecati ullam a cumque maiores
                        perspiciatis. Non labore exercitationem rerum nulla ea
                        veniam facilis et.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="circle-half">
                    <p className="p-a-10">
                      In expedita et occaecati ullam a cumque maiores
                      perspiciatis.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

// export default DetailsSummary;

const mapStateToProps = (state) => {
  return {
    token: state.authDetails.token,
    phoneNumber: state.authDetails.phone_number,
    user: state.user,
  };
};

const dispatchToProps = { hitAppUseCase };
//   return bindActionCreators({
//   }, dispatch)
// }

export default connect(mapStateToProps, dispatchToProps)(DetailsSummary);
