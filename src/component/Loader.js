import React from "react";
import loaderanimation from "../images/loader.gif";
// import HashLoader from "react-spinners/HashLoader";

export default (props) => 
{
    return <> 
    <div className="loaderanimation"><img className="loaderImage"  src={loaderanimation} /></div>
    {/* <HashLoader color={props.color} loading={true} size={150} /> */}
    </>
}

