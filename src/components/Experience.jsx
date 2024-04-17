function Experience({handleInput, expSubmission} ) {

    return (
        <> 
        <h2>Experience</h2>
        <form>
            <label>Company Name: 
                <input
                type="text"
                name="compName"
                onChange= {handleInput}
                />
            </label>
            <label>Role: 
                <input
                type="text"
                name="role"
                onChange= {handleInput}
                />
            </label>
            <label>Responsibilities: 
                <input
                type="text"
                name="responsibilities"
                onChange= {handleInput}
                />
            </label>
            <label>Date: 
                <input
                type="date"
                name="dateFrom"
                onChange= {handleInput}
                />
                <input
                type="date"
                name="dateTo"
                onChange= {handleInput}
                />
            </label>
            <button type='submit'  onClick={expSubmission} >Add </button>
        </form>
        </>
    )


}

export default Experience;