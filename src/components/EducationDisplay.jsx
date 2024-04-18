function EducationDisplay ({eduData, deleteEduEntry, editEduEntry})

{ 
    return (
        <div>
            {eduData.length > 0 && (
                <>
            <h2> Education Details</h2>
            {eduData.map((education, index) => (
        <div key={index} className="eduDetails">
            <p>School Name: {education.schName}</p>
            <p>Subject: {education.schSubject}</p>
            <p>Date Graduated: {education.schDate}</p>
            <button className="eduEdit" onClick={() => editEduEntry(index)}>Edit</button>
        <button className="eduDelete" onClick={() => deleteEduEntry(index)}>Delete</button>
        </div> ))}
        </> )}
        </div>
    )

}

export default EducationDisplay;