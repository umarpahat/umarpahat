import React, {useState, useEffect} from "react";
import {hitAppUseCase} from "../store/modules/userDetails/actions";
import {connect} from "react-redux";
import {Container} from "react-bootstrap";
import Loader from "../component/Loader";
import "./ApplyNowButton/Applybtnallcomponent.css";

import Header from "./Header";
import "../../src/home.css";
import {Link} from "react-router-dom";
import career from "../images/svg/career.svg";
import craftsmanship from "../images/svg/craftman.svg";
import workspace from "../images/svg/workspace.svg";
import awesomness from "../images/svg/awsomework.svg";
import happyWork from "../images/svg/happy-work.svg";
import tea from "../images/svg/tea.svg";
import timeline from "../images/svg/timeline.svg";
import lead from "../images/svg/lead.svg";
import backend from "../images/svg/backend.svg";
import business from "../images/svg/business.svg";
import remote from "../images/svg/remote.svg";
import allowance from "../images/svg/health.svg";
import health from "../images/svg/health.svg";
import environment from "../images/svg/environment.svg";
import MetaTags from "react-meta-tags";

const Career = (props) => {
    let [loader, setloader] = useState(false);

    return (
        <>
            <Header {...props} />
            <MetaTags>
                <title>How We Works - PayMeIndia</title>
                <meta name="description" content="PayMeIndia offers a unique money lending program to the salaried
			employees. We take care of your urgent cash needs in just 4 easy steps. Apply online and your
			loans will get approved in an instant. Visit us now and get quick and fast solution for your
			financial crunch!"/>
                <meta property="og:title" content="How We Works - PayMeIndia"/>
            </MetaTags>
            <div className='content'>
                <div className="banner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-5 p-t-30">
                                <h1 className="heading1">Explore Career Opportunity</h1>
                                <p className="no-more-text p-t-15">At PayMe India, we visualize bringing financial freedom and independence to our valuable customers and liberating them from financial limitations. We allow them to manage credit with ease, whenever they need it. Every single member of our team of PayMe India aims to positively impact the lives of our consumers. If you are enthusiastic and passionate to make a difference in the lives of customers and look forward to working with the best in the company, Join us in our journey.</p>
                                <br/>
                                <br/>
                                {/* <a to='#'  className='green-btn' style={{color:"#fff"}}>
                                    Explore openings
                                </a> */}
                            </div>
                            <div className="col-sm-12 col-md-2 ">
                                &nbsp;
                            </div>
                            <div className="col-sm-12 col-md-5 m-t-40">
                                <img className="img-fluid scoreAnimate"
                                     alt="Career "
                                     src={career}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="discover">
                    <div className="container">
                        <div className="row p-t-20 ">
                            <div className="col-lg-12 col-md-12 col-sm-12 text-center p-t-30">
                                <h4 className="heading1 relative">Discover if you fit in</h4>
                            </div>
                        </div>
                        <div className="row p-t-80 ">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <input name='search' className='search_icon' placeholder='Search by Job title'/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 text-right">
                                <input name='search' className='search_icon' placeholder='Search by location'/>
                            </div>
                        </div>
                        <div className="row justify-content-md-center p-b-30 p-t-40">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="row justify-content-md-center boxes" style={{marginTop: 30}}>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="box-offer justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={business} alt="PayMe India"/>
                                            </div>
                                            <h3>Business Developer</h3>
                                            <p className='p-b-30'>Interested in working as a Business Developer. Our business development team is hiring. Do share your resume with us.</p>
                                            {/* <a to='#'  className='green-btn' style={{color:"#fff"}}>Apply Now</a> */}
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div
                                            className="box-offer justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={lead} alt="Remote works"/>
                                            </div>

                                            <h3>Lead Visual Designer</h3>
                                            <p className='p-b-30'>Have a zeal in designing that inspires, engages, and excites users? Do share your resume with us.</p>
                                            {/* <a to='#'  className='green-btn' style={{color:"#fff"}}>Apply Now</a> */}
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="box-offer justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={backend} alt="Flexible Timeline"/>
                                            </div>
                                            <h3>Backend Developer</h3>
                                            <p className='p-b-30'>Passionate to work in backend development? We might be a match! Do share your resume with us.</p>
                                            {/* <a to='#'  className='green-btn' style={{color:"#fff"}}>Apply Now</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-md-center boxes" style={{marginTop: 30}}>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="box-offer justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={business} alt="PayMe India"/>
                                            </div>
                                            <h3>Front-End designer</h3>
                                            <p className='p-b-30'>Enthusiastic to Contribute in Front end development?
                                                Do share your resume with us.</p>
                                            {/* <a to='#'  className='green-btn' style={{color:"#fff"}}>Apply Now</a> */}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel p-b-30">
                    <div className="container p-b-30">
                        <div className="row p-t-20 ">
                            <div className="col-lg-12 col-md-12 col-sm-12 text-center p-t-30">
                                <h4 className="heading1 relative">Our Work Culture</h4>
                            </div>
                        </div>

                        <div className="row align-items-center pb-3 p-t-30">
                            <div className="col-sm-12 col-md-6 p-t-40"><img className="img-fluid"
                                                                            alt="Craftsmanship"
                                                                            src={craftsmanship}/></div>
                            <div className="col-sm-12 col-md-1 ">
                                &nbsp;
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <h3 className="heading4 relative">Craftsmanship
                                </h3>
                                <p className="heading6">At PayMe India we work towards making a company that motivates a healthy work-life balance giving a creative environment to our workforce. We promote a friendly ambiance for the PayMe India family that nourishes and encourages free-flowing ideas and unity.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner p-b-30">
                    <div className="container p-b-30">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-5">
                                <h1 className="heading4 relative">Happy “Work” Environment</h1>
                                <p className="no-more-text">Our employees explore various opportunities and platforms, where they upgrade their innovative skills. PayMe India believes in creating a cheerful and respectful environment for our employees. Our strong, positive corporate culture helps our employees to offer their best performance at work with integrity.</p>

                            </div>
                            <div className="col-sm-12 col-md-2 ">
                                &nbsp;
                            </div>
                            <div className="col-sm-12 col-md-5 m-t-40">
                                <img className="img-fluid"
                                     alt="Matual Fund"
                                     src={happyWork}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel p-b-30">
                    <div className="container p-b-30">
                        <div className="row align-items-center pb-3">
                            <div className="col-sm-12 col-md-6 p-t-40"><img className="img-fluid"
                                                                            alt="Pay Rent using Payme app"
                                                                            src={workspace}/></div>
                            <div className="col-sm-12 col-md-1 ">
                                &nbsp;
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <h3 className="heading4 relative">Friendly Workspace</h3>
                                <p className="heading6">PayMe India firmly believes that our work culture is an intangible ecosystem where leaders and employees maintain a clear and inclusive relationship. We provide a friendly workspace to the employees, which provides them the liberty to work. We are an organization committed to work towards inclusivity and encourage our employees to return up in various forms.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="perks-we-offer">
                    <div className="container">
                        <div className="row p-t-20 ">
                            <div className="col-lg-12 col-md-12 col-sm-12 text-center p-t-30">
                                <h4 className="heading1 relative">Perks we Offer</h4>
                            </div>
                        </div>
                        <div className="row justify-content-md-center p-b-30 p-t-15">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="row justify-content-md-center boxes" style={{marginTop: 30}}>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="box-offer justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={tea} alt="PayMe India"/>
                                            </div>
                                            <h3>Coffee and Snacks</h3>
                                            <p>Keeping our employees Refreshed while they work.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div
                                            className="box-offer justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={remote} alt="Remote works"/>
                                            </div>

                                            <h3>Remote works</h3>
                                            <p>PayMe India allows employees to work from anywhere other than the office home.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="box-offer justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={timeline} alt="Flexible Timeline"/>
                                            </div>
                                            <h3>Flexible Timeline</h3>
                                            <p>The working pattern at PayMe India allows employees to fall outside traditional office hours job responsibilities.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-md-center boxes" style={{marginTop: 30}}>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="box-offer justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={allowance} alt="PayMe India"/>
                                            </div>
                                            <h3>Travel allowance</h3>
                                            <p>We pay our employees in respect of traveling expenses for business purposes.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div
                                            className="box-offer justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={health} alt="Health allowance"/>
                                            </div>
                                            <h3>Health allowance</h3>
                                            <p>At PayMe India employees get the advantage of a Health allowance.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="box-offer justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={environment} alt="Cool Environment"/>
                                            </div>
                                            <h3>Cool Environment</h3>
                                            <p>Our employees explore various chances with a friendly environment.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner" style={{paddingBottom: 0}}>
                    <div className="container">
                        <div className="row align-items-center">


                            <div className="col-sm-12 col-md-6 m-t-40">
                                <img className="img-fluid "
                                     alt="Career "
                                     src={awesomness}/>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <h2 className="heading2">Keep the awesomness in your work</h2>
                                <br/>
                                {/* <Link className="btnLarge" onClick={() => {
                                   
                                    props.history.push({pathname: '/contact'})
                                }}>
                                    Apply Now
                                </Link> */}
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

export default connect(mapStateToProps, dispatchToProps)(Career);
