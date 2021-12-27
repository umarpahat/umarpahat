import React from "react";
import {Link} from "react-router-dom";
import fourZeoFour from "../images/svg/404.svg";
import Header from "./Header";

function NotFoundPage(props) {
  return <>
    <Header {...props} />
      <div className="container p-t-80" >
        <div className="row align-items-center p-t-20">
          <div className="col-sm-12 col-md-6">
            <img className="img-fluid" alt="404" src={fourZeoFour}/>
          </div>
          <div className="col-sm-12 col-md-1 ">&nbsp;</div>
          <div className="col-sm-12 col-md-5 p-b-30">
            <h1>Oops... Error 404</h1>
            <p className="heading6 p-t-10 p-b-20">Sorry, but the page you are looking for doesn't exist</p>
            <Link className="btnLarge" to="/">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
  </>;
}
export default NotFoundPage;
