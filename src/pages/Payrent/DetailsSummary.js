import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import {getS3SignedUrl, postS3, api} from "../../services/api"
import { hitAllUserData, hitAppUseCase } from '../../store/modules/userDetails/actions';
import Header from "../../component/Header";
import Loader from '../../component/Loader'
import axios from 'axios'
import {API_ENDPOINT_STAGING} from "../../constant" 

const DetailsSummary = (props) => {

  useEffect(() => {
    if (!props.token) {
      props.history.push({pathname: '/'})
    }

});

  useEffect(() => {
    console.log(23232323, props.location.state)
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    let url = `${API_ENDPOINT_STAGING}/api/pay-rent/get-jwt-initiate-payment/`
    let config = {
      headers: {
        Authorization: "Token " + props.token,
        'Content-Type' : "application/json"
      }
    }
      axios.post(url, {
        token: props.location.state.jwt_token,
        payer:props.location.state.payer, payee : props.location.state.payee
    }, config)
      .then((res) => {
        window.open(res.data.payment_url, "_blank")
        props.history.push({pathname:"/payrent-other-details"})
      })
      .catch((err) => {
        console.log("eeee", err)
      })
  }

  return (
    <>
      <Header />

      <div className="form-container">
        <div className="ms-Tabs">
          <h4 className="form-heading text-center">Summary Of All Details</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="Home-contact-form p-3 px-5">
            <div className="form-block m-0">
              <div className="details-block">
                <h4>Rent Amount</h4>
                <p>₹{props.location.state.payer.amount}</p>
              </div>
              <div className="details-block">
                <h4>Service Charge (Inc. GST)</h4>
                <p>₹{props.location.state.payer.amount * props.location.state.serviceCharge/100}</p>
              </div>
              <div className="details-block">
                <h4>Landlord's PAN Number</h4>
                <p>{props.location.state.payee.pan_number}</p>
              </div>
            </div>
          </div>
          <div className="Home-contact-form mt-4  p-3 px-5">
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
                <h4>Property Address (for which you are paying Rent)</h4>
                <p>{props.location.state.payer.address}</p>
              </div>
            </div>
          </div>
          <div className=" mt-4 Home-contact-form p-3 px-5">
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
              <div className="">
              <input type="submit" value="Proceed To Payment" className="getstartbtn fontstyformQuiklone" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="pb-5">
        <div className="custopaddingcls">
          <Link
            to="/payrent-other-details"
            style={{
              color: "#33658A",
              fontWeight: "700",
              fontSize: 18,
            }}
          >
            Back
          </Link>
        </div>
      </div>
    </>
  );
};

// export default DetailsSummary;


const mapStateToProps = state => {
  return {
      token: state.authDetails.token,
      phoneNumber: state.authDetails.phone_number,
      user: state.user
  }
}


const dispatchToProps =  { hitAppUseCase }
//   return bindActionCreators({
//   }, dispatch)
// }


export default connect(mapStateToProps, dispatchToProps)(DetailsSummary)
