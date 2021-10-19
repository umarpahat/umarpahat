import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import Cookies from "universal-cookie";
import tip from "../../images/svg/tip.png";
toast.configure();
const options = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 6000,
  limit: 1,
  closeButton: false,
};

const cookies = new Cookies();

const DetailsSummary = (props) => {
  const token = cookies.get("token");

  const [toasterr,settoasterr]=useState(true);

  useEffect(() => {
    if (!token) {
      props.history.push({ pathname: "/" });
    }
  });

  useEffect(() => {
    //console.log(23232323, props.location.state);
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
        if(toasterr){
        toast.error(err.response.data, { ...options });
        settoasterr(false)
        }
        if (err.response.status === 401) {
          cookies.remove("token", { path: "/" });
        }

        //console.log("eeee", err);
      });
  };

  return (
    <>
      <Header active="payrent" />
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
            <div className="col-lg-5 col-md-5 col-sm-12F">
              <form onSubmit={handleSubmit}>
                <div className="home-contact-form">
                  <div className="ms-Tabs">
                    <h4 className="form-heading text-center">Pay rent</h4>
                  </div>
                  <div className="details-block">
                    <h4>Paying to</h4>
                    <p>{props.location.state.payee.bene_name}</p>
                  </div>
                  <div className="details-block">
                    <h4>Mobile Number</h4>
                    <p>{props.location.state.payer.phone_number}</p>
                  </div>
                  <div className="details-block">
                    <h4>Landlord's PAN Number</h4>
                    <p>{props.location.state.payee.pan_number}</p>
                  </div>
                  <hr />
                  <div className="details-block-tabualar">
                    <h4>Rent Amount</h4>
                    <h4>₹{props.location.state.payer.amount}</h4>
                  </div>
                  <div className="details-block-tabualar">
                    <h4>Service Charge (Inc. GST)</h4>
                    <h4>
                      ₹
                      {(props.location.state.payer.amount *
                        props.location.state.serviceCharge) /
                        100}
                    </h4>
                  </div>

                  <hr />
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
                  <hr />
                  <div className="details-block p-b-30">
                    <h4>Paying For</h4>
                    <p>{props.location.state.payer.address}</p>
                  </div>
                  <div className="">
                    <input
                      type="submit"
                      value="Proceed To Payment"
                      className="getstartbtn "
                      style={{ marginTop: "15px" }}
                    />
                  </div>
                </div>
              </form>
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
                        Kindly review the details precisely. Once the payment is
                        done, you won't be able to make changes to the rent
                        receipt.
                      </p>
                    </div>
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
