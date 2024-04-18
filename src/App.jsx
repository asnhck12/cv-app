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
const [eduFormData, setEduFormData] = useState(initialEduFormData)
const [expFormData, setExpFormData] = useState(intialExpFormData)

const [eduData,setEduData] = useState([]);
const [expData, setExpData] = useState([]);

const handleChange = (formName) => (event) => {
    const { name, value } = event.target;
    switch (formName) {
      case 'personal':
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }))
    break;
    case 'education':
      setEduFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }))
    break;
    case 'experience':
      setExpFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }))
    break;
    default:
    break;
    }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const newEdu = {
  schName: eduFormData.schName,
  schSubject: eduFormData.schSubject,
  schDate: eduFormData.schDate,
  }
    setEduData((prevData) => ([
        ...prevData,
        newEdu
    ]))
    setEduFormData(initialEduFormData);
  };

const handleSubmitExp = (event) => {
  event.preventDefault();
  const newExp = {
  compName: expFormData.compName,
  role: expFormData.role,
  responsibilities: expFormData.responsibilities,
  dateFrom: expFormData.dateFrom,
  dateTo: expFormData.dateTo,
}
    setExpData((prevData) => ([
        ...prevData,
        newExp
    ]))
    setExpFormData(intialExpFormData);
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
        <Personal inputChange={handleChange('personal')}/>
        <Education handleInput={handleChange('education')} edSubmission={handleSubmit} formValues={eduFormData}/>
        <Experience handleInput={handleChange('experience')} expSubmission={handleSubmitExp} formValues={expFormData}/>
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
