import { useState } from 'react'
import './App.css'
import './components/Personal'
import Personal from './components/Personal'
import Education from './components/Education'
import Experience from './components/Experience'
// import CV from './components/CV'
import PersonalDisplay from './components/PersonalDisplay'

function App() {
  // const [count, setCount] = useState(0)


  const [formData, setFormData] = useState({
    fName: '',
    sName: '',
    email: '',
    number: '',
})

const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }))
    }
;

  return (
    <>
      <h1>CV Builder</h1>
      <div className="main">
        <div className='edit'>
        <Personal inputChange={handleChange}/>
        <Education/>
        <Experience/>
      </div>
      <div className='preview'>
        {/* <CV/> */}
        <PersonalDisplay {...formData}/>
      </div>
      </div>
    </>
  )
}

export default App
