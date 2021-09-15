import React, { useState, useEffect } from "react";
import { hitAppUseCase } from "../store/modules/userDetails/actions";
import { connect } from "react-redux";
import { Accordion, Card, Container } from "react-bootstrap";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Footer from "./Footer";
import Header from "./Header";
import "../../src/home.css";

import { Link } from "react-router-dom";
import $ from "jquery";
import logo from "../images/logo.png";
import faqImg from "../images/svg/faqs.svg";
import MetaTags from "react-meta-tags";
import mailBox from "../images/svg/mail-box.svg";
import mediaCover from "../images/svg/media-cover.svg";

const Faq = (props) => {
  let [loader, setloader] = useState(false);

  return (
    <>
      <Header {...props} />
      <MetaTags>
        <title>Frequently Asked Questions - PayMeIndia</title>
        <meta name="description" content="Do you have questions about how the loan app works? Frequently asked questions for all
			loan related queries - PayMeIndia." />
        <meta name="keyword" content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online" />
        <meta property="og:title" content="Frequently Asked Questions - PayMeIndia" />
      </MetaTags>
      <div className='content'>
        <div className="banner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-6">
                <h1 className="heading1 blue-color">FAQ</h1>
                <p className="no-more-text">Here are the answers to all questions</p>
                <p className="no-more-text p-t-15">We have set down many of the frequently raised questions by our users. Here’s everything you would like to know about our products & services. Go ahead, feel free to ask us anything!</p>
              </div>
              <div className="col-sm-12 col-md-1 ">
                &nbsp;
              </div>
              <div className="col-sm-12 col-md-5 m-t-40">
                <img className="img-fluid"
                     alt="Media"
                     src={faqImg}/>
              </div>
            </div>
          </div>
        </div>
        <div className="faqSection">
        <div className="container">
          <div className="row p-b-30 p-t-80">

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    1. What is a short-term loans and how does it work?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Short-term loans designed to help you for immediate
                      expenses. You are required to pay the full amount latest
                      by your next loan. We advise you to use short-term loans
                      to meet your daily expenses or EMI's however, it can be
                      used to cover overdue utility bills, unexpected car
                      repairs and other emergency medical expenses.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    2. Do you offer services in my city?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      PayMe India is currently offering its sevices in
                      Delhi/NCR, Mumbai, Pune, Hyderabad, Bengaluru and Chennai.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    3. What is my Loan eligibility/How much i can borrow?
                  </Accordion.Toggle>
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
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    4. What all documents are required to apply for a loan?
                  </Accordion.Toggle>
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
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                    5. I am getting my salary via cash, can i apply for the
                    same?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      We regret to inform that we need your salary entry in your
                      bank statement and PF deduction on your payslip to process
                      your loan.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="5">
                    6. How can i repay the loan?
                  </Accordion.Toggle>
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
                  <Accordion.Toggle as={Card.Header} eventKey="6">
                    7. How will i know if I am approved? When will i reveive my
                    fund?
                  </Accordion.Toggle>
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
                  <Accordion.Toggle as={Card.Header} eventKey="7">
                    8. What if i am unable to pay the loan agreed time?
                  </Accordion.Toggle>
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
                  <Accordion.Toggle as={Card.Header} eventKey="8">
                    9. Once the existing loan is paid, when can i apply for new
                    loan?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="8">
                    <Card.Body>
                      You can re-apply for a new loan post five days of your
                      repayment.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="9">
                    10. What if I change my job or contact details?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="9">
                    <Card.Body>
                      Ideally you should inform PayMe India immediately about
                      any such change. if our executive will not be able to
                      reach you they may approach the references asking about
                      your new numbers.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="10">
                    11. What if i default the loan?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="10">
                    <Card.Body>
                      A: If in case you have some challenges in repayment you
                      can discuss the same with your executive and find n
                      solution. However if you will stop responding our
                      calls/emails it will be considered as willful default and
                      can have several consequences, including the following: 1)
                      Financial Implications – You may be assessed a late fee if
                      you fail to make your payment by a specified period
                      following its due date, followed by the higher interest
                      charges. In addition you will be charged an electronic
                      payment/check dishonor charge if the same is returned
                      unpaid. 2) Impact on Your Credit Score – We regularly
                      report any delinquency to leading credit bureaus. All such
                      delays will be reported to credit agencies which may
                      impact your credit score. 3) Collection Activity – We may
                      attempt to collect any delinquent amount through our
                      standard collection practices, which include contacting
                      you by phone, mail, or email. We may also exercise any of
                      our rights under our loan or credit services agreements
                      with you. If we are unable to collect any delinquent
                      amount you may have with us through such actions, we may
                      also sell our debt to a third party debt buyer or initiate
                      appropriate legal action against you.',
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
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
      <Footer />
    </>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const dispatchToProps = { hitAppUseCase };

export default connect(mapStateToProps, dispatchToProps)(Faq);
