import { useState } from 'react';

import DeleteButton from '../DeleteButton';
import ExperienceForm from './ExperienceForm';

import { removeExperience } from '../../helpers/formUtils';

import '../../styles/Experience/ExperienceElement.css';

import openIcon from '../../assets/images/open.svg';

export default function ExperienceElement({ element, formData, setFormData }) {
  const [title, setTitle] = useState(element.title);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <li className='experience-element'>
      <div className='experience-header'>
        <h2 className='experience-title'>{title || 'Title'}</h2>
        <img
          onClick={() => setIsVisible(!isVisible)}
          src={openIcon}
          alt='Collapse education icon'
          className={'collapse-education-icon' + (isVisible ? ' visible' : '')}
        />
      </div>
      {isVisible && (
        <ExperienceForm
          element={element}
          formData={formData}
          setFormData={setFormData}
          setTitle={setTitle}
        />
      )}
      <DeleteButton
        onClick={() => setFormData(removeExperience(formData, element.id))}
      />
      <hr />
    </li>
  );
}
