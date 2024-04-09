import { useState } from 'react';


function Experience() {
    const [compName, setCompName ] = useState("");
    const [role, setRole ] = useState("");
    const [responsibilities, setResponsibilities ] = useState("");
    const [dateFromTo, setDateFromTo] = useState("");

    return (
        <> 
        <h2>Experience</h2>
        <form>
            <label>Company Name: 
                <input
                type="text"
                value={compName}
                onChange={(e) => setCompName(e.target.value)}
                />
            </label>
            <label>Role: 
                <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                />
            </label>
            <label>Responsibilities: 
                <input
                type="text"
                value={responsibilities}
                onChange={(e) => setResponsibilities(e.target.value)}
                />
            </label>
            <label>Date: 
                <input
                type="text"
                value={dateFromTo}
                onChange={(e) => setDateFromTo(e.target.value)}
                />
            </label>
            <button type='submit'>Add</button>
        </form>
        </>
    )


}

export default Experience;