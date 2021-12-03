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
            <h1>Opps Page Not Found</h1>
            <p className="heading6 p-t-10 p-b-20">Consequatur quod quam. Tempore ipsam delectus ipsam voluptates voluptate dolorem hic rerum recusandae. Quod dolores non vero cum reprehenderit. Doloremque perspiciatis placeat consequatur.</p>
            <Link className="btnLarge" to="/">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
  </>;
}
export default NotFoundPage;
