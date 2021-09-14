import React from "react";
import HashLoader from "react-spinners/HashLoader";

export default (props) => 
{
    return <> 
    <HashLoader color={props.color} loading={true} size={150} />
    </>
}

