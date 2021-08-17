import React, {useState, useEffect} from "react";
import {hitAppUseCase} from "../store/modules/userDetails/actions";
import {connect} from "react-redux";
import {Container} from "react-bootstrap";
import Loader from "../component/Loader";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Footer from "./Footer";
import Header from "./Header";
import "../../src/home.css";
import saarthi from "../images/sarthi-logo.png";

const SocialInitiative = (props) => {
    let [loader, setloader] = useState(false);

    return (
        <>
            <Header {...props} />
            <div className='content'>
                <div className="services">
                    <div className="container">
                        <div className="col col-md-12 reg-second-heading">
                            <h4>Social Initiative</h4>
                        </div>
                        <div className="row align-items-center p-b-30">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                <img
                                    className="img-fluid maxLimitWidth"
                                    alt="Saarthi"
                                    src={saarthi}
                                />
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  initiative" style={{textAlign:"justify"}}>
                                <h4>Initiative to provide sustainable job opportunities to families who lost their breadwinner to Covid-19</h4>
                                <p className='p-t-15'>The COVID-19 pandemic left many families life void with grief. Each casualty due to this pandemic is a tragedy that is irreplaceable. The fatality rate in India used to almost peak and cross 4,000 daily.</p>
                                <p className='p-t-15'>For Many shattered families, these numbers represent working members, whose absence left them financially bereft. Many of these families were already struggling to make their financial ends meet.</p>
                                <p className='p-t-15'>Amidst this, Noida-based fintech company PayMe India led by Mr. Mahesh Shukla is launching an initiative to ease the pain of the Covid-19 affected families. The initiative is known as ‘Saarthi’ will help families, who lost their earning members in the family to Coronavirus disease. This initiative focuses to mitigate financial difficulties that may be faced by them.</p>
                                <p className='p-t-15'>After losing breadwinning loved ones, the roles and responsibilities of many families changed overnight.  Short term relief measures which are provided by the government and organizations can provide temporary comfort to the family but is not at all close to provide a long-term solution. Without employable training or a livelihood job opportunity, the family will not be able to provide financial help to their families in the long run. But through this initiative, one family member from the grieving family will be provided training to find a job.</p>
                                <p className='p-t-15 p-b-30'> Under project Saarthi, PayMe India will focus on Family strengthening, in which Covid affected families, who are struggling to meet their financial needs after the departure of their primary or only earning members to Covid-19 will be trained to provide employment optionss.</p>
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

export default connect(mapStateToProps, dispatchToProps)(SocialInitiative);
