// import { useState } from "react";
// import Personal from "./Personal";

function PersonalDisplay({fName,
    sName,
    email,
    number})
    {

    return (
        
        <div className="personalDetails">
        <h2> Personal Details</h2>
                <p>First Name: {fName}</p>
                <p>Surname: {sName}</p>
                <p>Email Address: {email}</p>
                <p>Phone Number: {number}</p>        </div>
    
    
    
    );}

export default PersonalDisplay;