import React from "react";
import {Link} from "react-router-dom";
import icon from "../images/svg/cibil-icon.svg";
export const CibilScoreFooter = (props) => {
    return (
        <div className="container-fluid cibil-footer">
            <div className="container">

                    <div className="row align-items-center">
                        <div className="footer-align">
                            <div>
                                <img src={icon} alt="icon" className="img-fluid" />
                            </div>
                            <div>
                                <h4>
                                    Get Instant Loan and Unlimited Offers
                                </h4>
                            </div>
                            <div>
                                <Link to="/get-cibil-report" className="green-btn">
                                    Check Now
                                </Link>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};
