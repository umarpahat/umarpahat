import React from "react";
import {Link} from "react-router-dom";
import fourZeoFour from "../images/svg/404.svg";
function NotFoundPage() {
  return <>
    <div className="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6">
            <img className="img-fluid" alt="404" src={fourZeoFour}/>
          </div>
          <div className="col-sm-12 col-md-1 ">&nbsp;</div>
          <div className="col-sm-12 col-md-5 m-t-40">
            <h1 className="heading1">Opps Page Not Found</h1>
            <p className="heading6">Consequatur quod quam. Tempore ipsam delectus ipsam voluptates voluptate dolorem hic rerum recusandae. Quod dolores non vero cum reprehenderit. Doloremque perspiciatis placeat consequatur.</p>
            <br />
            <br />
            <Link className="btnLarge" to="/">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
    <h3>404 page not found</h3>
    <p>We are sorry but the page you are looking for does not exist.</p>
  </>;
}
export default NotFoundPage;
