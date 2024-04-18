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
}

const initialEduFormData = {
  schName: '',
  schSubject: '',
  schDate: '',
}

const initialExpFormData = {
  compName: '',
  role: '',
  responsibilities: '',
  dateFrom: '',
  dateTo: '',
}

function App() {

const [formData, setFormData] = useState(initialFormData);
const [eduFormData, setEduFormData] = useState(initialEduFormData)
const [expFormData, setExpFormData] = useState(initialExpFormData)

const [eduData,setEduData] = useState([]);
const [expData, setExpData] = useState([]);

const [isEduEditing, setIsEduEditing] = useState(false);
const [editEduIndex, setEditEduIndex] = useState(null);
const [editEduFormData, setEditEduFormData] = useState({...initialEduFormData});

const [isExpEditing, setIsExpEditing] = useState(false);
const [editExpIndex, setEditExpIndex] = useState(null);
const [editExpFormData, setEditExpFormData] = useState({...initialExpFormData});

const handleChange = (formName) => (event) => {
    const { name, value } = event.target;
    if (formName === 'personal') {
      setFormData((prevData) => ({
          ...prevData,
          [name]: value,
      }));
  } else if (formName === 'education') {
      if (isEduEditing) {
          setEditEduFormData((prevData) => ({
              ...prevData,
              [name]: value,
          }));
      } else {
          setEduFormData((prevData) => ({
              ...prevData,
              [name]: value,
          }));
      }
  } else if (formName === 'experience') {
      if (isExpEditing) {
          setEditExpFormData((prevData) => ({
              ...prevData,
              [name]: value,
          }));
      } else {
          setExpFormData((prevData) => ({
              ...prevData,
              [name]: value,
          }));
      }
  }
};

const handleSubmitEdu = (event) => {
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

const handleEditEdu = (event) => {
  event.preventDefault();
  setEduData(prevData =>
  prevData.map((entry, index) =>
  index === editEduIndex ? { ...editEduFormData } : entry
)
);

setIsEduEditing(false);
setEditEduIndex(null);
setEditEduFormData({ ...initialEduFormData })
};

const handleEditExp = (event) => {
  event.preventDefault();
  console.log(isEduEditing);
  setExpData(prevData =>
  prevData.map((entry, index) =>
  index === editExpIndex ? { ...editExpFormData } : entry
)
);

setIsExpEditing(false);
setEditExpIndex(null);
setEditExpFormData({ ...initialExpFormData })
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
    setExpFormData(initialExpFormData);
  };

const editEduEntry = (index) => {
  setIsEduEditing(true);
  setEditEduIndex(index);
  setEditEduFormData(eduData[index]);
  }
  
const editExpEntry = (index) => {
  setIsExpEditing(true);
  setEditExpIndex(index);
  setEditExpFormData(expData[index]);
}

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
        <Education handleInput={handleChange('education')} edSubmission={handleSubmitEdu} formValues={eduFormData} isEditingEducation={isEduEditing} editFormEducation={editEduFormData} edEditSubmission={handleEditEdu}/>
        <Experience handleInput={handleChange('experience')} expSubmission={handleSubmitExp} formValues={expFormData} isEditingExperience={isExpEditing} editFormExperience={editExpFormData} expEditSubmission={handleEditExp} />
      </div>
      <div className='preview'>
        <PersonalDisplay {...formData}/>
        <EducationDisplay eduData={eduData} deleteEduEntry={deleteEduEntry} editEduEntry={editEduEntry}/>
        <ExperienceDisplay expData={expData} deleteExpEntry={deleteExpEntry} editExpEntry={editExpEntry}/>
      </div>
      </div>
    </>
  )
}

export default App
