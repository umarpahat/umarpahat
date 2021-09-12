import React, {useState, useEffect} from "react";
import {hitAppUseCase} from "../store/modules/userDetails/actions";
import {connect} from "react-redux";
import {Accordion, Card, Container} from "react-bootstrap";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Footer from "./Footer";
import Header from "./Header";
import "../../src/home.css";
import MetaTags from "react-meta-tags";
import faqImg from "../images/svg/faqs.svg";
import mailBox from "../images/svg/mail-box.svg";
import starIcon from "../images/svg/star-percentage.svg";
import homeIcon from "../images/svg/home-icon.svg";
import starIconLight from "../images/svg/light-star.svg";
import starIconAqua from "../images/svg/start-aqua.svg";
import starIconGreen from "../images/svg/green-star.svg";


import {Link} from "react-router-dom"


const PayRent = (props) => {
    let [loader, setloader] = useState(false);

    return (
        <>
            <Header {...props} active="payrent" />
            <MetaTags>
                <title>Frequently Asked Questions - PayMeIndia</title>
                <meta name="description" content="Do you have questions about how the loan app works? Frequently asked questions for all
			loan related queries - PayMeIndia."/>
                <meta name="keyword"
                      content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online"/>
                <meta property="og:title" content="Frequently Asked Questions - PayMeIndia"/>
            </MetaTags>
            <div className='content'>
                <div className="banner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6">
                                <h1 className="heading1 p-b-30 p-t-80">Pay rent with your credit card and get amazing
                                    offeres</h1>

                                <div className="advertisePay ">
                                    <div>
                                        <img src={starIcon} alt='Get instant'
                                             className="img-fluid"/></div>
                                    <div>
                                        <h4>Get instant Off of 20% on the loand above 2L</h4>
                                    </div>
                                    <div>
                                        <Link to='/' className='small-green-btn'>Apply Now</Link>
                                    </div>
                                </div>
                                <div className="advertisePay">
                                    <div>
                                        <img src={homeIcon} alt='Home icon'
                                             className="img-fluid"/></div>
                                    <div>
                                        <h4>Pay your home rent and get benifits each month</h4>
                                    </div>
                                    <div>
                                        <Link to='/' className='small-green-link'>Know More</Link>
                                    </div>
                                </div>
                                <div className="advertisePay">
                                    <div>
                                        <img src={starIconLight} alt='Magnam numquam'
                                             className="img-fluid"/></div>
                                    <div>
                                        <h4>Magnam numquam dolor pariatur quia.</h4>
                                    </div>
                                    <div>
                                        <Link to='/' className='small-green-link'>Know More</Link>
                                    </div>
                                </div>
                                <div className="advertisePay">
                                    <div>
                                        <img src={starIconAqua} alt='Totam corrupti'
                                             className="img-fluid"/></div>
                                    <div>
                                        <h4>Totam corrupti eum vel consectetur nobis.</h4>
                                    </div>
                                    <div>
                                        <Link to='/' className='small-green-link'>Know More</Link>
                                    </div>
                                </div>
                                <br/>
                                <Link to='/' className='small-green-link'>View All Offers</Link>

                            </div>
                            <div className="col-sm-12 col-md-1 ">
                                &nbsp;
                            </div>
                            <div className="col-sm-12 col-md-5 m-t-40">
                                <div className="fromFrame">
                                    <div className="advertisePay" style={{marginTop: 0}}>
                                        <div>
                                            <img src={starIconGreen} alt='Totam corrupti'
                                                 className="img-fluid"/></div>
                                        <div>
                                            <strong>Pay rent of this month with Payrent app and get 20% Cashback <Link
                                                to='/' className='small-green-link'>View all</Link></strong>
                                        </div>
                                    </div>
                                    <form id='form' name='form'>

                                        <div className="form-group ms-input-group">
                                            <label className="form-label pb-2">Your Full Name</label>
                                            <input
                                                name='name'
                                                type="text"
                                                className="form-control input-field"
                                                placeholder="Enter Your Full Name"
                                                onChange={(e) => {
                                                    setName(e.target.value);
                                                }}
                                                required=""/>

                                        </div>
                                        <div className="form-group ms-input-group">
                                            <label className="form-label pb-2">Phone Number</label>
                                            <input
                                                name='phone'
                                                type="tel"
                                                maxLength='10'
                                                pattern="[0-9]+"
                                                onChange={(e) => {
                                                    e.target.value =
                                                        e.target.value.replace(/[^0-9.]{10}/g, '').replace(/(\..*)\./g, '$1')
                                                    setPhone(e.target.value)
                                                }}
                                                className="form-control input-field"
                                                placeholder="Enter Phone"
                                            />
                                        </div>
                                        <div className="form-group ms-input-group">
                                            <label className="form-label pb-2">Email</label>
                                            <input
                                                name='email'
                                                type="email"
                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                                className="form-control input-field"
                                                placeholder="Enter Email"
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                }}
                                            />
                                        </div>

                                        <a className="btnLarge m-t-40" href="/" style={{display:"block"}}>Get Started</a>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="heading7 text-center p-t-80">Frequently Asked Questions</h4>
                <div className="payRentSection">
                    <div className="container">
                        <div className="row p-b-30 p-t-30">

                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">Similique sequi doloribus neque
                                            nobis vero. Quasi odio expedita rem dolorum et ut nihil. Amet eius quo nobis
                                            quidem.</Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>Illo harum eius aut quis nobis quo autem aperiam. Nesciunt unde
                                                aut nihil sapiente aut. Voluptate ad magnam quia itaque nesciunt iusto
                                                aspernatur. Aliquam minima minus aliquid sunt est. Aut aut nihil
                                                consequuntur et sint maxime. Laborum amet illo quidem. Magni consectetur
                                                perferendis ipsum qui et vitae corrupti non. Facere qui eum quis nobis
                                                molestiae rerum commodi asperiores. Accusantium eos et aliquid saepe
                                                quidem ut
                                                Et magni ipsa et. Suscipit qui natus. Non ut dignissimos velit
                                                temporibus molestias eligendi. Qui quas deleniti.</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">Quasi molestiae quis qui
                                            repudiandae culpa deleniti officia. Fugit laborum quo. Nam enim ipsum
                                            distinctio qui et sequi error. </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                PayMe India is currently offering its sevices in
                                                Delhi/NCR, Mumbai, Pune, Hyderabad, Bengaluru and Chennai.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="2">Veniam voluptas sed corrupti
                                            deleniti. Assumenda animi tempore sunt fuga nostrum recusandae autem
                                            commodi. Odit excepturi eos nulla dolor et earum.</Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                Your loan eligibility is decided by our system basis some
                                                internal lending criteria/algo. However the same may
                                                increase over the period depending upon your repayment
                                                history.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="3">Aut molestiae quaerat suscipit
                                            voluptatibus qui. Minus nisi sequi veniam provident sed nobis. Quia nam
                                            minima occaecati vel illum sed impedit. </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>
                                                Post downloading our app, it will reflect a number of
                                                documents which are mandatory from RBI to complete you
                                                KYC. We need all those documents e.g. your salary slip,
                                                bank statement, pan details etc. to process the loan.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="4">Qui itaque dicta totam ut
                                            tenetur accusamus a. Earum id tenetur exercitationem qui. Sed recusandae
                                            qui. Culpa ullam aspernatur non sit quia facere
                                            similique. </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body>
                                                We regret to inform that we need your salary entry in your
                                                bank statement and PF deduction on your payslip to process
                                                your loan.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="5">Qui est nulla non odio. Omnis
                                            dolore magni cupiditate. Qui repellendus blanditiis impedit ut aut. Ut
                                            adipisci dicta explicabo aut voluptatum rerum.</Accordion.Toggle>
                                        <Accordion.Collapse eventKey="5">
                                            <Card.Body>
                                                You will be provided an account number which can be used
                                                for repayment. As an alternative the same shall get
                                                deducted from your provided account automatically via
                                                NACH.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="6">Modi minima omnis ipsa nam.
                                            Blanditiis voluptatem aspernatur dolore. Fuga nihil adipisci eveniet neque
                                            laboriosam dolore placeat. </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="6">
                                            <Card.Body>
                                                You will receive a notification via mobile app as well as
                                                SMS on registered mobile once the loan is approved. The
                                                amount will be credited into your account either same or
                                                next working day.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="7">Harum aperiam quidem id id sit
                                            rerum quia nihil. Non rerum voluptatem.</Accordion.Toggle>
                                        <Accordion.Collapse eventKey="7">
                                            <Card.Body>
                                                If you feel that you would not be able to pay the dues on
                                                agreed repayment date. please contact us five working days
                                                prior to your repayment date to stop the NACH and rollover
                                                the loan for another period. As an exception the loan can
                                                be rolled over only once.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="8">Et ut veritatis omnis voluptatem
                                            ipsa illum laudantium aut. Quam rerum odit aut omnis dolor tenetur deserunt
                                            ut. Nesciunt .</Accordion.Toggle>
                                        <Accordion.Collapse eventKey="8">
                                            <Card.Body>
                                                You can re-apply for a new loan post five days of your
                                                repayment.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="9">Harum aperiam quidem id id sit
                                            rerum quia nihil. Non rerum voluptatem.</Accordion.Toggle>
                                        <Accordion.Collapse eventKey="9">
                                            <Card.Body>
                                                Ideally you should inform PayMe India immediately about
                                                any such change. if our executive will not be able to
                                                reach you they may approach the references asking about
                                                your new numbers.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
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

export default connect(mapStateToProps, dispatchToProps)(PayRent);
