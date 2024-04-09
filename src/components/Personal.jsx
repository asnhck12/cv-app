// import { useState } from 'react';


function Personal({ inputChange }) {    
    // const [fName, setFName ] = useState("");
    // const [sName, setSName ] = useState("");
    // const [email, setEmail ] = useState("");
    // const [number, setNumber] = useState("");

    // const handleChange = (event) => {
    //     switch (event.target.name) {
    //         case "fname":
    //             setFName(event.target.name);
    //             break;
    //         case "sname":
    //             setSName(event.target.name);
    //             break;
    //         case "email":
    //             setEmail(event.target.name);
    //             break;
    //         case "number":
    //             setNumber(event.target.name);
    //             break;
    //     }
    // }

    return (
        <>
        <h2>Personal Details</h2>
        <form>
            <label>First Name: 
                <input
                type="text"
                name="fName"
                // value={fName}
                 onChange={inputChange}
                />
            </label>
            <label>Surname: 
                <input
                type="text"
                name='sName'
                // value={sName}
                 onChange={inputChange}
                />
            </label>
            <label>Email Address: 
                <input
                type="text"
                name="email"
                // value={email}
                 onChange={inputChange}
                />
            </label>
            <label>Phone Number: 
                <input
                type="text"
                name="number"
                // value={number}
                 onChange={inputChange}
                />
            </label>
        </form>
        </>
    )


}

export default Personal;