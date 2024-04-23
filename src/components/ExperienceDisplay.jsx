// function ExperienceDisplay({compName,role,responsibilities,dateFrom,dateTo})
function ExperienceDisplay({expData, deleteExpEntry, editExpEntry})

{
    return (
    <div className="expDisplay">
        {expData.length > 0 && (
            <>
        <h2> Experience Details</h2>
        {expData.map((experience, index) => (
        <div key={index} className="expDetails">
        <p><strong>{experience.compName}</strong><br/>{experience.dateFrom} to {experience.dateTo} </p>
        <p>{experience.role}</p>
        <p>{experience.responsibilities}</p>
        {/* <p>{experience.dateFrom} to {experience.dateTo}</p>  */}
        <button className="expEdit" onClick={() => editExpEntry(index)}>Edit</button>
        <button className="expDelete" onClick={() => deleteExpEntry(index)}>Delete</button>
    </div>

))}
</> )}
    </div>
    )
}


export default ExperienceDisplay;