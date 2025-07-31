import { useState } from 'react';

import PersonalForm from './components/Personal/PersonalForm';
import AddButton from './components/AddButton';
import EducationContainer from './components/Education/EducationContainer';
import ExperienceContainer from './components/Experience/ExperienceContainer';
import EducationItem from './components/Summary/EducationItem';
import ExperienceItem from './components/Summary/ExperienceItem';

import { initialData } from './data/initialFormData';
import { addEducation, addExperience } from './helpers/formUtils';

import './styles/index.css';
import './styles/ResumeSummary.css';

import openIcon from './assets/images/open.svg';
import mailIcon from './assets/images/mail.svg';
import phoneIcon from './assets/images/call.svg';
import profilePic from './assets/images/caine.jpeg';

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
      <div className='resume-summary'>
        <div className='personal-summary'>
          <div className='photo-container'>
            <img src={formData.personal.photo} alt='Profile photo' />
          </div>
          <div className='information-container'>
            <h1 className='candidate-name'>{formData.personal.fullName}</h1>
            <div className='contact-container'>
              <div className='candidate-mail'>
                <img src={mailIcon} alt='Mail icon' />
                {formData.personal.email}
              </div>
              <div className='candidate-phone'>
                <img src={phoneIcon} alt='Phone icon' />
                {formData.personal.phone}
              </div>
            </div>
          </div>
          <div className='summary-container'>
            <h2>Summary</h2>
            <p>{formData.personal.summary}</p>
          </div>
        </div>
        <hr />
        <div className='education-summary'>
          <h2>Education</h2>
          <div className='education-container'>
            {formData.education.map((element) => (
              <EducationItem key={element.id} element={element} />
            ))}
          </div>
        </div>
        <hr />
        <div className='experience-summary'>
          <h2>Practical Experience</h2>
          <div className='experience-container'>
            {formData.experience.map((element) => (
              <ExperienceItem key={element.id} element={element} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
