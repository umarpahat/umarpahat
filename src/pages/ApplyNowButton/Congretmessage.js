import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Cookies from 'universal-cookie';
import successAnimation from "../../images/animated/success-animation.gif";
const cookies = new Cookies()

const Congretmessage = (props) => {
  return (
    <>
      <Header {...props} />
      <div className='content darkBg'>
      <Container >
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
              <br/>
              <a className='back-arrow' href=''>Back</a>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 text-center">
          <form>
            <div className="home-contact-form mt-4">
              <img src={successAnimation} className='img-fluid max-width70'  alt='Icon'/>
              <h4 className="form-heading text-center pb-3">
                Your Documents has been sumitted sucessfully.
              </h4>
              <p className="preApprovePara text-capitalize">
                You can  track your loan progress onour payme app, we keep sending minute updates on our mobile app
              </p>
              <div className="pt-3">
                <a
                  href="https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia"
                  className="submit-btn text-center"
                  style={{ color: "#fff" }}
                >
                  Go To App
                </a>
              </div>
            </div>
          </form>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 text-center">

            </div>
          </div>
      </Container>
      </div>
    </>
  );
};

export default Congretmessage;
