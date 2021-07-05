import React, {useState} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import Referral from "../../component/img/Referral.png";
import Loader from '../../component/Loader'
import { api } from '../../services/api';
import Header from "../Header";
import Footer from "../Footer";

function Referralcode(props) {

  const [loader, setloader] = useState(false);
  const [referral, setreferral] = useState("")
  let [error, seterror] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    referral.length ? handleReferral() : seterror("Please enter valid referral code or press skip")
  }

  const handleReferral = () => {
   
    setloader(true)
    console.log(3333333)
    console.log(referral)
    console.log(referral.toUpperCase())
    console.log(props.token)
    console.log(44444)
    

    api.post(`/api/referral/referral_code_apply/`, {'referral_code' : referral.toUpperCase()},  { headers: { 'Authorization': 'Token ' + props.token } })
    .then((response) => {
        setloader(false)
        console.log("3333333")
        console.log(response)
        console.log("2323232")
        if(response.status === 200) {
          props.history.push({pathname:'/change-mpin', state: { forgotPassword: false}})
          // setforgotPassword(true)
          console.log(response.status)
        } else {
            console.log(response.status)
            seterror("Enter a valid Referal Code");
        }
      return response;
    })
    .catch((error) => {
      console.log(88888)
        setloader(false)
        console.log(error)
    });
  }

  return (
    <>
      <Header {...props}/>
        <div className='content darkBg'>
      {loader ? <div className="loader"> <Loader color={'#33658a'} /> </div> :
      <div className="form-container formcontainermob  pt-4">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="Home-contact-form mt-4">
              <h4 className="form-heading text-center">Referral Code</h4>
              <div class="form-group ms-input-group">
                <div className="topnoticreferral">
                  <p className="p-4 mx-4">
                    we're so delighted you are here! Collect gift on entering
                    referral code.
                  </p>
                </div>
                <div
                  style={{ width: "250px", margin: "auto" }}
                  className="py-5"
                >
                  <img
                    src={Referral}
                    alt="referralimg"
                    className="img-fluid py-5"
                  />
                </div>
              </div>
              <div className="form-block">
                <div class="form-group ms-input-group">
                  <label className="form-label pb-3">
                    Do you have a referral code
                  </label>
                  <input
                    type="text"
                    class="form-control ms-form-input"
                    placeholder="Enter your code"
                    value={referral}
                    onChange={(event) => setreferral(event.target.value)}
                  />
                  {error ? <span style={{color:"red"}}>{error}</span> : null}
                </div>
              </div>
              <input type="submit" value="Save" className="submit-btn text-center" style={{"border": "none",
    "width": "504px","height":"64px", "color": "white"}}/>
              {/* <Link to="/create-mpin" className="submit-btn text-center">
                <a style={{ color: "#fff" }}>Save</a>
              </Link> */}
            </div>
          </form>
        </div>
      </div>}
      <div className="py-3">
        {/* <Link to="/create-mpin"> */}
          <p className="Skipsty" onClick={()=>props.history.push({pathname:'/change-mpin', state: { forgotPassword: false}})}>Skip</p>
        {/* </Link> */}
      </div>
        </div>
        <Footer/>
    </>
  );
}

// export default Referralcode;

const mapStateToProps = state => {
  return {
      token: state.authDetails.token,
      phoneNumber: state.authDetails.phone_number,
  }
}


const dispatchToProps = (dispatch) => {
  return bindActionCreators({
      // hitLogin,
  }, dispatch)
}


export default connect(mapStateToProps, dispatchToProps)(Referralcode)
