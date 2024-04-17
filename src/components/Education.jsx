function Education({ handleInput, edSubmission }) {

    return (
        <><h2>Education</h2>
        <form >
            <label>School Name:
                <input
                    type="text"
                    name="schName"
                    onChange= {handleInput}
                    />
            </label>
            <label>Subject:
                <input
                    type="text"
                    name="schSubject"
                    onChange= {handleInput}
                    />
            </label>
            <label>Date:
                <input
                    type="date"
                    name="schDate"
                    onChange= {handleInput}
                    />
            </label>
            <button type='submit' onClick={edSubmission}>Add </button>
        </form></>
    )
}

export default Education;