function Education({ handleInput, edSubmission, formValues }) {

    return (
        <><h2>Education</h2>
        <form >
            <label>School Name:
                <input
                    type="text"
                    name="schName"
                    value={formValues.schName}
                    onChange= {handleInput}
                    />
            </label>
            <label>Subject:
                <input
                    type="text"
                    name="schSubject"
                    value={formValues.schSubject}
                    onChange= {handleInput}
                    />
            </label>
            <label>Date:
                <input
                    type="date"
                    name="schDate"
                    value={formValues.sch}
                    onChange= {handleInput}
                    />
            </label>
            <button type='submit' onClick={edSubmission}>Add </button>
        </form></>
    )
}

export default Education;