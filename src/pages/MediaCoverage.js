import React, {useState} from "react";
import {hitAppUseCase} from "../store/modules/userDetails/actions";
import {connect} from "react-redux";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Footer from "./Footer";
import Header from "./Header";
import "../../src/home.css";
import userIcon from "../images/user-icon.png";

const HowWeWork = (props) => {
    let [loader, setloader] = useState(false);

    return (
        <>
            <Header {...props} />
            <div className='content'>
                <div className="container-fluid px-3 px-sm-5  testimonial">
                    <div className="col-sm-12 col-md-12 reg-second-heading">
                        <h4>Media Coverage</h4>
                        <span className="reg-second-subheading ">Know what the world is Buzzing about PayMe India
                        </span>
                    </div>
                    <div className="container p-b-30">
                        <div className="row">
                            <div className="card  py-3 px-4 col-sm-4 col-md-4">
                                <div className="">
                                    <div className="profile-pic float-left"><img
                                        src="https://website.paymeindia.in/assets/images/logo/bs-logo1.png"
                                        className="img-fluid"/>
                                    </div>
                                    <h6 className='p-t-20'>Business Standard</h6>
                                </div>
                                <p className="content mb-5 mx-2 pt-3">"Leading fintech company, went official about
                                    raising USD 2 million from Singapore-based Angel Investors. The investment round
                                    included the line of credit from multiple non-banking financial companies (NBFCs)
                                    and fresh cash in the equity round."</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="services p-t-40 ">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-8 text-center p-b-30">
                                <h3 className="heading3">Guide</h3>
                                <span
                                    className="reg-second-subheading">Procedure for E-Nach, E-Sign and E-Mandate.</span>
                            </div>
                        </div>
                        <div className="row justify-content-md-center p-b-30">
                            <div className="col-md-6 text-center">
                                <div id="outer-box">
                                    <iframe width="480" height="300" src="https://www.youtube.com/embed/hrOtqo98Pdw"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen="">Nach
                                    </iframe>

                                </div>
                            </div>
                            <div className="col-md-6 text-center">
                                <div id="outer-box">
                                    <iframe width="480" height="300" src="https://www.youtube.com/embed/TQs0zHpsVyg"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen=""></iframe>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="services">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col col-md-8 text-center p-t-30 p-b-30">
                                <h4 className="heading4">Contact Us</h4>
                                <p>
                                    Please contact us at{" "}
                                    <a href="mailto: admin@paymeindia.in" target='_blank'>admin@paymeindia.in</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};
const mapStateToProps = (state) => {
    return {};
};

const dispatchToProps = {hitAppUseCase};

export default connect(mapStateToProps, dispatchToProps)(HowWeWork);
