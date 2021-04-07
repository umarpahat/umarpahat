import React from "react";
import { Container, ProgressBar } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Progressbar = () => {
  var history = useHistory();
  var path = history.location.pathname;
  let progress = 0;

  if (path === "/kyc-details-form") {
    progress = 0;
  } else if (path === "/bank-details-payme") {
    progress = 50;
  } else if (path === "/KycDeatailsSecondForm") {
    progress = 50;
  } else if (path === "/KycDeatailsThirdForm") {
    progress = 50;
  } else if (path === "/KycjobDeatailFormFourth") {
    progress = 50;
  } else if (path === "/Kycdeatailsfiveform") {
    progress = 50;
  } else {
    progress = 100;
  }

  return (
    <>
      <Container>
        <div className="pt-5 mobProgressBar ">
          <div className="" style={{ position: "relative" }}>
            <ProgressBar now={progress} />
            <div className="d-flex containerCircle">
              <div>
                <div
                  className={`circlebar  ${progress >= 0 && `ActiveCircle`} `}
                ></div>
              </div>
              <div
                className={`circlebar ${progress >= 50 && `ActiveCircle`}`}
              ></div>
              <div
                className={`circlebar ${progress > 50 && `ActiveCircle`}`}
              ></div>
            </div>
            <div className="ProgessbarText">
              <p className={` ${progress >= 0 && `ActiveCircleHeadding`} `}>
                KYC Details
              </p>
              <p
                className={` ${
                  progress >= 50 && `ActiveCircleHeadding  marginclas`
                }  `}
              >
                Bank Details
              </p>
              <p className={` ${progress > 50 && `ActiveCircleHeadding`} `}>
                Professional Details
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Progressbar;
