function Personal({ inputChange }) {    

    return (
        <>
        <h2>Personal Details</h2>
        <form>
            <label>Name: 
                <input
                type="text"
                name="fName"
                onChange={inputChange}
                />
            </label>
            <label>Email Address: 
                <input
                type="text"
                name="email"
                 onChange={inputChange}
                />
            </label>
            <label>Phone Number: 
                <input
                type="text"
                name="number"
                 onChange={inputChange}
                />
            </label>
        </form>
        </>
    )


}

export default Personal;