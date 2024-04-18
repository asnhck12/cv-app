import { useState } from 'react'
import './App.css'
import './components/Personal'
import Personal from './components/Personal'
import Education from './components/Education'
import EducationDisplay from './components/EducationDisplay'
import PersonalDisplay from './components/PersonalDisplay'
import ExperienceDisplay from './components/ExperienceDisplay'
import Experience from './components/Experience'


const initialFormData = {
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
}

const initialEduFormData = {
  schName: '',
  schSubject: '',
  schDate: '',
}

const intialExpFormData = {
  compName: '',
  role: '',
  responsibilities: '',
  dateFrom: '',
  dateTo: '',
}

function App() {

const [formData, setFormData] = useState(initialFormData);
// const [eduFormData, setEduFormData] = useState(initialEduFormData)
// const [expFormData, setExpFormData] = useState(intialExpFormData)

const [eduData,setEduData] = useState([]);
const [expData, setExpData] = useState([]);

// const [formValues, setFormValues] = useState

const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }))
    };

const handleSubmit = (event) => {
  event.preventDefault();
  const newEdu = {
  schName: formData.schName,
  schSubject: formData.schSubject,
  schDate: formData.schDate,
  }
    setEduData((prevData) => ([
        ...prevData,
        newEdu
    ]))
    setFormData(initialEduFormData);
  };

const handleSubmitExp = (event) => {
  event.preventDefault();
  const newExp = {
  compName: formData.compName,
  role: formData.role,
  responsibilities: formData.responsibilities,
  dateFrom: formData.dateFrom,
  dateTo: formData.dateTo,
}
    setExpData((prevData) => ([
        ...prevData,
        newExp
    ]))
    setFormData(intialExpFormData);
  };

const deleteEduEntry = (index) => {
  setEduData((prevData) => prevData.filter((_, i) => i !== index))
}

const deleteExpEntry = (index) => {
  setExpData((prevData) => prevData.filter((_, i) => i !== index))
}

  return (
    <>
      <h1>CV Builder</h1>
      <div className="main">
        <div className='edit'>
        <Personal inputChange={handleChange}/>
        <Education handleInput={handleChange} edSubmission={handleSubmit} formValues={formData}/>
        <Experience handleInput={handleChange} expSubmission={handleSubmitExp} formValues={formData}/>
      </div>
      <div className='preview'>
        <PersonalDisplay {...formData}/>
        <EducationDisplay eduData={eduData} deleteEduEntry={deleteEduEntry}/>
        <ExperienceDisplay expData={expData} deleteExpEntry={deleteExpEntry}/>
      </div>
      </div>
    </>
  )
}

export default App
