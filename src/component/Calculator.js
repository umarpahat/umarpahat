import {Link} from "react-router-dom";
import Slider from "@material-ui/core/Slider";
import React from "react";
import React, {Component} from "react";
import {Link} from "react-router-dom";

import scoreAnimation from "../images/animated/credit.gif";

export const Cibil = (props) => {
    return (
<div className="container">
    <div className="row align-items-center">
        <div className="col-sm-12 col-md-6">
            <h1 className="heading1">Get Instant Loan Approval</h1>
            <p className="heading6">
                No more financial crunches with PayMe India. Avail instant loans upto Rs. 2 lakhs
                anytime-anywhere with no hassle{" "}
            </p>
            <br />
            <br />
            <Link className="btnLarge" to="/apply-loan">
                Apply now
            </Link>
        </div>
        <div className="col-sm-12 col-md-1 ">&nbsp;</div>
        <div className="col-sm-12 col-md-5 m-t-40">
            <div className="price-box">
                <form className="form-horizontal form-pricing" role="form">
                    <h4>EMI Calculator</h4>
                    <div className="relative">
                        <div className="totalAmount">
                            ₹ <span id="interestId"></span>
                        </div>
                    </div>

                    <div className="price-slider">
                        <h4>Loan Amount</h4>
                        <div className="relative">
                            <div className={classes.root}>
                                <Slider
                                    getAriaValueText={valuetext}
                                    aria-labelledby="discrete-slider-always"
                                    step={500}
                                    max={200000}
                                    value={amount}
                                    onChange={handleSliderChange}
                                    valueLabelDisplay="on"
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <span className="rupeesIcon">₹</span>
                            <input
                                className="down-payment"
                                type="number"
                                value={amount}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="price-slider">
                        <h4>Tenure (Months)</h4>
                        <div className="relative">
                            <div className={classes.root}>
                                <Slider
                                    defaultValue={0}
                                    getAriaValueText={valuetext2}
                                    aria-labelledby="discrete-slider-always"
                                    step={1}
                                    min={2}
                                    max={24}
                                    valueLabelDisplay="on"
                                />
                            </div>
                        </div>
                    </div>
                    <span className="text" style={{fontSize:"16px",fontWeight:400}}>
                      <span id="total-amount1"></span> over a period of{" "}
                        <span id="duration-month"></span> months at a rate of{" "}
                        <span id="roi2"></span>%, Processing Fee:
                      <span id="pfee"></span>
                    </span>
                    <div className="price-form">
                        <div className="form-group1">
                            <label
                                htmlFor="total"
                                className="col-sm-12 control-label"
                            >
                                Amount ₹
                            </label>
                            <div className="col-sm-12">
                                <input
                                    type="hidden"
                                    value={handleResult()}
                                    className="form-control"
                                />
                                <p className="price lead" id="total-amount"></p>
                                <span className="price"></span>
                            </div>
                        </div>
                        <div className="form-group1">
                            <label
                                htmlFor="duration"
                                className="col-sm-12 control-label"
                            >
                                Intrest %
                            </label>
                            <div className="col-sm-12">
                                <input
                                    type="hidden"
                                    id="duration"
                                    className="form-control"
                                />
                                <p className="price lead" id="interest"></p>
                            </div>
                        </div>
                        <div className="form-group1">
                            <label
                                htmlFor="repaymentamount"
                                className="col-sm-12 control-label"
                            >
                                Repayment ₹
                            </label>
                            <div className="col-sm-12">
                                <input
                                    type="hidden"
                                    id="repaymentamount"
                                    className="form-control"
                                />
                                <p className="price lead" id="repayment"></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    );
};
