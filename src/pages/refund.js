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
import Footer from "./Footer";


const Refund = (props) => {

    let [loader, setloader] = useState(false);


    return (
        <>
            <MetaTags>
                <title>Refund Policy – PayMe India</title>
                <meta name="description" content="Refund Policy – PayMe India" />
                <meta name="keyword" content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online" />
                <meta property="og:title" content="Refund Policy – PayMe India" />
            </MetaTags>
            <Header {...props}/>
            <div className='content'>
            <div className="services">
                <div className="container">
                    <div className="row align-items-center p-b-30">  <div className="col col-md-12 reg-second-heading">
                        <h1 className='heading1 blue-color'>Refund Policy</h1>
                    </div>
                    </div>
                        <div className="row">
                            <div className="col col-md-5 reg-second-heading hideMobile">
                                <img className="img-fluid" src={termsCondition} alt="Icons"/>
                            </div>
                            <div className="col col-md-7">
                                <h5 className='blue-color h3 p-t-20'>Refund:</h5>
                                <p>At PayMe India we value our customers and are committed to providing best services. Refund process will only be initiated by PayMe India in following conditions:</p>
                                <p>We will not pass your details on to any third party.</p>
                                <p>(i)If repayment of the loan has been done by the borrower twice by any means.</p>
                                <p>(ii)Any extra payment has been received by PayMe India over and above the repayment value in any case.</p>
                                <p>(iii)Repayment has been done mistakenly by the borrower unintentionally before his/her the due date of loan repayment.</p>
                                <p>If for some unforeseen reason, the client is not satisfied with our services, they may call us to seek direction on future calls. We will give our best effort to increase the satisfaction levels in such cases. We strongly recommend that before making a payment, our visitors and potential clients should read the refund policy. If the customer is eligible for the refund then the refund amount would be credited in the respective bank account within 7 working days.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};
const mapStateToProps = state => {
    return {}
}


const dispatchToProps = {hitAppUseCase};

export default connect(mapStateToProps, dispatchToProps)(Refund)
