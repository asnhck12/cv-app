function PersonalDisplay({fName,
    // sName,
    email,
    number})
    {

    return (
        
        <div className="personalDetails">
                <h1> {fName}</h1>
                <div className="contactDetails">
                <p> {email}</p>
                <p> {number}</p>
                </div>
                        </div>
    
    
    
    );}

export default PersonalDisplay;
