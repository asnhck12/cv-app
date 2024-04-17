import { useState } from 'react'
import './App.css'
import './components/Personal'
import Personal from './components/Personal'
import Education from './components/Education'
import EducationDisplay from './components/EducationDisplay'
import PersonalDisplay from './components/PersonalDisplay'
import ExperienceDisplay from './components/ExperienceDisplay'
import Experience from './components/Experience'

function App() {

const [formData, setFormData] = useState({
  fName: '',
  sName: '',
  email: '',
  number: '',
  schName: '',
  schSubject: '',
  schDate: '',
  compName: '',
  role: '',
  responsibilities: '',
  dateFrom: '',
  dateTo: '',
})

const [eduData, setEduData] = useState({
  schName: '',
  schSubject: '',
  schDate: '',
  compName: '',
  role: '',
  responsibilities: '',
  dateFrom: '',
  dateTo: '',
})

const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.name + event.target.value)
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }))
    };

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(formData.schName);
  console.log(formData.compName);
  eduData.schName = formData.schName;
  eduData.schSubject = formData.schSubject;
  eduData.schDate = formData.schDate;
    const { name, value } = event.target;
    setEduData((prevData) => ({
        ...prevData,
        [name]: value,
    }))
  };


const handleSubmitExp = (event) => {
  event.preventDefault();
  console.log(formData.schName);
  console.log(formData.compName);
  eduData.compName = formData.compName;
  eduData.role = formData.role;
  eduData.responsibilities = formData.responsibilities;
  eduData.dateFrom = formData.dateFrom;
  eduData.dateTo = formData.dateTo;
  const { name, value } = event.target;
    setEduData((prevData) => ({
        ...prevData,
        [name]: value,
    }))
  };


  return (
    <>
      <h1>CV Builder</h1>
      <div className="main">
        <div className='edit'>
        <Personal inputChange={handleChange}/>
        <Education handleInput={handleChange} edSubmission={handleSubmit}/>
        <Experience handleInput={handleChange} expSubmission={handleSubmitExp}/>
      </div>
      <div className='preview'>
        <PersonalDisplay {...formData}/>
        <EducationDisplay {...eduData}/>
        <ExperienceDisplay {...eduData}/>
      </div>
      </div>
    </>
  )
}

export default App
