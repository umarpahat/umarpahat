import React, { useState, useEffect } from "react";
import { hitAppUseCase } from "../store/modules/userDetails/actions";
import { connect } from "react-redux";
import { Accordion, Card, Container } from "react-bootstrap";
import "./ApplyNowButton/Applybtnallcomponent.css";
import Header from "./Header";
import "../../src/home.css";
import MetaTags from "react-meta-tags";
import Footer from "./Footer";
import {S3_IMAGES_URL} from "../constant";

const Faq = (props) => {
  let [loader, setloader] = useState(false);

  return (
    <>
      <MetaTags>
        <title>Personal Loan FAQs – Get Solution for your Personal Queries – PayMe India</title>
        <meta name="description" content="Check all Personal loan FAQs here! Get answers of your personal loan queries related to its details, application process, documentation, eligibility, calculator, interest rates, processing fees etc. Visit PayMe India to know more." />
        <meta name="keyword" content="personal loans online, quick personal loans, instant personal loan, small personal loans, instant personal loan online, instant loan online" />
        <meta property="og:title" content="Personal Loan FAQs – Get Solution for your Personal Queries – PayMe India" />
      </MetaTags>
      <Header {...props} />
      <div className='content'>
        <div className="banner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-6">
                <h1 className="heading1 blue-color">FAQ</h1>
                <p >Here are the answers to all questions</p>
                <p className="heading6 p-t-15">We have set down many of the frequently raised questions by our users. Here’s everything you would like to know about our products & services. Go ahead, feel free to ask us anything!</p>
              </div>
              <div className="col-sm-12 col-md-1 ">
                &nbsp;
              </div>
              <div className="col-sm-12 col-md-5 m-t-40">
                <img className="img-fluid"
                     alt="Media"
                     src={S3_IMAGES_URL+'/svg/faqs.svg'}
                     />
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
                  <p className="heading6 " style={{marginLeft:20}}>
                      
                      Short-term loans designed to help you for immediate
                      expenses. You are required to pay the full amount latest
                      by your next loan. We advise you to use short-term loans
                      to meet your daily expenses or EMI's however, it can be
                      used to cover overdue utility bills, unexpected car
                      repairs and other emergency medical expenses.
                     
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    2. Do you offer services in my city?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                  <p className="heading6 " style={{marginLeft:20}}>
                      PayMe India is currently offering its sevices in
                      Delhi/NCR, Mumbai, Pune, Hyderabad, Bengaluru and Chennai.
                   </p>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    3. What is my Loan eligibility/How much i can borrow?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                  <p className="heading6 " style={{marginLeft:20}}>
                      Your loan eligibility is decided by our system basis some
                      internal lending criteria/algo. However the same may
                      increase over the period depending upon your repayment
                      history.
                   </p>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    4. What all documents are required to apply for a loan?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                  <p className="heading6 " style={{marginLeft:20}}>
                      Post downloading our app, it will reflect a number of
                      documents which are mandatory from RBI to complete you
                      KYC. We need all those documents e.g. your salary slip,
                      bank statement, pan details etc. to process the loan.
                   </p>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                    5. I am getting my salary via cash, can i apply for the
                    same?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                  <p className="heading6 " style={{marginLeft:20}}>
                      We regret to inform that we need your salary entry in your
                      bank statement and PF deduction on your payslip to process
                      your loan.
                   </p>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="5">
                    6. How can i repay the loan?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="5">
                  <p className="heading6 " style={{marginLeft:20}}>
                      You will be provided an account number which can be used
                      for repayment. As an alternative the same shall get
                      deducted from your provided account automatically via
                      NACH.
                   </p>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="6">
                    7. How will i know if I am approved? When will i reveive my
                    fund?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="6">
                  <p className="heading6 " style={{marginLeft:20}}>
                      You will receive a notification via mobile app as well as
                      SMS on registered mobile once the loan is approved. The
                      amount will be credited into your account either same or
                      next working day.
                   </p>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="7">
                    8. What if i am unable to pay the loan agreed time?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="7">
                  <p className="heading6 " style={{marginLeft:20}}>
                      If you feel that you would not be able to pay the dues on
                      agreed repayment date. please contact us five working days
                      prior to your repayment date to stop the NACH and rollover
                      the loan for another period. As an exception the loan can
                      be rolled over only once.
                   </p>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="8">
                    9. Once the existing loan is paid, when can i apply for new
                    loan?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="8">
                  <p className="heading6 " style={{marginLeft:20}}>
                      You can re-apply for a new loan post five days of your
                      repayment.
                   </p>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="9">
                    10. What if I change my job or contact details?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="9">
                  <p className="heading6 " style={{marginLeft:20}}>
                      Ideally you should inform PayMe India immediately about
                      any such change. if our executive will not be able to
                      reach you they may approach the references asking about
                      your new numbers.
                   </p>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="10">
                    11. What if i default the loan?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="10">
                  <p className="heading6 " style={{marginLeft:20}}>
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
                   </p>
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

const dispatchToProps = { hitAppUseCase };

export default connect(mapStateToProps, dispatchToProps)(Faq);
