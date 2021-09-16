import React, {useState, useEffect} from "react";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";
import {
    hitAllUserData,
    hitEkyc,
    hitAppUseCase
} from "../../store/modules/userDetails/actions";
import {bindActionCreators} from "redux";
import {getEkyc} from "../../store/modules/userDetails/api";
import axios from "axios";
import {API_ENDPOINT} from "../../constant";
import Header from "../Header";
import Footer from "../Footer";
import Cookies from 'universal-cookie';
import tip from "../../images/animated/kyc-option.gif";
import kycIcon from "../../images/svg/complete-kyc.svg";
import bankDetails from "../../images/svg/bank-details.svg";
import professionalDetails from "../../images/svg/professional-details.svg";


const cookies = new Cookies()


const StepManual = (props) => {


    const token = cookies.get('token')
    console.log("pramodsprops", props);

    const [webview, setWebview] = useState();
    const [ekyc, setEkyc] = useState();
    const [adhaar, setAdhaar] = useState();
    const [refresh, setRefresh] = useState(true);
    const [status, setStatus] = useState(true)

    function refreshhi() {
        props.hitAllUserData({token: token});

    }

    if (refresh) {
        refreshhi();
        setRefresh(false)

    }


    console.log("after ekyc", ekyc);


    useEffect(() => {
        let url = `${API_ENDPOINT}/api/webview_url/payme_ekyc/`;
        let config = {
            headers: {
                Authorization: "Token " + token,
            },
        };
        axios
            .get(url, config)
            .then((res) => {
                setWebview(res.data.url);

            })

            .catch((err) => {
                console.log(err);
                if (err.response.status === 401) {
                    cookies.remove('token', {path: '/'})
                }
            });
    }, []);

    var time = setInterval(function () {
        if (status) {
            ekycCall();
        }
    }, 3000);


    const ekycCall = () => {

        let url2 = `${API_ENDPOINT}/api/get_document_status/`;
        let config = {
            headers: {
                Authorization: "Token " + token,
            },
        };
        axios
            .get(url2, config)
            .then((response) => {
                setAdhaar(response.data.data[0].adhar_card_verified)
                setEkyc(response.data.data[0].kyc_verified);
            })
            .catch((err) => {
                console.log(err);
            });

    }
    var time = setInterval(function () {
        if (status) {
            ekycCall();
        }
    }, 3000);

    if (setEkyc === "VERIFIED") {
        clearTimeout(time);
    }

    //  setEkyc(props.ekycData.userdocumentsmodel?.address_proof_verified);
    //  setAdhaar(props.ekycData.userdocumentsmodel?.kyc_verified)


    const handleBankDetails = () => {


        if (props.useCase === "apply-loan") {

            if (!props.user.userbankdetail) {
                clearTimeout();
                props.history.push({
                    pathname: "/bank-details-payme",
                });

            } else if (
                props.user.userbankdetail.verified === "VERIFIED" ||
                props.user.userbankdetail.verified === "PENDING_VERIFICATION"
            ) {
                if (

                    (props.user.userdocumentsmodel.salary_slip_verified === "VERIFIED" ||
                        props.user.userdocumentsmodel.salary_slip_verified ===
                        "PENDING_VERIFICATION" || props.user.professionaldetails.verified === "VERIFIED" || props.user.professionaldetails.verified === "PENDING_VERIFICATION")
                ) {
                    clearTimeout();
                    props.history.push({pathname: "/pending-approval"});

                } else {
                    clearTimeout();
                    props.history.push({pathname: "/professional-details-payme"});

                }
            }
        } else if (props.useCase === "pay-rent") {
            props.history.push({pathname: "/payrent-other-details"});
        } else {
            props.history.push({pathname: "/"});
        }
    };

    const handleWebView = () => {
        window.open(
            `${webview}`,
            "popup",
            "width=600,height=650,left=600,top=150,scrollbars=no,resizable=no"
        );

        return false;


    };
    return (
        <>
            <Header {...props}/>
            <div className='content darkBg'>
                <div className="navbar navbar-default navbar-fixed-top" id="topnavbar">
                    <div className="slider-right-block">
                        {ekyc === "VERIFIED" ? (

                            <Container>
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                                        <br/>
                                        <a className='back-arrow' onClick={() => {
                                            props.history.goBack()
                                        }}>Back</a>
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-12 text-center">

                                        <div className="contenertQuicklone">
                                            <div className="slider-right-block">
                                                <div className="home-contact-form">
                                                    <h4 className="form-heading formheadding">Complete each step one by
                                                        one for your manual KYC</h4>

                                                    <div className='step'>
                                                        <div className='step-step'>
                                                            <div className='img-wrapper'>
                                                                <img className='img-fluid' src={kycIcon} alt=''/>
                                                            </div>
                                                            <div className='img-text'>
                                                                <h6>Complete KYC</h6>
                                                                <p>Provide your Aadhaar and Pan details to get them verified.</p>
                                                            </div>
                                                            <div className='wrapper-button'>
                                                                <a className="green-button" href="">Continue</a>
                                                            </div>

                                                        </div>
                                                        <div className='step-step'>
                                                            <div className='img-wrapper'>
                                                                <img className='img-fluid' src={bankDetails} alt=''/>
                                                            </div>
                                                            <div className='img-text'>
                                                                <h6>Bank Details</h6>
                                                                <p>Provide your bank account details.</p>
                                                            </div>
                                                            <div className='wrapper-button'>
                                                                <a className="disbled-button" href="">Continue</a>
                                                            </div>

                                                        </div>
                                                        <div className='step-step'>
                                                            <div className='img-wrapper'>
                                                                <img className='img-fluid' src={professionalDetails} alt=''/>
                                                            </div>
                                                            <div className='img-text'>
                                                                <h6>Professional Details</h6>
                                                                <p>Provide your Salary slip and office details.</p>
                                                            </div>
                                                            <div className='wrapper-button'>
                                                                <a className="disbled-button" href="">Continue</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                                        <div className='height100'>
                                            <div>
                                                <div className='circle-half'>
                                                    <div className='full-circle'>
                                                        <img src={tip} className='img-fluid' alt='Tips'/>
                                                    </div>
                                                    <div className='full-text text-left'>
                                                        <h5>Tips</h5>
                                                        <p>In expedita et occaecati ullam a cumque maiores perspiciatis.
                                                            Non labore exercitationem
                                                            rerum nulla ea veniam facilis et. </p>
                                                    </div>
                                                </div>
                                                <div className='circle-half'>
                                                    <p className='p-a-10'>In expedita et occaecati ullam a cumque
                                                        maiores perspiciatis. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        ) : adhaar === "VERIFIED" ? (
                            <Container>
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                                        <br/>
                                        <a className='back-arrow' onClick={() => {
                                            props.history.goBack()
                                        }}>Back</a>
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                                        <div className="contenertQuicklone">
                                            <div className="slider-right-block">
                                                <div className="home-contact-form">
                                                    <h4 className="form-heading formheadding">Complete each step one by
                                                        one for your manual KYC</h4>

                                                    <div className='step'>
                                                        <div className='step-step'>
                                                            <div className='img-wrapper'>
                                                                <img className='img-fluid' src={kycIcon} alt=''/>
                                                            </div>
                                                            <div className='img-text'>
                                                                <h6>Complete KYC</h6>
                                                                <p>Provide your Aadhaar and Pan details to get them verified.</p>
                                                            </div>
                                                            <div className='wrapper-button'>
                                                                <a className="green-button" href="">Continue</a>
                                                            </div>

                                                        </div>
                                                        <div className='step-step'>
                                                            <div className='img-wrapper'>
                                                                <img className='img-fluid' src={bankDetails} alt=''/>
                                                            </div>
                                                            <div className='img-text'>
                                                                <h6>Bank Details</h6>
                                                                <p>Provide your bank account details.</p>
                                                            </div>
                                                            <div className='wrapper-button'>
                                                                <a className="disbled-button" href="">Continue</a>
                                                            </div>

                                                        </div>
                                                        <div className='step-step'>
                                                            <div className='img-wrapper'>
                                                                <img className='img-fluid' src={professionalDetails} alt=''/>
                                                            </div>
                                                            <div className='img-text'>
                                                                <h6>Professional Details</h6>
                                                                <p>Provide your Salary slip and office details.</p>
                                                            </div>
                                                            <div className='wrapper-button'>
                                                                <a className="disbled-button" href="">Continue</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                                        <div className='height100'>
                                            <div>
                                                <div className='circle-half'>
                                                    <div className='full-circle'>
                                                        <img src={tip} className='img-fluid' alt='Tips'/>
                                                    </div>
                                                    <div className='full-text text-left'>
                                                        <h5>Tips</h5>
                                                        <p>In expedita et occaecati ullam a cumque maiores perspiciatis.
                                                            Non labore exercitationem
                                                            rerum nulla ea veniam facilis et. </p>
                                                    </div>
                                                </div>
                                                <div className='circle-half'>
                                                    <p className='p-a-10'>In expedita et occaecati ullam a cumque
                                                        maiores perspiciatis. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Container>
                        ) : (
                            <Container>
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                                        <br/>
                                        <a className='back-arrow' onClick={() => {
                                            props.history.goBack()
                                        }}>Back</a>
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                                        <div className="contenertQuicklone">
                                            <div className="slider-right-block">
                                                <div className="home-contact-form">
                                                    <h4 className="form-heading formheadding">Complete each step one by
                                                        one for your manual KYC</h4>

                                                    <div className='step'>
                                                    <div className='step-step'>
                                                        <div className='img-wrapper'>
                                                            <img className='img-fluid' src={kycIcon} alt=''/>
                                                        </div>
                                                        <div className='img-text'>
                                                            <h6>Complete KYC</h6>
                                                            <p>Provide your Aadhaar and Pan details to get them verified.</p>
                                                        </div>
                                                        <div className='wrapper-button'>
                                                            <a className="green-button" href="">Continue</a>
                                                        </div>

                                                    </div>
                                                    <div className='step-step'>
                                                        <div className='img-wrapper'>
                                                            <img className='img-fluid' src={bankDetails} alt=''/>
                                                        </div>
                                                        <div className='img-text'>
                                                            <h6>Bank Details</h6>
                                                            <p>Provide your bank account details.</p>
                                                        </div>
                                                        <div className='wrapper-button'>
                                                            <a className="disbled-button" href="">Continue</a>
                                                        </div>

                                                    </div>
                                                    <div className='step-step'>
                                                        <div className='img-wrapper'>
                                                            <img className='img-fluid' src={professionalDetails} alt=''/>
                                                        </div>
                                                        <div className='img-text'>
                                                            <h6>Professional Details</h6>
                                                            <p>Provide your Salary slip and office details.</p>
                                                        </div>
                                                        <div className='wrapper-button'>
                                                            <a className="disbled-button" href="">Continue</a>
                                                        </div>

                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                                        <div className='height100'>
                                            <div>
                                                <div className='circle-half'>
                                                    <div className='full-circle'>
                                                        <img src={tip} className='img-fluid' alt='Tips'/>
                                                    </div>
                                                    <div className='full-text text-left'>
                                                        <h5>Tips</h5>
                                                        <p>In expedita et occaecati ullam a cumque maiores perspiciatis.
                                                            Non labore exercitationem rerum nulla ea veniam facilis
                                                            et. </p>
                                                    </div>
                                                </div>
                                                <div className='circle-half'>
                                                    <p className='p-a-10'>In expedita et occaecati ullam a cumque
                                                        maiores perspiciatis. </p>
                                                </div>
                                                <div className='circle-half'>
                                                    <p className='p-a-10'>In expedita et occaecati ullam a cumque
                                                        maiores perspiciatis. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        )}
                    </div>
                </div>
                <div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        token: state.authDetails.token,
        phoneNumber: state.authDetails.phone_number,
        user: state.user.userData,
        useCase: state.user.useCase,
        ekycData: state.ekycData,


    };
};

const dispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            // hitLogin,
            hitAllUserData,
            hitEkyc,
            hitAppUseCase,
            // hitForgotMpin,
        },
        dispatch
    );
};

export default connect(mapStateToProps, dispatchToProps)(StepManual);
