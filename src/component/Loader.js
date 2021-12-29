import React from "react";
import {S3_IMAGES_URL} from "../constant";
// import HashLoader from "react-spinners/HashLoader";

export default (props) => 
{
    return <> 
    <div className="col-sm-12 col-md-14 m-t-40 d-none d-md-block d-lg-block text-center">
    <div className="loaderanimation"><img className="loaderImage"  src={S3_IMAGES_URL +'/loader.gif'}  /></div>
    </div>
    <div className="col-sm-12 col-md-6 m-t-40 d-md-none">
    <div className="loaderanimationPhone"><img className="loaderImagePhone" src={S3_IMAGES_URL +'/loader.gif'} /></div>
    </div>
    {/* <HashLoader color={props.color} loading={true} size={150} /> */}
    </>
}

