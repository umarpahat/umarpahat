import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Congretmessage = (props) => {
  return (
    <>
      <Header {...props} />
      <div className='content darkBg'>
      <Container >
        <div className="form-container formcontainermob  pt-4 p-b-30">
          <form>
            <div className="Home-contact-form mt-4">
              <h4 className="form-heading text-center pb-3">
                Your documents have been submitted
              </h4>
              <p className="PreApprovePara text-capitalize">
                Congratulations! you have successfully completed the process.
                kindly install PayMe India app from Play store/app store to
                complete final formalities to avail quick disbursal of the loan.
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
      </Container>
      </div>
      <br></br>
      <Footer/>
    </>
  );
};

export default Congretmessage;
