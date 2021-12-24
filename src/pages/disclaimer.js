import React, {useState, useEffect} from "react";
import {hitAppUseCase} from "../store/modules/userDetails/actions";
import {connect} from "react-redux";
import {Container} from "react-bootstrap";
import Loader from "../component/Loader";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Header from "./Header";
import "../../src/home.css";
import {Link} from "react-router-dom";
import $ from "jquery";
import MetaTags from "react-meta-tags";
import termsCondition from "../images/svg/terms-and-condition.svg";
import mailBox from "../images/svg/mail-box.svg";
import Footer from "./Footer";



const Disclaimer = (props) => {
    let [loader, setloader] = useState(false);

    return (
        <>
            <MetaTags>
                <title>Loan Application Disclaimer – PayMe India</title>
                <meta name="description" content="This section of PayMe India includes data protection notice, disclaimer of liability, copyright and limited reproduction permissions and much more."/>
                <meta name="keyword"
                      content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
                <meta property="og:title" content="Loan Application Disclaimer – PayMe India"/>
            </MetaTags>
            <Header {...props} />
            <div className='content'>
                <div className="services">
                    <div className="container">
                        <div className="row align-items-center p-b-30">
                            <div className="col col-md-12 reg-second-heading">
                                <h1 className='heading1 blue-color'>Disclaimer</h1>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col col-md-5 reg-second-heading hideMobile">
                                    <img className="img-fluid" src={termsCondition} alt="Icons"/>
                                </div>
                                <div className="col col-md-7">
                                    <h5 className='blue-color h3 p-t-20'>DATA Protection Notice</h5>
                                    <p>
                                        Details of your name, e-mail address and any other personal
                                        information about you which you include in response to parts of
                                        this website comprise "personal data" for the purposes of the
                                        Data Protection Act 1998. We therefore require you to give you
                                        the following information.
                                    </p>
                                    <p>We will not pass your details on to any third party.</p>
                                    <p>
                                        If you ask to be included on the list to receive any of our
                                        newsletters, we will use this personal data to send them to you
                                        each quarter.
                                    </p>
                                    <p>
                                        We will not pass your details on to any third party and you may
                                        request to be removed from our lists at any time by e-mailing or
                                        writing to us and stating which lists and /or newsletters you
                                        wish to be removed from.
                                    </p>
                                    <p>
                                        By providing us with your mailing details on the appropriate
                                        page, you are deemed to have consented to these forms of
                                        processing.
                                    </p>
                                    <p>
                                        Under the Data Protection Act you have the right to access your
                                        personal data held by us and to correct any inaccuracies in that
                                        information.
                                    </p>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col col-md-12">
                                    <h5 className='blue-color h3 p-t-20'>Disclaimer of Liability</h5>
                                    <p>
                                        The contents of these pages and content reproduction is
                                        prohibited other than in accordance with the following full
                                        copyright notice and limited reproduction permissions.
                                    </p>
                                    <p>
                                        These pages and any e-zines which we may send you from time to
                                        time contain general information only and do not constitute
                                        advice on any specific legal matter.
                                    </p>
                                    <p>
                                        If you require advice on any specific legal problem or matter
                                        please contact one of our lawyers listed.
                                    </p>
                                    <p>
                                        PayMe India assumes no responsibility for information contained
                                        on this site and disclaims all liability in respect of such
                                        information.
                                    </p>
                                    <p>Copyright© 2021 PayMeIndia.in</p>
                                    <p>
                                        PayMe India has no control over, and will accept no
                                        responsibility or liability in respect of, material on any web
                                        site that is not under the control of PayMe India.
                                    </p>
                                    <p>
                                        The inclusion of links to Third Party Web Sites does not imply
                                        any endorsement of the material on them or any association with
                                        their operators. PayMe India is not responsible for the privacy
                                        or data protection practices of third party websites.
                                    </p>
                                    <p>
                                        By following a link from this website to a third party website
                                        you may be supplying data directly to a third party.
                                    </p>


                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-md-5 reg-second-heading hideMobile">
                                    <img className="img-fluid" src={termsCondition} alt="Icons"/>
                                </div>
                                <div className="col col-md-7">
                                    <h5 className='blue-color h3 p-t-20'>Copyright and Limited Reproduction
                                        Permissions</h5>
                                    <p>Licence to copy for personal use</p>
                                    <p>
                                        You may print or download to a local hard disk extracts from
                                        these pages for your personal use only.
                                    </p>
                                    <p>Licence to recopy for limited purposes.</p>
                                    <p>
                                        You may recopy the material to individual third parties for
                                        their personal information only, but only if:
                                    </p>
                                    <ol type="a">
                                        <li>
                                            you acknowledge PayMe India web pages as the source of the
                                            material. You must include such acknowledgement and Batchelors
                                            Solicitors web address ({" "}
                                            <Link style={{fontWeight:400}} to={{pathname:'https://www.paymeindia.in'}}>
                                                www.PayMeindia.in
                                            </Link>
                                            ) in the copy of the material; and
                                        </li>
                                        <li>
                                            you inform the third party that these conditions apply to him
                                            or her and that he or she must comply with them. This licence
                                            to recopy does not permit incorporation of the material or any
                                            part of it in any other work or publication, whether in hard
                                            copy or electronic or any other form. In particular (but
                                            without limitation) no part of the PayMe India web pages may be
                                            distributed or copied for any commercial purpose.
                                        </li>
                                    </ol>
                                    <p>
                                        No part of PayMeindia web pages may be reproduced on or
                                        transmitted to or stored in any other web site or other form of
                                        electronic retrieval system.
                                    </p>
                                </div>
                            </div>
                            <div className="row justify-content-md-center text-center p-t-30">

                                <div className="col col-md-7">
                                    <h5 className='blue-color h3 p-t-20'>Downloads and e-mail</h5>
                                    <p>
                                        This site allows for downloading of files. We do not accept
                                        liability for any loss or damage which may result from the
                                        downloading or e mailing of any of these files.
                                    </p>
                                    <p>
                                        Email is not secure and can be intercepted, corrupted or
                                        amended.
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

export default connect(mapStateToProps, dispatchToProps)(Disclaimer);
