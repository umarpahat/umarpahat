import React from "react";
import {Link} from "react-router-dom";

export const PopularCity = (props) => {
    return (
        <div className="container-fluid white-bg popularCity">
            <div className="container">
                <div className="col-sm-12 col-md-12 reg-second-heading text-center ">
                    <h4>Popular Cities</h4>
                </div>
                <div className="row align-items-center p-b-30">
                    <div className="col-sm-12 col-md-12 text-center ">
                        <Link to="/personal-loan-in-bangalore" params={{city: "Bangalore"}}>
                            Personal Loan in Bangalore
                        </Link>
                        |
                        <Link to="/personal-loan-in-hyderabad" params={{city: "Bangalore"}}>
                            Personal Loan in Hyderabad
                        </Link>
                        |
                        <Link to="/personal-loan-in-pune" params={{city: "Pune"}}>
                            Personal Loan in Pune
                        </Link>
                        |
                        <Link to="/personal-loan-in-mumbai" params={{city: "Mumbai"}}>
                            Personal Loan in Mumbai
                        </Link>
                        |
                        <Link to="/personal-loan-in-delhi" params={{city: "Delhi"}}>
                            Personal Loan in Delhi
                        </Link>
                        |
                        <Link to="/personal-loan-in-chennai" params={{city: "Chennai"}}>
                            Personal Loan in Chennai
                        </Link>
                        |
                        <Link to="/personal-loan-in-kolkata" params={{city: "Kolkata"}}>
                            Personal Loan in Kolkata
                        </Link>
                        |
                        <Link to="/personal-loan-in-noida" params={{city: "Noida"}}>
                            Personal Loan in Noida
                        </Link>
                        |
                        <Link to="/personal-loan-in-vadodara" params={{city: "Vadodara"}}>
                            Personal Loan in Vadodara
                        </Link>
                        |
                        <Link to="/personal-loan-in-coimbatore" params={{city: "Coimbatore"}}>
                            Personal Loan in Coimbatore
                        </Link>
                        |
                        <Link to="/personal-loan-in-bhopal" params={{city: "Bangalore"}}>
                            Personal Loan in Bhopal
                        </Link>
                        |
                        <Link to="/personal-loan-in-jaipur" params={{city: "Bhopal"}}>
                            Personal Loan in Jaipur
                        </Link>
                        |
                        <Link to="/personal-loan-in-mumbai" params={{city: "Navi Mumbai"}}>
                            Personal Loan in Navi Mumbai
                        </Link>
                        |
                        <Link to="/personal-loan-in-lucknow" params={{city: "Lucknow"}}>
                            Personal Loan in Lucknow
                        </Link>
                        |
                        <Link to="/personal-loan-in-ahmedabad" params={{city: "Ahmedabad"}}>
                            Personal Loan in Ahmedabad
                        </Link>
                        |
                        <Link to="/personal-loan-in-bhubaneswar" params={{city: "Bhubaneswar"}}>
                            Personal Loan in Bhubaneswar
                        </Link>
                        |
                        <Link to="/personal-loan-in-nashik" params={{city: "Nashik"}}>
                            Personal Loan in Nashik
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
