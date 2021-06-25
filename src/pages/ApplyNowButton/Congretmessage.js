import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Congretmessage = (props) => {
  return (
    <>
      <Header />
      <div style={{backgroundColor:"#f2f2f2"}}>
      <Container >
        <div className="form-container formcontainermob  pt-4">
          <form>
            <div className="Home-contact-form mt-4">
              <h4 className="form-heading text-center pb-3">
                Your documents have been submitted
              </h4>
              <p className="PreApprovePara text-capitalize">
                Congratulations! you have successfully completed the process.
                kindly install PayMe india app from Play store/app store to
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
      <div style={{marginTop:"180px"}}>

      <Footer/>
      </div>
    </>
  );
};

export default Congretmessage;
