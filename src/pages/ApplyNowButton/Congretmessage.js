import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../component/Header";

const Congretmessage = (props) => {
  return (
    <>
      <Header />
      <Container>
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
              {/* <p className="PreApprovePara text-center pt-5 pb-2">
                Didn’t recieved approval message?
              </p> */}
              <div className="pt-3">
                <Link to="/pending-approval" className="submit-btn text-center">
                  <a style={{ color: "#fff" }}>Go To App</a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Congretmessage;
