import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import tip from "../../images/svg/tip.png";

function Creatempn() {
  return (
    <>
      <Header {...props}/>
      <div className='content darkBg'>
        <Container>
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12 text-center">
            <br/>
            <a className='back-arrow' href=''>Back</a>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 text-center">
            <form>
              <div className="home-contact-form mt-4">
                <h4 className="form-heading text-center">Create Password</h4>
                <div className="form-group ms-input-group">
                  <div className="topnoticreferral">
                    <p className="p-4 mx-4">
                      Make sure the mobile number is associated in this specific
                      device, we will send and verify the new number with reverse
                      OTP.
                    </p>
                  </div>
                </div>
                <div className="form-block">
                  <div className="form-group ms-input-group">
                    <label className="form-label pb-2">New Password</label>
                    <input
                        type="text"
                        className="form-control ms-form-input"
                        placeholder="Enter New Password"
                    />
                  </div>
                  <div className="form-group ms-input-group">
                    <label className="form-label pb-2">Confirm Password</label>
                    <input
                        type="text"
                        className="form-control ms-form-input"
                        placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <Link to="/kyc-details-form" className="submit-btn text-center">
                  <a style={{color: "#fff"}}>Continue</a>
                </Link>
              </div>
            </form>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 text-center">
            <div className='height100'>
              <div>
                <div className='circle-half'>
                  <div className='full-circle'>
                    <img src={tip} alt='Icon'/>
                  </div>
                  <div className='full-text text-left'>
                    <h5>Tips</h5>
                    <p>In expedita et occaecati ullam a cumque maiores perspiciatis. Non labore exercitationem
                      rerum nulla ea veniam facilis et. </p>
                  </div>
                </div>
                <div className='circle-half'>
                  <p className='p-a-10'>In expedita et occaecati ullam a cumque maiores perspiciatis. </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        </Container>

      </div>
      <Footer/>
    </>
  );
}

export default Creatempn;
