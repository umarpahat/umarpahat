import React, {Component} from "react";
import {Link} from "react-router-dom";
import {S3_IMAGES_URL} from "../constant";

export const Cibil = (props) => {
    return (
        <div className="container">
            <div className="row align-items-center pb-3">
                <div className="col-sm-8 offset-sm-2 col-md-5 offset-md-0">
                    <img className="img-fluid" alt="CIBIL" src={S3_IMAGES_URL +'/animated/credit.gif'} />
                </div>
                <div className="col-sm-12 col-md-2 ">&nbsp;</div>
                <div className="col-sm-12 col-md-5">
                    <h3 className="heading2 relative">
                        <span className="circle-small"></span> Get CIBIL report worth
                        Rs 1500
                    </h3>
                    <h3 className="heading3">
                        <span className="blue-color">Absolutely free!</span>
                    </h3>
                    <p className="heading6 p-b-20">
                        A credit score is more than just a number. Know your Cibil
                        score completely free with PayMe India.
                    </p>

                    <Link style={{color: "#fff", cursor: "pointer"}} to="get-cibil-report" className="btnLarge ">
                        Get CIBIL Report
                    </Link>
                </div>
            </div>
        </div>
    );
};
