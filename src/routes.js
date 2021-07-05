import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import "react-input-range/lib/css/index.css";
import "./style.css";
import "./App.css";

import Error from "./pages/Error";
import HomePage from "./pages/HomePage"
import about from "./pages/about"
import contact from "./pages/contact"
import faq from "./pages/faq"
import disclaimer from "./pages/disclaimer"
import refund from "./pages/refund"
import policy from "./pages/policy"
import terms from "./pages/terms"
import OurNbfcPartners from "./pages/OurNbfcPartners"
import OtherDetalisForm from "./pages/Payrent/OtherDetalisForm";
import DetailsSummary from "./pages/Payrent/DetailsSummary";
import TransactionHistory from "./pages/Payrent/TransactionHistory";
import Getquikloneapply from "./pages/ApplyNowButton/Getquickloneapply";
import Getstartpaymeindia from "./pages/ApplyNowButton/Getstartpaymeindia";
import Referralcode from "./pages/ApplyNowButton/Referralcode";
import Kycdetailsformpayme from "./pages/ApplyNowButton/Kycdetailsformpayme";
import Bankdetailspayme from "./pages/ApplyNowButton/Bankdetailspayme";
import Professionaldetailspayme from "./pages/ApplyNowButton/Profeesionaldetailspayme";
import SelfEmployed from "./pages/ApplyNowButton/SelfEmployed";
import Congretmessage from "./pages/ApplyNowButton/Congretmessage";
import LoginWithMobMpin from "./pages/ApplyNowButton/LoginWithmobmpin";
import ChangeMpin from "./pages/ApplyNowButton/ChangeMpin";
import Pandingapprovalform from "./pages/ApplyNowButton/Pandigapprovealform";
import Creatempn from "./pages/ApplyNowButton/Creatempn";
import KycOption from "./pages/ApplyNowButton/KycOption";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

function Routes() {
    return (
      <>
        <Switch>
        <Route exact path="/header" component={Header}/>
        <Route exact path="/footer" component={Footer}/>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/apply-loan" component={Getquikloneapply} />
          <Route exact path="/pay-rent" component={Getquikloneapply} />
        <Route exact path="/pending-approval" component={Pandingapprovalform} />
             <Route
          exact
          path="/get-start-paymeindia"
          component={Getstartpaymeindia}
        />
        <Route exact path="/referral-code" component={Referralcode} />
        <Route exact path="/create-mpin" component={Creatempn} />
        <Route exact path="/about" component={about} />
        <Route exact path="/contact" component={contact} />
        <Route exact path="/faq" component={faq} />
        <Route exact path="/disclaimer" component={disclaimer} />
        <Route exact path="/refund" component={refund} />
        <Route exact path="/policy" component={policy} />
        <Route exact path="/terms" component={terms} />
        <Route exact path="/ourNbfcPartners" component={OurNbfcPartners} />
        <Route exact path="/self-employed" component={SelfEmployed} />
        <Route exact path="/congratulations" component={Congretmessage} />
        <Route exact path="/login-with-mob-mpin" component={LoginWithMobMpin} />
        <Route exact path="/kycoption" component={KycOption} />
        <Route exact path="/bank-details-payme" component={Bankdetailspayme} />
        <Route exact path="/change-mpin" component={ChangeMpin} />

        <Route
          exact
          path="/professional-details-payme"
          component={Professionaldetailspayme}
        />
        <Route exact path="/kyc-details-form" component={Kycdetailsformpayme} />
        <Route
          exact
          path="/payrent-other-details"
          component={OtherDetalisForm}
        />
        <Route exact path="/detail-summary" component={DetailsSummary} />
        <Route
          exact
          path="/payrent-transaction-history"
          component={TransactionHistory}
        />
        <Route component={Error} />
          </Switch>
          </>
    )
}

export default Routes;
