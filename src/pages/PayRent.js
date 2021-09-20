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
import { api } from "../services/api";
import Loader from "../component/Loader";
import Confirmotpmobile from "./ApplyNowButton/Confirmotpmobile";

import Cookies from 'universal-cookie';
const cookies = new Cookies();


import {Link} from "react-router-dom"
import {API_ENDPOINT} from "../constant";


const PayRent = (props) => {
    let [loader, setloader] = useState(false);
    let [number, setnumber] = useState(null);
    let [error, seterror] = useState(null);
    let [newUser, setnewUser] = useState(false);
    const [faqs, setFaqs] = useState([]);

    useEffect(()=>{
        const url= `${API_ENDPOINT}/api/faq_list/`
        fetch(url)
            .then(res => res.json())
            .then(res => setFaqs([...res.data.General,...res.data.Eligibility,...res.data.Repayment] ))
        // .then(res => console.log('umar', [...res.data.General,...res.data.Eligibility,...res.data.Repayment] ))
    },[])
 
  
    const handleSubmit = (event) => {
        cookies.set('userCase', "pay-rent");
      event.preventDefault();
      /^[6-9]\d{9}$/.test(number)
        ? verifyPhone()
        : seterror("Please input valid 10 digit mobile number");
    };
  
    const verifyPhone = () => {
      setloader(true);
      
      api
        .post(
          `api/authentication/phone_no_verify/`,
          { phone_number: Number(number) },
          {}
        )
        .then((response) => {
          setloader(false);
          if (response.status === 200 && !response.data.phone_number_verified) {
            setnewUser(true);
          } else if (
            response.status === 200 &&
            response.data.phone_number_verified
          ) {
            props.history.push({
              pathname: "/login-with-mob-mpin",
              state: { phoneNumber: number },
            });
          } else {
            console.log(response.status);
          }
          return response;
        })
        .catch((error) => {
          if(error.response.status===401)
          {
            cookies.remove('token', { path: '/' })
          }
          console.log(error);
          setloader(false);
        });
    };

    return (
        <>
            <Header {...props} active="payrent" />

                <div className='info'>Make sure the mobile number is associated in this  specific device, we will send and verify the new number with reverse OTP.</div>
    
          {loader ? (
            <div className="loader">
              {" "}
              <Loader color={"#33658a"} />{" "}
            </div>
          ) : newUser ? (
            <Confirmotpmobile
              {...props}
              phone_number={Number(number)}
              resendOtp={verifyPhone}
            />
          ):(<div>
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
                                            <label className="form-label pb-2">Phone Number</label>
                                            <input
                                                name='phone'
                                                type="number"
                                                maxLength='10'
                                                pattern="[0-9]+"
                                                className="form-control input-field"
                                                placeholder="Enter Phone"
                                                value={number || ""}
                                                      onChange={(event) => {setnumber(event.target.value.slice(0,10))
                                                          if(event.target.value.length===0 || event.target.value.length===10)
                                                          {
                                                              seterror("");
                                                          }}}
                                                  />
                                                  {error ? (
                                                      <span style={{ color: "red" }}>{error}</span>
                                                  ) : null}
                                                
                                           
                                        </div>
                                       
                                        <a className="btnLarge m-t-40" onClick={handleSubmit} style={{display:"block",cursor:"pointer",color:"#fff"}}>Get Started</a>

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
                                    {faqs.map((item, index) => <Card><Accordion.Toggle as={Card.Header} eventKey={index === 0 ? '0' : index}>{item.question}</Accordion.Toggle><Accordion.Collapse eventKey={index === 0 ? '0' : index}><Card.Body>{item.answer}</Card.Body></Accordion.Collapse></Card>)}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </div> )}
        </>
    );
};
const mapStateToProps = (state) => {
    return {};
};

const dispatchToProps = {hitAppUseCase};

export default connect(mapStateToProps, dispatchToProps)(PayRent);
