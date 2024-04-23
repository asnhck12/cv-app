function EducationDisplay ({eduData, deleteEduEntry, editEduEntry})

{ 
    return (
        <div className="eduDisplay">
            {eduData.length > 0 && (
                <>
            <h2> Education Details</h2>
            {eduData.map((education, index) => (
        <div key={index} className="eduDetails">
            <p><strong>{education.schName}</strong><br/>{education.schDate}</p>
            <p>{education.schSubject}</p>
            <p>{education.schGrade}</p>
            <button className="eduEdit" onClick={() => editEduEntry(index)}>Edit</button>
        <button className="eduDelete" onClick={() => deleteEduEntry(index)}>Delete</button>
        </div> ))}
        </> )}
        </div>
    )

}

export default EducationDisplay;