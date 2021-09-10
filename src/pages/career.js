import React, {useState, useEffect} from "react";
import {hitAppUseCase} from "../store/modules/userDetails/actions";
import {connect} from "react-redux";
import {Container} from "react-bootstrap";
import Loader from "../component/Loader";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Footer from "./Footer";
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
import bussiness from "../images/svg/bussiness.svg";
import remote from "../images/svg/remote.svg";
import allowance from "../images/svg/health.svg";
import health from "../images/svg/health.svg";
import environment from "../images/svg/enviroment.svg";
import MetaTags from "react-meta-tags";
import thumbnail from "../images/svg/thumb.svg";
import goldStarIcon from "../images/svg/star.svg";
import people from "../images/svg/will-stand.svg";

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
                            <div className="col-sm-12 col-md-5">
                                <h1 className="heading1">Explore Career Opportunity</h1>
                                <p className="no-more-text p-t-15">Ea doloremque dolores id. Omnis iste itaque voluptas.
                                    Esse
                                    aperiam non minus. Enim id velit deserunt hic veniam quia dolorem repellendus
                                    ducimus. Perferendis molestias error dolores qui veniam molestias voluptas. Maiores
                                    fuga aut.</p>
                                <br/>
                                <br/>
                                <Link className="btnLarge" onClick={() => {
                                    props.hitAppUseCase({useCase: 'apply-loan'})
                                    props.history.push({pathname: '/apply-loan'})
                                }}>
                                    Explore openings
                                </Link>
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
                                                <img className="img-fluid" src={bussiness} alt="PayMe India"/>
                                            </div>
                                            <h3>Business Developer</h3>
                                            <p className='p-b-30'>Cutting-edge online training modules with the power to
                                                manage and
                                                centralize data.</p>
                                            <Link to='/' className='green-btn'>Apply Now</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div
                                            className="box-offer justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={lead} alt="Remote works"/>
                                            </div>

                                            <h3>Lead Visual Designer</h3>
                                            <p className='p-b-30'>Empowers managers to review their team’s expertise and
                                                aptitudes in real
                                                time.</p>
                                            <Link to='/' className='green-btn'>Apply Now</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="box-offer justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={backend} alt="Flexible Timeline"/>
                                            </div>
                                            <h3>Backend Developer</h3>
                                            <p className='p-b-30'>Brings the entire gamut of process stakeholders on one
                                                same platform,
                                                offering.</p>
                                            <Link to='/' className='green-btn'>Apply Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-md-center boxes" style={{marginTop: 30}}>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="box-offer justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={bussiness} alt="PayMe India"/>
                                            </div>
                                            <h3>Business Developer</h3>
                                            <p className='p-b-30'>Cutting-edge online training modules with the power to
                                                manage and
                                                centralize data.</p>
                                            <Link to='/' className='green-btn'>Apply Now</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div
                                            className="box-offer justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={lead} alt="Remote works"/>
                                            </div>

                                            <h3>Lead Visual Designer</h3>
                                            <p className='p-b-30'>Empowers managers to review their team’s expertise and
                                                aptitudes in real
                                                time.</p>
                                            <Link to='/' className='green-btn'>Apply Now</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="box-offer justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={backend} alt="Flexible Timeline"/>
                                            </div>
                                            <h3>Backend Developer</h3>
                                            <p className='p-b-30'>Brings the entire gamut of process stakeholders on one
                                                same platform,
                                                offering.</p>
                                            <Link to='/' className='green-btn'>Apply Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-md-center boxes" style={{marginTop: 30}}>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="box-offer justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={bussiness} alt="PayMe India"/>
                                            </div>
                                            <h3>Business Developer</h3>
                                            <p className='p-b-30'>Cutting-edge online training modules with the power to
                                                manage and
                                                centralize data.</p>
                                            <Link to='/' className='green-btn'>Apply Now</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div
                                            className="box-offer justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={lead} alt="Remote works"/>
                                            </div>

                                            <h3>Lead Visual Designer</h3>
                                            <p className='p-b-30'>Empowers managers to review their team’s expertise and
                                                aptitudes in real
                                                time.</p>
                                            <Link to='/' className='green-btn'>Apply Now</Link>
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
                                <p className="heading6">Whether it’s our in-house coffee, onboarding service, or sales
                                    experience—we strive to be world-class in everything we do. “Am I proud to put my
                                    name on my work?” is the mantra we live by.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner p-b-30">
                    <div className="container p-b-30">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-5">
                                <h1 className="heading4 relative">Happy “Work”
                                    Environment</h1>
                                <p className="no-more-text">We choose career paths that play to our strengths and
                                    operate as one collaborative unit with diverse perspectives and backgrounds. The
                                    work we do here doesn’t just pay the bills; it makes us happy.</p>

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
                                <h3 className="heading4 relative">Friendly Workspace
                                </h3>
                                <p className="heading6">Whether it’s our in-house coffee, onboarding service, or sales
                                    experience—we strive to be world-class in everything we do. “Am I proud to put my
                                    name on my work?” is the mantra we live by.</p>
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
                                            <p>Repellendus qui nisi rem. Tempora eum vel ut aspernatur repellat est et.
                                                Quia dicta at ut consequatur dolorum omnis. </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div
                                            className="box-offer justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={remote} alt="Remote works"/>
                                            </div>

                                            <h3>Remote works</h3>
                                            <p>Repellendus qui nisi rem. Tempora eum vel ut aspernatur repellat est et.
                                                Quia dicta at ut consequatur dolorum omnis.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="box-offer justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={timeline} alt="Flexible Timeline"/>
                                            </div>
                                            <h3>Flexible Timeline</h3>
                                            <p>Repellendus qui nisi rem. Tempora eum vel ut aspernatur repellat est et.
                                                Quia dicta at ut consequatur dolorum omnis.</p>
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
                                            <p>Repellendus qui nisi rem. Tempora eum vel ut aspernatur repellat est et.
                                                Quia dicta at ut consequatur dolorum omnis. </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div
                                            className="box-offer justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={health} alt="Health allowance"/>
                                            </div>
                                            <h3>Health allowance</h3>
                                            <p>Repellendus qui nisi rem. Tempora eum vel ut aspernatur repellat est et.
                                                Quia dicta at ut consequatur dolorum omnis.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="box-offer justify-content-md-center text-center">
                                            <div className='img-box d-flex align-items-center justify-content-center'>
                                                <img className="img-fluid" src={environment} alt="Cool Environment"/>
                                            </div>
                                            <h3>Cool Environment</h3>
                                            <p>Repellendus qui nisi rem. Tempora eum vel ut aspernatur repellat est et.
                                                Quia dicta at ut consequatur dolorum omnis.

                                            </p>
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
                                <Link className="btnLarge" onClick={() => {
                                    props.hitAppUseCase({useCase: 'apply-loan'})
                                    props.history.push({pathname: '/apply-loan'})
                                }}>
                                    Apply Now
                                </Link>
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

export default connect(mapStateToProps, dispatchToProps)(Career);
