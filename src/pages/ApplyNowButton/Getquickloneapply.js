import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { hitAppUseCase } from '../../store/modules/userDetails/actions';
import { connect } from 'react-redux'
import { api } from '../../services/api';
import Loader from '../../component/Loader'
import Confirmotpmobile from "./Confirmotpmobile";
import "../ApplyNowButton/Applybtnallcomponent.css";
import Header from "../Header";
import Footer from "../Footer";

const Getquikloneapply = (props) => {

  let [loader, setloader] = useState(false);
  let [number, setnumber] = useState(null);
  let [error, seterror] = useState(null);
  let [newUser, setnewUser] = useState(false);

  useEffect(() => {
if (window.location.pathname === "/apply-loan") {
  props.hitAppUseCase({ useCase: 'apply-loan' })
} else if (window.location.pathname === '/pay-rent') {
  props.hitAppUseCase({ useCase: 'pay-rent' })
}
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    /^[6-9]\d{9}$/.test(number) ? verifyPhone() : seterror("Please input valid 10 digit mobile number")
  }

  const verifyPhone = () => {
    setloader(true)
    api.post(`api/authentication/phone_no_verify/`, { 'phone_number': Number(number) }, {})
      .then((response) => {
        setloader(false)
        if (response.status === 200 && !response.data.phone_number_verified) {
          setnewUser(true)
        } else if (response.status === 200 && response.data.phone_number_verified) {
          props.history.push({pathname: '/login-with-mob-mpin', state: { phoneNumber: number}})
        } else {
          console.log(response.status)
        }
        return response;
      })
      .catch((error) => {
        console.log(error)
        setloader(false)
      });
  }

  return (
    <>
      {/* {!newUser ? <Header /> : null } */}
     <Header {...props}/>
      <Container >
      
        {loader ? <div className="loader"> <Loader color={'#33658a'} /> </div> :
        newUser ? <Confirmotpmobile {...props} phone_number={Number(number)} resendOtp={verifyPhone} /> :
          <div className="pt-5 ">
            <div className="contenertQuicklone">
              <div className="slider-right-block">
                <form onSubmit={handleSubmit}>
                  <div className="Home-contact-form">
                    <h4 className="form-heading fornheadding">
                      Let's Get Started
                  </h4>

                    <div className="form-block">
                      <div className="form-group ms-input-group">
                        <label className="form-label">Mobile Number</label>

                        <input
                          type="text"
                          className="form-control ms-form-input"
                          placeholder="Enter Your Mobile Number"
                          value={number || ""}
                          onChange={(event) => setnumber(event.target.value)}
                        />
                        {error ? <span style={{color:"red"}}>{error}</span> : null}
                      </div>
                    </div>
                    <div className="pt-3">
                      <label>
                      </label>
                      <input type="submit" value="Continue" className="getstartbtn fontstyformQuiklone" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        }
      </Container>



      <div style={{marginTop:"9.2%"}}>

      <Footer/>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  }
}


const dispatchToProps = { hitAppUseCase };

export default connect(mapStateToProps, dispatchToProps)(Getquikloneapply)
