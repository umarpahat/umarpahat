import React, {useState,useEffect} from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Cookies from 'universal-cookie';
import successAnimation from "../../images/animated/success-animation.gif";
import {API_ENDPOINT} from "../../constant";
import axios from "axios";
const cookies = new Cookies()

const Congretmessage = (props) => {

  const token = cookies.get("token");
  console.log("pramodsprops", props,token);

  
  const [professionalStatus, setProfessionalStatus] = useState();
  const [bankstatus, setBankstatus] = useState("");
  const [kycstatus, setKycStatus] = useState("");
  const [greet, setGreet] = useState(false);
 
  useEffect(() => {

    if (token) {
      let url = `${API_ENDPOINT}/api/get_document_status/`;
      let config = {
        headers: {
          Authorization: "Token " + token,
        },
      };
      axios
        .get(url, config)
        .then((response) => {
          console.log("congrats",response)
          setDocumentstatus(response.data.data[0]);
          setProfessionalStatus(
            response.data.data[0].professional_details_verified
          );
          setBankstatus(response.data.data[0].bank_details_verified);
          setKycStatus(response.data.data[0].kyc_verified);
          console.log("stepmanual", response.data.data[0]);
        })
        .catch((err) => {
          if (err?.response?.status === 401) {
            cookies.remove("token", { path: "/" });
            props.history.push("/");
          }
          console.log(err);
        });
    }
  }, []);


    (kycstatus === "VERIFIED") &&
    (bankstatus === "VERIFIED") &&
    (professionalStatus === "VERIFIED" )? setGreet(true) :null;

    (kycstatus === "NOT_VALID" || kycstatus === "NOT_SUBMITTED") &&
    (bankstatus === "NOT_VALID" || bankstatus === "NOT_SUBMITTED") &&
    (professionalStatus === "NOT_VALID" || professionalStatus === "NOT_SUBMITTED")? props.history.push("/step-manual"):null;
    
    
  return (
    <>
      <Header {...props} />
      <div className='content darkBg'>
        {!greet ? (
      <Container >
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
              <br/>
              <a className='back-arrow' href=''>Back</a>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 text-center">
          <form>
            <div className="home-contact-form mt-4">
              <img src={successAnimation} className='img-fluid max-width70'  alt='Icon'/>
              <h4 className="form-heading text-center pb-3">
                Your Documents has been sumitted sucessfully.
              </h4>
              <p className="preApprovePara text-capitalize">
                You can  track your loan progress onour payme app, we keep sending minute updates on our mobile app
              </p>
          
            </div>
          </form>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 text-center">

            </div>
          </div>
      </Container>):(<Container >
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
              <br/>
              <a className='back-arrow' href=''>Back</a>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 text-center">
          <form>
            <div className="home-contact-form mt-4">
              <img src={successAnimation} className='img-fluid max-width70'  alt='Icon'/>
              <h4 className="form-heading text-center pb-3">
              Your Profile has been verified successfully.
              </h4>
              <p className="preApprovePara text-capitalize">
              You are now one step closer to get a loan, track your loan status on PayMe India App
              </p>
              <div className="pt-3">
                <a
                  href="https://play.google.com/store/apps/details?id=io.attabot.app.paymeindia"
                  className="submit-btn text-center"
                  style={{ color: "#fff" }}
                >
                  Go To App
                </a>
              </div>
            </div>
          </form>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 text-center">

            </div>
          </div>
      </Container>)}
      </div>
    </>
  );
};

export default Congretmessage;
