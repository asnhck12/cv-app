function EducationDisplay ({schName,schSubject,schDate})

{ 
    return (
        <div className="eduDetails">
            <h2> Education Details</h2>
            <p>School Name: {schName}</p>
            <p>Subject: {schSubject}</p>
            <p>Date Graduated: {schDate}</p>
        </div>
    )

}

export default EducationDisplay;