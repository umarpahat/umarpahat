import React from "react";
import {Link} from "react-router-dom";
import fourZeoFour from "../images/svg/404.svg";
import {hitAppUseCase} from "../store/modules/userDetails/actions";
import {connect} from "react-redux";
import Footer from "./Footer";
import {CarouselPic} from "../component/carousel";
import {Cibil} from "../component/Cibil";
import {Benefits} from "../component/Benefits";
import {Services} from "../component/Services";
import {GetLoanStep} from "../component/GetLoanStep";
import {Products} from "../component/Products";
import Slider from "@material-ui/core/Slider";
import {CorValue} from "../component/CorValue";
import {Users} from "../component/Users";
import {Whatsup} from "../component/Whatsup";
import {Blogs} from "../component/Blogs";
import {Videos} from "../component/Videos";
import getLoan from "../images/svg/get-loan-pic.svg";
import criteria from "../images/svg/criteria-pic.svg";
import googlePay from "../images/svg/google-play.svg";
import appStore from "../images/svg/app-store.svg";


const EligbilityCriteria = (props) => {

    return (
        <>
            <div className="content">
                <div className="banner">
                    <div className="container">
                        <div className="row align-items-center ">
                            <div className="col-sm-12 col-md-5">
                                <h1 className="heading1">Eligibility Criteria</h1>
                                <h4 className="heading4 ">You can apply loans after eligbility</h4>
                                <p className="heading6 p-t-10">Illo harum eius aut quis nobis quo autem aperiam.
                                    Nesciunt unde aut nihil sapiente aut. Voluptate ad magnam quia itaque nesciunt iusto
                                    aspernatur.as deleniti.</p>
                                <br/>
                                <br/>
                                <Link className="btnLarge" to={{
                                    pathname: '/apply-loan'
                                }}>
                                    Get App now
                                </Link>
                            </div>
                            <div className="col-sm-12 col-md-2 ">
                                &nbsp;
                            </div>
                            <div className="col-sm-12 col-md-5 m-t-40 text-center">
                                <div className='p-b-30'>
                                    <img className="img-fluid"
                                         alt="Instant Loan"
                                         src={criteria}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner">
                    <div className="container">
                        <div className="row align-items-center ">
                            <div className="col-sm-12 col-md-5">
                                <h1 className="heading1">Eligibility Criteria</h1>
                                <h4 className="heading4 ">You can apply loans after eligbility</h4>
                                <p className="heading6 p-t-10">Illo harum eius aut quis nobis quo autem aperiam.
                                    Nesciunt unde aut nihil sapiente aut. Voluptate ad magnam quia itaque nesciunt iusto
                                    aspernatur.as deleniti.</p>
                                <br/>
                                <br/>
                                <Link className="btnLarge" to={{
                                    pathname: '/apply-loan'
                                }}>
                                    Get App now
                                </Link>
                            </div>
                            <div className="col-sm-12 col-md-2 ">
                                &nbsp;
                            </div>
                            <div className="col-sm-12 col-md-5 m-t-40 text-center">
                                <div className='p-b-30'>
                                    <img className="img-fluid"
                                         alt="Instant Loan"
                                         src={criteria}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-3 px-sm-5 p-t-40">
                    <div className="container">
                        <div className="row">
                            <div className="advertise">
                                <div>
                                    <img src={getLoan} alt="blog" className="img-fluid"/>
                                </div>
                                <div>
                                    <h4 className="white-color">
                                        Get Instant Loan and Unlimited Offers
                                    </h4>
                                </div>
                                <div>
                                    <Link to="/apply-loan" className="green-btn">
                                        Apply Now
                                    </Link>
                                </div>
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
export default connect(mapStateToProps, dispatchToProps)(EligbilityCriteria);
