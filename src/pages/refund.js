import React, {useState, useEffect} from "react";
import {hitAppUseCase} from '../store/modules/userDetails/actions';
import {connect} from 'react-redux'
import {Container} from "react-bootstrap";
import Loader from '../component/Loader'
import "./ApplyNowButton/Applybtnallcomponent.css";
import Footer from "./Footer";
import Header from "./Header";
import '../../src/home.css';
import {Link} from "react-router-dom";
import $ from "jquery";
import logo from "../images/logo.png";
import vision from "../images/vision.png";
import team from "../images/team.png";
import thumbnail from "../images/thumbup.png";
import heart from "../images/heart.png";
import people from "../images/people.png";
import about from "../images/about-us.png";


const Refund = (props) => {

    let [loader, setloader] = useState(false);


    return (
        <>

            <Header {...props}/>
            

            <div className="services">
                <div className="container">
                    <div className="row align-items-center p-t-40 p-b-30">
                        <div className="col-lg-12  col-md-12  col-sm-12 col-xs-12 textAlign paragraphText">
                            <h5 className="heading5 p-t-30">Refund Policy:</h5>
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
            <div className="services">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-md-8 text-center p-t-30 p-b-30">
                            <h4 className="heading4">Contact Us</h4>
                            <p>Please contact us at <a href="mailto: admin@paymeindia.in">admin@paymeindia.in</a></p>

                        </div>
                    </div>

                </div>
            </div>
        
            <Footer cssname="fixed-bottom" />
        </>
    )
};
const mapStateToProps = state => {
    return {}
}


const dispatchToProps = {hitAppUseCase};

export default connect(mapStateToProps, dispatchToProps)(Refund)
