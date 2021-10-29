import React, { useState } from "react";
import axios from "axios";

const Cibilreport = (props) => {
  console.log("gender", gender);
  const [fname, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const [pan, setPan] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [street, setStreet] = useState("");
  const [pincode, setPin] = useState("");
  const [addresstype, setAddresstype] = useState("01");
  const [prefix, setPrefix] = useState("");
  const [gender, setGender] = useState("Male");
  const [error, setError] = useState("");
  const [region, setRegion] = useState("");
  const [otp, setOtp] = useState("");
  const [questionKey, setQuestionKey] = useState("");
  const [answerKey, setAnswerKey] = useState("");
  const [answer, setAnswer] = useState(8959747704);
  const [question, setQuestion] = useState("");
  const [ConfigGUID, setConfigGUID] = useState("");

  const handlePinCode = (value) => {
    if (value.length === 6) {
      setError("");
      axios
        .get(`https://api.postalpincode.in/pincode/${value}`)
        .then((res) => {
          setRegion(res.data[0].PostOffice[0].Region);
          console.log(res);
        })
        .then(() => {
          document.getElementById("pincode").classList.remove("error");
        })
        .catch((err) => {
          document.getElementById("pincode").className = "error";
          setError("Invalid PIN Code");
        });
    }
    if (value.length !== 6) {
      setError("ZIP code must be of 6 digits");
    }
  };

  const handleQuestions = () => {
    let url = "https://cibil.paymeindia.in/v1/questions";
    let data = {
      ClientKey: "ELOPK4207C",
    };
    axios
      .post(url, data)
      .then((res) => {
        console.log("question", res);
        setAnswerKey(
          res.data.GetAuthenticationQuestionsSuccess.question[0].AnswerChoice[0]
            .AnswerChoiceId
        );
        setQuestion(
          res.data.GetAuthenticationQuestionsSuccess.question[0]
            .FullQuestionText
        );
        setQuestionKey(
          res.data.GetAuthenticationQuestionsSuccess.question[0].Key
        );
        setConfigGUID(
          res.data.GetAuthenticationQuestionsSuccess.ChallengeConfigGUID
        );
       
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCibilReport = () => {
    let url = "https://cibil.paymeindia.in/v1/fullfilloffer";
    let data = {
      ClientKey: "CGPPR0137N",
  Name: {
    Title:"SHRI",
    Forename: [{name:"UDAYBHANSING"}],
    Surname: [{name:"RAJPUT"}]
  },
  IdentificationNumber: [
    {
        IdentifierName:"TaxId",
        Id:"CGPPR0137N"
    }],
  Address: {
    StreetAddress: [{
        address:"GALAXY FLAT;LUNASAN ROAD"
    },{
        address:"HIGH WAY ROAD"
    }],
    City: "Surat",
    PostalCode: "382729",
    Region: "24",
    AddressType: "01"
  },
  DateOfBirth: "1986-11-04",
  PhoneNumber: {
    
    Number: 9268703339

  },
  Email:"pankaj.savaliya1111@gmail.com",
  Gender: "Male",
  LegalCopyStatus: "Accept",
  UserConsentForDataSharing: true
    };
    console.log("data", data);
    axios
      .post(url, data)
      .then((response) => {
        handleQuestions();
        console.log("cibil", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(answer, answerKey, questionKey, ConfigGUID);

  const handleVerificationAnswer = () => {
    let url = "https://cibil.paymeindia.in/v1/verify_answers";
    let data = {
      ClientKey: pan,
      IVAnswer: [
        {
          questionKey: questionKey,
          answerKey: [
            {
              key: answerKey,
            },
          ],
          UserInputAnswer: answer,
          resendOTP: true,
          skipQuestion: true,
        },
      ],
      ChallengeConfigGUID: ConfigGUID,
    };
    console.log("verify",data)
    axios
      .post(url, data)
      .then((response) => {
        console.log("cibil verification", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCunsumerAsset = () => {
    let url = "https://cibil.paymeindia.in/v1/customer_assets";
    let data = {
      ClientKey: "FVNPS9940R",
    };
    console.log("data", data);
    axios
      .post(url, data)
      .then((response) => {
        console.log("cibil", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Pramod</h1>

      {/* <h1>Choose your gender:</h1>
        <label for="male">Male</label>
        <input type="radio" name="gender" id="male" value="male" onChange={(e)=>{
          setGender(e.target.value)
        }} checked/>
        <label for="female">Female</label>
        <input type="radio" name="gender" id="female" value="female" onChange={(e)=>{
          setGender(e.target.value)
        }}/> */}

      <div className="row" style={{ marginLeft: "6%" }}>
        <label for="name" style={{ marginLeft: "10%" }}>
          Full Name
        </label>
        <br />
        <label for="name" style={{ marginLeft: "18%" }}>
          Mobile Number
        </label>
        <br />
        <label for="name" style={{ marginLeft: "15.5%" }}>
          PAN Number
        </label>
        <br />
      </div>
      <div className="row" style={{ marginLeft: "8%" }}>
        <input
          id="pincode"
          style={{ marginBottom: "15%", marginLeft: "8%" }}
          type="number"
          value={fname}
          placeholder="Full Name"
          onChange={(e) => {
            setFname(e.target.value);
          }}
        />
        <br />

        <input
          style={{ marginBottom: "15%", marginLeft: "8%" }}
          type="text"
          value={phone}
          placeholder="Mobile Number"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <br />

        <input
          style={{ marginBottom: "15%", marginLeft: "8%" }}
          type="text"
          value={pan}
          placeholder="PAN Number"
          onChange={(e) => {
            setPan(e.target.value);
          }}
        />
        <br />
      </div>
      <div className="row" style={{ marginLeft: "6%", marginTop: "-5%" }}>
        <label for="name" style={{ marginLeft: "10%" }}>
          Email
        </label>
        <br />
        <label for="name" style={{ marginLeft: "18%" }}>
          DOB
        </label>
        <br />
        <label for="date" style={{ marginLeft: "19%" }}>
          Street Address
        </label>
        <br />
      </div>
      <div className="row" style={{ marginLeft: "15%" }}>
        <input
          style={{ marginBottom: "15%" }}
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />

        <input
          id="date"
          style={{ marginBottom: "15%", marginLeft: "6%" }}
          type="date"
          value={date}
          placeholder="DOB"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <br />

        <input
          style={{ marginBottom: "15%", marginLeft: "8%" }}
          type="text"
          value={street}
          placeholder="Street"
          onChange={(e) => {
            setStreet(e.target.value);
          }}
        />
        <br />
      </div>
      <div style={{ marginBottom: "10%", marginLeft: "10%" }}>
        <label for="pin">PIN CODE</label>

        <input
          id="pin"
          name="pin"
          placeholder="PIN CODE"
          value={pincode}
          onChange={(e) => {
            handlePinCode(e.target.value);
            setPin(e.target.value);
          }}
        />
        <br />
        <label for="typeofad">Type of Address</label>
        <select
          value="00"
          name="typeofad"
          id="typeofad"
          onChange={(e) => {
            setAddresstype(e.target.value);
          }}
        >
          <option value="01">Permanent Address</option>
          <option value="02">Residence Address</option>
          <option value="03">Office Address</option>
          <option value="04">Not Categorized</option>
        </select>
      </div>

      <button
        className="btn btn-primary"
        style={{ marginBottom: "10%", height: "35px" }}
        onClick={handleCibilReport}
      >
        Download Cibil Report
      </button>

      <input
        id="otp"
        name="otp"
        placeholder="Enter Otp Here"
        value={otp}
        onChange={(e) => {
          setOtp(e.target.value);
        }}
      />
      <button
        className="btn btn-primary"
        style={{ marginBottom: "10%", height: "35px", background: "green" }}
        onClick={handleVerificationAnswer}
      >
        Confirm Otp
      </button>
    </div>
  );
};

export default Cibilreport;
