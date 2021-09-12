import React, { useState } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { hitLogout } from '../../store/modules/auth/actions'
import { api } from '../../services/api';
import Loader from '../../component/Loader';
import Header from "../Header";
import Footer from "../Footer";
import Cookies from 'universal-cookie';
 
const cookies = new Cookies()

function ChangeMpin(props) {

  const [mpin , setmpin] = useState("")
  const [confirmMpin, setconfirmMpin] = useState("")
  const [errorMpin, seterrorMpin] = useState(null)
  const [errorMpinConfirm, seterrorMpinConfirm] = useState(null)
  const [mpinNotMatch, setmpinNotMatch] = useState(null)
  let [loader, setloader] = useState(false);

  const createNewMpin = (event) => {
    const token = cookies.get('token');
    setloader(true)
    event.preventDefault();
    if (!/^\d{6}$/.test(mpin)){
      seterrorMpin("Please input valid number of 6 digit")
      setloader(false)
    } else if (!/^\d{6}$/.test(confirmMpin)) {
      seterrorMpinConfirm("Please input valid number of 6 digit")
      setloader(false)
    } else if( mpin !== confirmMpin) {
      setmpinNotMatch("New Mpin and Confirm Mpin does not matched!!! ")
      setloader(false)
    }else {
      console.log("every thing woirked")
         api.post(`api/authentication/create_or_update_mpin/`, { 'mpin': mpin }, { headers: { 'Authorization': 'Token ' + token } })
        .then((response) => {
            if (response.status === 200) {
                setloader(false)
                const phoneNumber = props.phoneNumber
                if (props.location.state.forgotPassword){
                  props.hitLogout()
                  props.history.push({pathname: '/login-with-mob-mpin', state: { phoneNumber: phoneNumber}})
                } else {
                  props.history.push({pathname: "/kyc-details-form"})
                }
            } else {
              setmpinNotMatch("Old and new mpin should not be same.")
              setloader(false)
            }
        })
        .catch((error) => {
          setloader(false)
          console.log(error)
        });
    }
}

  return (
    <>
      <Header {...props} />
        <div className='content darkBg'>
      {loader ? <div className="loader"> <Loader color={'#33658a'} /> </div> :
      <div className="form-container formcontainermob  pt-4">
        <div>
        <form onSubmit={createNewMpin}>
            <div className="home-contact-form mt-4">
              <h4 className="form-heading text-center">MPIN CHANGE</h4>

              <div className="form-block">
                <div className="form-group ms-input-group">
                  <label className="form-label pb-2">New MPIN</label>
                  <input
                    type="password"
                    className="form-control ms-form-input"
                    placeholder="Enter New MPIN"
                    maxLength="6"
                    value={mpin}
                    onChange={(val) => {
                      seterrorMpin(null)
                      setmpinNotMatch(null)
                      setmpin(val.target.value)
                    }}
                  />
                {errorMpin ? <span style={{color:"red"}}>{errorMpin}</span> : null}
                </div>
                <div className="form-group ms-input-group">
                  <label className="form-label pb-2">Confirm MPIN</label>
                  <input
                    type="password"
                    maxLength="6"
                    className="form-control ms-form-input"
                    placeholder="Enter Confirm MPIN"
                    value={confirmMpin}
                    onChange={(val) => {
                      seterrorMpinConfirm(null)
                      setmpinNotMatch(null)
                      setconfirmMpin(val.target.value)
                    }}
                  />
                  {errorMpinConfirm ? <span style={{color:"red"}}>{errorMpinConfirm}</span> : null}
                </div>
              </div>
              {mpinNotMatch ? <span style={{color:"red"}}>{mpinNotMatch}</span> : null}
              <input type="submit" className="submit-btn text-center" value="Continue" style={{'color': '#fff',
    'border': 'none',
    'width': '503px'}}
              />
            </div>
          </form>
        </div>
      </div>}
        </div>
    </>
  );
}


const mapStateToProps = state => {
  return {
      token: state.authDetails.token,
      phoneNumber: state.authDetails.phone_number,
      user: state.user.userData
  }
}


const dispatchToProps = (dispatch) => {
  return bindActionCreators({
      hitLogout
  }, dispatch)
}


export default connect(mapStateToProps, dispatchToProps)(ChangeMpin)
