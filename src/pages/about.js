import React, {useState} from "react";
import {hitAppUseCase} from "../store/modules/userDetails/actions";
import {connect} from "react-redux";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Header from "./Header";
import "../../src/home.css";
import vision from "../images/svg/rocket-up.svg";
import team from "../images/svg/photo.svg";
import teamAll from "../images/team.jpg";
import mailBox from "../images/svg/mail-box.svg";
import thumbnail from "../images/svg/thumb.svg";
import people from "../images/svg/will-stand.svg";
import about from "../images/svg/about-us.gif";
import MetaTags from "react-meta-tags";
import goldStarIcon from "../images/svg/star.svg";

const About = (props) => {
    let [loader, setloader] = useState(false);

    return (
        <>
            <Header {...props} />
            <MetaTags>
                <title>About Us - PayMeIndia</title>
                <meta name="description" content="PayMeIndia is an innovative FinTech organization that offers advance salary
              loans, instant flexi loans, short term cash loans to the salaried corporate employees at
        lowest interest rates. These loans are designed to meet all your short term financial needs such
        as medical emergency or any other personal needs."/>
                <meta name="keyword"
                      content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
                <meta property="og:title" content="About Us - PayMeIndia"/>
            </MetaTags>
            <div className='content'>
                <div className='aboutUs'>
                    <div className="container">
                        <div className="col col-md-12 reg-second-heading">
                            <h1 className='heading1 blue-color'>Who we are</h1>
                            <span
                                className="reg-second-subheading">PayMe India is an innovative FinTech organization</span>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                                <img
                                    className="img-fluid"
                                    alt="About us"
                                    src={about}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services">
                    <div className="container">
                        <div className="row p-t-30 p-b-30">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <h3 className="heading3 relative blue-color">
                                    <span className="circle-small-shape"></span> About Us
                                </h3>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8 textAlign">
                                <p className='p-t-10'>PayMe India is an RBI registered NBFC, founded in 2016, to eliminate the 
difficulty of getting financial help by enabling frictionless transactions & 
transforming the way people take loans. We are striving to provide advanced salary</p>
                                <p className='p-t-30'>loans to bourgeois or any salaried employee who faces financial constraints. Our 
lending model empowers customers to borrow easy, fast, safe & affordable 
personal loans. Our passionate team of 150 members aims to enrich you with a 
platform where getting personal loans are instant and hassle-free.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mission">
                    <div className="container p-b-30 p-t-40">
                        <div className="row align-items-center pb-3">
                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 textAlign">
                                <h4 className="heading4 blue-color">Our Mission and Vision</h4>
                                <p className='p-t-10'>PayMe India wants to accelerate the digital transformation of the financial industry by providing loans from Rs500 to Rs 2,00,000. Our vision is to be the leader of a fintech hub by utilizing the latest financial technologies to build future-proof PayMe India pillars, carving a vibrant platform to facilitate acceleration in lending instant loans.</p>
                                <p className='p-t-30'>Our Mission is to bring effectiveness, efficiency, & excellence to our lending process by outperforming ourselves every day by leveraging our customers with a unique platform where they can get quick loans. And our unique platform helps our users in their financial journey by being present in every aspect of their life with our best-in-class service. We promise to ensure you complete privacy & customer safety through our modern infrastructure & secure online system.</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 imgLarge textAlign">
                                <img className="img-fluid" alt="CIBIL" src={vision}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="promise">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-sm-12 col-md-9 white-color text-center p-t-40 p-b-30">
                                <h4 className='heading4'>Our Promise</h4>
                                <p className='p-b-30  p-t-30 white-color relative'>PayMe India promises to stay with you in every step by offering you a truly modern solution for an instant personal loan. With the paperless fully digitalized process, with instant processing time, attractive interest rate, and without repayment charges. The only thing we ask in return is your trust, & believe us your trust in our service is our biggest asset. Don't believe in words 1st try & then trust. So next time when you are facing a financial crunch either in rent payment, utility bills, or looking for an impromptu vacation or season sale, PayMe India is there for you in every step as your financial backup.</p>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="promise-mission">
                    <div className="container">
                        <div className="row justify-content-md-center ">

                            <div className="col-lg-7 col-md-7 col-sm-12">
                                <div className="row justify-content-md-center boxes">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="box-align justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={thumbnail} alt="PayMe India"/>
                                            </div>
                                            <h3>Will never say no</h3>
                                            <p>Fast hassle-free instant loan disbursal.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div
                                            className="box-align justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img src={goldStarIcon} alt='Star' className="img-fluid"/>
                                                <img src={goldStarIcon} alt='Star' className="img-fluid"/>
                                                <img src={goldStarIcon} alt='Star' className="img-fluid"/>
                                                <img src={goldStarIcon} alt='Star' className="img-fluid"/>
                                                <img src={goldStarIcon} alt='Star' className="img-fluid"/>
                                            </div>
                                            <h3>Will always trust</h3>
                                            <p>Reliable and secured lending process.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="box-align justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={people} alt="PayMe India"/>
                                            </div>
                                            <h3>Will stand by you</h3>
                                            <p>We are available to assist you, Always!.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team-section">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col col-md-8 text-center p-t-40">
                                <h4 className="heading4 blue-color">Our Team</h4>
                                <p className='p-t-10'>Team PayMe India is a set of customer-oriented personalities, who find their passion in helping out users to get over their financial crunches. Our team of hard-working people strives to provide the best experience to our customers with their loan disbursal process.</p>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col col-md-12 text-center p-t-40">
                                <img className="img-fluid" src={teamAll} alt="Team"/>
                            </div>
                        </div>
                 {/*       <div className="row justify-content-md-center p-t-40 text-center p-b-30">
                            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                                <div className='team-pic'>
                                    <img className="img-fluid" src={team} alt="Team"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                                <div className='team-pic'>
                                    <img className="img-fluid" src={team} alt="Team"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                                <div className='team-pic'>
                                    <img className="img-fluid" src={team} alt="Team"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                                <div className='team-pic'>
                                    <img className="img-fluid" src={team} alt="Team"/>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center text-center p-b-30">
                            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                                <div className='team-pic'>
                                    <img className="img-fluid" src={team} alt="Team"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                                <div className='team-pic'>
                                    <img className="img-fluid" src={team} alt="Team"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                                <div className='team-pic'>
                                    <img className="img-fluid" src={team} alt="Team"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                                <div className='team-pic'>
                                    <img className="img-fluid" src={team} alt="Team"/>
                                </div>
                            </div>
                        </div>*/}
                    </div>
                </div>
                <div className="contactBox">
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
    );
};
const mapStateToProps = (state) => {
    return {};
};

const dispatchToProps = {hitAppUseCase};

export default connect(mapStateToProps, dispatchToProps)(About);
