function Experience({handleInput, expSubmission, formValues} ) {

    return (
        <> 
        <h2>Experience</h2>
        <form>
            <label>Company Name: 
                <input
                type="text"
                name="compName"
                value={formValues.compName}
                onChange= {handleInput}
                />
            </label>
            <label>Role: 
                <input
                type="text"
                name="role"
                value={formValues.role}
                onChange= {handleInput}
                />
            </label>
            <label>Responsibilities: 
                <input
                type="text"
                name="responsibilities"
                value={formValues.responsibilities}
                onChange= {handleInput}
                />
            </label>
            <label>Date: 
                <input
                type="date"
                name="dateFrom"
                value={formValues.dateFrom}
                onChange= {handleInput}
                />
                <input
                type="date"
                name="dateTo"
                value={formValues.dateTo}
                onChange= {handleInput}
                />
            </label>
            <button type='submit'  onClick={expSubmission} >Add </button>
        </form>
        </>
    )


}

export default Experience;