function ExperienceDisplay({compName,role,responsibilities,dateFrom,dateTo})

{
    return (
        <div className="expDetails">
        <h2> Experience Details</h2>
        <p>Company: {compName}</p>
        <p>Role: {role}</p>
        <p>Responsibilities: {responsibilities}</p>
        <p>Date From: {dateFrom}</p>
        <p>Date To: {dateTo}</p>
    </div>
    )
}


export default ExperienceDisplay;