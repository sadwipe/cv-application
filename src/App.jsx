import { useState } from 'react';

import PersonalForm from './components/Personal/PersonalForm';
import AddButton from './components/AddButton';
import EducationContainer from './components/Education/EducationContainer';
import ExperienceContainer from './components/Experience/ExperienceContainer';

import { initialData } from './data/initialFormData';
import { addEducation, addExperience } from './helpers/formUtils';

import './styles/index.css';

import openIcon from './assets/images/open.svg';

export default function App() {
  const [formData, setFormData] = useState(initialData);

  // Collapse personal section
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className='resume-container'>
      <div className='resume-builder'>
        <section className='personal'>
          <div className='personal-header'>
            <h1 className='card-title'>Personal Info</h1>
            <img
              onClick={() => setIsVisible(!isVisible)}
              src={openIcon}
              alt='Collapse icon'
              className={'collapse-icon' + (isVisible ? ' visible' : '')}
            />
          </div>
          {isVisible && (
            <PersonalForm
              isVisible={isVisible}
              formData={formData}
              setFormData={setFormData}
              section='personal'
            />
          )}
        </section>

        <section className='education'>
          <h1 className='card-title'>Education</h1>
          {formData.education.length > 0 && (
            <EducationContainer formData={formData} setFormData={setFormData} />
          )}
          <AddButton
            onClick={() => {
              setFormData(addEducation(formData));
            }}
          />
        </section>

        <section className='work'>
          <h1 className='card-title'>Work Experience</h1>
          {formData.experience.length > 0 && (
            <ExperienceContainer
              formData={formData}
              setFormData={setFormData}
            />
          )}
          <AddButton
            onClick={() => {
              setFormData(addExperience(formData));
            }}
          />
        </section>
      </div>
      <div className='resume-summary'></div>
    </div>
  );
}
