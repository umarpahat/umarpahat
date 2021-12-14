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
import Header from "./Header";


const EligbilityCriteria = (props) => {

    return (
        <>  <Header {...props} active="home"/>
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
                            <div className="col-sm-12 col-md-7 m-t-40 text-center">
                                <div className='p-b-30'>
                                    <img className="img-fluid"
                                         alt="Instant Loan"
                                         src={criteria}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gray-bg">
                    <div className="container p-t-50">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-sm-12 col-md-10">
                                <p className="heading6 p-t-10 text-center">Eligibility Criteria varies from Product to
                                    Products and is also dependent upon the NBFC / Bank funding a particular
                                    application.

                                    However, you can avail of EMI Free Loan, Personal Loan, Overdraft or Special Purpose
                                    Loan if you meet the following criteria:

                                    Check guideline numbers with our Check My Rate or Eligibility Calculator.</p>
                            </div>
                            <div className="col-sm-12 col-md-10">
                                <div className='border-round '>
                                    <div className='left_section text-center'>
                                        <div className='head18'>Criteria*</div>
                                        <div className='grey-round'>Age</div>
                                        <div>Net Salary**</div>
                                        <div className='grey-round'>Total years in job/profession</div>
                                        <div>Nature of residence`</div>
                                    </div>
                                    <div className='right_section'>
                                        <div className='head18'>Salaried</div>
                                        <div className='grey-round'>23 years – 58 years</div>
                                        <div>Salaried individuals with minimum monthly income Rs.30,000. (Resident India
                                            Citizen only)
                                        </div>
                                        <div className='grey-round'>2 Years</div>
                                        <div>Owned or Rented (Leave and License Agreement)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-10 text-center p-b-30">
                                <p className="heading6 p-t-10 p-b-30">**The minimum salary requirement will differ
                                    depending on the profile (Type of employer, Age, Dependent, etc.) of the customer.
                                    <br/>
                                    Note:
                                    <br/>
                                    * Conditions apply.</p>
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
