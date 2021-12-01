import React from "react";
import {Link} from "react-router-dom";
import {Dialog} from "@reach/dialog";
import googlePay from "../images/svg/google-play.svg";
import appStore from "../images/svg/app-store.svg";
import cibilScoreIcon from "../images/svg/cibil-score-icon.svg";
export const PopularCity = (props) => {
    const [showDialogCity, setShowDialogCity] = React.useState(false);
    const openCity = () => setShowDialogCity(true);
    const closeCity = () => setShowDialogCity(false);

    return (
        <div className="container-fluid white-bg popularCity">
            <div className="container">
                <div className="col-sm-12 col-md-12 reg-second-heading text-center ">
                    <h4>Popular Cities</h4>
                </div>
                    <div className="row align-items-center p-b-30">
                        <Link to={null} onClick={openCity}> Personal Loan in Bangalore </Link> | <Link to={{pathname: 'city'}} target={"_blank"}> Personal Loan in Hyderabad</Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Pune </Link> | <Link to={{pathname: 'city'}} target={"_blank"}> Personal Loan in Mumbai</Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Delhi</Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Chennai</Link>
                       <Link to={{pathname: 'city'}} target={"_blank"}> Personal Loan in Kolkata</Link> | <Link to={{pathname: 'city'}} target={"_blank"}> Personal Loan in Noida</Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Vadodara </Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Coimbatore </Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Bhopal </Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Jaipur </Link>
                        <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Navi Mumbai </Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Lucknow </Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Ahmedabad</Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Bhubaneswar</Link> | <Link to={{pathname: 'city'}} target={"_blank"}>Personal Loan in Nashik </Link>

                    </div>
            </div>
            <Dialog isOpen={showDialogCity} className='dialog-box' onDismiss={closeCity}>
                <button className="close-button" onClick={closeCity}>
                    <span aria-hidden>×</span>
                </button>


                <div className="">
                    <div className="row">
                        <div className="col col-md-6 ">
                            <div className="cardImg">
                                <h4>Looking for a Personal Loan in Delhi?</h4>
                                <p>PayMe India’s Instant Personal Loans in Delhi come with a hassle free online
                                    process and can be availed in 24 hours</p>
                                <strong>Get Payme App Now</strong>
                                <div className="tabularLess p-b-30">
                                    <div>
                                        <Link
                                            to={{pathname: 'https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia'}}
                                            target={"_blank"}>
                                            <img
                                                className="img_google"
                                                src={googlePay}
                                                alt="Pay Me India"
                                            />
                                        </Link>
                                    </div>
                                    <div>
                                        <img
                                            className="img_google"
                                            src={appStore}
                                            alt="Pay Me India"
                                        />
                                    </div>
                                </div>
                                <div className="footer-align-stripe">
                                    <div>
                                        <img src={cibilScoreIcon} alt="icon" className="img-fluid"/>
                                    </div>
                                    <div>
                                        <h4>
                                            Get Instant Loan and Unlimited Offers
                                        </h4>
                                    </div>
                                    <div>
                                        <Link to="/get-cibil-report" className="green-btn-stripe">
                                            Check Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-6 ">
                            <div className="rightSection ">
                                <h4 className='text-center'>Get Loan In Delhi</h4>
                                <p className='text-center'>Quibusdam nobis est voluptatibus voluptatem. Deleniti sunt
                                    aliquam. Totam quae eos et aut rerum maxime. Provident id non.</p>
                                <form id="form" name="form">
                                    <div className="form-group ms-input-group">
                                        <label className="form-label pb-2">
                                            Full Name
                                        </label>
                                        <input
                                            name="fname"
                                            type="text"
                                            className="form-control input-field"
                                            placeholder="Enter Full Name"/>
                                    </div>
                                    <div className="form-group ms-input-group">
                                        <label className="form-label pb-2">
                                            Email address
                                        </label>
                                        <input
                                            name="email"
                                            type="text"
                                            className="form-control input-field"
                                            placeholder="Enter Email address"/>
                                    </div>
                                    <div className="form-group ms-input-group">
                                        <label className="form-label pb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            name="phone"
                                            type="number"
                                            maxLength="10"
                                            pattern="[0-9]+"
                                            className="form-control input-field"
                                            placeholder="Enter your Phone Number"/>
                                    </div>
                                    <div className="form-group ms-input-group">
                                        <label className="form-label pb-2">
                                            Enter Your reason
                                        </label>
                                        <textarea
                                            name="reason"
                                            rows='3'
                                            className="form-control input-field"
                                            placeholder="Type your message"/>
                                    </div>
                                    <Link to={{pathname: ''}} className="btnLarge m-t-40" style={{
                                        display: "block",
                                        cursor: "pointer",
                                        color: "#fff",
                                    }}>

                                        Submit
                                    </Link>

                                </form>
                                <div className='p-t-20 text-center' style={{
                                    fontWeight: "bold",
                                }}>Any Doubt?  <Link to={{pathname: ''}} style={{
                                    cursor: "pointer",
                                    color: "#02C650",
                                }}>

                                    Leave a message
                                </Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};
