// import { useState } from "react";
// import Personal from "./Personal";

function PersonalDisplay({fName,
    // sName,
    email,
    number})
    {

    return (
        
        <div className="personalDetails">
        {/* <h2> Personal Details</h2> */}
                <h1> {fName}</h1>
                {/* <p> {sName}</p> */}
                <div className="contactDetails">
                <p> {email}</p>
                <p> {number}</p>
                </div>
                        </div>
    
    
    
    );}

export default PersonalDisplay;