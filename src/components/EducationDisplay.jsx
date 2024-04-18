function EducationDisplay ({eduData, deleteEduEntry})

{ 
    return (
        <div>
            {eduData.length > 0 && (
                <>
            <h2> Education Details</h2>
            {eduData.map((education, index) => (
        <div key={index} className="expDetails">
            <p>School Name: {education.schName}</p>
            <p>Subject: {education.schSubject}</p>
            <p>Date Graduated: {education.schDate}</p>
        <button className="eduDelete" onClick={() => deleteEduEntry(index)}>Delete</button>
        </div> ))}
        </> )}
        </div>
    )

}

export default EducationDisplay;