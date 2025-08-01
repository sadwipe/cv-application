import { useState } from 'react';

import { removeEducation } from '../../helpers/formUtils';

import EducationForm from './EducationForm';
import DeleteButton from '../DeleteButton';

import openIcon from '../../assets/images/open.svg';

import '../../styles/Education/EducationElement.css';

export default function EducationElement({ element, formData, setFormData }) {
  const [isVisible, setIsVisible] = useState(true);
  const [title, setTitle] = useState(element.name);

  return (
    <li className='education-element'>
      <div className='education-header'>
        <h2 className='education-title'>{title || 'School'}</h2>
        <img
          onClick={() => setIsVisible(!isVisible)}
          src={openIcon}
          alt='Collapse education icon'
          className={'collapse-education-icon' + (isVisible ? ' visible' : '')}
        />
      </div>
      {isVisible && (
        <EducationForm
          element={element}
          formData={formData}
          setFormData={setFormData}
          setTitle={setTitle}
        />
      )}
      <DeleteButton
        onClick={() => setFormData(removeEducation(formData, element.id))}
      />
      <hr />
    </li>
  );
}
