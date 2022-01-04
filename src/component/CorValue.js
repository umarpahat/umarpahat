import React from "react";
import {S3_IMAGES_URL} from "../constant";

export const CorValue = (props) => {
    return (
        <div className="clearfix dark-bg">
            <div className="container">
                <div className="row justify-content-md-center">
                <div className="col-md-12 text-center p-t-30 p-b-30">
                    <h4 className="heading4 white-color">Our Core values</h4>
                </div>
                </div>
                <div className="row justify-content-md-center colValue p-b-20">
                        <div className='col-sm-6 col-md-2 offset-sm-0 offset-md-1'>
                            <img className="img-fluid" alt="Committed" src={S3_IMAGES_URL +'/svg/handsake.svg'}/>
                            <h5>Committed</h5>
                            <p>Customer-focus & dedicated</p>
                        </div>
                        <div className='col-sm-6 col-md-2'>
                            <img className="img-fluid" alt="Respect"  src={S3_IMAGES_URL +'/svg/respect.svg'}/>
                            <h5>Respect</h5>
                            <p>A culture to respect people you deal with</p>
                        </div>
                        <div className='col-sm-6 col-md-2'>
                            <img className="img-fluid" alt="Integrity"  src={S3_IMAGES_URL +'/svg/integrity.svg'}/>
                            <h5>Integrity</h5>
                            <p>To be ethical and sincere in all actions</p>
                        </div>
                        <div className='col-sm-6 col-md-2'>
                            <img className="img-fluid" alt="Cognizant" src={S3_IMAGES_URL +'/svg/cognizant.svg'}/>
                            <h5>Cognizant</h5>
                            <p>Expertise in what we do</p>
                        </div>
                        <div className='col-md-2 col-sm-6 offset-sm-3 offset-md-0'>
                            <img className="img-fluid" alt="Innovative"  src={S3_IMAGES_URL +'/svg/innovative.svg'} />
                            <h5>Innovative</h5>
                            <p>Always strive, never settle</p>
                        </div>
                </div>
            </div>
        </div>
    );
};
