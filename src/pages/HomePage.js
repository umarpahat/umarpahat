import React, { useState } from "react";
import { hitAppUseCase } from '../store/modules/userDetails/actions';
import { connect } from 'react-redux'
import { Container } from "react-bootstrap";
import Loader from '../component/Loader'
import "./ApplyNowButton/Applybtnallcomponent.css";

const HomePage = (props) => {

  let [loader, setloader] = useState(false);

  return (
    <>
      {/* {!newUser ? <Header /> : null } */}
      <Container>
        {loader ? <div className="loader"> <Loader color={'#33658a'} /> </div> :
          <div className="pt-5 ">
            <div className="contenertQuicklone">
              <div className="slider-right-block">
                  <div className="Home-contact-form">
                    <h4 className="form-heading fornheadding">
                        Choose from the preferred option below to proceed.
                  </h4>
<input type="button" value="Apply Loan" className="getstartbtn fontstyformQuiklone" onClick={()=>{
    props.hitAppUseCase({ useCase: 'apply-loan' })
    props.history.push({pathname: '/apply-loan'})
    }} style={{margin: "83px 0px 72px 0"}}/>

                  <input type="button" value="Pay Rent" className="getstartbtn fontstyformQuiklone" onClick={()=>{
                      props.hitAppUseCase({ useCase: 'pay-rent' })
                      props.history.push({pathname: '/pay-rent'})
                      }} />
                  </div>
              </div>
            </div>
          </div>
        }
      </Container>
    </>
  );
};


const mapStateToProps = state => {
    return {
    }
  }
  
  
  const dispatchToProps = { hitAppUseCase };
  
  export default connect(mapStateToProps, dispatchToProps)(HomePage)
