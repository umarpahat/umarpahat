import React, {useState, useEffect} from "react";
import {hitAppUseCase} from '../store/modules/userDetails/actions';
import {connect} from 'react-redux'
import {Container} from "react-bootstrap";
import Loader from '../component/Loader'
import "./ApplyNowButton/Applybtnallcomponent.css";
import Header from "./Header";
import '../../src/home.css';

import MetaTags from "react-meta-tags";
import mailBox from "../images/svg/mail-box.svg";
import  termsCondition from "../images/svg/terms-and-condition.svg";


const Refund = (props) => {

    let [loader, setloader] = useState(false);


    return (
        <>
            <Header {...props}/>
            <MetaTags>
                <title>Refund Policy - PayMeIndia</title>
                <meta name="description" content="Refund Policy - The following statement is about information regarding refund - PayMeIndia." />
                <meta name="keyword" content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online" />
                <meta property="og:title" content="Refund Policy - PayMeIndia" />
            </MetaTags>
            <div className='content'>
            <div className="services">
                <div className="container">
                    <div className="row align-items-center p-b-30">  <div className="col col-md-12 reg-second-heading">
                        <h1 className='heading1 blue-color'>Refund Policy</h1>
                    </div>
                        <div className="row">
                            <div className="col col-md-5 reg-second-heading">
                                <img className="img-fluid" src={termsCondition} alt="Icons"/>
                            </div>
                            <div className="col col-md-7">
                                <h5 className='blue-color h3 p-t-20'>Refund:</h5>
                                <p>At Payme India we value our customers and are committed to providing best services. Refund process will only be initiated by PayMe India in following conditions:</p>
                                <p>We will not pass your details on to any third party.</p>
                                <p>(i)If repayment of the loan has been done by the borrower twice by any means.</p>
                                <p>(ii)Any extra payment has been received by Payme India over and above the repayment value in any case.</p>
                                <p>(iii)Repayment has been done mistakenly by the borrower unintentionally before his/her the due date of loan repayment.</p>
                                <p>If for some unforeseen reason, the client is not satisfied with our services, they may call us to seek direction on future calls. We will give our best effort to increase the satisfaction levels in such cases. We strongly recommend that before making a payment, our visitors and potential clients should read the refund policy. If the customer is eligible for the refund then the refund amount would be credited in the respective bank account within 7 working days.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
                <div className="contactBox p-t-80">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-9 text-center p-t-30 p-b-30 d-flex contactLine">
                                <div className='mailPic'>
                                    <img className="img-fluid" src={mailBox} alt="Mail"/>
                                </div>
                                <div className='contact'>
                                    <h4 className="heading4">Contact Us</h4>
                                    <p>Please contact us at<br/>
                                        <a href="mailto: admin@paymeindia.in" target='_blank'>admin@paymeindia.in</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
};
const mapStateToProps = state => {
    return {}
}


const dispatchToProps = {hitAppUseCase};

export default connect(mapStateToProps, dispatchToProps)(Refund)
