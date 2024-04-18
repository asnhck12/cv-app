function Experience({handleInput, expSubmission, formValues, isEditingExperience, editFormExperience, expEditSubmission} ) {

    return (
        <> 
        <h2>Experience</h2>
        <form>
            <label>Company Name: 
                <input
                type="text"
                name="compName"
                value={isEditingExperience ? editFormExperience.compName : formValues.compName}
                onChange= {handleInput}
                />
            </label>
            <label>Role: 
                <input
                type="text"
                name="role"
                value={isEditingExperience ? editFormExperience.role : formValues.role}
                onChange= {handleInput}
                />
            </label>
            <label>Responsibilities: 
                <input
                type="text"
                name="responsibilities"
                value={isEditingExperience ? editFormExperience.responsibilities : formValues.responsibilities}
                onChange= {handleInput}
                />
            </label>
            <label>Date: 
                <input
                type="date"
                name="dateFrom"
                value={isEditingExperience ? editFormExperience.dateFrom : formValues.dateFrom}
                onChange= {handleInput}
                />
                <input
                type="date"
                name="dateTo"
                value={isEditingExperience ? editFormExperience.dateTo : formValues.dateTo}
                onChange= {handleInput}
                />
            </label>
            { isEditingExperience ? (
                <button type='submit' onClick={expEditSubmission}>Save </button>
            ) : (
            <button type='submit'  onClick={expSubmission} >Add </button>
)} 
        </form>
        </>
    )


}

export default Experience;