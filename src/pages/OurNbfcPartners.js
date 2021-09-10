import React, {useState, useEffect} from "react";
import {hitAppUseCase} from "../store/modules/userDetails/actions";
import {connect} from "react-redux";
import {Accordion, Card, Container} from "react-bootstrap";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Footer from "./Footer";
import Header from "./Header";
import "../../src/home.css";

import {Link} from "react-router-dom";
import $ from "jquery";
import arvog from "../images/arvog.jpg";
import money2me from "../images/money2me.jpg";
import paymeindia from "../images/paymeindia.png";
import MetaTags from "react-meta-tags";
import mailBox from "../images/svg/mail-box.svg";

const OurNbfcPartners = (props) => {
    let [loader, setloader] = useState(false);

    return (
        <>
            <Header {...props} />
            <MetaTags>
                <title>NBFC Partners - PayMeIndia</title>
                <meta name="description" content="No more financial crunch. PayMeIndia gives you the amount of loan you require,
		anytime-anywhere. Fill the application to apply now!"/>
                <meta name="keyword"
                      content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
                <meta property="og:title" content="NBFC Partners - PayMeIndia"/>
            </MetaTags>
            <div className='content'>
                <div className="partners">
                    <div className="container">
                        <div className="col col-md-12 reg-second-heading ">
                            <h1 className='heading1 blue-color p-t-80'>Our NBFC Partners</h1>
                        </div>
                        <div className="row p-b-30 nbfc_img row justify-content-md-center p-t-80">

                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                <img className='img-fluid' src={paymeindia} alt="paymeindia"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                <img className='img-fluid' src={money2me} alt="paymeindia"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                <img className='img-fluid' src={arvog} alt="paymeindia"/>
                            </div>

                        </div>
                        <div className="row p-b-30 nbfc_img row justify-content-md-center p-t-80">

                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                <h4 className='heading4'>About Our Partners</h4>
                                <p>Temporibus nemo ipsum eum dolore pariatur est
                                    sint. Quis in esse totam ullam dignissimos alias cumque in aliquam. Omnis reiciendis
                                    doloribus magnam. Et et et quia sed. Dicta velit consequatur omnis eligendi harum
                                    porro. Veritatis harum ullam debitis at et quo. Praesentium est omnis fugit.
                                    Expedita velit aperiam consequuntur illum doloremque.
                                </p>
                                <p className='  p-t-20'>Odit qui dolorem laudantium. Dignissimos
                                    molestiae veritatis atque perferendis natus eaque nisi. Similique sed laborum aut
                                    eaque
                                    debitis voluptas et. Temporibus nemo ipsum eum dolore pariatur est sint. Quis in
                                    esse
                                    totam ullam dignissimos alias cumque in aliquam. Omnis reiciendis doloribus magnam.
                                    Et
                                    et et quia sed. Dicta velit consequatur omnis eligendi harum porro. Veritatis harum
                                    ullam debitis at et quo. Praesentium est omnis fugit. Expedita velit aperiam
                                    consequuntur illum doloremque.
                                    Odit qui dolorem laudantium. Dignissimos molestiae veritatis atque perferendis natus
                                    eaque nisi. Similique sed laborum aut eaque debitis voluptas et.
                                </p>
                                <p className=' p-b-30 p-t-20'> Temporibus nemo ipsum eum dolore pariatur est
                                    sint. Quis in esse totam ullam dignissimos alias cumque in aliquam. Omnis reiciendis
                                    doloribus magnam. Et et et quia sed. Dicta velit consequatur omnis eligendi harum
                                    porro.
                                    Veritatis harum ullam debitis at et quo. Praesentium est omnis fugit. Expedita velit
                                    aperiam consequuntur illum doloremque.
                                    Odit qui dolorem laudantium. Dignissimos molestiae veritatis atque perferendis natus
                                    eaque nisi. Similique sed laborum aut eaque debitis voluptas et.</p>
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
            <Footer/>
        </>
    );
};
const mapStateToProps = (state) => {
    return {};
};

const dispatchToProps = {hitAppUseCase};

export default connect(mapStateToProps, dispatchToProps)(OurNbfcPartners);
