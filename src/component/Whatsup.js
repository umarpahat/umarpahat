import React, {useEffect, useState} from "react";
import blogPic from "../images/logo.png";
import {Link} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import whatsup from "../images/svg/whatsup.svg"; // requires a loader
import whiteBtn from "../images/svg/arrow-white.svg"; // requires a loader

export const Whatsup = (props) => {
    return (
        <div className="container-fluid px-3 px-sm-5 whatsup-bg p-t-40">
            <div className="container p-t-20 p-b-30">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-1 m-t-m-7 center-mobile">
                        <img className="img-fluid" alt="CIBIL" src={whatsup}/>
                    </div>
                    <div className="col-sm-12 col-md-7 p-t-5 center-mobile">
                        <p className="white-color whatsup-text">
                           <strong> A credit score is more than just a number. Know your Cibil
                               score completely free with PayMe India.</strong>
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-4 p-t-30 ">
                    <div className=" center-mobile right-box">
                        <input placeholder='Enter your number' className='input'/>
                        <button className='whatsup-btn' type='submit'>
                            <img className="img-fluid" alt="Btn" src={whiteBtn}/>
                        </button>
                        <div style={{paddingTop:15, fontSize:12}} className='white-color btn-checkbox'>
                            <input type='checkbox' name='thing' value='valuable' id="thing"/><label htmlFor="thing">I accept the Terms & coditions of PayMe India</label>

                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
