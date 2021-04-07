import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import "react-input-range/lib/css/index.css";
import "./style.css";
import "./App.css";

import Getquikloneapply from "./pages/ApplyNowButton/Getquickloneapply";
import Getstartpaymeindia from "./pages/ApplyNowButton/Getstartpaymeindia";
import Referralcode from "./pages/ApplyNowButton/Referralcode";
import Kycdetailsformpayme from "./pages/ApplyNowButton/Kycdetailsformpayme";
import Bankdetalspayme from "./pages/ApplyNowButton/Bankdetailspayme";
import Professionaldetailspayme from "./pages/ApplyNowButton/Profeesionaldetailspayme";
import SelfEmployed from "./pages/ApplyNowButton/SelfEmployed";
import Congretmessage from "./pages/ApplyNowButton/Congretmessage";
import LoginWithMobMpin from "./pages/ApplyNowButton/LoginWithmobmpin";
import ChangeMpin from "./pages/ApplyNowButton/ChangeMpin";
import Pandingapprovalform from "./pages/ApplyNowButton/Pandigapprovealform";
import Creatempn from "./pages/ApplyNowButton/Creatempn";

function Routes() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Getquikloneapply} />
        <Route exact path="/pending-approval" component={Pandingapprovalform} />
             <Route
          exact
          path="/get-start-paymeindia"
          component={Getstartpaymeindia}
        />
        <Route exact path="/referral-code" component={Referralcode} />
        <Route exact path="/create-mpin" component={Creatempn} />
        <Route exact path="/bank-details-payme" component={Bankdetalspayme} />
        <Route exact path="/self-employed" component={SelfEmployed} />
        <Route exact path="/congratulations" component={Congretmessage} />
        <Route exact path="/login-with-mob-mpin" component={LoginWithMobMpin} />
        <Route exact path="/change-mpin" component={ChangeMpin} />

        <Route
          exact
          path="/professional-details-payme"
          component={Professionaldetailspayme}
        />
        <Route exact path="/kyc-details-form" component={Kycdetailsformpayme} />
          </Switch>
          </>
    )
}

export default Routes;
