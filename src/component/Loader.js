import React from "react";
import loaderanimation from "../images/loader.gif";
// import HashLoader from "react-spinners/HashLoader";

export default (props) => 
{
    return <> 
    <div className="col-sm-12 col-md-14 m-t-40 d-none d-md-block d-lg-block text-center">
    <div className="loaderanimation"><img className="loaderImage"  src={loaderanimation} /></div>
    </div>
    <div className="col-sm-12 col-md-6 m-t-40 d-md-none">
    <div className="loaderanimationPhone"><img className="loaderImagePhone"  src={loaderanimation} /></div>
    </div>
    {/* <HashLoader color={props.color} loading={true} size={150} /> */}
    </>
}

