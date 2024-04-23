function Education({ handleInput, edSubmission, formValues, isEditingEducation, editFormEducation, edEditSubmission }) {

    return (
        <><h2>Education</h2>
        <form >
            <label>School Name:
                <input
                    type="text"
                    name="schName"
                    value={isEditingEducation ? editFormEducation.schName : formValues.schName}
                    onChange= {handleInput}
                    />
            </label>
            <label>Subject:
                <input
                    type="text"
                    name="schSubject"
                    value={isEditingEducation ? editFormEducation.schSubject : formValues.schSubject}
                    onChange= {handleInput}
                    />
            </label>
            <label>Grade:
                <input
                    type="text"
                    name="schGrade"
                    value={isEditingEducation ? editFormEducation.schGrade : formValues.schGrade}
                    onChange= {handleInput}
                    />
            </label>
            <label>Date:
                <input
                    type="date"
                    name="schDate"
                    value={isEditingEducation ? editFormEducation.schDate : formValues.schDate}
                    onChange= {handleInput}
                    />
            </label>
            { isEditingEducation ? (
                <button type='submit' onClick={edEditSubmission}>Save </button> ) :(
            <button type='submit' onClick={edSubmission}>Add </button> )}
            
        </form></>
    )
}

export default Education;