import React, {Component} from "react";
import {Link} from "react-router-dom";

import hand from "../images/svg/handsake.svg";
import respect from "../images/svg/respect.svg";
import integrity from "../images/svg/integrity.svg";
import cognizant from "../images/svg/cognizant.svg";
import innovative from "../images/svg/innovative.svg";

export const CorValue = (props) => {
    return (
        <div className="clearfix dark-bg">
            <div className="container">
                <div className="col col-md-12 reg-second-heading ">
                    <h4 className="p-b-30 white-color">Our Core values</h4>
                </div>
                <div className="row align-items-center justify-content-md-center pb-3">

                    <ul className='colValue '>
                        <li>
                            <img className="img-fluid" alt="Hand Sake" src={hand}/>
                            <h5>Committed</h5>
                            <p>Customer-focus & dedicated</p>
                        </li>
                        <li>
                            <img className="img-fluid" alt="Hand Sake" src={respect}/>
                            <h5>Respect</h5>
                            <p>A culture to respect people you deal with</p>
                        </li>
                        <li>
                            <img className="img-fluid" alt="Hand Sake" src={integrity}/>
                            <h5>Integrity</h5>
                            <p>To be ethical and sincere in all actions</p>
                        </li>
                        <li>
                            <img className="img-fluid" alt="Hand Sake" src={cognizant}/>
                            <h5>Cognizant</h5>
                            <p>Expertise in what we do</p>
                        </li>
                        <li>
                            <img className="img-fluid" alt="Hand Sake" src={innovative}/>
                            <h5>Innovative</h5>
                            <p>Always strive, never settle</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};
