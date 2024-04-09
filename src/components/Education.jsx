import { useState } from 'react';


function Education() {
    const [schoolName, setSchoolName ] = useState("");
    const [subject, setSubject ] = useState("");
    const [date, setDate ] = useState("");

    return (
        <><h2>Education</h2>
        <form>
            <label>School Name:
                <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)} />
            </label>
            <label>Subject:
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)} />
            </label>
            <label>Date:
                <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)} />
            </label>
            <button type='submit'>Add</button>
        </form></>
    )
}

export default Education;