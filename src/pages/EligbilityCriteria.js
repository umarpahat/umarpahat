import React from "react";
import {Link} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import MetaTags from "react-meta-tags";
import {S3_IMAGES_URL} from "../constant";

const EligbilityCriteria = (props) => {

    return (
        <>
            <MetaTags>
                <title>Personal loan Eligibility criteria & Documents– PayMe India</title>
                <meta name="description" content="Personal Loan Eligibility Online: Check your personal loan eligibility before applying – age, minimum salary, and work experience, etc. Know your eligibility and documents required for personal loan." />
                <meta name="keyword" content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online" />
                <meta property="og:title" content="Personal loan Eligibility criteria & Documents– PayMe India" />
            </MetaTags>
            <Header {...props} />
            <div className="content">
                <div className="banner">
                    <div className="container">
                        <div className="row align-items-center ">
                            <div className="col-sm-12 col-md-5">
                                <h1 className="heading1">Check Your Eligibility for loan</h1>
                                <h4 className="heading4 ">Personal loan  Eligibility Criteria and requirements.</h4>
                                <p className="heading6 p-t-10">With PayMe India you need to meet only some basic requirements to avail of a loan up to INR 2,00,000 instantly</p>
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
                                         src={S3_IMAGES_URL+'/svg/criteria-pic.svg'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gray-bg">
                    <div className="container p-t-50">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-sm-12 col-md-10">
                                <p className="heading6 p-t-10 text-center">Check your personal loan eligibility before applying for a loan to avoid any hassle. Your loan eligibility depends on various factors, including your age, monthly income, and type of employment.</p>
                            </div>
                            <div className="col-sm-12 col-md-10">
                                <div className='border-round '>
                                    <div className='left_section text-center'>
                                        <div className='head18'>Criteria*</div>
                                        <div className='grey-round'>Age</div>
                                        <div>Net Salary </div>
                                        <div className='grey-round'>Citizenship</div>
                                        <div>Kyc</div>
                                    </div>
                                    <div className='right_section'>
                                        <div className='head18'>Salaried</div>
                                        <div className='grey-round'> 21-58 years</div>
                                        <div>Salaried individuals with minimum monthly income Rs.15,000.</div>
                                        <div className='grey-round'>Indian Resident Citizen only</div>
                                        <div> Must have all required KYC documents</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-10 text-center p-b-30">
                                <p className="heading6 p-t-10 p-b-30">If you meet the following requirements, getting a loan approval will be easy</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};
export default EligbilityCriteria;
