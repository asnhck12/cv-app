// function ExperienceDisplay({compName,role,responsibilities,dateFrom,dateTo})
function ExperienceDisplay({expData, deleteExpEntry, editExpEntry})

{
    return (
    <div>
        {expData.length > 0 && (
            <>
        <h2> Experience Details</h2>
        {expData.map((experience, index) => (
        <div key={index} className="expDetails">
        <p>Company: {experience.compName}</p>
        <p>Role: {experience.role}</p>
        <p>Responsibilities: {experience.responsibilities}</p>
        <p>Date From: {experience.dateFrom}</p>
        <p>Date To: {experience.dateTo}</p> 
        <button className="expEdit" onClick={() => editExpEntry(index)}>Edit</button>
        <button className="expDelete" onClick={() => deleteExpEntry(index)}>Delete</button>
    </div>

))}
</> )}
    </div>
    )
}


export default ExperienceDisplay;