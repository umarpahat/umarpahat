import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
function Modalkyccomplete(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <div className=" m-4">
          <div style={{}}>
            <div>
              <Modal.Title className="modaltitle">Congratulations</Modal.Title>
              <Modal.Body>
                <p className="content-pera ">
                  Your application has been submitted successfully. You’ll
                  recieve a confirmation message on your mobile and email in
                  maximum 48hrs.
                </p>
                <p className="content-pera pt-3">
                  {" "}
                  You can login again to check for approval, in case you didn’t
                  recieve any message on your mobile number or email.
                </p>
              </Modal.Body>
              <div className="text-center p-3">
                <Link
                  className="btn btn-primary btnmodalbgcolor  d-block"
                  to="/Pandingapprovalform"
                >
                  OK
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Modalkyccomplete;
