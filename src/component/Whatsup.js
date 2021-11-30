import React, {useEffect, useState} from "react";
import blogPic from "../images/logo.png";
import {Link} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import whatsup from "../images/svg/whatsup.svg"; // requires a loader
import whiteBtn from "../images/svg/arrow-white.svg"; // requires a loader

export const Whatsup = (props) => {
    return (
        <div className="container-fluid px-3 px-sm-5 whatsup-bg p-t-40">
            <div className="container p-t-40">
                <div className="row align-items-center pb-3">
                    <div className="col-sm-12 col-md-1 p-t-40">
                        <img className="img-fluid" alt="CIBIL" src={whatsup}/>
                    </div>
                    <div className="col-sm-12 col-md-5 p-t-40">
                        <p className="white-color whatsup-text">
                           <strong> A credit score is more than just a number. Know your Cibil
                               score completely free with PayMe India.</strong>
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-1 ">&nbsp;</div>
                    <div className="col-sm-12 col-md-5">
                        <input placeholder='Enter your number' className='input'/>
                        <button className='whatsup-btn' type='submit'>
                            <img className="img-fluid" alt="Btn" src={whiteBtn}/>
                        </button>
                     <div style={{paddingTop:15, fontSize:12}} className='white-color btn-checkbox'>
                         <input type='checkbox' name='thing' value='valuable' id="thing"/><label htmlFor="thing">I accept the Terms & coditions of Payme India</label>

                     </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
