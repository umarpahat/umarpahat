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
                        <Link to={{pathname: 'city'}} target={"_blank"}> Personal Loan in Bangalore </Link> | <Link to={{pathname: 'city'}} target={"_blank"}> Personal Loan in Hyderabad</Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Pune </Link> | <Link to={{pathname: 'city'}} target={"_blank"}> Personal Loan in Mumbai</Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Delhi</Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Chennai</Link>
                       <Link to={{pathname: 'city'}} target={"_blank"}> Personal Loan in Kolkata</Link> | <Link to={{pathname: 'city'}} target={"_blank"}> Personal Loan in Noida</Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Vadodara </Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Coimbatore </Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Bhopal </Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Jaipur </Link>
                        <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Navi Mumbai </Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Lucknow </Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Ahmedabad</Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Bhubaneswar</Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Nashik </Link>

                    </div>
            </div>
        </div>
    );
};
